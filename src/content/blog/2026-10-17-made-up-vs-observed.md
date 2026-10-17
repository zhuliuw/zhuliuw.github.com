---
title: "它为什么会编造，以及编造和工具观察的差别"
description: "编造是接得顺的下一段；观察是工具跑完之后写回页上的字。 Fabrication is a smooth next span; an observation is text a tool writes back after it actually ran."
pubDate: 2026-10-17
slug: 2026/10/17/made-up-vs-observed
category: AI 系列
tags:
  - AI 系列
  - AI
draft: false
---

AI 系列第 8 篇。上一篇：[温度：为什么同一句会有不同答案](/2026/10/16/temperature/)。上一篇把温度收在第 4 拍，并留下一句：两条路都可能读起来像回答，温度不把接得顺变成查过冰箱。这一篇把「像回答」拆开：哪些字是模型自己接出来的，哪些字是工具跑完之后写回来的。

## 中文

还是那张回家的便签。这一次纸上没有盒数：

```text
[系统] 用一个数字回答。
[用户] 冰箱里现在有几盒牛奶？
[模型]
```

气泡里常常是「2。」问句要一个数字，数字排到了前面。冰箱门没有开。页上也没有「只剩最后一盒」。这个「2」从哪来？它不是从厨房来的。它是第 3 拍里一个像数字的块，在第 4 拍被取走了。

第一篇把这种句子放在编造前面：纸上没有盒数，续写仍然会交出像回答的文字。这一篇把这个名字钉住。编造，就是模型接出来、读起来像事实、却没有离开过前缀的那一截。

### 编造是续写，不是另有一个说谎的动作

第三篇把一次回复写成五拍。编造不另开一拍。第 1 拍仍然拼页。第 2 拍仍然切编号。第 3 拍仍然给词表打分。第 4 拍仍然取一块。问句后面经常跟着数量，所以「2」这类块分数高。温度低，几乎总是取最高的那块；温度高，可能换成「3」。两次都没有多一次查询。

「法国的首都」后面接「巴黎」，也是同一种续写。那种接法在大量文字里很稳，所以常常和地图一致。冰箱今晚的盒数不属于这种稳的写法。它只活在这户人家今晚的厨房。页上没写，续写没有地方去读它。读不到，循环也不会空着。它会交出一个像答案的块。像，不是查过。

上一篇写过：温度等于零，答案也不就是对的。这一篇补上对面那一句：编造不是高温才有的病。零只是几乎总取当前最高。最高仍然只是接得最顺。纸上没有盒数时，「2」可以就是最顺的下一块。

系统那一行写着「用一个数字回答。」，它把清单往后推，把数字往前推。它不把冰箱门打开。用户那一行是问句。问句把回答的形状推到前面。形状对了，盒数仍然可以是接出来的。

### 观察是工具跑完以后，写回页上的字

运行时可以在模型外面做一件事。比如真的去数冰箱，或者去问一个接口。这件事跑完，得到一行字，运行时把这行字贴进下一页。贴进来的这一行，叫观察。

还是同一句问法。这一次页顶多了一句，模型先接出工具的名字：

```text
[系统] 盒数请调用 fridge.count。用一个数字回答。
[用户] 冰箱里现在有几盒牛奶？
[模型] fridge.count
```

到这里，盒数还没有出现。「fridge.count」这几个字本身也还是续写。如果运行时到此停住，把这几个字当成答案交给你，厨房仍然没被打开。差别发生在模型外面：运行时认出这是一次调用，真的去数，得到 1，再开一轮，把观察写进页里：

```text
[系统] 盒数请调用 fridge.count。用一个数字回答。
[用户] 冰箱里现在有几盒牛奶？
[模型] fridge.count
[观察] 1
[模型]
```

这一次，编号串里有了「1」。第 3 拍对着这串打分，「1。」可以顺着观察走上来。气泡里的数字和观察里的数字对得上，是因为那一行已经被写进前缀，不是因为模型中途长出了一种新能力。

观察和编造可以长得一模一样。你只看气泡，分不出来「2。」是接出来的，还是数过的。要分开，只能看页上有没有那一行外来的字，以及那一行是不是在开口之前就已经贴好。

