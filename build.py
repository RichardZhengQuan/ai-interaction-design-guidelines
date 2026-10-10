"""Render both locales of the accessible, buildless design guide."""
import html
import hashlib
import json
import re
from pathlib import Path

ROOT = Path(__file__).parent
DIST = ROOT / 'dist'
e = html.escape
# Author profile and canonical page: https://pmrichq.com/
PERSONAL_PAGE = 'https://pmrichq.com/'
GITHUB_REPOSITORY = 'https://github.com/RichardZhengQuan/ai-interaction-design-guidelines'
LABELS = {
    'en': {
        'brand':'Richard’s AI Interaction Design Guidelines', 'brandShort':'AI Interaction Guidelines',
        'guide':'Design Guidelines', 'overview':'Overview', 'background':'Background', 'related':'Related rules', 'principles':'Rules', 'about':'About',
        'skip':'Skip to content', 'browse':'Contents',
        'mobileNav':'Mobile contents', 'chapterNav':'Chapter navigator',
        'gettingStarted':'Getting started', 'designPrinciples':'The seven rules', 'inPractice':'In practice',
        'aboutTitle':'About this guide',
        'date':'October 2026', 'intention':'Capture an intention', 'dinner':'Dinner with Alex',
        'thu':'THU', 'time':'Thursday, 6:30 PM', 'two':'Juniper · table for two', 'review':'Review plan',
        'ask':'Ask or change something', 'oneResult':'One clear result',
        'heroAlt':'One intention connects a voice interaction, a focused task canvas, and a compact result.',
        'rulesTitle':'The seven rules', 'devicesCard':'Across devices', 'devicesCardText':'One task on six kinds of device',
        'principle':'Rule', 'practices':'Best practices', 'example':'Try it', 'simulation':'Simulation',
        'notice':'What to notice', 'dont':'Don’t', 'do':'Do', 'contrastToc':'Don’t and do', 'contrastLabel':'A comparison of what to avoid and what to do for this rule',
        'stepDone':'Done', 'stepWait':'Waiting',
        'deviceSelector':'Device', 'input':'Input', 'context':'Context', 'deviceRules':'The seven rules on this device',
        'matrix':'Compare all devices', 'rule':'Rule',
        'aboutOne':'A working draft by Richard Q, last updated October 2026. These rules are opinions rather than standards, and they will change as assistants do.',
        'aboutFeedback':'Disagree with a rule, or have a better example?', 'issues':'Open an issue on GitHub',
        'author':'Author', 'authorBio':'Product manager focused on AI tools, agent systems, and product design.',
        'authorWork':'OneMind · usAIge · Clip Loop', 'authorLink':'personal website', 'appearance':'Appearance',
        'system':'System', 'light':'Light', 'dark':'Dark', 'top':'Back to top', 'within':'Within this section',
        'toc':'On this page', 'language':'Language',
        'githubStar':'Star this guide on GitHub (opens in a new tab)', 'star':'Star on GitHub',
        'noscript':'Turn on JavaScript to try the interactive examples and device previews. All guidance on this page is readable without it.',
        'description':'Seven rules for designing personal AI assistants, in English and Chinese, with Don’t and Do comparisons, interactive examples and guidance for six kinds of device.'
    },
    'zh': {
        'brand':'Richard 的人工智能交互设计指南', 'brandShort':'AI 交互设计指南',
        'guide':'设计指南', 'overview':'概览', 'background':'设计背景', 'related':'相关规则', 'principles':'设计规则', 'about':'关于',
        'skip':'跳至正文', 'browse':'目录',
        'mobileNav':'移动端目录', 'chapterNav':'章节导航',
        'gettingStarted':'开始阅读', 'designPrinciples':'七条规则', 'inPractice':'实践',
        'aboutTitle':'关于这份指南',
        'date':'2026 年 10 月', 'intention':'表达一个意图', 'dinner':'与 Alex 共进晚餐',
        'thu':'周四', 'time':'周四晚上 6:30', 'two':'Juniper · 双人桌', 'review':'查看计划',
        'ask':'提问，或修改计划', 'oneResult':'一个明确的结果',
        'heroAlt':'同一个意图连接语音交互、聚焦的任务界面和简洁的结果。',
        'rulesTitle':'七条规则', 'devicesCard':'跨设备应用', 'devicesCardText':'同一个任务，六类设备',
        'principle':'规则', 'practices':'设计建议', 'example':'动手试试', 'simulation':'模拟演示',
        'notice':'留意这些细节', 'dont':'避免', 'do':'推荐', 'contrastToc':'避免与推荐', 'contrastLabel':'这条规则的避免与推荐对照',
        'stepDone':'已完成', 'stepWait':'等待中',
        'deviceSelector':'设备', 'input':'输入方式', 'context':'使用情境', 'deviceRules':'七条规则在这类设备上的应用',
        'matrix':'比较全部设备', 'rule':'规则',
        'aboutOne':'由 Richard Q 撰写的工作草稿，最近更新于 2026 年 10 月。这些规则是观点而非标准，会随着 AI 助手的发展而调整。',
        'aboutFeedback':'不同意某条规则，或者有更好的例子？', 'issues':'欢迎在 GitHub 提交 Issue',
        'author':'作者', 'authorBio':'产品经理，专注 AI 工具、Agent 系统与产品设计。',
        'authorWork':'OneMind · usAIge · Clip Loop', 'authorLink':'个人网站', 'appearance':'外观',
        'system':'跟随系统', 'light':'浅色', 'dark':'深色', 'top':'返回顶部', 'within':'本节内容',
        'toc':'本页内容', 'language':'语言',
        'githubStar':'在 GitHub 为这份指南加星标（在新标签页中打开）', 'star':'在 GitHub 上加星标',
        'noscript':'启用 JavaScript 后可体验交互示例和设备预览；本页所有设计建议无需 JavaScript 也可阅读。',
        'description':'个人 AI 助手的七条设计规则，提供中英文说明、避免与推荐对照、交互示例，以及六类设备的设计建议。'
    }
}
THEME_ICONS = {
    'auto':'<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8m-4-4v4"/>',
    'light':'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.4 1.4m11.2 11.2L19 19M5 19l1.4-1.4M17.6 6.4 19 5"/>',
    'dark':'<path d="M20.5 14.7A8.8 8.8 0 0 1 9.3 3.5a8.8 8.8 0 1 0 11.2 11.2Z"/>'
}
DEVICE_ICONS = {
    'tv': '<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8m-4-4v4"/>',
    'large': '<rect x="4" y="3" width="16" height="13" rx="2"/><path d="M2 20h20l-2-4H4l-2 4Z"/>',
    'phone': '<rect x="6" y="2" width="12" height="20" rx="3"/><path d="M10 5h4m-3 14h2"/>',
    'watch': '<rect x="6" y="6" width="12" height="12" rx="4"/><path d="M9 6V2h6v4m-6 12v4h6v-4"/>',
    'glasses': '<path d="M2 9h7l2 2h2l2-2h7M3 9v5a3 3 0 0 0 6 0V9m6 0v5a3 3 0 0 0 6 0V9M2 9l2-3m18 3-2-3"/>',
    'screenless': '<rect x="6" y="3" width="12" height="18" rx="6"/><path d="M9 9h6m-6 3h6m-6 3h6"/>'
}
STAR_ICON = '<path d="m12 3 2.8 5.8 6.4.9-4.6 4.5 1.1 6.4L12 17.6l-5.7 3 1.1-6.4-4.6-4.5 6.4-.9L12 3Z"/>'
WAVE_ICON = '<path d="M4 10v4m4-7v10m4-13v16m4-13v10m4-7v4"/>'

