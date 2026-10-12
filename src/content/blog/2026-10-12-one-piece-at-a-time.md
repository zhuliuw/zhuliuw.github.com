---
title: "一次回复是怎么一个片段一个片段算出来的"
description: "一次回复是个循环：给词表里每一块打分，取下一块接上，再对更长的前缀打分，直到停下。 A reply is a loop: score every vocabulary piece, append one, then score the longer prefix again until it stops."
pubDate: 2026-10-12
slug: 2026/10/12/one-piece-at-a-time
category: AI 系列
tags:
  - AI 系列
  - AI
draft: false
---

AI 系列第 3 篇。上一篇：[Token：模型看见的不是字，是切好的片段](/2026/10/11/tokens-not-characters/)。上一篇停在开口之前：便签已经收成编号。这一篇从那串编号的末尾开始，看气泡里的一句怎样一块一块算出来。

## 中文

冰箱门上还是那张便签。按上一篇的小词表，模型面前是这串编号：

```text
牛奶 | 只剩 | 最后 | 一盒 | 。 | 回家 | 顺路
11     12     13     14    15   16     17
```

人最后读到的是「买一盒。」这一次调用不把这三块一次交齐。它每次只处理下一块。

### 一步给每一块打分，只选出下一块

模型站在 17 后面。这一步它交出的是词表里每一块各一个分数。分数高，表示这块接在当前这串编号后面更顺。这些分数只在这一步内部比大小。上一篇的小词表只有八块，排不出「卖掉」这种不顺的接法。这里沿用那些编号，再补几块同样是现编的：

```text
买    18    很高
去    19    也高
卖掉  20    很低
巴黎  21    很低
```

「买」和「去」都像家务便签会接的下一块。「卖掉」和「巴黎」也在清单上，接在「回家顺路」后面不顺，分数就低。这一步还没有「买一盒」这个短语，分数也不是在给这句短语打分。它只回答一件事：下一块，哪几块更顺。

运行时读这份排序，取出一块。可以固定取最高的，也可以在几块高分之间换着取。换着取的规则留到温度那一篇。这一篇固定取最高的一块：18，「买」。

取到的是一个编号。运行时把它接在 17 后面，译成文字。气泡里先出现「买」。编号串现在是：

```text
…… | 顺路 | 买
      17     18
```

### 接上以后，按更长的前缀再打一次分

「一盒」的编号不在取「买」的那一步里一起选定。18 接上之后，模型对着新的一串，把词表再打一次分。末尾变成了「买」，靠前的块就换了：

```text
一盒  14    很高
牛奶  11    也高
车    22    很低
```

「一盒」升上来，是因为前缀末尾已经是「买」，这种便签常常接着写数量。上一步若取的是 19「去」，这一步靠前的就会换成「便利店」那一类，而不是 14。上一步取走的那一块，已经写进这一步的前缀，这一步的排序就跟着它走。

运行时再取最高的一块。14 接上，气泡变成「买一盒」。再打一次分，句号 15 排到前面，接上，气泡变成「买一盒。」回复的三块是：

```text
买 | 一盒 | 。
18   14    15
```

每一步只产生当时这一份分数，只从里面消费一块。后一块的编号要等它自己那一步才取。

算分数的时候，前面几块已经算过的中间结果可以留着，下一步接着用。留着是为了少算重复的部分。留下的是计算用的中间量。后两块的编号不在这些中间量里。

固定取最高，走出来的是「买一盒。」「去便利店补一盒。」也可以是一张顺的便签，可它的第一块是 19，这一步排在 18 后面。第一步不取它，后面的「便利店」就不会出现。每一步都取眼前的第一名，合成的是这一条路。把许多写完的句子放在一起、挑出最顺的一整句，是另一件大得多的事。这次循环不做那件事。

### 这一循环在整次回复里放在哪

上一篇把开口之前写成两拍：拼成一条文字，切成编号。一次回复从下一拍起进入循环：

