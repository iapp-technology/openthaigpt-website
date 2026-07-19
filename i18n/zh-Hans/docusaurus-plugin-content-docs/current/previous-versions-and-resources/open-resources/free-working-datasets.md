---
title: '免费可用数据集'
slug: '/previous-versions-and-resources/open-resources/free-working-datasets'
description: '可用于训练 OpenThaiGPT 的开放数据集，涵盖预训练语料库、泰语问答与摘要数据集，以及不良评论语料库。'
---

# 🆕 免费可用数据集

## 预训练

OSCAR，即 **O**pen **S**uper-large **C**rawled [**A**LMAnaCH](https://team.inria.fr/almanach/) co**R**pus，是一个大规模多语言语料库，通过 [goclassy](https://github.com/pjox/goclassy) 架构对 [Common Crawl](https://commoncrawl.org/) 语料库进行语言分类和过滤后得到。数据按语言分发，同时提供原始版本和去重版本。

<a class="link-card" href="https://huggingface.co/datasets/oscar" target="_blank" rel="noopener noreferrer"><span class="link-card-title">Hugging Face 上的 OSCAR 多语言语料库</span><span class="link-card-domain">huggingface.co</span></a>

Wikipedia 数据集包含所有语言经过清洗的百科文章。该数据集基于 [Wikipedia dump](https://dumps.wikimedia.org/) 构建，每种语言对应一个数据切分。每条样本包含一篇完整的维基百科文章内容，并已清洗去除 markdown 标记与无关章节（如参考文献等）。

<a class="link-card" href="https://huggingface.co/datasets/wikipedia" target="_blank" rel="noopener noreferrer"><span class="link-card-title">Hugging Face 上的 Wikipedia 数据集</span><span class="link-card-domain">huggingface.co</span></a>

## 微调

`iapp_wiki_qa_squad` 是一个基于泰语维基百科文章的抽取式问答数据集。它由 iApp Technology 将[原始的 iapp-wiki-qa-dataset](https://github.com/iapp-technology/iapp-wiki-qa-dataset) 转换为 [SQuAD](https://rajpurkar.github.io/SQuAD-explorer/) 格式而成，共包含来自 1529/191/192 篇文章的 5761/742/739 个问题。

<a class="link-card" href="https://huggingface.co/datasets/iapp_wiki_qa_squad" target="_blank" rel="noopener noreferrer"><span class="link-card-title">Hugging Face 上的 iapp_wiki_qa_squad 数据集</span><span class="link-card-domain">huggingface.co</span></a>

`thaiqa_squad` 是一个开放领域的抽取式问答数据集（`train` 中有 4,000 个问题，`dev` 中有 74 个问题），采用 [SQuAD](https://rajpurkar.github.io/SQuAD-explorer/) 格式。该数据集最初由 [NECTEC](https://www.nectec.or.th/en/) 基于维基百科文章创建，并由 [PyThaiNLP](https://github.com/PyThaiNLP/) 转换为 [SQuAD](https://rajpurkar.github.io/SQuAD-explorer/) 格式。

<a class="link-card" href="https://huggingface.co/datasets/thaiqa_squad" target="_blank" rel="noopener noreferrer"><span class="link-card-title">Hugging Face 上的 thaiqa_squad 数据集</span><span class="link-card-domain">huggingface.co</span></a>

ThaiSum 是一个大规模泰语文本摘要语料库，采集自 Thairath、ThaiPBS、Prachathai 和 The Standard 等多个在线新闻网站。该数据集包含超过 350,000 组由记者撰写的文章与摘要配对。

<a class="link-card" href="https://huggingface.co/datasets/thaisum" target="_blank" rel="noopener noreferrer"><span class="link-card-title">Hugging Face 上的 ThaiSum 摘要数据集</span><span class="link-card-domain">huggingface.co</span></a>

## 不良评论语料库

Thai UCC Corpus 由 PyThaiNLP Translator 与 Google Translator 从 [UCC（Unhealthy Comments Corpus）](https://github.com/conversationai/unhealthy-conversations)翻译而来。

<a class="link-card" href="https://huggingface.co/datasets/nakcnx/Thai-UCC" target="_blank" rel="noopener noreferrer"><span class="link-card-title">Hugging Face 上的 Thai-UCC 数据集</span><span class="link-card-domain">huggingface.co</span></a>
