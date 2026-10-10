"""Render both locales of the accessible, buildless design guide."""
import html
import hashlib
import json
from pathlib import Path

ROOT = Path(__file__).parent
DIST = ROOT / 'dist'
e = html.escape
REFERENCE = 'https://developer.apple.com/design/human-interface-guidelines/designing-for-iphone-duo'
# Author profile and canonical page: https://pmrichq.com/
PERSONAL_PAGE = 'https://pmrichq.com/'
GITHUB_REPOSITORY = 'https://github.com/RichardZhengQuan/ai-interaction-design-guidelines'
LABELS = {
    'en': {
        'brand':'Richard’s AI Interaction Design Guidelines',
        'guide':'Design Guidelines', 'overview':'Overview', 'background':'Background', 'related':'Related principles', 'principles':'Principles', 'about':'About',
        'skip':'Skip to content', 'browse':'Browse principles',
        'mobileNav':'Mobile principles', 'chapterNav':'Chapter navigator',
        'gettingStarted':'Getting started', 'designPrinciples':'Design principles',
        'sidebarNote':'Seven principles.<br>Six device contexts.', 'aboutTitle':'About this proposal',
        'date':'October 2026', 'intention':'Capture an intention', 'dinner':'Dinner with Alex',
        'thu':'THU', 'time':'Thursday, 7 PM', 'two':'A table for two', 'review':'Review plan',
        'ask':'Ask or change something', 'oneResult':'One clear result',
        'heroAlt':'One intention connects a voice interaction, a focused task canvas, and a compact result.',
        'explore':'Explore the principles', 'start':'Start with context', 'principle':'Principle',
        'practices':'Best practices', 'example':'UI example', 'presentation':'Example presentation',
        'interactive':'Interactive', 'diagram':'Annotated diagram', 'download':'Download figure',
        'openDiagram':'Open full-size diagram for', 'disclosure':'Illustrative example. All interactions stay on this page.',
        'devices':'Across devices', 'deviceIntro':'Keep the intention consistent while adapting the interface, input, and feedback to each device.',
        'contexts':'Six contexts for one assistant',
        'contextsNote':'Screen size is one factor. Viewing distance, input, shared or personal use, and available attention also shape the interaction. A screenless device needs a conversational interface and clear feedback.',
        'method':'Interaction method', 'deviceNote':'Design consideration',
        'aboutOne':'These are proposed guidelines developed from a conversation about the design of personal AI assistants. The seven principles and six device contexts form a working framework for further refinement.',
        'aboutTwo':'The documentation layout is informed by Apple’s',
        'aboutThree':'The principles, diagrams, and UI demonstrations on this page are original.',
        'author':'Author', 'authorBio':'Product manager focused on AI tools, agent systems, and product design.',
        'authorWork':'OneMind · usAIge · Clip Loop', 'authorLink':'Richard Zheng — personal website', 'appearance':'Appearance',
        'system':'System', 'light':'Light', 'dark':'Dark', 'top':'Back to top', 'within':'Within this principle',
        'toc':'On this page', 'language':'Language',
        'githubStar':'Star this guide on GitHub (opens in a new tab)',
        'noscript':'Annotated diagrams and all device guidance are available below. Enable JavaScript to try the interactive examples and device previews.',
        'description':'Seven proposed design principles for personal AI assistants, with English and Chinese explanations, interactive examples, and guidance for six device categories.'
    },
    'zh': {
        'brand':'Richard 的人工智能交互设计指南',
        'guide':'设计指南', 'overview':'概览', 'background':'设计背景', 'related':'相关原则', 'principles':'设计原则', 'about':'关于',
        'skip':'跳至正文', 'browse':'浏览设计原则',
        'mobileNav':'移动端原则导航', 'chapterNav':'章节导航',
        'gettingStarted':'开始阅读', 'designPrinciples':'设计原则',
        'sidebarNote':'七项设计原则。<br>六类设备情境。', 'aboutTitle':'关于这份提案',
        'date':'2026 年 10 月', 'intention':'表达一个意图', 'dinner':'与 Alex 共进晚餐',
        'thu':'周四', 'time':'周四 19:00', 'two':'2 位用餐', 'review':'查看计划',
        'ask':'提问，或修改计划', 'oneResult':'一个明确的结果',
        'heroAlt':'同一个意图连接语音交互、聚焦的任务界面和简洁的结果。',
        'explore':'探索设计原则', 'start':'从情境开始', 'principle':'原则',
        'practices':'设计建议', 'example':'界面示例', 'presentation':'示例展示方式',
        'interactive':'交互演示', 'diagram':'标注示意图', 'download':'下载示意图',
        'openDiagram':'打开完整尺寸示意图：', 'disclosure':'概念示例。所有交互均在本页内模拟。',
        'devices':'在不同设备上应用', 'deviceIntro':'保持同一个意图，根据设备调整界面、输入方式与反馈。',
        'contexts':'一个助手，六类设备情境',
        'contextsNote':'屏幕尺寸只是一个因素。观看距离、输入方式、共享或个人使用，以及可投入的注意力，都会影响交互。无屏设备需要设计对话与清晰的反馈。',
        'method':'交互方式', 'deviceNote':'设计注意点',
        'aboutOne':'这份指南源于关于个人 AI 助手设计的讨论。七项原则与六类设备情境共同组成一个可继续完善的设计框架。',
        'aboutTwo':'文档版式参考了 Apple 的',
        'aboutThree':'本页的设计原则、示意图与交互演示均为原创。',
        'author':'作者', 'authorBio':'产品经理，专注 AI 工具、Agent 系统与产品设计。',
        'authorWork':'OneMind · usAIge · Clip Loop', 'authorLink':'Richard Zheng 的个人网站', 'appearance':'外观',
        'system':'跟随系统', 'light':'浅色', 'dark':'深色', 'top':'返回顶部', 'within':'本项原则内的导航',
        'toc':'本页内容', 'language':'语言',
        'githubStar':'在 GitHub 为这份指南加星标（在新标签页中打开）',
        'noscript':'下方提供标注示意图与全部设备建议。启用 JavaScript 后，可体验交互演示和设备预览。',
        'description':'个人 AI 助手的七项设计原则，提供中英文说明、交互示例，以及电视、大屏、手机、手表、智能眼镜和无屏设备的设计建议。'
    }
}

