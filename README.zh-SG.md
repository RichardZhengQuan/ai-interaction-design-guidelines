# Richard 的人工智能交互设计指南

[English](README.md) · [中文](README.zh-SG.md)

一份中英文指南，帮助个人 AI 助手少说一点、多展示一点，并把控制权留给用户。七条规则各配有避免与推荐对照和交互示例，另附六类设备的应用说明。

[阅读英文指南](https://personal-ai-design-guidelines.richardqz.chatgpt.site/) · [阅读中文指南](https://personal-ai-design-guidelines.richardqz.chatgpt.site/zh)

## 设计指南

1. 用最少的内容把事说清
2. 让场景决定输入方式
3. 一次只把一个任务放在前台
4. 只推荐一个，其余放在手边
5. 给出界面，而不是一段对话
6. 行动前先确认，结束后如实汇报
7. 延续任务，而不是延续聊天

所有示例都围绕同一个任务：和 Alex 约晚饭。示例覆盖手机、电脑与平板、手表、智能眼镜、电视和无屏设备。

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

设计原则、避免与推荐对照和设备说明保存在 `dist/content.json` 和 `dist/content.zh.json` 中。交互示例位于 `dist/examples.js`（中文文案也在同一文件中），设备预览位于 `dist/devices.js`。示例均为本地模拟，不会录制音频、调用 AI 服务、创建提醒或发送邀请。

## 作者

[richard q](https://pmrichq.com/)，产品经理，专注 AI 工具、Agent 系统与产品设计。
