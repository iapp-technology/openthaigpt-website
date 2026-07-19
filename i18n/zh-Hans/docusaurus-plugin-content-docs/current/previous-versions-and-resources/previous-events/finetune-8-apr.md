---
title: '最新进展！来自 Finetune 团队（8 Apr）'
slug: '/previous-versions-and-resources/previous-events/finetune-8-apr'
description: 'Finetune 团队进展更新（8 Apr 2023）：方案从 RLHF 调整为 Self-Instruct，并介绍构建泰语 Instruct Dataset 的方法以及需要志愿者协助的工作'
---
# 🆕 最新进展！来自 Finetune 团队（8 Apr）

大家好，我（Dr. C）和 Dr. Sumeth（Toey）来向大家汇报一下 Finetuning 团队的最新情况。自上次会议以来，我们调整了方向。

**TLDR；核心要点是——方案有变！！从 RLHF -> Self-Instruct**

## InstructGPT 需要极其庞大的数据与人力

上个月，我们计划按照 [OpenAI 的论文](https://arxiv.org/abs/2203.02155)所述的 InstructGPT 技术来构建模型，这正是用于训练 ChatGPT 的技术。模型的微调主要包含三个部分：

* (1) 在足够大、训练量足够充分的语料上进行预训练
* (2) 在 InstructGPT 数据集上进行微调
* (3) 通过 RLHF 提升质量

其中第 (1) 部分由 [Pretraining LLM](../released-code-colabs/pretraining-llm.md) 团队负责。

第 (2) 部分，我们使用来自 ThaiInstructGPT 的数据集，它以 Pantip 网站上的提问为原型，并从 ChatGPT 收集答案。这些大多属于通用知识类问题，但我们仍然缺少涵盖精细指令的问答对，例如翻译指令、修复代码指令、回答 O-Net 知识考题的指令、编写代码的指令、体现各类智能能力的指令，以及 Few-shot Learning 形式的指令。

在第 (3) 部分，我们在做 RLHF 时遇到了两个问题：

* (1) 由于缺少数据集（即第 (2) 点所述的问题），我们目前还无法构建出有效的奖励模型（Reward Model）。
* (2) 仍然缺少用于对答案进行排序（Ranking）、且答案文本之间差异足够明显的数据集。
  * (2.1) 我们通过训练第一版 Thai Instruct Dataset 生成的数据集中，由 4 个模型给出不同答案，并请志愿者团队帮忙排序（按 A、B、C、D 排列），但**这些答案之间的差异不够大，写法几乎完全一样，以至于人也分辨不出哪一个更好。**
  * (2.2) 目前大家在 [tag.openthaigpt.aieat.or.th](https://tag.openthaigpt.aieat.or.th/) 上标注的数据集差异性足够大，因为是由人工创建的，但数量仍然不足，只有大约一百多条数据样本。（还需要动员并招募更多人来协助标注。）

## 新方法：Self-Instruct

![](</img/image-6.png>)

在过去一周里，我读到了 [Self-Instruct 论文](https://arxiv.org/abs/2212.10560)。这篇论文正是两周前发布的 [Stanford Alpaca Model](https://crfm.stanford.edu/2023/03/13/alpaca.html) 构建流程的基础。

这篇论文介绍了一种构建泰语 InstructGPT 数据集的方法，所需人力极少，而且能够生成包含精细指令、编写代码指令、体现能力的指令，以及 Few-shot Learning 形式指令的完整问答对。太好了，这恰好解决了我们的问题，只需要有人在最后阶段帮忙检查数据集质量并剔除有问题的条目即可。

Self-Instruct 论文的开发者表示，采用这种方法后就不再需要做 RLHF 了，因为只要 InstructGPT 数据集的质量足够高，就能训练出质量可与 ChatGPT 媲美的大语言模型。

![](</img/image-14.png>)

### 使用 Self-Instruct 构建 Instruct Dataset 的方法

(1) 首先由人工撰写泰语的 Instruct Dataset 示例，我称之为 SEED Instruct Dataset，作为初始数据集共 175 对。这部分我先用 Google Translate 翻译，然后逐条人工审校修改直至完全正确（Human Reviewed），如下图所示。

```json
{"id":"seed_task_0",
"name":"breakfast_suggestion",
"instruction":"มีอะไรที่ฉันสามารถกินเป็นอาหารเช้าที่ไม่มีไข่ แต่มีโปรตีน และมีแคลอรีประมาณ 700-1,000 แคลอรีหรือไม่",
"instances":[
  {"input":"",
   "output":"ใช่ คุณสามารถมีโปรตีนกล้วยข้าวโอ๊ตปั่น 1 ชิ้นและเบคอน 4 แผ่น โปรตีนกล้วยข้าวโอ๊ตปั่นอาจประกอบด้วยข้าวโอ๊ต 1/2 ถ้วย ผงเวย์โปรตีน 60 กรัม กล้วยขนาดกลาง 1/2 ลูก น้ำมันเมล็ดแฟลกซ์ 1 ช้อนโต๊ะ และวัตต์ 1/2 ถ้วย รวมพลังงานประมาณ 550 แคลอรี เบคอน 4 แผ่นมีประมาณ 200 แคลอรี่"}
  ],"is_classification":false,"length":393}
```

```json
{"id":"seed_task_1","name":"antonym_relation",
 "instruction":"ความสัมพันธ์ระหว่างคู่ที่กำหนดคืออะไร?",
 "instances":[{"input":"กลางคืน : วัน :: ขวา : ซ้าย",
  "output":"ความสัมพันธ์ระหว่างคู่ที่กำหนดคือ คู่ตรงข้าม"}],
  "is_classification":false,"length":138}
```

当然！各位可以直接下载[我已经清洗好的 SEED Instruct Dataset](https://drive.google.com/file/d/1-bz16ASSlFZBj8m-SlQIxLxj2ZdHo99y/view?usp=sharing)。

(2) 将这些样例发送给 OpenAI GPT-4，请它按照类似的形式写出新的 Instruct Dataset，采用如下示例所示的提示词工程（Prompt Engineering）。

```
You are asked to come up with a set of 20 diverse task instructions in Thai language. These task instructions will be given to a GPT model and we will evaluate the GPT model for completing the instructions.
Here are the requirements:
1. Try not to repeat the verb for each instruction to maximize diversity.
2. The language used for the instruction also should be diverse. For example, you should combine questions with imperative instructions.
3. The type of instructions should be diverse. The list should include diverse types of tasks like open-ended generation, classification, editing, etc.
4. A GPT language model should be able to complete the instruction. For example, do not ask the assistant to create any visual or audio output. For another example, do not ask the assistant to wake you up at 5pm or set a reminder because it cannot perform any action.
5. The instructions should be in Thai.
6. The instructions should be 1 to 2 sentences long. Either an imperative sentence or a question is permitted.
7. You should generate an appropriate input to the instruction. The input field should contain a specific example provided for the instruction. It should involve realistic data and should not contain simple placeholders. The input should provide substantial content to make the instruction challenging but should ideally not exceed 100 words.
8. Not all instructions require input. For example, when a instruction asks about some general information, "what is the highest peak in the world", it is not necssary to provide a specific context. In this case, we simply put "<noinput>" in the input field.
9. The output should be an appropriate response to the instruction and the input. Make sure the output is less than 100 words.

List of 20 tasks:
###
1. Instruction: ขอกฎหมายที่ควบคุมค่าจ้างขั้นต่ำของรัฐแคลิฟอร์เนีย สหรัฐอเมริกา
1. Input:
<noinput>
1. Output:
ในระดับรัฐบาลกลาง ค่าจ้างขั้นต่ำอยู่ภายใต้พระราชบัญญัติมาตรฐานแรงงานที่เป็นธรรม ปัจจุบันกฎหมายของรัฐบาลกลางกำหนดค่าแรงขั้นต่ำไว้ที่ 7.25 ดอลลาร์ต่อชั่วโมง อย่างไรก็ตาม กฎหมายของรัฐบาลกลางอนุญาตให้รัฐและเมืองต่างๆ กำหนดค่าจ้างขั้นต่ำที่สูงกว่าอัตราของรัฐบาลกลาง 29 USC § 218(ก) รัฐแคลิฟอร์เนียได้กำหนดค่าแรงขั้นต่ำที่สูงกว่าอัตราของรัฐบาลกลาง ดังนั้นนายจ้างในรัฐแคลิฟอร์เนียจึงจำเป็นต้องจ่ายค่าจ้างขั้นต่ำที่กำหนดโดยกฎหมายของรัฐ (เว้นแต่เมืองหรือเคาน์ตีที่ตนดำเนินกิจการอยู่จะมีอัตราที่สูงกว่านั้น) ดู ด้านล่าง รหัสแรงงาน § 1182.12. ค่าจ้างขั้นต่ำของรัฐแคลิฟอร์เนียถูกกำหนดให้ค่อยๆ เพิ่มขึ้นเมื่อเวลาผ่านไป ในปี 2022 ค่าจ้างขั้นต่ำจะอยู่ที่ 14.50 ดอลลาร์ต่อชั่วโมง
###
2. Instruction: ความสัมพันธ์ระหว่างคู่ที่กำหนดคืออะไร?
2. Input:
กลางคืน : วัน :: ขวา : ซ้าย
2. Output:
ความสัมพันธ์ระหว่างคู่ที่กำหนดคือ คู่ตรงข้าม
###
3. Instruction: บุคคลและองค์กรจะลดอคติโดยไม่รู้ตัวได้อย่างไร?
3. Input:
<noinput>
3. Output:
จุดเริ่มต้นที่ดีคือการทำให้ช้าลง การตัดสินใจมักจะได้รับผลกระทบจากอคติโดยไม่รู้ตัวเมื่อทำอย่างรวดเร็วหรืออยู่ภายใต้ความเครียด บางวิธีในการหลีกเลี่ยงการตัดสินอย่างรวดเร็วและป้องกันอคติคือการแสวงหาความคิดเห็นและมุมมองที่แตกต่างกันก่อนที่จะทำการตัดสินใจในการจัดการความสามารถ รับสมัครผู้สมัครจากแหล่งต่างๆ ฝึกอบรมพนักงานข้ามสายงาน สร้างโปรแกรมการให้คำปรึกษาและพันธมิตร และตั้งค่าระบบสำหรับการรายงานโดยไม่เปิดเผยตัวตน ปัญหาและวัดความก้าวหน้า
###
4. Instruction:
```

(3) 发送给 OpenAI GPT-4 后，它会回复如下内容。

```
4. Instruction: ปรับปรุงเนื้อหาเพิ่มเติมความคิดเองในความพยายามในการออกกำลังกายของข้าวของผู้เขียน
4. Input:
ผมเริ่มทำยิมกันเมื่อ 2 เดือนนานแล้ว ผมรู้สึกดีขึ้นและกำลังยิมไปอย่างต่อเนื่อง เพื่อควบคุมสุขภาพ
4. Output:
ผมเริ่มทำยิมกันเมื่อ 2 เดือนนานแล้ว และฉันมีความพยายามที่จะรักษาสุขภาพและฟิตเนส ฉันได้พบว่าการออกกำลังกายอย่างสม่ำเสมอมีผลให้ร่างกายแข็งแรงและสุขภาพสมบูรณ์ โดยเฉพาะอย่างยิ่งเมื่อปรับเปลี่ยนวิธีการออกกำลังกายและเพิ่มความมืดเข้มของการฝึกฝน ไม่ว่าคุณจะเลือกทำคลายนมัสการ ยกน้ำหนักหรือนั่งเหงือก โอกาสที่คุณจะสามารถมีสุขภาพที่ดีขึ้นและสนุกกับกระบวนการยิ่งขึ้นเมื่อคุณมีความพยายามและมุ่งมั่นในการปรับปรุงตัวเองโดยตลอด

```

(4) 接下来我们收集 OpenAI GPT-4 回复的内容，并将其转换为 JSON，如下图所示。

```json
{
    "instruction": "ปรับปรุงเนื้อหาเพิ่มเติมความคิดเองในความพยายามในการออกกำลังกายของข้าวของผู้เขียน",
    "input": "ผมเริ่มทำยิมกันเมื่อ 2 เดือนนานแล้ว ผมรู้สึกดีขึ้นและกำลังยิมไปอย่างต่อเนื่อง เพื่อควบคุมสุขภาพ",
    "output": "ผมเริ่มทำยิมกันเมื่อ 2 เดือนนานแล้ว และฉันมีความพยายามที่จะรักษาสุขภาพและฟิตเนส ฉันได้พบว่าการออกกำลังกายอย่างสม่ำเสมอมีผลให้ร่างกายแข็งแรงและสุขภาพสมบูรณ์ โดยเฉพาะอย่างยิ่งเมื่อปรับเปลี่ยนวิธีการออกกำลังกายและเพิ่มความมืดเข้มของการฝึกฝน ไม่ว่าคุณจะเลือกทำคลายนมัสการ ยกน้ำหนักหรือนั่งเหงือก โอกาสที่คุณจะสามารถมีสุขภาพที่ดีขึ้นและสนุกกับกระบวนการยิ่งขึ้นเมื่อคุณมีความพยายามและมุ่งมั่นในการปรับปรุงตัวเองโดยตลอด",
}
```

(5) 我们将 OpenAI 写出的 Instruct Dataset 与我们库中已有的条目进行比对。只要库中有哪怕一条与新条目过于相似（ROUGE 分数大于 0.8），该新条目就会被拒绝入库。下面是上述新 Instruct Dataset 条目与其他指令的相似度分数（可以看到最高仅为 0.18，因此可以入库）。

```json
"most_similar_instructions": {
  "ให้คำแนะนำสี่ขั้นตอนในการดูแลดอกไม้ในบ้าน": 0.1818181818181818,
  "เปรียบเทียบหมาและแมวในเรื่องของการเลี้ยงสัตว์เลี้ยง": 0.1818181818181818,
  "อธิบายหลักประสงค์ของสายการบินในการปรับปรุงความปลอดภัยของการบิน": 0.17391304347826086,
  "ในความเห็นของคุณ อะไรคือคุณสมบัติของโค้ชกีฬาที่มีประสิทธิภาพ?": 0.16,
  "แปลข้อความเนื้อเพลงให้อยู่ในรูปของ \"กลุ่มคำสั่งในภาษาประจำงาน\" ที่สื่อความหมายของเนื้อเพลงแต่ไม่ได้เป็นเเบบเนื้อเพลง": 0.15384615384615383,
  "ให้คำแนะนำในการใช้น้ำหนักหัวให้ถูกต้องเมื่อเที่ยวบ้านในปืน Airsoft": 0.14814814814814814,
  "ขอความเห็นของคุณเกี่ยวกับการใช้โทรศัพท์มือถือในห้องเรียน ควรมีกฎหยุดใช้โทรศัพท์มือถือในห้องเรียนหรือไม่": 0.13333333333333333,
  "ในฐานะโค้ชกีฬาที่ได้รับการว่าจ้างใหม่ คุณมีแผนอย่างไรสำหรับ 30 วันแรกในการทำงาน": 0.13333333333333333,
  "ในงานนี้ คุณต้องเปรียบเทียบความหมายของประโยคทั้งสองและบอกว่ามันเหมือนกันหรือไม่ เอาต์พุตใช่หรือไม่": 0.12903225806451615,
  "ทำนายสภาพอากาศของวันนี้": 0.125
},
"avg_similarity_score": 0.04100189264641197
```

## 我们正在推进的工作以及需要的帮助

### 1. 请帮我们筛选 Self-Instruct 数据

目前我正在用这种方法运行 Self-Instruct，并持续产出新的 Instruct Dataset。等积累到至少 10,000 对之后，我们会邀请志愿者一起来检查 GPT-4 生成的 Instruct Dataset。希望大家帮忙判别这些新生成的 Instruct Dataset 是否满足：

1. 内容符合事实、准确无误
2. 没有幻觉（Not Hallucinations）
3. 没有拼写错误
4. 没有凭空生造、此前从未定义过的新词
5. 读起来通顺易懂

我会通过 [Google Sheet](https://docs.google.com/spreadsheets/d/1BSHkpRyD5RH90E85tLWe4UzpgfDHZafE2rKxLincyWI/edit?usp=sharing) 发布，麻烦各位来协助标注，示例如下。

示例 1：好的例子

```json
 {
    "instruction": "คำนวณพื้นที่สี่เหลี่ยมผืนผ้า โดยทราบความยาวออก 10 เมตร และความกว้าง 15 เมตร",
    "input": "",
    "output": "พื้นที่สี่เหลี่ยมผืนผ้า = ความยาว x ความกว้าง\n= 10 เมตร x 15 เมตร\n= 150 ตารางเมตร",
  }
```

示例 2：不好的例子（翻译错误）

```json
{
    "instruction": "แปลงประโยคดังต่อไปนี้จากภาษาอังกฤษเป็นภาษาไทย",
    "input": "The early bird catches the worm.",
    "output": "นกตัวเต็มอุระจับยังมากินได้"
}
```

示例 3：不好的例子（重复词过多，“跑跑跑”）

```json
{
    "instruction": "หาคำคล้องทับที่มีคำว่า \"ความรัก\" เป็นข้อความหลัก",
    "input": "",
    "output": "ความรักก็เหมือนดวงดาว สว่างสดใสในท้องฟ้ามืดแสนไกลลวิ่งวิ่งวิ่งวิ่งวิ่งวิ่งวิ่งวิ่งวิ่งวิ่งวิ่-\n9",
}
```

诸如此类。

另外还有一项与上述无关的求助。

### 2. 希望获得 JSON 文本格式的 O-Net 考题及答案

就像下面这样。有谁手上有吗？欢迎直接联系我：kobkrit@aieat.or.th，或 Discord kobkrit。

```json
{
    "instruction": "ตอบข้อสอบ O-Net ดังต่อไปนี้ โดยตอบแค่ ก,ข,ค,ง เท่านั้น",
    "input": "กรุงเทพมหานครอยู่ภาคใด\n ก. ภาคกลาง\n ข. ภาคเหนือ\n ค. ภาคใต้\n ง. ภาคตะวันออกเฉียงเหนือ",
    "output": "ก"
}
```

一个聪明到足以完成 Few-Shot Learning 的 OpenThaiGPT 模型正在逐步成为现实。也请大家继续支持我们。

非常感谢。

Dr. Kobkrit Viriyayudhakorn<br />Dr. Sumeth Yuenyong
