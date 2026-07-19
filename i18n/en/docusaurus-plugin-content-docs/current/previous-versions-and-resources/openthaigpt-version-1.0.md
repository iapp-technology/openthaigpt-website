---
title: 'OpenThaiGPT Version 1.0'
slug: '/previous-versions-and-resources/openthaigpt-version-1.0'
description: 'ChatGPT-style language technology (Large Language Model) developed for all Thai people'
---
# OpenThaiGPT Version 1.0

<figure><img src="/img/openthaigpt-1.0.0-full.png" alt=""><figcaption></figcaption></figure>

🇹🇭 **OpenThaiGPT version 1.0.0** is a family of large Thai chat models with 7, 13 and 70 billion parameters, built on top of Facebook LLaMA v2 and extended with the ability to understand and write Thai. The code and the models are released as open source so that anyone can build on them or even use them commercially (Apache 2.0 License), forming a foundational artificial intelligence infrastructure for all Thai people.

For further details, see [OpenThaiGPT 1.0.0 (8 Apr 2024)](../openthaigpt-1.0.0-less-than-8-apr-2024-greater-than.md)

## Model Downloads

* 7b - [openthaigpt/openthaigpt-1.0.0-7b-chat](https://huggingface.co/openthaigpt/openthaigpt-1.0.0-7b-chat)
* 7b (GGUF) - [openthaigpt/openthaigpt-1.0.0-7b-chat-gguf](https://huggingface.co/openthaigpt/openthaigpt-1.0.0-7b-chat-gguf)
* 13b - [openthaigpt/openthaigpt-1.0.0-13b-chat](https://huggingface.co/openthaigpt/openthaigpt-1.0.0-13b-chat)
* 70b - [openthaigpt/openthaigpt-1.0.0-70b-chat](https://huggingface.co/openthaigpt/openthaigpt-1.0.0-70b-chat)

## Model Pipeline

The model can be downloaded and run through Google Colab.

<a class="link-card" href="https://colab.research.google.com/drive/1w1giDWhmq3WIUCK4AISFJtGIqiPDtRSC?usp=sharing" target="_blank" rel="noopener noreferrer"><span class="link-card-title">OpenThaiGPT 1.0.0 Model Pipeline — Open in Google Colab</span><span class="link-card-domain">colab.research.google.com</span></a>

## Highlights

* **The most advanced open Thai LLM**, achieving the highest average score on Thai examinations compared with other open Thai models
* The world's first open Thai model at a scale of 70 billion parameters
* **Supports continuous multi-turn conversation**
* **The model can efficiently search for information and extract answers from long prompts (making it very well suited to RAG)**
* **Fast response speed**, achieved by adding as many as 10,000 frequently used Thai words to the model's vocabulary
* Trained on over **65 billion words of Thai data (pretraining), with duplicate Thai training data removed (deduplicated dataset)**, and finetuned to answer general Thai questions on more than 1 million examples
* Able to understand and process **up to 4096 words of Thai context**, allowing it to give detailed and sophisticated advice

## Thai Language Capability (measured by taking Thai examinations across various knowledge areas)

<table><thead><tr><th width="187">Exams</th><th>OTG 7b (Aug 2023)</th><th>OTG 13b (Dec 2023)</th><th>OTG 7b (April 2024)</th><th>OTG 13b (April 2024)</th><th>OTG 70b (April 2024)</th><th>SeaLLM 7b v1</th><th>SeaLLM 7b v2</th><th>SeaLion 7b</th><th>WanchanGLM 7b</th><th>Sailor-7b-Chat</th><th>TyphoonGPT 7b Instruct</th><th>GPT3.5</th><th>GPT4</th><th>Gemini Pro</th><th>Gemini 1.5</th><th>Claude 3 Haiku</th><th>Claude 3 Sonnet</th><th>Claude 3 Opus</th></tr></thead><tbody><tr><td><strong>A-Level</strong></td><td>17.50%</td><td>34.17%</td><td>25.00%</td><td>30.83%</td><td>45.83%</td><td>18.33%</td><td>34.17%</td><td>21.67%</td><td>17.50%</td><td>40.00%</td><td>37.50%</td><td>38.33%</td><td>65.83%</td><td>56.67%</td><td>55.83%</td><td>58.33%</td><td>59.17%</td><td>77.50%</td></tr><tr><td><strong>TGAT</strong></td><td>24.00%</td><td>22.00%</td><td>22.00%</td><td>36.00%</td><td>36.00%</td><td>14.00%</td><td>28.00%</td><td>24.00%</td><td>16.00%</td><td>34.00%</td><td>30.00%</td><td>28.00%</td><td>44.00%</td><td>22.00%</td><td>28.00%</td><td>36.00%</td><td>34.00%</td><td>46.00%</td></tr><tr><td><strong>TPAT1</strong></td><td>22.50%</td><td>47.50%</td><td>42.50%</td><td>27.50%</td><td>62.50%</td><td>22.50%</td><td>27.50%</td><td>22.50%</td><td>17.50%</td><td>40.00%</td><td>47.50%</td><td>45.00%</td><td>52.50%</td><td>52.50%</td><td>50.00%</td><td>52.50%</td><td>50.00%</td><td>62.50%</td></tr><tr><td><strong>thai_investment_consultant_exams</strong></td><td>8.00%</td><td>28.00%</td><td>76.00%</td><td>84.00%</td><td>68.00%</td><td>16.00%</td><td>28.00%</td><td>24.00%</td><td>16.00%</td><td>24.00%</td><td>32.00%</td><td>40.00%</td><td>64.00%</td><td>52.00%</td><td>32.00%</td><td>44.00%</td><td>64.00%</td><td>72.00%</td></tr><tr><td><strong>facebook_beleble_tha_200</strong></td><td>25.00%</td><td>45.00%</td><td>34.50%</td><td>39.50%</td><td>70.00%</td><td>13.50%</td><td>51.00%</td><td>27.00%</td><td>24.50%</td><td>63.00%</td><td>51.50%</td><td>50.00%</td><td>72.50%</td><td>65.00%</td><td>74.00%</td><td>63.50%</td><td>77.00%</td><td>90.00%</td></tr><tr><td><strong>xcopa_th_200</strong></td><td>45.00%</td><td>56.50%</td><td>49.50%</td><td>51.50%</td><td>74.50%</td><td>26.50%</td><td>47.00%</td><td>51.50%</td><td>48.50%</td><td>68.50%</td><td>65.00%</td><td>64.00%</td><td>82.00%</td><td>68.00%</td><td>74.00%</td><td>64.00%</td><td>80.00%</td><td>86.00%</td></tr><tr><td><strong>xnli2.0_th_200</strong></td><td>33.50%</td><td>34.50%</td><td>39.50%</td><td>31.00%</td><td>47.00%</td><td>21.00%</td><td>43.00%</td><td>37.50%</td><td>33.50%</td><td>16.00%</td><td>20.00%</td><td>50.00%</td><td>69.00%</td><td>53.00%</td><td>54.50%</td><td>50.00%</td><td>68.00%</td><td>68.50%</td></tr><tr><td><strong>ONET M3</strong></td><td>17.85%</td><td>38.86%</td><td>34.11%</td><td>39.36%</td><td>56.15%</td><td>15.58%</td><td>23.92%</td><td>21.79%</td><td>19.56%</td><td>21.37%</td><td>28.03%</td><td>37.91%</td><td>49.97%</td><td>55.99%</td><td>57.41%</td><td>52.73%</td><td>40.60%</td><td>63.87%</td></tr><tr><td><strong>ONET M6</strong></td><td>21.14%</td><td>28.87%</td><td>22.53%</td><td>23.32%</td><td>42.85%</td><td>15.09%</td><td>19.48%</td><td>16.96%</td><td>20.67%</td><td>28.64%</td><td>27.46%</td><td>34.44%</td><td>46.29%</td><td>45.53%</td><td>50.23%</td><td>34.79%</td><td>38.49%</td><td>48.56%</td></tr><tr><td><mark style="color:blue;"><strong>AVERAGE SCORE</strong></mark></td><td>23.83%</td><td>37.27%</td><td><mark style="color:blue;"><strong>38.40%</strong></mark></td><td><mark style="color:blue;"><strong>40.33%</strong></mark></td><td><mark style="color:blue;"><strong>55.87%</strong></mark></td><td>18.06%</td><td>33.56%</td><td>27.44%</td><td>23.75%</td><td>37.28%</td><td>37.67%</td><td>43.07%</td><td>60.68%</td><td>52.30%</td><td>52.89%</td><td>50.65%</td><td>56.81%</td><td>68.32%</td></tr></tbody></table>

The evaluation was carried out with Thai multiple-choice examinations, tested on question sets the models had never seen before, using zero-shot learning. The evaluation code and the examination content can be followed at [OpenThaiGPT/openthaigpt\_eval on GitHub](https://github.com/OpenThaiGPT/openthaigpt_eval)

## Licenses

* **Source Code**: License Apache Software License 2.0.
* **Weight**: Research and **Commercial uses**.

## Sponsors

<figure><img src="https://cdn-uploads.huggingface.co/production/uploads/5fcd9c426d942eaf4d1ebd30/FDC9WYN2iykQbVW1rY4q5.png" alt=""><figcaption></figcaption></figure>
