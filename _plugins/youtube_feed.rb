require "open-uri"
require "rexml/document"

module GrVegetal
  # Busca os últimos vídeos do canal pelo feed RSS público e coloca a lista
  # em site.data["youtube"]["videos"] durante o build. Fora de produção, ou
  # em caso de falha, a lista fica vazia e o template usa o fallback do
  # frontmatter da home.
  class YoutubeFeed < Jekyll::Generator
    MAX_VIDEOS = 3
    FEED_TEMPLATE = "https://www.youtube.com/feeds/videos.xml?channel_id=%s"

    def generate(site)
      site.data["youtube"] = { "videos" => [] }
      return unless Jekyll.env == "production"

      channel_id = site.config["youtube_channel_id"].to_s
      if channel_id.empty?
        Jekyll.logger.warn "YoutubeFeed:", "youtube_channel_id não definido no _config.yml"
        return
      end

      site.data["youtube"]["videos"] = fetch_videos(channel_id)
    rescue StandardError => error
      Jekyll.logger.warn "YoutubeFeed:", "falha ao buscar o feed (#{error.message}); usando o fallback"
    end

    private

    def fetch_videos(channel_id)
      url = format(FEED_TEMPLATE, channel_id)
      body = URI.open(url, "User-Agent" => "GRVegetalSiteBuild", open_timeout: 10, read_timeout: 10, &:read)
      document = REXML::Document.new(body)

      videos = []
      document.elements.each("feed/entry") do |entry|
        break if videos.size >= MAX_VIDEOS

        video_id = entry.elements["yt:videoId"]&.text
        next if video_id.nil?

        videos << {
          "id"    => video_id,
          "title" => entry.elements["title"]&.text.to_s.strip,
          "desc"  => short_description(entry.elements["media:group/media:description"]&.text)
        }
      end
      videos
    end

    def short_description(text, limit = 160)
      line = text.to_s.split("\n").find { |item| !item.strip.empty? }.to_s.strip
      return line if line.length <= limit

      "#{line[0, limit].rpartition(" ").first}…"
    end
  end
end