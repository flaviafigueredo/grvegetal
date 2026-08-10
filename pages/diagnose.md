---
layout: default
title: Diagnose
description: Diagnóstico técnico de doenças de plantas a partir de fotos e informações da sua lavoura, com laudo elaborado por especialista em Fitopatologia.
permalink: /diagnose/
hero_image_preload: /assets/images/hero/hero-pages.webp

hero:
  titulo: Diagnose
  subtitulo: Diagnóstico técnico de doenças de plantas, feito por quem entende do assunto, a partir das fotos e informações da sua lavoura.

o_que_e:
  titulo: O que é a Diagnose

como_funciona:
  titulo: Como funciona
  passos:
    - numero: "1"
      titulo: Escolha e contrate
      texto: Você contrata o serviço de diagnose pela plataforma de pagamento.
    - numero: "2"
      titulo: Envie as informações
      texto: Após a confirmação, você preenche um formulário com a descrição do problema e envia as fotos da planta ou lavoura afetada.
    - numero: "3"
      titulo: Receba o laudo
      texto: Nosso especialista analisa o material e você recebe o laudo técnico com o diagnóstico e as recomendações.

o_que_recebe:
  titulo: O que você recebe

planos:
  titulo: Contrate a Diagnose
  subtitulo: null

faq:
  titulo: Perguntas frequentes
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
      <p class="mt-6 max-w-xl text-base leading-relaxed text-cream/90 drop-shadow text-pretty sm:text-lg">
        {{ page.hero.subtitulo }}
      </p>
    </div>
  </div>
</section>

<section class="bg-cream section-py">
  <div class="mx-auto max-w-[1200px] px-6">
    <h2 class="font-serif text-3xl leading-snug text-ink md:text-4xl text-balance">{{ page.o_que_e.titulo }}</h2>

    <div class="my-6 border-2 border-dashed border-brick bg-brick/5 p-6">
      <p class="text-sm font-bold uppercase tracking-wider text-brick">✏️ Seu texto aqui</p>
      <p class="mt-3 font-medium text-ink">
        Explique o que é o serviço de diagnose em alguns parágrafos. O que a pessoa está contratando? O que você analisa? Que tipo de problema a diagnose resolve?
      </p>
      <p class="mt-2 text-sm text-ink/70">
        A pessoa acabou de chegar. Ela precisa entender rápido o que é isso e por que vale a pena.
      </p>
      <div class="mt-4 border-l-4 border-clay/30 bg-cream/60 p-4">
        <p class="text-xs font-bold uppercase tracking-wider text-clay">Exemplo de como poderia ser</p>
        <p class="mt-2 italic text-ink/70 leading-relaxed">
          A Diagnose é um serviço de diagnóstico técnico de doenças de plantas à distância. A partir de fotos e informações que você envia sobre a sua lavoura, eu analiso os sintomas e identifico o problema, indicando as causas prováveis e as recomendações de manejo. É como ter um fitopatologista olhando a sua plantação, sem precisar deslocar ninguém até a propriedade.
        </p>
      </div>
    </div>
  </div>
</section>

<section class="bg-sand section-py">
  <div class="mx-auto max-w-[1200px] px-6">
    <h2 class="font-serif text-3xl leading-snug text-ink md:text-4xl text-balance">{{ page.como_funciona.titulo }}</h2>

    <div class="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
      {% for passo in page.como_funciona.passos %}
      <div class="flex flex-col">
        <div class="flex h-12 w-12 items-center justify-center rounded-full bg-brand font-serif text-xl text-cream">
          {{ passo.numero }}
        </div>
        <h3 class="mt-5 font-serif text-xl text-ink">{{ passo.titulo }}</h3>
        <p class="mt-2 text-ink/70 leading-relaxed text-pretty">{{ passo.texto }}</p>
      </div>
      {% endfor %}
    </div>

    <div class="my-6 mt-10 border-2 border-dashed border-brick bg-brick/5 p-6">
      <p class="text-sm font-bold uppercase tracking-wider text-brick">✏️ Confirme os passos acima</p>
      <p class="mt-3 font-medium text-ink">
        Montei o passo a passo com base no que combinamos (pagamento → formulário → laudo). Confira se está certo e ajuste o texto de cada passo se precisar. Se tiver algum detalhe importante em algum passo (prazo, o que a pessoa deve fotografar, etc.), me diga.
      </p>
    </div>
  </div>
</section>

