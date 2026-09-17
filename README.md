# GR Vegetal

Site institucional da GR Vegetal, consultoria agronômica especializada em fitopatologia, fisiologia vegetal e melhoramento de plantas. É um site estático de quatro páginas (Home, Mentorias, Clínica Vegetal e Blog), feito com Jekyll e Tailwind CSS.

## Stack

- **[Jekyll](https://jekyllrb.com/) 4.3** com templating Liquid
- **[Tailwind CSS v4](https://tailwindcss.com/)** pelo gem **[`jekyll-tailwind`](https://github.com/crbelaus/jekyll-tailwind)**. O Tailwind compila durante o próprio build do Jekyll (usa o `tailwindcss-ruby` por baixo), então não existe Node.js, npm nem `node_modules` no projeto.
- **Ruby 3.2.3**, fixado no arquivo `.ruby-version`
- **Fontes locais:** DM Serif Display (títulos) e DM Sans (corpo), em `.woff2`, servidas do próprio projeto
- **Deploy:** Cloudflare Pages, com preview automático por branch

Toda a configuração visual do Tailwind v4 (paleta, fontes, tokens) fica no bloco `@theme` do `assets/css/app.css`. Não existe `tailwind.config.js`.

## Pré-requisitos

- Ruby 3.2.3 (versão fixada no `.ruby-version`)
- Bundler (`gem install bundler`)

Node.js não é necessário.

## Rodando localmente

```bash
# instalar as dependências Ruby
bundle install

# subir o servidor de desenvolvimento com hot reload
bundle exec jekyll serve --livereload
```

O site fica em `http://localhost:4000`. O `jekyll serve` já compila o Tailwind a cada alteração, então não existe um comando de CSS separado: você edita uma classe num template, salva, e o CSS é reconstruído.

Para gerar a versão de produção:

```bash
JEKYLL_ENV=production bundle exec jekyll build
```

O resultado sai na pasta `_site/`.

## Estrutura do projeto

```
.
├── _config.yml            configuração do Jekyll: plugins, Tailwind, dados do site
├── Gemfile                dependências Ruby
├── .ruby-version          versão do Ruby (3.2.3)
├── _layouts/
│   ├── default.html       layout base: <head>, header, footer, botão flutuante de WhatsApp
│   ├── post.html          layout de artigo do blog
│   └── page-legal.html    layout das páginas legais (privacidade, termos)
├── _includes/             componentes reutilizáveis (header, footer, ícones, FAQ, cards de plano)
├── _posts/                artigos do blog, em Markdown
├── assets/
│   ├── css/app.css        Tailwind v4 + @theme (paleta e fontes) + componentes .btn
│   ├── fonts/             DM Serif Display + DM Sans (woff2, locais)
│   ├── images/            imagens otimizadas em WebP
│   └── js/                scripts pontuais (ex.: video-facade.js)
├── pages/
│   ├── mentorias.md       Mentorias
│   ├── diagnose.md        Clínica Vegetal
│   └── blog.md            Hub do blog
├── index.md               Home
└── 404.html               Página de erro 
```

## Como o conteúdo é organizado

O site é data-driven: o conteúdo de cada página fica no frontmatter YAML (o bloco entre `---` no topo do arquivo), e o corpo do arquivo é só estrutura HTML e Liquid, que percorre esses dados e monta a página.

Na prática, pra mudar um texto, um preço, um item de FAQ ou um botão, basta editar o YAML no topo do arquivo, sem tocar no HTML. Exemplo: na página de mentorias, os planos são uma lista no frontmatter:

```yaml
planos:
  lista:
  - nome: Plano Profissional
    descricao: "..."
    preco: "R$ 300"
    link: "https://pay.hotmart.com/..."
```

O HTML logo abaixo percorre `page.planos.lista` e renderiza os cards. Adicionar um plano é adicionar um item na lista. Assim o conteúdo fica separado da marcação, e é difícil quebrar o layout mexendo em texto.

## Estilo e design tokens

A identidade visual fica centralizada em `assets/css/app.css`:

- **Paleta:** definida como tokens no `@theme` e usada pelas classes utilitárias (`bg-brand`, `text-ink`, `bg-cream`, `text-accent`), nunca como cor crua. Pra ajustar uma cor no site inteiro, muda no `@theme`.
- **Fontes:** `font-serif` (DM Serif Display) nos títulos, `font-sans` (DM Sans) no resto.
- **Botões:** os estilos são componentes (`.btn`, `.btn-solid`, `.btn-ghost`, `.btn-solid-inverse`, `.btn-outline`), definidos no `@layer components`. Use as classes prontas em vez de recriar estilos.

## Imagens

Convenções pra manter o site leve e estável:

- Formato WebP.
- Sempre com `width` e `height` explícitos, pra evitar salto de layout (CLS) enquanto a imagem carrega.
- Imagem de hero com `fetchpriority="high"`. Imagens abaixo da dobra com `loading="lazy"`.
- O caminho da imagem de hero de cada página fica no campo `hero_image` do frontmatter, que alimenta tanto o `<img>` quanto o `<link rel="preload">` do `<head>`.

## Build e deploy

O deploy é no Cloudflare Pages, conectado ao repositório no GitHub. Cada push dispara um build.

Configuração no Cloudflare Pages:

- **Build command:** `bundle exec jekyll build`
- **Output directory:** `_site`
- **Variável de ambiente:** `JEKYLL_ENV=production`
- A versão do Ruby vem do arquivo `.ruby-version` (3.2.3), que o Cloudflare Pages lê sozinho.

Branches diferentes de `main` geram preview deployments com URLs próprias, usadas pra revisar antes de subir pra produção. A branch de produção é a `main`.

## Plugins do Jekyll

Configurados no `_config.yml` e no `Gemfile`:

- `jekyll-feed`: gera o feed RSS do blog
- `jekyll-seo-tag`: meta tags de SEO e compartilhamento (`{% seo %}` no `<head>`)
- `jekyll-sitemap`: gera o `sitemap.xml` pro Google
- `jekyll-tailwind`: roda o Tailwind v4 durante o build
- `jekyll-paginate-v2`: paginação do blog (20 posts por página)

O blog usa o permalink `/blog/:slug/`, definido no `_config.yml`.