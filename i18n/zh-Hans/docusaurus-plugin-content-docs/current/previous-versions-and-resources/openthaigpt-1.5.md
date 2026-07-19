---
title: 'OpenThaiGPT 1.5'
slug: '/previous-versions-and-resources/openthaigpt-1.5'
description: '类 ChatGPT 的语言技术（大语言模型），为全体泰国民众而开发'
---
# OpenThaiGPT 1.5

🇹🇭 **OpenThaiGPT 1.5 版**是参数规模分别为 70 亿、140 亿和 720 亿的泰语大型聊天模型，基于 Qwen 2.5 进一步开发而成，具备理解和撰写泰语的能力。该项目以开源方式免费公开代码与模型，任何人都可以在其基础上继续开发，甚至用于商业用途，旨在成为面向全体泰国民众的人工智能基础设施。

<figure><img src="/img/openthaigpt-1.5.png" alt=""><figcaption><p>9 月 30 日发布的 7b/72b 版本宣传海报</p></figcaption></figure>

## Online Demo

<a class="link-card" href="https://demo72b.aieat.or.th/" target="_blank" rel="noopener noreferrer"><span class="link-card-title">OpenThaiGPT 1.5 72b 在线演示</span><span class="link-card-domain">demo72b.aieat.or.th</span></a>

