/* Local, accessible interaction examples. No data leaves this page. */
(() => {
  'use strict';
  let sequence = 0;
  const LONG_REPLY = 'Great question! I checked Juniper for you. It’s a modern bistro on River Street, known for its seasonal menu and relaxed atmosphere. On Thursdays it’s open from 5:00 PM to 10:00 PM, so 6:30 PM falls well within its opening hours. I also looked at availability, and there currently appears to be a table for two at 6:30 PM. Keep in mind that popular time slots can fill up quickly, so availability may change. Would you like me to go ahead and make a reservation, or would you prefer to look at some other options first?';
  const chineseCopy = {
    'Phone interface': '手机界面',
    'Laptop interface': '电脑界面',
    'Assistant': '助手',
    'Dinner with Alex': '与 Alex 共进晚餐',
    'Thursday · 6:30 PM': '周四 · 晚上 6:30',
    'Phone': '手机',
    'Laptop': '电脑',
    // Brevity
    'Reply style': '回复方式',
    'Chat reply': '聊天式回复',
    'Answer first': '答案先行',
    'Is Juniper free on Thursday at 6:30?': 'Juniper 周四晚上 6:30 有位子吗？',
    [LONG_REPLY]: '好问题！我帮你查了一下 Juniper。这是一家位于河畔街的现代小餐馆，以时令菜单和轻松的氛围著称。它周四的营业时间是下午 5:00 到晚上 10:00，所以晚上 6:30 完全在营业时间内。我还查看了空位情况，目前看起来晚上 6:30 有一张双人桌。请注意，热门时段的座位可能很快被订满，空位情况随时可能变化。需要我直接帮你预订吗？还是你想先看看其他选择？',
    'Yes, a table for two at 6:30.': '有，晚上 6:30 有一张双人桌。',
    'Book it': '预订',
    'Other times': '其他时间',
    'Details': '详情',
    'Open 5–10 PM. Quiet back room. A 12-minute walk from you.': '营业时间 17:00–22:00。里间安静。离你步行 12 分钟。',
    'Somewhere in there is a yes.': '答案就藏在里面。',
    'The answer is the first line.': '第一行就是答案。',
    'About 1 second to read': '大约 1 秒读完',
    'Table held. Next: invite Alex.': '位子已为你保留。下一步：邀请 Alex。',
    'Also free: 7:00 PM and 8:15 PM.': '其他空位：晚上 7:00 和 8:15。',
    // Input
    'Mail': '邮件',
    'Draft to Alex': '给 Alex 的草稿',
    'To': '收件人',
    'Subject': '主题',
    'Dinner on Thursday?': '周四一起吃晚饭？',
    'Hi Alex,': 'Alex，你好：',
    'Looking forward to catching up next week.': '期待下周见面，好好聊聊近况。',
    'How does Thursday evening sound?': '周四晚上方便吗？',
    'Voice is off': '语音已关闭',
    'Start voice to dictate an edit': '开启语音，口述要补充的内容',
    'Type your edit': '输入要补充的内容',
    'Add': '添加',
    'Start voice': '开启语音',
    'Stop': '停止',
    'Type instead': '改为打字',
    'Reset': '重置',
    'Listening': '正在聆听',
    'Working': '正在处理',
    'Adding it to your draft…': '正在添加到草稿……',
    'Added to your draft': '已添加到草稿',
    'Added to your draft.': '已添加到草稿。',
    'Voice is off again': '语音已自动关闭',
    'Stopped': '已停止',
    'Nothing was added': '没有添加任何内容',
    'Typing instead. Your words are kept.': '已改为打字，听到的内容已保留。',
    'Typed, not spoken': '通过打字添加',
    'I’ll book Juniper for 6:30.': '我来订 Juniper 晚上 6:30 的位子。',
    'Listening. The draft stays in front.': '正在聆听，草稿保持在前台。',
    'Voice stopped. Nothing was added.': '语音已停止，没有添加任何内容。',
    'Typing instead. The words heard so far are kept.': '已改为打字，已听到的内容已保留。',
    'Typing instead.': '已改为打字。',
    'Draft reset.': '草稿已重置。',
    'Enter some text to add.': '请输入要添加的内容。',
    // Focus
    'Dinner': '晚餐',
    'Price watch': '价格关注',
    'Foreground task': '前台任务',
    'Foreground': '前台',
    'THU': '周四',
    'One decision': '一个决定',
    'Juniper has a table for two.': 'Juniper 有一张双人桌。',
    'Keep this time': '就这个时间',
    'Waiting for your choice.': '等你决定。',
    'Waiting for your choice': '等你决定',
    'Watching for $180': '关注是否降到 $180',
    'Travel headphones': '旅行耳机',
    'Waiting for $180.': '等待降至 $180。',
    '$219 today': '今日 $219',
    '$180 target': '目标价 $180',
    '$219 now': '当前 $219',
    'Simulate a price drop': '模拟一次降价',
    'Dropped to $179 · target reached': '降至 $179 · 已到目标价',
    'Target reached: $179.': '已到目标价：$179。',
    '$179 today': '今日 $179',
    '$179 now': '当前 $179',
    'Price watch updated in the activity row. Your dinner decision stays in front.': '价格关注已在活动栏更新，晚餐决定仍在前台。',
    'Reset the price': '重置价格',
    'Price watch reset.': '价格关注已重置。',
    // Outcome
    'Recommendation': '推荐',
    'Your best fit': '最适合你的选择',
    'Your pick': '你的选择',
    'Quiet tables, seasonal food, and a short walk.': '座位安静，时令菜肴，步行即到。',
    'Table for 2': '双人桌',
    'Not sure': '还不确定',
    'Whether Alex eats meat. Juniper has vegetarian dishes.': 'Alex 是否吃肉。Juniper 有素食菜品。',
    'Ask Alex': '问问 Alex',
    'Asked': '已提问',
    'Added a question to the invite: “Anything you don’t eat?”': '已在邀请中加上一个问题：「有什么不吃的吗？」',
    'Ready to book. You’ll review the details before anything is sent.': '可以预订了。发送任何内容之前，你会先确认细节。',
    'Why this recommendation': '为什么推荐这里',
    'It matches what you asked for: quiet, a table after 6 PM, and close to the river.': '它符合你的要求：安静、晚上 6 点后有座位，并且靠近河边。',
    'Explore alternatives': '查看其他选择',
    'More lively · Mediterranean': '更热闹 · 地中海料理',
    'More casual · Neighborhood café': '更休闲 · 社区咖啡馆',
    'Quiet · Modern bistro': '安静 · 现代小餐馆',
    'Choose': '选择',
    'Choose Olive Room': '选择 Olive Room',
    'Choose Little Table': '选择 Little Table',
    'Choose Juniper': '选择 Juniper',
    'Mediterranean food and a lively room, 8 minutes away.': '地中海料理，气氛热闹，步行 8 分钟。',
    'You picked this one. It’s closer, but louder than the quiet place you asked for.': '这是你选的。它更近，但比你想要的安静环境更吵。',
    'A casual neighborhood café, 15 minutes away.': '一家随意的社区咖啡馆，步行 15 分钟。',
    'You picked this one. It’s casual, and a longer walk than Juniper.': '这是你选的。环境随意，比 Juniper 走得更远。',
    // Generated UI
    'Schedule': '安排时间',
    'Compare': '比较',
    'Edit': '编辑',
    'Task interface': '任务界面',
    'Find a time': '选择时间',
    'A week, at a glance.': '一周安排，一目了然。',
    'Evenings next week': '下周的晚上',
    'Mon': '周一',
    'Tue': '周二',
    'Wed': '周三',
    'Thu': '周四',
    'Fri': '周五',
    'Wednesday 14, busy': '14 日周三，没空',
    'Monday': '周一',
    'Tuesday': '周二',
    'Wednesday': '周三',
    'Thursday': '周四',
    'Friday': '周五',
    '6:30 PM': '晚上 6:30',
    '7:00 PM': '晚上 7:00',
    '7:30 PM': '晚上 7:30',
    'Available': '有空',
    'Choose a place': '选择地点',
    'Compare what matters.': '比较你关心的细节。',
    'Restaurant comparison': '餐厅比较',
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
    'Message to Alex': '给 Alex 的消息',
    'Keep draft': '保存草稿',
    'Draft': '草稿',
    'Editing': '编辑中',
    'Draft saved': '草稿已保存',
    'Draft saved.': '草稿已保存。',
    'Schedule changed; review draft': '日期已变，请检查草稿',
    'Saved. Check it matches the new day.': '已保存。请确认内容与新日期一致。',
    'Draft saved. The day changed, so check the message.': '草稿已保存。日期已变，请检查消息内容。',
    'Same task · Same controls · Different working view': '同一任务 · 同样的操作 · 不同的工作视图',
    // Control
    'Review': '确认',
    'Waiting for your OK': '等待你确认',
    'Send this invite?': '发送这份邀请？',
    'Invite': '邀请',
    'To Alex · Dinner at Juniper': '发给 Alex · 在 Juniper 共进晚餐',
    'Then: add it to your calendar and book a table for two.': '随后：添加到你的日历，并预订一张双人桌。',
    'Dinner time': '晚餐时间',
    'Keep change': '保留修改',
    'Send invite to Alex': '向 Alex 发送邀请',
    'Add to your calendar': '添加到你的日历',
    'Book a table at Juniper': '在 Juniper 预订座位',
    'Send invite': '发送邀请',
    'Nothing happens until you send.': '在你点击发送之前，什么都不会发生。',
    'In progress': '进行中',
    'Waiting for Juniper': '等待 Juniper',
    'Done': '已完成',
    'Not done': '未完成',
    'Working on it.': '正在处理。',
    'You can stop at any point.': '你可以随时停止。',
    'Almost there.': '快好了。',
    'Juniper usually confirms within a few minutes.': 'Juniper 通常会在几分钟内确认。',
    'Two of three steps done. Waiting for Juniper to confirm the table.': '三步已完成两步，正在等待 Juniper 确认订位。',
    'Done · 3 of 3': '已完成 · 3/3',
    'Dinner is booked.': '晚餐已订好。',
    'Invite sent, in your calendar, table confirmed.': '邀请已发送，已加入日历，订位已确认。',
    'Stopped.': '已停止。',
    'Nothing was sent.': '没有发送任何内容。',
    'Stopped. Nothing was sent.': '已停止，没有发送任何内容。',
    'Sending. Each step will report its own state.': '正在发送，每个步骤都会报告各自的状态。',
    'Reset. Waiting for your OK.': '已重置，等待你确认。',
    // Continuity
    'Continue on another device': '在另一台设备上继续',
    'Your plan': '你的计划',
    'Pick up here.': '从这里接着做。',
    'The choices and unfinished draft travel with the task.': '已选内容和未完成的草稿，随任务一起延续。',
    'Time': '时间',
    'Unfinished message': '未完成的消息',
    'Hi Alex, how about dinner': 'Alex，要不要一起吃个晚饭',
    'Saved': '已保存',
    'Continue on the laptop.': '在电脑上继续。',
    'Change the time or the draft, then switch to Laptop above.': '修改时间或草稿，再切换到上方的「电脑」。',
    'Choices · Draft · Step': '选择 · 草稿 · 步骤',
    'Continued from your phone': '从你的手机继续',
    'Right where you left it.': '回到上次停下的地方。',
    'Juniper · Table for two': 'Juniper · 双人桌',
    'Synced from your phone just now': '刚刚从手机同步'
  };
  const chineseDay = day => chineseCopy[day] || day;
  const chineseTime = time => /^\d+:\d+ PM$/.test(time) ? `晚上 ${time.slice(0, -3)}` : time;
  function localizeText(value, locale) {
    if (locale !== 'zh') return value;
    if (Object.hasOwn(chineseCopy, value)) return chineseCopy[value];
    const patterns = [
      [/^(\d+) words$/, n => `${n} 个字`],
      [/^About (\d+) seconds to read$/, n => `大约 ${n} 秒读完`],
      [/^Does (\d+:\d+) work\?$/, time => `晚上 ${time} 可以吗？`],
      [/^Try (\d+:\d+)$/, time => `试试晚上 ${time}`],
      [/^Kept (\d+:\d+) PM\.$/, time => `已定在晚上 ${time}。`],
      [/^(\d+:\d+) PM kept$/, time => `已定晚上 ${time}`],
      [/^Dinner time set to (\d+:\d+) PM\.$/, time => `晚餐时间已定为晚上 ${time}。`],
      [/^Book (.+)$/, name => `预订 ${name}`],
      [/^(.+) is now the recommendation\.$/, name => `现在推荐 ${name}。`],
      [/^Selected time: (Monday|Tuesday|Wednesday|Thursday|Friday), 6:30 PM$/, day => `已选时间：${chineseDay(day)}晚上 6:30`],
      [/^Hi Alex, dinner at Juniper on (Monday|Tuesday|Wednesday|Thursday|Friday) at 6:30\?$/, day => `Alex，${chineseDay(day)}晚上 6:30 在 Juniper 吃晚饭，怎么样？`],
      [/^Draft updated for (Monday|Tuesday|Wednesday|Thursday|Friday)$/, day => `草稿已更新为${chineseDay(day)}`],
      [/^(Monday|Tuesday|Wednesday|Thursday|Friday) selected\. Your edited draft is kept; check it for the new day\.$/, day => `已选择${chineseDay(day)}。你修改过的草稿已保留，请按新日期检查。`],
      [/^(Monday|Tuesday|Wednesday|Thursday|Friday) selected\. The invitation draft was updated\.$/, day => `已选择${chineseDay(day)}。邀请草稿已更新。`],
      [/^Thursday at (\d+:\d+ PM)$/, time => `周四${chineseTime(time)}`],
      [/^Proposed time changed to (\d+:\d+ PM)\. Still waiting for your OK\.$/, time => `提议时间已改为${chineseTime(time)}，仍在等待你确认。`],
      [/^Working · (\d) of 3 done$/, n => `正在处理 · 已完成 ${n}/3`],
      [/^Stopped · (\d) of 3 done$/, n => `已停止 · 已完成 ${n}/3`],
      [/^Finished before you stopped: (\d) of 3\. The rest was canceled\.$/, n => `停止前已完成 ${n}/3，其余步骤已取消。`],
      [/^Time kept as (\d+:\d+ PM)\. Switch devices to continue\.$/, time => `时间已保留为${chineseTime(time)}。切换设备即可继续。`]
    ];
    for (const [pattern, replace] of patterns) {
      const match = value.match(pattern);
      if (match) return replace(...match.slice(1));
    }
    return value;
  }
  const escapeAttribute = value => value.replace(/[&<>"]/g, char => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;'}[char]));
  function localizeMarkup(html, locale) {
    if (locale !== 'zh') return html;
    // Translate content and accessible names only. IDs, values and action tokens stay stable.
    return html.replace(/>([^<]+)</g, (_, text) => `>${localizeText(text, locale)}<`)
      .replace(/(aria-label|placeholder)="([^"]+)"/g, (_, name, label) => `${name}="${escapeAttribute(localizeText(label, locale))}"`);
  }
  const countUnits = (text, locale) => {
    const latin = (text.match(/[A-Za-z0-9’']+/g) || []).length;
    return locale === 'zh' ? latin + (text.match(/[一-鿿]/g) || []).length : latin;
  };
  const icons = {
    calendar: '<rect x="4" y="6" width="16" height="15" rx="3"/><path d="M8 3v6m8-6v6M4 11h16m-12 4h3"/>',
    spark: '<path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3Z"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="3"/><path d="m3 7 9 6 9-6"/>',
    audio: '<path d="M4 10v4m4-7v10m4-13v16m4-13v10m4-7v4"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    stop: '<rect x="6" y="6" width="12" height="12" rx="2"/>',
    location: '<path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 0 1 14 0Z"/><circle cx="12" cy="10" r="2"/>'
  };
  const icon = (name, cls = '') => `<svg class="demo-icon ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name] || icons.spark}</svg>`;
  const pill = (label, cls = '') => `<span class="demo-pill ${cls}">${label}</span>`;
  const button = (label, action, cls = '', attributes = '') => `<button type="button" class="demo-button ${cls}" data-demo-action="${action}" ${attributes}>${label}</button>`;
  const bar = (title, subtitle = '') => `<div class="demo-appbar"><span class="demo-appmark">${icon('spark')}</span><span class="demo-appname">${title}</span>${subtitle ? `<span class="demo-appsubtitle">${subtitle}</span>` : ''}</div>`;
  const phone = (content, label = 'Phone interface') => `<div class="demo-phone" role="group" aria-label="${label}"><div class="demo-phone-status" aria-hidden="true"><span>9:41</span><span class="demo-phone-island"></span><span>•••</span></div>${content}<div class="demo-home-indicator" aria-hidden="true"></div></div>`;
  const laptop = (content, label = 'Laptop interface') => `<div class="demo-desktop" role="group" aria-label="${label}"><div class="demo-windowbar" aria-hidden="true"><i></i><i></i><i></i><span>Assistant</span></div>${content}</div>`;
  const tabs = (prefix, items, label, panels) => `<div class="demo-tabs" role="tablist" aria-label="${label}">${items.map((item, i) => `<button type="button" role="tab" class="demo-tab" id="${prefix}-tab-${item.key}" aria-controls="${prefix}-panel-${item.key}" aria-selected="${i === 0}" tabindex="${i === 0 ? '0' : '-1'}" data-demo-tab="${item.key}">${item.name}</button>`).join('')}</div><div class="demo-panels">${items.map((item, i) => `<div role="tabpanel" class="demo-panel" id="${prefix}-panel-${item.key}" aria-labelledby="${prefix}-tab-${item.key}" tabindex="0" ${i ? 'hidden' : ''}>${panels[item.key]}</div>`).join('')}</div>`;
  const timeOptions = ['6:30 PM', '7:00 PM', '7:30 PM'].map(time => `<option value="${time}">${time}</option>`).join('');

  const meter = (kind, heading) => `<div class="demo-side-caption demo-meter" data-meter="${kind}"><span class="demo-caption-number">${kind === 'chat' ? '✕' : '✓'}</span><h4>${heading}</h4><p class="demo-meter-words" data-meter-words></p><p data-meter-time></p></div>`;
  const question = '<p class="demo-user-bubble">Is Juniper free on Thursday at 6:30?</p>';
  const brevity = p => tabs(p, [{key:'chat', name:'Chat reply'}, {key:'card', name:'Answer first'}], 'Reply style', {
    chat: `<div class="demo-device-stage">${phone(bar('Assistant') + `<div class="demo-chat">${question}<p class="demo-assistant-bubble" data-measure>${LONG_REPLY}</p></div>`)}${meter('chat', 'Somewhere in there is a yes.')}</div>`,
    card: `<div class="demo-device-stage">${phone(bar('Assistant') + `<div class="demo-chat">${question}<div class="demo-answer-card"><h3 data-measure>Yes, a table for two at 6:30.</h3><div class="demo-answer-actions">${button('Book it', 'brevity-book')}${button('Other times', 'brevity-times', 'demo-button-secondary')}</div><details class="demo-disclosure" data-brevity-details><summary>Details<span aria-hidden="true">+</span></summary><p>Open 5–10 PM. Quiet back room. A 12-minute walk from you.</p></details><p class="demo-action-feedback" data-brevity-feedback></p></div></div>`)}${meter('card', 'The answer is the first line.')}</div>`
  });
  const context = p => `<div class="demo-mail-shell">${bar('Mail', 'Draft to Alex')}<div class="demo-mail-content"><div class="demo-mail-meta"><span>To</span><strong>Alex</strong></div><div class="demo-mail-meta"><span>Subject</span><strong>Dinner on Thursday?</strong></div><div class="demo-mail-draft"><p>Hi Alex,</p><p>Looking forward to catching up next week.</p><p>How does Thursday evening sound?</p><p class="demo-inserted" data-voice-inserted hidden></p><span class="demo-fake-caret" aria-hidden="true"></span></div><div class="demo-voice-accessory" data-voice-accessory data-state="off"><span class="demo-voice-symbol">${icon('audio')}</span><div><strong data-voice-status>Voice is off</strong><span data-voice-caption>Start voice to dictate an edit</span></div><span class="demo-voice-dot" aria-hidden="true"></span></div><form class="demo-type-form" data-voice-form hidden><label class="demo-field-label" for="${p}-type">Type your edit</label><div class="demo-type-row"><input id="${p}-type" class="demo-input" type="text" maxlength="160" autocomplete="off" data-voice-input><button type="submit" class="demo-button">Add</button></div></form></div></div><div class="demo-controls demo-controls-centered">${button('Start voice', 'voice-start')}${button('Stop', 'voice-stop', 'demo-button-secondary')}${button('Type instead', 'voice-type', 'demo-button-secondary')}${button('Reset', 'voice-reset', 'demo-button-text')}</div>`;
  const focus = p => tabs(p, [{key:'dinner', name:'Dinner'}, {key:'watch', name:'Price watch'}], 'Foreground task', {
    dinner: `<div class="demo-focus-shell">${bar('Dinner with Alex', 'Foreground')}<div class="demo-focus-content"><div class="demo-mini-calendar"><span>THU</span><strong>15</strong></div><div><span class="demo-eyebrow">One decision</span><h3 data-focus-heading>Does 6:30 work?</h3><p class="demo-muted">Juniper has a table for two.</p><div class="demo-focus-actions">${button('Keep this time', 'keep-time')}${button('Try 7:00', 'later-time', 'demo-button-secondary')}</div><p class="demo-action-feedback" data-focus-feedback>Waiting for your choice.</p></div></div><div class="demo-background-row" data-price-row><span class="demo-status-dot"></span><span>Price watch</span><span class="demo-muted" data-price-status>Watching for $180</span></div></div>`,
    watch: `<div class="demo-focus-shell">${bar('Price watch', 'Foreground')}<div class="demo-focus-content"><div class="demo-product-art" aria-hidden="true"><span></span><i></i></div><div><span class="demo-eyebrow">Travel headphones</span><h3 data-price-heading>Waiting for $180.</h3><p class="demo-muted" data-price-today>$219 today</p><div class="demo-price-line"><span>$180 target</span><span data-price-now>$219 now</span></div><div class="demo-price-track" aria-hidden="true"><span data-price-track></span></div></div></div><div class="demo-background-row">${icon('calendar')}<span>Dinner with Alex</span><span class="demo-muted" data-focus-background>Waiting for your choice</span></div></div>`
  }) + `<div class="demo-controls demo-controls-centered">${button('Simulate a price drop', 'price-drop', 'demo-button-secondary')}</div>`;
  const alternative = (name, description) => `<div class="demo-alternative"><div><strong>${name}</strong><span>${description}</span></div>${button('Choose', `choose-${name.split(' ')[0].toLowerCase()}`, 'demo-button-text', `aria-label="Choose ${name}"`)}</div>`;
  const outcome = () => `<div class="demo-result-shell">${bar('Dinner with Alex', 'Recommendation')}<div class="demo-result-body"><span class="demo-eyebrow" data-result-label>Your best fit</span><div class="demo-recommendation"><div class="demo-recommendation-number" aria-hidden="true">1</div><div><h3 data-result-name>Juniper</h3><p class="demo-muted" data-result-description>Quiet tables, seasonal food, and a short walk.</p></div></div><div class="demo-result-meta">${pill('Thursday · 6:30 PM')}${pill('Table for 2')}</div><div class="demo-result-actions">${button('Book Juniper', 'book-result')}</div><p class="demo-action-feedback" data-result-feedback></p><div class="demo-unknown"><span class="demo-unknown-label" data-unknown-label>Not sure</span><p data-unknown-text tabindex="-1">Whether Alex eats meat. Juniper has vegetarian dishes.</p>${button('Ask Alex', 'ask-alex', 'demo-button-text')}</div><details class="demo-disclosure"><summary>Why this recommendation<span aria-hidden="true">+</span></summary><p data-result-reason>It matches what you asked for: quiet, a table after 6 PM, and close to the river.</p></details><details class="demo-disclosure"><summary>Explore alternatives<span aria-hidden="true">+</span></summary>${alternative('Olive Room', 'More lively · Mediterranean')}${alternative('Little Table', 'More casual · Neighborhood café')}${alternative('Juniper', 'Quiet · Modern bistro')}</details></div></div>`;
  const generated = p => `<div class="demo-generated-shell">${bar('Assistant', 'Dinner with Alex')}${tabs(p, [{key:'schedule', name:'Schedule'}, {key:'compare', name:'Compare'}, {key:'edit', name:'Edit'}], 'Task interface', {
    schedule: `<div class="demo-generated-content"><div class="demo-generated-heading"><div><span class="demo-eyebrow">Find a time</span><h3>A week, at a glance.</h3></div>${icon('calendar')}</div><div class="demo-week" role="group" aria-label="Evenings next week">${['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((d, i) => d === 'Wed' ? `<button type="button" class="demo-day demo-day-busy" disabled aria-label="Wednesday 14, busy"><span>${d}</span><strong>${12 + i}</strong><span class="demo-day-dot" aria-hidden="true"></span></button>` : `<button type="button" class="demo-day ${d === 'Thu' ? 'demo-day-selected' : ''}" aria-pressed="${d === 'Thu'}" data-demo-action="calendar-day" data-day="${d}"><span>${d}</span><strong>${12 + i}</strong><span class="demo-day-dot" aria-hidden="true"></span></button>`).join('')}</div><div class="demo-time-card"><span data-schedule-day>Thursday</span><strong>6:30 PM</strong>${pill('Available')}</div></div>`,
    compare: `<div class="demo-generated-content"><div class="demo-generated-heading"><div><span class="demo-eyebrow">Choose a place</span><h3>Compare what matters.</h3></div>${icon('location')}</div><div class="demo-compare-table" role="table" aria-label="Restaurant comparison"><div role="row" class="demo-compare-header"><span role="columnheader">Place</span><span role="columnheader">Atmosphere</span><span role="columnheader">Walk</span></div><div role="row"><strong role="cell">Juniper</strong><span role="cell">Quiet</span><span role="cell">12 min</span></div><div role="row"><strong role="cell">Olive Room</strong><span role="cell">Lively</span><span role="cell">8 min</span></div><div role="row"><strong role="cell">Little Table</strong><span role="cell">Casual</span><span role="cell">15 min</span></div></div></div>`,
    edit: `<div class="demo-generated-content"><div class="demo-generated-heading"><div><span class="demo-eyebrow">Make it yours</span><h3>Edit the invitation.</h3></div>${icon('mail')}</div><p class="demo-draft-schedule" data-invitation-date>Selected time: Thursday, 6:30 PM</p><label class="demo-field-label" for="${p}-invitation">Message to Alex</label><textarea id="${p}-invitation" class="demo-textarea" rows="3" data-invitation>Hi Alex, dinner at Juniper on Thursday at 6:30?</textarea><div class="demo-edit-footer">${button('Keep draft', 'keep-invitation')}<span class="demo-muted" data-invitation-status>Draft</span></div></div>`
  })}<div class="demo-stable-footer"><span class="demo-status-dot"></span><span>Same task · Same controls · Different working view</span></div></div>`;
  const step = (key, label) => `<li data-step="${key}" data-state="todo"><span class="demo-step-mark" aria-hidden="true"></span><span class="demo-step-label">${label}</span><span class="demo-step-state" data-step-state></span></li>`;
  const control = p => `<div class="demo-control-shell" data-state="pending">${bar('Dinner with Alex', 'Review')}<div class="demo-control-content"><div class="demo-control-status"><span class="demo-control-badge" data-control-icon>${icon('clock')}</span><span class="demo-eyebrow" data-control-stage>Waiting for your OK</span></div><h3 data-control-heading>Send this invite?</h3><div class="demo-approval-card"><span class="demo-eyebrow">Invite</span><strong>To Alex · Dinner at Juniper</strong><span data-control-time>Thursday at 6:30 PM</span><span class="demo-approval-scope">Then: add it to your calendar and book a table for two.</span></div><div class="demo-control-edit" hidden><label class="demo-field-label" for="${p}-approval-time">Dinner time</label><select id="${p}-approval-time" class="demo-select" data-approval-time>${timeOptions}</select>${button('Keep change', 'control-save', 'demo-button-secondary')}</div><ol class="demo-steps" data-control-steps hidden>${step('invite', 'Send invite to Alex')}${step('calendar', 'Add to your calendar')}${step('table', 'Book a table at Juniper')}</ol><div class="demo-control-actions">${button('Send invite', 'control-approve')}${button('Edit', 'control-edit', 'demo-button-secondary')}${button('Stop', 'control-stop', 'demo-button-text')}</div><div class="demo-control-bottom"><span data-control-note>Nothing happens until you send.</span>${button('Reset', 'control-reset', 'demo-button-text')}</div></div></div>`;
  const continuity = p => tabs(p, [{key:'phone', name:'Phone'}, {key:'laptop', name:'Laptop'}], 'Continue on another device', {
    phone: `<div class="demo-device-stage">${phone(bar('Dinner with Alex') + `<div class="demo-continuity-body"><span class="demo-eyebrow">Your plan</span><h3>Pick up here.</h3><p class="demo-muted">The choices and unfinished draft travel with the task.</p><label class="demo-field-label" for="${p}-phone-time">Time</label><select id="${p}-phone-time" class="demo-select" data-continuity-time>${timeOptions}</select><label class="demo-field-label" for="${p}-phone-draft">Unfinished message</label><textarea id="${p}-phone-draft" class="demo-textarea" rows="3" data-continuity-draft>Hi Alex, how about dinner</textarea><div class="demo-saved-indicator">${icon('check')}<span>Saved</span></div></div>`)}<div class="demo-side-caption"><span class="demo-caption-number">↗</span><h4>Continue on the laptop.</h4><p>Change the time or the draft, then switch to Laptop above.</p><span class="demo-caption-rule"></span><span>Choices · Draft · Step</span></div></div>`,
    laptop: `<div class="demo-device-stage demo-stage-wide">${laptop(bar('Dinner with Alex', 'Continued from your phone') + `<div class="demo-continuity-desktop"><div><span class="demo-eyebrow">Your plan</span><h3>Right where you left it.</h3><p class="demo-muted">Juniper · Table for two</p><label class="demo-field-label" for="${p}-laptop-time">Time</label><select id="${p}-laptop-time" class="demo-select" data-continuity-time>${timeOptions}</select></div><div><label class="demo-field-label" for="${p}-laptop-draft">Unfinished message</label><textarea id="${p}-laptop-draft" class="demo-textarea" rows="6" data-continuity-draft>Hi Alex, how about dinner</textarea><div class="demo-saved-indicator">${icon('check')}<span>Synced from your phone just now</span></div></div></div>`)}</div>`
  });
  const renders = {brevity, context, focus, outcome, 'generated-ui': generated, control, continuity};

  function render(id) {
    if (!renders[id]) return '';
    const prefix = `demo-${id}-${++sequence}`;
    const locale = typeof document !== 'undefined' && document.documentElement.lang.startsWith('zh') ? 'zh' : 'en';
    return localizeMarkup(`<div class="demo-example" data-demo-root="${id}" data-demo-locale="${locale}">${renders[id](prefix)}<div class="demo-sr-only" role="status" aria-live="polite" aria-atomic="true" data-demo-announcement></div></div>`, locale);
  }

  function wireTabs(root) {
    const selectTab = (tab, moveFocus = false) => {
      [...tab.closest('[role="tablist"]').querySelectorAll('[role="tab"]')].forEach(item => {
        const selected = item === tab;
        item.setAttribute('aria-selected', String(selected));
        item.tabIndex = selected ? 0 : -1;
        const panel = document.getElementById(item.getAttribute('aria-controls'));
        if (panel) panel.hidden = !selected;
      });
      if (moveFocus) tab.focus();
    };
    root.querySelectorAll('[role="tablist"]').forEach(group => {
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
  }

  const timers = () => {
    let pending = [];
    return {
      later: (fn, ms) => { pending.push(setTimeout(fn, ms)); },
      clear: () => { pending.forEach(clearTimeout); pending = []; }
    };
  };

  // Word counts are measured from the rendered text, so both locales report their own length.
  function setupBrevity({locale, t, one, all, setText, announce, on}) {
    const paint = () => all('[data-meter]').forEach(meter => {
      const panel = meter.closest('[role="tabpanel"]');
      const parts = [...panel.querySelectorAll('[data-measure]')];
      const details = panel.querySelector('[data-brevity-details]');
      if (details && details.open) parts.push(details.querySelector('p'));
      const words = parts.reduce((sum, el) => sum + countUnits(el.textContent, locale), 0);
      const seconds = Math.max(1, Math.round(words / (locale === 'zh' ? 6 : 4)));
      meter.querySelector('[data-meter-words]').textContent = t(`${words} words`);
      meter.querySelector('[data-meter-time]').textContent = t(seconds === 1 ? 'About 1 second to read' : `About ${seconds} seconds to read`);
    });
    one('[data-brevity-details]').addEventListener('toggle', paint);
    paint();
    on('brevity-book', () => { setText('[data-brevity-feedback]', 'Table held. Next: invite Alex.'); announce('Table held. Next: invite Alex.'); });
    on('brevity-times', () => { setText('[data-brevity-feedback]', 'Also free: 7:00 PM and 8:15 PM.'); announce('Also free: 7:00 PM and 8:15 PM.'); });
  }

  // A fixed transcript stands in for speech; nothing is recorded.
  function setupContext({locale, t, one, setText, announce, on, keepFocus}) {
    const phrase = t('I’ll book Juniper for 6:30.');
    const tokens = locale === 'zh' ? phrase.match(/.{1,3}/gu) : phrase.split(' ');
    const joiner = locale === 'zh' ? '' : ' ';
    const [open, close] = locale === 'zh' ? ['「', '」'] : ['“', '”'];
    const pace = matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 1;
    const clock = timers();
    const accessory = one('[data-voice-accessory]'), form = one('[data-voice-form]'), input = one('[data-voice-input]'), inserted = one('[data-voice-inserted]');
    let state = 'off', heard = 0;
    const heardText = () => tokens.slice(0, heard).join(joiner);
    const paint = (status, caption) => {
      const focused = document.activeElement;
      accessory.dataset.state = state;
      setText('[data-voice-status]', status);
      one('[data-voice-caption]').textContent = caption;
      one('[data-demo-action="voice-start"]').disabled = state === 'listening' || state === 'working';
      one('[data-demo-action="voice-stop"]').disabled = state !== 'listening' && state !== 'working';
      one('[data-demo-action="voice-type"]').disabled = state === 'working' || state === 'typing';
      one('[data-demo-action="voice-reset"]').disabled = state === 'off' && inserted.hidden;
      keepFocus(focused, one(`[data-demo-action="${state === 'listening' || state === 'working' ? 'voice-stop' : 'voice-start'}"]`));
    };
    const insert = text => { inserted.textContent = text; inserted.hidden = false; };
    const listen = () => {
      if (heard >= tokens.length) {
        state = 'working';
        paint('Working', t('Adding it to your draft…'));
        clock.later(() => { insert(phrase); state = 'done'; paint('Added to your draft', t('Voice is off again')); announce('Added to your draft.'); }, 700 * pace);
        return;
      }
      heard += 1;
      paint('Listening', `${open}${heardText()}${heard < tokens.length ? '…' : ''}${close}`);
      clock.later(listen, 320 * pace);
    };
    on('voice-start', () => {
      clock.clear(); form.hidden = true; heard = 0; state = 'listening';
      paint('Listening', `${open}…${close}`);
      announce('Listening. The draft stays in front.');
      clock.later(listen, 450 * pace);
    });
    on('voice-stop', () => { clock.clear(); state = 'stopped'; paint('Stopped', t('Nothing was added')); announce('Voice stopped. Nothing was added.'); });
    on('voice-type', () => {
      clock.clear();
      const kept = heardText();
      state = 'typing'; form.hidden = false; input.value = kept;
      paint('Voice is off', t('Typing instead. Your words are kept.'));
      input.focus();
      announce(kept ? 'Typing instead. The words heard so far are kept.' : 'Typing instead.');
    });
    on('voice-reset', () => {
      clock.clear(); heard = 0; inserted.hidden = true; inserted.textContent = ''; form.hidden = true; state = 'off';
      paint('Voice is off', t('Start voice to dictate an edit'));
      announce('Draft reset.');
    });
    form.addEventListener('submit', event => {
      event.preventDefault();
      const text = input.value.trim();
      if (!text) { announce('Enter some text to add.'); input.focus(); return; }
      insert(text); form.hidden = true; state = 'done';
      paint('Added to your draft', t('Typed, not spoken'));
      announce('Added to your draft.');
    });
    input.placeholder = phrase;
    paint('Voice is off', t('Start voice to dictate an edit'));
  }

  function setupFocus({one, setText, announce, on}) {
    let time = '6:30';
    on('keep-time', () => {
      setText('[data-focus-feedback]', `Kept ${time} PM.`);
      setText('[data-focus-background]', `${time} PM kept`);
      announce(`Dinner time set to ${time} PM.`);
    });
    on('later-time', () => {
      time = time === '6:30' ? '7:00' : '6:30';
      setText('[data-focus-heading]', `Does ${time} work?`);
      setText('[data-demo-action="later-time"]', `Try ${time === '6:30' ? '7:00' : '6:30'}`);
      setText('[data-focus-feedback]', 'Waiting for your choice.');
    });
    let dropped = false;
    on('price-drop', () => {
      dropped = !dropped;
      one('[data-price-row]').dataset.state = dropped ? 'alert' : '';
      setText('[data-price-status]', dropped ? 'Dropped to $179 · target reached' : 'Watching for $180');
      setText('[data-price-heading]', dropped ? 'Target reached: $179.' : 'Waiting for $180.');
      setText('[data-price-today]', dropped ? '$179 today' : '$219 today');
      setText('[data-price-now]', dropped ? '$179 now' : '$219 now');
      one('[data-price-track]').style.width = dropped ? '100%' : '';
      setText('[data-demo-action="price-drop"]', dropped ? 'Reset the price' : 'Simulate a price drop');
      announce(dropped ? 'Price watch updated in the activity row. Your dinner decision stays in front.' : 'Price watch reset.');
    });
  }

  function setupOutcome({one, setText, announce, on}) {
    const choices = {
      olive: ['Olive Room', 'Mediterranean food and a lively room, 8 minutes away.', 'You picked this one. It’s closer, but louder than the quiet place you asked for.'],
      little: ['Little Table', 'A casual neighborhood café, 15 minutes away.', 'You picked this one. It’s casual, and a longer walk than Juniper.'],
      juniper: ['Juniper', 'Quiet tables, seasonal food, and a short walk.', 'It matches what you asked for: quiet, a table after 6 PM, and close to the river.']
    };
    Object.entries(choices).forEach(([key, [name, description, reason]]) => on(`choose-${key}`, () => {
      setText('[data-result-name]', name);
      setText('[data-result-description]', description);
      setText('[data-result-reason]', reason);
      setText('[data-result-label]', key === 'juniper' ? 'Your best fit' : 'Your pick');
      setText('[data-demo-action="book-result"]', `Book ${name}`);
      setText('[data-result-feedback]', '');
      announce(`${name} is now the recommendation.`);
    }));
    on('book-result', () => {
      setText('[data-result-feedback]', 'Ready to book. You’ll review the details before anything is sent.');
      announce('Ready to book. You’ll review the details before anything is sent.');
    });
    on('ask-alex', target => {
      setText('[data-unknown-label]', 'Asked');
      setText('[data-unknown-text]', 'Added a question to the invite: “Anything you don’t eat?”');
      target.hidden = true;
      one('[data-unknown-text]').focus();
      announce('Added a question to the invite: “Anything you don’t eat?”');
    });
  }

  function setupGenerated({t, one, all, setText, announce, on}) {
    const days = {Mon: 'Monday', Tue: 'Tuesday', Thu: 'Thursday', Fri: 'Friday'};
    let day = 'Thursday', dirty = false, needsReview = false;
    on('calendar-day', target => {
      all('[data-demo-action="calendar-day"]').forEach(el => {
        el.classList.toggle('demo-day-selected', el === target);
        el.setAttribute('aria-pressed', String(el === target));
      });
      const selected = days[target.dataset.day];
      if (selected === day) return;
      day = selected;
      setText('[data-schedule-day]', day);
      setText('[data-invitation-date]', `Selected time: ${day}, 6:30 PM`);
      if (!dirty) {
        one('[data-invitation]').value = t(`Hi Alex, dinner at Juniper on ${day} at 6:30?`);
        setText('[data-invitation-status]', `Draft updated for ${day}`);
      } else {
        needsReview = true;
        setText('[data-invitation-status]', 'Schedule changed; review draft');
      }
      announce(`${day} selected.${dirty ? ' Your edited draft is kept; check it for the new day.' : ' The invitation draft was updated.'}`);
    });
    on('keep-invitation', () => {
      setText('[data-invitation-status]', needsReview ? 'Saved. Check it matches the new day.' : 'Draft saved');
      announce(needsReview ? 'Draft saved. The day changed, so check the message.' : 'Draft saved.');
    });
    one('[data-invitation]').addEventListener('input', () => {
      dirty = true;
      setText('[data-invitation-status]', needsReview ? 'Schedule changed; review draft' : 'Editing');
    });
  }

  // Each step reports its own state; nothing is shown as done before it finishes.
  function setupControl({t, one, all, setText, announce, on, keepFocus}) {
    const shell = one('.demo-control-shell');
    const steps = all('[data-step]');
    const clock = timers();
    const stepLabels = {todo: '', running: 'In progress', wait: 'Waiting for Juniper', done: 'Done', stopped: 'Not done'};
    let stage = 'pending';
    const setStep = (item, state) => { item.dataset.state = state; item.querySelector('[data-step-state]').textContent = t(stepLabels[state]); };
    const doneCount = () => steps.filter(item => item.dataset.state === 'done').length;
    const progress = () => setText('[data-control-stage]', `Working · ${doneCount()} of 3 done`);
    const setStage = (name, stageText, heading, note, badge) => {
      const focused = document.activeElement;
      stage = name;
      shell.dataset.state = name;
      setText('[data-control-stage]', stageText);
      setText('[data-control-heading]', heading);
      setText('[data-control-note]', note);
      one('[data-control-icon]').innerHTML = icon(badge);
      one('[data-demo-action="control-approve"]').disabled = name !== 'pending';
      one('[data-demo-action="control-edit"]').disabled = name !== 'pending';
      one('[data-demo-action="control-stop"]').disabled = name !== 'pending' && name !== 'running';
      keepFocus(focused, one(`[data-demo-action="${{pending: 'control-approve', running: 'control-stop'}[name] || 'control-reset'}"]`));
    };
    const reset = () => {
      clock.clear();
      steps.forEach(item => setStep(item, 'todo'));
      one('[data-control-steps]').hidden = true;
      one('.demo-control-edit').hidden = true;
      one('[data-approval-time]').value = '6:30 PM';
      setText('[data-control-time]', 'Thursday at 6:30 PM');
      setStage('pending', 'Waiting for your OK', 'Send this invite?', 'Nothing happens until you send.', 'clock');
    };
    on('control-approve', () => {
      const [invite, calendar, table] = steps;
      one('.demo-control-edit').hidden = true;
      one('[data-control-steps]').hidden = false;
      setStep(invite, 'running');
      setStage('running', 'Working · 0 of 3 done', 'Working on it.', 'You can stop at any point.', 'clock');
      announce('Sending. Each step will report its own state.');
      one('[data-demo-action="control-stop"]').focus();
      clock.later(() => { setStep(invite, 'done'); setStep(calendar, 'running'); progress(); }, 900);
      clock.later(() => { setStep(calendar, 'done'); setStep(table, 'running'); progress(); }, 1700);
      clock.later(() => {
        setStep(table, 'wait'); progress();
        setText('[data-control-heading]', 'Almost there.');
        setText('[data-control-note]', 'Juniper usually confirms within a few minutes.');
        announce('Two of three steps done. Waiting for Juniper to confirm the table.');
      }, 2400);
      clock.later(() => {
        setStep(table, 'done');
        setStage('done', 'Done · 3 of 3', 'Dinner is booked.', 'Invite sent, in your calendar, table confirmed.', 'check');
        announce('Dinner is booked.');
      }, 5400);
    });
    on('control-edit', () => { one('.demo-control-edit').hidden = false; one('[data-approval-time]').focus(); });
    on('control-save', () => {
      const time = one('[data-approval-time]').value;
      setText('[data-control-time]', `Thursday at ${time}`);
      one('.demo-control-edit').hidden = true;
      one('[data-demo-action="control-edit"]').focus();
      announce(`Proposed time changed to ${time}. Still waiting for your OK.`);
    });
    on('control-stop', () => {
      clock.clear();
      if (stage === 'pending') {
        setStage('stopped', 'Stopped', 'Stopped.', 'Nothing was sent.', 'stop');
        announce('Stopped. Nothing was sent.');
      } else {
        const finished = doneCount();
        steps.forEach(item => { if (item.dataset.state !== 'done') setStep(item, 'stopped'); });
        setStage('stopped', `Stopped · ${finished} of 3 done`, 'Stopped.', `Finished before you stopped: ${finished} of 3. The rest was canceled.`, 'stop');
        announce(`Finished before you stopped: ${finished} of 3. The rest was canceled.`);
      }
      one('[data-demo-action="control-reset"]').focus();
    });
    on('control-reset', () => { reset(); announce('Reset. Waiting for your OK.'); });
    reset();
  }

  function setupContinuity({all, announce}) {
    all('[data-continuity-time]').forEach(input => input.addEventListener('change', () => {
      all('[data-continuity-time]').forEach(other => { other.value = input.value; });
      announce(`Time kept as ${input.value}. Switch devices to continue.`);
    }));
    all('[data-continuity-draft]').forEach(input => input.addEventListener('input', () => {
      all('[data-continuity-draft]').forEach(other => { if (other !== input) other.value = input.value; });
    }));
  }

  const setups = {brevity: setupBrevity, context: setupContext, focus: setupFocus, outcome: setupOutcome, 'generated-ui': setupGenerated, control: setupControl, continuity: setupContinuity};

  function init(container) {
    const root = container.matches('[data-demo-root]') ? container : container.querySelector('[data-demo-root]');
    if (!root || root.dataset.demoInitialized) return;
    root.dataset.demoInitialized = 'true';
    const locale = root.dataset.demoLocale || 'en';
    const handlers = {};
    const ctx = {
      root,
      locale,
      t: value => localizeText(value, locale),
      one: selector => root.querySelector(selector),
      all: selector => [...root.querySelectorAll(selector)],
      on: (action, handler) => { handlers[action] = handler; }
    };
    ctx.setText = (selector, value) => ctx.all(selector).forEach(el => { el.textContent = ctx.t(value); });
    ctx.announce = value => { ctx.one('[data-demo-announcement]').textContent = ctx.t(value); };
    // When a control disables or hides itself, keyboard focus moves to the next useful control instead of the page.
    ctx.keepFocus = (before, fallback) => { if (before && root.contains(before) && (before.disabled || before.closest('[hidden]')) && fallback) fallback.focus(); };
    wireTabs(root);
    if (setups[root.dataset.demoRoot]) setups[root.dataset.demoRoot](ctx);
    root.addEventListener('click', event => {
      const target = event.target.closest('[data-demo-action]');
      if (!target || !root.contains(target) || target.disabled) return;
      if (handlers[target.dataset.demoAction]) handlers[target.dataset.demoAction](target);
    });
  }
  window.AgentExamples = {render, init};
})();
