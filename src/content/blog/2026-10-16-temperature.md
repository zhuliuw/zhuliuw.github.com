---
title: "温度：为什么同一句会有不同答案"
description: "温度改的是每一步怎么从排序里取下一块，不是让模型重新想一遍。 Temperature changes how each step takes the next piece from the ranking; it does not make the model think the question over again."
pubDate: 2026-10-16
slug: 2026/10/16/temperature
category: AI 系列
tags:
  - AI 系列
  - AI
draft: false
---

AI 系列第 7 篇。上一篇：[对话里的三种角色：系统、用户、模型](/2026/10/15/three-roles/)。上一篇把同一页上的三种标签拆开，并留下一句：同一页、同一串编号，两次接法仍可能不同。这一篇写那个「仍可能」。

## 中文

还是上一篇那张回家的便签。运行时交出去的页没有换：

```text
[系统] 用一句中文回答。
[用户] 牛奶只剩最后一盒。回家顺路要做什么？
[模型]
```

你按了两次。一次气泡是「买一盒。」另一次是「去便利店补一盒。」页上的字一样。角色标记一样。切出来的编号串也一样。两次都没有打开冰箱。

### 温度是第 4 拍怎么取下一块，不是另读一遍

第三篇把一次回复写成五拍。第 3 拍给词表里每一块打分。第 4 拍由运行时取出一块，接上，译进气泡。温度落在第 4 拍：它改的是这份排序怎么被消费，不是第 1 拍再拼一次页，也不是第 3 拍另做一种理解。

站在「回家顺路」后面，这一步的分数可以长成：

```text
买    18    很高
去    19    也高
卖掉  20    很低
巴黎  21    很低
```

「买」和「去」都像家务便签会接的下一块。温度很低、或者被拧到零时，运行时固定取最高的一块：18，「买」。温度升高，运行时会在靠前的几块之间换着取。19 也常常被取到。20 和 21 仍然很低，可是排序被拉平以后，它们偶尔也会被摸到。

第一篇把这件事写成「最可能」这个词自己留出的空档。第三篇把空档收成第 4 拍上的取法。产品里这个取法常常有一个旋钮，叫温度。旋钮上的数字因产品而异。这一篇只看它做的那一件事：同一份排序，两次可以取出两块不同的下一块。

分数这一步仍然只回答「下一块哪几块更顺」。温度不把「买一盒。」整句先写好再挑选。它每一步只参与取一块。

### 第一步换一块，后面的路就换了

取到 18 之后，前缀末尾变成「买」。下一步的排序跟着它走，「一盒」升上来，气泡走到「买一盒。」

取到 19 之后，前缀末尾变成「去」。下一步靠前的就会换成「便利店」那一类。气泡走到另一句：「去便利店补一盒。」

两次调用看见的是同一页。差别发生在第 4 拍的第一次抽取。抽走的那一块写进前缀，后面每一步都对着更长的、已经分叉的编号串打分。温度如果一直开着，后面每一步也还在换着取。所以整句的差别，往往不是模型回去把问题重读了一遍，而是第一条分叉被后面的循环接长了。

同一句问法，两次答案不同，两次都还是在给同一条前缀续写。哪一次都没有新去看过冰箱。第一篇把这句话放在「最可能」下面。这一篇把它接到旋钮上。

把温度拧到很高，第 4 拍也可能摸到 20，「卖掉」。后面的循环会顺着「卖掉」往下接，气泡里就可能出现一张不像家务便签的句子。那不是厨房里多出了一条新事实。那是一份很低的分数，在这一步被取走了。

### 温度不往页上加材料

上一篇写过：没写进这一页的，这次调用读不到。温度不改这条界线。它不把「牛奶快过期」悄悄贴进系统那一行，也不把昨天的「鸡蛋没有了。」补回来。页还是那一页。编号串还是那一串。第 3 拍仍然只对着眼前这串打分。

你把温度拧来拧去，改的是第 4 拍的手。同一份「买」很高、「卖掉」很低的排序，低温几乎总是交出「买」，高温更常交出「去」，有时交出不该出现在这张便签末尾的块。两次都没有多一次查询。

产品如果把这个旋钮藏起来，第 4 拍仍然在取。有的产品每次都取最高，看起来像温度被拧到了零。有的产品在几块高分之间换，只是界面上没有刻度。名字可以不出现。取法还在那一拍。

### 一个常见误会

误会是：温度是性格开关。拧高，它就变得更有创意、更会想；拧低，它就变得更认真、更正确。

会有这种感觉，是因为低温常常交出同一句短答，高温常常交出另一句更长、更意外的话。读起来像换了一个人。换的其实是第 4 拍摸到了排序里另一块。模型没有一个叫「现在开始创意思考」的动作。第 3 拍的分数还是「下一块哪几块更顺」。温度高，只是更靠后的块也有机会被取到。意外的句子可以接得很顺，也可以接得很飘。飘，不是它想得更远，是低分块被写进了前缀。

连在这个误会上的，是把两次不同的气泡读成两次不同的理解。页没有换。角色没有换。它没有在两次调用之间把问题再读一遍，也没有在中途打开一份知识库。两次都从最后一个 `[模型]` 后面开口。两次都在第 4 拍取一块。取到的编号不同，后面的路就不同。

另一个方向上的误会是：温度等于零，答案就是对的；温度高，答案就更丰富，也更真。零只表示运行时几乎总是取当前最高的那一块。最高的那一块仍然只是接得最顺的下一块。纸上没有盒数时，它照样可以接出一个像数字的字。「对」要另找证据：前缀里写了事实，或者后面有工具把观察写回来。高温也不会把冰箱里的盒数变多。它只是让排序靠后的块更容易进气泡。

