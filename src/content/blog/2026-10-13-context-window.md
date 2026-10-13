---
title: "上下文窗口：这一次它能看见多少"
description: "一次调用能看见的，是窗口里那串编号；系统、旧轮次、你刚打的字和正在接的回复，共用这一格容量。 One call can see only the numbered row that fits the window; system text, older turns, your line, and the growing reply share that one capacity."
pubDate: 2026-10-13
slug: 2026/10/13/context-window
category: AI 系列
tags:
  - AI 系列
  - AI
draft: false
---

AI 系列第 4 篇。上一篇：[一次回复是怎么一个片段一个片段算出来的](/2026/10/12/one-piece-at-a-time/)。上一篇把回复拆成循环：打分，取一块，接上，再打分。前缀一块一块变长。这一篇看这串编号在一次调用里能装下多少。

## 中文

冰箱门上还是那张便签。上一篇结束时，编号串已经从「回家顺路」接到了「买一盒。」

```text
牛奶 | 只剩 | 最后 | 一盒 | 。 | 回家 | 顺路 | 买 | 一盒 | 。
11     12     13     14    15   16     17    18   14    15
```

循环还可以再往下接。每一次调用却有一个事先定好的上限：这串编号最多能有多少块。这个上限叫上下文窗口。单位是块数，不是纸上的字数。

窗口不是柜子。它不是把以前所有对话存到别处，需要时再抽出来。它是这一次调用允许面对的那一串编号的长度。超过这个长度的块，这次调用里不存在。

### 窗口装的是整串，不是你刚打的那一句

聊天产品里，你看见的是输入框里一句，加上气泡里一句。模型面对的是运行时拼好的一整条。上一篇把循环写成五拍。窗口从第 2 拍量起：切成编号之后，整串都占位置。

还是用一份现编的小词表，只为把个数算清。角色标记也各算一块。系统那一行、你打的那句、模型已经接上的块，共用这一格容量。

```text
[系统]  用 | 一句 | 中文 | 回答 | 。
         1    2      3     4     5
[用户]  牛奶 | 只剩 | 最后 | 一盒 | 。 | 回家 | 顺路 | 要 | 做 | 什么 | ？
        11     12     13     14    15   16     17    41   42   43    44
[模型]
```

上面数列出来的是 16 块。三个角色标记若各占一块，前缀就是 19。假设这次调用的窗口是 24 块。模型还能接上的，最多是 5 块。上一篇取了「买」「一盒」「。」三块，编号串变成 22。再接两块就到顶。后面如果先取到结束标记，循环停。如果还不是，运行时也会在窗口用尽时停。句子在纸上可以还没写完。

上一篇写过运行时自己的上限：接到规定的块数就停。那条上限是输出这一侧的闸。窗口是更大的那只盒子。盒子里同时装着前缀和已经接上的块。输出闸可以比剩下的空位更紧。空位用完了，闸再松也接不下去。

把昨天的便签也贴进来，前缀立刻变长。

```text
[用户]  鸡蛋 | 没有 | 了 | 。
        51     52    53   15
[用户]  牛奶 | 只剩 | 最后 | 一盒 | 。 | 回家 | 顺路 | 要 | 做 | 什么 | ？
```

鸡蛋那一行加上它的角色标记占 5 块。窗口还是 24，19 加上这 5 块就已经到顶，回复没有空位。产品如果把更早的许多张便签都拼进来，空位会先被旧纸占满。你刚打的那句看起来不长。窗口里先到的，是整叠纸。

### 满了以后，被拿掉的块这次不存在

窗口满了，动手的是运行时。常见的一种做法，是从最旧的轮次开始拿掉，直到剩下的块数能放进窗口。另一种做法是拒绝这次调用。两种做法里，模型都没有一个「到柜子里把旧纸找回来」的动作。

假设窗口只有 24 块，运行时决定留下系统那一行、今天这句，以及给回复留出的空位。昨天的「鸡蛋没有了。」被拿掉。模型这一次面对的编号串里，没有 51、52、53。排序仍然只看眼前这一串。接出来的可以是「买一盒牛奶。」它不会因为上周写过鸡蛋，就自动把鸡蛋补进这张纸条。上周那一行不在这串编号里。

