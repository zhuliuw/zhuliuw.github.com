---
title: "提示词：你交给它的全部材料"
description: "提示词是运行时拼好的那一页：系统、旧轮次和你刚打的字，都在里面。 The prompt is the assembled page: the system line, older turns, and the line you just typed all sit on it."
pubDate: 2026-10-14
slug: 2026/10/14/the-whole-prompt
category: AI 系列
tags:
  - AI 系列
  - AI
draft: false
---

AI 系列第 5 篇。上一篇：[上下文窗口：这一次它能看见多少](/2026/10/13/context-window/)。上一篇把一次调用收成一个数字：窗口里能装多少块。这一篇看装进去的是什么。那一整页拼好的文字，就是提示词。

## 中文

输入框里你只打了一句：

```text
回家顺路要做什么？
```

模型开口之前，运行时已经把好几张纸贴成一页。上一篇用过这张现编的页：

```text
[系统]  用 | 一句 | 中文 | 回答 | 。
[用户]  牛奶 | 只剩 | 最后 | 一盒 | 。 | 回家 | 顺路 | 要 | 做 | 什么 | ？
[模型]
```

你打的那句只是第二行后半。系统那一行、角色标记、以及运行时可能贴上的昨天那张「鸡蛋没有了。」，都在同一页上。提示词说的是这一整页，不是输入框。

### 提示词是拼好的那一页，不是你刚打的那一句

第一篇把模型的动作写成：看见前缀，交出下一段。提示词就是这份前缀在开口之前的样子。它不是模型从别处取来的题目，也不是界面上单独亮着的那一行。它是运行时交出去的全部材料。

第三篇把一次回复写成五拍。提示词落在第 1 拍：运行时把材料拼成一条文字。第 2 拍把它切成编号。第 3 拍起，模型只对着这串编号打分。你在输入框里改一个字，改的是材料里的一块。系统那一行被产品写死，也是材料里的一块。昨天的便签被贴进来，还是材料里的一块。

把系统那一行换成「列出回家要买的全部东西。」，前缀变了，排序跟着变。很顺的下一段可以从「买一盒。」换成一张清单。你打的问句没动。动的是你交给它的另一张纸。

```text
[系统] 列出回家要买的全部东西。
[用户] 牛奶只剩最后一盒。回家顺路要做什么？
[模型]
```

同一句问法，页顶换了，靠前的接法就换。模型没有一个动作叫「只读输入框，把系统那一行当作旁边的备注」。排序看的是整串。

把昨天的「鸡蛋没有了。」贴进来，前缀又变一次。窗口那一篇写过：这张纸占块数，也可能把空位占满。这一篇要看的是另一面：它一旦在页上，就是提示词的一部分。贴进来的字，和你刚打的字，对模型没有两种待遇。

### 一次调用里，材料从哪几处来

日常聊天里，这一页常常由几处拼起来。

系统那一行通常不是你每次打的。产品、开发者、或者你在设置里留下的说明，会先写在页顶。它规定回答的口吻、长度、语言，有时还规定不能做的事。它先到，所以它先占窗口。

你刚打的那句是你以为的「提问」。它当然在页上。它很少是页上唯一的一段。

运行时还会替你贴。同一条线程里，刚才的气泡、再往前的几轮，常常被复制进来。上一篇说过，这不是柜子，这是又贴了一次。复制进来的「鸡蛋没有了。」，今天你并没有再打一遍。它仍然在编号串里。

角色标记也在材料里。`[系统]`、`[用户]`、`[模型]` 是这篇里的写法。它们告诉切分之后的编号串：下一段是谁在说话。三种角色各自做什么，下一篇再拆。这一篇先记住：标记本身也是交给模型的字。

工具的名字、检索回来的段落，以后也会写进同一页。今天还没有那些。没有它们，提示词仍然已经比输入框长。

### 材料不在页上，这次调用就读不到

