/* Local, accessible interaction examples. No data leaves this page. */
(() => {
  'use strict';
  let sequence = 0;
  const chineseCopy = {
    'Phone interface': '手机界面',
    'Desktop interface': '桌面界面',
    'Assistant': '助理',
    'Dinner with Alex': '与 Alex 共进晚餐',
    'Thursday, sorted.': '周四的安排，准备好了。',
    'A quiet table. Time to catch up.': '找一张安静的桌子，好好聊聊近况。',
    'Modern bistro · 12 minutes away': '现代小餐馆 · 步行 12 分钟',
    'Thursday · 6:30 PM': '周四 · 晚上 6:30',
    'River Street · Table for 2': '河畔街 · 双人桌',
    'Ready for your review': '等待你查看',
    'Phone': '手机',
    'Desktop': '桌面',
    'Audio': '语音',
    'Interaction method': '交互方式',
    'Glance, then decide.': '看一眼，再决定。',
    'A compact proposal puts the next decision within reach.': '简洁的方案，让下一步决定触手可及。',
    'Touch · Short sessions': '触控 · 短时使用',
    'Proposal': '方案',
    'Your preferences': '你的偏好',
    'Somewhere quiet': '安静的地方',
    'Near the river': '靠近河边',
    'After 6 PM': '晚上 6 点之后',
    'Review the same proposal': '查看同一个方案，',
    'with more room for context.': '留出更多空间呈现相关信息。',
    'A brief spoken proposal': '简短的语音提议',
    '“Juniper, Thursday at 6:30.': '「Juniper，周四晚上 6:30。',
    'Shall I keep this plan?”': '要保留这个计划吗？」',
    'The visual proposal is available when you need it.': '需要时，随时打开可视化方案。',
    '“Yes, keep it”': '「好，保留吧」',
    '“Show me”': '「给我看看」',
    'Transcript example. This demo does not play or record audio.': '语音转写示例。此演示不会播放或录制音频。',
    'Dinner reminder': '晚餐提醒',
    'Voice when you choose.': '喜欢语音时，就用语音。',
    'One request, one easy decision.': '一个请求，一个简单决定。',
    'Text stays available on a suitable device.': '适合文字输入的设备，始终保留文字入口。',
    'Try voice': '试试语音',
    'Text input': '文字输入',
    'Remind me to have dinner tomorrow evening.': '明晚提醒我吃晚餐。',
    'Preview text': '预览文字请求',
    'Choose how to start.': '选择你喜欢的方式开始。',
    'Remind you to have dinner tomorrow at 7:00 PM?': '明天晚上 7:00，提醒你吃晚餐？',
    'Use this typed request?': '使用这条文字请求？',
    'Confirm': '确认',
    'Cancel': '取消',
    'Try again': '再试一次',
    'Confirmed in this example.': '已在示例中确认。',
    'Cancelled in this example.': '已在示例中取消。',
    'No reminder was created.': '没有创建真实提醒。',
    'Local simulation. Voice and text do not create a real reminder.': '本地模拟示例。语音与文字不会创建真实提醒。',
    'Example request ready for one confirmation.': '示例请求已就绪，只需一次确认。',
    'Text request ready for review.': '文字请求已就绪，等待确认。',
    'Example reset. Choose voice or text.': '示例已重置，可选择语音或文字。',
    'Enter a request to preview.': '输入请求后即可预览。',
    'Dinner': '晚餐',
    'Price watch': '价格关注',
    'Foreground task': '前台任务',
    'Foreground': '前台',
    'THU': '周四',
    'One decision': '一个决定',
    'Does 6:30 work?': '晚上 6:30 方便吗？',
    'Juniper has a table for two.': 'Juniper 有一张双人桌。',
    'Keep this time': '保留这个时间',
    'Try 7:00': '试试晚上 7:00',
    'Proposal ready to review.': '方案已准备好，等待查看。',
    'Monitoring quietly': '安静地关注中',
    'Travel headphones': '旅行耳机',
    'Waiting for $180.': '等待价格降至 $180。',
    'Example price: $219': '示例价格：$219',
    '$180 target': '目标价 $180',
    '$219 today': '今日示例价 $219',
    'Illustrative prices. No live monitoring is running.': '价格仅用于演示。并未进行实时监测。',
    'Proposal ready': '方案已准备好',
    'Mail': '邮件',
    'Draft': '草稿',
    'To': '收件人',
    'Subject': '主题',
    'See you Thursday': '周四见',
    'Hi Alex,': 'Alex，你好：',
    'Looking forward to catching up next week.': '期待下周见面，好好聊聊近况。',
    'How does Thursday evening sound?': '周四晚上方便吗？',
    'Voice is off': '语音已关闭',
    'Available when you choose': '由你决定何时开启',
    'Voice is active': '语音使用中',
    'Background state simulation': '后台状态演示',
    'Voice is paused': '语音已暂停',
    'Resume when you are ready': '准备好后再继续',
    'Start': '开启',
    'Pause': '暂停',
    'Stop': '停止',
    'Resume': '继续',
    'Try the voice states while the writing task stays in view. No microphone is accessed.': '试试语音状态切换，写作任务始终留在眼前。不会访问麦克风。',
    'Recommendation': '推荐',
    'Your best fit': '最适合你的选择',
    'Quiet tables, seasonal food, and a short walk.': '安静的座位、时令菜肴，步行即可抵达。',
    'Table for 2': '双人桌',
    'Why this recommendation': '为什么推荐这里',
    'It matches the three preferences in this example: a quiet setting, a table after 6 PM, and a location near the river.': '它符合示例中的三项偏好：环境安静、晚上 6 点后有座位，并且靠近河边。',
    'Explore alternatives': '查看其他选择',
    'More lively · Mediterranean': '更热闹 · 地中海料理',
    'More casual · Neighborhood café': '更休闲 · 社区咖啡馆',
    'Quiet · Modern bistro': '安静 · 现代小餐馆',
    'Choose': '选择',
    'Choose Olive Room': '选择 Olive Room',
    'Choose Little Table': '选择 Little Table',
    'Choose Juniper': '选择 Juniper',
    'Mediterranean food and a lively setting nearby.': '就在附近，提供地中海料理，气氛热闹。',
    'You selected this alternative. Its nearby location fits the plan; its lively atmosphere differs from the original preference for a quiet setting.': '你选择了这个备选方案。它的位置符合就近用餐的计划，但气氛较热闹，与原先偏好的安静环境不同。',
    'A casual neighborhood café with a relaxed feel.': '一间轻松随意的社区咖啡馆。',
    'You selected this alternative for its casual setting. It is a longer walk than the original recommendation.': '你选择了更休闲的环境。与原先的推荐相比，步行距离稍远。',
    'Your selected alternative': '你选中的备选方案',
    'Schedule': '安排时间',
    'Compare': '比较',
    'Edit': '编辑',
    'Task interface': '任务界面',
    'Find a time': '选择时间',
    'A week, at a glance.': '一周安排，一目了然。',
    'Example available evening dates': '示例中可选的晚餐日期',
    'Mon': '周一',
    'Tue': '周二',
    'Wed': '周三',
    'Thu': '周四',
    'Fri': '周五',
    'Monday': '周一',
    'Tuesday': '周二',
    'Wednesday': '周三',
    'Thursday': '周四',
    'Friday': '周五',
    '6:30 PM': '晚上 6:30',
    '7:00 PM': '晚上 7:00',
    '7:30 PM': '晚上 7:30',
    'Available': '可选',
    'Choose a place': '选择地点',
    'Compare what matters.': '比较你关心的细节。',
    'Example restaurant comparison': '餐厅比较示例',
    'Place': '地点',
    'Atmosphere': '氛围',
    'Walk': '步行',
    'Quiet': '安静',
    'Lively': '热闹',
    'Casual': '休闲',
    '12 min': '12 分钟',
    '8 min': '8 分钟',
    '15 min': '15 分钟',
    'Make it yours': '按你的想法调整',
    'Edit the invitation.': '编辑邀请内容。',
    'Selected time: Thursday, 6:30 PM': '已选时间：周四，晚上 6:30',
    'Message to Alex': '给 Alex 的消息',
    'Hi Alex, dinner at Juniper on Thursday at 6:30?': 'Alex，周四晚上 6:30 在 Juniper 吃晚餐，怎么样？',
    'Keep draft': '保留草稿',
    'Only a local example': '仅为本地示例',
    'Same task · Same controls · Different working view': '同一任务 · 同样的操作 · 不同的工作视图',
    'Schedule changed; review draft': '时间已变更，请检查草稿',
    'Draft kept for review': '草稿已保留，等待检查',
    'Draft kept in this example': '草稿已保留在示例中',
    'Editing local draft': '正在编辑本地草稿',
    'Review': '确认',
    'Waiting for approval': '等待你确认',
    'Ready when you are.': '准备好了，由你决定。',
    'Review the invitation before the assistant takes the next step.': '先检查邀请内容，再让助理执行下一步。',
    'Proposed invitation': '待确认的邀请',
    'Alex · Dinner at Juniper': 'Alex · 在 Juniper 共进晚餐',
    'Thursday at 6:30 PM': '周四晚上 6:30',
    'Dinner time': '晚餐时间',
    'Keep change': '保留修改',
    'Approve example': '确认示例',
    'Example only. No invitation will be sent.': '仅为示例。不会发送邀请。',
    'Reset': '重置',
    'Simulation complete': '演示已完成',
    'Stopped': '已停止',
    'Example approved.': '示例已确认。',
    'The task is stopped.': '任务已停止。',
    'The simulated approval step is complete. No invitation was sent.': '模拟确认步骤已完成。没有发送邀请。',
    'The proposed invitation remains here for review. No action was taken.': '邀请方案仍保留在这里，供你查看。未执行任何操作。',
    'No real message, reservation, or account action.': '未发送消息、预订座位或操作真实账号。',
    'Reset to try the example again.': '重置后可再次体验此示例。',
    'Approval simulation complete. No invitation was sent.': '模拟确认已完成。没有发送邀请。',
    'Task stopped. No action was taken.': '任务已停止。未执行任何操作。',
    'Example reset. Waiting for approval.': '示例已重置，等待你确认。',
    'Continue on another device': '在另一台设备上继续',
    'Your plan': '你的计划',
    'Pick up here.': '从这里接着做。',
    'The choices and unfinished draft travel with the task.': '已选内容和未完成的草稿，随任务一起延续。',
    'Time': '时间',
    'Unfinished message': '未完成的消息',
    'Hi Alex, how about dinner': 'Alex，一起吃晚餐怎么样',
    'Kept in this example': '已保留在示例中',
    'Continue on Desktop.': '在桌面端继续。',
    'Change the time or the draft, then switch devices above.': '修改时间或草稿，再用上方选项切换设备。',
    'Intention · Choices · Progress': '意图 · 选择 · 进度',
    'Continued from phone': '从手机端继续',
    'Right where you left it.': '回到上次停下的地方。',
    'Juniper · Table for two': 'Juniper · 双人桌',
    'These two views share local state. There is no real device sync.': '两个视图共享本地状态。并未进行真实的设备同步。'
  };
  const chineseDay = day => chineseCopy[day] || day;
  const chineseTime = time => /^\d+:\d+ PM$/.test(time) ? `晚上 ${time.slice(0, -3)}` : time;
  function localizeText(value, locale) {
    if (locale !== 'zh') return value;
    if (Object.hasOwn(chineseCopy, value)) return chineseCopy[value];
    const patterns = [
      [/^Does (\d+:\d+) work\?$/, time => `晚上 ${time} 方便吗？`],
      [/^Try (\d+:\d+)$/, time => `试试晚上 ${time}`],
      [/^(\d+:\d+) PM kept in this example\.$/, time => `示例中已保留晚上 ${time}。`],
      [/^(\d+:\d+) PM kept$/, time => `已保留晚上 ${time}`],
      [/^Dinner time set to (\d+:\d+) PM in this example\.$/, time => `示例中的晚餐时间已设为晚上 ${time}。`],
      [/^Voice state: (off|active|paused)\. Simulation only\.$/, state => `语音状态：${{off:'已关闭',active:'使用中',paused:'已暂停'}[state]}。仅为模拟演示。`],
      [/^(.+) is now the primary recommendation\.$/, name => `${name} 现在是主要推荐。`],
      [/^Selected time: (Monday|Tuesday|Wednesday|Thursday|Friday), 6:30 PM$/, day => `已选时间：${chineseDay(day)}，晚上 6:30`],
      [/^Hi Alex, dinner at Juniper on (Monday|Tuesday|Wednesday|Thursday|Friday) at 6:30\?$/, day => `Alex，${chineseDay(day)}晚上 6:30 在 Juniper 吃晚餐，怎么样？`],
      [/^Draft updated for (Monday|Tuesday|Wednesday|Thursday|Friday)$/, day => `草稿已更新为${chineseDay(day)}`],
      [/^(Monday|Tuesday|Wednesday|Thursday|Friday) selected in this example\. Your edited draft is preserved; review it for the new date\.$/, day => `示例中已选择${chineseDay(day)}。你的修改已保留，请按新日期检查草稿。`],
      [/^(Monday|Tuesday|Wednesday|Thursday|Friday) selected in this example\. The invitation draft was updated\.$/, day => `示例中已选择${chineseDay(day)}。邀请草稿已更新。`],
      [/^Invitation draft kept locally in this example\. Schedule changed; review the draft before using it\. Nothing was sent\.$/, () => '邀请草稿已保留在本地示例中。时间已变更，使用前请检查草稿。没有发送任何内容。'],
      [/^Invitation draft kept locally in this example\. Nothing was sent\.$/, () => '邀请草稿已保留在本地示例中。没有发送任何内容。'],
      [/^Thursday at (\d+:\d+ PM)$/, time => `周四${chineseTime(time)}`],
      [/^Proposed time changed to (\d+:\d+ PM)\. Still waiting for approval\.$/, time => `提议时间已改为${chineseTime(time)}，仍在等待你确认。`],
      [/^Time kept as (\d+:\d+ PM)\. Switch devices to continue\.$/, time => `时间已保留为${chineseTime(time)}。切换设备后可继续。`]
    ];
    for (const [pattern, replace] of patterns) {
      const match = value.match(pattern);
      if (match) return replace(...match.slice(1));
    }
    return value;
  }
  function localizeMarkup(html, locale) {
    if (locale !== 'zh') return html;
    // Translate content and accessible names only. IDs, values and action tokens stay stable.
    return html.replace(/>([^<]+)</g, (_, text) => `>${localizeText(text, locale)}<`)
      .replace(/aria-label="([^"]+)"/g, (_, label) => `aria-label="${localizeText(label, locale)}"`);
  }
  const icons = {
    calendar: '<rect x="4" y="6" width="16" height="15" rx="3"/><path d="M8 3v6m8-6v6M4 11h16m-12 4h3"/>',
    spark: '<path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3Z"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="3"/><path d="m3 7 9 6 9-6"/>',
    audio: '<path d="M4 10v4m4-7v10m4-13v16m4-13v10m4-7v4"/>',
    arrow: '<path d="M5 12h14m-5-5 5 5-5 5"/>',
    menu: '<path d="M5 7h14M5 12h14M5 17h14"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    location: '<path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 0 1 14 0Z"/><circle cx="12" cy="10" r="2"/>'
  };
  const icon = (name, cls = '') => `<svg class="demo-icon ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name] || icons.spark}</svg>`;
  const pill = (label, cls = '') => `<span class="demo-pill ${cls}">${label}</span>`;
  const button = (label, action, cls = '', attributes = '') => `<button type="button" class="demo-button ${cls}" data-demo-action="${action}" ${attributes}>${label}</button>`;
  const bar = (title, subtitle = '') => `<div class="demo-appbar"><span class="demo-appmark">${icon('spark')}</span><span class="demo-appname">${title}</span>${subtitle ? `<span class="demo-appsubtitle">${subtitle}</span>` : ''}</div>`;
  const phone = (content, label = 'Phone interface') => `<div class="demo-phone" role="group" aria-label="${label}"><div class="demo-phone-status"><span>9:41</span><span class="demo-phone-island"></span><span>•••</span></div>${content}<div class="demo-home-indicator" aria-hidden="true"></div></div>`;
  const desktop = (content, label = 'Desktop interface') => `<div class="demo-desktop" role="group" aria-label="${label}"><div class="demo-windowbar" aria-hidden="true"><i></i><i></i><i></i><span>Assistant</span></div>${content}</div>`;
  const tabs = (prefix, items, label, panels) => `<div class="demo-tabs" role="tablist" aria-label="${label}">${items.map((item, i) => `<button type="button" role="tab" class="demo-tab" id="${prefix}-tab-${item.key}" aria-controls="${prefix}-panel-${item.key}" aria-selected="${i === 0}" tabindex="${i === 0 ? '0' : '-1'}" data-demo-tab="${item.key}">${item.name}</button>`).join('')}</div><div class="demo-panels">${items.map((item, i) => `<div role="tabpanel" class="demo-panel" id="${prefix}-panel-${item.key}" aria-labelledby="${prefix}-tab-${item.key}" tabindex="0" ${i ? 'hidden' : ''}>${panels[item.key]}</div>`).join('')}</div>`;
  const dinner = (compact = false) => `<div class="demo-taskbody"><div class="demo-eyebrow">Dinner with Alex</div><h3>Thursday, sorted.</h3><p class="demo-muted">A quiet table. Time to catch up.</p><div class="demo-restaurant ${compact ? 'demo-restaurant-compact' : ''}"><div class="demo-restaurant-art" aria-hidden="true"><span class="demo-plate"></span><span class="demo-fork"></span><span class="demo-glass"></span></div><div><h4>Juniper</h4><p>Modern bistro · 12 minutes away</p></div></div><div class="demo-factline">${icon('calendar')}<span>Thursday · 6:30 PM</span></div><div class="demo-factline">${icon('location')}<span>River Street · Table for 2</span></div><div class="demo-quiet-note">Ready for your review</div></div>`;
  const contextTask = (p, device, withText = true) => `<div class="demo-context-task"><span class="demo-eyebrow">Dinner reminder</span><h3 data-context-heading>Choose how to start.</h3><div class="demo-context-start" data-context-start>${button('Try voice','context-voice')}</div><div class="demo-context-proposal" data-context-proposal hidden><p class="demo-context-request" data-context-request></p><div class="demo-context-actions" data-context-actions>${button('Confirm','context-confirm')}${button('Cancel','context-cancel','demo-button-secondary')}</div><p class="demo-small-note" data-context-result hidden>No reminder was created.</p>${button('Try again','context-reset','demo-button-secondary','data-context-reset hidden')}</div>${withText ? `<form class="demo-context-text" data-context-form><label class="demo-field-label" for="${p}-${device}-request">Text input</label><textarea id="${p}-${device}-request" class="demo-textarea" rows="2" maxlength="200" data-context-input>Remind me to have dinner tomorrow evening.</textarea><button type="submit" class="demo-button demo-button-secondary" data-context-preview>Preview text</button></form>` : ''}</div>`;
  const context = p => tabs(p, [{key:'phone',name:'Phone'},{key:'desktop',name:'Desktop'},{key:'audio',name:'Audio'}], 'Interaction method', {
    phone: `<div class="demo-device-stage">${phone(bar('Assistant') + contextTask(p, 'phone'))}<div class="demo-side-caption"><span class="demo-caption-number">01</span><h4>Voice when you choose.</h4><p>One request, one easy decision.</p><span class="demo-caption-rule"></span><span>Text stays available on a suitable device.</span></div></div>`,
    desktop: `<div class="demo-device-stage demo-stage-wide">${desktop(bar('Assistant') + contextTask(p, 'desktop'))}</div>`,
    audio: `<div class="demo-audio-scene"><div class="demo-audio-orbit" aria-hidden="true">${icon('audio')}</div>${contextTask(p, 'audio', false)}</div>`
  }) + '<p class="demo-under-note">Local simulation. Voice and text do not create a real reminder.</p>';
  const focus = p => tabs(p, [{key:'dinner',name:'Dinner'},{key:'watch',name:'Price watch'}], 'Foreground task', {
    dinner: `<div class="demo-focus-shell">${bar('Dinner with Alex', 'Foreground')}<div class="demo-focus-content"><div class="demo-mini-calendar"><span>THU</span><strong>15</strong></div><div><span class="demo-eyebrow">One decision</span><h3 data-focus-heading>Does 6:30 work?</h3><p class="demo-muted">Juniper has a table for two.</p><div class="demo-focus-actions">${button('Keep this time','keep-time')}${button('Try 7:00','later-time','demo-button-secondary')}</div><p class="demo-action-feedback" data-focus-feedback>Proposal ready to review.</p></div></div><div class="demo-background-row"><span class="demo-status-dot"></span><span>Price watch</span><span class="demo-muted">Monitoring quietly</span></div></div>`,
    watch: `<div class="demo-focus-shell">${bar('Price watch', 'Foreground')}<div class="demo-focus-content"><div class="demo-product-art" aria-hidden="true"><span></span><i></i></div><div><span class="demo-eyebrow">Travel headphones</span><h3>Waiting for $180.</h3><p class="demo-muted">Example price: $219</p><div class="demo-price-line"><span>$180 target</span><span>$219 today</span></div><div class="demo-price-track" aria-hidden="true"><span></span></div><p class="demo-small-note">Illustrative prices. No live monitoring is running.</p></div></div><div class="demo-background-row">${icon('calendar')}<span>Dinner with Alex</span><span class="demo-muted" data-focus-background>Proposal ready</span></div></div>`
  });
  const voice = p => `<div class="demo-mail-shell">${bar('Mail', 'Draft')}<div class="demo-mail-content"><div class="demo-mail-meta"><span>To</span><strong>Alex</strong></div><div class="demo-mail-meta"><span>Subject</span><strong>See you Thursday</strong></div><div class="demo-mail-draft"><p>Hi Alex,</p><p>Looking forward to catching up next week.</p><p>How does Thursday evening sound?</p><span class="demo-fake-caret" aria-hidden="true"></span></div><div class="demo-voice-accessory" data-voice-accessory><span class="demo-voice-symbol">${icon('audio')}</span><div><strong data-voice-status>Voice is off</strong><span data-voice-caption>Available when you choose</span></div><span class="demo-voice-dot" aria-hidden="true"></span></div></div></div><div class="demo-controls demo-controls-centered">${button('Start','voice-start')}${button('Pause','voice-pause','demo-button-secondary')}${button('Stop','voice-stop','demo-button-secondary')}</div><p class="demo-under-note">Try the voice states while the writing task stays in view. No microphone is accessed.</p>`;
  const outcome = p => `<div class="demo-result-shell">${bar('Dinner with Alex', 'Recommendation')}<div class="demo-result-body"><span class="demo-eyebrow" data-result-label>Your best fit</span><div class="demo-recommendation"><div class="demo-recommendation-number" aria-hidden="true">1</div><div><h3 data-result-name>Juniper</h3><p class="demo-muted" data-result-description>Quiet tables, seasonal food, and a short walk.</p></div></div><div class="demo-result-meta">${pill('Thursday · 6:30 PM')}${pill('Table for 2')}</div><details class="demo-disclosure"><summary>Why this recommendation<span aria-hidden="true">+</span></summary><p data-result-reason>It matches the three preferences in this example: a quiet setting, a table after 6 PM, and a location near the river.</p></details><details class="demo-disclosure"><summary>Explore alternatives<span aria-hidden="true">+</span></summary><div class="demo-alternative"><div><strong>Olive Room</strong><span>More lively · Mediterranean</span></div>${button('Choose','choose-olive','demo-button-text','aria-label="Choose Olive Room"')}</div><div class="demo-alternative"><div><strong>Little Table</strong><span>More casual · Neighborhood café</span></div>${button('Choose','choose-table','demo-button-text','aria-label="Choose Little Table"')}</div><div class="demo-alternative"><div><strong>Juniper</strong><span>Quiet · Modern bistro</span></div>${button('Choose','choose-juniper','demo-button-text','aria-label="Choose Juniper"')}</div></details></div></div>`;
  const generated = p => `<div class="demo-generated-shell">${bar('Assistant', 'Dinner with Alex')}${tabs(p, [{key:'schedule',name:'Schedule'},{key:'compare',name:'Compare'},{key:'edit',name:'Edit'}], 'Task interface', {
    schedule: `<div class="demo-generated-content"><div class="demo-generated-heading"><div><span class="demo-eyebrow">Find a time</span><h3>A week, at a glance.</h3></div>${icon('calendar')}</div><div class="demo-week" role="group" aria-label="Example available evening dates">${['Mon','Tue','Wed','Thu','Fri'].map((d,i) => `<button type="button" class="demo-day ${i === 3 ? 'demo-day-selected' : ''}" aria-pressed="${i === 3}" data-demo-action="calendar-day" data-day="${d}"><span>${d}</span><strong>${12+i}</strong><span class="demo-day-dot" aria-hidden="true"></span></button>`).join('')}</div><div class="demo-time-card"><span data-schedule-day>Thursday</span><strong>6:30 PM</strong>${pill('Available')}</div></div>`,
    compare: `<div class="demo-generated-content"><div class="demo-generated-heading"><div><span class="demo-eyebrow">Choose a place</span><h3>Compare what matters.</h3></div>${icon('location')}</div><div class="demo-compare-table" role="table" aria-label="Example restaurant comparison"><div role="row" class="demo-compare-header"><span role="columnheader">Place</span><span role="columnheader">Atmosphere</span><span role="columnheader">Walk</span></div><div role="row"><strong role="cell">Juniper</strong><span role="cell">Quiet</span><span role="cell">12 min</span></div><div role="row"><strong role="cell">Olive Room</strong><span role="cell">Lively</span><span role="cell">8 min</span></div><div role="row"><strong role="cell">Little Table</strong><span role="cell">Casual</span><span role="cell">15 min</span></div></div></div>`,
    edit: `<div class="demo-generated-content"><div class="demo-generated-heading"><div><span class="demo-eyebrow">Make it yours</span><h3>Edit the invitation.</h3></div>${icon('mail')}</div><p class="demo-draft-schedule" data-invitation-date>Selected time: Thursday, 6:30 PM</p><label class="demo-field-label" for="${p}-invitation">Message to Alex</label><textarea id="${p}-invitation" class="demo-textarea" rows="3" data-invitation>Hi Alex, dinner at Juniper on Thursday at 6:30?</textarea><div class="demo-edit-footer">${button('Keep draft','keep-invitation')}<span class="demo-muted" data-invitation-status>Only a local example</span></div></div>`
  })}<div class="demo-stable-footer"><span class="demo-status-dot"></span><span>Same task · Same controls · Different working view</span></div></div>`;
  const control = p => `<div class="demo-control-shell">${bar('Dinner with Alex', 'Review')}<div class="demo-control-content"><div class="demo-control-status"><span class="demo-control-badge" data-control-icon>${icon('clock')}</span><span class="demo-eyebrow" data-control-stage>Waiting for approval</span></div><h3 data-control-heading>Ready when you are.</h3><p class="demo-muted" data-control-description>Review the invitation before the assistant takes the next step.</p><div class="demo-approval-card"><span class="demo-eyebrow">Proposed invitation</span><strong>Alex · Dinner at Juniper</strong><span data-control-time>Thursday at 6:30 PM</span></div><div class="demo-control-edit" hidden><label class="demo-field-label" for="${p}-approval-time">Dinner time</label><select id="${p}-approval-time" class="demo-select" data-approval-time><option value="6:30 PM">6:30 PM</option><option value="7:00 PM">7:00 PM</option><option value="7:30 PM">7:30 PM</option></select>${button('Keep change','control-save','demo-button-secondary')}</div><div class="demo-control-actions">${button('Approve example','control-approve')}${button('Edit','control-edit','demo-button-secondary')}${button('Stop','control-stop','demo-button-text')}</div><div class="demo-control-bottom"><span data-control-note>Example only. No invitation will be sent.</span>${button('Reset','control-reset','demo-button-text')}</div></div></div>`;
  const continuity = p => tabs(p, [{key:'phone',name:'Phone'},{key:'desktop',name:'Desktop'}], 'Continue on another device', {
    phone: `<div class="demo-device-stage">${phone(bar('Dinner with Alex') + `<div class="demo-continuity-body"><span class="demo-eyebrow">Your plan</span><h3>Pick up here.</h3><p class="demo-muted">The choices and unfinished draft travel with the task.</p><label class="demo-field-label" for="${p}-phone-time">Time</label><select id="${p}-phone-time" class="demo-select" data-continuity-time><option value="6:30 PM">6:30 PM</option><option value="7:00 PM">7:00 PM</option><option value="7:30 PM">7:30 PM</option></select><label class="demo-field-label" for="${p}-phone-draft">Unfinished message</label><textarea id="${p}-phone-draft" class="demo-textarea" rows="3" data-continuity-draft>Hi Alex, how about dinner</textarea><div class="demo-saved-indicator">${icon('check')}<span>Kept in this example</span></div></div>`)}<div class="demo-side-caption"><span class="demo-caption-number">↗</span><h4>Continue on Desktop.</h4><p>Change the time or the draft, then switch devices above.</p><span class="demo-caption-rule"></span><span>Intention · Choices · Progress</span></div></div>`,
    desktop: `<div class="demo-device-stage demo-stage-wide">${desktop(bar('Dinner with Alex', 'Continued from phone') + `<div class="demo-continuity-desktop"><div><span class="demo-eyebrow">Your plan</span><h3>Right where you left it.</h3><p class="demo-muted">Juniper · Table for two</p><label class="demo-field-label" for="${p}-desktop-time">Time</label><select id="${p}-desktop-time" class="demo-select" data-continuity-time><option value="6:30 PM">6:30 PM</option><option value="7:00 PM">7:00 PM</option><option value="7:30 PM">7:30 PM</option></select><div class="demo-saved-indicator">${icon('check')}<span>Kept in this example</span></div></div><div><label class="demo-field-label" for="${p}-desktop-draft">Unfinished message</label><textarea id="${p}-desktop-draft" class="demo-textarea" rows="6" data-continuity-draft>Hi Alex, how about dinner</textarea><p class="demo-small-note">These two views share local state. There is no real device sync.</p></div></div>`)}</div>`
  });
  const renders = {context, focus, voice, outcome, 'generated-ui':generated, control, continuity};

  function render(id) {
    if (!renders[id]) return '';
    const prefix = `demo-${id}-${++sequence}`;
    const locale = typeof document !== 'undefined' && document.documentElement.lang.startsWith('zh') ? 'zh' : 'en';
    return localizeMarkup(`<div class="demo-example" data-demo-root="${id}" data-demo-locale="${locale}">${renders[id](prefix)}<div class="demo-sr-only" role="status" aria-live="polite" aria-atomic="true" data-demo-announcement></div></div>`, locale);
  }

  function init(container) {
    const root = container.matches('[data-demo-root]') ? container : container.querySelector('[data-demo-root]');
    if (!root || root.dataset.demoInitialized) return;
    root.dataset.demoInitialized = 'true';
    const translate = value => localizeText(value, root.dataset.demoLocale || 'en');
    const one = selector => root.querySelector(selector);
    const all = selector => [...root.querySelectorAll(selector)];
    const announce = value => { one('[data-demo-announcement]').textContent = translate(value); };
    const setText = (selector, value) => { const el = one(selector); if (el) el.textContent = translate(value); };
    const selectTab = (tab, moveFocus = false) => {
      const group = tab.closest('[role="tablist"]');
      [...group.querySelectorAll('[role="tab"]')].forEach(item => {
        const selected = item === tab;
        item.setAttribute('aria-selected', String(selected));
        item.tabIndex = selected ? 0 : -1;
        const panel = document.getElementById(item.getAttribute('aria-controls'));
        if (panel) panel.hidden = !selected;
      });
      if (moveFocus) tab.focus();
    };
    all('[role="tablist"]').forEach(group => {
      group.addEventListener('click', event => {
        const tab = event.target.closest('[role="tab"]');
        if (tab && group.contains(tab)) selectTab(tab);
      });
      group.addEventListener('keydown', event => {
        const tab = event.target.closest('[role="tab"]');
        if (!tab) return;
        const items = [...group.querySelectorAll('[role="tab"]')];
        const index = items.indexOf(tab);
        let next;
        if (event.key === 'ArrowRight') next = (index + 1) % items.length;
        if (event.key === 'ArrowLeft') next = (index - 1 + items.length) % items.length;
        if (event.key === 'Home') next = 0;
        if (event.key === 'End') next = items.length - 1;
        if (next !== undefined) { event.preventDefault(); selectTab(items[next], true); }
      });
    });

    // One local request travels across the context views. Voice uses a fixed
    // transcript; text is shown verbatim, without claiming language understanding.
    let contextStage = 'idle';
    let contextKind = 'voice';
    let contextDraft = translate('Remind me to have dinner tomorrow evening.');
    let contextRequest = contextDraft;
    const paintContext = () => {
      const headings = {
        idle: 'Choose how to start.',
        pending: contextKind === 'voice' ? 'Remind you to have dinner tomorrow at 7:00 PM?' : 'Use this typed request?',
        confirmed: 'Confirmed in this example.',
        cancelled: 'Cancelled in this example.'
      };
      const finished = contextStage === 'confirmed' || contextStage === 'cancelled';
      all('[data-context-heading]').forEach(el => { el.textContent = translate(headings[contextStage]); });
      all('[data-context-request]').forEach(el => { el.textContent = contextRequest; });
      all('[data-context-start]').forEach(el => { el.hidden = contextStage !== 'idle'; });
      all('[data-context-proposal]').forEach(el => { el.hidden = contextStage === 'idle'; });
      all('[data-context-actions]').forEach(el => { el.hidden = contextStage !== 'pending'; });
      all('[data-context-result], [data-context-reset]').forEach(el => { el.hidden = !finished; });
      all('[data-context-preview]').forEach(el => { el.disabled = !contextDraft.trim(); });
    };
    const focusContext = (source, selector) => {
      const panel = source.closest('[role="tabpanel"]');
      if (panel) panel.querySelector(selector)?.focus();
    };
    if (root.dataset.demoRoot === 'context') {
      paintContext();
      all('[data-context-input]').forEach(input => input.addEventListener('input', () => {
        contextDraft = input.value;
        all('[data-context-input]').forEach(other => { if (other !== input) other.value = contextDraft; });
        all('[data-context-preview]').forEach(el => { el.disabled = !contextDraft.trim(); });
      }));
      all('[data-context-form]').forEach(form => form.addEventListener('submit', event => {
        event.preventDefault();
        if (!contextDraft.trim()) { announce('Enter a request to preview.'); return; }
        contextKind = 'text';
        contextRequest = contextDraft.trim();
        contextStage = 'pending';
        paintContext();
        focusContext(form, '[data-demo-action="context-confirm"]');
        announce('Text request ready for review.');
      }));
    }

    let focusTime = '6:30';
    let generatedDay = 'Thursday';
    let generatedDraftDirty = false;
    let generatedNeedsReview = false;
    let voiceState = 'off';
    const setVoice = state => {
      voiceState = state;
      const labels = {off:['Voice is off','Available when you choose'], active:['Voice is active','Background state simulation'], paused:['Voice is paused','Resume when you are ready']};
      setText('[data-voice-status]', labels[state][0]);
      setText('[data-voice-caption]', labels[state][1]);
      one('[data-voice-accessory]').dataset.state = state;
      one('[data-demo-action="voice-start"]').textContent = translate(state === 'paused' ? 'Resume' : 'Start');
      one('[data-demo-action="voice-start"]').disabled = state === 'active';
      one('[data-demo-action="voice-pause"]').disabled = state !== 'active';
      one('[data-demo-action="voice-stop"]').disabled = state === 'off';
    };
    if (root.dataset.demoRoot === 'voice') setVoice('off');

    const resetControl = () => {
      setText('[data-control-stage]', 'Waiting for approval');
      setText('[data-control-heading]', 'Ready when you are.');
      setText('[data-control-description]', 'Review the invitation before the assistant takes the next step.');
      setText('[data-control-note]', 'Example only. No invitation will be sent.');
      setText('[data-control-time]', 'Thursday at 6:30 PM');
      one('[data-approval-time]').value = '6:30 PM';
      one('[data-control-icon]').innerHTML = icon('clock');
      one('.demo-control-shell').dataset.state = 'pending';
      one('.demo-control-edit').hidden = true;
      all('.demo-control-actions button').forEach(el => { el.disabled = false; });
    };

    root.addEventListener('click', event => {
      const target = event.target.closest('[data-demo-action]');
      if (!target || !root.contains(target) || target.disabled) return;
      const action = target.dataset.demoAction;
      if (action === 'context-voice') {
        contextKind = 'voice';
        contextRequest = translate('Remind me to have dinner tomorrow evening.');
        contextStage = 'pending';
        paintContext();
        focusContext(target, '[data-demo-action="context-confirm"]');
        announce('Example request ready for one confirmation.');
      } else if (action === 'context-confirm' || action === 'context-cancel') {
        if (contextStage !== 'pending') return;
        contextStage = action === 'context-confirm' ? 'confirmed' : 'cancelled';
        paintContext();
        focusContext(target, '[data-context-reset]');
        announce(`${translate(contextStage === 'confirmed' ? 'Confirmed in this example.' : 'Cancelled in this example.')} ${translate('No reminder was created.')}`);
      } else if (action === 'context-reset') {
        contextStage = 'idle';
        paintContext();
        focusContext(target, '[data-demo-action="context-voice"]');
        announce('Example reset. Choose voice or text.');
      } else if (action === 'keep-time' || action === 'later-time') {
        if (action === 'later-time') focusTime = focusTime === '6:30' ? '7:00' : '6:30';
        const time = focusTime;
        setText('[data-focus-heading]', `Does ${time} work?`);
        setText('[data-demo-action="later-time"]', `Try ${time === '6:30' ? '7:00' : '6:30'}`);
        setText('[data-focus-feedback]', `${time} PM kept in this example.`);
        setText('[data-focus-background]', `${time} PM kept`);
        announce(`Dinner time set to ${time} PM in this example.`);
      } else if (action.startsWith('voice-')) {
        const state = action === 'voice-start' ? 'active' : action === 'voice-pause' ? 'paused' : 'off';
        if (voiceState !== state) { setVoice(state); announce(`Voice state: ${state}. Simulation only.`); }
      } else if (action.startsWith('choose-')) {
        const choices = {olive:['Olive Room','Mediterranean food and a lively setting nearby.','You selected this alternative. Its nearby location fits the plan; its lively atmosphere differs from the original preference for a quiet setting.'],table:['Little Table','A casual neighborhood café with a relaxed feel.','You selected this alternative for its casual setting. It is a longer walk than the original recommendation.'],juniper:['Juniper','Quiet tables, seasonal food, and a short walk.','It matches the three preferences in this example: a quiet setting, a table after 6 PM, and a location near the river.']};
        const choice = choices[action.slice(7)];
        setText('[data-result-name]', choice[0]);
        setText('[data-result-description]', choice[1]);
        setText('[data-result-reason]', choice[2]);
        setText('[data-result-label]', action === 'choose-juniper' ? 'Your best fit' : 'Your selected alternative');
        announce(`${choice[0]} is now the primary recommendation.`);
      } else if (action === 'calendar-day') {
        all('[data-demo-action="calendar-day"]').forEach(el => {
          el.classList.toggle('demo-day-selected', el === target);
          el.setAttribute('aria-pressed', String(el === target));
        });
        const days = {Mon:'Monday',Tue:'Tuesday',Wed:'Wednesday',Thu:'Thursday',Fri:'Friday'};
        const selectedDay = days[target.dataset.day];
        if (generatedDay !== selectedDay) {
          generatedDay = selectedDay;
          setText('[data-schedule-day]', generatedDay);
          setText('[data-invitation-date]', `Selected time: ${generatedDay}, 6:30 PM`);
          if (!generatedDraftDirty) {
            one('[data-invitation]').value = translate(`Hi Alex, dinner at Juniper on ${generatedDay} at 6:30?`);
            setText('[data-invitation-status]', `Draft updated for ${generatedDay}`);
          } else {
            generatedNeedsReview = true;
            setText('[data-invitation-status]', 'Schedule changed; review draft');
          }
          announce(`${generatedDay} selected in this example.${generatedDraftDirty ? ' Your edited draft is preserved; review it for the new date.' : ' The invitation draft was updated.'}`);
        }
      } else if (action === 'keep-invitation') {
        setText('[data-invitation-status]', generatedNeedsReview ? 'Draft kept for review' : 'Draft kept in this example');
        announce(`Invitation draft kept locally in this example.${generatedNeedsReview ? ' Schedule changed; review the draft before using it.' : ''} Nothing was sent.`);
      } else if (action === 'control-edit') {
        one('.demo-control-edit').hidden = false;
        one('[data-approval-time]').focus();
      } else if (action === 'control-save') {
        const time = one('[data-approval-time]').value;
        setText('[data-control-time]', `Thursday at ${time}`);
        one('.demo-control-edit').hidden = true;
        one('[data-demo-action="control-edit"]').focus();
        announce(`Proposed time changed to ${time}. Still waiting for approval.`);
      } else if (action === 'control-approve' || action === 'control-stop') {
        const approved = action === 'control-approve';
        setText('[data-control-stage]', approved ? 'Simulation complete' : 'Stopped');
        setText('[data-control-heading]', approved ? 'Example approved.' : 'The task is stopped.');
        setText('[data-control-description]', approved ? 'The simulated approval step is complete. No invitation was sent.' : 'The proposed invitation remains here for review. No action was taken.');
        setText('[data-control-note]', approved ? 'No real message, reservation, or account action.' : 'Reset to try the example again.');
        one('[data-control-icon]').innerHTML = icon(approved ? 'check' : 'clock');
        one('.demo-control-shell').dataset.state = approved ? 'complete' : 'stopped';
        one('.demo-control-edit').hidden = true;
        all('.demo-control-actions button').forEach(el => { el.disabled = true; });
        one('[data-demo-action="control-reset"]').focus();
        announce(approved ? 'Approval simulation complete. No invitation was sent.' : 'Task stopped. No action was taken.');
      } else if (action === 'control-reset') {
        resetControl();
        announce('Example reset. Waiting for approval.');
      }
    });
    if (root.dataset.demoRoot === 'generated-ui') {
      one('[data-invitation]').addEventListener('input', () => {
        generatedDraftDirty = true;
        setText('[data-invitation-status]', generatedNeedsReview ? 'Schedule changed; review draft' : 'Editing local draft');
      });
    }
    if (root.dataset.demoRoot === 'continuity') {
      all('[data-continuity-time]').forEach(input => input.addEventListener('change', () => {
        all('[data-continuity-time]').forEach(other => { other.value = input.value; });
        announce(`Time kept as ${input.value}. Switch devices to continue.`);
      }));
      all('[data-continuity-draft]').forEach(input => input.addEventListener('input', () => {
        all('[data-continuity-draft]').forEach(other => { if (other !== input) other.value = input.value; });
      }));
    }
  }
  window.AgentExamples = {render, init};
})();
