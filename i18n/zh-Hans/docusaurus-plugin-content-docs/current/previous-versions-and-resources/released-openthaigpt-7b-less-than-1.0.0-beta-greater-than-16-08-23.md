---
title: '发布 OpenThaiGPT 7b <1.0.0-beta>（16/08/23）'
slug: '/previous-versions-and-resources/released-openthaigpt-7b-less-than-1.0.0-beta-greater-than-16-08-23'
description: 'OpenThaiGPT 7b 1.0.0-beta 是一款于 2023 年 8 月 16 日发布的泰语 70 亿参数 LLaMA v2 Chat 模型，本页并附有此前所有版本的更新日志。'
---
# 🔥 发布 OpenThaiGPT 7b <1.0.0-beta>（16/08/23）

🇹🇭 OpenThaiGPT 1.0.0-beta（16 August 2023）

🇹🇭 OpenThaiGPT 1.0.0-beta 版本是一款泰语 70 亿参数 LLaMA v2 Chat 模型，经过微调以遵循泰语翻译指令，并向大语言模型词典中扩充了超过 24,554 个最常用的泰语词汇，从而大幅提升推理速度。

![](</img/image-24.png>)

## 网页演示

<a class="link-card" href="https://demo-beta.openthaigpt.aieat.or.th" target="_blank" rel="noopener noreferrer"><span class="link-card-title">OpenThaiGPT 1.0.0-beta 网页演示</span><span class="link-card-domain">demo-beta.openthaigpt.aieat.or.th</span></a>

## Colab 演示

<a class="link-card" href="https://colab.research.google.com/drive/1NkmAJHItpqu34Tur9wCFc97A6JzKR8xo" target="_blank" rel="noopener noreferrer"><span class="link-card-title">OpenThaiGPT 7b 1.0.0-beta — 在 Google Colab 中打开</span><span class="link-card-domain">colab.research.google.com</span></a>

## 更新日志

### 🇹🇭 版本 1.0.0-beta（Llama v2 + 24,554 个泰语词汇扩充）

**发布日期：16 August 2023**

🇹🇭 OpenThaiGPT 1.0.0-beta 版本是一款泰语 70 亿参数 LLaMA v2 Chat 模型，经过微调以遵循泰语翻译指令，并扩充了 24,554 个泰语词汇，从而大幅提升推理速度。

#### 许可协议

* **源代码**：Apache Software License 2.0 许可协议。
* **权重**：可用于研究及**商业用途**。

#### 代码与权重