<section class="bg-cream section-py">
  <div class="mx-auto max-w-[1200px] px-6">
    <h2 class="font-serif text-3xl leading-snug text-ink md:text-4xl text-balance">{{ page.o_que_recebe.titulo }}</h2>

    <div class="my-6 border-2 border-dashed border-brick bg-brick/5 p-6">
      <p class="text-sm font-bold uppercase tracking-wider text-brick">✏️ Preciso do seu texto aqui</p>
      <p class="mt-3 font-medium text-ink">
        O que exatamente a pessoa recebe no final? Como é o laudo? Descreva o que vem dentro dele, diagnóstico, análise, recomendações de manejo, fotos, o que fizer sentido. Seria ótimo ilustrar essa seção com a imagem de um laudo real: se tiver dados sigilosos de cliente, é só trocar por dados inventados (nome, fazenda, cultura), porque o que importa aqui é o visual e a estrutura do documento, não os dados em si.
      </p>
      <p class="mt-2 text-sm text-ink/70">
        Essa seção quebra a desconfiança de "pagar antes de ver". Quanto mais claro o que ela vai receber, mais segura ela fica pra contratar. Descreva o laudo: é um PDF? Tem o quê dentro? Diagnóstico, recomendações de manejo, o que mais?
      </p>
      <div class="mt-4 border-l-4 border-clay/30 bg-cream/60 p-4">
        <p class="text-xs font-bold uppercase tracking-wider text-clay">Exemplo de como poderia ser</p>
        <p class="mt-2 italic text-ink/70 leading-relaxed">
          Você recebe um laudo técnico em PDF, enviado por e-mail ou WhatsApp, contendo: a identificação provável do problema, a análise dos sintomas observados nas fotos, as recomendações de manejo adequadas ao seu caso, e orientações sobre como prevenir a reincidência. Tudo em linguagem clara, pronto para aplicar na sua lavoura.
        </p>
      </div>
    </div>
  </div>
</section>

<section id="contratar" class="scroll-mt-24 bg-sand section-py">
  <div class="mx-auto max-w-[1200px] px-6">
    <h2 class="font-serif text-3xl leading-snug text-ink md:text-4xl text-balance">{{ page.planos.titulo }}</h2>

    <div class="my-6 border-2 border-dashed border-brick bg-brick/5 p-6">
      <p class="text-sm font-bold uppercase tracking-wider text-brick">✏️ Preciso dessas informações</p>
      <p class="mt-3 font-medium text-ink">
        Como funciona a contratação da diagnose? É preço único por diagnose? Tem pacote (ex: 3 diagnoses)? Qual o valor? E o link de checkout da Hotmart.
      </p>
      <p class="mt-2 text-sm text-ink/70">
        Se for preço único, é um card só. Se tiver opções (avulsa, pacote), me diga quais que eu ajusto.
      </p>
    </div>

    <div class="mt-8 max-w-md">
      <div class="flex flex-col border border-clay/15 bg-linen/40 p-8">
        <h3 class="font-serif text-2xl text-brand">Diagnose</h3>
        <p class="mt-3 flex-1 text-ink/70 leading-relaxed text-pretty">
          [PLACEHOLDER: descrição breve do que está incluído na diagnose]
        </p>
        <div class="mt-6 font-serif text-3xl text-ink">R$ [valor]</div>
        <a href="#" class="btn btn-solid mt-6 w-full">Contratar diagnose</a>
      </div>
    </div>
  </div>
</section>

<section class="bg-cream section-py">
  <div class="mx-auto max-w-[1200px] px-6">
    <h2 class="font-serif text-3xl leading-snug text-ink md:text-4xl text-balance">{{ page.faq.titulo }}</h2>

    <div class="my-6 border-2 border-dashed border-brick bg-brick/5 p-6">
      <p class="text-sm font-bold uppercase tracking-wider text-brick">✏️ Preciso das respostas aqui</p>
      <p class="mt-3 font-medium text-ink">
        Deixei abaixo as perguntas que acho que as pessoas mais vão ter. Preciso que você responda cada uma, por favor. Se tiver outras dúvidas frequentes que costuma receber, me mande também.
      </p>
      <div class="mt-4 border-l-4 border-clay/30 bg-cream/60 p-4">
        <p class="text-xs font-bold uppercase tracking-wider text-clay">Sobre a pergunta do formulário / conta Google</p>
        <p class="mt-2 italic text-ink/70 leading-relaxed">
          Deixei uma pergunta sobre precisar de conta Google (porque o formulário será no Google Forms, que pede login para anexar fotos). Sugeri uma resposta, mas ajuste como quiser.
        </p>
      </div>
    </div>

    <div class="mt-10">
      {% include faq-item.html q="Quanto tempo demora para eu receber o laudo?" a="[PLACEHOLDER: resposta]" %}
      {% include faq-item.html q="Que tipo de foto devo enviar?" a="[PLACEHOLDER: resposta. Ex: quantas fotos, de que partes da planta, com que qualidade]" %}
      {% include faq-item.html q="Preciso de uma conta Google para enviar as fotos?" a="Sim. O formulário de envio funciona pelo Google Forms, que pede login em uma conta Google para anexar as fotos com segurança. É gratuito e rápido de criar, caso você ainda não tenha." %}
      {% include faq-item.html q="E se as fotos não forem suficientes para o diagnóstico?" a="[PLACEHOLDER: resposta o que acontece nesse caso]" %}
      {% include faq-item.html q="A diagnose substitui a análise laboratorial?" a="[PLACEHOLDER: resposta]" %}
    </div>
  </div>
</section>