被拿掉的块，也不会在下一步打分时偷偷回来。上一篇说过，中间结果可以留下来少算重复的部分。留下来的是还在窗口里的那些块的中间量。已经移出窗口的编号，不在这些中间量里。

同一件家务，纸上的字数和窗口里的块数仍然对不齐。第二篇写过：少见的编号会碎成许多小块。把「牛奶」换成「A91F-77C2」，纸上差不多短，块数却多一截。窗口按块数收。用字数去估它还能看多少，估的是纸。

### 这一次调用，窗口外的字它读不到

第一篇把界线放在续写这一侧：没写进前缀的现场事实，这次调用没有地方去读。窗口把这条界线收成一个数字。前缀能有多长，受这个数字限制。你去年告诉过它门牌号，去年那句如果没有被复制进这一次的编号串，门牌号就不在它面前。

聊天产品常常把最近几轮复制进下一次前缀。于是你会有「它还记得刚才」的感觉。记得的是运行时又贴上的那几轮，不是模型自己在窗口外面有一本日记。隔了很久再打开同一页，产品如果没有把旧轮次贴回来，模型就站在一张更短的纸前面。两次调用之间，窗口不会自己接着存。

工具返回的观察，以后写进前缀时，也占同一格窗口。今天先停在容量这一侧。窗口说的是能看见多少。下一篇说的是你交给它的全部材料：系统那一行、你打的字、以及运行时替你贴上的那些。

### 一个常见误会

误会是：说过一次，它就记住了，窗口只是界面上能显示多少字。

会有这种感觉，是因为同一条线程里，刚才的气泡常常被复制进下一次前缀。于是「鸡蛋没有了」隔了一轮还能被接上。这不是柜子。这是运行时又贴了一次。换一条新线程，或者旧轮次被拿掉，那句话就不在编号串里。问它上周冰箱里有什么，它仍然会交出像回答的句子。第一篇写过：问句后面经常跟着一个数量。那个数量没有经过上周的那张纸。

连在这个误会上的，是用字数或单词数去读窗口的规格。产品写着能装下许多块。块是词表里的片段。中文常见字串往往一块里有两个字，少见的编号一块里只有半个符号。同一扇窗口，装家务便签可以装下不少句，装满页编号就只够几行。规格上的那个数字，量的是块。

另一个方向上的误会是：窗口很大，模型就会把整叠纸从头到尾均匀地用一遍。窗口只保证这些块在这一次的编号串里。每一步仍然站在整串末尾，只交出下一块。某一行有没有被接进回复，要看排序。容量不是阅读进度。

留下三句就够这一篇用：一次调用能看见的，是窗口里的那串编号；系统、旧轮次、你刚打的字和正在接的回复，共用这一格容量；满了以后被拿掉的块，这次调用里不存在。窗口是容量。装进窗口的那些材料，下一篇再写。

## English

Part 4 starts where [part 3](/2026/10/12/one-piece-at-a-time/) stopped. The reply is a loop: score, take one piece, append, score again. The prefix grows by one piece on every step. This part asks how many pieces that row can hold in one call.

```text
One | ␣carton | ␣of | ␣milk | ␣left | . | On | ␣the | ␣way | ␣home | ␣buy | ␣a | ␣carton | .
21    22        23    24      25     26   27   28     29     30      31     32    22        26
```

The loop can keep going. Each call still has a cap set before it starts: the largest number of pieces the row is allowed to contain. That cap is the context window. The unit is pieces, not characters on the paper.

The window is not a cabinet. It does not store every earlier chat somewhere else and fetch a page when needed. It is the length of the numbered row this call is allowed to face. A piece past that length is absent from this call.

### The window holds the whole row, not the line you just typed

In a chat product you see one line in the box and one line in the bubble. The model faces the assembled page. Part 3 wrote the loop as five beats. The window is counted from beat 2: after the cut, every number occupies a slot.

A toy list is enough to keep the count honest. Role markers each take one piece. The system line, your question, and the pieces already appended share one capacity.

```text
[system]  Answer | ␣in | ␣one | ␣English | ␣sentence | .
           1        2     3      4          5          6
[user]    One | ␣carton | ␣of | ␣milk | ␣left | . | What | ␣should | ␣I | ␣do | ?
          21    22        23    24      25     26   41     42        43   44    45
[model]
```

