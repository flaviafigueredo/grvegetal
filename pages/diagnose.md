---
layout: default
title: Clínica Vegetal
description: Serviço de diagnose fitopatológica da GR Vegetal — identificação da causa de doenças em plantas por análise de amostras ou de fotos e vídeos, com laudo técnico e recomendações de manejo.
permalink: /clinica-vegetal/
hero_image: /assets/images/hero/hero-pages.webp

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
  fluxos:
    - nome: SOS Doenças
      ilustracao: sos
      steps:
        - number: "01"
          title: "Chame no WhatsApp"
          desc: "Você fala com a gente direto pelo WhatsApp, sem formulário."
        - number: "02"
          title: "Combinamos o caminho"
          desc: "Conversamos sobre o seu problema e definimos a melhor forma de analisar: fotos, vídeos, videochamada ou um mix, conforme o caso."
        - number: "03"
          title: "Receba a orientação"
          desc: "A análise sai na hora ou em até 24h. Se precisar de um laudo técnico formal, a gente te orienta a seguir pela Clínica Vegetal."
    - nome: Clínica Vegetal
      ilustracao: clinica
      steps:
        - number: "01"
          title: "Solicite o Serviço"
          desc: "Você preenche o formulário e nós geramos um número de protocolo."
        - number: "02"
          title: "Envie a Amostra"
          desc: "Você coleta e envia a amostra física por Sedex. Toda amostra deve conter o número de protocolo gerado na solicitação."
        - number: "03"
          title: "Amostras em Análise"
          desc: "Nós realizamos as análises e avisamos quando estiverem prontas."
        - number: "04"
          title: "Receba o Laudo"
          desc: "Você efetua o pagamento na plataforma Hotmart e recebe o laudo com o diagnóstico e as recomendações."
  obs: "Toda a comunicação é realizada por WhatsApp ou Email."

galeria:
  title: Galeria de casos
  imagens:
    - src: /assets/images/diagnose/01.webp
      alt: "Caso 1"
    - src: /assets/images/diagnose/02.webp
      alt: "Caso 2"
    - src: /assets/images/diagnose/03.webp
      alt: "Caso 3"
    - src: /assets/images/diagnose/04.webp
      alt: "Caso 4"
    - src: /assets/images/diagnose/05.webp
      alt: "Caso 5"
    - src: /assets/images/diagnose/06.webp
      alt: "Caso 6"
    - src: /assets/images/diagnose/07.webp
      alt: "Caso 7"
    - src: /assets/images/diagnose/08.webp
      alt: "Caso 8"
    - src: /assets/images/diagnose/09.webp
      alt: "Caso 9"
    - src: /assets/images/diagnose/10.webp
      alt: "Caso 10"
    - src: /assets/images/diagnose/11.webp
      alt: "Caso 11"
    - src: /assets/images/diagnose/12.webp
      alt: "Caso 12"
    - src: /assets/images/diagnose/13.webp
      alt: "Caso 13"
    - src: /assets/images/diagnose/14.webp
      alt: "Caso 14"

modalidades:
  title: Modalidades
  options:
    - name: "SOS Doenças"
      desc: "Diagnóstico remoto através de videochamada ou da análise de imagens e vídeos de sintomas na lavoura."
      price: "R$ 75,00"
      cta_label: "Falar no WhatsApp"
      cta_tipo: whatsapp
    - name: "Clínica Vegetal"
      desc: "Você nos envia a amostra e realizamos a análise em laboratório. No final, você recebe um laudo com o diagnóstico."
      price: "R$ 120,00"
      cta_label: "Solicitar diagnose"
      cta_tipo: form
      form_url: "https://forms.gle/iYrVoyWKRhySY6bx9"

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
---

