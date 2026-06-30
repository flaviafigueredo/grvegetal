(function () {
  let modal, frame, lastFocused;

  // monta o modal uma vez, na primeira reprodução
  function build() {
    modal = document.createElement('div');
    modal.className = 'fixed inset-0 z-50 hidden items-center justify-center bg-ink/90 p-4';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-label', 'Reprodutor de vídeo');
    modal.innerHTML = `
      <button type="button" data-close aria-label="Fechar vídeo"
        class="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-cream transition hover:bg-cream/20">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      <div class="aspect-video w-full max-w-4xl">
        <iframe class="h-full w-full rounded" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>
      </div>`;
    document.body.appendChild(modal);
    frame = modal.querySelector('iframe');

    modal.addEventListener('click', function (e) {
      if (e.target === modal || e.target.closest('[data-close]')) close();
    });
  }

  function open(id, title) {
    if (!modal) build();
    lastFocused = document.activeElement;
    frame.src = 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0';
    frame.title = title || 'Vídeo';
    modal.classList.replace('hidden', 'flex');
    document.body.classList.add('overflow-hidden');
    modal.querySelector('[data-close]').focus();
  }

  function close() {
    if (!modal) return;
    frame.src = ''; 
    modal.classList.replace('flex', 'hidden');
    document.body.classList.remove('overflow-hidden');
    if (lastFocused) lastFocused.focus();
  }

  // um único listener pra todas as facades (event delegation)
  document.addEventListener('click', function (e) {
    const facade = e.target.closest('.video-facade');
    if (!facade) return;
    open(facade.dataset.id, facade.getAttribute('aria-label'));
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });
})();