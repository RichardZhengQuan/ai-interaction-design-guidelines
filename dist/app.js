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
  document.querySelectorAll('.device-explorer').forEach(container => {
    if (!window.DeviceExamples) return;
    const devices = deviceData[container.dataset.deviceSection];
    container.innerHTML = window.DeviceExamples.render(container.dataset.deviceSection, devices, locale);
    window.DeviceExamples.init(container);
  });
  document.querySelectorAll('.example-figure').forEach(figure => {
    const controls = figure.querySelectorAll('[data-mode]');
    controls.forEach(button => button.addEventListener('click', () => {
      const diagram = button.dataset.mode === 'diagram';
      figure.querySelector('.live-example').hidden = diagram;
      figure.querySelector('.diagram-example').hidden = !diagram;
      controls.forEach(control => control.setAttribute('aria-pressed', String(control === button)));
    }));
  });
  const sections = [...document.querySelectorAll('#overview,#background,.principle,#about')];
  const toc = document.getElementById('local-toc');
  let active = '';
  function updateNavigation() {
    let current = sections[0];
    const threshold = document.querySelector('.site-header').getBoundingClientRect().bottom + 40;
    for (const section of sections) if (section.getBoundingClientRect().top <= threshold) current = section;
    if (Math.ceil(window.scrollY + window.innerHeight) >= document.documentElement.scrollHeight - 2) current = sections[sections.length - 1];
    if (!current || active === current.id) return;
    active = current.id;
    document.querySelectorAll('[data-chapter]').forEach(link => {
      if (link.dataset.chapter === active) link.setAttribute('aria-current','location');
      else link.removeAttribute('aria-current');
    });
    if (current.classList.contains('principle')) {
      const title = current.querySelector('h2').textContent;
      toc.replaceChildren(...[[labels.overview,current.id],[labels.practices,current.id+'-practices'],[labels.example,current.id+'-example'],[labels.devices,current.id+'-devices']].map(([label,id]) => {
        const a=document.createElement('a');a.href='#'+id;a.textContent=label;return a;
      }));
      document.querySelector('.toc-heading').textContent=title;
    } else {
      document.querySelector('.toc-heading').textContent=labels.toc;
      toc.replaceChildren(...sections.map(section => {
        const a=document.createElement('a');a.href='#'+section.id;a.textContent=section.querySelector('h1,h2').textContent;return a;
      }));
    }
  }
  let scheduled=false;
  window.addEventListener('scroll',()=>{
    if(scheduled)return;scheduled=true;
    requestAnimationFrame(()=>{updateNavigation();scheduled=false;});
  },{passive:true});
  window.addEventListener('resize',updateNavigation);
  updateNavigation();
  document.querySelectorAll('[data-language-link]').forEach(link => link.addEventListener('click', () => {
    updateNavigation();
    const destination = new URL(link.href);
    const fragment = window.location.hash.slice(1);
    const belongsToActive = fragment === active || fragment.startsWith(active + '-');
    destination.hash = belongsToActive ? fragment : (active || 'overview');
    link.href = destination.href;
  }));
  const mobile=document.querySelector('.mobile-chapters');
  mobile.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
    mobile.open=false;
  }));
  document.addEventListener('keydown',event=>{
    if(event.key==='Escape'&&mobile.open){mobile.open=false;mobile.querySelector('summary').focus();}
  });
  const appearance=document.getElementById('appearance');
  const choices=[...appearance.querySelectorAll('[data-theme-choice]')];
  let preference='auto';try{preference=localStorage.getItem('assistant-guide-theme')||'auto';}catch{}
  if(!choices.some(choice=>choice.dataset.themeChoice===preference))preference='auto';
  const dark=matchMedia('(prefers-color-scheme: dark)');
  function applyTheme(){
    document.documentElement.dataset.theme=preference==='auto'?(dark.matches?'dark':'light'):preference;
    choices.forEach(choice=>{
      const selected=choice.dataset.themeChoice===preference;
      choice.setAttribute('aria-checked',String(selected));
      choice.tabIndex=selected?0:-1;
    });
  }
  function selectTheme(choice){
    preference=choice.dataset.themeChoice;
    try{localStorage.setItem('assistant-guide-theme',preference);}catch{}
    applyTheme();
  }
  choices.forEach((choice,index)=>{
    choice.addEventListener('click',()=>selectTheme(choice));
    choice.addEventListener('keydown',event=>{
      let next;
      if(event.key==='ArrowRight'||event.key==='ArrowDown')next=(index+1)%choices.length;
      else if(event.key==='ArrowLeft'||event.key==='ArrowUp')next=(index+choices.length-1)%choices.length;
      else if(event.key==='Home')next=0;
      else if(event.key==='End')next=choices.length-1;
      else return;
      event.preventDefault();selectTheme(choices[next]);choices[next].focus();
    });
  });
  dark.addEventListener('change',applyTheme);applyTheme();
})();
