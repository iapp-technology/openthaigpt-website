---
title: 'การช่วยกันสร้าง Dataset สนทนา Chat ภาษาไทย!'
slug: '/previous-versions-and-resources/dataset-chat'
description: 'เว็บไซต์ร่วมกันสร้าง Dataset สนทนา Chat ภาษาไทย เพื่อพัฒนา Thai InstructGPT และ Reward Model ของ OpenThaiGPT พร้อมคำถามที่พบบ่อย'
---
# 😍 การช่วยกันสร้าง Dataset สนทนา Chat ภาษาไทย!

## เว็บไซต์ที่ร่วมกันสร้าง Dataset สนทนา Chat ภาษาไทย

<a class="link-card" href="https://tag.openthaigpt.aieat.or.th" target="_blank" rel="noopener noreferrer"><span class="link-card-title">เว็บไซต์ร่วมสร้าง Dataset สนทนา Chat ภาษาไทย</span><span class="link-card-domain">tag.openthaigpt.aieat.or.th</span></a>

เพื่อให้ทีมงาน OpenThaiGPT ได้รับ Dataset สำหรับในการพัฒนา Thai InstructGPT และ Reward Model (RM) ให้ได้เร็วที่สุด ทางทีมงานเลยพัฒนาเว็บไซต์ที่ใช้ร่วมกันสร้าง Dataset นี้โดยทำการ Fork มาจาก Website [LAION-AI/Open-Assistant](https://github.com/LAION-AI/Open-Assistant) ที่เปิด Opensource ภายใต้อนุสัญญา Apache 2.0

## Q/A

**Q: ทำไมถึงเลือก Fork จากเว็บไซต์ของ Open Assistant และทำการ Host เอง ทำไมเราถึงไม่พัฒนาเอง หรือไม่ไปใช้ของ Open Assistant โดยตรงเลย?**

A: มีข้อดีหลายอย่างที่เลือกในการ Fork จากเว็บไซต์ Open Assistant

1. ไม่เสียเวลาในการพัฒนาเอง
2. ได้รับ Update แก้ไข Bug จากทาง Open Assistant อยู่เสมอ
3. ผู้พัฒนา OpenThaiGPT ได้รับ Dataset ดิบทันที เมื่อมีคนมาสร้าง Dataset บนเว็บไซต์ ไม่ต้องรอให้ทาง Open Assistant ปล่อยข้อมูล
4. สามารถนำ Dataset จาก OpenThaiGPT ส่งต่อให้ทาง Open Assistant ได้โดยง่าย เนื่องจากสร้างมาจากระบบเดียวกัน
5. ได้ Pipeline และ Guideline ในการจัดทำ Dataset ที่เป็นมาตรฐานระดับโลก
6. เนื่องจากว่าเรา Focus ภาษาไทยภาษาเดียว ทำให้เราสามารถปล่อย Dataset ได้ถี่ขึ้น (ทุกวันอาทิตย์ของสัปดาห์)
7. สามารถขยายต่อยอดในงาน Tag ข้อมูลอื่นๆ ที่ทาง OpenThaiGPT อาจจะต้องใช้ในอนาคต หรือสามารถแก้ไขปรับปรุงระบบให้สนับสนุนภาษาในภูมิภาค South-east Asia อื่นๆ อาทิเช่น CLMV ได้ไวกว่า

**Q: เว็บไซต์สร้าง Dataset ของ OpenThaiGPT เปิด Source code หรือไม่**

A: เราเปิด Source code เว็บไซต์สร้าง Dataset ของ OpenThaiGPT ภายใต้อนุสัญญา Apache 2.0 ที่ [OpenThaiGPT/Open-Assistant บน GitHub](https://github.com/OpenThaiGPT/Open-Assistant)