* **微调代码**：[OpenThaiGPT/openthaigpt-finetune-010beta](https://github.com/OpenThaiGPT/openthaigpt-finetune-010beta)
* **推理代码**：[OpenThaiGPT/openthaigpt](https://github.com/OpenThaiGPT/openthaigpt)
* **权重**：[openthaigpt-1.0.0-beta-7b-chat — Hugging Face](https://huggingface.co/openthaigpt/openthaigpt-1.0.0-beta-7b-chat)

#### 作者

* Kobkrit Viriyayudhakorn (kobkrit@aieat.or.th)
* Sumeth Yuenyong (sumeth.yue@mahidol.edu)
* Prachya Boonkwan (prachya.boonkwan@nectec.or.th, kaamanita@gmail.com)
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
* Teerapol Saengsukhiran (winroom@gmail.com)
* Phasin Aumwong (phasin03895@gmail.com)

---

### 🇹🇭 版本 1.0.0-alpha（Facebook LLama V2 模型）

**发布日期：3 August 2023**

🇹🇭 OpenThaiGPT 1.0.0-alpha 版本是泰语领域首个基于 70 亿参数 LLaMA v2 Chat 模型的实现，经过微调以遵循泰语翻译指令，并采用了 Huggingface 的 LLaMA 实现。

#### 变更内容

1. 采用 Facebook LLama v2 model 7b chat 作为基础模型，该模型**在超过 2 万亿 token 上完成预训练。**
2. 上下文长度从 2048 token 升级至 **4096 token**
3. **允许**用于研究及**商业用途。**

#### 许可协议

* **源代码**：Apache Software License 2.0 许可协议。
* **权重**：可用于研究及**商业用途。**

#### 代码与权重

* **Colab 演示**：[在 Google Colab 中打开](https://colab.research.google.com/drive/1kDQidCtY9lDpk49i7P3JjLAcJM04lawu?usp=sharing)
* **微调代码**：[OpenThaiGPT/openthaigpt-finetune-010beta](https://github.com/OpenThaiGPT/openthaigpt-finetune-010beta)（与 OpenThaiGPT 0.1.0-beta 使用相同代码）
* **推理库**：[OpenThaiGPT/openthaigpt](https://github.com/OpenThaiGPT/openthaigpt)
* **权重（Lora Adapter）**：[openthaigpt-1.0.0-alpha-7b-chat — Hugging Face](https://huggingface.co/openthaigpt/openthaigpt-1.0.0-alpha-7b-chat)
* **权重（Huggingface Checkpoint）**：[openthaigpt-1.0.0-alpha-7b-chat-ckpt-hf — Hugging Face](https://huggingface.co/openthaigpt/openthaigpt-1.0.0-alpha-7b-chat-ckpt-hf)

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
* Teerapol Saengsukhiran (winroom@gmail.com)
* Phasin Aumwong (phasin03895@gmail.com)

---

### 版本 0.1.0-beta（Facebook LLama 模型）

**发布日期：16 May 2023**

OpenThaiGPT 0.1.0-beta 版本是一款 70 亿参数 LLaMA 模型，经过微调以遵循下列泰语翻译指令，并采用了 Huggingface 的 LLaMA 实现。

#### 模型参数

* 参数量：7B
* 维度：4096
* 上下文长度：2048
* 注意力头数（n heads）：32
* 层数（n layers）：32
* token 数（n tokens）：1T

#### 许可协议

* **源代码**：Apache Software License 2.0 许可协议。
* **权重**：仅限研究用途（受 Facebook LLama 权重许可协议限制）。

_请注意：OpenThaiGPT 0.1.0 权重的商业使用许可将于近期发布！_

#### 代码与权重

* **微调代码**：[OpenThaiGPT/openthaigpt-finetune-010beta](https://github.com/OpenThaiGPT/openthaigpt-finetune-010beta)
* **推理库**：[OpenThaiGPT/openthaigpt](https://github.com/OpenThaiGPT/openthaigpt)
* **权重（Lora Adapter）**：[kobkrit/openthaigpt-0.1.0-beta — Hugging Face](https://huggingface.co/kobkrit/openthaigpt-0.1.0-beta)

#### 作者

Kobkrit Viriyayudhakorn (kobkrit@aieat.or.th)、Sumeth Yuenyong (sumeth.yue@mahidol.edu) 与 Thaweewat Rugsujarit (thaweewr@scg.com)。

#### 训练数据集

| 数据集名称                                                                                                                                 | 指令对数量          | 说明                                                                            |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------- | ----------------------------------------------------------------------------- |
| [Thaweewat/alpaca-finance-43k-th](https://huggingface.co/datasets/Thaweewat/alpaca-finance-43k-th)                                       | 43,000            | 由 Thaweewat Ruksujarit 翻译为泰语的 Alpaca Finance 指令数据集。                        |
| [kobkrit/rd-taxqa](https://huggingface.co/datasets/kobkrit/rd-taxqa)                                                                     | 600               | 由 ทรงวุฒิ บุรงค์ 制作的 RD 税务问答聊天机器人训练集                                     |
| [datasets/iapp\_wiki\_qa\_squad](https://huggingface.co/datasets/iapp_wiki_qa_squad)                                                     | 4,000             | iApp Technology 的泰语抽取式问答数据集                                                |
| [Thaweewat/databricks-dolly-15k-th](https://huggingface.co/datasets/Thaweewat/databricks-dolly-15k-th)                                   | 15,000            | 由 Thaweewat Ruksujarit 翻译为泰语的 Databricks Dolly 指令数据集。                     |
| [Thaweewat/instruction-wild-52k-th](https://huggingface.co/datasets/Thaweewat/instruction-wild-52k-th)                                   | 52,000            | 由 Thaweewat Ruksujarit 翻译为泰语的 Instruction Wild 数据集。                        |
| [Thaweewat/alpaca-cleaned-52k-th](https://huggingface.co/datasets/Thaweewat/alpaca-cleaned-52k-th)                                       | 51,000            | 由 Thaweewat Ruksujarit 翻译为泰语的 Standford Alpaca 数据集。                        |
| [Thaweewat/gpteacher-20k-th](https://huggingface.co/datasets/Thaweewat/gpteacher-20k-th)                                                 | 20,000            | 由 Thaweewat Ruksujarit 翻译为泰语的 GPT Teacher 指令数据集。                          |
| [Thaweewat/onet-m6-social](https://huggingface.co/datasets/Thaweewat/onet-m6-social)                                                     | 600               | ONET m6 社会学科考试题                                                              |
| [datasets/Thaweewat/hc3-24k-th](https://huggingface.co/datasets/Thaweewat/hc3-24k-th)                                                    | 24,000            | 由 Thaweewat Ruksujarit 翻译为泰语的 Hello Simple AI 摘要数据集。                      |
| OpenThaiGPT Self Instruct（[Google Sheets](https://docs.google.com/spreadsheets/d/1BSHkpRyD5RH90E85tLWe4UzpgfDHZafE2rKxLincyWI/edit?usp=sharing)） | 5,000             | <p>由 OpenThaiGPT 提供的泰语 SelfInstruct 数据集 <br>（自动生成）</p>                    |

---

### 版本 0.1.0-alpha（ByT5-XL 模型）

**发布日期：24 April 2023**

* PoC 测试网站：[在 Google Colab 中打开](https://colab.research.google.com/drive/1Uds0ioOZSZrJ9m2FgW3DHlqVRFNHVRtu#scrollTo=qPJIpwuz4ltF)
* 模型与权重：[kobkrit/openthaigpt-0.1.0-alpha — Hugging Face](https://huggingface.co/kobkrit/openthaigpt-0.1.0-alpha)
* PIP 安装页面：[openthaigpt on PyPI](https://pypi.org/project/openthaigpt/)
* 代码示例：[在 Google Colab 中打开](https://colab.research.google.com/drive/1Uds0ioOZSZrJ9m2FgW3DHlqVRFNHVRtu#scrollTo=qPJIpwuz4ltF)

OpenThaiGPT 0.1.0-alpha 版本

泰国首个 30 亿参数模型

* 首个泰语字节级 Text-to-Text Transfer Transformer
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

**发布日期：12 March 2023**

* PoC 测试网站：[在 Google Colab 中打开](https://colab.research.google.com/drive/13yLIifBRDQp82QO4ICs_aEvz0N8tqVPm?usp=sharing)
* 模型与权重：[kobkrit/openthaigpt-gpt2-instructgpt-poc-0.0.4 — Hugging Face](https://huggingface.co/kobkrit/openthaigpt-gpt2-instructgpt-poc-0.0.4)
* PIP 安装页面：[openthaigpt on PyPI](https://pypi.org/project/openthaigpt/)
* 代码示例：[OpenThaiGPT/openthaigpt-example — GitHub](https://github.com/OpenThaiGPT/openthaigpt-example)

OpenThaiGPT 0.0.4 版本

第四个 PoC 模型

* 回答问题更加详尽，且在大多数情况下表现优于 0.0.3 版本
* 预训练模型：GPT-2 Thai-base
* 指令数据集：300,000 条 Pantip + 5,000 条 Wiki QA => 12,920 条泰语 InstructGPT
* RLHF：无
* 开发者：Kobkrit Viriyayudhakorn (kobkrit@iapp.co.th)

### PoC 版本 0.0.3（第三个 PoC 版本）

**发布日期：28 February 2023**

* 模型与权重：[kobkrit/openthaigpt-gpt2-instructgpt-poc-0.0.3 — Hugging Face](https://huggingface.co/kobkrit/openthaigpt-gpt2-instructgpt-poc-0.0.3)
* PIP 安装页面：[openthaigpt on PyPI](https://pypi.org/project/openthaigpt/)
* 代码示例：[OpenThaiGPT/openthaigpt-example — GitHub](https://github.com/OpenThaiGPT/openthaigpt-example)

OpenThaiGPT 0.0.3 版本

第三个 PoC 模型

* 预训练模型：GPT-2 Thai-base
* 指令数据集：300,000 条 Pantip + 5,000 条 Wiki QA => 7,000 条泰语 InstructGPT
* RLHF：无
* 开发者：Kobkrit Viriyayudhakorn (kobkrit@iapp.co.th)

### PoC 版本 0.0.2（第二个 PoC 版本）

**发布日期：27 February 2023**

* 模型与权重：[kobkrit/openthaigpt-gpt2-instructgpt-poc-0.0.2 — Hugging Face](https://huggingface.co/kobkrit/openthaigpt-gpt2-instructgpt-poc-0.0.2)
* PIP 安装页面：{即将推出}
* Colab 示例：{即将推出}

OpenThaiGPT 0.0.2 版本

第二个 PoC 模型

* 预训练模型：GPT-2 Thai-base
* 指令数据集：7,000 条泰语 InstructGPT
* RLHF：无
* 开发者：Kobkrit Viriyayudhakorn (kobkrit@iapp.co.th)

### PoC 版本 0.0.1（首个 PoC 版本）

**发布日期：20 February 2023**

* 模型与权重：[openthaigpt-gpt2-pantipwiki-poc](https://huggingface.co/kobkrit/openthaigpt-gpt2-pantipwiki-poc?text=Q%3A+%E0%B8%AA%E0%B8%A7%E0%B8%B1%E0%B8%AA%E0%B8%94%E0%B8%B5%E0%B8%84%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%9C%E0%B8%A1+A%3A)
* PIP 安装页面：{即将推出}
* Colab 示例：{即将推出}

首个 PoC 模型

* 预训练模型：GPT-2 Thai-base
* 指令数据集：由 70,000 条 Pantip 帖子 + iApp 提供的 Wikipedia QA 生成的 298,678 组问答对
* RLHF：无
* 开发者：Kobkrit Viriyayudhakorn (kobkrit@iapp.co.th)
