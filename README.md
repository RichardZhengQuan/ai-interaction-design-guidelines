# Richard’s AI Interaction Design Guidelines

[English](README.md) · [中文](README.zh-SG.md)

A bilingual guide to designing personal AI assistants that say less, show more and leave people in control. Each of the seven rules comes with a Don’t/Do comparison and an interactive example, plus guidance for six kinds of device.

[Read the English guide](https://personal-ai-design-guidelines.richardqz.chatgpt.site/) · [Read the Chinese guide](https://personal-ai-design-guidelines.richardqz.chatgpt.site/zh)

## The guide

1. Answer with the smallest thing that works
2. Let the moment choose the input
3. Keep one task in front
4. Recommend one, keep the rest close
5. Show an interface, not a transcript
6. Ask before acting, then report what really happened
7. Carry the task, not the chat

Every example follows one task, planning dinner with Alex, across phones, computers and tablets, watches, smart glasses, TVs and screenless devices.

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

The principles, Don’t/Do comparisons and device guide are stored in `dist/content.json` and `dist/content.zh.json`. The interactive examples are in `dist/examples.js`, with their Chinese text in the same file, and the device previews are in `dist/devices.js`. The examples are local simulations; they do not record audio, call AI services, create reminders, or send invitations.

## Author

[richard q](https://pmrichq.com/), product manager focused on AI tools, agent systems, and product design.
