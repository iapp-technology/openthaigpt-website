---
title: '欢迎使用 OpenThaiGPT 1.6 与 OpenThaiGPT R1'
slug: '/'
description: '面向全体泰国民众的免费开源大语言模型'
---

# 🏠 欢迎使用 OpenThaiGPT 1.6 与 OpenThaiGPT R1

![OpenThaiGPT](https://cdn-uploads.huggingface.co/production/uploads/5fcd9c426d942eaf4d1ebd30/KQGlpn434XELKYpOHsPaj.jpeg)

🇹🇭 OpenThaiGPT 1.6 72b 是在 1.5 版本基础上改进的最新大语言模型，🧠 OpenThaiGPT R1 32b 则是专注于分析思考与推理的模型，两者现已正式发布。这些模型专为通用场景开发，具备强大的推理能力，在泰语方面尤为突出。

## 在线体验

<a class="link-card" href="https://chindax.iapp.co.th" target="_blank" rel="noopener noreferrer"><span class="link-card-title">通过 ChindaX 在线体验</span><span class="link-card-domain">chindax.iapp.co.th</span></a>

## 下载模型

<a class="link-card" href="https://huggingface.co/openthaigpt/openthaigpt-1.6-72b-instruct" target="_blank" rel="noopener noreferrer"><span class="link-card-title">OpenThaiGPT 1.6 72b — Hugging Face</span><span class="link-card-domain">huggingface.co</span></a>

<a class="link-card" href="https://huggingface.co/openthaigpt/openthaigpt-r1-32b-instruct" target="_blank" rel="noopener noreferrer"><span class="link-card-title">OpenThaiGPT R1 32b — Hugging Face</span><span class="link-card-domain">huggingface.co</span></a>

## 🌟 OpenThaiGPT 1.6 72b

**OpenThaiGPT 1.6 72b** 是一款拥有 720 亿参数的泰语大语言模型，专为通用任务设计，并具备强大的分析思考能力。该版本在 OpenThaiGPT 1.5 的基础上进一步发展，在多项基准测试中表现更佳，尤其是在代码编写和通用语言任务方面。

### OpenThaiGPT 1.6 72b 的亮点

* **先进的泰语大语言模型**，拥有 720 亿参数
* **强大的分析思考能力**，泰语与英语均表现出色
* **性能显著提升**，优于以往的 OpenThaiGPT 版本
* **能力均衡**，涵盖数学、代码编写与通用语言任务
* **深入理解**泰语及泰国文化语境

### OpenThaiGPT 1.6 72b 的主要改进

与 OpenThaiGPT 1.5 72b 相比，1.6 版本展现出：

* **代码编写性能大幅提升**，无论是泰语（LiveCodeBench-TH：32.43 对比 12.61）还是英语（LiveCodeBench：54.21 对比 46.38）
* **通用语言理解能力相当**，语言准确率高达 98.2%
* **数学与代码编写任务之间的能力更加均衡**

## 🧠 OpenThaiGPT R1 32b

**OpenThaiGPT R1 32b** 是一款拥有 320 亿参数的先进泰语大语言模型，专注于分析思考与推理。尽管其规模不足一半，性能却超越了 DeepSeek R1 70b 和 Typhoon R1 70b 等更大规模的模型。该模型擅长需要复杂分析思考的任务，包括泰语环境下的数学、逻辑与代码编写。

### OpenThaiGPT R1 32b 的亮点

* **最先进的泰语大语言模型**，在数学与逻辑推理基准测试中超越更大规模的模型
* **具备显式推理能力**，可逐步展示思考过程
* **模型规模显著更小**（32b），性能却优于 70b 级别的模型
* **专精于泰语环境下的分析思考**，包括复杂的数学与逻辑问题
* **代码编写性能优异**，泰语与英语均表现出色

## 基准测试结果

### OpenThaiGPT 1.6 72b

| **基准测试**        | **OpenThaiGPT 1.6 72b**                    | **OpenThaiGPT 1.5 7b** | **OpenThaiGPT 1.5 14b** | **OpenThaiGPT 1.5 72b** | **Typhoon2 Qwen2.5 7b** | **Typhoon2 Llama3.1 8b** | **Typhoon2 Llama3.1 70b** | **NECTEC Pathumma LLM Text 1.0.0 7b** |
| --------------------- | ------------------------------------------ | ---------------------- | ----------------------- | ----------------------- | ----------------------- | ------------------------ | ------------------------- | ------------------------------------- |
| **AIME24-TH**         | 6.67                                       | 0                      | 0                       | 6.67                    | 3.33                    | 3.33                     | **13.33**                 | 0                                     |
| **AIME24**            | **23.33**                                  | 6.67                   | 10                      | **23.33**               | 6.67                    | 3.33                     | 10                        | 0                                     |
| **MATH500-TH**        | 43.2                                       | 24.2                   | 26.2                    | 62                      | 51.8                    | 31                       | **55.8**                  | 21.8                                  |
| **MATH500**           | **82**                                     | 40.4                   | 47.4                    | 83.2                    | 65.4                    | 49.6                     | 67.4                      | 42.8                                  |
| **LiveCodeBench-TH**  | **32.43**                                  | 22.52                  | 21.62                   | 12.61                   | 9.91                    | 8.11                     | 27.03                     | 0                                     |
| **LiveCodeBench**     | **54.21**                                  | 31.12                  | 37.96                   | 46.38                   | 0.98                    | 5.87                     | 37.38                     | 0                                     |
| **OpenThaiEval**      | **78.7**                                   | 64.5                   | 71.26                   | 77.16                   | 64.76                   | 56.63                    | 72.54                     | 65.27                                 |
| **语言准确率** | 98.2                                       | 97.6                   | 98.4                    | 99.4                    | 99.4                    | 98.6                     | **99.8**                  | 98.6                                  |
| **平均分**           | <mark style="color:blue;">**52.34**</mark> | 35.88                  | 39.11                   | 51.34                   | 37.78                   | 32.06                    | 47.91                     | 28.56                                 |

### OpenThaiGPT R1 32b

| **SkyThought**       | **OpenThaiGPT R1 32b**                     | **DeepSeek R1 70b** | **Typhoon R1 70b** |
| -------------------- | ------------------------------------------ | ------------------- | ------------------ |
| **AIME24-TH**        | **56.67**                                  | 33.33               | 53.33              |
| **AIME24**           | **63.36**                                  | 53.33               | 53.33              |
| **MATH500-TH**       | **83.8**                                   | 75.4                | 81                 |
| **MATH500**          | 89.4                                       | 88.88               | **90.2**           |
| **LiveCodeBench-TH** | **62.16**                                  | 53.15               | 47.75              |
| **LiveCodeBench**    | **69.67**                                  | 64.97               | 54.79              |
| **OpenThaiEval**     | 76.05                                      | 74.17               | **77.59**          |
| **平均分**          | <mark style="color:blue;">**71.58**</mark> | 63.31               | 65.42              |

## 模型技术报告

<a class="link-card" href="https://arxiv.org/abs/2504.01789" target="_blank" rel="noopener noreferrer"><span class="link-card-title">OpenThaiGPT 1.6 与 R1 技术报告 — arXiv</span><span class="link-card-domain">arxiv.org</span></a>

如果 OpenThaiGPT 对您的工作有所助益，敬请按以下方式引用：

```
@misc{yuenyong2025openthaigpt16r1thaicentric,
      title={OpenThaiGPT 1.6 and R1: Thai-Centric Open Source and Reasoning Large Language Models}, 
      author={Sumeth Yuenyong and Thodsaporn Chay-intr and Kobkrit Viriyayudhakorn},
      year={2025},
      eprint={2504.01789},
      archivePrefix={arXiv},
      primaryClass={cs.CL},
      url={https://arxiv.org/abs/2504.01789}, 
}
```

## 使用方法

### 在线网页界面

<a class="link-card" href="https://chindax.iapp.co.th" target="_blank" rel="noopener noreferrer"><span class="link-card-title">ChindaX — 在线网页界面</span><span class="link-card-domain">chindax.iapp.co.th</span></a>

### Transformers

```python
from transformers import AutoModelForCausalLM, AutoTokenizer

model_name = "openthaigpt/openthaigpt-1.6-72b" #openthaigpt/openthaigpt-r1-32b-instruct

model = AutoModelForCausalLM.from_pretrained(
    model_name,
    torch_dtype="auto",
    device_map="auto"
)
tokenizer = AutoTokenizer.from_pretrained(model_name)

prompt = "กรุงเทพมหานครคืออะไร"
messages = [
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
    max_new_tokens=8192,
    temperature=0.6
)
generated_ids = [
    output_ids[len(input_ids):] for input_ids, output_ids in zip(model_inputs.input_ids, generated_ids)
]

response = tokenizer.batch_decode(generated_ids, skip_special_tokens=True)[0]
```

### vLLM

1. 安装 vLLM（[vllm-project/vllm](https://github.com/vllm-project/vllm)）
2. 启动服务（任选其一）

```bash
vllm serve openthaigpt/openthaigpt-1.6-72b --tensor-parallel-size 2
vllm serve openthaigpt/openthaigpt-r1-32b-instruct --tensor-parallel-size 2
```

* 注意：请将 `--tensor-parallel-size 2` 修改为可用 GPU 卡的数量。

3. 执行推理（CURL 示例）

```bash
curl -X POST 'http://127.0.0.1:8000/v1/chat/completions' \
-H 'Content-Type: application/json' \
-d '{
  "model": "openthaigpt/openthaigpt-1.6-72b",
  "messages": [
    {
      "role": "user",
      "content": "กรุงเทพมหานครคืออะไร"
    }
  ],
  "max_tokens": 4096,
  "temperature": 0.6,
  "top_p": 0.95,
  "top_k": 40
}'
```

或将模型名称改为 `"model": "openthaigpt/openthaigpt-r1-32b-instruct"` 或 `"model": "openthaigpt/openthaigpt-1.6-72b"`。

### GPU 显存需求

| **参数量** | **FP 16 bits** | **8 bits（量化）** | **4 bits（量化）** |
| -------------------- | -------------- | ---------------------- | ---------------------- |
| **32b**              | 64 GB          | 32 GB                  | 16 GB                  |
| **72b**              | 144 GB         | 72 GB                  | 36 GB                  |

## 许可协议

* 本模型可依据 Qwen2.5 许可协议的条款用于**研究**和**商业用途**。详情请参阅 LICENSE 文件。

## 支持与联系

* 官方网站：[openthaigpt.aieat.or.th](https://openthaigpt.aieat.or.th)
* Facebook 主页：[OpenThaiGPT 社群](https://web.facebook.com/groups/openthaigpt)
* 用于交流与支持的 Discord 服务器：[discord.gg/rUTp6dfVUF](https://discord.gg/rUTp6dfVUF)
* 电子邮箱：[kobkrit@iapp.co.th](mailto:kobkrit@iapp.co.th)

### OpenThaiGPT 团队

![](https://cdn-uploads.huggingface.co/production/uploads/5fcd9c426d942eaf4d1ebd30/e8gT15eRfNbyEZhu-UzMX.png)

* Dr. Kobkrit Viriyayudhakorn（kobkrit@iapp.co.th / kobkrit@aieat.or.th）
* Dr. Sumeth Yuenyong（sumeth.yue@mahidol.edu）
* Dr. Thodsaporn Chay-intr（thodsaporn@iapp.co.th）

## 赞助方

![](https://cdn-uploads.huggingface.co/production/uploads/5fcd9c426d942eaf4d1ebd30/zSEA_n0cIOZk5pV_t2qii.png)

* 由 Siam AI Corporation Co., Ltd. 提供 8 张 Nvidia H100 GPU 支持：[siam.ai](https://siam.ai/)
* 由科学研究与创新促进基金通过国家竞争力提升计划管理署（PMUC）提供研究经费支持，与 iApp Technology Co., Ltd. 合作开展，并由泰国人工智能创业者协会（AIEAT）负责项目执行

_Disclaimer: Provided responses are not guaranteed._
