---
title: '已发布模型版本 <1.0.0-alpha>（03/08/23）'
slug: '/previous-versions-and-resources/previous-events/released-models-version-less-than-1.0.0-alpha-greater-than-03-08-23'
description: 'OpenThaiGPT 1.0.0-alpha（2023 年 8 月 3 日）发布说明：首个允许研究与商业使用的泰语 7B LLaMA v2 Chat 模型，并附完整更新日志。'
---
# 🔥 已发布模型版本 <1.0.0-alpha>（03/08/23）

## 🇹🇭 OpenThaiGPT 1.0.0-alpha（2023 年 8 月 3 日）

🇹🇭 OpenThaiGPT 版本 1.0.0-alpha 是首个泰语实现的 70 亿参数 LLaMA v2 Chat 模型，经过微调以遵循翻译成泰语的指令，并采用 Huggingface 的 LLaMA 实现。

![](</img/image-23.png>)

## 网页演示

<a class="link-card" href="https://demo.openthaigpt.aieat.or.th" target="_blank" rel="noopener noreferrer"><span class="link-card-title">体验 OpenThaiGPT 网页演示</span><span class="link-card-domain">demo.openthaigpt.aieat.or.th</span></a>

## Colab 演示

<a class="link-card" href="https://colab.research.google.com/drive/1kDQidCtY9lDpk49i7P3JjLAcJM04lawu?usp=sharing" target="_blank" rel="noopener noreferrer"><span class="link-card-title">体验 OpenThaiGPT 1.0.0-alpha — Google Colab</span><span class="link-card-domain">colab.research.google.com</span></a>

## 更新日志

### 🇹🇭 版本 1.0.0-alpha（Facebook LLama V2 模型）

**发布日期：2023 年 8 月 3 日**

🇹🇭 OpenThaiGPT 版本 1.0.0-alpha 是首个泰语实现的 70 亿参数 LLaMA v2 Chat 模型，经过微调以遵循翻译成泰语的指令，并采用 Huggingface 的 LLaMA 实现。

#### 变更内容

1. 采用 Facebook LLama v2 model 7b chat 作为基础模型，该模型**在超过 2 万亿个 token 上完成预训练。**
2. 上下文长度由 2048 token 提升至 **4096 token**
3. **允许**研究用途及**商业用途。**

#### 许可协议

* **源代码**：License Apache Software License 2.0.
* **权重**：可用于研究及**商业用途。**

#### 代码与权重

