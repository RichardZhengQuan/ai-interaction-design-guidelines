# Richard 的人工智能交互设计指南

[English](README.md) · [简体中文](README.zh-CN.md)

围绕用户的使用场景设计个人 AI 助手的中英文指南，包含七项设计原则、交互示例，以及六类设备的应用说明。

[阅读英文指南](https://personal-ai-design-guidelines.richardqz.chatgpt.site/) · [阅读中文指南](https://personal-ai-design-guidelines.richardqz.chatgpt.site/zh)

## 设计指南

围绕用户的使用场景选择交互方式，聚焦当前任务，提供清晰的结果、可见的控制与连续的体验。包含电视、可交互大屏设备、智能手机、智能手表、智能眼镜和无屏设备的示例。

## 本地预览

已构建的网站位于 `dist/`，无需安装 JavaScript 依赖或连接账号。

```sh
python3 -m http.server 8000 --directory dist
```

打开 `http://localhost:8000/` 查看英文版，或打开 `http://localhost:8000/zh.html` 查看中文版。

修改内容或页面模板后，重新生成两个语言版本：

```sh
python3 build.py
```

内容保存在 `dist/content.json` 和 `dist/content.zh.json` 中。交互示例为本地模拟，不会录制音频、调用 AI 服务、创建提醒或发送邀请。

## 作者

[richard q](https://pmrichq.com/)，产品经理，专注 AI 工具、Agent 系统与产品设计。
