---
title: '共同构建泰语聊天对话数据集！'
slug: '/previous-versions-and-resources/dataset-chat'
description: '用于共同构建泰语聊天对话数据集的网站，助力开发 OpenThaiGPT 的 Thai InstructGPT 与奖励模型，并附常见问题解答。'
---
# 😍 共同构建泰语聊天对话数据集！

## 共同构建泰语聊天对话数据集的网站

<a class="link-card" href="https://tag.openthaigpt.aieat.or.th" target="_blank" rel="noopener noreferrer"><span class="link-card-title">共同构建泰语聊天对话数据集的网站</span><span class="link-card-domain">tag.openthaigpt.aieat.or.th</span></a>

为了让 OpenThaiGPT 团队尽快获得用于开发 Thai InstructGPT 与奖励模型（RM）的数据集，团队基于以 Apache 2.0 协议开源的 [LAION-AI/Open-Assistant](https://github.com/LAION-AI/Open-Assistant) 网站进行 Fork，搭建了这个共同构建数据集的网站。

## Q/A

**Q：为什么选择 Fork Open Assistant 的网站并自行托管？为什么不自行开发，或者直接使用 Open Assistant？**

A：Fork Open Assistant 网站有多方面的优势。

1. 无需耗费时间自行开发。
2. 可以持续获得 Open Assistant 的更新与漏洞修复。
3. 只要有人在网站上贡献数据，OpenThaiGPT 开发者即可立即获得原始数据集，无需等待 Open Assistant 发布数据。
4. 由于出自同一套系统，OpenThaiGPT 的数据集可以轻松转交给 Open Assistant。
5. 获得世界级标准的数据集构建流程与规范指南。
6. 由于我们只专注于泰语一种语言，因此可以更频繁地发布数据集（每周日发布）。
7. 可以扩展到 OpenThaiGPT 未来可能需要的其他数据标注任务，也能更快地改造系统以支持 CLMV 等其他东南亚区域语言。

**Q：OpenThaiGPT 的数据集构建网站是否开源？**

A：我们已在 [GitHub 上的 OpenThaiGPT/Open-Assistant](https://github.com/OpenThaiGPT/Open-Assistant) 以 Apache 2.0 协议开源了 OpenThaiGPT 数据集构建网站的源代码。
