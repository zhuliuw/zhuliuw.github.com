---
title: "对话里的三种角色：系统、用户、模型"
description: "系统、用户、模型是同一页上的三段标签，不是三条通道。 System, user, and model are three labels on one page, not three channels."
pubDate: 2026-10-15
slug: 2026/10/15/three-roles
category: AI 系列
tags:
  - AI 系列
  - AI
draft: false
---

AI 系列第 6 篇。上一篇：[提示词：你交给它的全部材料](/2026/10/14/the-whole-prompt/)。上一篇把提示词收成一页拼好的材料。这一页上的字带着三种标记。标记写的是谁在说话。模型仍然只做一件事：从页末接着写。

## 中文

还是那张回家的便签。运行时交出去的页，上一篇写成：

```text
[系统] 用一句中文回答。
[用户] 牛奶只剩最后一盒。回家顺路要做什么？
[模型]
```

三种括号不是三个人围着一张桌子。它们是同一条前缀上的三段标签。模型从最后一个 `[模型]` 后面开口。开口之前，这三段已经都在编号串里。

### 三种角色是页上的标签，不是三条通道

系统那一行通常最先到。产品、开发者、或者你在设置里留下的说明，写在页顶。它常常规定口吻、长度、语言，有时还规定不要做什么。它不是你每次打字时重新想出来的。它先到，所以它先占窗口。

用户那一行是你以为的「提问」。今天这句在里面。同一条线程里更早的气泡，如果被复制进来，也常常带着 `[用户]`。你今天没有再打「鸡蛋没有了。」，运行时却可能把它当作上一轮用户的话贴回来。

模型那一行做两件事。一件是留空：最后一个 `[模型]` 后面还没有字，续写从这里开始。另一件是回贴：上一轮已经写完的「买一盒。」，下一轮会被复制进前缀，仍然标成 `[模型]`。回贴进来的那一句，已经不是正在写的回复。它是材料。

第三篇把一次回复写成五拍。角色落在第 1 拍：运行时把这三段贴进同一页，并写上标记。第 2 拍把标记和正文一起切成编号。第 3 拍起，模型只对着这串编号打分。它没有一个动作叫「先读系统通道，再读用户通道」。排序看的是整串。

把同一句话换一个标记，前缀就变了。

```text
[系统] 用一句中文回答。
[用户] 牛奶只剩最后一盒。回家顺路要做什么？
[模型]
```

如果把「用一句中文回答。」从页顶拿下来，改写进用户那一行：

```text
[用户] 用一句中文回答。牛奶只剩最后一盒。回家顺路要做什么？
[模型]
```

字差不多还在。标记和位置变了。很顺的下一段仍可能是一句，也可能变成清单。差别不是模型「不听用户的话」。差别是：这段字出现在编号串的哪一段，旁边写着谁在说。

### 下一轮里，上一句回复会变成材料

第一轮接完，气泡里是「买一盒。」调用结束。你接着问鸡蛋。运行时不会让模型去翻刚才的记忆。它把刚才那一页再贴一次，并接上你的新句：

```text
[系统] 用一句中文回答。
[用户] 牛奶只剩最后一盒。回家顺路要做什么？
[模型] 买一盒。
[用户] 鸡蛋呢？
[模型]
```

这一次，模型从最后一个 `[模型]` 后面写。前面那个「买一盒。」已经在前缀里。它会把「再买鸡蛋。」往后推，还是把「牛奶已经写过。」往后推，仍然只看这一串。上一轮的回复能起作用，是因为它被写进了这一页，不是因为模型在两次调用之间还站着。

窗口那一篇写过：旧轮次占块数。角色这一篇补一句：占块数的不只是你打的字。上一轮模型自己接出来的句子，下一轮也占位置。系统那一行如果每轮都贴，它每轮都先占。

把系统那一行换成「列出回家要买的全部东西。」，页顶变了，第一轮就可能交出清单。再问鸡蛋时，清单已经在前缀里。新的下一段会顺着清单走，也会被「一句」或者「全部列出」这些还在页上的字拉一把。拉的方式一样：改前缀，改排序。

### 一个常见误会

误会是：系统是最高指令，模型必须服从；用户是真正的问题；模型角色是它自己在旁边想。

会有这种感觉，是因为产品把系统那一行藏在设置里，把用户那一行放在输入框，把模型那一行显示成气泡。三个地方看起来像三个工位。实际送进第 1 拍的，是贴在同一页上的字。系统那一行没有单独的服从开关。它灵，是因为它改了整串靠前的接法。用户后头写「列一份清单，不要只回一句。」，后到的这些字同样参加打分。「必须服从」如果发生了，也只是排序把短句往后推了。没有发生时，也不是模型抗命，而是页上别的字把短句又推了回来。

连在这个误会上的，是把模型角色看成一条私密思路。最后一个 `[模型]` 后面确实是开口的位置。它前面那些标成 `[模型]` 的段落，却已经是给这次调用看的材料。你看见的「它记得自己说过买一盒」，是运行时又贴了一次。换一条新线程，或者那一句被窗口挤掉，它就不在编号串里。

另一个方向上的误会是：只要把要求写进系统，用户随便打都没有关系。系统先到，所以它先占容量，也常常先把口吻定住。它仍然只是页顶的一段。用户那一行更长、更具体、而且离开口更近时，排序也可以跟着用户走。三种角色没有三种待遇。它们是同一串编号上的不同标签。

