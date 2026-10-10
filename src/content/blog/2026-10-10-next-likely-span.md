---
title: "模型在做什么：接下去最可能的下一段"
description: "一次模型调用给面前的文字接上最像的下一段，这一步并不打开冰箱，也不查资料库。 A model call appends a fitting next span to the text in front of it, without opening the fridge or a database."
pubDate: 2026-10-10
slug: 2026/10/10/next-likely-span
category: AI 系列
tags:
  - AI 系列
  - AI
draft: false
---

AI 系列第 1 篇。没有上一篇。这一篇只看一次模型调用：面前已经有一段文字，它要做的是把下一段接上。

## 中文

冰箱门上有一张写到一半的便签。

```text
牛奶只剩最后一盒。
回家顺路
```

顺着往下写，很像便签的是「买一盒」，或者「去便利店再带一盒」。把「卖掉那辆车」放在同一位置，句子本身能成立，贴在这张纸上却不顺。一次语言模型调用就在做这种接龙。调用开始时，文字已经摆好，叫它前缀。调用结束时，多出来的那一截叫下一段。模型交出的，是接在这个前缀后面显得顺的一截。

顺，是文字和文字之间的事。这张便签写着只剩一盒，后面跟上购买，读起来像一个人留给他自己的话。模型在这次调用里没有打开冰箱，没有走到便利店，也没有一份写着标准答案的清单。它比对的是：许多种接法里，哪几种和这个前缀摆在一起最像会有人这样写。

### 最可能，是排序里靠前的几种

前缀停在「回家顺路」时，接法可以排成这样：

```text
买一盒牛奶。      很顺
去便利店补一盒。   也很顺
卖掉那辆车。      很不顺
```

「最可能」指的是这个排序里靠前的位置。买一盒，和去便利店补一盒，都可以是一张像样的便签。排序把它们放在前面，是因为这种家务便签经常这样收尾。后面那句不顺，是因为它几乎不出现在这种便签的末尾。

同一句「回家顺路」，换掉前面的事实，排序会跟着换。

```text
牛奶只剩最后一盒。
回家顺路
→ 买一盒牛奶。

牛奶还没开封，日期是下个月。
回家顺路
→ 不用买。
```

两张便签共用后半句，下一段却不同。模型没有一条记在别处的家规，写着「这户人家总是缺牛奶」。它每次只看见眼前这一张纸。纸上的前一句变了，靠前的接法就变了。

这里的可能，也还没有真假。真假要另找证据：便签上写了盒数，或者之后真的有人去看冰箱。单是这一次续写，做完的事情是把排序靠前的文字接上。

### 顺的句子，可以来自很稳的说法，也可以来自眼前这张纸

有些句子在大量文字里反复以同一种方式出现。「法国的首都」后面接下「巴黎」，会非常顺。这种顺来自一种稳定的写法，续写也就常常和地图一致，因为文字里本来就经常把这两个地名接在一起。这次调用翻过的只有眼前的前缀。

冰箱里今晚还剩几盒，不属于这种稳定写法。它只存在于这户人家今晚的厨房。前缀里如果写了「只剩最后一盒」，续写可以顺着这句话来。前缀里如果只有一个问题：

```text
牛奶还有多少？用一个数字回答。
```

纸上没有盒数。模型仍然会交出像回答的文字，例如「还有两盒」。数字的格式满足了「用一个数字」，这个数字却没有经过冰箱门。问句后面经常跟着一个数量，所以数量会排到前面。读起来完整，只说明接得顺。

以后谈到编造的时候，会专门分开两件事：模型自己接出来的句子，和工具拿回来的观察。这篇先把界线放在续写这一侧。没有写进前缀、又不是那种到处都这么写的事实，续写没有地方去读它。

### 一次聊天回复里，这一步发生在哪里

你在输入框里打的是一句，模型收到的前缀通常更长。运行时先把材料拼成一条，再把模型放在末尾那个「往下写」的位置上。一条日常的前缀大致是：

```text
[系统] 用一句中文回答。
[用户] 冰箱里的牛奶只剩最后一盒。用一句话告诉我回家要做什么。
[模型]
```

模型从 `[模型]` 后面接着写。很顺的一截是：「回家顺路再买一盒牛奶。」屏幕上的气泡，是运行时把这一截从整条文字里切出来给你看。系统那一行也在前缀里，所以「一句」会把很长的清单往排序后面推。你打的那句也在前缀里，所以「只剩最后一盒」会把「再买」往前推。

这次调用到这里停住。便利店没有被访问，冰箱也没有被打开，没有第二段文字写回来说「已经买到」。气泡看起来像一个决定。它的来历是：前缀长成这样，排序靠前的下一段是这句。

以后如果外面套一个循环，做完一步再出发，每一轮模型仍然站在同样的位置上。目标、工具的名字、工具返回的文字，都会被写进新的前缀。模型继续只接它看见的那一条。循环是运行时在安排，续写是模型在做。系列后面写到工具和智能体时，再把循环拆开。这一篇的全部内容，就是这一次续写。

### 一个常见误会

误会是：它听懂了问题，然后从一份知识库里把答案取出来。

会有这种感觉，是因为前缀长得像问句，下一段就长得像回答。「回家要做什么」后面接「再买一盒牛奶」，读起来像有人想过你的家务。实际排到前面的原因是，这种前缀后面，人们常常写下这种句子。法国首都那个例子也是同一种机制。地名接得对，户内的盒数接得随意，两次调用的动作一样：给眼前的前缀接上下一段。差别在前缀里有什么、这种句子在文字里稳不稳定，不在调用中途多了一次查询。