第一篇把界线放在续写这一侧：没写进前缀的现场事实，这次没有地方去读。提示词把这条界线收成一页纸。你心里想着牛奶快过期，没写下来，页上就没有「过期」。排序仍然会交出像回答的句子。句子顺着问句走，不顺着你没交出去的想法走。

同一句问法，纸上没有盒数，也很常见：

```text
[系统] 用一句中文回答。
[用户] 回家顺路要做什么？
```

很顺的接法可以是「先看看还缺什么。」也可以是一个编出来的数字。上一篇的窗口管的是装得下多少。这一篇管的是你到底塞了什么进去。空着的位置，模型不会到厨房里补。

你交给它的，也包括你以为只是「设定」的那些句。把「用一句中文回答。」拿掉，清单会往前排。把「不要提购买。」写进系统那一行，「买一盒。」会往后排。这些都不是在模型外面另有一个开关。它们是页上的字，参与同一次排序。

### 一个常见误会

误会是：提示词就是输入框里那一句，其余都是产品自己的装饰。

会有这种感觉，是因为界面只让你编辑那一句。气泡出来以后，你也只看见这一问一答。实际送进第 1 拍的，是拼好的整页。系统那一行你没打，它已经在。昨天的便签你今天没打，运行时却可能又贴了一次。你以为自己交出去的是十几个字。模型面对的是一叠纸。

连在这个误会上的，是把「写好提示词」理解成找到一句咒语。咒语的图画是：模型先被一句特别的话叫醒，然后再去读真正的问题。没有这第二次阅读。那句特别的话如果写进了这一页，它就是前缀的一部分，和其他字一起被切成编号，一起参与每一步打分。它灵，是因为它改了整串；它不灵，也只是因为它改得不够，或者被页上别的字盖过。没有一个单独的「提示词通道」绕过前缀。

另一个方向上的误会是：材料越多越好。窗口那一篇写过，旧纸会把空位占满。这一篇补一句：写进页里、却和今天这件家务无关的字，也在打分时占着位置。它们不一定把「买一盒。」推下去，可它们占用了你以为留给今天这句的容量。提示词的好坏，先看这一页是不是这次调用真正要交出去的材料，再看句子写得漂不漂亮。

留下三句就够这一篇用：提示词是运行时拼好的那一页，不是输入框；系统那一行、旧轮次、你刚打的字，交出去以后都是同一串编号；没写进这一页的，这次调用读不到。页上这些材料从几种角色来。下一篇把系统、用户、模型拆开。

## English

Part 5 starts where [part 4](/2026/10/13/context-window/) stopped. The last part turned one call into a number: how many pieces the window can hold. This part asks what occupies that room. The assembled page is the prompt.

In the box you type one line:

```text
What should I do on the way home?
```

Before the model writes, the runtime has already pasted several sheets into one page. Part 4 used this toy page:

```text
[system]  Answer | ␣in | ␣one | ␣English | ␣sentence | .
[user]    One | ␣carton | ␣of | ␣milk | ␣left | . | What | ␣should | ␣I | ␣do | ?
[model]
```

The line you typed is only the second half of the second row. The system line, the role markers, and yesterday’s “Eggs are gone.” if the runtime pastes it, all sit on the same page. The prompt is that page, not the box.

### The prompt is the assembled page, not the line you just typed

Part 1 wrote the model’s action as: see a prefix, append a next span. The prompt is that prefix before any writing starts. It is not a question fetched from somewhere else, and it is not the one highlighted line in the interface. It is every piece of material the runtime hands over.

Part 3 wrote one reply as five beats. The prompt lands on beat 1: the runtime joins the materials into one text. Beat 2 cuts that text into numbers. From beat 3 on, the model only scores that row. Edit a word in the box, and you have edited one stretch of the material. A system line the product froze in place is another stretch. Yesterday’s note, once pasted, is another stretch.