def json_script(value):
    return json.dumps(value, ensure_ascii=False).replace('<', '\\u003c')

def svg(paths, size=16, cls=''):
    return f'<svg class="{cls}" width="{size}" height="{size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">{paths}</svg>'

def count_words(text, locale):
    """Latin words, plus one per CJK character, so captions can state a reply's length."""
    words = re.findall(r'[A-Za-z0-9’\']+', text)
    return len(words) + (len(re.findall(r'[一-鿿]', text)) if locale == 'zh' else 0)

def mock_card(card, l):
    variant = f' mock-card-{card["variant"]}' if card.get('variant') else ''
    parts = []
    if card.get('variant') == 'takeover':
        parts.append(f'<span class="mock-takeover-wave">{svg(WAVE_ICON, 34)}</span>')
    if card.get('eyebrow'): parts.append(f'<span class="mock-eyebrow">{e(card["eyebrow"])}</span>')
    if card.get('title'): parts.append(f'<strong class="mock-title">{e(card["title"])}</strong>')
    if card.get('body'): parts.append(f'<p class="mock-body">{e(card["body"])}</p>')
    if card.get('quote'): parts.append(f'<p class="mock-quote">{e(card["quote"])}</p>')
    if card.get('days'):
        parts.append('<div class="mock-days">' + ''.join(f'<span class="mock-day is-{d["state"]}"><small>{e(d["label"])}</small><b>{e(d["date"])}</b></span>' for d in card['days']) + '</div>')
    if card.get('steps'):
        marks = {'done': ('✓', l['stepDone']), 'wait': ('…', l['stepWait'])}
        parts.append('<ul class="mock-steps">' + ''.join(f'<li class="is-{s["state"]}"><i aria-hidden="true">{marks[s["state"]][0]}</i><span class="sr-only">{marks[s["state"]][1]}: </span>{e(s["text"])}</li>' for s in card['steps']) + '</ul>')
    if card.get('note'): parts.append(f'<p class="mock-note">{e(card["note"])}</p>')
    if card.get('actions'):
        parts.append('<div class="mock-actions">' + ''.join(f'<span class="mock-action{" mock-primary" if i == 0 else ""}">{e(a)}</span>' for i, a in enumerate(card['actions'])) + '</div>')
    if card.get('footer'): parts.append(f'<div class="mock-footer"><i aria-hidden="true"></i>{e(card["footer"])}</div>')
    return f'<div class="mock-card{variant}">{"".join(parts)}</div>'

