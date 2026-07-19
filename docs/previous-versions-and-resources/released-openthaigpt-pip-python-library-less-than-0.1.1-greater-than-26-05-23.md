---
title: 'Released OpenThaiGPT Pip Python Library <0.1.1> (26/05/23)'
slug: '/previous-versions-and-resources/released-openthaigpt-pip-python-library-less-than-0.1.1-greater-than-26-05-23'
---
# 📦 Released OpenThaiGPT Pip Python Library <0.1.1> (26/05/23)

ต้องการใช้ OpenThaiGPT? ทุกท่านสามารถใช้ OpenThaiGPT ได้โดยง่ายๆดังนี้

Version 0.1.0-beta Demo on Google Colab:\
[https://colab.research.google.com/drive/1e5sYIMC1ABUNND\_vazFaruDrFqYUNlVZ?usp=sharing](https://colab.research.google.com/drive/1e5sYIMC1ABUNND_vazFaruDrFqYUNlVZ?usp=sharing)\
\
Version 0.1.0-alpha Demo on Google Colab: [https://colab.research.google.com/drive/1Uds0ioOZSZrJ9m2FgW3DHlqVRFNHVRtu?usp=sharing](https://colab.research.google.com/drive/1Uds0ioOZSZrJ9m2FgW3DHlqVRFNHVRtu?usp=sharing)

Version 0.0.4 Demo on Google Colab: [https://colab.research.google.com/drive/13yLIifBRDQp82QO4ICs\_aEvz0N8tqVPm?usp=sharing](https://colab.research.google.com/drive/13yLIifBRDQp82QO4ICs_aEvz0N8tqVPm?usp=sharing)

## Source Code

<a class="link-card" href="https://github.com/OpenThaiGPT/openthaigpt" target="_blank" rel="noopener noreferrer"><span class="link-card-title">GitHub</span><span class="link-card-domain">github.com</span></a>

## Changelogs

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

## ติดตั้ง

สนับสนุน Python >=3.6 และติดตั้งเลือกอันใดอันหนึ่งดังต่อไปนี้

### สำหรับ CPU version

```bash
$ pip install openthaigpt torch --extra-index-url https://download.pytorch.org/whl/cpu
```

### สำหรับ GPU Version

* OpenThaiGPT Model Version 0.0.1 - 0.0.4 = Require at least 2 GB VRam
* OpenThaiGPT Model Version 0.1.0-alpha = Require at least 30 GB VRam (Nvidia A100 at least 40GB is recommended)
* OpenThaiGPT Model Version 0.1.0-beta = Require at least 15 GB VRam (Nvidia T4 is recommended)

#### สำหรับ CUDA 11.6 version

```bash
$ pip install openthaigpt torch --extra-index-url https://download.pytorch.org/whl/cu116
```

#### สำหรับ CUDA 11.7 version

```bash
$ pip install openthaigpt torch
```

## วิธีการเรียกใช้

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
<strong># {'perplexity': 1758.141357421875,
</strong># 'threshold': 10,
# 'isGeneratedFromOpenThaiGPT': False}

# แสดงวิธีการปรับ threshold
openthaigpt.zero("สวัสดีครับ", threshold=5)
# {'perplexity': 8.109768867492676,
# 'theshold': 5,
# 'isGeneratedFromOpenThaiGPT': False}


</code></pre>

## Project ตัวอย่างในการเรียกใช้ (Version 0.0.4)

[https://colab.research.google.com/drive/13yLIifBRDQp82QO4ICs\_aEvz0N8tqVPm?usp=sharin](https://colab.research.google.com/drive/13yLIifBRDQp82QO4ICs_aEvz0N8tqVPm?usp=sharing)

<a class="link-card" href="https://github.com/OpenThaiGPT/openthaigpt-example" target="_blank" rel="noopener noreferrer"><span class="link-card-title">GitHub</span><span class="link-card-domain">github.com</span></a>

## Colab ตัวอย่างการเรียกใช้ (Vesion 0.1.0)

[https://colab.research.google.com/drive/1Uds0ioOZSZrJ9m2FgW3DHlqVRFNHVRtu#scrollTo=qPJIpwuz4ltF](https://colab.research.google.com/drive/1Uds0ioOZSZrJ9m2FgW3DHlqVRFNHVRtu#scrollTo=qPJIpwuz4ltF)
