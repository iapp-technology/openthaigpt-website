---
title: 'Welcome to OpenThaiGPT 1.6 and OpenThaiGPT R1'
slug: '/'
description: 'Free and Open Source Large Language Models for all Thai people'
---

# 🏠 Welcome to OpenThaiGPT 1.6 and OpenThaiGPT R1

![OpenThaiGPT](https://cdn-uploads.huggingface.co/production/uploads/5fcd9c426d942eaf4d1ebd30/KQGlpn434XELKYpOHsPaj.jpeg)

🇹🇭 OpenThaiGPT 1.6 72b, the latest large language model improved from version 1.5, and 🧠 OpenThaiGPT R1 32b, a model focused on analytical thinking and reasoning, are now available. These models were developed for general-purpose use and offer strong reasoning capabilities, particularly in the Thai language.

## Try It Out

<a class="link-card" href="https://chindax.iapp.co.th" target="_blank" rel="noopener noreferrer"><span class="link-card-title">Try it on ChindaX</span><span class="link-card-domain">chindax.iapp.co.th</span></a>

## Download the Models

<a class="link-card" href="https://huggingface.co/openthaigpt/openthaigpt-1.6-72b-instruct" target="_blank" rel="noopener noreferrer"><span class="link-card-title">OpenThaiGPT 1.6 72b — Hugging Face</span><span class="link-card-domain">huggingface.co</span></a>

<a class="link-card" href="https://huggingface.co/openthaigpt/openthaigpt-r1-32b-instruct" target="_blank" rel="noopener noreferrer"><span class="link-card-title">OpenThaiGPT R1 32b — Hugging Face</span><span class="link-card-domain">huggingface.co</span></a>

## 🌟 OpenThaiGPT 1.6 72b

**OpenThaiGPT 1.6 72b** is a 72-billion-parameter Thai language model designed for general-purpose tasks with strong analytical thinking capabilities. Building on the foundation of OpenThaiGPT 1.5, this latest release demonstrates improved performance across a wide range of benchmarks, particularly in coding and general language tasks.

### Highlights of OpenThaiGPT 1.6 72b

* **Advanced Thai language model** with 72 billion parameters
* **Strong analytical thinking capabilities** in both Thai and English
* **Improved performance** compared to previous OpenThaiGPT releases
* **Balanced capabilities** across mathematics, coding, and general language tasks
* **Deep understanding** of the Thai language and cultural context

### Key Improvements in OpenThaiGPT 1.6 72b

Compared to OpenThaiGPT 1.5 72b, version 1.6 demonstrates:

* **Substantially improved coding performance** in both Thai (LiveCodeBench-TH: 32.43 vs 12.61) and English (LiveCodeBench: 54.21 vs 46.38)
* **Comparable general language understanding** with language accuracy as high as 98.2%
* **Better balanced capabilities** between mathematics and coding tasks

## 🧠 OpenThaiGPT R1 32b

**OpenThaiGPT R1 32b** is an advanced 32-billion-parameter Thai language model focused on analytical thinking and reasoning, outperforming larger models such as DeepSeek R1 70b and Typhoon R1 70b despite being less than half their size. The model excels at tasks requiring complex analytical thinking, including mathematics, logic, and coding in the Thai language.

### Highlights of OpenThaiGPT R1 32b

* **State-of-the-art Thai language model** that outperforms larger models on mathematics and logical reasoning benchmarks
* **Explicit reasoning capabilities** able to show its thought process step by step
* **Significantly smaller size** (32b) yet higher performance than 70b models
* **Specialized in analytical thinking in Thai**, including complex mathematical and logical problems
* **High coding performance** in both Thai and English

## Benchmark Results

### OpenThaiGPT 1.6 72b

| **Benchmarks**        | **OpenThaiGPT 1.6 72b**                    | **OpenThaiGPT 1.5 7b** | **OpenThaiGPT 1.5 14b** | **OpenThaiGPT 1.5 72b** | **Typhoon2 Qwen2.5 7b** | **Typhoon2 Llama3.1 8b** | **Typhoon2 Llama3.1 70b** | **NECTEC Pathumma LLM Text 1.0.0 7b** |
| --------------------- | ------------------------------------------ | ---------------------- | ----------------------- | ----------------------- | ----------------------- | ------------------------ | ------------------------- | ------------------------------------- |
| **AIME24-TH**         | 6.67                                       | 0                      | 0                       | 6.67                    | 3.33                    | 3.33                     | **13.33**                 | 0                                     |
| **AIME24**            | **23.33**                                  | 6.67                   | 10                      | **23.33**               | 6.67                    | 3.33                     | 10                        | 0                                     |
| **MATH500-TH**        | 43.2                                       | 24.2                   | 26.2                    | 62                      | 51.8                    | 31                       | **55.8**                  | 21.8                                  |
| **MATH500**           | **82**                                     | 40.4                   | 47.4                    | 83.2                    | 65.4                    | 49.6                     | 67.4                      | 42.8                                  |
| **LiveCodeBench-TH**  | **32.43**                                  | 22.52                  | 21.62                   | 12.61                   | 9.91                    | 8.11                     | 27.03                     | 0                                     |
| **LiveCodeBench**     | **54.21**                                  | 31.12                  | 37.96                   | 46.38                   | 0.98                    | 5.87                     | 37.38                     | 0                                     |
| **OpenThaiEval**      | **78.7**                                   | 64.5                   | 71.26                   | 77.16                   | 64.76                   | 56.63                    | 72.54                     | 65.27                                 |
| **Language Accuracy** | 98.2                                       | 97.6                   | 98.4                    | 99.4                    | 99.4                    | 98.6                     | **99.8**                  | 98.6                                  |
| **AVERAGE**           | <mark style="color:blue;">**52.34**</mark> | 35.88                  | 39.11                   | 51.34                   | 37.78                   | 32.06                    | 47.91                     | 28.56                                 |

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
| **AVERAGE**          | <mark style="color:blue;">**71.58**</mark> | 63.31               | 65.42              |

## Model Technical Report

<a class="link-card" href="https://arxiv.org/abs/2504.01789" target="_blank" rel="noopener noreferrer"><span class="link-card-title">OpenThaiGPT 1.6 and R1 Technical Report — arXiv</span><span class="link-card-domain">arxiv.org</span></a>

If OpenThaiGPT has been beneficial for your work, kindly consider citing it as follows:

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

## How to Use

### Online Web Interface

<a class="link-card" href="https://chindax.iapp.co.th" target="_blank" rel="noopener noreferrer"><span class="link-card-title">ChindaX — Online Web Interface</span><span class="link-card-domain">chindax.iapp.co.th</span></a>

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

1. Install vLLM ([vllm-project/vllm](https://github.com/vllm-project/vllm))
2. Run server (choose one)

```bash
vllm serve openthaigpt/openthaigpt-1.6-72b --tensor-parallel-size 2
vllm serve openthaigpt/openthaigpt-r1-32b-instruct --tensor-parallel-size 2
```

* Note, change `--tensor-parallel-size 2` to the amount of available GPU cards.

3. Run inference (CURL example)

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

Or change the model name to `"model": "openthaigpt/openthaigpt-r1-32b-instruct"` or `"model": "openthaigpt/openthaigpt-1.6-72b"`.

### GPU Memory Requirements

| **Number of Parameters** | **FP 16 bits** | **8 bits (Quantized)** | **4 bits (Quantized)** |
| -------------------- | -------------- | ---------------------- | ---------------------- |
| **32b**              | 64 GB          | 32 GB                  | 16 GB                  |
| **72b**              | 144 GB         | 72 GB                  | 36 GB                  |

## License

* This model is available for **research** and **commercial use** under the terms of the Qwen2.5 license agreement. Please refer to the LICENSE file for more information.

## Support

* Official website: [openthaigpt.aieat.or.th](https://openthaigpt.aieat.or.th)
* Facebook page: [OpenThaiGPT Group](https://web.facebook.com/groups/openthaigpt)
* Discord server for discussion and support: [discord.gg/rUTp6dfVUF](https://discord.gg/rUTp6dfVUF)
* Email: [kobkrit@iapp.co.th](mailto:kobkrit@iapp.co.th)

### The OpenThaiGPT Team

![](https://cdn-uploads.huggingface.co/production/uploads/5fcd9c426d942eaf4d1ebd30/e8gT15eRfNbyEZhu-UzMX.png)

* Dr. Kobkrit Viriyayudhakorn (kobkrit@iapp.co.th / kobkrit@aieat.or.th)
* Dr. Sumeth Yuenyong (sumeth.yue@mahidol.edu)
* Dr. Thodsaporn Chay-intr (thodsaporn@iapp.co.th)

## Sponsors

![](https://cdn-uploads.huggingface.co/production/uploads/5fcd9c426d942eaf4d1ebd30/zSEA_n0cIOZk5pV_t2qii.png)

* Supported with 8x Nvidia H100 GPUs by Siam AI Corporation Co., Ltd.: [siam.ai](https://siam.ai/)
* Funded by a research grant from the Science, Research and Innovation Promotion Fund, through the Program Management Unit for Competitiveness (PMUC), in collaboration with iApp Technology Co., Ltd., with the Artificial Intelligence Entrepreneur Association of Thailand as the project operator

_Disclaimer: Provided responses are not guaranteed._
