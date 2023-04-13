(() => {
    const refs = {
      openMenuBtn: document.querySelectorAll('[data-menu-open]'),
      closeMenuBtn: document.querySelector('[data-menu-close]'),
      menu: document.querySelector('[data-menu]'),
    };
  
    refs.openMenuBtn.forEach((el) => {
      el.addEventListener('click', toggleMenu);
    });
  
    refs.closeMenuBtn.addEventListener('click', toggleMenu);
  
    function toggleMenu() {
      refs.menu.classList.toggle('is-visible');
      document.body.classList.toggle('no-scroll');
    }

    window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
        if (!e.matches) return;
        refs.menu.classList.remove('is-visible');
        document.body.classList.remove('no-scroll');
      });
  })();