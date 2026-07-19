---
title: '发布 OpenThaiGPT Pip Python 库 <0.1.1>（26/05/23）'
slug: '/previous-versions-and-resources/released-openthaigpt-pip-python-library-less-than-0.1.1-greater-than-26-05-23'
description: 'openthaigpt Python 库 0.1.1 版本，包含更新日志、安装方法以及调用 OpenThaiGPT 模型的示例。'
---
# 📦 发布 OpenThaiGPT Pip Python 库 <0.1.1>（26/05/23）

想要使用 OpenThaiGPT 吗？任何人都可以按以下方式轻松上手。

* [Version 0.1.0-beta Demo on Google Colab](https://colab.research.google.com/drive/1e5sYIMC1ABUNND_vazFaruDrFqYUNlVZ?usp=sharing)
* [Version 0.1.0-alpha Demo on Google Colab](https://colab.research.google.com/drive/1Uds0ioOZSZrJ9m2FgW3DHlqVRFNHVRtu?usp=sharing)
* [Version 0.0.4 Demo on Google Colab](https://colab.research.google.com/drive/13yLIifBRDQp82QO4ICs_aEvz0N8tqVPm?usp=sharing)

## 源代码

<a class="link-card" href="https://github.com/OpenThaiGPT/openthaigpt" target="_blank" rel="noopener noreferrer"><span class="link-card-title">OpenThaiGPT Pip 库 — GitHub 上的源代码</span><span class="link-card-domain">github.com</span></a>

## 更新日志

```
0.1.1 (2023-05-26)
 - Add Model version 0.1.0-beta (https://huggingface.co/kobkrit/openthaigpt-0.1.0-beta)
0.1.0 (2023-04-23)
 - Support Model Selection
 - Add Model version 0.1.0-alpha (https://huggingface.co/kobkrit/openthaigpt-0.1.0-alpha) to supported models.
0.0.9-0.0.10 (2023-03-19)
 - Released OpenThaiGPT Zero
0.0.8 (2023-03-12)
 - Update README
0.0.7 (2023-03-12)
 - Update Model to Version 0.0.4 (https://huggingface.co/kobkrit/openthaigpt-gpt2-instructgpt-poc-0.0.4)
0.0.6 (2023-03-05)
 - Update README
0.0.5 (2023-02-28)
 - First release on PyPI.
```

## 安装

支持 Python >=3.6，请从以下方式中任选其一进行安装。

### CPU 版本

```bash
$ pip install openthaigpt torch --extra-index-url https://download.pytorch.org/whl/cpu
```

### GPU 版本

* OpenThaiGPT Model Version 0.0.1 - 0.0.4 = Require at least 2 GB VRam
* OpenThaiGPT Model Version 0.1.0-alpha = Require at least 30 GB VRam (Nvidia A100 at least 40GB is recommended)
* OpenThaiGPT Model Version 0.1.0-beta = Require at least 15 GB VRam (Nvidia T4 is recommended)

#### CUDA 11.6 版本

```bash
$ pip install openthaigpt torch --extra-index-url https://download.pytorch.org/whl/cu116
```

#### CUDA 11.7 版本

```bash
$ pip install openthaigpt torch
```

## 调用方法

<pre class="language-python"><code class="lang-python">import openthaigpt

# OpenThaiGPT Model 0.1.0-beta
print(openthaigpt.generate(instruction="แปลภาษาอังกฤษเป็นภาษาไทย", 
        input="We want to reduce weight.", 
        model_name = "kobkrit/openthaigpt-0.1.0-beta", 
        min_length=50, max_length=300, top_p=0.75, 
        top_k=40, num_beams=1, no_repeat_ngram_size=0, 
        temperature=0.1, early_stopping=True, load_8bit=False))
# เราต้องการลดน้ำหนัก.

# OpenThaiGPT Model 0.1.0-alpha
print(openthaigpt.generate(instruction="อธิบายขั้นตอนการทำข้าวผัดไก่", 
        input="", model_name = "kobkrit/openthaigpt-0.1.0-alpha", 
        min_length=50, max_length=768, top_k=20,
        num_beams=5, no_repeat_ngram_size=10, temperature=1.5,
        early_stopping=True))
# ขั้นตอนการทำข้าวผัดไก่ ได้แก่ 1. เตรียมไก่และน้ำมันมะพร้าว 2. นำไปผสมกับเนยขาว 3. ใส่เนื้อหมูที่เหลืออยู่ในเครื่องปรุงอาหาร 4. เพิ่มไข่เจียระเบียบ 5. นำผักผัก 6. เต็มไปด้วยแป้งสำหรับผัด 7. ผสานข้อมูลของคุณให้แน่ใจว่าไก่&#x26;quot;จะเป็นส่วนประกอบทั้งหมด&#x26;quot; 8. นำໄก่ไปใช้ในกระท่อมที

# OpenThaiGPT Model 0.0.4
print(openthaigpt.generate("Q: อยากลดความอ้วนทำไง\n\nA:"))
# Q: อยากลดความอ้วนทำไง
#
# A: การลดน้ำหนักเป็นสิ่งที่สำคัญที่สุดสำหรับการลดไขมันในร่างกาย ดังนั้นคุณควรปรึกษาแพทย์หรือผู้เชี่ยวชาญด้านสุขภาพก่อนที่จะตัดสินใจว่าจะเลือกใช้ผลิตภัณฑ์ใดในการรักษาหรือไม่ อย่างไรก็ตาม หากคุณรู้สึกว่าตัวเองมีปัญหาในเรื่องนี้ คุณสามารถติดต่อแพทย์เพื่อสอบถามข้อมูลเพิ่มเติมเกี่ยวกับวิธีการแก้ไขปัญหานี้ได้เช่นกัน นอกจากนี้คุณยังสามารถพูดคุยกับคนอื่น ๆ เพื่อช่วยให้คำปรึกษาที่ดียิ่งขึ้นได้อีกด้วยค่ะ ขอบคุณที่มา: https://www.facebook.com/pages/%E0%B8%A8-in-the-circle-healthy-make-up.html?mibextid=a&#x26;browse=b&#x26;country=1&#x26;fb=&#x26;idx=0&#x26;pageb

#####################

# OpenThaiGPT-Zero

# ข้อความจาก OpenThaiGPT
openthaigpt.zero("การลดน้ำหนักเป็นเรื่องที่ต้องพิจารณาอย่างละเอียดและรอบคอบเพื่อให้ได้ผลลัพธ์ที่ดีและมีประสิทธิภาพมากที่สุด")
# {'perplexity': 2.4544131755828857,
# 'threshold': 10,
# 'isGeneratedFromOpenThaiGPT': True}

# ข้อความจาก OpenAI ChatGPT
openthaigpt.zero("สวัสดีครับ มีอะไรให้ผมช่วยเหลือหรือไม่ครับ?")
# {'perplexity': 4.949122428894043,
# 'theshold': 10,
# 'isGeneratedFromOpenThaiGPT': True}

# ข้อความจากมนุษย์
openthaigpt.zero("ทดสอบครับผม")
# {'perplexity': 1758.141357421875,
# 'threshold': 10,
# 'isGeneratedFromOpenThaiGPT': False}

# แสดงวิธีการปรับ threshold
openthaigpt.zero("สวัสดีครับ", threshold=5)
# {'perplexity': 8.109768867492676,
# 'theshold': 5,
# 'isGeneratedFromOpenThaiGPT': False}


</code></pre>

## 调用示例项目（Version 0.0.4）

<a class="link-card" href="https://colab.research.google.com/drive/13yLIifBRDQp82QO4ICs_aEvz0N8tqVPm?usp=sharing" target="_blank" rel="noopener noreferrer"><span class="link-card-title">Version 0.0.4 调用示例 — 在 Google Colab 中打开</span><span class="link-card-domain">colab.research.google.com</span></a>

<a class="link-card" href="https://github.com/OpenThaiGPT/openthaigpt-example" target="_blank" rel="noopener noreferrer"><span class="link-card-title">OpenThaiGPT/openthaigpt-example — GitHub 上的示例代码</span><span class="link-card-domain">github.com</span></a>

## 调用示例 Colab（Version 0.1.0）

<a class="link-card" href="https://colab.research.google.com/drive/1Uds0ioOZSZrJ9m2FgW3DHlqVRFNHVRtu#scrollTo=qPJIpwuz4ltF" target="_blank" rel="noopener noreferrer"><span class="link-card-title">Version 0.1.0 调用示例 — 在 Google Colab 中打开</span><span class="link-card-domain">colab.research.google.com</span></a>
