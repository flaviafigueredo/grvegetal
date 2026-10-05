---
layout: default
title: Home
description: Consultoria agronômica especializada em fitopatologia e fisiologia vegetal, com foco em produtividade e sustentabilidade.
hero_image: /assets/images/hero/hero.webp
hero:
  image_alt: "Lavoura ao amanhecer"
  title_before: "Ciência e Inovação"
  title_after: "no Campo"
  subtitle: "Consultoria especializada em Fitopatologia e Fisiologia Vegetal, com foco em produtividade e sustentabilidade para o seu negócio."
  buttons:
  - label: "Conhecer mentorias"
    url: "/mentorias/"
    style: "btn-solid"
  - label: "Solicitar diagnose"
    url: "/clinica-vegetal/"
    style: "btn-ghost"
ciencia:
  title: "A Ciência Por Trás do Rendimento"
  paragraphs:
  - "A GR Vegetal nasceu com a proposta de conectar a pesquisa agronômica e o campo. Para isso, adotamos uma abordagem personalizada, baseada em ciência e inovação, com o objetivo de trazer para dentro da fazenda modernas técnicas de avaliação e manejo de doenças de plantas."
  - "Ao integrar conhecimentos de Fitopatologia e Fisiologia Vegetal com ferramentas de Agricultura de Precisão, como a análise multiespectral da saúde das plantas, entregamos soluções que otimizam o potencial produtivo da sua lavoura, mitigando riscos e garantindo a sustentabilidade do seu negócio."
  cards:
  - icon: "leaf"
    title: "Diagnose e Manejo Fisiopatológico"
    desc: "Estratégias de identificação e manejo nutricional de doenças de plantas"
  - icon: "signal"
    title: "Mapeamento aéreo para monitoramento da saúde das plantas"
    desc: "Uso de imagens multiespectrais para identificação de estresses bióticos e abióticos das plantas."
  - icon: "flask"
    title: "Pesquisas On-farm"
    desc: "Pesquisas independentes e customizadas para atender necessidades específicas do produtor."
servicos:
  - number: "01"
    title: "Mentorias"
    desc: "Capacitação técnica para equipes e produtores."
    url: "/mentorias/"
    cta: "Explorar"
  - number: "02"
    title: "Clínica Vegetal"
    desc: "Diagnose de doenças em campo e laboratório."
    url: "/clinica-vegetal/"
    cta: "Solicitar"
  - number: "03"
    title: "Blog Agrimycologia"
    desc: "Artigos técnicos e estudos de caso."
    url: "/blog/"
    cta: "Ler artigos"
bio:
  name: "Eng. Agr. Carlos Renato Echeveste da Rosa"
  role: "Sócio-fundador"
  paragraphs:
  - "Com mais de 25 anos de experiência em Fitopatologia, Melhoramento Vegetal e Experimentação Agronômica, lidera as investigações de campo e análise laboratoriais da GR Vegetal. Graduado em Agronomia e Ciências Biológicas, com Mestrado e Doutorado em Agronomia."
  linkedin_url: "https://www.linkedin.com/in/carlosecheveste/"
  linkedin_label: "Conectar no LinkedIn"
  image: "/assets/images/team/carlos-renato.webp"
  image_alt: "Eng. Agr. Carlos Renato Echeveste da Rosa"
videos_section:
  title: "Conhecimento Técnico em Foco"
  youtube_url: "https://www.youtube.com/@grvegetal"
  youtube_label: "Ver todos no YouTube"
  videos:
  - id: "YK-AQ08GjrQ"
    title: "Vazio Sanitário e Calendário do Plantio de Soja Safra 2026/2027"
    desc: "Neste vídeo vamos conversar sobre as datas do vazio sanitário e do calendário de semeadura da soja para o Brasil para a safra 2026/2027."
  - id: "EXNmG31aEYg"
    title: "Monitoramento de doenças de soja com auxílio de imagens multiespectrais"
    desc: "Neste vídeo compartilho uma das abordagens que adotamos na GR Vegetal para o monitoramento de doenças e diagnóstico da saúde vegetal na cultura da Soja."
  - id: "Dwq08PrsS4Q"
    title: "El Niño e produtividade do trigo no sul do Brasil - Análise Histórica"
    desc: "Neste vídeo faço uma análise baseada em dados históricos de produtividade da cultura do trigo no sul do Brasil considerando anos com e sem ocorrência do fenômeno El Niño."
