# Richard’s AI Interaction Design Guidelines

A bilingual guide to designing personal AI assistants around the user’s situation, with seven design principles, interactive UI examples, and applications across six device categories.

[Read in English](https://personal-ai-design-guidelines.richardqz.chatgpt.site/) · [阅读中文版](https://personal-ai-design-guidelines.richardqz.chatgpt.site/zh)

## 设计指南

围绕用户的使用场景选择交互方式，聚焦当前任务，提供清晰的结果、可见的控制与连续的体验。包含电视、可交互大屏设备、智能手机、智能手表、智能眼镜和无屏设备的示例。

## Run locally / 本地预览

The prebuilt website is in `dist/`. It needs no JavaScript dependencies or account connections.

```sh
python3 -m http.server 8000 --directory dist
```

Open `http://localhost:8000/` for English or `http://localhost:8000/zh.html` for Chinese.

After changing the content or page template, regenerate both pages:

```sh
python3 build.py
```

Content is stored in `dist/content.json` and `dist/content.zh.json`. Interactive examples are local simulations; they do not record audio, call AI services, create reminders, or send invitations.

## Author / 作者

[Richard Zheng](https://pmrichq.com/), product manager focused on AI tools, agent systems, and product design.

The documentation layout is inspired by Apple’s [Designing for iPhone Duo](https://developer.apple.com/design/human-interface-guidelines/designing-for-iphone-duo). The principles, illustrations, and UI examples are original.
