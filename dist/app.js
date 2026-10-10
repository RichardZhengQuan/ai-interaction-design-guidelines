(() => {
  'use strict';
  const labels = JSON.parse(document.getElementById('guide-labels').textContent);
  const deviceData = JSON.parse(document.getElementById('device-data').textContent);
  const locale = document.documentElement.lang.startsWith('zh') ? 'zh' : 'en';
  document.querySelectorAll('.live-example').forEach(container => {
    if (!window.AgentExamples) return;
    container.innerHTML = window.AgentExamples.render(container.dataset.example);
    window.AgentExamples.init(container);
  });
  if (window.DeviceExamples) window.DeviceExamples.init(document.querySelector('[data-device-guide]'), deviceData, locale);

  const sections = [...document.querySelectorAll('#overview,#background,.principle,#devices,#about')];
  const toc = document.querySelector('.toc');
  const tocLinks = document.getElementById('local-toc');
  const current = document.querySelector('[data-current-chapter]');
  let active = '';
  // The local table of contents lists the parts of the current section, not the whole page again.
  function updateNavigation() {
    let section = sections[0];
    const threshold = document.querySelector('.site-header').getBoundingClientRect().bottom + 40;
    for (const candidate of sections) if (candidate.getBoundingClientRect().top <= threshold) section = candidate;
    if (Math.ceil(window.scrollY + window.innerHeight) >= document.documentElement.scrollHeight - 2) section = sections[sections.length - 1];
    if (!section || active === section.id) return;
    active = section.id;
    document.querySelectorAll('[data-chapter]').forEach(link => {
      if (link.dataset.chapter === active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    const navLink = document.querySelector(`.mobile-chapters [data-chapter="${active}"]`);
    current.textContent = navLink ? [...navLink.childNodes].map(node => node.textContent).join(' ') : '';
    const parts = [...section.querySelectorAll('[data-toc]')];
    toc.classList.toggle('is-empty', !parts.length);
    document.querySelector('.toc-heading').textContent = section.querySelector('h1,h2').textContent;
    tocLinks.replaceChildren(...parts.map(part => {
      const a = document.createElement('a'); a.href = '#' + part.id; a.textContent = part.dataset.toc; return a;
    }));
  }
  let scheduled = false;
  window.addEventListener('scroll', () => {
    if (scheduled) return; scheduled = true;
    requestAnimationFrame(() => { updateNavigation(); scheduled = false; });
  }, {passive: true});
  window.addEventListener('resize', updateNavigation);
  updateNavigation();
  document.querySelectorAll('[data-language-link]').forEach(link => link.addEventListener('click', () => {
    updateNavigation();
    const destination = new URL(link.href);
    const fragment = window.location.hash.slice(1);
    const belongsToActive = fragment === active || fragment.startsWith(active + '-');
    destination.hash = belongsToActive ? fragment : (active || 'overview');
    link.href = destination.href;
  }));
  const mobile = document.querySelector('.mobile-chapters');
  mobile.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    mobile.open = false;
  }));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && mobile.open) { mobile.open = false; mobile.querySelector('summary').focus(); }
  });

  // The header and the mobile menu each have an appearance switch; both stay in sync.
  const groups = [...document.querySelectorAll('.appearance-switch')];
  let preference = 'auto'; try { preference = localStorage.getItem('assistant-guide-theme') || 'auto'; } catch {}
  if (!['auto', 'light', 'dark'].includes(preference)) preference = 'auto';
  const dark = matchMedia('(prefers-color-scheme: dark)');
  function applyTheme() {
    document.documentElement.dataset.theme = preference === 'auto' ? (dark.matches ? 'dark' : 'light') : preference;
    groups.forEach(group => group.querySelectorAll('[data-theme-choice]').forEach(choice => {
      const selected = choice.dataset.themeChoice === preference;
      choice.setAttribute('aria-checked', String(selected));
      choice.tabIndex = selected ? 0 : -1;
    }));
  }
  function selectTheme(choice) {
    preference = choice.dataset.themeChoice;
    try { localStorage.setItem('assistant-guide-theme', preference); } catch {}
    applyTheme();
  }
  groups.forEach(group => {
    const choices = [...group.querySelectorAll('[data-theme-choice]')];
    choices.forEach((choice, index) => {
      choice.addEventListener('click', () => selectTheme(choice));
      choice.addEventListener('keydown', event => {
        let next;
        if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % choices.length;
        else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index + choices.length - 1) % choices.length;
        else if (event.key === 'Home') next = 0;
        else if (event.key === 'End') next = choices.length - 1;
        else return;
        event.preventDefault(); selectTheme(choices[next]); choices[next].focus();
      });
    });
  });
  dark.addEventListener('change', applyTheme); applyTheme();
})();
