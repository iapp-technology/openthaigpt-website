---
title: 'OpenThaiGPT 版本 1.0'
slug: '/previous-versions-and-resources/openthaigpt-version-1.0'
description: '类 ChatGPT 的语言技术（大语言模型），为全体泰国人而开发'
---
# OpenThaiGPT 版本 1.0

<figure><img src="/img/openthaigpt-1.0.0-full.png" alt=""><figcaption></figcaption></figure>

🇹🇭 **OpenThaiGPT 版本 1.0.0** 是参数规模分别为 70 亿、130 亿和 700 亿的泰语大型对话模型，在 Facebook LLaMA v2 的基础上进一步开发，使其具备理解和撰写泰语的能力。代码与模型均以开源方式自由发布（Apache 2.0 License），任何人都可以在其基础上继续开发，甚至用于商业用途，从而成为面向全体泰国人的人工智能基础设施。

更多详情请参阅 [OpenThaiGPT 1.0.0 (8 Apr 2024)](../openthaigpt-1.0.0-less-than-8-apr-2024-greater-than.md)

## 下载模型

* 7b - [openthaigpt/openthaigpt-1.0.0-7b-chat](https://huggingface.co/openthaigpt/openthaigpt-1.0.0-7b-chat)
* 7b (GGUF) - [openthaigpt/openthaigpt-1.0.0-7b-chat-gguf](https://huggingface.co/openthaigpt/openthaigpt-1.0.0-7b-chat-gguf)
* 13b - [openthaigpt/openthaigpt-1.0.0-13b-chat](https://huggingface.co/openthaigpt/openthaigpt-1.0.0-13b-chat)
* 70b - [openthaigpt/openthaigpt-1.0.0-70b-chat](https://huggingface.co/openthaigpt/openthaigpt-1.0.0-70b-chat)

## Model Pipeline

可以通过 Google Colab 下载并使用该模型。

<a class="link-card" href="https://colab.research.google.com/drive/1w1giDWhmq3WIUCK4AISFJtGIqiPDtRSC?usp=sharing" target="_blank" rel="noopener noreferrer"><span class="link-card-title">OpenThaiGPT 1.0.0 Model Pipeline — 在 Google Colab 中打开</span><span class="link-card-domain">colab.research.google.com</span></a>

## 主要亮点

* **最先进的开源泰语大语言模型**，与其他开源泰语模型相比，在泰语考试中取得最高的平均分
* 全球首个参数规模高达 700 亿的开源泰语模型
* **支持连续多轮对话（Multi-turn Conversation）**
* **模型能够在长提示词中高效检索信息并抽取答案（非常适合用于 RAG）**
* **回答速度快**，得益于在模型词表中新增了多达 10,000 个常用泰语词
* 在**超过 650 亿词的泰语数据上进行预训练，并对训练所用的重复泰语数据进行了去重处理（Deduplicated Dataset）**，同时在超过 100 万条样本上进行微调，以回答各类泰语通用问题
* 能够理解和处理**长达 4096 词的泰语上下文**，从而给出细致而复杂的建议

## 泰语能力（通过参加各类知识领域的泰语考试进行测评）

<table><thead><tr><th width="187">Exams</th><th>OTG 7b (Aug 2023)</th><th>OTG 13b (Dec 2023)</th><th>OTG 7b (April 2024)</th><th>OTG 13b (April 2024)</th><th>OTG 70b (April 2024)</th><th>SeaLLM 7b v1</th><th>SeaLLM 7b v2</th><th>SeaLion 7b</th><th>WanchanGLM 7b</th><th>Sailor-7b-Chat</th><th>TyphoonGPT 7b Instruct</th><th>GPT3.5</th><th>GPT4</th><th>Gemini Pro</th><th>Gemini 1.5</th><th>Claude 3 Haiku</th><th>Claude 3 Sonnet</th><th>Claude 3 Opus</th></tr></thead><tbody><tr><td><strong>A-Level</strong></td><td>17.50%</td><td>34.17%</td><td>25.00%</td><td>30.83%</td><td>45.83%</td><td>18.33%</td><td>34.17%</td><td>21.67%</td><td>17.50%</td><td>40.00%</td><td>37.50%</td><td>38.33%</td><td>65.83%</td><td>56.67%</td><td>55.83%</td><td>58.33%</td><td>59.17%</td><td>77.50%</td></tr><tr><td><strong>TGAT</strong></td><td>24.00%</td><td>22.00%</td><td>22.00%</td><td>36.00%</td><td>36.00%</td><td>14.00%</td><td>28.00%</td><td>24.00%</td><td>16.00%</td><td>34.00%</td><td>30.00%</td><td>28.00%</td><td>44.00%</td><td>22.00%</td><td>28.00%</td><td>36.00%</td><td>34.00%</td><td>46.00%</td></tr><tr><td><strong>TPAT1</strong></td><td>22.50%</td><td>47.50%</td><td>42.50%</td><td>27.50%</td><td>62.50%</td><td>22.50%</td><td>27.50%</td><td>22.50%</td><td>17.50%</td><td>40.00%</td><td>47.50%</td><td>45.00%</td><td>52.50%</td><td>52.50%</td><td>50.00%</td><td>52.50%</td><td>50.00%</td><td>62.50%</td></tr><tr><td><strong>thai_investment_consultant_exams</strong></td><td>8.00%</td><td>28.00%</td><td>76.00%</td><td>84.00%</td><td>68.00%</td><td>16.00%</td><td>28.00%</td><td>24.00%</td><td>16.00%</td><td>24.00%</td><td>32.00%</td><td>40.00%</td><td>64.00%</td><td>52.00%</td><td>32.00%</td><td>44.00%</td><td>64.00%</td><td>72.00%</td></tr><tr><td><strong>facebook_beleble_tha_200</strong></td><td>25.00%</td><td>45.00%</td><td>34.50%</td><td>39.50%</td><td>70.00%</td><td>13.50%</td><td>51.00%</td><td>27.00%</td><td>24.50%</td><td>63.00%</td><td>51.50%</td><td>50.00%</td><td>72.50%</td><td>65.00%</td><td>74.00%</td><td>63.50%</td><td>77.00%</td><td>90.00%</td></tr><tr><td><strong>xcopa_th_200</strong></td><td>45.00%</td><td>56.50%</td><td>49.50%</td><td>51.50%</td><td>74.50%</td><td>26.50%</td><td>47.00%</td><td>51.50%</td><td>48.50%</td><td>68.50%</td><td>65.00%</td><td>64.00%</td><td>82.00%</td><td>68.00%</td><td>74.00%</td><td>64.00%</td><td>80.00%</td><td>86.00%</td></tr><tr><td><strong>xnli2.0_th_200</strong></td><td>33.50%</td><td>34.50%</td><td>39.50%</td><td>31.00%</td><td>47.00%</td><td>21.00%</td><td>43.00%</td><td>37.50%</td><td>33.50%</td><td>16.00%</td><td>20.00%</td><td>50.00%</td><td>69.00%</td><td>53.00%</td><td>54.50%</td><td>50.00%</td><td>68.00%</td><td>68.50%</td></tr><tr><td><strong>ONET M3</strong></td><td>17.85%</td><td>38.86%</td><td>34.11%</td><td>39.36%</td><td>56.15%</td><td>15.58%</td><td>23.92%</td><td>21.79%</td><td>19.56%</td><td>21.37%</td><td>28.03%</td><td>37.91%</td><td>49.97%</td><td>55.99%</td><td>57.41%</td><td>52.73%</td><td>40.60%</td><td>63.87%</td></tr><tr><td><strong>ONET M6</strong></td><td>21.14%</td><td>28.87%</td><td>22.53%</td><td>23.32%</td><td>42.85%</td><td>15.09%</td><td>19.48%</td><td>16.96%</td><td>20.67%</td><td>28.64%</td><td>27.46%</td><td>34.44%</td><td>46.29%</td><td>45.53%</td><td>50.23%</td><td>34.79%</td><td>38.49%</td><td>48.56%</td></tr><tr><td><mark style="color:blue;"><strong>AVERAGE SCORE</strong></mark></td><td>23.83%</td><td>37.27%</td><td><mark style="color:blue;"><strong>38.40%</strong></mark></td><td><mark style="color:blue;"><strong>40.33%</strong></mark></td><td><mark style="color:blue;"><strong>55.87%</strong></mark></td><td>18.06%</td><td>33.56%</td><td>27.44%</td><td>23.75%</td><td>37.28%</td><td>37.67%</td><td>43.07%</td><td>60.68%</td><td>52.30%</td><td>52.89%</td><td>50.65%</td><td>56.81%</td><td>68.32%</td></tr></tbody></table>

本次测评采用泰语选择题考试的形式，在模型此前从未见过的试题集上进行零样本学习（Zero-shot Learning）测试。测评代码与试题内容可在 [GitHub 上的 OpenThaiGPT/openthaigpt\_eval](https://github.com/OpenThaiGPT/openthaigpt_eval) 查阅并复现

## Licenses

* **源代码**：License Apache Software License 2.0.
* **权重**：可用于研究及**商业用途**。

## 赞助方

<figure><img src="https://cdn-uploads.huggingface.co/production/uploads/5fcd9c426d942eaf4d1ebd30/FDC9WYN2iykQbVW1rY4q5.png" alt=""><figcaption></figcaption></figure>
