---
title: 'Released OpenThaiGPT 7b <1.0.0-beta> (16/08/23)'
slug: '/previous-versions-and-resources/released-openthaigpt-7b-less-than-1.0.0-beta-greater-than-16-08-23'
description: 'OpenThaiGPT 7b 1.0.0-beta, a Thai 7B-parameter LLaMA v2 Chat model released 16 August 2023, with change logs of all earlier versions.'
---
# 🔥 Released OpenThaiGPT 7b <1.0.0-beta> (16/08/23)

🇹🇭 OpenThaiGPT 1.0.0-beta (16 August 2023)

🇹🇭 OpenThaiGPT Version 1.0.0-beta is a Thai language 7B-parameter LLaMA v2 Chat model finetuned to follow Thai translated instructions and extend more than 24,554 most popular Thai words vocabularies into LLM's dictionary for turbo speed.

![](</img/image-24.png>)

## Web Demo

<a class="link-card" href="https://demo-beta.openthaigpt.aieat.or.th" target="_blank" rel="noopener noreferrer"><span class="link-card-title">OpenThaiGPT 1.0.0-beta Web Demo</span><span class="link-card-domain">demo-beta.openthaigpt.aieat.or.th</span></a>

## Colab Demo

<a class="link-card" href="https://colab.research.google.com/drive/1NkmAJHItpqu34Tur9wCFc97A6JzKR8xo" target="_blank" rel="noopener noreferrer"><span class="link-card-title">OpenThaiGPT 7b 1.0.0-beta — Open in Google Colab</span><span class="link-card-domain">colab.research.google.com</span></a>

## Change Logs

### 🇹🇭 Version 1.0.0-beta (Llama v2 + 24,554 Thai word extension)

**Release date: 16 August 2023**

🇹🇭 OpenThaiGPT Version 1.0.0-beta is a Thai language 7B-parameter LLaMA v2 Chat model finetuned to follow Thai translated instructions and extend 24,554 Thai words vocabularies for turbo speed.

#### License

* **Source Code**: License Apache Software License 2.0.
* **Weight**: Research and **Commercial uses**.

#### Code and Weight