def mock(side, l, locale):
    parts = []
    if side.get('request'): parts.append(f'<div class="mock-bubble mock-user">{e(side["request"])}</div>')
    if side.get('reply'): parts.append(f'<div class="mock-bubble mock-assistant">{e(side["reply"])}</div>')
    if side.get('card'): parts.append(mock_card(side['card'], l))
    if side.get('stack'):
        parts.append('<div class="mock-stack">' + ''.join(f'<div class="mock-card mock-card-mini"><strong class="mock-title">{e(item["title"])}</strong><span class="mock-action mock-primary">{e(item["action"])}</span></div>' for item in side['stack']) + '</div>')
    caption = side['caption'].replace('{count}', str(count_words(side.get('reply', ''), locale)))
    return f'<div class="contrast-stage"><div class="mock">{"".join(parts)}</div></div><p class="contrast-caption">{e(caption)}</p>'

def contrast(s, l, locale):
    sides = ''.join(f'<div class="contrast-side contrast-{kind}"><div class="contrast-label"><span class="contrast-mark" aria-hidden="true">{mark}</span>{l[kind]}</div>{mock(s["contrast"][kind], l, locale)}</div>' for kind, mark in [('dont', '✕'), ('do', '✓')])
    return f'<figure class="contrast" id="{s["id"]}-contrast" data-toc="{e(l["contrastToc"])}" aria-label="{e(l["contrastLabel"])}">{sides}</figure>'

def principle(s, l, locale):
    sid = s['id']
    stop = '。' if locale == 'zh' else '.'
    paragraphs = ''.join(f'<p>{e(p)}</p>' for p in s['paragraphs'])
    practices = ''.join(f'<p><strong>{e(p["title"])}{stop}</strong> {e(p["body"])}</p>' for p in s['practices'])
    notice = ''.join(f'<li>{e(n)}</li>' for n in s['notice'])
    return f'''
        <section class="principle" id="{sid}" aria-labelledby="{sid}-title">
          <div class="eyebrow">{l['principle']} {s['number']:02} · {e(s['navTitle'])}</div>
          <h2 id="{sid}-title">{e(s['title'])}</h2>
          <p class="section-lead">{e(s['lead'])}</p>
          <div class="prose">{paragraphs}</div>
          {contrast(s, l, locale)}
          <h3 id="{sid}-practices" data-toc="{e(l['practices'])}">{l['practices']}</h3>
          <div class="practices">{practices}</div>
          <h3 id="{sid}-example" data-toc="{e(l['example'])}">{l['example']} <span class="sim-tag">{l['simulation']}</span></h3>
          <figure class="example-figure">
            <div class="live-example" data-example="{sid}"></div>
            <figcaption class="notice"><span class="notice-title">{l['notice']}</span><ol>{notice}</ol></figcaption>
          </figure>
        </section>'''