```text
1. 运行时把材料拼成一条文字。
2. 切分器按词表把这条文字收成编号。
3. 模型对着当前这串编号，给词表里每一块一个分数。
4. 运行时取一块，把编号接上，译回文字，放进气泡。
5. 还没停下，就回到第 3 步。前缀比刚才长一块。
```

第 3 步到第 5 步重复。你打的那句、系统那一行，在第 2 步已经变成编号，之后留在前缀的前半段。模型每一拍仍然站在整串的末尾，只交下一块。

循环有两种这次就能看见的停法。词表里有一块特殊片段，意思是这段回复结束。它被取到时，运行时不再回到第 3 步，气泡里也不印出这块。另一种停法是运行时自己的上限：接到规定的块数就停。句子在纸上可以还没写完，循环已经结束。你在界面上按停止，也是运行时把这个循环打断。模型没有一个把没写完的话一次补完的动作。

停在这里时，便利店没有被访问，冰箱也没有被打开。第一篇说过，气泡是接出来的。这一篇把那个「接」拆成重复的一拍：打分，取一块，接上，再打分。

### 一个常见误会

误会是：整句在开口之前已经写好，气泡里一块一块地出现，只是在把稿子打出来。

逐块出现确实像打字。打字可以对照一份写完的稿。这个循环没有那份稿。每一块的分数，要等上一块接进前缀之后才算。上一步取了「去」还是「买」，后面的块会跟着换。稿子若先写完再播放，后文不会因为前面换了一个字就重写。屏幕上的逐块出现，是计算的顺序。

连在这个误会上的，是把某一步的高分读成整句的正确程度。「买」的分数高，只说明它接在当前前缀后面顺。它不判断这件家务做对了没有，也不去看冰箱。问句后面接一句像回答的话，读起来会像有人检查过盒子。分数比的仍然只是下一块。

另一个方向上的误会是：每接上一块，前面的字会被重新写过。编号只在末尾增加。11 到 17 在后面几步里还是原来那些编号。气泡里已经印出的「买」，下一步不会换成别的字。

留下三句就够这一篇用：一步给词表里每一块打分，只为选出下一块；下一块接上之后，分数按更长的前缀再算；气泡里的整句是这个循环接出来的。前缀这样一块一块变长。一次调用能装下多少块，是下一篇的题目。

## English

Part 3 starts where [part 2](/2026/10/11/tokens-not-characters/) stopped. The fridge note is already a row of numbers. This part is how that row grows into the sentence in the bubble, one piece at a time.

```text
One | ␣carton | ␣of | ␣milk | ␣left | . | On | ␣the | ␣way | ␣home
21    22        23    24      25     26   27   28     29     30
```

A reader ends up with “buy a carton.” The call does not hand those pieces over together. Each step deals with the next piece only.

### One step scores every piece, and keeps one

The model stands after 30. It returns a score for every entry in the vocabulary. A higher score means that piece is a smoother continuation of the current row. The scores are compared only inside this step. Part 2’s toy list has no room for the poor fits, so a few more made-up entries are added here. The numbers from part 2 stay as they were:

```text
␣buy   31    very high
␣stop  33    also high
␣sell  34    very low
␣Paris 35    very low
```

“␣buy” and “␣stop” both fit the next piece of a household note. “␣sell” and “␣Paris” are legal pieces, and poor ones after “on the way home,” so their scores sit low. There is no phrase “buy a carton” yet, and the scores are not a grade of that phrase. They answer one question: which next piece fits.

The runtime reads the ranking and takes one piece. It can lock onto the highest score, or it can switch among several high ones. The switching rule belongs to the later part on temperature. This part locks onto the highest: 31, “␣buy”.

That result is one number. The runtime appends it after 30 and decodes it. The bubble shows “buy”. The row is now:

```text
… | ␣home | ␣buy
    30      31
```