<section class="relative flex min-h-[45vh] items-center overflow-hidden bg-brand-deep py-20 md:min-h-[50vh] md:py-24">
  <img src="{{ page.hero_image }}" alt="Lavoura"
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
        <h2 class="font-serif text-3xl leading-snug text-ink md:text-4xl text-balance">{{ page.o_que_e.title }}</h2>
        <div class="mt-8 space-y-6 text-lg leading-relaxed text-ink/80 text-pretty">
          {% for paragraph in page.o_que_e.paragraphs %}
          <p>{{ paragraph }}</p>
          {% endfor %}
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

    <div class="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
      {% for fluxo in page.como_funciona.fluxos %}
      <div>
        <div class="mb-4 w-16 md:w-20">
          {% case fluxo.ilustracao %}
          {% when 'sos' %}
          <svg class="gr-sos" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" role="img"
            aria-label="Ilustração de atendimento rápido por conversa">
            <style>
              .gr-sos { display: block; width: 100%; height: auto; }
              .gr-sos .sprig { transform-box: fill-box; transform-origin: 50% 100%; animation: sos-sway 7s ease-in-out infinite; }
              .gr-sos .ping { transform-box: fill-box; transform-origin: center; animation: sos-ping 6s ease-in-out infinite; }
              .gr-sos .ping-2 { animation-delay: .7s; }
              @keyframes sos-sway { 0%, 100% { transform: rotate(-2.5deg); } 50% { transform: rotate(2.5deg); } }
              @keyframes sos-ping { 0%, 55%, 100% { opacity: .15; transform: scale(.9); } 25% { opacity: .7; transform: scale(1.05); } }
              @media (prefers-reduced-motion: reduce) { .gr-sos .sprig, .gr-sos .ping { animation: none; } }
            </style>
            <path d="M24 30 h52 a8 8 0 0 1 8 8 v22 a8 8 0 0 1 -8 8 h-34 l-12 11 v-11 h-6 a8 8 0 0 1 -8 -8 v-22 a8 8 0 0 1 8 -8 z"
              fill="#FDF1D8" fill-opacity="0.5" stroke="#104C48" stroke-width="3" stroke-linejoin="round" />
            <g class="sprig">
              <path d="M50 62 C50 54 50 50 50 44" fill="none" stroke="#054D35" stroke-width="3" stroke-linecap="round" />
              <path d="M50 53 C42 51 37 45 36 39 C45 39 51 45 50 53 Z" fill="#104C48" />
              <path d="M50 49 C58 46 63 40 64 34 C55 35 49 41 50 49 Z" fill="#0FCA62" />
            </g>
            <g stroke="#0FCA62" stroke-width="3" stroke-linecap="round" fill="none">
              <path class="ping" d="M80 30 a9 9 0 0 1 6 6" />
              <path class="ping ping-2" d="M78 26 a14 14 0 0 1 9 9" />
            </g>
          </svg>
          {% when 'clinica' %}
          <svg class="gr-cli" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" role="img"
            aria-label="Ilustração de análise em laboratório">
            <style>
              .gr-cli { display: block; width: 100%; height: auto; }
              .gr-cli .leaf { transform-box: fill-box; transform-origin: 50% 100%; animation: cli-sway 8s ease-in-out infinite; }
              .gr-cli .bub { transform-box: fill-box; transform-origin: center; animation: cli-rise 6s ease-in-out infinite; }
              .gr-cli .bub-2 { animation-delay: 2.4s; }
              .gr-cli .bub-3 { animation-delay: 4s; }
              @keyframes cli-sway { 0%, 100% { transform: rotate(-3deg); } 50% { transform: rotate(3deg); } }
              @keyframes cli-rise { 0% { opacity: 0; transform: translateY(6px) scale(.8); } 25% { opacity: .8; } 100% { opacity: 0; transform: translateY(-16px) scale(1); } }
              @media (prefers-reduced-motion: reduce) { .gr-cli .leaf, .gr-cli .bub { animation: none; } }
            </style>
            <path d="M42 20 v40 a8 8 0 0 0 16 0 v-40" fill="#FDF1D8" fill-opacity="0.5" stroke="#104C48" stroke-width="3"
              stroke-linecap="round" />
            <line x1="39" y1="20" x2="61" y2="20" stroke="#104C48" stroke-width="3" stroke-linecap="round" />
            <path d="M42 46 v14 a8 8 0 0 0 16 0 v-14 z" fill="#0FCA62" fill-opacity="0.25" />
            <g class="leaf">
              <path d="M50 58 C50 48 50 40 50 24" fill="none" stroke="#054D35" stroke-width="3" stroke-linecap="round" />
              <path d="M50 40 C42 38 37 32 36 26 C45 26 51 32 50 40 Z" fill="#104C48" />
              <path d="M50 34 C58 31 63 25 64 19 C55 20 49 26 50 34 Z" fill="#0FCA62" />
            </g>
            <circle class="bub" cx="47" cy="54" r="2" fill="#054D35" />
            <circle class="bub bub-2" cx="53" cy="56" r="1.6" fill="#054D35" />
            <circle class="bub bub-3" cx="50" cy="52" r="1.3" fill="#054D35" />
          </svg>
          {% endcase %}
        </div>
        <h3 class="font-serif text-2xl text-brand text-balance">{{ fluxo.nome }}</h3>
        <ol class="mt-6">
          {% for step in fluxo.steps %}
          <li class="flex gap-5 border-b border-clay/15 py-6 last:border-b-0">
            <span class="shrink-0 font-serif text-3xl leading-none text-ink/20 md:text-4xl">{{ step.number }}</span>
            <div>
              <h4 class="font-serif text-xl text-ink text-balance">{{ step.title }}</h4>
              <p class="mt-1 leading-relaxed text-ink/80 text-pretty">{{ step.desc }}</p>
            </div>
          </li>
          {% endfor %}
        </ol>
      </div>
      {% endfor %}
    </div>

    {% if page.como_funciona.obs %}
    <p class="mt-10 text-sm text-ink/60 text-center">{{ page.como_funciona.obs }}</p>
    {% endif %}
  </div>
