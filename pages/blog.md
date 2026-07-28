---
layout: default
title: Blog Agrimycologia
description: Artigos técnicos e estudos de caso sobre fitopatologia, fisiologia vegetal e manejo de doenças de plantas.
permalink: /blog/
pagination:
  enabled: true
hero_image_preload: /assets/images/hero/hero-blog.webp
---

<section class="relative flex min-h-[45vh] items-center overflow-hidden bg-brand-deep py-20 md:min-h-[50vh] md:py-24">
  <img src="/assets/images/hero/hero-blog.webp" alt="Lavoura" class="absolute inset-0 h-full w-full object-cover"
    fetchpriority="high" width="1600" height="900">
  <div
    class="absolute inset-0 bg-black/60 lg:bg-black/0 lg:bg-gradient-to-r lg:from-black/80 lg:via-black/50 lg:via-50% lg:to-transparent">
  </div>

  <div class="relative z-10 mx-auto w-full max-w-[1200px] px-6">
    <div class="max-w-2xl text-cream">
      <h1 class="font-serif text-4xl leading-tight tracking-tight text-balance drop-shadow-md md:text-5xl lg:text-6xl">
        Blog Agrimycologia
      </h1>
      <p class="mt-6 max-w-lg text-base leading-relaxed text-cream/90 drop-shadow text-pretty sm:text-lg">
        Artigos técnicos e estudos de caso sobre fitopatologia, fisiologia vegetal e manejo de doenças de plantas.
      </p>
    </div>
  </div>
</section>

<section class="bg-cream section-py">
  <div class="mx-auto max-w-[1200px] px-6">
    {% if paginator.posts.size == 0 %}
    <div class="flex flex-col items-center justify-center py-24 text-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-brand/30"
        aria-hidden="true">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
      </svg>
      <h2 class="mt-6 font-serif text-2xl text-ink">Em breve, os primeiros artigos</h2>
      <p class="mt-2 max-w-md text-ink/60 text-pretty">
        Estamos preparando conteúdo técnico sobre fitopatologia e manejo de doenças de plantas. Volte em breve.
      </p>
    </div>
    {% else %}

    <ul class="divide-y divide-clay/15">
      {% for post in paginator.posts %}
      <li>
        <a href="{{ post.url }}" class="group flex flex-col gap-6 py-8 md:flex-row md:gap-8">
          {% if post.cover %}
          <div class="w-full shrink-0 overflow-hidden md:w-64">
            <img src="{{ post.cover }}" alt="{{ post.cover_alt | default: post.title }}" loading="lazy"
              class="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-40"
              width="640" height="360">
          </div>
          {% endif %}

          <div class="flex flex-col justify-center">
            <p class="text-xs font-medium uppercase tracking-wider text-brand/60">
              {% include data-pt.html date=post.date %}
            </p>
            <h2
              class="mt-2 font-serif text-2xl text-brand transition-colors group-hover:text-accent md:text-3xl text-balance">
              {{ post.title }}
            </h2>
            {% if post.excerpt %}
            <p class="mt-3 text-ink/70 leading-relaxed text-pretty">
              {{ post.excerpt | strip_html | truncatewords: 30 }}
            </p>
            {% endif %}
          </div>
        </a>
      </li>
      {% endfor %}
    </ul>

    {% include pagination.html %}

    {% endif %}
  </div>
</section>