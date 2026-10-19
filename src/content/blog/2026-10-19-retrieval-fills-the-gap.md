---
title: "长资料进不了窗口：检索是在补这一刀"
description: "窗口先按块数砍一刀；检索是运行时在拼页时，从窗口外面挑几段贴回来。 The window cuts by piece count first; retrieval is the runtime picking a few passages outside the window and pasting them while it assembles the page."
pubDate: 2026-10-19
slug: 2026/10/19/retrieval-fills-the-gap
category: AI 系列
tags:
  - AI 系列
  - AI
draft: false
---

AI 系列第 10 篇。上一篇：[让回答按约定的格式出现](/2026/10/18/agreed-format/)。上一篇把格式收成气泡要留下的骨架，并停在一句：长资料往往进不了这一页。这一篇写窗口砍掉的那一刀，以及检索怎样把几段先贴回来。

## 中文

还是那张回家的便签。这一次厨房里不止一张纸，而是一本本子：上个月的采购、说明书、几周的冰箱记录。你问的还是同一句：

```text
[系统] 用一个数字回答。
[用户] 冰箱里现在有几盒牛奶？
[模型]
```

本子里有一行「2026-10-18 冰箱：牛奶 1 盒」。第四篇写过：一次调用能看见的，是编号串里装得下的那些块。把整本贴进去，块数会先把空位占满。运行时如果从最旧的页开始拿掉，今天这句问法也许还在，那一行记录却可能已经被拿掉。页上没有盒数，第 3 拍仍然会交出一个像数字的块。第八篇把这个叫做编造。

### 检索发生在拼页这一拍，不是模型自己去翻柜子

窗口是容量。容量不够时，动手的仍然是运行时。一种做法是丢掉旧纸。另一种做法是先在窗口外面翻那一本，挑几段看起来相关的字，只把这几段贴进这一页。挑完、贴完，再把拼好的页交给模型。这一步叫检索。

贴完以后，页可能变成：

```text
[系统] 用一个数字回答。只根据页上的记录。
[资料] 2026-10-18 冰箱：牛奶 1 盒。鸡蛋没有了。
[用户] 冰箱里现在有几盒牛奶？
[模型]
```

「1 盒」现在在前缀里。第 2 拍把它切进编号串。第 3 拍对着这串打分。「1。」可以顺着资料走上来。模型没有多一个动作叫「去柜子里找」。柜子在这次调用开始之前就已经被别人翻过了。它看见的，仍只是贴进来的那几行。

第三篇的五拍没有变成六拍。检索落在第 1 拍：运行时决定这一页上有哪些字。切编号、打分、取一块，后面仍按原样走。检索回来的段落和系统那一行、你打的字，对模型没有两种待遇。第五篇写过：提示词是拼好的那一页。检索只是这页又多贴了几张短纸。

第八篇的观察是工具跑完之后写回来的字。检索和观察同类：都是模型外面先做完一件事，再把结果写成页上的材料。差别是来源。观察可以是今晚真的去数冰箱。检索翻的是已经写好的本子。本子不是厨房。本子写着「1 盒」，今晚如果已经喝掉，贴进来的仍是「1 盒」。

### 贴回来的几段，仍然要挤进同一扇窗口

检索不是把整本变小。它是决定哪几段配占用这格容量。贴回来的段落越长，问句和回复剩下的空位越少。把说明书整章贴进来，和把整本贴进来，是同一类错误：窗口先被资料占满，今天这句被挤到边上，或者根本贴不进去。

挑错了也占窗口。运行时如果贴上的是「洗衣机说明书：洗衣剂一盒」，编号串里就有「一盒」，却没有牛奶。第 3 拍仍然会交出像答案的数字。数字顺着贴错的那一行走。检索没有失败得一声不吭。它失败的样子，常常是页上出现了字，这些字只是问到了另一件家务。