由 [Siam.AI Cloud](https://siam.ai) 提供托管 ![](/img/siamai.png)

## Free Online API Service

通过 OpenAI 官方客户端库 `openai` 提供的免费 API 服务

* API Base: [https://api.float16.cloud/dedicate/78y8fJLuzE/v1/](https://api.float16.cloud/dedicate/78y8fJLuzE/v1/)
* API Key: float16-AG0F8yNce5s1DiXm1ujcNrTaZquEdaikLwhZBRhyZQNeS7Dv0X
* Model: openthaigpt/openthaigpt1.5-7b-instruct
* 代码示例: [OpenThaiGPT/openthaigpt1.5\_api\_examples](https://github.com/OpenThaiGPT/openthaigpt1.5_api_examples)

由 [Float16.cloud](https://float16.cloud/) 提供托管

<figure><img src="/img/image-30.png" alt="" width="100"><figcaption></figcaption></figure>

## 模型下载（最新更新：2024 年 10 月 13 日）

* 7b - [openthaigpt/openthaigpt1.5-7b-instruct](https://huggingface.co/openthaigpt/openthaigpt1.5-7b-instruct)
* 14b - [openthaigpt/openthaigpt1.5-14b-instruct](https://huggingface.co/openthaigpt/openthaigpt1.5-14b-instruct)
* 72b - [openthaigpt/openthaigpt1.5-72b-instruct](https://huggingface.co/openthaigpt/openthaigpt1.5-72b-instruct)

## 主要亮点

* **最先进的泰语大语言模型**：与其他开源泰语大语言模型相比，在多种类型的泰语测试中取得了最高的平均分。
* **支持多轮对话**，可进行连续的交互式会话。
* **支持检索增强生成（Retrieval Augmented Generation, RAG）**，以提升答案生成的质量与效率。
* **出色的上下文处理能力**：最多可处理 131,072 个 token 的输入文本，并生成最多 8,192 个 token 的文本，能够对复杂问题给出详尽的解答。
* **支持工具调用（Tool Calling）**：让用户可以指示模型调用各类函数，例如调用外部 API、从互联网获取数据、从各类数据库中查询数据等，并通过智能响应高效完成任务。

## 在 [OpenThaiGPT Eval](https://huggingface.co/datasets/openthaigpt/openthaigpt_eval) 上的测试结果

### 70 亿参数（7 billions）

**关于该模型的评测结果，请查看 `openthaigpt/openthaigpt1.5-7b-instruct`**

|           **考试名称**           | **scb10x/llama-3-typhoon-v1.5x-8b-instruct** | **meta-llama/Llama-3.1-7B-Instruct** | **Qwen/Qwen2.5-7B-Instruct\_stat** | <mark style="color:blue;">**openthaigpt/openthaigpt1.5-7b**</mark> |
| :--------------------------------: | :------------------------------------------: | :----------------------------------: | :--------------------------------: | :----------------------------------------------------------------: |
|          **01\_a\_level**          |                    46.67%                    |                47.50%                |               58.33%               |                               60.00%                               |
|            **02\_tgat**            |                    32.00%                    |                36.00%                |               32.00%               |                               36.00%                               |
|            **03\_tpat1**           |                    52.50%                    |                55.00%                |               57.50%               |                               57.50%                               |
|     **04\_investment\_consult**    |                    56.00%                    |                48.00%                |               68.00%               |                               76.00%                               |
| **05\_facebook\_beleble\_th\_200** |                    78.00%                    |                73.00%                |               79.00%               |                               81.00%                               |
|       **06\_xcopa\_th\_200**       |                    79.50%                    |                69.00%                |               80.50%               |                               81.00%                               |
|      **07\_xnli2.0\_th\_200**      |                    56.50%                    |                55.00%                |               53.00%               |                               54.50%                               |
|       **08\_onet\_m3\_thai**       |                    48.00%                    |                32.00%                |               72.00%               |                               64.00%                               |
|      **09\_onet\_m3\_social**      |                    75.00%                    |                50.00%                |               90.00%               |                               80.00%                               |
|       **10\_onet\_m3\_math**       |                    25.00%                    |                18.75%                |               31.25%               |                               31.25%                               |
|      **11\_onet\_m3\_science**     |                    46.15%                    |                42.31%                |               46.15%               |                               46.15%                               |
|      **12\_onet\_m3\_english**     |                    70.00%                    |                76.67%                |               86.67%               |                               83.33%                               |
|       **13\_onet\_m6\_thai**       |                    47.69%                    |                29.23%                |               46.15%               |                               53.85%                               |
|       **14\_onet\_m6\_math**       |                    29.41%                    |                17.65%                |               29.41%               |                               29.41%                               |
|      **15\_onet\_m6\_social**      |                    50.91%                    |                43.64%                |               56.36%               |                               58.18%                               |
|      **16\_onet\_m6\_science**     |                    42.86%                    |                32.14%                |               57.14%               |                               57.14%                               |
|      **17\_onet\_m6\_english**     |                    65.38%                    |                71.15%                |               78.85%               |                               80.77%                               |
|          **微平均**         |                    60.65%                    |                55.60%                |               64.41%               |             <mark style="color:blue;">**65.78%**</mark>            |

### 140 亿参数（14 billions）

**关于该模型的评测结果，请查看 `openthaigpt/openthaigpt1.5-14b-instruct`。**

| **考试名称**                     | **scb10x/llama-3-typhoon-v1.5x-70b-instruct** | **Qwen/Qwen2.5-14B-Instruct** | <mark style="color:blue;">**openthaigpt/openthaigpt1.5-14b**</mark> | **openthaigpt/openthaigpt1.5-72b** |
| ---------------------------------- | --------------------------------------------- | ----------------------------- | ------------------------------------------------------------------- | ---------------------------------- |
| **01\_a\_level**                   | 59.17%                                        | 61.67%                        | 65.00%                                                              | 76.67%                             |
| **02\_tgat**                       | 46.00%                                        | 44.00%                        | 50.00%                                                              | 46.00%                             |
| **03\_tpat1**                      | 52.50%                                        | 60.00%                        | 52.50%                                                              | 55.00%                             |
| **04\_investment\_consult**        | 60.00%                                        | 76.00%                        | 72.00%                                                              | 72.00%                             |
| **05\_facebook\_beleble\_th\_200** | 87.50%                                        | 84.50%                        | 87.00%                                                              | 90.00%                             |
| **06\_xcopa\_th\_200**             | 84.50%                                        | 85.00%                        | 86.50%                                                              | 90.50%                             |
| **07\_xnli2.0\_th\_200**           | 62.50%                                        | 69.50%                        | 64.50%                                                              | 70.50%                             |
| **08\_onet\_m3\_thai**             | 76.00%                                        | 76.00%                        | 84.00%                                                              | 84.00%                             |
| **09\_onet\_m3\_social**           | 95.00%                                        | 90.00%                        | 90.00%                                                              | 95.00%                             |
| **10\_onet\_m3\_math**             | 43.75%                                        | 43.75%                        | 12.50%                                                              | 37.50%                             |
| **11\_onet\_m3\_science**          | 53.85%                                        | 50.00%                        | 53.85%                                                              | 73.08%                             |
| **12\_onet\_m3\_english**          | 93.33%                                        | 93.33%                        | 93.33%                                                              | 96.67%                             |
| **13\_onet\_m6\_thai**             | 55.38%                                        | 52.31%                        | 56.92%                                                              | 56.92%                             |
| **14\_onet\_m6\_math**             | 41.18%                                        | 23.53%                        | 41.18%                                                              | 41.18%                             |
| **15\_onet\_m6\_social**           | 67.27%                                        | 60.00%                        | 61.82%                                                              | 65.45%                             |
| **16\_onet\_m6\_science**          | 50.00%                                        | 50.00%                        | 57.14%                                                              | 67.86%                             |
| **17\_onet\_m6\_english**          | 73.08%                                        | 82.69%                        | 78.85%                                                              | 90.38%                             |
| **微平均（Micro Average）**                  | 69.97%                                        | 71.00%                        | <mark style="color:blue;">71.51%</mark>                             | 76.73%                             |

### 720 亿参数（72 billions）

**关于该模型的评测结果，请查看 `openthaigpt/openthaigpt1.5-72b-instruct`**

|           **考试名称**           | **scb10x/llama-3-typhoon-v1.5x-70b-instruct** | **meta-llama/Llama-3.1-70B-Instruct** | **Qwen/Qwen2.5-72B-Instruct** | <mark style="color:blue;">**openthaigpt/openthaigpt1.5-72b-instruct**</mark> |
| :--------------------------------: | :-------------------------------------------: | :-----------------------------------: | :---------------------------: | :--------------------------------------------------------------------------: |
|          **01\_a\_level**          |                     59.17%                    |                 61.67%                |             75.00%            |                                    76.67%                                    |
|            **02\_tgat**            |                     46.00%                    |                 40.00%                |             48.00%            |                                    46.00%                                    |
|            **03\_tpat1**           |                     52.50%                    |                 50.00%                |             55.00%            |                                    55.00%                                    |
|     **04\_investment\_consult**    |                     60.00%                    |                 52.00%                |             80.00%            |                                    72.00%                                    |
| **05\_facebook\_beleble\_th\_200** |                     87.50%                    |                 88.00%                |             90.00%            |                                    90.00%                                    |
|       **06\_xcopa\_th\_200**       |                     84.50%                    |                 85.50%                |             90.00%            |                                    90.50%                                    |
|      **07\_xnli2.0\_th\_200**      |                     62.50%                    |                 63.00%                |             65.50%            |                                    70.50%                                    |
|       **08\_onet\_m3\_thai**       |                     76.00%                    |                 56.00%                |             76.00%            |                                    84.00%                                    |
|      **09\_onet\_m3\_social**      |                     95.00%                    |                 95.00%                |             90.00%            |                                    95.00%                                    |
|       **10\_onet\_m3\_math**       |                     43.75%                    |                 25.00%                |             37.50%            |                                    37.50%                                    |
|      **11\_onet\_m3\_science**     |                     53.85%                    |                 61.54%                |             65.38%            |                                    73.08%                                    |
|      **12\_onet\_m3\_english**     |                     93.33%                    |                 93.33%                |             96.67%            |                                    96.67%                                    |
|       **13\_onet\_m6\_thai**       |                     55.38%                    |                 60.00%                |             60.00%            |                                    56.92%                                    |
|       **14\_onet\_m6\_math**       |                     41.18%                    |                 58.82%                |             23.53%            |                                    41.18%                                    |
|      **15\_onet\_m6\_social**      |                     67.27%                    |                 76.36%                |             63.64%            |                                    65.45%                                    |
|      **16\_onet\_m6\_science**     |                     50.00%                    |                 57.14%                |             64.29%            |                                    67.86%                                    |
|      **17\_onet\_m6\_english**     |                     73.08%                    |                 82.69%                |             86.54%            |                                    90.38%                                    |
|          **微平均（Micro Average）**         |                     69.97%                    |                 71.09%                |             75.02%            |                  <mark style="color:blue;">**76.73%**</mark>                 |

以上测试在泰语选择题考试上进行，使用此前从未见过的全新测试集，采用零样本（zero-shot）学习方式。源代码与考试数据：[GitHub 上的 OpenThaiGPT/openthaigpt\_eval](https://github.com/OpenThaiGPT/openthaigpt_eval)

（更新时间：2024 年 9 月 30 日）

## 在 [scb10x/thai\_exam](https://huggingface.co/datasets/scb10x/thai_exam) 上的测试结果

<figure><img src="/img/thai-exam-benchmark-results-13-october-2024.png" alt=""><figcaption></figcaption></figure>

|                                                      模型                                                      |        **泰语测试（Acc）**       |
| :-------------------------------------------------------------------------------------------------------------: | :------------------------------------: |
|                                        **api/claude-3-5-sonnet-20240620**                                       |                  69.2                  |
| <mark style="color:blue;">**openthaigpt/openthaigpt1.5-72b-instruct**</mark><mark style="color:blue;">\*</mark> | <mark style="color:blue;">64.07</mark> |
|                                            **api/gpt-4o-2024-05-13**                                            |                  63.89                 |
|                             **hugging-quants/Meta-Llama-3.1-405B-Instruct-AWQ-INT4**                            |                  63.54                 |
| <mark style="color:blue;">**openthaigpt/openthaigpt1.5-14b-instruct**</mark><mark style="color:blue;">\*</mark> | <mark style="color:blue;">59.65</mark> |
|                                  **scb10x/llama-3-typhoon-v1.5x-70b-instruct**                                  |                  58.76                 |
|                                           **Qwen/Qwen2-72B-Instruct**                                           |                  58.23                 |
|                                    **meta-llama/Meta-Llama-3.1-70B-Instruct**                                   |                  58.23                 |
|                                          **Qwen/Qwen2.5-14B-Instruct**                                          |                  57.35                 |
|                                          **api/gpt-4o-mini-2024-07-18**                                         |                  54.51                 |
|  <mark style="color:blue;">**openthaigpt/openthaigpt1.5-7b-instruct**</mark><mark style="color:blue;">\*</mark> | <mark style="color:blue;">52.04</mark> |
|                                          **SeaLLMs/SeaLLMs-v3-7B-Chat**                                         |                  51.33                 |
|                                    **openthaigpt/openthaigpt-1.0.0-70b-chat**                                   |                  50.09                 |

\* 由 OpenThaiGPT 团队使用 [scb10x/thai\_exam](https://huggingface.co/datasets/scb10x/thai_exam) 进行评测

## 许可证

* 基于 Qwen 构建
* Qwen 许可证：允许用于**研究**和**商业**用途，但如果您的产品月活跃用户超过 1 亿人，则需要另行洽谈单独的商业许可。更多信息请参阅 LICENSE 文件。

## 支持方

<figure><img src="https://cdn-uploads.huggingface.co/production/uploads/5fcd9c426d942eaf4d1ebd30/3kjN6kuTzXDXQ6o1RFvHX.png" alt=""><figcaption></figcaption></figure>

## Prompt Format

提示词格式基于 Llama2 并做了少量修改（新增 "###" 用于标识上下文部分）

```
<|im_start|>system\n{sytem_prompt}<|im_end|>\n<|im_start|>user\n{prompt}<|im_end|>\n<|im_start|>assistant\n
```

### System prompt

```
คุณคือผู้ช่วยตอบคำถามที่ฉลาดและซื่อสัตย์
```

### 示例

**单轮对话示例**

```
<|im_start|>system\nคุณคือผู้ช่วยตอบคำถามที่ฉลาดและซื่อสัตย์<|im_end|>\n<|im_start|>user\nสวัสดีครับ<|im_end|>\n<|im_start|>assistant\n
```

**带上下文的单轮对话（RAG）示例**

```
<|im_start|>system\nคุณคือผู้ช่วยตอบคำถามที่ฉลาดและซื่อสัตย์<|im_end|>\n<|im_start|>user\nกรุงเทพมหานคร เป็นเมืองหลวง นครและมหานครที่มีประชากรมากที่สุดของประเทศไทย กรุงเทพมหานครมีพื้นที่ทั้งหมด 1,568.737 ตร.กม. มีประชากรตามทะเบียนราษฎรกว่า 8 ล้านคน\nกรุงเทพมหานครมีพื้นที่เท่าไร่<|im_end|>\n<|im_start|>assistant\n
```

**多轮对话示例**

**第一轮**

```
<|im_start|>system\nคุณคือผู้ช่วยตอบคำถามที่ฉลาดและซื่อสัตย์<|im_end|>\n<|im_start|>user\nสวัสดีครับ<|im_end|>\n<|im_start|>assistant\n
```

**第二轮**

```
<|im_start|>system\nคุณคือผู้ช่วยตอบคำถามที่ฉลาดและซื่อสัตย์<|im_end|>\n<|im_start|>user\nสวัสดีครับ<|im_end|>\n<|im_start|>assistant\nสวัสดีครับ ยินดีต้อนรับครับ คุณต้องการให้ฉันช่วยอะไรครับ?<|im_end|>\n<|im_start|>user\nกรุงเทพมหานคร ชื่อเต็มยาวๆคืออะไร<|im_end|>\n<|im_start|>assistant\n
```

曼谷的全称是 "กรุงเทพมหานคร อมรรัตนโกสินทร์ มหินทรายุธยา มหาดิลกภพ นพรัตนราชธานีบูรีรมย์ อุดมราชนิเวศน์มหาสถาน อมรพิมานอวตารสถิต สักกะทัตติยวิษณุกรรมประสิทธิ์"

**结果**

```
<|im_start|>system\nคุณคือผู้ช่วยตอบคำถามที่ฉลาดและซื่อสัตย์<|im_end|>\n<|im_start|>user\nสวัสดีครับ<|im_end|>\n<|im_start|>assistant\nสวัสดีครับ ยินดีต้อนรับครับ คุณต้องการให้ฉันช่วยอะไรครับ?<|im_end|>\n<|im_start|>user\nกรุงเทพมหานคร ชื่อเต็มยาวๆคืออะไร<|im_end|>\n<|im_start|>assistant\nชื่อเต็มของกรุงเทพมหานครคือ \"กรุงเทพมหานคร อมรรัตนโกสินทร์ มหินทรายุธยา มหาดิลกภพ นพรัตนราชธานีบูรีรมย์ อุดมราชนิเวศน์มหาสถาน อมรพิมานอวตารสถิต สักกะทัตติยวิษณุกรรมประสิทธิ์\"
```

## 使用方法

### 通过 Curl 使用免费 API（由 Siam.AI 与 Float16.Cloud 托管）

#### Siam.AI

```
curl https://api.aieat.or.th/v1/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer dummy" \
  -d '{
    "model": ".",
    "prompt": "<|im_start|>system\nคุณคือผู้ช่วยตอบคำถามที่ฉลาดและซื่อสัตย์<|im_end|>\n<|im_start|>user\nกรุงเทพมหานครคืออะไร<|im_end|>\n<|im_start|>assistant\n",
    "max_tokens": 512,
    "temperature": 0.7,
    "top_p": 0.8,
    "top_k": 40,
    "stop": ["<|im_end|>"]
  }'
```

#### Float16.cloud

```
curl -X POST https://api.float16.cloud/dedicate/78y8fJLuzE/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer float16-AG0F8yNce5s1DiXm1ujcNrTaZquEdaikLwhZBRhyZQNeS7Dv0X" \
  -d '{
    "model": "openthaigpt/openthaigpt1.5-7b-instruct",
    "messages": [
      {
        "role": "system",
        "content": "คุณคือผู้ช่วยตอบคำถามที่ฉลาดและซื่อสัตย์"
      },
      {
        "role": "user",
        "content": "สวัสดี"
      }
    ]
   }'
```

### OpenAI 客户端（由 vLLM 托管，详见下文）

```python
import openai

# Configure OpenAI client to use vLLM server
openai.api_base = "http://127.0.0.1:8000/v1"
openai.api_key = "dummy"  # vLLM doesn't require a real API key

prompt = "<|im_start|>system\nคุณคือผู้ช่วยตอบคำถามที่ฉลาดและซื่อสัตย์<|im_end|>\n<|im_start|>user\nกรุงเทพมหานครคืออะไร<|im_end|>\n<|im_start|>assistant\n"

try:
    response = openai.Completion.create(
        model=".",  # Specify the model you're using with vLLM
        prompt=prompt,
        max_tokens=512,
        temperature=0.7,
        top_p=0.8,
        top_k=40,
        stop=["<|im_end|>"]
    )
    print("Generated Text:", response.choices[0].text)
except Exception as e:
    print("Error:", str(e))
```

### Huggingface

```python
from transformers import AutoModelForCausalLM, AutoTokenizer

model_name = "openthaigpt/openthaigpt1.5-72b-instruct"

model = AutoModelForCausalLM.from_pretrained(
    model_name,
    torch_dtype="auto",
    device_map="auto"
)
tokenizer = AutoTokenizer.from_pretrained(model_name)

prompt = "ประเทศไทยคืออะไร"
messages = [
    {"role": "system", "content": "คุณคือผู้ช่วยตอบคำถามที่ฉลาดและซื่อสัตย์"},
    {"role": "user", "content": prompt}
]
text = tokenizer.apply_chat_template(
    messages,
    tokenize=False,
    add_generation_prompt=True
)
model_inputs = tokenizer([text], return_tensors="pt").to(model.device)

generated_ids = model.generate(
    **model_inputs,
    max_new_tokens=512
)
generated_ids = [
    output_ids[len(input_ids):] for input_ids, output_ids in zip(model_inputs.input_ids, generated_ids)
]

response = tokenizer.batch_decode(generated_ids, skip_special_tokens=True)[0]
```

### vLLM

1. 安装 VLLM (https://github.com/vllm-project/vllm)
2. 启动服务

```bash
vllm serve openthaigpt/openthaigpt1.5-72b-instruct --tensor-parallel-size 4
```

3. 执行推理（CURL 示例）

```bash
curl -X POST 'http://127.0.0.1:8000/v1/completions' \
-H 'Content-Type: application/json' \
-d '{
  "model": ".",
  "prompt": "<|im_start|>system\nคุณคือผู้ช่วยตอบคำถามที่ฉลาดและซื่อสัตย์<|im_end|>\n<|im_start|>user\nสวัสดีครับ<|im_end|>\n<|im_start|>assistant\n",
  "max_tokens": 512,
  "temperature": 0.7,
  "top_p": 0.8,
  "top_k": 40,
  "stop": ["<|im_end|>"]
}'
```

### 处理长文本

当前的 `config.json` 设置的上下文长度上限为 32,768 个 token。为了处理超过 32,768 个 token 的超长输入，我们采用了 [YaRN](https://arxiv.org/abs/2309.00071)——一种增强模型长度外推能力的技术，以确保模型在长文本上仍能保持最佳性能。

对于支持该技术的框架，您可以在 `config.json` 中添加以下内容以启用 YaRN：

```json
{
  ...
  "rope_scaling": {
    "factor": 4.0,
    "original_max_position_embeddings": 32768,
    "type": "yarn"
  }
}
```

### Tool Calling

OpenThaiGPT 1.5 中的工具调用（Tool Calling）功能使用户能够通过智能响应高效地调用各种函数。这包括通过调用外部 API 获取实时数据（例如当前的温度信息），或只需提交一条查询即可预测未来的数据。

例如，用户可以向 OpenThaiGPT 提问："旧金山现在的气温是多少？"，AI 便会执行预先定义好的函数并立即给出回答，无需编写额外的代码。

该功能还支持与外部数据源结合的更广泛应用场景，包括调用天气预报、股票市场行情等服务的 API，或获取用户自有系统内部的数据。

示例：

```python
import openai

def get_temperature(location, date=None, unit="celsius"):
    """Get temperature for a location (current or specific date)."""
    if date:
        return {"temperature": 25.9, "location": location, "date": date, "unit": unit}
    return {"temperature": 26.1, "location": location, "unit": unit}

tools = [
    {
        "name": "get_temperature",
        "description": "Get temperature for a location (current or by date).",
        "parameters": {
            "location": "string", "date": "string (optional)", "unit": "enum [celsius, fahrenheit]"
        },
    }
]

messages = [{"role": "user", "content": "อุณหภูมิที่ San Francisco วันนี้ีและพรุ้่งนี้คือเท่าไร่?"}]

# Simulated response flow using OpenThaiGPT Tool Calling
response = openai.ChatCompletion.create(
    model=".", messages=messages, tools=tools, temperature=0.7, max_tokens=512
)

print(response)
```

完整示例：[api\_tool\_calling\_powered\_by\_siamai.py — GitHub](https://github.com/OpenThaiGPT/openthaigpt1.5_api_examples/blob/main/api_tool_calling_powered_by_siamai.py)

### 显存需求

| **参数量** | **FP 16 位** | **8 位（量化）** | **4 位（量化）** | **4 位可用显卡示例** |
| ------------------------ | -------------- | ---------------------- | ---------------------- | ----------------------------------- |
| **7b**                   | 24 GB          | 12 GB                  | 6 GB                   | Nvidia RTX 4060 8GB                 |
| **13b**                  | 48 GB          | 24 GB                  | 12 GB                  | Nvidia RTX 4070 16GB                |
| **72b**                  | 192 GB         | 96 GB                  | 48 GB                  | Nvidia RTX 4090 24GB x 2 cards      |

## 作者

* Sumeth Yuenyong (sumeth.yue@mahidol.edu)
* Kobkrit Viriyayudhakorn (kobkrit@aieat.or.th)
* Apivadee Piyatumrong (apivadee.piy@nectec.or.th)
* Jillaphat Jaroenkantasima (autsadang41@gmail.com)
* Thaweewat Rugsujarit (thaweewr@scg.com)
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

## 引用

如果 OpenThaiGPT 对您的工作有所帮助，敬请按以下格式引用：

**Bibtex**

```bibtex
@misc{yuenyong2024openthaigpt15thaicentricopen,
      title={OpenThaiGPT 1.5: A Thai-Centric Open Source Large Language Model}, 
      author={Sumeth Yuenyong and Kobkrit Viriyayudhakorn and Apivadee Piyatumrong and Jillaphat Jaroenkantasima},
      year={2024},
      eprint={2411.07238},
      archivePrefix={arXiv},
      primaryClass={cs.CL},
      url={https://arxiv.org/abs/2411.07238}, 
}
```

**APA 格式（适用于 TXT、MS Word）**

```
Yuenyong, S., Viriyayudhakorn, K., Piyatumrong, A., & Jaroenkantasima, J. (2024). OpenThaiGPT 1.5: A Thai-Centric Open Source Large Language Model. arXiv [Cs.CL]. Retrieved from http://arxiv.org/abs/2411.07238
```

_免责声明：本模型提供的回答不保证准确无误。_
