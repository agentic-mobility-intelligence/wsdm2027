(() => {
  'use strict';
  const menuButton = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.site-nav');
  const setMenu = open => {
    if (!menuButton || !menu) return;
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.querySelector('.sr-only').textContent = open ? 'Close navigation' : 'Open navigation';
    menu.classList.toggle('is-open', open);
  };
  menuButton?.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('click', event => {
    if (menu && !menu.contains(event.target) && !menuButton?.contains(event.target)) setMenu(false);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuButton?.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      menuButton.focus();
    }
  });
  matchMedia('(min-width: 768px)').addEventListener('change', event => { if (event.matches) setMenu(false); });

  const tabs = [...document.querySelectorAll('[data-tab]')];
  const selectTab = tab => {
    tabs.forEach(item => {
      const selected = item === tab;
      item.classList.toggle('selected', selected);
      item.setAttribute('aria-selected', String(selected));
      item.tabIndex = selected ? 0 : -1;
      document.getElementById(item.getAttribute('aria-controls')).hidden = !selected;
    });
  };
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectTab(tab));
    tab.addEventListener('keydown', event => {
      let nextIndex;
      if (event.key === 'ArrowRight') nextIndex = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') nextIndex = (index + tabs.length - 1) % tabs.length;
      if (event.key === 'Home') nextIndex = 0;
      if (event.key === 'End') nextIndex = tabs.length - 1;
      if (nextIndex !== undefined) {
        event.preventDefault();
        selectTab(tabs[nextIndex]);
        tabs[nextIndex].focus();
      }
    });
  });

  const dialog = document.querySelector('.image-dialog');
  let returnFocus;
  const zoomButton = dialog?.querySelector('.dialog-zoom');
  const setZoom = zoomed => {
    dialog?.classList.toggle('is-zoomed', zoomed);
    zoomButton?.setAttribute('aria-pressed', String(zoomed));
    if (zoomButton) zoomButton.textContent = zoomed ? 'Fit to window' : 'Actual size';
    dialog?.querySelector('.dialog-image-scroll').scrollTo(0, 0);
  };
  zoomButton?.addEventListener('click', () => setZoom(!dialog.classList.contains('is-zoomed')));
  document.querySelectorAll('[data-lightbox]').forEach(link => {
    link.addEventListener('click', event => {
      if (!dialog?.showModal || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      returnFocus = link;
      const image = dialog.querySelector('.dialog-image');
      image.src = link.href;
      image.alt = link.querySelector('img').alt;
      dialog.querySelector('h2').textContent = link.dataset.caption;
      setZoom(false);
      dialog.showModal();
      document.body.classList.add('dialog-open');
      dialog.querySelector('.dialog-image-scroll').scrollTo(0, 0);
    });
  });
  dialog?.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog?.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
  dialog?.addEventListener('close', () => {
    document.body.classList.remove('dialog-open');
    returnFocus?.focus({ preventScroll: true });
  });
})();