同一句问法，本子里也许有两行：上周「牛奶 2 盒」，昨天「牛奶 1 盒」。检索贴了哪一行，前缀就跟着哪一行走。模型不会因为柜子里还有另一行，就自动改数字。那一行不在这串编号里。第四篇写过：被拿掉的块，这次调用里不存在。没被贴上来的段落，也是同一种不存在。

### 资料在页上，后面仍可能继续编

资料贴上来，不等于后面每一块都变成查过的事实。运行时写的是「牛奶 1 盒」。模型从最后一个 `[模型]` 后面接着写。很顺的接法可以是「1。」也可以是「还剩两盒，快过期。」后半句不在资料里。它又是一段接得顺的文字。第九篇的骨架也改变不了这一刀：`{"物品":"牛奶","盒数":1}` 可以顺着资料走，也可以在键名合法的外套里再接一个资料里没有的字段。

没有贴到任何资料时，页上只剩问句。气泡里的「2。」仍然是编造。有资料、但资料和问句不相关时，气泡里的数字看起来像引用，来源却是贴错的纸。两种情况读气泡都分不出来。要分开，只能看第 1 拍到底贴了哪几行。

### 一个常见误会

误会是：开了检索，它就等于把整本都读过了，答案是从柜子里翻出来的。

会有这种感觉，是因为界面上写着「已参考资料」，气泡里还可能出现那一行日期。参考的意思更窄：运行时在窗口外面挑过，并把挑中的几段写进了这一页。模型仍然只对眼前这串编号打分。整本没有在第 3 拍里摊开。没被挑中的页，这次调用里不存在。

连在这个误会上的，是把检索当成模型新长出来的记忆。记忆这个词好像说它自己会去翻。翻的人是运行时。模型的动作没有变：看见前缀，交出下一段。前缀变长了，是因为有人先贴。换一套检索、或者今天没贴上那一行，「1 盒」就不在编号串里。问句还在，编造还可以再出现。

另一个方向上的误会是：贴上了资料，数字就一定对。资料可能过期，可能贴错，也可能只贴了半句。第八篇写过，观察写回来以后仍可能继续编。检索贴回来以后，同一把尺还在。页上的字只保证这些块参加了打分。它不保证这些块是今晚厨房里的事实，也不保证排序会老老实实用它们。

留下三句就够这一篇用：长资料进不了窗口，是容量先砍了一刀；检索是运行时在拼页时，从窗口外面挑几段贴回来；贴上来的几段仍是前缀，没贴上来的这次读不到。怎么判断哪几段「像」今天这句，下一篇用一组数来写。

## English

Part 10 starts where [part 9](/2026/10/18/agreed-format/) stopped. The last part folded format into the skeleton the bubble must leave, and stopped on one line: long material often cannot fit on this page. This part is the cut the window makes, and how retrieval pastes a few passages back before the call.

The household note is the same. This time the kitchen holds more than one sheet. It holds a notebook: last month’s shopping, appliance manuals, several weeks of fridge logs. The question is still the same:

```text
[system] Answer with one number.
[user] How many cartons of milk are in the fridge right now?
[model]
```

The notebook has a line, “2026-10-18 fridge: 1 carton of milk.” Part 4 already said one call can see only the pieces that fit the numbered row. Paste the whole notebook, and the piece count fills the room first. If the runtime drops the oldest pages, today’s question may still be there while that log line is already gone. With no count on the page, beat 3 can still hand over a number-shaped piece. Part 8 named that fabrication.

### Retrieval happens while the page is assembled, not as the model rummaging a cabinet

The window is capacity. When the capacity is not enough, the runtime still acts. One move is to drop old paper. Another is to search that notebook outside the window, pick a few stretches that look related, and paste only those stretches onto this page. After the picking and the pasting, the assembled page is handed to the model. That step is retrieval.

After the paste, the page can look like this:

```text
[system] Answer with one number. Use only the record on the page.
[source] 2026-10-18 fridge: 1 carton of milk. Eggs are gone.
[user] How many cartons of milk are in the fridge right now?
[model]
```