### After the append, the scores are computed on the longer row

The number for “␣a” is not chosen in the same step as “␣buy”. Once 31 is on the row, the model scores the vocabulary again. The row now ends in “␣buy”, so the top of the ranking moves:

```text
␣a       32    very high
␣carton  22    also high
␣car     36    very low
```

“␣a” rises because the prefix already ends in “buy”, and this kind of note often continues with a quantity. Had the previous step taken 33, “␣stop”, the next ranking would lift a piece such as “␣at”, the start of “stop at the shop”, rather than 32. The piece taken last step is now part of the prefix, and this step’s ranking follows it.

The runtime takes the highest piece again. 32 is appended, and the bubble reads “buy a”. Another pass lifts 22, “␣carton”. One more pass lifts the period, 26. The pieces of the reply are:

```text
␣buy | ␣a | ␣carton | .
31     32    22       26
```

Each step produces one ranking and consumes one entry from it. The number of a later piece is chosen when that piece’s own step runs.

A product may keep intermediate results from earlier pieces and reuse them on the next pass. The reuse skips arithmetic the longer row would otherwise repeat. What is kept is that intermediate material. The numbers of the pieces still to come are not in it.

Always taking the highest piece produces “buy a carton.” “Stop at the shop for a carton.” can also be a smooth note, and its first piece is 33, which ranks behind 31. Leave 33 untaken, and “shop” never appears. Taking the current first place at every step builds that one path. Laying many finished sentences side by side and picking the smoothest whole sentence is a much larger job. This loop does not do it.

### Where the loop sits in one reply

Part 2 ended at two beats before any writing: join the text, cut it into numbers. A reply then enters a loop:

```text
1. The runtime joins the materials into one text.
2. The tokenizer turns that text into numbers.
3. The model scores every vocabulary piece against the current row.
4. The runtime takes one piece, appends its number, and decodes it into the bubble.
5. If the reply has not stopped, go back to step 3. The prefix is one piece longer.
```

Steps 3 through 5 repeat. The question and the system line are already numbers after step 2. They stay at the front of the prefix. Each pass still stands at the end of the whole row and still returns only the next piece.

Two stops are visible in this loop. The vocabulary contains a special piece that means the reply is finished. When that piece is taken, the runtime does not return to step 3, and the bubble does not print it. The other stop is a cap the runtime sets: after a fixed count of pieces, the loop ends. The sentence on paper can look unfinished. Pressing stop in the interface interrupts the same loop. The model has no separate action that dumps the unwritten rest in one shot.

The shop is still not contacted, and the fridge is still not opened. Part 1 called the bubble an appended span. This part splits that append into a repeated beat: score, take one piece, append, score again.

### The usual mix-up

The usual mix-up is to picture a finished sentence sitting behind the bubble, with the pieces appearing only as that draft is typed out.

The bubble does grow one piece at a time, and that looks like typing. Typing can follow a completed draft. This loop has no such draft. The score for a piece is computed only after the previous piece has joined the prefix. Take “␣stop” instead of “␣buy”, and the later pieces change with it. A draft written first and then played back would keep the ending it already had. The piece-by-piece appearance is the order of the calculation.

The same mix-up shows up when a high score is read as a grade of the whole answer. A high score on “␣buy” means that piece fits the current prefix. It does not decide whether buying a carton is the right errand, and it does not look in the fridge. A question followed by an answer-shaped sentence can sound like someone checked the carton. The score still compares only the next piece.

The mix-up in the other direction is that each new piece rewrites the earlier ones. Numbers are only added at the end. Entries 21 through 30 stay as they were on later steps. Once “buy” is printed, the next pass does not replace it with another word.

What this part hands off is short. One step scores every vocabulary piece in order to choose the next one. After that piece is appended, the scores are computed again on the longer prefix. The sentence in the bubble is the chain of those choices. The prefix grows by one piece on every step. How many pieces one call can hold is the next part.
