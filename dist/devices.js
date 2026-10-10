/* Device previews for the guide's device chapter. Selection stays local to this page. */
(() => {
  'use strict';
  const copy = {
    en: {
      preview: 'Illustrative interface', audioPreview: 'Sound illustration', assistant: 'Assistant', changed: 'Selected device:',
      distant: 'Across the room · Remote control', space: 'A larger working area', touch: 'Within reach', wrist: 'A brief wrist interaction', hud: 'In your field of view', voice: 'A spoken interaction',
      spokenRequest: 'You say', spokenResponse: 'Assistant says', quoteOpen: '“', quoteClose: '”',
      noScreen: 'These words describe the speech; nothing is displayed on the device.',
      audioIllustration: 'A screenless speaker with a status light, a physical stop control and sound waves beside it.',
      calendar: 'Date chooser', selectedDate: 'Selected: Thursday 15', weekdays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
    },
    zh: {
      preview: '界面示意', audioPreview: '声音示意', assistant: '助手', changed: '已选择设备：',
      distant: '隔着房间观看 · 遥控器', space: '更大的工作区域', touch: '触手可及', wrist: '简短的腕上交互', hud: '在你的视野中', voice: '语音交互',
      spokenRequest: '你说', spokenResponse: '助手说', quoteOpen: '「', quoteClose: '」',
      noScreen: '这些文字用于描述播报内容，设备上不会显示任何内容。',
      audioIllustration: '无屏音箱，带有状态指示灯、实体停止键，旁边用波形表示声音。',
      calendar: '日期选择', selectedDate: '已选择：15 日周四', weekdays: ['周一', '周二', '周三', '周四', '周五']
    }
  };
  const escape = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[char]));
  const icon = name => {
    const drawings = {
      spark: '<path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3Z"/>',
      sound: '<path d="M4 10v4m4-7v10m4-13v16m4-13v10m4-7v4"/>'
    };
    return `<svg class="de-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${drawings[name]}</svg>`;
  };
  const status = example => example.status ? `<div class="de-status"><span class="de-status-dot" aria-hidden="true"></span>${escape(example.status)}</div>` : '';
  const actions = example => `<div class="de-actions">${example.primary ? `<span class="de-action de-action-primary">${escape(example.primary)}</span>` : ''}${example.secondary ? `<span class="de-action de-action-secondary">${escape(example.secondary)}</span>` : ''}</div>`;
  const calendar = labels => `<div class="de-calendar-feature" role="group" aria-label="${escape(labels.calendar)}"><div class="de-calendar-days">${labels.weekdays.map((day, index) => `<div class="de-calendar-date ${index === 3 ? 'de-calendar-selected' : ''}" ${index === 3 ? `aria-label="${escape(labels.selectedDate)}"` : ''}><span>${escape(day)}</span><strong>${12 + index}</strong><i aria-hidden="true">${index === 3 ? '✓' : '·'}</i></div>`).join('')}</div></div>`;
  const task = (example, labels) => `<div class="de-task">${status(example)}<h4 class="de-task-title">${escape(example.title)}</h4>${example.body ? `<p class="de-task-body">${escape(example.body)}</p>` : ''}${example.calendar ? calendar(labels) : ''}${actions(example)}</div>`;
  const chrome = labels => `<div class="de-app-chrome">${icon('spark')}<span>${escape(labels.assistant)}</span><span class="de-chrome-menu" aria-hidden="true">···</span></div>`;
  const speech = (value, labels) => `${labels.quoteOpen}${escape(value)}${labels.quoteClose}`;
  const scenes = {
    phone: (example, labels) => `<div class="de-formfactor de-phone-scene"><div class="de-phone-frame"><div class="de-phone-system" aria-hidden="true"><span>9:41</span><i></i><span>•••</span></div>${chrome(labels)}${task(example, labels)}<div class="de-phone-home" aria-hidden="true"></div></div><p class="de-formfactor-caption">${escape(labels.touch)}</p></div>`,
    large: (example, labels) => `<div class="de-formfactor de-large-scene"><div class="de-laptop-screen"><div class="de-window-chrome" aria-hidden="true"><i></i><i></i><i></i></div>${chrome(labels)}${task(example, labels)}</div><div class="de-laptop-base" aria-hidden="true"><span></span></div><p class="de-formfactor-caption">${escape(labels.space)}</p></div>`,
    tv: (example, labels) => `<div class="de-formfactor de-tv-scene"><div class="de-tv-frame"><div class="de-tv-screen">${chrome(labels)}${task(example, labels)}</div></div><div class="de-tv-stand" aria-hidden="true"></div><div class="de-remote" aria-hidden="true"><span></span><i></i><b></b></div><p class="de-formfactor-caption">${escape(labels.distant)}</p></div>`,
    watch: (example, labels) => `<div class="de-formfactor de-watch-scene"><div class="de-watch-band de-watch-band-top" aria-hidden="true"></div><div class="de-watch-frame"><span class="de-watch-crown" aria-hidden="true"></span><div class="de-watch-screen"><span class="de-watch-time" aria-hidden="true">9:41</span><div class="de-watch-glance"><h4 class="de-compact-title">${escape(example.title)}</h4><span class="de-compact-day">${escape(example.day)}</span><strong class="de-compact-time">${escape(example.time)}</strong><div class="de-compact-actions"><span role="img" aria-label="${escape(example.primary)}">✓</span><span role="img" aria-label="${escape(example.secondary)}">×</span></div></div></div></div><div class="de-watch-band de-watch-band-bottom" aria-hidden="true"></div><p class="de-formfactor-caption">${escape(labels.wrist)}</p></div>`,
    glasses: (example, labels) => `<div class="de-formfactor de-glasses-scene de-glasses-compact"><div class="de-glasses-world" aria-hidden="true"><span></span><span></span><span></span></div><div class="de-glasses-glance"><h4 class="de-compact-title">${escape(example.title)} · ${escape(example.day)}</h4><strong class="de-compact-time">${escape(example.time)}</strong><span class="de-compact-hint">${escape(example.hint)}</span></div><svg class="de-glasses-outline" viewBox="0 0 460 124" fill="none" aria-hidden="true"><path d="M13 35h174c20 0 20 12 43 12s23-12 43-12h174M24 35v44c0 21 15 31 69 31h18c55 0 70-10 70-31V35m97 0v44c0 21 15 31 69 31h18c55 0 70-10 70-31V35M13 35 28 14m419 21-15-21" stroke="currentColor" stroke-width="4" stroke-linecap="round"/></svg><p class="de-formfactor-caption">${escape(labels.hud)}</p></div>`,
    screenless: (example, labels) => `<div class="de-formfactor de-screenless-scene de-screenless-audio"><div class="de-audio-stage" role="img" aria-label="${escape(labels.audioIllustration)}"><div class="de-speaker" aria-hidden="true"><div class="de-speaker-top"><span></span><b class="de-speaker-stop"></b></div><div class="de-speaker-body"><i></i><i></i><i></i></div></div><div class="de-audio-wave" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div></div><div class="de-audio-description"><p class="de-spoken-line"><span class="de-spoken-label">${escape(labels.spokenRequest)}</span>${speech(example.voicePrompt, labels)}</p><p class="de-spoken-line"><span class="de-spoken-label">${escape(labels.spokenResponse)}</span>${speech(example.body, labels)}</p><p class="de-audio-note">${escape(labels.noScreen)}</p></div><p class="de-formfactor-caption">${escape(labels.voice)}</p></div>`
  };

  // The guide is fully written in the page; this adds previews and turns the panels into tabs.
  function init(guide, previews, locale = 'en') {
    if (!guide || guide.dataset.deInitialized) return;
    guide.dataset.deInitialized = 'true';
    const labels = copy[String(locale).startsWith('zh') ? 'zh' : 'en'];
    guide.classList.add('de-component', 'de-context-component', 'is-enhanced');
    guide.querySelectorAll('[data-device-preview]').forEach(slot => {
      const id = slot.dataset.devicePreview;
      if (!scenes[id] || !previews[id]) return;
      slot.innerHTML = `<div class="de-preview-eyebrow">${escape(id === 'screenless' ? labels.audioPreview : labels.preview)}</div>${scenes[id](previews[id], labels)}`;
      slot.hidden = false;
    });
    const tablist = guide.querySelector('[role="tablist"]');
    const tabs = [...tablist.querySelectorAll('[role="tab"]')];
    const panels = tabs.map(tab => document.getElementById(tab.getAttribute('aria-controls')));
    const announcement = document.createElement('div');
    announcement.className = 'de-sr-only';
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    guide.append(announcement);
    const select = (tab, focus = false) => {
      tabs.forEach((item, index) => {
        const selected = item === tab;
        item.setAttribute('aria-selected', String(selected));
        item.tabIndex = selected ? 0 : -1;
        panels[index].hidden = !selected;
      });
      if (focus) {
        tab.focus();
        announcement.textContent = `${labels.changed} ${tab.textContent.trim()}`;
      }
    };
    tablist.hidden = false;
    select(tabs.find(tab => tab.getAttribute('aria-selected') === 'true') || tabs[0]);
    tablist.addEventListener('click', event => {
      const tab = event.target.closest('[role="tab"]');
      if (tab && tablist.contains(tab)) select(tab, true);
    });
    tablist.addEventListener('keydown', event => {
      const index = tabs.indexOf(event.target.closest('[role="tab"]'));
      if (index < 0) return;
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next !== undefined) { event.preventDefault(); select(tabs[next], true); }
    });
  }
  window.DeviceExamples = {init};
})();