“1 carton” is now in the prefix. Beat 2 cuts it into the numbered row. Beat 3 scores that row. “1.” can rise along the pasted record. The model did not grow an action called “go look in the cabinet.” The cabinet was already searched by someone else before this call started. What it sees is still only the lines that were pasted in.

Part 3’s five beats do not become six. Retrieval lands on beat 1: the runtime decides which words sit on this page. Cutting, scoring, and taking one piece still run as before. A retrieved passage, the system line, and the line you typed do not get two different treatments. Part 5 said the prompt is the assembled page. Retrieval is a few extra short sheets on that page.

Part 8’s observation is text a tool writes back after it actually ran. Retrieval is the same kind of thing: something finishes outside the model, then the result is written as material on the page. The source differs. An observation can be tonight’s count of the fridge. Retrieval searches a notebook that was already written. The notebook is not the kitchen. If the notebook says “1 carton” and tonight’s carton has already been drunk, what gets pasted is still “1 carton.”

### The pasted passages still have to share the same window

Retrieval does not shrink the notebook. It decides which stretches deserve this capacity. The longer the pasted passages, the less room remains for the question and the reply. Pasting a whole chapter of a manual is the same class of mistake as pasting the whole notebook: the sources fill the window first, today’s line is pushed to the edge, or it does not fit at all.

A wrong pick still occupies the window. If the runtime pastes “washer manual: one box of detergent,” the numbered row contains “one box” and does not contain milk. Beat 3 can still hand over an answer-shaped digit. The digit follows the wrong line. Retrieval does not fail in silence. Failure often looks like words appearing on the page, words that belong to a different errand.

The same question can match two lines in the notebook: last week’s “2 cartons of milk,” and yesterday’s “1 carton of milk.” Whichever line retrieval pastes is the line the prefix follows. The model does not change the digit because another line is still in the cabinet. That line is not on this numbered row. Part 4 said a dropped piece is absent from this call. A passage that was never pasted is absent in the same way.

### Once the source is on the page, the rest can still be made up

A pasted source does not turn every later piece into a checked fact. The runtime wrote “1 carton of milk.” The model continues after the last `[model]`. A smooth continuation can be “1.” It can also be “Two left, and they are near the date.” That second half is not in the source. It is another stretch of smooth text. Part 9’s skeleton does not cancel this cut: `{"item":"milk","count":1}` can follow the source, and it can also grow a field the source never contained inside a coat of legal keys.

If nothing was pasted, the page holds only the question. The “2.” in the bubble is still fabrication. If something was pasted, but it does not belong to the question, the digit in the bubble can look like a citation whose source is the wrong sheet. Read only the bubble, and the two cases do not come apart. To split them you have to see which lines beat 1 actually pasted.

### The usual mix-up

The usual mix-up is to treat retrieval as proof that the whole notebook was read, and that the answer was taken from the cabinet.

The feeling comes from the interface. It says “sources used,” and the bubble may even show that date line. “Used” is narrower: the runtime searched outside the window and wrote the chosen stretches onto this page. The model still only scores the numbered row in front of it. The notebook was not spread out on beat 3. A page that was not chosen is absent from this call.

The same mix-up treats retrieval as a new memory the model grew. Memory sounds as if it rummages on its own. The rummaging belongs to the runtime. The model’s action did not change: see a prefix, append a next span. The prefix got longer because someone pasted first. Swap the retriever, or skip pasting that line today, and “1 carton” is gone from the row. The question is still there. Fabrication can appear again.

The mix-up in the other direction is that a pasted source makes the digit true. The source can be stale, can be the wrong pick, or can be only half a sentence. Part 8 already said an observation written back does not stop later fabrication. After retrieval pastes, the same rule holds. Words on the page only guarantee those pieces joined the scores. They do not guarantee those pieces are tonight’s kitchen, and they do not guarantee the ranking will use them.

What this part hands off is short. Long material cannot fit in the window because capacity cuts first. Retrieval is the runtime picking a few passages outside the window and pasting them while it assembles the page. The pasted stretches are still prefix; what was never pasted is not read in this call. How to tell which stretches look like today’s line is the next part, written as a group of numbers.