cta:
  title: "Pronto para elevar o nível técnico da sua produção?"
  buttons:
  - label: "Conhecer mentorias"
    url: "/mentorias/"
    style: "btn-solid-inverse"
  - label: "Conhecer Clínica Vegetal"
    url: "/clinica-vegetal/"
    style: "btn-ghost"
---

<section class="relative flex min-h-[70vh] items-center overflow-hidden bg-brand-deep py-16 md:min-h-[85vh] md:py-0">
  <img src="{{ page.hero_image }}" alt="{{ page.hero.image_alt }}"
    class="absolute inset-0 h-full w-full object-cover" fetchpriority="high" width="1920" height="1440">

  <div
    class="absolute inset-0 bg-black/55 lg:bg-black/0 lg:bg-gradient-to-r lg:from-black/80 lg:via-black/60 lg:via-50% lg:to-transparent">
  </div>

  <div class="relative z-10 mx-auto w-full max-w-[1200px] px-6">
    <div class="max-w-2xl text-cream md:mx-auto lg:mx-0">
      <h1
        class="font-serif text-3xl leading-tight tracking-tight text-balance drop-shadow-md sm:text-4xl md:text-5xl md:whitespace-nowrap lg:text-[3.5rem]">
        {{ page.hero.title_before }} <br class="min-[467px]:hidden"> {{ page.hero.title_after }}
      </h1>
      <p class="mt-6 max-w-lg text-base leading-relaxed text-cream/90 drop-shadow text-balance sm:text-lg">
        {{ page.hero.subtitle }}
      </p>

      <div class="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
        {% for button in page.hero.buttons %}
        <a href="{{ button.url }}" class="btn {{ button.style }} w-full sm:w-auto">
          {{ button.label }}
        </a>
        {% endfor %}
      </div>
    </div>
  </div>
</section>

<section class="bg-cream section-py">
  <div class="mx-auto max-w-[1200px] px-6">
    <div class="max-w-3xl mx-auto">
      <h2 class="font-serif text-3xl leading-snug text-ink md:text-4xl lg:text-5xl text-balance">
        {{ page.ciencia.title }}
      </h2>
      <div class="mt-8 space-y-6 text-base md:text-lg leading-relaxed text-ink/80 text-pretty">
        {% for paragraph in page.ciencia.paragraphs %}
        <p>{{ paragraph }}</p>
        {% endfor %}
      </div>
    </div>

    <div class="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
      {% for card in page.ciencia.cards %}
      <div class="flex flex-col items-center border border-clay/15 bg-linen/40 p-8 text-center">
        {% case card.icon %}
        {% when 'leaf' %}
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
          class="mb-4 text-brand" aria-hidden="true">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
          <path d="M2 21c0-3 1.85-5.36 5.08-6"></path>
        </svg>
        {% when 'signal' %}
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
          class="mb-4 text-brand" aria-hidden="true">
          <path d="M4.9 16.1C1 12.2 1 5.8 4.9 1.9"></path>
          <path d="M7.8 4.7a6.14 6.14 0 0 0-.8 7.5"></path>
          <circle cx="12" cy="9" r="2"></circle>
          <path d="M16.2 4.8c2 2 2.26 5.11.8 7.47"></path>
          <path d="M19.1 1.9a9.96 9.96 0 0 1 0 14.1"></path>
          <path d="M9.5 18h5"></path>
          <path d="m8 22 4-11 4 11"></path>
        </svg>
        {% when 'flask' %}
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
          class="mb-4 text-brand" aria-hidden="true">
          <path d="M10 2v7.31"></path>
          <path d="M14 9.3V1.99"></path>
          <path d="M8.5 2h7"></path>
          <path d="M14 9.3a6.5 6.5 0 1 1-4 0"></path>
          <path d="M5.58 16.5h12.85"></path>
        </svg>
        {% endcase %}
        <h3 class="font-serif text-lg text-ink text-balance">
          {{ card.title }}
        </h3>
        <p class="mt-3 text-ink/70 text-balance">
          {{ card.desc }}
        </p>
      </div>
      {% endfor %}
    </div>
  </div>
</section>

