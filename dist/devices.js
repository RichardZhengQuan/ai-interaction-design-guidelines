/* Device-specific schematic examples. Selection stays local to this page. */
(() => {
  'use strict';
  let sequence = 0;
  const copy = {
    en: {
      selector: 'Device category', preview: 'Illustrative interface', audioPreview: 'Sound illustration', method: 'Interaction method',
      guidance: 'Apply the principle', note: 'Device consideration', compare: 'Compare all six device categories',
      disclosure: 'Schematic preview. The controls illustrate a design; they do not perform actions.',
      assistant: 'Assistant', context: 'Task context', glance: 'At a glance',
      distant: 'Across the room', remote: 'Remote control', space: 'A larger working area',
      touch: 'Within reach', wrist: 'A brief wrist interaction', hud: 'In your field of view',
      voice: 'A spoken interaction', spokenRequest: 'You say', spokenResponse: 'Assistant says',
      noScreen: 'Audio illustration. These words explain the speech; they are not displayed on the device.',
      audioIllustration: 'A screenless speaker with a status light, a physical stop control and sound waves beside it.',
      compactDay: 'Tomorrow', compactTime: '7:00 PM', compactHint: 'Say confirm or cancel',
      onDevice: 'Preview for', changed: 'Selected device:',
      foreground: 'Foreground activity', document: 'Document', mail: 'Mail draft', programme: 'Video continues',
      documentTitle: 'Notes for tomorrow', mailTitle: 'Continue writing',
      videoAlt: 'A video view remains visible behind a compact voice control.',
      documentAlt: 'A document remains visible behind a compact voice control.',
      mailAlt: 'A mail draft remains visible behind a compact voice control.',
      calendar: 'Example date chooser', selectedDate: 'Selected: Friday 16', selectedChoice: 'Selected choice',
      preferredVoice: 'Voice, when you prefer', typedRequest: 'Or type a request',
      quoteOpen: '“', quoteClose: '”',
      contextDisclosure: 'Schematic preview. Voice and confirmation controls illustrate a design. Typing stays in this preview; nothing is sent.',
      weekdays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'], selectedDay: 'Fri',
      tv: 'TV', large: 'Interactive large screens', phone: 'Phone', watch: 'Watch', glasses: 'Glasses', screenless: 'Screenless'
    },
    zh: {
      selector: '设备类别', preview: '界面示意', audioPreview: '声音示意', method: '交互方式',
      guidance: '如何应用原则', note: '设备注意事项', compare: '比较全部六类设备',
      disclosure: '此预览为设计示意。界面中的控件不会执行实际操作。',
      assistant: '助手', context: '任务上下文', glance: '一眼可见',
      distant: '在房间另一端观看', remote: '遥控器', space: '更大的工作区域',
      touch: '触手可及', wrist: '简短的腕上交互', hud: '在你的视野中',
      voice: '语音交互', spokenRequest: '你说', spokenResponse: '助手说',
      noScreen: '声音示意。这里的文字用于说明播报内容，不会显示在设备上。',
      audioIllustration: '无屏音箱，带有状态指示灯、实体停止键，旁边用波形表示声音。',
      compactDay: '明天', compactTime: '19:00', compactHint: '说「确认」或「取消」',
      onDevice: '设备预览：', changed: '已选择设备：',
      foreground: '当前活动', document: '文稿', mail: '邮件草稿', programme: '视频继续播放',
      documentTitle: '明天的笔记', mailTitle: '继续写作',
      videoAlt: '紧凑的语音控件后方仍然显示视频。',
      documentAlt: '紧凑的语音控件后方仍然显示文稿。',
      mailAlt: '紧凑的语音控件后方仍然显示邮件草稿。',
      calendar: '日期选择示意', selectedDate: '已选择：16 日周五', selectedChoice: '已选内容',
      preferredVoice: '喜欢说话时，优先用语音', typedRequest: '也可以输入文字',
      quoteOpen: '「', quoteClose: '」',
      contextDisclosure: '此预览为设计示意。语音与确认控件不会执行实际操作。输入的文字仅保留在此预览中，不会发送。',
      weekdays: ['一', '二', '三', '四', '五'], selectedDay: '周五',
      tv: '电视', large: '可交互大屏设备', phone: '手机', watch: '手表', glasses: '眼镜', screenless: '无屏设备'
    }
  };
  const deviceIds = ['tv', 'large', 'phone', 'watch', 'glasses', 'screenless'];
  const localize = locale => copy[String(locale || 'en').toLowerCase().startsWith('zh') ? 'zh' : 'en'];
  const escape = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[char]));
  const icon = name => {
    const drawings = {
      tv: '<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8m-4-4v4"/>',
      large: '<rect x="4" y="3" width="16" height="13" rx="2"/><path d="M2 20h20l-2-4H4l-2 4Z"/>',
      phone: '<rect x="6" y="2" width="12" height="20" rx="3"/><path d="M10 5h4m-3 14h2"/>',
      watch: '<rect x="6" y="6" width="12" height="12" rx="4"/><path d="M9 6V2h6v4m-6 12v4h6v-4"/>',
      glasses: '<path d="M2 9h7l2 2h2l2-2h7M3 9v5a3 3 0 0 0 6 0V9m6 0v5a3 3 0 0 0 6 0V9M2 9l2-3m18 3-2-3"/>',
      screenless: '<rect x="6" y="3" width="12" height="18" rx="6"/><path d="M9 9h6m-6 3h6m-6 3h6"/>',
      spark: '<path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3Z"/>',
      sound: '<path d="M4 10v4m4-7v10m4-13v16m4-13v10m4-7v4"/>'
    };
    return `<svg class="de-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${drawings[name] || drawings.spark}</svg>`;
  };
  const status = example => example.status ? `<div class="de-status"><span class="de-status-dot" aria-hidden="true"></span>${escape(example.status)}</div>` : '';
  const actions = example => `<div class="de-actions">${example.primary ? `<span class="de-action de-action-primary">${escape(example.primary)}</span>` : ''}${example.secondary ? `<span class="de-action de-action-secondary">${escape(example.secondary)}</span>` : ''}</div>`;
  const task = (example, kind = '', feature = '') => `<div class="de-task ${kind}">${status(example)}<h4 class="de-task-title">${escape(example.title)}</h4>${example.body ? `<p class="de-task-body">${escape(example.body)}</p>` : ''}${feature}${actions(example)}</div>`;
  const contextTask = (device, labels, prefix) => {
    const example = device.example || {};
    const voicePrompt = example.voicePrompt ? `<div class="de-context-voice">${icon('sound')}<div><span class="de-context-voice-label">${escape(labels.preferredVoice)}</span><p>${labels.quoteOpen}${escape(example.voicePrompt)}${labels.quoteClose}</p></div></div>` : '';
    const inputId = `${prefix}-input-${device.id}`;
    const input = ['large', 'phone'].includes(device.id) ? `<div class="de-context-typing"><label for="${inputId}">${escape(labels.typedRequest)}</label><input class="de-context-input" id="${inputId}" type="text" maxlength="160" autocomplete="off" placeholder="${escape(example.inputPlaceholder || '')}" aria-describedby="${prefix}-disclosure"></div>` : '';
    return `<div class="de-task de-context-task">${voicePrompt}${status(example)}<h4 class="de-task-title">${escape(example.title)}</h4>${example.body ? `<p class="de-task-body">${escape(example.body)}</p>` : ''}${actions(example)}${input}</div>`;
  };
  const compactWatch = (example, labels) => `<div class="de-watch-glance"><h4 class="de-compact-title">${escape(example.title)}</h4><span class="de-compact-day">${escape(example.day || labels.compactDay)}</span><strong class="de-compact-time">${escape(example.time || labels.compactTime)}</strong><div class="de-compact-actions">${example.primary ? `<span role="img" aria-label="${escape(example.primary)}">✓</span>` : ''}${example.secondary ? `<span role="img" aria-label="${escape(example.secondary)}">×</span>` : ''}</div></div>`;
  const compactGlasses = (example, labels) => `<div class="de-glasses-glance"><h4 class="de-compact-title">${escape(example.title)} · ${escape(example.day || labels.compactDay)}</h4><strong class="de-compact-time">${escape(example.time || labels.compactTime)}</strong><span class="de-compact-hint">${escape(example.hint || labels.compactHint)}</span></div>`;
  const speech = (value, labels) => {
    const text = String(value || '').trim().replace(/^[「“"]([\s\S]*)[」”"]$/, '$1');
    return `${labels.quoteOpen}${escape(text)}${labels.quoteClose}`;
  };
  const audioDescription = (example, labels) => `<div class="de-audio-description">${example.voicePrompt ? `<p class="de-spoken-line"><span class="de-spoken-label">${escape(labels.spokenRequest)}</span>${speech(example.voicePrompt, labels)}</p>` : ''}${example.body ? `<p class="de-spoken-line"><span class="de-spoken-label">${escape(labels.spokenResponse)}</span>${speech(example.body, labels)}</p>` : ''}<p class="de-audio-note">${escape(labels.noScreen)}</p></div>`;
  const chrome = labels => `<div class="de-app-chrome">${icon('spark')}<span>${escape(labels.assistant)}</span><span class="de-chrome-menu" aria-hidden="true">···</span></div>`;
  const foreground = (deviceId, labels) => {
    if (deviceId === 'tv') return `<div class="de-foreground de-foreground-video" role="img" aria-label="${escape(labels.videoAlt)}"><span class="de-foreground-label">${escape(labels.programme)}</span><div class="de-video-landscape" aria-hidden="true"><i></i><b></b><span></span></div><div class="de-video-progress" aria-hidden="true"><span></span></div></div>`;
    const mail = deviceId === 'phone';
    return `<div class="de-foreground ${mail ? 'de-foreground-mail' : 'de-foreground-document'}" role="img" aria-label="${escape(mail ? labels.mailAlt : labels.documentAlt)}"><span class="de-foreground-label">${escape(mail ? labels.mail : labels.document)}</span><strong>${escape(mail ? labels.mailTitle : labels.documentTitle)}</strong><div class="de-writing-lines" aria-hidden="true"><i></i><i></i><i></i><i></i></div><span class="de-writing-caret" aria-hidden="true"></span></div>`;
  };
  const taskFeature = (sectionId, device, labels) => {
    if (sectionId !== 'generated-ui' || device.id === 'screenless') return '';
    if (device.id === 'glasses') return `<div class="de-selected-choice">${icon('spark')}<span>${escape(labels.selectedChoice)}</span></div>`;
    if (device.id === 'watch') return `<div class="de-selected-date" aria-label="${escape(labels.selectedDate)}"><span>${escape(labels.selectedDay)}</span><strong>16</strong><span class="de-date-check" aria-hidden="true">✓</span></div>`;
    return `<div class="de-calendar-feature" role="group" aria-label="${escape(labels.calendar)}"><div class="de-calendar-days">${labels.weekdays.map((day, index) => `<div class="de-calendar-date ${index === 4 ? 'de-calendar-selected' : ''}" ${index === 4 ? `aria-label="${escape(labels.selectedDate)}"` : ''}><span>${escape(day)}</span><strong>${12 + index}</strong>${index === 4 ? '<i aria-hidden="true">✓</i>' : '<i aria-hidden="true">·</i>'}</div>`).join('')}</div><p class="de-calendar-selection">${escape(labels.selectedDate)}</p></div>`;
  };
  const preview = (device, labels, sectionId, prefix) => {
    const example = device.example || {};
    const isContext = sectionId === 'context';
    const isVoice = sectionId === 'voice' && ['tv', 'large', 'phone'].includes(device.id);
    const content = isContext ? contextTask(device, labels, prefix) : task(example, isVoice ? 'de-voice-accessory' : '', taskFeature(sectionId, device, labels));
    const voiceWorkspace = isVoice ? `<div class="de-voice-workspace de-voice-${device.id}">${foreground(device.id, labels)}${content}</div>` : '';
    if (device.id === 'tv') return `<div class="de-formfactor de-tv-scene"><div class="de-tv-frame"><div class="de-tv-screen">${isVoice ? voiceWorkspace : chrome(labels) + content}</div></div><div class="de-tv-stand" aria-hidden="true"></div><div class="de-remote" aria-hidden="true"><span></span><i></i><b></b></div><p class="de-formfactor-caption">${escape(labels.distant)} · ${escape(labels.remote)}</p></div>`;
    if (device.id === 'large') return `<div class="de-formfactor de-large-scene"><div class="de-laptop-screen"><div class="de-window-chrome" aria-hidden="true"><i></i><i></i><i></i></div>${isVoice ? voiceWorkspace : chrome(labels) + (isContext ? content : `<div class="de-large-workspace">${content}<aside class="de-context-card"><span class="de-context-label">${escape(labels.context)}</span><span class="de-context-rule" aria-hidden="true"></span><p>${escape(device.method)}</p><div class="de-context-lines" aria-hidden="true"><i></i><i></i><i></i></div></aside></div>`)}</div><div class="de-laptop-base" aria-hidden="true"><span></span></div><p class="de-formfactor-caption">${escape(labels.space)}</p></div>`;
    if (device.id === 'phone') return `<div class="de-formfactor de-phone-scene"><div class="de-phone-frame"><div class="de-phone-system" aria-hidden="true"><span>9:41</span><i></i><span>•••</span></div>${isVoice ? voiceWorkspace : chrome(labels) + content}<div class="de-phone-home" aria-hidden="true"></div></div><p class="de-formfactor-caption">${escape(labels.touch)}</p></div>`;
    if (device.id === 'watch') return `<div class="de-formfactor de-watch-scene"><div class="de-watch-band de-watch-band-top" aria-hidden="true"></div><div class="de-watch-frame"><span class="de-watch-crown" aria-hidden="true"></span><div class="de-watch-screen"><span class="de-watch-time" aria-hidden="true">9:41</span>${isContext ? compactWatch(example, labels) : content}</div></div><div class="de-watch-band de-watch-band-bottom" aria-hidden="true"></div><p class="de-formfactor-caption">${escape(labels.wrist)}</p></div>`;
    if (device.id === 'glasses') return `<div class="de-formfactor de-glasses-scene${isContext ? ' de-glasses-compact' : ''}"><div class="de-glasses-world" aria-hidden="true"><span></span><span></span><span></span></div>${isContext ? compactGlasses(example, labels) : `<div class="de-glasses-hud">${icon('spark')}${content}</div>`}<svg class="de-glasses-outline" viewBox="0 0 460 124" fill="none" aria-hidden="true"><path d="M13 35h174c20 0 20 12 43 12s23-12 43-12h174M24 35v44c0 21 15 31 69 31h18c55 0 70-10 70-31V35m97 0v44c0 21 15 31 69 31h18c55 0 70-10 70-31V35M13 35 28 14m419 21-15-21" stroke="currentColor" stroke-width="4" stroke-linecap="round"/></svg><p class="de-formfactor-caption">${escape(labels.hud)}</p></div>`;
    return `<div class="de-formfactor de-screenless-scene de-screenless-audio"><div class="de-audio-stage" role="img" aria-label="${escape(labels.audioIllustration)}"><div class="de-speaker" aria-hidden="true"><div class="de-speaker-top"><span></span><b class="de-speaker-stop"></b></div><div class="de-speaker-body"><i></i><i></i><i></i></div></div><div class="de-audio-wave" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div></div>${audioDescription(example, labels)}<p class="de-formfactor-caption">${escape(labels.voice)}</p></div>`;
  };
  function normalize(devices, labels) {
    const supplied = Array.isArray(devices) ? devices : [];
    return deviceIds.map(id => supplied.find(device => device.id === id)).filter(Boolean).map(device => ({...device, name: device.name || labels[device.id]}));
  }
  function render(sectionId, devices, locale = 'en') {
    const labels = localize(locale);
    const normalized = normalize(devices, labels);
    if (!normalized.length) return '';
    const prefix = `de-${String(sectionId || 'principle').replace(/[^a-z0-9-]/gi, '-')}-${++sequence}`;
    return `<div class="de-component${sectionId === 'context' ? ' de-context-component' : ''}" data-de-locale="${String(locale).toLowerCase().startsWith('zh') ? 'zh' : 'en'}"><div class="de-tabs" role="tablist" aria-label="${escape(labels.selector)}">${normalized.map((device, index) => `<button type="button" class="de-tab" role="tab" id="${prefix}-tab-${device.id}" aria-controls="${prefix}-panel-${device.id}" aria-selected="${index === 0}" tabindex="${index === 0 ? 0 : -1}" data-de-device="${device.id}">${icon(device.id)}<span>${escape(device.name)}</span></button>`).join('')}</div><div class="de-panels">${normalized.map((device, index) => `<div class="de-panel" role="tabpanel" tabindex="0" id="${prefix}-panel-${device.id}" aria-labelledby="${prefix}-tab-${device.id}" ${index ? 'hidden' : ''}><div class="de-preview" role="group" aria-label="${escape(labels.onDevice + ' ' + device.name)}"><div class="de-preview-eyebrow">${escape(device.id === 'screenless' ? labels.audioPreview : labels.preview)}</div>${preview(device, labels, sectionId, prefix)}</div><div class="de-explanation"><div class="de-method"><span class="de-label">${escape(labels.method)}</span><p>${escape(device.method)}</p></div><div class="de-guidance"><span class="de-label">${escape(labels.guidance)}</span><p>${escape(device.guidance)}</p></div>${device.note ? `<div class="de-note"><span class="de-label">${escape(labels.note)}</span><p>${escape(device.note)}</p></div>` : ''}</div></div>`).join('')}</div><p class="de-disclosure" id="${prefix}-disclosure">${escape(sectionId === 'context' ? labels.contextDisclosure : labels.disclosure)}</p><details class="de-reference"><summary>${escape(labels.compare)}<span aria-hidden="true">+</span></summary><div class="de-device-list">${normalized.map(device => `<article class="de-device-item"><h4>${icon(device.id)}${escape(device.name)}</h4><dl><div><dt>${escape(labels.method)}</dt><dd>${escape(device.method)}</dd></div><div><dt>${escape(labels.guidance)}</dt><dd>${escape(device.guidance)}</dd></div>${device.note ? `<div><dt>${escape(labels.note)}</dt><dd>${escape(device.note)}</dd></div>` : ''}</dl></article>`).join('')}</div></details><div class="de-sr-only" role="status" aria-live="polite" aria-atomic="true" data-de-announcement></div></div>`;
  }
  function init(container) {
    const components = container.matches('.de-component') ? [container] : [...container.querySelectorAll('.de-component')];
    components.forEach(component => {
      if (component.dataset.deInitialized) return;
      component.dataset.deInitialized = 'true';
      const labels = localize(component.dataset.deLocale);
      const tablist = component.querySelector('[role="tablist"]');
      const tabs = [...tablist.querySelectorAll('[role="tab"]')];
      const panels = [...component.querySelectorAll('.de-panels > [role="tabpanel"]')];
      const select = (tab, focus = false) => {
        tabs.forEach((item, index) => {
          const selected = item === tab;
          item.setAttribute('aria-selected', String(selected));
          item.tabIndex = selected ? 0 : -1;
          panels[index].hidden = !selected;
        });
        if (focus) tab.focus();
        component.querySelector('[data-de-announcement]').textContent = `${labels.changed} ${tab.textContent.trim()}`;
      };
      tablist.addEventListener('click', event => {
        const tab = event.target.closest('[role="tab"]');
        if (tab && tablist.contains(tab)) select(tab);
      });
      tablist.addEventListener('keydown', event => {
        const tab = event.target.closest('[role="tab"]');
        if (!tab || !tablist.contains(tab)) return;
        const index = tabs.indexOf(tab);
        let next;
        if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
        if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
        if (event.key === 'Home') next = 0;
        if (event.key === 'End') next = tabs.length - 1;
        if (next !== undefined) { event.preventDefault(); select(tabs[next], true); }
      });
    });
  }
  function mount(container, devices, locale = 'en') {
    container.innerHTML = render(container.dataset.deviceSection || 'principle', devices, locale);
    init(container);
  }
  window.DeviceExamples = {render, init, mount};
})();
