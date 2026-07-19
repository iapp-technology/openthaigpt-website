---
title: 'OpenThaiRAG'
slug: '/openthairag'
description: '基于检索增强生成的智能 AI 系统框架'
---

# 📚 OpenThaiRAG

![OpenThaiRAG Logo](https://github.com/user-attachments/assets/901b1532-2d24-4955-9659-789ae077bb30)

OpenThaiRAG 是一个专为泰语处理而设计的开源检索增强生成（Retrieval-Augmented Generation，RAG）框架。本项目融合了向量数据库、大语言模型与信息检索技术的强大能力，采用 OpenThaiGPT 1.5 作为大语言模型，为用户的泰语提问提供准确且贴合上下文的回答。

## 代码

<a class="link-card" href="https://github.com/OpenThaiGPT/openthairag" target="_blank" rel="noopener noreferrer"><span class="link-card-title">OpenThaiRAG 源代码 — GitHub</span><span class="link-card-domain">github.com</span></a>

## 主要特性

* **向量数据库集成**：使用 Milvus 高效存储和检索文档嵌入。
* **多语言嵌入模型**：集成 BAAI/bge-m3 model，为泰语文本生成高质量嵌入。
* **高级检索**：采用两阶段检索流程，先进行向量搜索，再进行重排序，以提升准确度。
* **大语言模型集成**：与 vLLM 无缝集成，基于检索到的上下文生成拟人化的回答。
* **RESTful API**：提供基于 Flask 的 Web API，便于集成到各类应用中。

## 核心功能

1. **文档索引**：允许用户为泰语文档建立索引，生成并存储嵌入以实现高效检索。
2. **查询处理**：通过查找相关文档并生成贴合上下文的回答来处理用户提问。
3. **文档管理**：提供用于列出和删除已索引文档的接口。

OpenThaiRAG 旨在提升泰语应用中的自然语言理解与生成能力，成为开发聊天机器人、问答系统以及其他专注于泰语处理的 NLP 项目的开发者的重要工具。

<figure><img src="/img/image-31.png" alt=""><figcaption></figcaption></figure>

## 安装

使用 Docker Compose 安装并运行 OpenThaiRAG，请按以下步骤操作：

1. 确保你的系统已安装 Docker 和 Docker Compose。
2.  克隆 OpenThaiRAG 代码仓库：

    ```
    git clone https://github.com/OpenThaiGPT/openthairag
    cd openthairag
    ```
3.  使用 Docker Compose 构建并启动容器：

    ```
    docker-compose up -d
    ```

    该命令将会：

    * 构建 Web 服务容器
    * 启动 Milvus standalone 服务器
    * 启动 etcd 服务
    * 启动 MinIO 服务
    * 按照 docker-compose.yml 文件中的定义将所有服务连接起来
4. 所有容器启动并运行后，OpenThaiRAG API 将可通过 `http://localhost:5000` 访问。
5.  停止服务，请运行：

    ```
    docker-compose down
    ```

注意：请确保宿主机上的 5000 端口可用，因为它用于暴露 Web 服务。同时请确认磁盘空间足够，以容纳 Milvus、etcd 和 MinIO 的数据卷。

对于生产环境部署，建议根据具体需求调整 docker-compose.yml 文件中的环境变量和安全设置。

## 容器

OpenThaiRAG 使用多个容器来实现其功能。以下是各个容器的角色与用途说明：

1. **web**：
   * 角色：主应用容器
   * 用途：承载提供 OpenThaiRAG RESTful API 的 Flask Web 服务。负责文档索引、查询处理以及与其他服务的交互。
2. **milvus**：
   * 角色：向量数据库
   * 用途：存储和管理文档嵌入，以实现高效的相似度搜索。它是 RAG 系统检索环节的关键组件。
3. **etcd**：
   * 角色：分布式键值存储
   * 用途：供 Milvus 用于元数据存储和集群协调。它确保数据一致性，并帮助管理 Milvus 的分布式特性。
4. **minio**：
   * 角色：对象存储
   * 用途：为 Milvus 提供兼容 S3 的对象存储，用于存储 Milvus 生态中的大型对象和文件。

这些容器协同工作，为 OpenThaiRAG 系统构建了健壮且可扩展的基础设施：

* web 容器与 Milvus 交互以执行向量操作。
* Milvus 使用 etcd 进行元数据管理，使用 MinIO 进行对象存储。
* 该架构支持高效的文档嵌入存储、检索与查询处理，这些正是 OpenThaiRAG 的 RAG（检索增强生成）功能所必需的。

## 将新文档索引到 RAG

要将新文档插入 RAG 系统，可以使用 `app` 目录中提供的 `index_docs.py` 脚本。该脚本会读取 `/docs` 文件夹中的文本文件，并通过 API 为其内容建立索引。使用方法如下：

1. 准备你的文档：
   * 创建包含待索引内容的文本文件（.txt）。
   * 将这些文件放入项目的 `/docs` 目录中。
2.  运行索引脚本：

    ```
    python app/index_docs.py
    ```

    该脚本将会：

    * 读取 `/docs` 目录中所有 .txt 文件。
    * 将每个文档切分为最多 200 个字符的分块，并在每个分块中包含标题。
    * 将每个分块发送到索引接口（默认为 http://localhost:5000/index）。
3. 监控索引过程：
   * 脚本会记录每个已索引文件的相关信息。
   * 结束时，它会报告成功索引的文件总数，以及未能索引的文件。

你也可以通过修改 `index_docs.py` 脚本来自定义索引流程。例如，你可以更改分块大小、调整索引接口 URL，或添加额外的预处理步骤。

注意：在运行索引脚本之前，请确保 OpenThaiRAG API 已经运行，并且可通过指定的 URL 访问。

如需更精细的控制，或以编程方式索引文档，你可以直接使用 `/index` 接口：

## 示例文档 TXT 文件

```txt
Title: วัดธาตุทอง (Wat That Thong)
Content: วัดธาตุทอง พระอารามหลวง ตั้งเมื่อปีพุทธศักราช ๒๔๘๑ และได้รับพระราชทานวิสุงคามสีมา เมื่อวันที่ ๒๔ ตุลาคม พุทธศักราช ๒๔๘๓(เขตวิสุงคามสีมา กว้าง ๔๐ เมตร ยาว ๘๐ เมตร) ผูกพัทธสีมา ฝังลูกนิมิตอุโบสถ เมื่อวันที่ ๒ ๘ กุมภาพันธ์ พุทธศักราช ๒๕๐๕ มีเนื้อที่ ๕๔ ไร่ ๓ งาน ๘๒ ตาราง(เลขที่ ๑๔๙ โฉนดที่ ๔๐๓๗)

ทิศเหนือ ติดกับที่ดินและบ้านเรือนประชาชน(ซอยชัยพฤกษ์)

ทิศใต้ ติดกับถนนสุขุมวิท

ทิศตะวันออก ติดกับที่ดินและบ้านเรือนประชาชน(ซอยเอกมัย)

วัดธาตุทองฯ แท้จริงแล้วมีประวัติความเป็นมายาวนาน ย้อนกลับไปถึงยุคสมัยสุโขทัยเป็นราชธานี ก่อนจะมาตั้งอยู่บนนถนนสุขุมวิทในปัจจุบัน

Nearby Location: ตั้งอยู่ริมถนนสุขุมวิท แขวงพระโขนงเหนือ เขตวัฒนา
Address: 1325
Region: ภาคกลาง
Alley: 
Road: สุขุมวิท
Subdistrict: 
District: วัฒนา
Province: กรุงเทพมหานคร
Category: แหล่งท่องเที่ยวทางประวัติศาสตร์ และวัฒนธรรม
Sub Type: ศาสนสถาน (วัด/โบสถ์/มัสยิด ฯลฯ)
Facilities Contact: 
Telephone: 0 2390 0261, 0 2391 1007
Email: 
Website: 
Facebook: 
Instagram: 
Line: 
TikTok: 
YouTube: 
Start-End: 05.30 21.00น.
Activity: 
Suitable Duration: 
Fee (TH): 
Fee (TH Kid): 
Fee (EN): 
Fee (EN Kid): 
Remark: 
Location: 13.7194087, 100.5857861
UUID: 1ed676ed-4161-40f6-9e3d-12f4db53851d
Created Date: 2024-09-23
Updated Date: 2024-09-23
URL: 
Published Date: 
```

你可以在 `/docs` 中查看更多示例。

## 获取 RAG 的回答

要从 RAG 系统获取回答，可以使用 `/completions` 接口。该接口接受 POST 请求，请求体为包含用户查询和可选参数的 JSON 负载。

以下是 `/completions` 接口支持的查询参数列表：

1. `prompt`（必填）：用于生成补全内容的输入文本。
2. `max_tokens`（可选）：生成的最大 token 数量。默认为 16。
3. `temperature`（可选）：控制生成的随机性。较高的值（如 0.8）会使输出更随机，较低的值（如 0.2）会使输出更集中。默认为 1.0。
4. `top_p`（可选）：temperature 的替代方案，称为核采样（nucleus sampling）。可防止模型考虑不太可能的选项。默认为 1.0。
5. `n`（可选）：为每个 prompt 生成多少个补全结果。默认为 1。
6. `stream`（可选）：是否以流式方式返回部分生成进度。默认为 false。
7. `logprobs`（可选）：返回最可能的 `logprobs` 个 token 的对数概率。默认为 null。
8. `echo`（可选）：在补全结果之外同时回显 prompt。默认为 false。
9. `stop`（可选）：最多 4 个序列，API 遇到时将停止继续生成 token。
10. `presence_penalty`（可选）：介于 -2.0 与 2.0 之间的数值。正值会根据新 token 是否已出现在当前文本中对其进行惩罚。默认为 0。
11. `frequency_penalty`（可选）：介于 -2.0 与 2.0 之间的数值。正值会根据新 token 在当前文本中已出现的频率对其进行惩罚。默认为 0。
12. `best_of`（可选）：在服务端生成 best\_of 个补全结果，并返回“最佳”的一个（即每个 token 对数概率最高的那个）。默认为 1。
13. `logit_bias`（可选）：调整指定 token 出现在补全结果中的概率。
14. `user`（可选）：代表你的终端用户的唯一标识符，可帮助 OpenAI 监控和检测滥用行为。

注意：某些参数可能并不适用，具体取决于你的 OpenThaiRAG 部署所使用的模型和配置。

### 通过 API：非流式

```bash
>>>Request
curl --location 'http://localhost:5000/completions' \
--header 'Content-Type: application/json' \
--data '{
    "prompt": "วัดพระแก้ว กทม. คืออะไร",
    "max_tokens": 2048,
    "temperature": 0.7
}'

<<<Response
{
    "choices": [
        {
            "finish_reason": "stop",
            "index": 0,
            "logprobs": null,
            "prompt_logprobs": null,
            "stop_reason": null,
            "text": "วัดพระแก้ว (Wat Phra Kaeo) ตั้งอยู่ในจังหวัดชัยนาท สร้างในสมัยเดียวกับวัดมหาธาตุ ตั้งแต่ปี พ.ศ. 1900 วัดพระแก้วมีเจดีย์ทรงสูง ลักษณะเป็นเจดีย์แบบละโว้ผสมกับเจดีย์ทวารวดีตอนปลาย สร้างแบบสอปูน เป็นเจดีย์ฐานสี่เหลี่ยม มีพระพุทธรูปปั้นแบบนูนสูงประดับทั้งสี่ด้าน วัดพระแก้วมีพระสถูป เจดีย์ และพระพุทธรูปศิลาแลงสีแดง คือ หลวงพ่อทันใจ ที่อยู่ในวิหารด้านหน้าพระเจดีย์สี่เหลี่ยม วัดพระแก้วตั้งอยู่นอกเมืองทางด้านทิศใต้ ห่างจากวัดมหาธาตุประมาณ 3 กม. ปัจจุบันวัดพระแก้วอยู่กลางทุ่งนา มีพระเจดีย์เหลี่ยมเป็นหลักของวัด วัดพระแก้วเป็นโบราณสถานที่มีความสำคัญทางประวัติศาสตร์และศิลปะ ซึ่งได้รับการขึ้นทะเบียนเป็นโบราณสถานโดยกรมศิลปากรเมื่อวันที่ 8 มีนาคม 2478."
        }
    ],
    "created": 1728035246,
    "id": "cmpl-e0e5752f01e34d2bb701f86fad3b4954",
    "model": ".",
    "object": "text_completion",
    "usage": {
        "completion_tokens": 386,
        "prompt_tokens": 4946,
        "total_tokens": 5332
    }
}
```

### 通过 API：流式

```bash
>>>Request
curl --location 'http://localhost:5000/completions' \
--header 'Content-Type: application/json' \
--data '{
    "prompt": "วัดพระแก้ว กทม. คืออะไร",
    "max_tokens": 2048,
    "temperature": 0.7,
    "stream": true
}'

<<<Response
data: {"id":"cmpl-8dbd8bdfbcfb4310bf611cd6f6f7c2e4","object":"text_completion","created":1728035332,"model":".","choices":[{"index":0,"text":"","logprobs":null,"finish_reason":null,"stop_reason":null}],"usage":null}

...

data: {"id":"cmpl-8dbd8bdfbcfb4310bf611cd6f6f7c2e4","object":"text_completion","created":1728035332,"model":".","choices":[{"index":0,"text":"ื","logprobs":null,"finish_reason":null,"stop_reason":null}],"usage":null}

data: {"id":"cmpl-8dbd8bdfbcfb4310bf611cd6f6f7c2e4","object":"text_completion","created":1728035332,"model":".","choices":[{"index":0,"text":"องชัยนาท.","logprobs":null,"finish_reason":"stop","stop_reason":null}],"usage":null}

data: [DONE]
```

### 通过 OpenAI 库

你可以参考 `/app/query_rag_using_openai.py`。若要使用 OpenAI 库获取 RAG 回答，可按以下步骤操作：

1.  安装 OpenAI 库：

    ```
    pip install openai==0.28
    ```
2.  配置 OpenAI 客户端以使用 vLLM 服务器：

    ```python
    import openai

    openai.api_base = "http://127.0.0.1:5000"
    openai.api_key = "dummy"  # vLLM doesn't require a real API key
    ```
3.  定义你的 prompt：

    ```python
    prompt = "วัดพระแก้ว กทม. เดินทางไปอย่างไร"
    ```
4.  获取非流式回答：

    ```python
    def response(prompt):
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

    # Example usage
    print("Non-streaming response:")
    response(prompt)
    ```
5.  获取流式回答：

    ```python
    def stream_response(prompt):
        try:
            response = openai.Completion.create(
                model=".",  # Specify the model you're using with vLLM
                prompt=prompt,
                max_tokens=512,
                temperature=0.7,
                top_p=0.8,
                top_k=40,
                stop=["<|im_end|>"],
                stream=True  # Enable streaming
            )
            
            for chunk in response:
                if chunk.choices[0].text:
                    print(chunk.choices[0].text, end='', flush=True)
            print()  # Print a newline at the end
        except Exception as e:
            print("Error:", str(e))

    # Example usage
    print("Streaming response:")
    stream_response(prompt)
    ```

你可以在 `/app/query_rag_using_openai.py` 文件中找到完整示例。

## 完整 API 文档

如需详细的 API 文档和示例，请参阅我们的 Postman 集合：[OpenThaiRAG API Postman Collection](https://universal-capsule-630444.postman.co/workspace/Travel-LLM~43ad4794-de74-4579-bf8f-24dbe26da1e5/collection/5145656-81239b64-fc7e-4f61-acfd-8e5916e037ce?action=share\&creator=5145656)

## 维护者

**OpenThaiGPT Team**

* Kobkrit Viriyayudhakorn (kobkrit@aieat.or.th)
* Sumeth Yuenyong (sumeth.yue@mahidol.edu)
* Apivadee Piyatumrong (apivadee.piy@nectec.or.th)
* Jillaphat Jaroenkantasima (autsadang41@gmail.com)

## 许可证

Apache 2.0
