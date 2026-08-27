---
layout: default
title: Clínica Vegetal
description: Serviço de diagnose fitopatológica da GR Vegetal — identificação da causa de doenças em plantas por análise de amostras ou de fotos e vídeos, com laudo técnico e recomendações de manejo.
permalink: /clinica-vegetal/
hero_image_preload: /assets/images/hero/hero-pages.webp

hero:
  titulo: Clínica Vegetal
  subtitulo: Diagnóstico técnico de doenças de plantas, feito por quem entende do assunto, a partir das fotos e informações da sua lavoura.

o_que_e:
  title: O que é a Diagnose
  imagem: /assets/images/diagnose/o-que-e-diagnose.webp
  imagem_alt: "Planta"
  paragraphs:
    - "O serviço de Diagnose da GR Vegetal é o processo de determinação da causa de uma doença através do exame dos sintomas e sinais presentes na amostra de planta recebida em nosso laboratório, ou de fotos e vídeos que você envia da sua lavoura."
    - "A partir da análise da amostra realizamos a identificação da causa provável e emitimos um laudo técnico contendo o diagnóstico e as recomendações de manejo."

como_funciona:
  title: Como funciona
  steps:
    - number: "01"
      title: "Solicite o Serviço"
      desc: "Você preenche um formulário que gera um número de protocolo."
    - number: "02"
      title: "Envie as Informações"
      items:
        - "Se a diagnose for na modalidade <strong>SOS Doenças</strong> (online), você envia fotos e vídeos do problema. É o método mais rápido e ágil."
        - "Se a diagnose for na modalidade <strong>Clínica Vegetal</strong> você coleta e envia amostras físicas por Sedex. Toda amostra deve conter o número de protocolo gerado na contratação do serviço."
    - number: "03"
      title: "Amostras em Análise"
      desc: "Nós realizamos as análises, comunicamos e você efetua o pagamento na plataforma Hotmart."
    - number: "04"
      title: "Receba o Laudo"
      desc: "Você recebe o laudo com o diagnóstico e recomendações."
  obs: "Toda a comunicação é realizada por WhatsApp ou Email."

modalidades:
  title: Modalidades
  options:
    - name: "SOS Doenças"
      desc: "Diagnóstico remoto através de videochamada ou da análise de imagens e vídeos de sintomas na lavoura."
      price: "R$ 75,00"
    - name: "Clínica Vegetal"
      desc: "Você nos envia a amostra e realizamos a análise em laboratório. No final, você recebe um laudo com o diagnóstico."
      price: "R$ 120,00"

faq:
  title: Perguntas frequentes
  items:
    - q: "Quanto tempo demora para eu receber o laudo?"
      a: "<strong>SOS Doenças:</strong> 24h a partir do recebimento e análise das fotos e vídeos. <strong>Clínica Vegetal:</strong> De 1 a 2 semanas a partir do recebimento das amostras."
    - q: "Que tipo de foto devo enviar?"
      a: "Fotos aproximadas dos sintomas, fotos mostrando as partes da planta com sintomas, fotos de áreas da lavoura onde os sintomas estão presentes, fotos do relevo da lavoura."
    - q: "Preciso de uma conta Google para enviar as fotos?"
      a: "Sim. Como as fotos e vídeos são enviados pelo formulário, é necessário estar conectado a uma conta Google (Gmail) para conseguir anexar os arquivos."
    - q: "E se as fotos não forem suficientes para o diagnóstico?"
      a: "Neste caso é necessário enviar amostras para realizar a diagnose."
    - q: "As fotos e vídeos substituem a análise laboratorial?"
      a: "Não. O diagnóstico remoto limita-se aos sintomas visíveis nas imagens e vídeos fornecidos."

cta:
  label: Solicitar diagnose
  form_url: "https://forms.gle/iYrVoyWKRhySY6bx9" 
---

