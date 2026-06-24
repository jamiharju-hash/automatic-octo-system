(() => {
  const body = document.body;
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  const editorToggle = document.querySelector('.editor-toggle');
  const editorBar = document.querySelector('.editor-bar');
  const saveButton = document.querySelector('.editor-save');
  const resetButton = document.querySelector('.editor-reset');
  const toast = document.querySelector('.toast');
  const form = document.querySelector('[data-demo-form]');
  const pageKey = `jkp-demo:${location.pathname}`;

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.textContent = isOpen ? '✕' : '☰';
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.textContent = '☰';
    }));
  }

  const notify = (message) => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
  };

  const editables = [...document.querySelectorAll('[data-editable]')];
  try {
    const saved = JSON.parse(localStorage.getItem(pageKey) || '{}');
    editables.forEach((el) => {
      const key = el.dataset.editable;
      if (saved[key]) el.innerHTML = saved[key];
    });
  } catch (_) {}

  const setEditing = (active) => {
    body.classList.toggle('editor-active', active);
    editorBar?.classList.toggle('active', active);
    if (editorToggle) editorToggle.style.display = active ? 'none' : 'flex';
    editables.forEach((el) => el.setAttribute('contenteditable', String(active)));
  };

  editorToggle?.addEventListener('click', () => setEditing(true));
  saveButton?.addEventListener('click', () => {
    const data = {};
    editables.forEach((el) => data[el.dataset.editable] = el.innerHTML);
    localStorage.setItem(pageKey, JSON.stringify(data));
    setEditing(false);
    notify('Demon tekstit tallennettu tähän selaimeen.');
  });
  resetButton?.addEventListener('click', () => {
    localStorage.removeItem(pageKey);
    location.reload();
  });

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      notify('Demolomake: viestiä ei lähetetty.');
      form.reset();
    });
  }

  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealElements.forEach((el) => observer.observe(el));
  } else {
    revealElements.forEach((el) => el.classList.add('visible'));
  }
})();