工具怎样被点名、参数怎样被检查，后面写工具的几篇再拆。这一篇只需要这一刀：观察是跑完之后写回来的材料。它一旦在页上，待遇和系统那一行、你打的字一样：都是前缀，都占窗口，都参加打分。

### 观察写回来以后，后面仍可能继续编

观察不是保证书。运行时写回来的是「1」。模型从最后一个 `[模型]` 后面接着写。很顺的接法可以是「1。」也可以是「还剩两盒，快过期。」后半句不在观察里。它又是一段接得顺的文字。观察把盒数放进了前缀。它没有把后面每一块都变成查过的事实。

工具失败也是观察。运行时可以写回「数不到」。下一轮如果接出「那就按两盒算。」，这句仍然是编造。失败被写进了页。数字没有。

同一轮里，模型也可能跳过工具，直接交出「2。」页顶写了「请调用 fridge.count」，它仍然只是页上的字。排序可以把工具名推到前面，也可以把数字推到前面。没有跑过的调用，就没有观察可写。气泡里的数字还是续写。

### 一个常见误会

误会是：编造是它在说谎；接对了，就是它查过。

会有这种感觉，是因为气泡读起来像一个人在回答。说谎这个词假定它先知道真的盒数，再决定交一个假的。这次调用里没有「先知道」这一拍。它没有一份藏在外面的厨房记录，也没有一个叫「现在开始诚实」的开关。它有的是眼前这串编号，和每一步的排序。交出来的「2。」和交出来的「巴黎」，动作相同。一个碰巧常和地图一致，一个碰巧像家务问答。对错要另找证据。

连在这个误会上的，是把工具当成让模型「变得更聪明」的性格开关。工具不改第 3 拍怎么打分。它改的是页上有没有多一行外来的字。没有这行字，模型再认真，也还是在给问句接一个形状对的答案。有了这行字，下一轮仍然只是续写。聪明没有加进去。材料加进去了。

另一个方向上的误会是：只要调用过工具，后面的整句都是观察。观察是那一行写回来的字。它后面接长的句子，还是第 4 拍一块一块取出来的。温度仍然可以在这一段换着取。窗口仍然可能把更早的观察挤掉。挤掉以后，那一行对这次调用就不存在。编造会从空出来的位置上再长出来。

留下三句就够这一篇用：编造是接得顺、却没有离开前缀的那一截；观察是工具在模型外面跑完以后，写回页上的字；观察一旦进了前缀，下一轮就只是接着写，它不保证后面每一块都查过。形状对了，也不等于对。下一篇写怎样让回答按约定的格式出现。

## English

Part 8 starts where [part 7](/2026/10/16/temperature/) stopped. The last part put temperature on beat 4, and left one line: both paths can still read as an answer, and temperature does not turn a smooth join into a look inside the fridge. This part splits that “reads as an answer.” Some words were appended by the model. Some words were written back after a tool actually ran.

The household note is the same. This time the carton count is not on the paper:

```text
[system] Answer with one number.
[user] How many cartons of milk are in the fridge right now?
[model]
```

The bubble is often “2.” The question asked for a number, so a number rose to the top. The fridge door did not open. The page also never said “one carton left.” Where did the “2” come from? Not from the kitchen. It was a number-shaped piece on beat 3, taken on beat 4.

Part 1 already parked this sentence in front of fabrication: if the count is not on the paper, the continuation can still return answer-shaped text. This part pins the name down. Fabrication is the span the model appended, that reads like a fact, and that never left the prefix.

### Fabrication is continuation, not a separate act of lying

Part 3 wrote one reply as five beats. Fabrication does not add a sixth. Beat 1 still assembles the page. Beat 2 still cuts numbers. Beat 3 still scores the vocabulary. Beat 4 still takes one piece. Quantity questions are often followed by quantities, so a piece such as “2” scores high. A low temperature almost always takes the highest piece. A high temperature may switch to “3”. Neither draw adds a search.

“The capital of France” followed by “Paris” is the same kind of continuation. That join is stable across a huge amount of text, so it often agrees with a map. Tonight’s carton count is not that kind of wording. It lives in one kitchen, for one evening. If it was never written onto the page, the continuation has nowhere to read it. The loop does not leave a blank. It hands over an answer-shaped piece. Shape is not a look.