* **Finetune Code**: [OpenThaiGPT/openthaigpt-finetune-010beta](https://github.com/OpenThaiGPT/openthaigpt-finetune-010beta)
* **Inference Code**: [OpenThaiGPT/openthaigpt](https://github.com/OpenThaiGPT/openthaigpt)
* **Weight**: [openthaigpt-1.0.0-beta-7b-chat — Hugging Face](https://huggingface.co/openthaigpt/openthaigpt-1.0.0-beta-7b-chat)

#### Authors

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

### 🇹🇭 Version 1.0.0-alpha (Facebook LLama V2 Model)

**Release date: 3 August 2023**

🇹🇭 OpenThaiGPT Version 1.0.0-alpha is the first Thai implementation of a 7B-parameter LLaMA v2 Chat model finetuned to follow Thai translated instructions and makes use of the Huggingface LLaMA implementation.

#### Changes

1. Using Facebook LLama v2 model 7b chat as a base model which is **pretrained on over 2 trillion token.**
2. Context Length is upgraded from 2048 token to **4096 token**
3. **Allow** research and **commercial use.**

#### License

* **Source Code**: License Apache Software License 2.0.
* **Weight**: Research and **commercial uses.**

#### Code and Weight

* **Colab Demo**: [Open in Google Colab](https://colab.research.google.com/drive/1kDQidCtY9lDpk49i7P3JjLAcJM04lawu?usp=sharing)
* **Finetune Code**: [OpenThaiGPT/openthaigpt-finetune-010beta](https://github.com/OpenThaiGPT/openthaigpt-finetune-010beta) (Same code as OpenThaiGPT 0.1.0-beta)
* **Inference Library**: [OpenThaiGPT/openthaigpt](https://github.com/OpenThaiGPT/openthaigpt)
* **Weight (Lora Adapter)**: [openthaigpt-1.0.0-alpha-7b-chat — Hugging Face](https://huggingface.co/openthaigpt/openthaigpt-1.0.0-alpha-7b-chat)
* **Weight (Huggingface Checkpoint)**: [openthaigpt-1.0.0-alpha-7b-chat-ckpt-hf — Hugging Face](https://huggingface.co/openthaigpt/openthaigpt-1.0.0-alpha-7b-chat-ckpt-hf)

#### Authors

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

### Version 0.1.0-beta (Facebook LLama Model)

**Release date: 16 May 2023**

OpenThaiGPT Version 0.1.0-beta is a 7B-parameter LLaMA model finetuned to follow Thai translated instructions below and makes use of the Huggingface LLaMA implementation.

#### Statistics

* Number of parameters: 7B
* Dimension: 4096
* Context Length: 2048
* n heads: 32
* n layers: 32
* n tokens: 1T

#### License

* **Source Code**: License Apache Software License 2.0.
* **Weight**: For research use only (due to the Facebook LLama's Weight LICENSE).

_Note that: A commercial use license for OpenThaiGPT 0.1.0 weight will be released later soon!_

#### Code and Weight

* **Finetune Code**: [OpenThaiGPT/openthaigpt-finetune-010beta](https://github.com/OpenThaiGPT/openthaigpt-finetune-010beta)
* **Inference Library**: [OpenThaiGPT/openthaigpt](https://github.com/OpenThaiGPT/openthaigpt)
* **Weight (Lora Adapter)**: [kobkrit/openthaigpt-0.1.0-beta — Hugging Face](https://huggingface.co/kobkrit/openthaigpt-0.1.0-beta)

#### Authors

Kobkrit Viriyayudhakorn (kobkrit@aieat.or.th), Sumeth Yuenyong (sumeth.yue@mahidol.edu) and Thaweewat Rugsujarit (thaweewr@scg.com).

#### Trained Datasets

| Dataset Name                                                                                                                             | Instruction Pairs | Descriptions                                                                  |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------- | ----------------------------------------------------------------------------- |
| [Thaweewat/alpaca-finance-43k-th](https://huggingface.co/datasets/Thaweewat/alpaca-finance-43k-th)                                       | 43,000            | Alpaca Finance Instruction translated into Thai by Thaweewat Ruksujarit.      |
| [kobkrit/rd-taxqa](https://huggingface.co/datasets/kobkrit/rd-taxqa)                                                                     | 600               | RD's Tax QA Chatbot Training set by ทรงวุฒิ บุรงค์                            |
| [datasets/iapp\_wiki\_qa\_squad](https://huggingface.co/datasets/iapp_wiki_qa_squad)                                                     | 4,000             | iApp Technology's Extractive QA Dataset in Thai language                      |
| [Thaweewat/databricks-dolly-15k-th](https://huggingface.co/datasets/Thaweewat/databricks-dolly-15k-th)                                   | 15,000            | Databrick's Dolly Instruction translated into Thai by Thaweewat Ruksujarit.   |
| [Thaweewat/instruction-wild-52k-th](https://huggingface.co/datasets/Thaweewat/instruction-wild-52k-th)                                   | 52,000            | Instruction Wild's translated into Thai by Thaweewat Ruksujarit.              |
| [Thaweewat/alpaca-cleaned-52k-th](https://huggingface.co/datasets/Thaweewat/alpaca-cleaned-52k-th)                                       | 51,000            | Standford Alpaca's translated into Thai by Thaweewat Ruksujarit.              |
| [Thaweewat/gpteacher-20k-th](https://huggingface.co/datasets/Thaweewat/gpteacher-20k-th)                                                 | 20,000            | GPT Teacher's  Instruction translated into Thai by Thaweewat Ruksujarit.      |
| [Thaweewat/onet-m6-social](https://huggingface.co/datasets/Thaweewat/onet-m6-social)                                                     | 600               | ONET m6 Social Exam                                                           |
| [datasets/Thaweewat/hc3-24k-th](https://huggingface.co/datasets/Thaweewat/hc3-24k-th)                                                    | 24,000            | Hello Simple AI Summary Dataset translated into Thai by Thaweewat Ruksujarit. |
| OpenThaiGPT Self Instruct ([Google Sheets](https://docs.google.com/spreadsheets/d/1BSHkpRyD5RH90E85tLWe4UzpgfDHZafE2rKxLincyWI/edit?usp=sharing)) | 5,000             | <p>Thai SelfInstruct Dataset <br>(Automatic Generated) by OpenThaiGPT</p>     |

---

### Version 0.1.0-alpha (ByT5-XL Model)

**Release date: 24 April 2023**

* PoC Testing Website: [Open in Google Colab](https://colab.research.google.com/drive/1Uds0ioOZSZrJ9m2FgW3DHlqVRFNHVRtu#scrollTo=qPJIpwuz4ltF)
* Model and Weight: [kobkrit/openthaigpt-0.1.0-alpha — Hugging Face](https://huggingface.co/kobkrit/openthaigpt-0.1.0-alpha)
* PIP Installation Page: [openthaigpt on PyPI](https://pypi.org/project/openthaigpt/)
* Code Example: [Open in Google Colab](https://colab.research.google.com/drive/1Uds0ioOZSZrJ9m2FgW3DHlqVRFNHVRtu#scrollTo=qPJIpwuz4ltF)

OpenThaiGPT version 0.1.0-alpha

Thai First 3 billion params models

* First Thai Byte-Level Text-to-Text Transfer Transformer
* Support Instruction following
  * Translation to Thai
  * Explanation
  * Paraphrase
* Zero-shot and Few-shot Learning
* Pretraining Model: ByT5-XL (3.74 billion params)
* InstructDataset: 50,000 Thai SelfInstruct
* RLHF: None
* Developer: Sumeth Yuenyong, Kobkrit Viriyayudhakorn (kobkrit@iapp.co.th)

### PoC Version 0.0.4 (The Fourth PoC Version)

**Release date: 12 March 2023**

* PoC Testing Website: [Open in Google Colab](https://colab.research.google.com/drive/13yLIifBRDQp82QO4ICs_aEvz0N8tqVPm?usp=sharing)
* Model and Weight: [kobkrit/openthaigpt-gpt2-instructgpt-poc-0.0.4 — Hugging Face](https://huggingface.co/kobkrit/openthaigpt-gpt2-instructgpt-poc-0.0.4)
* PIP Installation Page: [openthaigpt on PyPI](https://pypi.org/project/openthaigpt/)
* Code Example: [OpenThaiGPT/openthaigpt-example — GitHub](https://github.com/OpenThaiGPT/openthaigpt-example)

OpenThaiGPT version 0.0.4

The Fourth PoC Model

* Answers questions in greater detail and, for the most part, responds better than 0.0.3
* Pretraining Model: GPT-2 Thai-base
* InstructDataset: 300,000 Pantip + 5,000 Wiki QA => 12,920 Thai InstructGPT
* RLHF: None
* Developer: Kobkrit Viriyayudhakorn (kobkrit@iapp.co.th)

### PoC Version 0.0.3 (The Third PoC Version)

**Release date: 28 February 2023**

* Model and Weight: [kobkrit/openthaigpt-gpt2-instructgpt-poc-0.0.3 — Hugging Face](https://huggingface.co/kobkrit/openthaigpt-gpt2-instructgpt-poc-0.0.3)
* PIP Installation Page: [openthaigpt on PyPI](https://pypi.org/project/openthaigpt/)
* Code Example: [OpenThaiGPT/openthaigpt-example — GitHub](https://github.com/OpenThaiGPT/openthaigpt-example)

OpenThaiGPT version 0.0.3

The Third PoC Model

* Pretraining Model: GPT-2 Thai-base
* InstructDataset: 300,000 Pantip + 5,000 Wiki QA => 7,000 Thai InstructGPT
* RLHF: None
* Developer: Kobkrit Viriyayudhakorn (kobkrit@iapp.co.th)

### PoC Version 0.0.2 (The Second PoC Version)

**Release date: 27 February 2023**

* Model and Weight: [kobkrit/openthaigpt-gpt2-instructgpt-poc-0.0.2 — Hugging Face](https://huggingface.co/kobkrit/openthaigpt-gpt2-instructgpt-poc-0.0.2)
* PIP Installation Page: {Coming Soon}
* Colab Example: {Coming Soon}

OpenThaiGPT version 0.0.2

The Second PoC Model

* Pretraining Model: GPT-2 Thai-base
* InstructDataset: 7,000 Thai InstructGPT
* RLHF: None
* Developer: Kobkrit Viriyayudhakorn (kobkrit@iapp.co.th)

### PoC Version 0.0.1 (Very First PoC Version)

**Release date: 20 February 2023**

* Model and Weight: [openthaigpt-gpt2-pantipwiki-poc](https://huggingface.co/kobkrit/openthaigpt-gpt2-pantipwiki-poc?text=Q%3A+%E0%B8%AA%E0%B8%A7%E0%B8%B1%E0%B8%AA%E0%B8%94%E0%B8%B5%E0%B8%84%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%9C%E0%B8%A1+A%3A)
* PIP Installation Page: {Coming Soon}
* Colab Example: {Coming Soon}

The Very First PoC Model

* Pretraining Model: GPT-2 Thai-base
* InstructDataset: 298,678 QA Pairs getting from 70,000 Pantip katoos + Wikipedia QA by iApp
* RLHF: None
* Developer: Kobkrit Viriyayudhakorn (kobkrit@iapp.co.th)
