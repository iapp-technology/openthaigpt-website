---
title: 'OpenThaiGPT Version 1.0'
slug: '/previous-versions-and-resources/openthaigpt-version-1.0'
description: 'เทคโนโลยีทางภาษาแบบ ChatGPT (Large Language Model) พัฒนาเพื่อคนไทยทุกคน'
---

# OpenThaiGPT Version 1.0

<figure><img src="/img/openthaigpt-1.0.0-full.png" alt=""><figcaption></figcaption></figure>

🇹🇭 **OpenThaiGPT เวอร์ชัน 1.0.0** เป็นโมเดลแชทภาษาไทยขนาดใหญ่ขนาด 7, 13 และ 70 พันล้านพารามิเตอร์ ซึ่งพัฒนาต่อยอดจาก Facebook LLaMA v2 ให้มีความสามารถในการเข้าใจและเขียนภาษาไทยได้ เปิดโค้ดและโมเดลอย่างเสรี (Opensource) ให้ทุกคนสามารถนำไปพัฒนาต่อยอดหรือแม้กระทั่งการทำการค้าได้ (Apache 2.0 License) เพื่อเป็น Infrastructure พื้นฐานด้านปัญญาประดิษฐ์สำหรับคนไทยทุกคน

รายละเอียดเพิ่มเติมอ่านต่อได้ที่ [openthaigpt-1.0.0-less-than-8-apr-2024-greater-than.md](../openthaigpt-1.0.0-less-than-8-apr-2024-greater-than.md "mention")

### ดาวน์โหลดโมเดล

