---
title: 'Update! From the Finetune Team (8 Apr)'
slug: '/previous-versions-and-resources/previous-events/finetune-8-apr'
description: 'Update from the Finetune team (8 Apr 2023): shifting the plan from RLHF to Self-Instruct, together with the method for building a Thai Instruct Dataset and the tasks where volunteer help is needed'
---
# 🆕 Update! From the Finetune Team (8 Apr)

Hello everyone. Myself (Dr. C) and Dr. Sumeth (Toey) would like to give you an update on the Finetuning team's situation. Since our last meeting, we have changed direction.

**TLDR; the main point is that we are changing the plan!! From RLHF -> Self-Instruct**

## InstructGPT Requires an Enormous Amount of Data and Labour

Last month, our plan was to build the model using the InstructGPT technique described in [OpenAI's paper](https://arxiv.org/abs/2203.02155), the technique used to train ChatGPT. Finetuning the model consists of three main parts:

* (1) Pre-training on a language corpus that is large enough and trained long enough
* (2) Finetuning on the InstructGPT dataset
* (3) RLHF to improve quality

Part (1) is handled by the [Pretraining LLM](../released-code-colabs/pretraining-llm.md) team.

For part (2), we use the dataset from ThaiInstructGPT, which takes questions from the Pantip website as a template and collects answers from ChatGPT. Most of these are general-knowledge questions, but we still lack question-answer pairs covering detailed instructions, such as translation instructions, code-fixing instructions, instructions to answer O-Net knowledge exam questions, code-writing instructions, instructions that demonstrate various forms of intelligence, and few-shot learning style instructions.

For part (3), we ran into two problems with RLHF:

* (1) We cannot yet build an effective reward model because we lack the dataset, as described in point (2).
* (2) We still lack a dataset for ranking answers whose texts differ from one another enough.
  * (2.1) For the dataset we generated from training the first version of the Thai Instruct Dataset, where four models produced different answers and we asked the volunteer team to help rank them (ordering A, B, C, D), **the answers were not different enough — they were written almost identically, to the point that people could not tell which one was better.**
  * (2.2) The dataset that people are currently tagging at [tag.openthaigpt.aieat.or.th](https://tag.openthaigpt.aieat.or.th/) is sufficiently diverse because it is human-created, but the volume is still not enough — only around 100-odd dataset samples. (We will need to encourage and recruit more people to help with tagging.)

## The New Method: Self-Instruct

![](</img/image-6.png>)

Over the past week I came across the [Self-Instruct paper](https://arxiv.org/abs/2212.10560). This paper is the foundation of the process used to build the [Stanford Alpaca Model](https://crfm.stanford.edu/2023/03/13/alpaca.html), which was released just two weeks ago.

This paper describes a way to build a Thai InstructGPT dataset that requires very little human effort, and it can produce question-answer pairs with detailed instructions, code-writing instructions, instructions that demonstrate capability, and few-shot learning style instructions as well. Wonderful — it solves our problem perfectly. All it needs is people to help check the quality of the dataset at the final stage and remove the problematic entries.

The developers of the Self-Instruct paper state that with this method there is no longer any need to perform RLHF, because if the InstructGPT dataset is of high enough quality, it is possible to train an LLM whose quality is on par with ChatGPT.

![](</img/image-14.png>)

### How to Build an Instruct Dataset with Self-Instruct

(1) To begin, have people write sample Instruct Dataset entries in Thai. I will call this the SEED Instruct Dataset — an initial dataset of 175 pairs, which I translated with Google Translate and then reviewed and corrected by hand until everything was accurate (Human Reviewed), as shown below.

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

Of course! Everyone is welcome to download the [SEED Instruct Dataset that I have already cleaned](https://drive.google.com/file/d/1-bz16ASSlFZBj8m-SlQIxLxj2ZdHo99y/view?usp=sharing).

(2) Take these samples and send them to OpenAI GPT-4, asking it to write new Instruct Dataset entries similar to these, using prompt engineering as in the example below.

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

(3) Sent to OpenAI GPT-4, it will write back as follows.

```
4. Instruction: ปรับปรุงเนื้อหาเพิ่มเติมความคิดเองในความพยายามในการออกกำลังกายของข้าวของผู้เขียน
4. Input:
ผมเริ่มทำยิมกันเมื่อ 2 เดือนนานแล้ว ผมรู้สึกดีขึ้นและกำลังยิมไปอย่างต่อเนื่อง เพื่อควบคุมสุขภาพ
4. Output:
ผมเริ่มทำยิมกันเมื่อ 2 เดือนนานแล้ว และฉันมีความพยายามที่จะรักษาสุขภาพและฟิตเนส ฉันได้พบว่าการออกกำลังกายอย่างสม่ำเสมอมีผลให้ร่างกายแข็งแรงและสุขภาพสมบูรณ์ โดยเฉพาะอย่างยิ่งเมื่อปรับเปลี่ยนวิธีการออกกำลังกายและเพิ่มความมืดเข้มของการฝึกฝน ไม่ว่าคุณจะเลือกทำคลายนมัสการ ยกน้ำหนักหรือนั่งเหงือก โอกาสที่คุณจะสามารถมีสุขภาพที่ดีขึ้นและสนุกกับกระบวนการยิ่งขึ้นเมื่อคุณมีความพยายามและมุ่งมั่นในการปรับปรุงตัวเองโดยตลอด

```

(4) We then harvest what OpenAI GPT-4 wrote back and convert it into JSON, as shown below.

```json
{
    "instruction": "ปรับปรุงเนื้อหาเพิ่มเติมความคิดเองในความพยายามในการออกกำลังกายของข้าวของผู้เขียน",
    "input": "ผมเริ่มทำยิมกันเมื่อ 2 เดือนนานแล้ว ผมรู้สึกดีขึ้นและกำลังยิมไปอย่างต่อเนื่อง เพื่อควบคุมสุขภาพ",
    "output": "ผมเริ่มทำยิมกันเมื่อ 2 เดือนนานแล้ว และฉันมีความพยายามที่จะรักษาสุขภาพและฟิตเนส ฉันได้พบว่าการออกกำลังกายอย่างสม่ำเสมอมีผลให้ร่างกายแข็งแรงและสุขภาพสมบูรณ์ โดยเฉพาะอย่างยิ่งเมื่อปรับเปลี่ยนวิธีการออกกำลังกายและเพิ่มความมืดเข้มของการฝึกฝน ไม่ว่าคุณจะเลือกทำคลายนมัสการ ยกน้ำหนักหรือนั่งเหงือก โอกาสที่คุณจะสามารถมีสุขภาพที่ดีขึ้นและสนุกกับกระบวนการยิ่งขึ้นเมื่อคุณมีความพยายามและมุ่งมั่นในการปรับปรุงตัวเองโดยตลอด",
}
```

(5) We compare the Instruct Dataset entries written by OpenAI against those already in our repository. If any single existing entry is too similar to the new one (ROUGE score greater than 0.8), the new entry is rejected from the repository. Below are the similarity scores of the new Instruct Dataset entry above against other instructions (as you can see, the highest is only 0.18, so it can be accepted into the repository).

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

## What We Are Working On and Where We Need Help

### 1. Please Help Us Filter the Self-Instruct Data

Right now I am running Self-Instruct with this method and continuously producing new Instruct Dataset entries. Once we have at least 10,000 pairs, we will ask volunteers to help review the Instruct Dataset entries that GPT-4 has generated. What we would like you to assess about these newly created Instruct Dataset entries is:

1. Factual correctness
2. No hallucinations
3. No spelling mistakes
4. No newly invented words that have never been defined before
5. Readable and comprehensible

I will release them via a [Google Sheet](https://docs.google.com/spreadsheets/d/1BSHkpRyD5RH90E85tLWe4UzpgfDHZafE2rKxLincyWI/edit?usp=sharing). Please come and help tag them, as in the examples below.

Example 1: a good example

```json
 {
    "instruction": "คำนวณพื้นที่สี่เหลี่ยมผืนผ้า โดยทราบความยาวออก 10 เมตร และความกว้าง 15 เมตร",
    "input": "",
    "output": "พื้นที่สี่เหลี่ยมผืนผ้า = ความยาว x ความกว้าง\n= 10 เมตร x 15 เมตร\n= 150 ตารางเมตร",
  }
```

Example 2: a bad example (incorrect translation)

```json
{
    "instruction": "แปลงประโยคดังต่อไปนี้จากภาษาอังกฤษเป็นภาษาไทย",
    "input": "The early bird catches the worm.",
    "output": "นกตัวเต็มอุระจับยังมากินได้"
}
```

Example 3: a bad example (too much repetition — "run run run")

```json
{
    "instruction": "หาคำคล้องทับที่มีคำว่า \"ความรัก\" เป็นข้อความหลัก",
    "input": "",
    "output": "ความรักก็เหมือนดวงดาว สว่างสดใสในท้องฟ้ามืดแสนไกลลวิ่งวิ่งวิ่งวิ่งวิ่งวิ่งวิ่งวิ่งวิ่งวิ่งวิ่-\n9",
}
```

And so on.

One more request for help, unrelated to the above.

### 2. We Would Like O-Net Exam Questions with Answer Keys in JSON Text Format

Like this. Does anyone have them? Please contact me at kobkrit@aieat.or.th or on Discord at kobkrit.

```json
{
    "instruction": "ตอบข้อสอบ O-Net ดังต่อไปนี้ โดยตอบแค่ ก,ข,ค,ง เท่านั้น",
    "input": "กรุงเทพมหานครอยู่ภาคใด\n ก. ภาคกลาง\n ข. ภาคเหนือ\n ค. ภาคใต้\n ง. ภาคตะวันออกเฉียงเหนือ",
    "output": "ก"
}
```

An OpenThaiGPT model smart enough to perform few-shot learning is getting closer to reality. We ask everyone for your continued support.

Thank you very much.

Dr. Kobkrit Viriyayudhakorn<br />Dr. Sumeth Yuenyong