def devices_section(data, l):
    d = data['devices']
    items = d['items']
    tabs = ''.join(f'<button type="button" class="de-tab" role="tab" id="device-tab-{x["id"]}" aria-controls="device-{x["id"]}" aria-selected="{str(i == 0).lower()}" tabindex="{0 if i == 0 else -1}">{svg(DEVICE_ICONS[x["id"]], 20, "de-icon")}<span>{e(x["name"])}</span></button>' for i, x in enumerate(items))
    def rules(x):
        return ''.join(f'<li><a href="#{s["id"]}"><span class="de-rule-number">{s["number"]:02}</span>{e(s["navTitle"])}</a><p>{e(r)}</p></li>' for s, r in zip(data['sections'], x['rules']))
    panels = ''.join(f'''<article class="de-panel" id="device-{x["id"]}" role="tabpanel" aria-labelledby="device-tab-{x["id"]}" tabindex="0">
            <div class="de-preview" data-device-preview="{x["id"]}" hidden></div>
            <div class="de-explanation">
              <h3 class="de-panel-title">{svg(DEVICE_ICONS[x["id"]], 20, "de-icon")}{e(x["name"])}</h3>
              <dl class="de-profile"><div><dt>{l['input']}</dt><dd>{e(x["method"])}</dd></div><div><dt>{l['context']}</dt><dd>{e(x["context"])}</dd></div></dl>
              <h4 class="de-rules-title">{l['deviceRules']}</h4>
              <ol class="de-rules">{rules(x)}</ol>
            </div>
          </article>''' for x in items)
    head = ''.join(f'<th scope="col">{e(x["name"])}</th>' for x in items)
    cells = lambda i: ''.join(f'<td>{e(x["rules"][i])}</td>' for x in items)
    rows = ''.join(f'<tr><th scope="row"><span>{s["number"]:02}</span>{e(s["navTitle"])}</th>{cells(i)}</tr>' for i, s in enumerate(data['sections']))
    return f'''
        <section class="devices" id="devices" aria-labelledby="devices-title">
          <div class="eyebrow">{l['inPractice']}</div>
          <h2 id="devices-title">{e(d['title'])}</h2>
          <p class="section-lead">{e(d['lead'])}</p>
          <div class="device-guide de-component de-context-component" data-device-guide>
            <div class="de-tabs" role="tablist" aria-label="{l['deviceSelector']}" hidden>{tabs}</div>
            <div class="de-panels">{panels}</div>
          </div>
          <details class="device-matrix" id="devices-matrix" data-toc="{e(l['matrix'])}" open>
            <summary>{l['matrix']}<span aria-hidden="true">+</span></summary>
            <div class="matrix-scroll" role="region" aria-label="{e(l['matrix'])}" tabindex="0"><table><thead><tr><th scope="col">{l['rule']}</th>{head}</tr></thead><tbody>{rows}</tbody></table></div>
          </details>
        </section>'''

def appearance_switch(l):
    buttons = ''.join(f'<button type="button" role="radio" data-theme-choice="{value}" aria-checked="{str(value == "auto").lower()}" tabindex="{0 if value == "auto" else -1}" aria-label="{l[label]}" title="{l[label]}">{svg(THEME_ICONS[value])}</button>' for value, label in [('auto','system'),('light','light'),('dark','dark')])
    return f'<div class="appearance-switch" role="radiogroup" aria-label="{l["appearance"]}">{buttons}</div>'