<section class="relative flex min-h-[45vh] items-center overflow-hidden bg-brand-deep py-20 md:min-h-[50vh] md:py-24">
  <img src="{{ page.hero_image_preload }}" alt="Lavoura"
    class="absolute inset-0 h-full w-full object-cover" fetchpriority="high" width="1600" height="720">
  <div class="absolute inset-0 bg-black/60 lg:bg-black/0 lg:bg-gradient-to-r lg:from-black/80 lg:via-black/50 lg:via-50% lg:to-transparent"></div>
  <div class="relative z-10 mx-auto w-full max-w-[1200px] px-6">
    <div class="max-w-2xl text-cream">
      <h1 class="font-serif text-4xl leading-tight tracking-tight text-balance drop-shadow-md md:text-5xl lg:text-6xl">
        {{ page.hero.titulo }}
      </h1>
      <p class="mt-6 max-w-lg text-base leading-relaxed text-cream/90 drop-shadow text-pretty sm:text-lg">
        {{ page.hero.subtitulo }}
      </p>
    </div>
  </div>
</section>

<section class="bg-cream section-py">
  <div class="mx-auto max-w-[1200px] px-6">
    <div class="flex flex-col items-start gap-12 lg:flex-row lg:gap-16">
      <div class="lg:flex-1">
        <h2 class="font-serif text-3xl leading-snug text-ink md:text-4xl text-balance">
          {{ page.o_que_e.title }}
        </h2>
        <div class="mt-8 space-y-6 text-lg leading-relaxed text-ink/80 text-pretty">
          {% for paragraph in page.o_que_e.paragraphs %} <p>{{ paragraph }}</p> {% endfor %} 
        </div>
      </div>
      <div class="lg:flex-1">
        <img src="{{ page.o_que_e.imagem }}" alt="{{ page.o_que_e.imagem_alt }}" loading="lazy" width="1047" height="1600" class="max-h-[500px] w-full object-cover">
      </div>
    </div>
  </div>
</section>

<section class="bg-sand section-py">
  <div class="mx-auto max-w-[1200px] px-6">
    <h2 class="font-serif text-3xl leading-snug text-ink md:text-4xl text-balance">{{ page.como_funciona.title }}</h2>

    <ol class="mt-12">
      {% for step in page.como_funciona.steps %}
      <li class="flex flex-col gap-3 border-b border-clay/15 py-8 md:flex-row md:gap-8">
        <span class="w-16 shrink-0 font-serif text-4xl leading-none text-ink/20 md:text-5xl">{{ step.number }}</span>
        <div class="md:flex-1">
          <h3 class="font-serif text-2xl text-brand text-balance">{{ step.title }}</h3>
          {% if step.desc %}
          <p class="mt-2 leading-relaxed text-ink/80 text-pretty">{{ step.desc }}</p>
          {% endif %}
          {% if step.items %}
          <ul class="mt-4 space-y-3 leading-relaxed text-ink/80 text-pretty">
            {% for item in step.items %}
            <li class="flex gap-3">
              <span class="mt-2.5 h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden="true"></span>
              <span>{{ item }}</span>
            </li>
            {% endfor %}
          </ul>
          {% endif %}
        </div>
      </li>
      {% endfor %}
    </ol>

    {% if page.como_funciona.obs %}
    <p class="mt-8 text-sm text-ink/60">{{ page.como_funciona.obs }}</p>
    {% endif %}
  </div>
</section>

<section class="bg-cream section-py">
  <div class="mx-auto max-w-[1200px] px-6">
    <h2 class="font-serif text-3xl leading-snug text-ink md:text-4xl text-balance">{{ page.modalidades.title }}</h2>

    <div class="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
      {% for opt in page.modalidades.options %}
      <div class="flex flex-col border border-clay/15 bg-linen/40 p-8">
        <h3 class="font-serif text-2xl text-brand text-balance">{{ opt.name }}</h3>
        <p class="mt-3 leading-relaxed text-ink/70 text-pretty">{{ opt.desc }}</p>
        <div class="mt-auto pt-6">
          <p class="font-serif text-3xl text-ink">{{ opt.price }}</p>
          <a href="{{ page.cta.form_url }}" class="btn btn-solid mt-6 w-full">{{ page.cta.label }}</a>
        </div>
      </div>
      {% endfor %}
    </div>
  </div>
</section>

<section class="bg-sand section-py">
  <div class="mx-auto max-w-[1200px] px-6">
    <h2 class="font-serif text-3xl leading-snug text-ink md:text-4xl text-balance">{{ page.faq.title }}</h2>
    <div class="mt-10">
      {% for item in page.faq.items %}
        {% include faq-item.html q=item.q a=item.a %}
      {% endfor %}
    </div>
  </div>
</section>