留下三句就够这一篇用：系统、用户、模型是同一页上的三段标签，不是三条通道；模型从最后一个 `[模型]` 后面续写，它前面的字，不论标成谁，都已经是前缀；上一轮的回复能起作用，是因为它被贴进了这一页。同一页、同一串编号，两次接法仍可能不同。下一篇写温度。

## English

Part 6 starts where [part 5](/2026/10/14/the-whole-prompt/) stopped. The last part turned the prompt into one assembled page. The words on that page carry three markers. The markers say who is speaking. The model still does one thing: continue from the end of the page.

The runtime still hands over the same household note:

```text
[system] Answer in one English sentence.
[user] One carton of milk is left. What should I do on the way home?
[model]
```

The three brackets are not three people around a table. They are three labels on one prefix. Writing starts after the last `[model]`. Before that, all three stretches are already in the numbered row.

### The three roles are labels on the page, not three channels

The system line usually arrives first. The product, a developer, or a note you left in settings is written at the top. It often sets tone, length, and language, and sometimes a ban. You do not invent it each time you type. It arrives first, so it occupies the window first.

The user line is what you think of as the question. Today’s sentence is in it. Earlier bubbles in the same thread, if they are copied in, often keep the `[user]` marker too. You did not type “Eggs are gone.” again today. The runtime may still paste it as a previous user turn.

The model line does two jobs. One is to leave a blank: nothing has been written yet after the last `[model]`, and the continuation starts there. The other is to paste back: last turn’s finished “Buy a carton.” is copied into the next prefix, still marked `[model]`. That pasted sentence is no longer the reply being written. It is material.

Part 3 wrote one reply as five beats. Roles land on beat 1: the runtime pastes the three stretches onto one page and writes the markers. Beat 2 cuts the markers and the body into numbers together. From beat 3 on, the model only scores that row. It has no action that reads a system channel first and a user channel second. The ranking looks at the whole row.

Move the same sentence under a different marker, and the prefix changes.

```text
[system] Answer in one English sentence.
[user] One carton of milk is left. What should I do on the way home?
[model]
```

Take “Answer in one English sentence.” off the top and write it into the user line:

```text
[user] Answer in one English sentence. One carton of milk is left. What should I do on the way home?
[model]
```

Most of the words are still there. The marker and the position have moved. A smooth continuation can still be one sentence. It can also become a list. The difference is not that the model “ignores the user.” The difference is which stretch of the numbered row those words occupy, and whose name sits beside them.

### On the next turn, last turn’s reply becomes material

The first call ends with “Buy a carton.” in the bubble. You then ask about eggs. The runtime does not send the model back to a memory of a moment ago. It pastes the previous page again and appends your new line:

```text
[system] Answer in one English sentence.
[user] One carton of milk is left. What should I do on the way home?
[model] Buy a carton.
[user] What about eggs?
[model]
```

This time the model writes after the last `[model]`. The earlier “Buy a carton.” is already in the prefix. Whether “buy eggs too.” or “milk is already on the note.” sits near the top of the ranking is still a question about this row. Last turn’s reply can steer this turn because it was written onto this page, not because the model kept standing between calls.

Part 4 already said older turns occupy pieces. This part adds one line: the pieces are not only the words you typed. A sentence the model itself appended last turn occupies room on the next turn. If the system line is pasted every turn, it occupies room first every turn.

Swap the system line for “List everything to buy on the way home.”, and the page top changes, so the first turn may return a list. Ask about eggs, and that list is already in the prefix. The next span can follow the list, and it can also be pulled by “one sentence” or “list everything” if those words are still on the page. The pull is the same move: change the prefix, change the ranking.

### The usual mix-up

The usual mix-up is to treat system as the highest order the model must obey, user as the real question, and the model role as a private thought happening off to the side.

The feeling comes from the product: the system line is hidden in settings, the user line sits in the box, and the model line is shown as a bubble. The three places look like three desks. What actually enters beat 1 is text pasted onto one page. The system line has no separate obedience switch. When it works, it works because it moved the top of the ranking. If the user later writes “Make a list. Do not answer in one sentence.”, those later words join the same scores. If “must obey” appears to happen, that is only the ranking pushing the short sentence down. If it does not happen, the model is not defying an order. Other words on the page pushed the short sentence back up.

The same mix-up treats the model role as a private chain of thought. The blank after the last `[model]` is where writing starts. The earlier stretches marked `[model]` are already material this call can see. The feeling that “it remembers it already said to buy a carton” is the runtime pasting again. Start a new thread, or let that sentence be dropped from the window, and it is gone from the row.

The mix-up in the other direction is that a requirement placed in system makes the user line irrelevant. The system line arrives first, so it occupies capacity first, and it often sets the tone first. It is still only a paragraph at the top of the page. When the user line is longer, more specific, and closer to where writing starts, the ranking can follow the user. The three roles do not get three treatments. They are different labels on one numbered row.

What this part hands off is short. System, user, and model are three labels on one page, not three channels. The model continues after the last `[model]`; every word before that, whoever it is marked as, is already prefix. Last turn’s reply can steer this turn because it was pasted onto this page. The same page, and the same row of numbers, can still continue two different ways. Temperature is the next part.