留下三句就够这一篇用：温度改的是第 4 拍怎么从排序里取下一块；同一页、同一串编号，两次可以走出两条路；温度不往页上加事实，也不把接得顺变成查过冰箱。两条路都可能读起来像回答。下一篇把编造，和工具写回来的观察，分开。

## English

Part 7 starts where [part 6](/2026/10/15/three-roles/) stopped. The last part split the three labels on one page, and left one line: the same page, and the same row of numbers, can still continue two different ways. This part is that “still.”

The runtime still hands over the same household note:

```text
[system] Answer in one English sentence.
[user] One carton of milk is left. What should I do on the way home?
[model]
```

You press twice. One bubble says “Buy a carton.” The other says “Stop at the shop for a carton.” The words on the page are the same. The role markers are the same. The numbered row after the cut is the same. Neither call opened the fridge.

### Temperature is how beat 4 takes the next piece, not a second reading

Part 3 wrote one reply as five beats. Beat 3 scores every vocabulary piece. Beat 4 is the runtime taking one piece, appending it, and decoding it into the bubble. Temperature lands on beat 4. It changes how that ranking is consumed. It does not assemble the page again on beat 1, and it does not invent a second kind of understanding on beat 3.

Standing after “on the way home,” one step’s scores can look like this:

```text
␣buy   31    very high
␣stop  33    also high
␣sell  34    very low
␣Paris 35    very low
```

“␣buy” and “␣stop” both fit the next piece of a household note. When temperature is very low, or turned to zero, the runtime locks onto the highest piece: 31, “␣buy”. Raise the temperature, and the runtime starts switching among the pieces near the top. 33 is taken often. 34 and 35 still sit low, but once the ranking is flattened they can be touched now and then.

Part 1 wrote this as room left inside the word “most likely.” Part 3 folded that room into the take on beat 4. In a product, that take often has a knob called temperature. The number on the knob differs by product. This part only needs the job it does: the same ranking can yield two different next pieces on two draws.

The scores still answer only which next piece fits. Temperature does not write “Buy a carton.” first and then pick among finished sentences. It joins the choice of one piece on every step.

### A different first piece sends the later path somewhere else

Take 31, and the prefix now ends in “buy.” The next ranking follows it. “␣a” rises, and the bubble walks to “Buy a carton.”

Take 33, and the prefix now ends in “stop.” The next ranking lifts a piece such as “␣at,” the start of “stop at the shop.” The bubble walks to a different sentence: “Stop at the shop for a carton.”

Both calls saw the same page. The difference happened on the first draw of beat 4. The piece that was taken joins the prefix, and every later step scores a longer row that has already forked. If the knob stays up, later steps keep switching too. The whole sentence differs, then, not because the model went back and reread the question, but because the first fork was grown by the rest of the loop.

The same question can come back in different words. Both wordings continue the same prefix. Neither wording is a fresh inspection of the fridge. Part 1 put that sentence under “most likely.” This part hangs it on the knob.

Turn the temperature very high, and beat 4 can also touch 34, “␣sell.” The later loop continues from “sell,” and the bubble can grow a sentence that no longer looks like a household note. That is not a new fact arriving from the kitchen. That is a very low score being taken on this step.

### Temperature does not add material to the page

Part 6 already said what is not written onto this page is not read in this call. Temperature does not move that boundary. It does not slip “the milk is near its date” into the system line, and it does not paste yesterday’s “Eggs are gone.” back in. The page is still that page. The numbered row is still that row. Beat 3 still scores only the row in front of it.

Twisting the knob changes the hand on beat 4. On the same ranking, where “buy” sits high and “sell” sits low, a low temperature almost always returns “buy,” a high temperature returns “stop” more often, and sometimes returns a piece that does not belong at the end of this note. Neither twist adds a search.

If a product hides the knob, beat 4 is still taking a piece. Some products lock onto the highest every time, which looks like temperature turned to zero. Some switch among a few high scores and never draw a scale on the screen. The name can be missing. The take is still on that beat.

### The usual mix-up

The usual mix-up is to treat temperature as a personality switch. Turn it up, and the model becomes more creative, more willing to think. Turn it down, and it becomes more serious, more correct.

The feeling comes from the bubbles: a low setting often returns the same short sentence, a high setting often returns a longer or more surprising one. It reads as a different person. What changed is that beat 4 touched another piece in the ranking. The model has no action called “begin creative thought.” Beat 3’s scores are still about which next piece fits. A high temperature only gives pieces further down a chance to be taken. A surprising sentence can still be a smooth join. It can also drift. Drift is not farther thought. It is a low-scoring piece written into the prefix.

The same mix-up reads two different bubbles as two different understandings. The page did not change. The roles did not change. The model did not reread the question between the two calls, and it did not open a knowledge store halfway through. Both calls start writing after the last `[model]`. Both take one piece on beat 4. Different numbers taken there send the later path somewhere else.

The mix-up in the other direction is that temperature zero makes the answer true, and a high temperature makes the answer richer and more true. Zero only means the runtime almost always takes the current highest piece. That highest piece is still only the smoothest next piece. If the carton count is not on the paper, the loop can still append a number-shaped word. Truth still needs other evidence: a fact written into the prefix, or a later tool writing an observation back. A high temperature does not put more cartons in the fridge. It only makes pieces further down the ranking easier to drop into the bubble.

What this part hands off is short. Temperature changes how beat 4 takes the next piece from the ranking. The same page, and the same row of numbers, can walk two paths. Temperature does not add facts to the page, and it does not turn a smooth join into a look inside the fridge. Both paths can still read as an answer. The next part separates a made-up continuation from an observation a tool writes back.