def render(locale):
    l = LABELS[locale]
    version = lambda name: hashlib.sha256((DIST / name).read_bytes()).hexdigest()[:12]
    data = json.loads((DIST / ('content.zh.json' if locale == 'zh' else 'content.json')).read_text())
    period = '。' if locale == 'zh' else '.'
    numbered = lambda s: f'<a href="#{s["id"]}" data-chapter="{s["id"]}"><span class="chapter-number">{s["number"]:02}</span>{e(s["navTitle"])}</a>'
    nav = '\n'.join(numbered(s) for s in data['sections'])
    reference_nav = f'<a href="#devices" data-chapter="devices">{e(data["devices"]["title"])}</a><a href="#about" data-chapter="about">{l["aboutTitle"]}</a>'
    rule_grid = ''.join(f'<li><a href="#{s["id"]}"><span class="rule-meta"><span class="rule-number">{s["number"]:02}</span>{e(s["navTitle"])}</span><strong>{e(s["title"])}</strong></a></li>' for s in data['sections'])
    rule_grid += f'<li class="rule-devices"><a href="#devices"><span class="rule-meta">{l["devicesCard"]} <span aria-hidden="true">→</span></span><strong>{l["devicesCardText"]}</strong></a></li>'
    bg = data['background']
    background = f'''<section class="background" id="background" aria-labelledby="background-title">
          <div class="eyebrow">{l['background']}</div><h2 id="background-title">{e(bg['title'])}</h2>
          <p class="background-lead">{e(bg['lead'])}</p>
          <div class="prose">{''.join(f'<p>{e(p)}</p>' for p in bg['paragraphs'])}</div>
          <p class="background-takeaway">{e(bg['takeaway'])}</p>
          <nav class="background-links" aria-label="{l['related']}">{''.join(f'<a href="#{x["id"]}">{e(x["label"])} <span aria-hidden="true">↓</span></a>' for x in bg['connections'])}</nav>
        </section>'''
    star = f'<a class="github-star" href="{GITHUB_REPOSITORY}" target="_blank" rel="noopener noreferrer" aria-label="{e(l["githubStar"])}">{svg(STAR_ICON, 15)}<span>{l["star"]}</span></a>'
    menu_meta = f'<div class="menu-meta"><a class="menu-top" href="#overview">{l["top"]} <span aria-hidden="true">↑</span></a>{star}<div class="author-profile"><span class="author-label">{l["author"]}</span><a class="author-name" href="{PERSONAL_PAGE}">Richard Q<span class="sr-only"> — {l["authorLink"]}</span> <span aria-hidden="true">↗</span></a><span class="author-bio">{l["authorBio"]}</span><span class="author-work">{l["authorWork"]}</span></div></div>'
    device_previews = {x['id']: x['example'] for x in data['devices']['items']}
    page = f'''<!doctype html>
<html lang="{'zh-SG' if locale == 'zh' else 'en'}">
<head>
  <meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{e(data['title'])} — {l['guide']}</title>
  <meta name="description" content="{e(l['description'])}">
  <meta name="theme-color" content="#ffffff">
  <link rel="alternate" hreflang="en" href="index.html"><link rel="alternate" hreflang="zh-SG" href="zh.html">
  <link rel="icon" href="favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="styles.css?v={version('styles.css')}"><link rel="stylesheet" href="demos.css?v={version('demos.css')}"><link rel="stylesheet" href="devices.css?v={version('devices.css')}">
  <script>try{{const t=localStorage.getItem('assistant-guide-theme')||'auto';document.documentElement.dataset.theme=t==='auto'?(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'):t;}}catch{{}}</script>
  <script type="application/json" id="guide-labels">{json_script(l)}</script>
  <script type="application/json" id="device-data">{json_script(device_previews)}</script>
  <script src="examples.js?v={version('examples.js')}" defer></script><script src="devices.js?v={version('devices.js')}" defer></script><script src="app.js?v={version('app.js')}" defer></script>
</head>
<body>
  <a class="skip-link" href="#main">{l['skip']}</a>
  <header class="site-header">
    <div class="global-bar"><a class="brand" href="#overview"><span class="brand-mark" aria-hidden="true">✳</span><span class="brand-title">{l['brand']}</span><span class="brand-short" aria-hidden="true">{l['brandShort']}</span></a><div class="header-settings"><div class="header-appearance">{appearance_switch(l)}</div><nav class="language-switch" aria-label="{l['language']}"><a href="index.html" lang="en" data-language-link {'aria-current="page"' if locale == 'en' else ''}>English</a><a href="zh.html" lang="zh-SG" data-language-link {'aria-current="page"' if locale == 'zh' else ''}>中文</a></nav></div></div>
    <details class="mobile-chapters"><summary><span class="mobile-chapters-label">{l['browse']}</span><span class="mobile-current" data-current-chapter></span><span class="mobile-chevron" aria-hidden="true">⌄</span></summary><nav aria-label="{l['mobileNav']}"><a href="#overview" data-chapter="overview">{l['overview']}</a><a href="#background" data-chapter="background">{l['background']}</a>{nav}{reference_nav}<div class="mobile-appearance"><span>{l['appearance']}</span>{appearance_switch(l)}</div>{menu_meta}</nav></details>
  </header>
  <div class="page-layout">
    <aside class="sidebar" aria-label="{l['chapterNav']}">
      <div class="sidebar-navigation">
      <div class="nav-group-title">{l['gettingStarted']}</div><a href="#overview" class="overview-link" data-chapter="overview">{l['overview']}</a><a href="#background" class="overview-link" data-chapter="background">{l['background']}</a>
      <div class="nav-group-title">{l['designPrinciples']}</div><nav class="chapter-links" aria-label="{l['principles']}">{nav}</nav>
      <div class="nav-group-title">{l['inPractice']}</div><nav class="chapter-links reference-links" aria-label="{l['inPractice']}">{reference_nav}</nav>
      </div>
      {menu_meta}
    </aside>
    <main id="main" tabindex="-1">
      <section id="overview" class="overview" aria-labelledby="page-title">
        <div class="eyebrow">{l['date']}</div>
        <h1 id="page-title">{e(data['title'])}</h1>
        <p class="dek">{e(data['dek'])}</p>
        <div class="hero-visual" role="img" aria-label="{l['heroAlt']}">
          <div class="hero-grid" aria-hidden="true"></div>
          <div class="hero-audio" aria-hidden="true"><div class="hero-wave"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><span>{l['intention']}</span></div>
          <div class="hero-task" aria-hidden="true"><div class="hero-task-heading"><span>{l['dinner']}</span><span>···</span></div><div class="hero-date"><span>{l['thu']}</span><strong>15</strong></div><div class="hero-task-copy"><strong>{l['time']}</strong><span>{l['two']}</span></div><div class="hero-task-button">{l['review']}</div><div class="hero-task-input">{l['ask']}</div></div>
          <div class="hero-phone" aria-hidden="true"><div class="hero-phone-notch"></div><div class="hero-phone-label">{l['oneResult']}</div><div class="hero-phone-thumb"></div><div class="hero-phone-line"></div><div class="hero-phone-line short"></div><div class="hero-phone-action"></div></div>
        </div>
        <h2 class="rules-title" id="rules" data-toc="{e(l['rulesTitle'])}">{l['rulesTitle']}</h2>
        <ol class="rule-grid">{rule_grid}</ol>
        <p class="reading-note">{e(data['readingNote'])}</p>
      </section>
      {background}
      {''.join(principle(s, l, locale) for s in data['sections'])}
      {devices_section(data, l)}
      <section class="about" id="about" aria-labelledby="about-title"><h2 id="about-title">{l['aboutTitle']}</h2><p>{l['aboutOne']}</p><p>{l['aboutFeedback']} <a href="{GITHUB_REPOSITORY}/issues" target="_blank" rel="noopener">{l['issues']}</a>{period}</p></section>
    </main>
    <aside class="toc" aria-label="{l['within']}"><div class="toc-heading">{l['toc']}</div><nav id="local-toc"></nav></aside>
  </div>
  <noscript><style>.live-example,.sim-tag{{display:none}}</style><p class="noscript-note">{l['noscript']}</p></noscript>
</body></html>'''
    (DIST / ('zh.html' if locale == 'zh' else 'index.html')).write_text(page)
    print(f'Rendered {locale}: {len(data["sections"])} principles and {len(data["devices"]["items"])} device guides.')

if __name__ == '__main__':
    for locale in LABELS:
        render(locale)