Part 7 already said temperature zero does not make the answer true. This part adds the facing line: fabrication is not a disease that starts when the knob is high. Zero only means the runtime almost always takes the current highest piece. That highest piece is still only the smoothest join. When the count is not on the paper, “2” can be that join.

The system line says “Answer with one number.” It pushes a list down and a digit up. It does not open the fridge. The user line is a question. A question pushes the shape of an answer to the front. The shape can be right, and the count can still be appended.

### An observation is text written back after a tool has run

The runtime can do a job outside the model. It can actually count the fridge, or ask an interface. When that job finishes, it produces a line of text, and the runtime pastes that line onto the next page. That pasted line is an observation.

Same question. This time the page top adds one sentence, and the model first appends a tool name:

```text
[system] For a carton count, call fridge.count. Answer with one number.
[user] How many cartons of milk are in the fridge right now?
[model] fridge.count
```

The count is still missing. The letters “fridge.count” are themselves a continuation. If the runtime stops here and hands those letters to you as the answer, the kitchen still has not been opened. The difference happens outside the model: the runtime recognizes a call, actually counts, gets 1, starts another turn, and writes the observation onto the page:

```text
[system] For a carton count, call fridge.count. Answer with one number.
[user] How many cartons of milk are in the fridge right now?
[model] fridge.count
[observation] 1
[model]
```

This time the numbered row contains “1”. Beat 3 scores that row, and “1.” can rise by following the observation. The digit in the bubble matches the digit in the observation because that line was written into the prefix, not because the model grew a new ability halfway through.

An observation and a fabrication can look identical. From the bubble alone, you cannot tell whether “2.” was appended or counted. The split is on the page: is there a line that came from outside, and was that line already pasted before writing started.

How a tool is named, and how its arguments are checked, belong to the later parts on tools. This part only needs the cut: an observation is material written back after a run. Once it is on the page, it gets the same treatment as the system line and the words you typed. It is prefix. It occupies the window. It joins the scores.

### After the observation is written back, later pieces can still be made up

An observation is not a guarantee. The runtime wrote back “1”. The model continues after the last `[model]`. A smooth continuation can be “1.” It can also be “Two left, and they are near the date.” The second half is not in the observation. It is another smooth span. The observation put the count into the prefix. It did not turn every later piece into a checked fact.

A failed tool is an observation too. The runtime can write back “could not count.” If the next turn appends “Then treat it as two.”, that sentence is still fabrication. The failure was written onto the page. The number was not.

In the same turn, the model can also skip the tool and hand over “2.” “Call fridge.count” on the page top is still only words on the page. The ranking can lift the tool name, or it can lift a digit. A call that never ran has no observation to write. The digit in the bubble is still a continuation.

### The usual mix-up

The usual mix-up is to treat fabrication as lying, and a correct join as proof that it looked.

The feeling comes from the bubble. It reads like a person answering. “Lying” assumes the model first knew the real count, then chose to hand over a false one. This call has no beat called “know first.” It has no kitchen ledger hidden off the page, and no switch labeled “begin honesty.” What it has is the numbered row in front of it, and a ranking on every step. Handing over “2.” and handing over “Paris” are the same action. One often agrees with a map. One often looks like a household answer. Truth still needs other evidence.

The same mix-up treats a tool as a personality switch that makes the model smarter. A tool does not change how beat 3 scores. It changes whether the page gained a line from outside. Without that line, a careful model is still appending a well-shaped answer to a question. With that line, the next turn is still continuation. No extra intelligence was added. Material was added.

The mix-up in the other direction is that once a tool has been called, the whole later sentence is an observation. The observation is the line that was written back. The sentence grown after it is still taken one piece at a time on beat 4. Temperature can still switch in that stretch. The window can still drop an earlier observation. Once it is dropped, that line does not exist for this call. Fabrication grows again from the empty slot.

What this part hands off is short. Fabrication is a smooth span that never left the prefix. An observation is text a tool writes back after it ran outside the model. Once the observation is in the prefix, the next turn only continues; it does not make every later piece a checked fact. The right shape is still not the same as being right. The next part is how to make an answer appear in an agreed format.