The listed words are 17 pieces. If the three role markers each take one piece, the prefix is 20. Give this call a window of 25 pieces, and at most 5 pieces of reply can be appended. Part 3 took “␣buy”, “␣a”, “␣carton”, and the period. The row is then 24 pieces long. One slot remains. The next piece, if it is the stop marker, ends the loop. If it is not, the runtime still stops when the window is full. The sentence on paper can look unfinished.

Part 3 already had a runtime cap: after a fixed count of new pieces, the loop ends. That cap is a gate on the output side. The window is the larger box. The box holds the prefix and the pieces already appended. The output gate can be tighter than the remaining room. Once the room is gone, a looser gate cannot append more.

Paste yesterday’s note into the same page, and the prefix lengthens at once.

```text
[user]  Eggs | ␣are | ␣gone | .
        51     52     53      26
[user]  One | ␣carton | ␣of | ␣milk | ␣left | . | What | ␣should | ␣I | ␣do | ?
```

The egg line plus its role marker takes 5 pieces. The window is still 25. Twenty plus these five already fills it, and the reply has no room. If the product pastes many older notes, those pages fill the room first. The line you just typed can look short. What arrives in the window first is the stack.

### Once the window is full, a dropped piece is absent

When the row would overflow, the runtime acts. One common move is to drop the oldest turns until the remaining count fits. Another is to refuse the call. In both cases the model has no action that walks to a cabinet and brings the old page back.

Suppose the window is 25 pieces, and the runtime keeps the system line, today’s question, and room for a reply. Yesterday’s “Eggs are gone.” is dropped. This call’s row does not contain 51, 52, or 53. The ranking still looks only at the row in front of it. A smooth continuation can be “buy a carton of milk.” The model does not add eggs because an older note once mentioned them. That line is not on this row.

A dropped piece also does not sneak back when the next step is scored. Part 3 said intermediate results can be kept to skip repeated arithmetic. What is kept belongs to pieces still inside the window. Numbers already moved out of the window are not in that material.

The same errand still fails to line up if you count characters. Part 2 showed a rare code breaking into many small pieces. Swap “milk” for “A91F-77C2”, and the paper stays short while the row grows. The window admits pieces. A character count estimates the paper.

### Words outside this call’s window are not read

Part 1 put the boundary on the continuation side: a fact that lives only in the room is available when the prefix contains it. The window turns that boundary into a number. How long the prefix can be is limited by that number. A house number you mentioned last year is in front of the model only if that sentence was copied into this row.

Chat products often copy the recent turns into the next prefix. That is the feeling of “it still remembers a moment ago.” What is remembered is the turns the runtime pasted again, not a diary the model keeps outside the window. Open the same thread much later, and if the product does not paste the old turns, the model stands in front of a shorter page. Between calls, the window does not keep storing on its own.

Observations a tool returns will occupy the same window when a later part writes them into the prefix. This part stops at capacity. The window says how much can be seen. The next part is the material you hand over: the system line, the words you type, and whatever the runtime pastes for you.

### The usual mix-up

The usual mix-up is to treat one mention as a memory, and the window as a display limit on the screen.

The feeling comes from the same thread: the last bubble is often copied into the next prefix, so “Eggs are gone.” can still steer a later turn. That is not a cabinet. That is the runtime pasting again. Start a new thread, or let an older turn be dropped, and the sentence is gone from the row. Ask what was in the fridge last week, and the model can still return an answer-shaped sentence. Part 1 already noted that a question is often followed by a quantity. That quantity did not pass through last week’s note.

The same mix-up shows up when a window rating is read as a character count or a word count. The product states how many pieces fit. A piece is a vocabulary entry. A common household word is often one piece covering several letters. A rare code can spend several pieces on one symbol. The same window holds many fridge notes, and only a few lines of codes. The advertised number counts pieces.

The mix-up in the other direction is that a large window means the model works through the stack evenly from the first line. The window only guarantees those pieces are on this call’s row. Each step still stands at the end of the row and still returns only the next piece. Whether a given line is continued into the reply is a matter of the ranking. Capacity is not a reading progress bar.

What this part hands off is short. One call can see the numbered row that fits the window. The system line, older turns, the line you just typed, and the growing reply share that one capacity. A piece dropped after the window fills is absent from this call. The window is the capacity. The materials that occupy it are the next part.