连在这个误会上的，是把整段回复看成一次取用。你读到的是一整句，生成的时候却是前缀一次比一次更长。模型先接上很小的一截，这一截变成前缀的一部分，排序在新的前缀上重来，再接下一截。便签从「回家顺路」长到「回家顺路买」，下一步就更容易是「一盒」，而不是重新在所有写完的段落里挑一篇。你最后读到的那句，是这一路接出来的。每一步都取当时排序最前的一小截，合成的整句也还不同于「在所有写完的段落里找出概率最高的一篇」。整篇的比较要大得多，这次调用并不做那件事。片段怎么切、一步的分数怎么来，是后面两篇的题目。

还有一件事属于「最可能」这个词本身。同一张便签可以有好几条都顺的下一段。运行时可以每次都取排序最前的那条，也可以在靠前的几条之间换着取。所以同一句问法，两次看到的字可以不一样。两次都是在给同一条前缀续写。哪一次都没有新去看过冰箱。

留下三句就够这一篇用：模型看见前缀，交出排序靠前的下一段；顺，说明接得像，盒数这类只活在现场的事实要在前缀里才读得到；你读到的一整句，是前缀一点点变长之后接成的。后面的片段、窗口和工具，都加在这次续写上面。

## English

Part 1 of the series starts with one model call, and with nothing before it. Take two fridge notes that share a line.

```text
One carton of milk left.
On the way home,
→ buy another carton.

The milk is unopened and dated next month.
On the way home,
→ no need to buy any.
```

The second line is the same on both notes. The words that follow it are different, and both followings make sense. That is the operation. A language model call receives a prefix, the text already on the page, and appends a next span that fits the prefix. Fit is a judgment about the join: would a person have continued the note this way. The call does not open the fridge to settle it.

There is no single correct continuation sitting in a list of finished answers. There is a ranking. After “on the way home” on the first note, “buy another carton” and “stop at the corner shop” both sit near the top, because household notes often end in an errand. “Sell the car” is a normal sentence and a poor ending for this note, so it sits at the bottom. “Most likely” means near the top of that ranking. Several spans can belong there together.

Nothing in the call looks up a standing rule about this kitchen, the kind that would say the household is always short of milk. The only page available is the prefix. Edit the first line, and the top of the ranking moves. The score at this stage is about the join, and truth is a separate question. Truth shows up when the count is written on the note, or when someone later looks in the fridge. Appending a high-ranking span does not do that looking.

Some joins are smooth because the wording is stable across a huge amount of text. “The capital of France” is so often followed by “Paris” that the continuation agrees with a map. The agreement comes from the pattern, and the call still never opens one. A carton count tonight is the other kind of fact. It lives in one kitchen, for one evening. Written into the prefix, as “one carton left,” it can steer the next span. Left off the page, it cannot. Ask only this:

```text
How much milk is left? Answer with one number.
```

The reply can still look finished: “Two cartons.” The shape matches the request for a number. The number did not come through the fridge door. Quantity questions are often followed by quantities, so a quantity ranks high. A smooth sentence is evidence that the join fit. A later part of this series will separate an appended sentence from an observation a tool returns. For now the boundary is on the continuation side: if a fact is absent from the prefix, and it is not a pattern written the same way everywhere, this call has nowhere to read it.

In a chat product, the prefix is easy to underestimate, because the box shows one utterance and then a bubble. The runtime builds a longer page before the model writes anything. A typical assembly puts instructions, your message, and a turn marker in that order:

```text
[system] Answer in one English sentence.
[user] One carton of milk is left in the fridge. In one sentence, tell me what to do on the way home.
[model]
```

Writing starts after `[model]`. A span near the top of the ranking is “Buy another carton of milk on the way home.” The bubble is that span, cut out and shown. Both earlier lines do work. “One sentence” pushes a long checklist down the ranking. “One carton left” pushes “buy another” up. Then the call ends. The shop is not contacted, and no follow-up line arrives to say the milk was bought. The bubble has the tone of a decision because the prefix was shaped like a request. What the call did was append a fitting span to that page.

If a runtime later wraps the model in a loop that pauses and sets off again, every turn still starts from a prefix and still ends in a next span. Goals, tool names, and text returned by tools are written onto the next page the model sees. The loop is the runtime’s. The appending stays the model’s. This series gets to tools and agents further down. This part stops at the append.

The usual mix-up is to picture a knowledge store: the model understood the question, then fetched the answer. The question-shaped prefix and the answer-shaped span create that picture. “What should I do on the way home?” followed by “buy another carton” sounds like a thought about your errand. It ranks high because that kind of sentence often follows that kind of prefix. Paris and the carton count pass through the same action. One agrees with maps because the wording is stable. The other is arbitrary because the count was never on the page. The call does not add a search halfway through.

The reply is also easy to picture as one piece lifted out of a pile of finished paragraphs. Reading presents it that way. Writing grows the prefix. A small piece is appended, the prefix includes it, the ranking is computed again, and the next piece follows. Once “on the way home” has become “on the way home, buy,” the following piece tends to be “a carton.” That is a new ranking on a longer prefix, which is a different task from searching every completed paragraph for the single most probable one. Always taking the current top piece still does not perform that larger search. How the pieces are cut, and how a step gets its score, are the next two parts.

“Most likely” also leaves room inside the top of the ranking. The runtime can lock onto the first span every time, or it can switch among several that fit. The same question can come back in different words. Both wordings continue the same prefix. Neither wording is a fresh inspection of the fridge.

What this part needs to hand off is short. A model call sees a prefix and appends a next span from the top of the ranking. A smooth join means the text fits; a fact that exists only in the room is available to the call when the prefix contains it. The sentence on the screen grew by those appends. Later parts add tokens, the context window, and tools on top of the same continuation.