def json_script(value):
    return json.dumps(value, ensure_ascii=False).replace('<', '\\u003c')

def render(locale):
    l = LABELS[locale]
    stylesheet_version = hashlib.sha256((DIST / 'styles.css').read_bytes()).hexdigest()[:12]
    examples_version = hashlib.sha256((DIST / 'examples.js').read_bytes()).hexdigest()[:12]
    device_styles_version = hashlib.sha256((DIST / 'devices.css').read_bytes()).hexdigest()[:12]
    devices_version = hashlib.sha256((DIST / 'devices.js').read_bytes()).hexdigest()[:12]
    data = json.loads((DIST / ('content.zh.json' if locale == 'zh' else 'content.json')).read_text())
    nav = '\n'.join(f'<a href="#{s["id"]}" data-chapter="{s["id"]}"><span class="chapter-number">{s["number"]:02}</span>{e(s["navTitle"])}</a>' for s in data['sections'])
    sections = []
    for s in data['sections']:
        sid = s['id']
        paragraphs = ''.join(f'<p>{e(p)}</p>' for p in s['paragraphs'])
        practices = ''.join(f'<p><strong>{e(p["title"])}{"。" if locale == "zh" else "."}</strong> {e(p["body"])}</p>' for p in s['practices'])
        fallback = ''.join(f'<article class="device-fallback-card"><h4>{e(d["name"])}</h4><p><strong>{e(l["method"])}{ "：" if locale == "zh" else ": "}</strong>{e(d["method"])}</p><p>{e(d["guidance"])}</p><p class="device-note">{e(d["note"])}</p></article>' for d in s['devices'])
        sections.append(f'''
        <section class="principle" id="{sid}" aria-labelledby="{sid}-title">
          <div class="eyebrow">{l['principle']} {s['number']:02}</div>
          <h2 id="{sid}-title">{e(s['title'])}</h2>
          <p class="section-lead">{e(s['lead'])}</p>
          <div class="prose">{paragraphs}</div>
          <h3 id="{sid}-practices">{l['practices']}</h3>
          <div class="practices">{practices}</div>
          <h3 id="{sid}-example">{l['example']}</h3>
          <figure class="example-figure">
            <div class="figure-toolbar" aria-label="{l['presentation']}">
              <div class="figure-mode"><button type="button" data-mode="interactive" aria-pressed="true">{l['interactive']}</button><button type="button" data-mode="diagram" aria-pressed="false">{l['diagram']}</button></div>
              <a href="{e(s['figureFile'])}" download>{l['download']} <span aria-hidden="true">↓</span></a>
            </div>
            <div class="live-example" data-example="{sid}"></div>
            <div class="diagram-example" hidden><a href="{e(s['figureFile'])}" target="_blank" rel="noopener" aria-label="{l['openDiagram']} {e(s['title'])}"><img src="{e(s['figureFile'])}" alt="{e(s['figureAlt'])}" width="1440" height="860" loading="lazy"></a></div>
            <figcaption><span class="caption-number">{s['number']:02}</span>{e(s['exampleCaption'])}<span class="example-disclosure">{l['disclosure']}</span></figcaption>
          </figure>
          <h3 id="{sid}-devices">{l['devices']}</h3>
          <p class="device-section-intro">{l['deviceIntro']}</p>
          <div class="device-explorer" data-device-section="{sid}"><div class="device-fallback">{fallback}</div></div>
        </section>''')
    intro = ''.join(f'<p>{e(p)}</p>' for p in data['intro'])
    bg = data['background']
    background = f'''<section class="background" id="background" aria-labelledby="background-title">
          <div class="eyebrow">{l['background']}</div><h2 id="background-title">{e(bg['title'])}</h2>
          <p class="background-lead">{e(bg['lead'])}</p>
          <div class="prose">{''.join(f'<p>{e(p)}</p>' for p in bg['paragraphs'])}</div>
          <p class="background-takeaway">{e(bg['takeaway'])}</p>
          <nav class="background-links" aria-label="{l['related']}">{''.join(f'<a href="#{x["id"]}">{e(x["label"])} <span aria-hidden="true">↗</span></a>' for x in bg['connections'])}</nav>
        </section>'''
    inventory = ''.join(f'<span>{e(d["name"])}</span>' for d in data['sections'][0]['devices'])
    theme_icons = {
        'auto':'<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8m-4-4v4"/>',
        'light':'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.4 1.4m11.2 11.2L19 19M5 19l1.4-1.4M17.6 6.4 19 5"/>',
        'dark':'<path d="M20.5 14.7A8.8 8.8 0 0 1 9.3 3.5a8.8 8.8 0 1 0 11.2 11.2Z"/>'
    }
    appearance_switch = ''.join(f'<button type="button" role="radio" data-theme-choice="{value}" aria-checked="{str(value == "auto").lower()}" tabindex="{0 if value == "auto" else -1}" aria-label="{l[label]}" title="{l[label]}"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">{theme_icons[value]}</svg></button>' for value,label in [('auto','system'),('light','light'),('dark','dark')])
    menu_meta = f'<div class="menu-meta"><a class="menu-top" href="#overview">{l["top"]} <span aria-hidden="true">↑</span></a><a class="author-profile" href="{PERSONAL_PAGE}" aria-label="{e(l["authorLink"])}" aria-description="{e(l["authorBio"] + " " + l["authorWork"])}"><span class="author-label">{l["author"]}</span><span class="author-name">Richard Zheng <span aria-hidden="true">↗</span></span><span class="author-bio">{l["authorBio"]}</span><span class="author-work">{l["authorWork"]}</span></a></div>'
    period = '。' if locale == 'zh' else '.'
    page = f'''<!doctype html>
<html lang="{'zh-CN' if locale == 'zh' else 'en'}">
<head>
  <meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{e(data['title'])} — {l['guide']}</title>
  <meta name="description" content="{l['description']}">
  <meta name="theme-color" content="#ffffff">
  <link rel="alternate" hreflang="en" href="index.html"><link rel="alternate" hreflang="zh-CN" href="zh.html">
  <link rel="icon" href="favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="styles.css?v={stylesheet_version}"><link rel="stylesheet" href="demos.css"><link rel="stylesheet" href="devices.css?v={device_styles_version}">
  <script>try{{const t=localStorage.getItem('assistant-guide-theme')||'auto';document.documentElement.dataset.theme=t==='auto'?(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'):t;}}catch{{}}</script>
  <script type="application/json" id="guide-labels">{json_script(l)}</script>
  <script type="application/json" id="device-data">{json_script({s['id']:s['devices'] for s in data['sections']})}</script>
  <script src="examples.js?v={examples_version}" defer></script><script src="devices.js?v={devices_version}" defer></script><script src="app.js" defer></script>
</head>
<body>
  <a class="skip-link" href="#main">{l['skip']}</a>
  <header class="site-header">
    <div class="global-bar"><div class="header-identity"><a class="brand" href="#overview"><span class="brand-mark" aria-hidden="true">✳</span><span class="brand-title">{l['brand']}</span></a><a class="github-star" href="{GITHUB_REPOSITORY}" target="_blank" rel="noopener noreferrer" aria-label="{e(l['githubStar'])}"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 3 2.8 5.8 6.4.9-4.6 4.5 1.1 6.4L12 17.6l-5.7 3 1.1-6.4-4.6-4.5 6.4-.9L12 3Z"/></svg><span>Star on GitHub</span></a></div><div class="header-settings"><div class="header-appearance"><div class="appearance-switch" id="appearance" role="radiogroup" aria-label="{l['appearance']}">{appearance_switch}</div></div><nav class="language-switch" aria-label="{l['language']}"><a href="index.html" lang="en" data-language-link {'aria-current="page"' if locale == 'en' else ''}>English</a><a href="zh.html" lang="zh-CN" data-language-link {'aria-current="page"' if locale == 'zh' else ''}>简体中文</a></nav></div></div>
    <details class="mobile-chapters"><summary>{l['browse']} <span aria-hidden="true">⌄</span></summary><nav aria-label="{l['mobileNav']}"><a href="#background" data-chapter="background">{l['background']}</a>{nav}{menu_meta}</nav></details>
  </header>
  <div class="page-layout">
    <aside class="sidebar" aria-label="{l['chapterNav']}">
      <div class="sidebar-navigation">
      <div class="nav-group-title">{l['gettingStarted']}</div><a href="#overview" class="overview-link" data-chapter="overview">{l['overview']}</a><a href="#background" class="overview-link" data-chapter="background">{l['background']}</a>
      <div class="nav-group-title">{l['designPrinciples']}</div><nav class="chapter-links" aria-label="{l['principles']}">{nav}</nav>
      <div class="sidebar-note">{l['sidebarNote']}</div>
      <a class="sidebar-reference" href="#about">{l['aboutTitle']}</a>
      </div>
      {menu_meta}
    </aside>
    <main id="main" tabindex="-1">
      <section id="overview" class="overview" aria-labelledby="page-title">
        <div class="eyebrow">{l['date']}</div>
        <h1 id="page-title">{e(data['title'])}</h1>
        <div class="hero-visual" role="img" aria-label="{l['heroAlt']}">
          <div class="hero-grid" aria-hidden="true"></div>
          <div class="hero-audio" aria-hidden="true"><div class="hero-wave"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><span>{l['intention']}</span></div>
          <div class="hero-task" aria-hidden="true"><div class="hero-task-heading"><span>{l['dinner']}</span><span>···</span></div><div class="hero-date"><span>{l['thu']}</span><strong>15</strong></div><div class="hero-task-copy"><strong>{l['time']}</strong><span>{l['two']}</span></div><div class="hero-task-button">{l['review']}</div><div class="hero-task-input">{l['ask']}</div></div>
          <div class="hero-phone" aria-hidden="true"><div class="hero-phone-notch"></div><div class="hero-phone-label">{l['oneResult']}</div><div class="hero-phone-thumb"></div><div class="hero-phone-line"></div><div class="hero-phone-line short"></div><div class="hero-phone-action"></div></div>
        </div>
        {background}
        <div class="prose intro">{intro}</div>
        <div class="device-inventory"><h2>{l['contexts']}</h2><div class="device-chips">{inventory}</div><p>{l['contextsNote']}</p></div>
        <div class="guide-map"><span>{l['explore']}</span><a href="#context">{l['start']} <span aria-hidden="true">↓</span></a></div>
      </section>
      {''.join(sections)}
      <section class="about" id="about" aria-labelledby="about-title"><h2 id="about-title">{l['aboutTitle']}</h2><p>{l['aboutOne']}</p><p>{l['aboutTwo']} <a href="{REFERENCE}" target="_blank" rel="noopener">Designing for iPhone Duo</a>{period} {l['aboutThree']}</p></section>
    </main>
    <aside class="toc" aria-label="{l['within']}"><div class="toc-heading">{l['toc']}</div><nav id="local-toc"><a href="#overview">{l['overview']}</a><a href="#background">{l['background']}</a>{''.join(f'<a href="#{s["id"]}">{e(s["navTitle"])}</a>' for s in data['sections'])}</nav></aside>
  </div>
  <noscript><style>.live-example,.figure-toolbar{{display:none}}.diagram-example[hidden]{{display:block!important}}</style><p class="noscript-note">{l['noscript']}</p></noscript>
</body></html>'''
    (DIST / ('zh.html' if locale == 'zh' else 'index.html')).write_text(page)
    print(f'Rendered {locale}: seven principles and 42 device applications.')

if __name__ == '__main__':
    for locale in LABELS:
        render(locale)