<section class="bg-sand section-py">
  <div class="mx-auto max-w-[1200px] px-6">
    <ul>
      {% for servico in page.servicos %}
      <li>
        <a href="{{ servico.url }}"
          class="group flex flex-col gap-3 border-b border-clay/15 py-8 transition-colors hover:bg-cream/40 md:flex-row md:items-center md:justify-between md:gap-8 md:px-4">
          <div class="flex items-start gap-6">
            <span
              class="w-12 shrink-0 font-serif text-4xl leading-none text-ink/20 transition-colors group-hover:text-accent md:w-auto md:text-5xl">{{ servico.number }}</span>
            <div>
              <h3 class="font-serif text-2xl text-brand">{{ servico.title }}</h3>
              <p class="mt-1 text-ink/70">{{ servico.desc }}</p>
            </div>
          </div>
          <span
            class="ml-[calc(3rem+1.5rem)] flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-brand transition-colors group-hover:text-accent md:ml-0">
            {{ servico.cta }}
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="transition-transform group-hover:translate-x-1" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </span>
        </a>
      </li>
      {% endfor %}
    </ul>
  </div>
</section>

<section class="overflow-hidden bg-brand text-cream section-py">
  <div class="mx-auto max-w-[1200px] px-6">
    <div class="flex flex-col gap-12 pb-8 lg:flex-row lg:items-center lg:gap-16">
      <div class="lg:flex-1">
        <h2 class="font-serif text-4xl leading-tight text-cream md:text-5xl text-balance">
          {{ page.bio.name }}
        </h2>
        <h3 class="mt-2 text-sm font-medium uppercase tracking-wider text-accent">{{ page.bio.role }}</h3>

        <div class="mt-8 space-y-6 text-base md:text-lg leading-relaxed text-cream/80 text-pretty">
          {% for paragraph in page.bio.paragraphs %}
          <p>{{ paragraph }}</p>
          {% endfor %}
        </div>

        <div class="mt-8 text-center lg:text-left">
          <a href="{{ page.bio.linkedin_url }}" target="_blank" rel="noopener"
            class="btn btn-ghost w-full md:w-auto">
            {% include icon-linkedin.html size="20" %}
            {{ page.bio.linkedin_label }}
          </a>
        </div>
      </div>

      <div class="lg:flex-1">
        <div class="relative">
          <div class="absolute -inset-4 lg:translate-x-4 lg:translate-y-4 border border-accent/30" aria-hidden="true">
          </div>
          <img src="{{ page.bio.image }}" alt="{{ page.bio.image_alt }}" loading="lazy" width="1600" height="719"
            class="relative z-10 aspect-[4/3] w-full object-cover">
        </div>
      </div>
    </div>
  </div>
</section>

<section class="bg-sand section-py">
  <div class="mx-auto max-w-[1200px] px-6">
    <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <h2 class="font-serif text-3xl leading-snug text-ink md:text-4xl lg:text-5xl text-balance">
        {{ page.videos_section.title }}
      </h2>
      <a href="{{ page.videos_section.youtube_url }}" target="_blank" rel="noopener"
        class="flex shrink-0 items-center gap-2 text-sm font-medium uppercase tracking-wider text-brand transition-colors hover:text-accent">
        {{ page.videos_section.youtube_label }}
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </a>
    </div>

    {% assign section_videos = site.data.youtube.videos %}
    {% unless section_videos and section_videos.size > 0 %}
      {% assign section_videos = page.videos_section.videos %}
    {% endunless %}
    <div class="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
      {% for video in section_videos %}
      {% include video-facade.html id=video.id title=video.title desc=video.desc %}
      {% endfor %}
    </div>
  </div>
</section>

<section class="border-b border-cream/10 bg-brand text-center section-py">
  <div class="mx-auto max-w-[1200px] px-6">
    <h2 class="mx-auto max-w-2xl font-serif text-3xl leading-snug text-cream md:text-4xl text-balance">
      {{ page.cta.title }}
    </h2>
    <div class="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
      {% for button in page.cta.buttons %}
      <a href="{{ button.url }}" class="btn {{ button.style }} w-full sm:w-auto">
        {{ button.label }}
      </a>
      {% endfor %}
    </div>
  </div>
</section>

<script src="/assets/js/video-facade.js" defer></script>