* 7b - [https://huggingface.co/openthaigpt/openthaigpt-1.0.0-7b-chat](https://huggingface.co/openthaigpt/openthaigpt-1.0.0-7b-chat)
* 7b (GGUF) - [https://huggingface.co/openthaigpt/openthaigpt-1.0.0-7b-chat-gguf](https://huggingface.co/openthaigpt/openthaigpt-1.0.0-7b-chat-gguf)
* 13b - [https://huggingface.co/openthaigpt/openthaigpt-1.0.0-13b-chat](https://huggingface.co/openthaigpt/openthaigpt-1.0.0-13b-chat)
* 70b - [https://huggingface.co/openthaigpt/openthaigpt-1.0.0-70b-chat](https://huggingface.co/openthaigpt/openthaigpt-1.0.0-70b-chat)

### Model Pipeline

สามารถโหลดโมเดล และใช้งานโมเดลได้ผ่าน google colab

[https://colab.research.google.com/drive/1w1giDWhmq3WIUCK4AISFJtGIqiPDtRSC?usp=sharing](https://colab.research.google.com/drive/1w1giDWhmq3WIUCK4AISFJtGIqiPDtRSC?usp=sharing)

### จุดเด่น

* **โมเดลภาษาไทย LLM แบบเปิดที่ทันสมัยที่สุด**, ทำคะแนนสอบภาษาไทยได้เฉลี่ยสูงสุดเมื่อเทียบกับโมเดลภาษาไทยแบบเปิดอื่นๆ
* เป็นโมเดลเปิดภาษาไทยที่มีขนาดใหญ่ถึง 70 พันล้านพารามิเตอร์โมเดลแรกของโลก
* **รองรับการสนทนาโต้ตอบหลายครั้งแบบต่อเนื่อง  (Multi-turn Conversation)**
* **โมเดลมีความสามารถในการค้นหาข้อมูลและสกัดคำตอบบน Prompt ที่มีความยาวได้อย่างมีประสิทธิภาพ (เหมาะสมกับการ RAG เป็นอย่างมาก)**
* **ความเร็วในการตอบคำถามรวดเร็ว** ด้วยการเพิ่มคำภาษาไทยที่พบบ่อยมากถึง 10,000 คำลงในพจนานุกรมของโมเดล
* เรียนรู้บนข้อมูล**ภาษาไทย (Pretraining) กว่า 65 พันล้านคำ มีการกำจัดข้อมูลภาษาไทยซ้ำซ้อนที่ใช้ในเรียนรู้ (Deduplicated Dataset)** และปรับจูนให้ตอบคำถามทั่วไปภาษาไทย (Finetuning) บนมากกว่า 1 ล้านตัวอย่าง
* สามารถเข้าใจและประมวลผล **บริบทของข้อมูลภาษาไทยได้ถึง 4096 คำ**, ช่วยให้สามารถให้คำแนะนำที่ละเอียดและซับซ้อนได้

### ความสามารถด้านภาษาไทย (วัดโดยการทำข้อสอบภาษาไทยด้านความรู้ต่างๆ)

<table><thead><tr><th width="187">Exams</th><th>OTG 7b (Aug 2023)</th><th>OTG 13b (Dec 2023)</th><th>OTG 7b (April 2024)</th><th>OTG 13b (April 2024)</th><th>OTG 70b (April 2024)</th><th>SeaLLM 7b v1</th><th>SeaLLM 7b v2</th><th>SeaLion 7b</th><th>WanchanGLM 7b</th><th>Sailor-7b-Chat</th><th>TyphoonGPT 7b Instruct</th><th>GPT3.5</th><th>GPT4</th><th>Gemini Pro</th><th>Gemini 1.5</th><th>Claude 3 Haiku</th><th>Claude 3 Sonnet</th><th>Claude 3 Opus</th></tr></thead><tbody><tr><td><strong>A-Level</strong></td><td>17.50%</td><td>34.17%</td><td>25.00%</td><td>30.83%</td><td>45.83%</td><td>18.33%</td><td>34.17%</td><td>21.67%</td><td>17.50%</td><td>40.00%</td><td>37.50%</td><td>38.33%</td><td>65.83%</td><td>56.67%</td><td>55.83%</td><td>58.33%</td><td>59.17%</td><td>77.50%</td></tr><tr><td><strong>TGAT</strong></td><td>24.00%</td><td>22.00%</td><td>22.00%</td><td>36.00%</td><td>36.00%</td><td>14.00%</td><td>28.00%</td><td>24.00%</td><td>16.00%</td><td>34.00%</td><td>30.00%</td><td>28.00%</td><td>44.00%</td><td>22.00%</td><td>28.00%</td><td>36.00%</td><td>34.00%</td><td>46.00%</td></tr><tr><td><strong>TPAT1</strong></td><td>22.50%</td><td>47.50%</td><td>42.50%</td><td>27.50%</td><td>62.50%</td><td>22.50%</td><td>27.50%</td><td>22.50%</td><td>17.50%</td><td>40.00%</td><td>47.50%</td><td>45.00%</td><td>52.50%</td><td>52.50%</td><td>50.00%</td><td>52.50%</td><td>50.00%</td><td>62.50%</td></tr><tr><td><strong>thai_investment_consultant_exams</strong></td><td>8.00%</td><td>28.00%</td><td>76.00%</td><td>84.00%</td><td>68.00%</td><td>16.00%</td><td>28.00%</td><td>24.00%</td><td>16.00%</td><td>24.00%</td><td>32.00%</td><td>40.00%</td><td>64.00%</td><td>52.00%</td><td>32.00%</td><td>44.00%</td><td>64.00%</td><td>72.00%</td></tr><tr><td><strong>facebook_beleble_tha_200</strong></td><td>25.00%</td><td>45.00%</td><td>34.50%</td><td>39.50%</td><td>70.00%</td><td>13.50%</td><td>51.00%</td><td>27.00%</td><td>24.50%</td><td>63.00%</td><td>51.50%</td><td>50.00%</td><td>72.50%</td><td>65.00%</td><td>74.00%</td><td>63.50%</td><td>77.00%</td><td>90.00%</td></tr><tr><td><strong>xcopa_th_200</strong></td><td>45.00%</td><td>56.50%</td><td>49.50%</td><td>51.50%</td><td>74.50%</td><td>26.50%</td><td>47.00%</td><td>51.50%</td><td>48.50%</td><td>68.50%</td><td>65.00%</td><td>64.00%</td><td>82.00%</td><td>68.00%</td><td>74.00%</td><td>64.00%</td><td>80.00%</td><td>86.00%</td></tr><tr><td><strong>xnli2.0_th_200</strong></td><td>33.50%</td><td>34.50%</td><td>39.50%</td><td>31.00%</td><td>47.00%</td><td>21.00%</td><td>43.00%</td><td>37.50%</td><td>33.50%</td><td>16.00%</td><td>20.00%</td><td>50.00%</td><td>69.00%</td><td>53.00%</td><td>54.50%</td><td>50.00%</td><td>68.00%</td><td>68.50%</td></tr><tr><td><strong>ONET M3</strong></td><td>17.85%</td><td>38.86%</td><td>34.11%</td><td>39.36%</td><td>56.15%</td><td>15.58%</td><td>23.92%</td><td>21.79%</td><td>19.56%</td><td>21.37%</td><td>28.03%</td><td>37.91%</td><td>49.97%</td><td>55.99%</td><td>57.41%</td><td>52.73%</td><td>40.60%</td><td>63.87%</td></tr><tr><td><strong>ONET M6</strong></td><td>21.14%</td><td>28.87%</td><td>22.53%</td><td>23.32%</td><td>42.85%</td><td>15.09%</td><td>19.48%</td><td>16.96%</td><td>20.67%</td><td>28.64%</td><td>27.46%</td><td>34.44%</td><td>46.29%</td><td>45.53%</td><td>50.23%</td><td>34.79%</td><td>38.49%</td><td>48.56%</td></tr><tr><td><mark style="color:blue;"><strong>AVERAGE SCORE</strong></mark></td><td>23.83%</td><td>37.27%</td><td><mark style="color:blue;"><strong>38.40%</strong></mark></td><td><mark style="color:blue;"><strong>40.33%</strong></mark></td><td><mark style="color:blue;"><strong>55.87%</strong></mark></td><td>18.06%</td><td>33.56%</td><td>27.44%</td><td>23.75%</td><td>37.28%</td><td>37.67%</td><td>43.07%</td><td>60.68%</td><td>52.30%</td><td>52.89%</td><td>50.65%</td><td>56.81%</td><td>68.32%</td></tr></tbody></table>

การทดสอบด้วยการทำข้อสอบแบบ Multiple Choice ภาษาไทย ทดสอบบนชุดข้อสอบที่ไม่เคยเห็นมาก่อน ทดสอบแบบ Zero-shot Learning, โค้ดการทดสอบและเนื้อหาข้อสอบสามารถทำตามได้ที่นี่ >> [https://github.com/OpenThaiGPT/openthaigpt\_eval](https://github.com/OpenThaiGPT/openthaigpt_eval)

### Licenses

**Source Code**: License Apache Software License 2.0.\
**Weight**: Research and **Commercial uses**.

### Sponsors

<figure><img src="https://cdn-uploads.huggingface.co/production/uploads/5fcd9c426d942eaf4d1ebd30/FDC9WYN2iykQbVW1rY4q5.png" alt=""><figcaption></figcaption></figure>