</section>

<section class="bg-brand section-py">
  <div class="mx-auto max-w-[1200px] px-6">
    <h2 class="font-serif text-3xl leading-snug text-cream md:text-4xl text-balance">{{ page.galeria.title }}</h2>

    <div class="relative mt-12">
      <ul id="galeriaTrack"
        class="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none]">
        {% for imagem in page.galeria.imagens %}
        <li class="w-[82%] shrink-0 snap-center sm:w-[48%] lg:w-[32%]">
          <img src="{{ imagem.src }}" alt="{{ imagem.alt }}" loading="lazy" width="800" height="600"
            class="aspect-[4/3] w-full rounded object-cover">
        </li>
        {% endfor %}
      </ul>

      <div class="mt-6 flex justify-end gap-3">
        <button type="button" id="galeriaPrev" aria-label="Imagem anterior"
          class="flex h-11 w-11 items-center justify-center rounded border border-cream/30 text-cream transition hover:bg-cream/10">
          <svg viewBox="0 0 16 16" width="18" height="18" fill="currentColor" aria-hidden="true">
            <path d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
          </svg>
        </button>
        <button type="button" id="galeriaNext" aria-label="Próxima imagem"
          class="flex h-11 w-11 items-center justify-center rounded border border-cream/30 text-cream transition hover:bg-cream/10">
          <svg viewBox="0 0 16 16" width="18" height="18" fill="currentColor" aria-hidden="true">
            <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </button>
      </div>
    </div>
  </div>

  <style>
    #galeriaTrack::-webkit-scrollbar { display: none; }
  </style>
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
          {% if opt.cta_tipo == 'whatsapp' %}
          <a href="https://wa.me/{{ site.contact.whatsapp }}" target="_blank" rel="noopener" class="btn btn-solid mt-6 w-full">
            {% include icon-whatsapp.html size="20" %}
            {{ opt.cta_label }}
          </a>
          {% else %}
          <a href="{{ opt.form_url }}" class="btn btn-solid mt-6 w-full">{{ opt.cta_label }}</a>
          {% endif %}
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
<script>
  (function () {
    const track = document.getElementById("galeriaTrack");
    if (!track) return;

    const prev = document.getElementById("galeriaPrev");
    const next = document.getElementById("galeriaNext");

    // avança/volta a largura de um slide mais o gap (gap-4 = 16px)
    function stepSize() {
      const slide = track.querySelector("li");
      return slide ? slide.getBoundingClientRect().width + 16 : track.clientWidth;
    }

    prev.addEventListener("click", function () {
      track.scrollBy({ left: -stepSize(), behavior: "smooth" });
    });

    next.addEventListener("click", function () {
      track.scrollBy({ left: stepSize(), behavior: "smooth" });
    });
  })();
</script>