Swap the system line for “List everything to buy on the way home.”, and the prefix changes, so the ranking changes. A smooth continuation can move from “buy a carton.” to a list. The question you typed did not move. What moved is another sheet you handed over.

```text
[system] List everything to buy on the way home.
[user] One carton of milk is left. What should I do on the way home?
[model]
```

Same question, new page top, new top of the ranking. The model has no action that reads only the box and treats the system line as a note in the margin. The ranking looks at the whole row.

Paste yesterday’s “Eggs are gone.”, and the prefix changes again. Part 4 already said that sheet costs pieces and can fill the room. This part looks at the other face: once the sheet is on the page, it is part of the prompt. Pasted words and the words you just typed do not get two different treatments.

### Where the materials come from in one call

In a chat product the page is usually joined from several places.

The system line is often not something you type every turn. The product, a developer, or a note you left in settings is written at the top first. It sets tone, length, language, and sometimes a ban. It arrives first, so it occupies the window first.

The line you just typed is what you think of as the question. It is on the page. It is rarely the only paragraph on the page.

The runtime also pastes for you. In the same thread, the last bubble and a few earlier turns are often copied in. Part 4 said that is not a cabinet. That is another paste. “Eggs are gone.” can sit in today’s row even though you did not type it again.

Role markers are material too. `[system]`, `[user]`, and `[model]` are the notation on this page. They tell the numbered row who is speaking next. What the three roles each do is the next part. This part only needs one fact: the marker itself is text handed to the model.

Tool names and retrieved passages will later be written onto the same page. They are not here yet. Without them, the prompt is already longer than the box.

### If it is not on the page, this call cannot read it

Part 1 put the boundary on the continuation side: a fact that lives only in the room is available when the prefix contains it. The prompt turns that boundary into a page. You may be thinking the milk is near its date. If that sentence was never written down, “near its date” is not on the page. The ranking can still return an answer-shaped sentence. That sentence follows the question, not the thought you kept.

The same question with no carton count on the paper is common:

```text
[system] Answer in one English sentence.
[user] What should I do on the way home?
```

A smooth continuation can be “Check what you are short of.” It can also be an invented number. Part 4’s window asked how much fits. This part asks what you actually put in. An empty slot is not filled from the kitchen.

What you hand over also includes the sentences you treated as mere settings. Remove “Answer in one English sentence.”, and a list can move up the ranking. Write “Do not mention buying.” into the system line, and “buy a carton.” moves down. None of that is a switch outside the model. Those words are on the page, and they join the same ranking.

### The usual mix-up

The usual mix-up is to treat the prompt as the line in the box, and everything else as decoration the product added for itself.

The feeling comes from the interface: you are only allowed to edit that one line, and after the bubble appears you only see this question and this answer. What actually enters beat 1 is the assembled page. You did not type the system line, and it is already there. You did not type yesterday’s note today, and the runtime may have pasted it again. You think you handed over a dozen words. The model is facing a stack.

The same mix-up shows up when “writing a good prompt” is pictured as finding a spell. In that picture the model is woken by one special sentence, then reads the real question. There is no second reading. If that special sentence was written onto this page, it is part of the prefix. It is cut into numbers with the rest, and it joins every step’s scores. When it works, it works because it changed the row. When it fails, it failed because the change was too small, or because other words on the page covered it. There is no separate prompt channel that bypasses the prefix.

The mix-up in the other direction is that more material is always better. Part 4 already said old pages fill the room. This part adds one line: words written onto the page that have nothing to do with today’s errand still occupy slots while the scores are computed. They may not push “buy a carton.” down. They still spend the capacity you thought you had left for today’s line. Whether a prompt is good is first a question of whether this page is the material this call should hand over, and only then a question of how pretty the sentences are.

What this part hands off is short. The prompt is the page the runtime assembled, not the box. The system line, older turns, and the line you just typed become one row of numbers once they are handed over. What was never written onto this page is not read in this call. Those materials arrive under a few roles. The next part splits system, user, and model.