* **Colab 演示**：[Google Colab](https://colab.research.google.com/drive/1kDQidCtY9lDpk49i7P3JjLAcJM04lawu?usp=sharing)
* **微调代码**：[OpenThaiGPT/openthaigpt-finetune-010beta](https://github.com/OpenThaiGPT/openthaigpt-finetune-010beta)（与 OpenThaiGPT 0.1.0-beta 使用相同的代码）
* **推理库**：[OpenThaiGPT/openthaigpt](https://github.com/OpenThaiGPT/openthaigpt)
* **权重（Lora Adapter）**：[openthaigpt/openthaigpt-1.0.0-alpha-7b-chat](https://huggingface.co/openthaigpt/openthaigpt-1.0.0-alpha-7b-chat)
* **权重（Huggingface Checkpoint）**：[openthaigpt/openthaigpt-1.0.0-alpha-7b-chat-ckpt-hf](https://huggingface.co/openthaigpt/openthaigpt-1.0.0-alpha-7b-chat-ckpt-hf)

#### 作者

* Kobkrit Viriyayudhakorn (kobkrit@aieat.or.th)
* Sumeth Yuenyong (sumeth.yue@mahidol.edu)
* Thaweewat Rugsujarit (thaweewr@scg.com)
* Jillaphat Jaroenkantasima (autsadang41@gmail.com)
* Norapat Buppodom (new@norapat.com)
* Koravich Sangkaew (kwankoravich@gmail.com)
* Peerawat Rojratchadakorn (peerawat.roj@gmail.com)
* Surapon Nonesung (nonesungsurapon@gmail.com)
* Chanon Utupon (chanon.utupon@gmail.com)
* Sadhis Wongprayoon (sadhis.tae@gmail.com)
* Nucharee Thongthungwong (nuchhub@hotmail.com)
* Chawakorn Phiantham (mondcha1507@gmail.com)
* Patteera Triamamornwooth (patt.patteera@gmail.com)
* Nattarika Juntarapaoraya (natt.juntara@gmail.com)
* Kriangkrai Saetan (kraitan.ss21@gmail.com)
* Pitikorn Khlaisamniang (pitikorn32@gmail.com)

### 版本 0.1.0-beta（Facebook LLama 模型）

**发布日期：2023 年 5 月 16 日**

OpenThaiGPT 版本 0.1.0-beta 是一个 70 亿参数的 LLaMA 模型，经过微调以遵循下列翻译成泰语的指令，并采用 Huggingface 的 LLaMA 实现。

#### 参数统计

* 参数量：7B
* 维度：4096
* 上下文长度：2048
* 注意力头数（n heads）：32
* 层数（n layers）：32
* token 数（n tokens）：1T

#### 许可协议

* **源代码**：License Apache Software License 2.0.
* **权重**：仅限研究用途（受 Facebook LLama 权重许可协议限制）。

*请注意：OpenThaiGPT 0.1.0 权重的商业使用许可将在不久后发布！*

#### 代码与权重

* **微调代码**：[OpenThaiGPT/openthaigpt-finetune-010beta](https://github.com/OpenThaiGPT/openthaigpt-finetune-010beta)
* **推理库**：[OpenThaiGPT/openthaigpt](https://github.com/OpenThaiGPT/openthaigpt)
* **权重（Lora Adapter）**：[kobkrit/openthaigpt-0.1.0-beta](https://huggingface.co/kobkrit/openthaigpt-0.1.0-beta)

#### 作者

Kobkrit Viriyayudhakorn (kobkrit@aieat.or.th)、Sumeth Yuenyong (sumeth.yue@mahidol.edu) 与 Thaweewat Rugsujarit (thaweewr@scg.com)。

#### 训练数据集

| 数据集名称 | 指令对数量 | 说明 |
| --- | --- | --- |
| [Thaweewat/alpaca-finance-43k-th](https://huggingface.co/datasets/Thaweewat/alpaca-finance-43k-th) | 43,000 | Alpaca Finance 指令数据集，由 Thaweewat Ruksujarit 翻译为泰语。 |
| [kobkrit/rd-taxqa](https://huggingface.co/datasets/kobkrit/rd-taxqa) | 600 | 泰国税务局税务问答聊天机器人训练集，由 ทรงวุฒิ บุรงค์ 制作 |
| [datasets/iapp\_wiki\_qa\_squad](https://huggingface.co/datasets/iapp_wiki_qa_squad) | 4,000 | iApp Technology 的泰语抽取式问答数据集 |
| [Thaweewat/databricks-dolly-15k-th](https://huggingface.co/datasets/Thaweewat/databricks-dolly-15k-th) | 15,000 | Databricks Dolly 指令数据集，由 Thaweewat Ruksujarit 翻译为泰语。 |
| [Thaweewat/instruction-wild-52k-th](https://huggingface.co/datasets/Thaweewat/instruction-wild-52k-th) | 52,000 | Instruction Wild 数据集，由 Thaweewat Ruksujarit 翻译为泰语。 |
| [Thaweewat/alpaca-cleaned-52k-th](https://huggingface.co/datasets/Thaweewat/alpaca-cleaned-52k-th) | 51,000 | Stanford Alpaca 数据集，由 Thaweewat Ruksujarit 翻译为泰语。 |
| [Thaweewat/gpteacher-20k-th](https://huggingface.co/datasets/Thaweewat/gpteacher-20k-th) | 20,000 | GPT Teacher 指令数据集，由 Thaweewat Ruksujarit 翻译为泰语。 |
| [Thaweewat/onet-m6-social](https://huggingface.co/datasets/Thaweewat/onet-m6-social) | 600 | ONET 高六社会科考试 |
| [datasets/Thaweewat/hc3-24k-th](https://huggingface.co/datasets/Thaweewat/hc3-24k-th) | 24,000 | Hello Simple AI 摘要数据集，由 Thaweewat Ruksujarit 翻译为泰语。 |
| OpenThaiGPT Self Instruct（[https://docs.google.com/spreadsheets/d/1BSHkpRyD5RH90E85tLWe4UzpgfDHZafE2rKxLincyWI/edit?usp=sharing](https://docs.google.com/spreadsheets/d/1BSHkpRyD5RH90E85tLWe4UzpgfDHZafE2rKxLincyWI/edit?usp=sharing)） | 5,000 | <p>泰语 SelfInstruct 数据集 <br>（自动生成）由 OpenThaiGPT 制作</p> |

### 版本 0.1.0-alpha（ByT5-XL 模型）

**发布日期：2023 年 4 月 24 日**

* **PoC 测试网站**：[Google Colab](https://colab.research.google.com/drive/1Uds0ioOZSZrJ9m2FgW3DHlqVRFNHVRtu#scrollTo=qPJIpwuz4ltF)
* **模型与权重**：[kobkrit/openthaigpt-0.1.0-alpha](https://huggingface.co/kobkrit/openthaigpt-0.1.0-alpha)
* **PIP 安装页面**：[pypi.org/project/openthaigpt](https://pypi.org/project/openthaigpt/)
* **代码示例**：[Google Colab](https://colab.research.google.com/drive/1Uds0ioOZSZrJ9m2FgW3DHlqVRFNHVRtu#scrollTo=qPJIpwuz4ltF)

OpenThaiGPT 版本 0.1.0-alpha

泰国首个 30 亿参数模型

* 首个泰语字节级文本到文本迁移 Transformer（Byte-Level Text-to-Text Transfer Transformer）
* 支持指令遵循
  * 翻译为泰语
  * 解释说明
  * 改写复述
* 零样本与少样本学习
* 预训练模型：ByT5-XL（37.4 亿参数）
* 指令数据集：50,000 条泰语 SelfInstruct
* RLHF：无
* 开发者：Sumeth Yuenyong、Kobkrit Viriyayudhakorn (kobkrit@iapp.co.th)

### PoC 版本 0.0.4（第四个 PoC 版本）

**发布日期：2023 年 3 月 12 日**

* **PoC 测试网站**：[Google Colab](https://colab.research.google.com/drive/13yLIifBRDQp82QO4ICs_aEvz0N8tqVPm?usp=sharing)
* **模型与权重**：[kobkrit/openthaigpt-gpt2-instructgpt-poc-0.0.4](https://huggingface.co/kobkrit/openthaigpt-gpt2-instructgpt-poc-0.0.4)
* **PIP 安装页面**：[pypi.org/project/openthaigpt](https://pypi.org/project/openthaigpt/)
* **代码示例**：[OpenThaiGPT/openthaigpt-example](https://github.com/OpenThaiGPT/openthaigpt-example)

OpenThaiGPT 版本 0.0.4

第四个 PoC 模型

* 回答问题更加详尽，且在多数情况下答复质量优于 0.0.3
* 预训练模型：GPT-2 Thai-base
* 指令数据集：300,000 条 Pantip + 5,000 条 Wiki QA => 12,920 条泰语 InstructGPT
* RLHF：无
* 开发者：Kobkrit Viriyayudhakorn (kobkrit@iapp.co.th)

### PoC 版本 0.0.3（第三个 PoC 版本）

**发布日期：2023 年 2 月 28 日**

* **模型与权重**：[kobkrit/openthaigpt-gpt2-instructgpt-poc-0.0.3](https://huggingface.co/kobkrit/openthaigpt-gpt2-instructgpt-poc-0.0.3)
* **PIP 安装页面**：[pypi.org/project/openthaigpt](https://pypi.org/project/openthaigpt/)
* **代码示例**：[OpenThaiGPT/openthaigpt-example](https://github.com/OpenThaiGPT/openthaigpt-example)

OpenThaiGPT 版本 0.0.3

第三个 PoC 模型

* 预训练模型：GPT-2 Thai-base
* 指令数据集：300,000 条 Pantip + 5,000 条 Wiki QA => 7,000 条泰语 InstructGPT
* RLHF：无
* 开发者：Kobkrit Viriyayudhakorn (kobkrit@iapp.co.th)

### PoC 版本 0.0.2（第二个 PoC 版本）

**发布日期：2023 年 2 月 27 日**

* **模型与权重**：[kobkrit/openthaigpt-gpt2-instructgpt-poc-0.0.2](https://huggingface.co/kobkrit/openthaigpt-gpt2-instructgpt-poc-0.0.2)
* **PIP 安装页面**：{Coming Soon}
* **Colab 示例**：{Coming Soon}

OpenThaiGPT 版本 0.0.2

第二个 PoC 模型

* 预训练模型：GPT-2 Thai-base
* 指令数据集：7,000 条泰语 InstructGPT
* RLHF：无
* 开发者：Kobkrit Viriyayudhakorn (kobkrit@iapp.co.th)

### PoC 版本 0.0.1（最初的 PoC 版本）

**发布日期：2023 年 2 月 20 日**

* **模型与权重**：[openthaigpt-gpt2-pantipwiki-poc](https://huggingface.co/kobkrit/openthaigpt-gpt2-pantipwiki-poc?text=Q%3A+%E0%B8%AA%E0%B8%A7%E0%B8%B1%E0%B8%AA%E0%B8%94%E0%B8%B5%E0%B8%84%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%9C%E0%B8%A1+A%3A)
* **PIP 安装页面**：{Coming Soon}
* **Colab 示例**：{Coming Soon}

最初的 PoC 模型

* 预训练模型：GPT-2 Thai-base
* 指令数据集：298,678 组问答对，取自 70,000 条 Pantip 帖子及 iApp 提供的维基百科问答数据
* RLHF：无
* 开发者：Kobkrit Viriyayudhakorn (kobkrit@iapp.co.th)
