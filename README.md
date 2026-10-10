# Richard’s AI Interaction Design Guidelines

[English](README.md) · [简体中文](README.zh-CN.md)

A bilingual guide to designing personal AI assistants around the user’s situation, with seven design principles, interactive UI examples, and applications across six device categories.

[Read the English guide](https://personal-ai-design-guidelines.richardqz.chatgpt.site/) · [Read the Chinese guide](https://personal-ai-design-guidelines.richardqz.chatgpt.site/zh)

## The guide

Choose interactions around the user’s situation, focus on the current task, and provide clear outcomes, visible control, and continuity. Examples cover TVs, interactive large screens, smartphones, smartwatches, smart glasses, and screenless devices.

## Run locally

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

## Author

[richard q](https://pmrichq.com/), product manager focused on AI tools, agent systems, and product design.
