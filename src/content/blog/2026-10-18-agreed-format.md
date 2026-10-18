---
title: "让回答按约定的格式出现"
description: "约定格式是气泡要留下的骨架：页上的字会推它，第 4 拍的门会挡住不合的块。 An agreed format is the skeleton the bubble must leave: words on the page can lift it, and a gate on beat 4 can block pieces that break it."
pubDate: 2026-10-18
slug: 2026/10/18/agreed-format
category: AI 系列
tags:
  - AI 系列
  - AI
draft: false
---

AI 系列第 9 篇。上一篇：[它为什么会编造，以及编造和工具观察的差别](/2026/10/17/made-up-vs-observed/)。上一篇停在「形状对了，也不等于对」，并说下一篇写怎样让回答按约定的格式出现。这一篇把「形状」收成一件可以事先说好的事：气泡里要留下哪一种骨架，后面的程序才能接着读。

## 中文

还是那张回家的便签。这一次约定不是「用一个数字回答」，也不是「用一句中文回答」，而是一行固定骨架：

```text
[系统] 只输出一行：{"物品":"...","盒数":数字}
[用户] 冰箱里现在有几盒牛奶？
[模型]
```

气泡里常常是：

```text
{"物品":"牛奶","盒数":2}
```

花括号到了。两个键到了。一个数字坐进了「盒数」。冰箱门仍然没有开。页上也没有「只剩最后一盒」。

### 约定格式是页上的形状，不是另开的排版工位

第三篇把一次回复写成五拍。格式不另开一拍。第 1 拍仍然拼页。页顶那一行已经在前缀里。第 2 拍把它和问句一起切成编号。第 3 拍对着这串打分。问句后面如果常常跟着花括号和键名，这些块就会往前排。第 4 拍取走它们，气泡就长成约定的骨架。

第六篇写过：系统那一行没有单独的服从开关。它灵，是因为它改了整串靠前的接法。「用一句中文回答。」把清单往后推。「只输出一行」加上那对花括号，把「还剩两盒，快过期。」往后推，把 `{` 往前推。模型没有一个动作叫「现在开始按表格填写」。它还是从最后一个 `[模型]` 后面续写。

把同一句约定从页顶拿下来，写进用户那一行，字还在，位置变了。

```text
[用户] 只输出一行：{"物品":"...","盒数":数字} 冰箱里现在有几盒牛奶？
[模型]
```

很顺的下一段仍可能是那一行骨架，也可能先冒出一句「好的，」再勉强补上花括号。差别不是它「不听格式」。差别是这段形状出现在编号串的哪一段。

上一篇的「2。」和这一篇带键名的那一行，动作相同。都是接得顺的下一段。后一种多了骨架。骨架是前缀里的字推出来的，不是厨房里多出的一种能力。

### 运行时还可以在第 4 拍挡住不合格式的块

只靠页上的字，格式仍可能破。温度那一篇写过：第 4 拍可以在靠前的几块之间换着取。换到「还」，后面就会接成一句人话。花括号还没出现，约定已经断了。

有的运行时在第 4 拍加一扇门。词表还是那张词表，第 3 拍还是给每一块打分，可是这一步只允许还合法的块被取走。前缀末尾已经是 `{`，门会挡住「还剩」。前缀末尾已经是 `"盒数":`，门会挡住另一段散文，只留下数字这一类块。取走以后，前缀变长，门跟着新的骨架再开一次。

这扇门不改第 3 拍怎么给问句打分。它改的是第 4 拍的手。分数最高的那一块如果会把骨架写坏，运行时就不取它，改取还合法的、分数次一等的块。温度仍在门里面起作用：合法的块里，仍可能换着取。门管的是形状。它不管盒数是不是从冰箱来的。

气泡交出来以后，运行时还可以再读一遍。读得动，就交给后面的程序。读不动，就当这次调用失败，或者把坏掉的那一行贴回页上，再开一轮。后一种做法，坏格式本身变成了材料。它和上一篇的观察同类：都是写回页上的字。下一轮仍然只是续写。

### 格式对了，字段里仍可能是编出来的

约定要的是骨架。骨架站稳了，数字仍可能是接出来的。`{"物品":"牛奶","盒数":2}` 每一段都像约定。页上没有盒数时，「2」仍然只是第 3 拍里一个像数字的块。上一篇把这个叫做编造。格式没有把编造取消。它只是让编造穿上了一件程序认得出的外套。

观察写回来以后，也是同一把尺。运行时贴上「1」，下一轮很顺的接法可以是 `{"物品":"牛奶","盒数":1}`。也可以再多一个键，写上「快过期」。后半句不在观察里。这个键如果也在约定里，门会放行；约定里没有，门会挡住。挡住的是形状。观察里没有的那半句，不会因为多了一对花括号就变成查过的事实。

把约定写得很细，比如必须是这两个键、盒数必须是整数，只能让排序和门更紧。它不能把厨房写进前缀。纸上没有盒数，合法的骨架仍然可以交出一个合法的假数字。

### 一个常见误会

误会是：它交出了能被程序读懂的格式，就表示它理解了这张表，并且里面的字段是可靠的。

会有这种感觉，是因为气泡不再像一句闲聊，而像一个接口的返回。程序能解析，后面的代码就能往下跑。跑得动，不等于查过。解析成功只说明第 4 拍取出来的块，拼起来还落在约定的骨架里。字段里的数字，来源仍然只有两处：前缀里已经写过，或者接得顺。上一篇的那一刀在这里同样有效。

连在这个误会上的，是把「请按这行骨架回答」当成一种更聪明的模式。页顶多一行格式，改的是靠前的接法。模型没有切换到表格引擎。第 3 拍还是「下一块哪几块更顺」。花括号顺，是因为前缀里已经摆了花括号。数字顺，仍可能只是问句后面常接数量。

另一个方向上的误会是：只要把格式写进系统，回答就一定按这行骨架出现。系统那一行仍然只是页顶的一段。用户后头写「先解释一下再给那一行。」，后到的这些字同样参加打分。没有第 4 拍那扇门时，温度也可以先取走「好的」。没有发生「必须按格式」时，也不是模型抗命，而是页上别的字把骨架又推了回去。门如果装上了，抗命这个词更加用不上：不合格式的块根本不会被取走。

留下三句就够这一篇用：约定格式是要气泡留下哪一种骨架；它可以是页上的字，把某些块推到前面，也可以是第 4 拍的一扇门，把不合格式的块挡住；骨架站稳了，字段里的事实仍可能是编出来的。长资料往往进不了这一页。下一篇写检索怎样补这一刀。

## English

Part 9 starts where [part 8](/2026/10/17/made-up-vs-observed/) stopped. The last part left one line: the right shape is still not the same as being right. Then it said the next part is how to make an answer appear in an agreed format. This part folds “shape” into something you can name in advance: which skeleton the bubble must leave, so a later program can keep reading.

The household note is the same. This time the agreement is not “answer with one number,” and not “answer in one English sentence.” It is one fixed skeleton:

```text
[system] Output one line only: {"item":"...","count":number}
[user] How many cartons of milk are in the fridge right now?
[model]
```

The bubble is often:

```text
{"item":"milk","count":2}
```

The braces arrived. The two keys arrived. A digit sat in `count`. The fridge door did not open. The page also never said “one carton left.”

### An agreed format is a shape on the page, not a separate typesetting desk

Part 3 wrote one reply as five beats. Format does not add a sixth. Beat 1 still assembles the page. The line at the top is already in the prefix. Beat 2 cuts it with the question into numbers. Beat 3 scores that row. If braces and key names often follow a question like this, those pieces rise. Beat 4 takes them, and the bubble grows the agreed skeleton.

Part 6 already said the system line has no separate obedience switch. When it works, it works because it moved the top of the ranking. “Answer in one English sentence.” pushes a list down. “Output one line only” plus that pair of braces pushes “Two left, and they are near the date.” down, and `{` up. The model has no action called “begin filling in a form.” It still continues after the last `[model]`.

Take the same agreement off the page top and write it into the user line. The words are still there. The position has moved.

```text
[user] Output one line only: {"item":"...","count":number} How many cartons of milk are in the fridge right now?
[model]
```

A smooth continuation can still be that one skeleton. It can also start with “Sure,” and only then grow the braces. The difference is not that the model “ignores the format.” The difference is which stretch of the numbered row those words occupy.

Last part’s “2.” and this part’s line with keys are the same action. Both are a smooth next span. The second one is wearing a skeleton. The skeleton was lifted by words in the prefix. It is not a new kitchen skill.

### The runtime can also gate beat 4 against pieces that break the format

Words on the page are not enough. Part 7 already said beat 4 can switch among the pieces near the top. Take “Two,” and the later loop grows a spoken sentence. The braces never appear. The agreement is already broken.

Some runtimes add a gate on beat 4. The vocabulary is still that vocabulary. Beat 3 still scores every piece. This step only lets a still-legal piece be taken. If the prefix already ends in `{`, the gate blocks “Two left.” If the prefix already ends in `"count":`, the gate blocks another stretch of prose and leaves room for a digit. After a piece is taken, the prefix is longer, and the gate opens again against the new skeleton.

The gate does not change how beat 3 scores the question. It changes the hand on beat 4. If the highest piece would break the skeleton, the runtime does not take it. It takes a still-legal piece further down. Temperature still works inside the gate: among legal pieces, the draw can still switch. The gate watches shape. It does not watch whether the count came from the fridge.

After the bubble is handed over, the runtime can read it once more. If it parses, a later program can take it. If it does not, this call can be treated as a failure, or the broken line can be pasted back onto the page and another turn can start. In that second path, the bad format itself becomes material. It is the same kind of thing as last part’s observation: text written back onto the page. The next turn is still only continuation.

### Once the format is right, the fields can still be made up

The agreement asked for a skeleton. When the skeleton stands, the digit can still be appended. `{"item":"milk","count":2}` looks like the agreement in every stretch. If the count is not on the page, “2” is still a number-shaped piece on beat 3. Part 8 named that fabrication. Format does not cancel fabrication. It dresses it in a coat a program can recognize.

The same rule holds after an observation is written back. The runtime pastes “1.” A smooth next span can be `{"item":"milk","count":1}`. It can also grow one more key and write “near the date.” That second half is not in the observation. If the extra key is in the agreement, the gate lets it through. If it is not, the gate blocks it. What it blocks is shape. The half-sentence that was never in the observation does not become a checked fact because a pair of braces was added.

A tighter agreement — only these two keys, and the count must be an integer — only tightens the ranking and the gate. It cannot write the kitchen into the prefix. If the count is not on the paper, a legal skeleton can still hand over a legal false number.

### The usual mix-up

The usual mix-up is to treat a program-readable format as proof that the model understood the table, and that the fields inside it are reliable.

The feeling comes from the bubble. It no longer reads like small talk. It reads like a return from an interface. A parser can consume it, so later code can run. Running is not a look. A successful parse only means the pieces taken on beat 4 still sit inside the agreed skeleton. The digit in a field still has two sources: it was already written in the prefix, or it was a smooth join. Last part’s cut still holds here.

The same mix-up treats “please answer in this skeleton” as a smarter mode. One extra format line at the top changes which joins sit near the front. The model does not switch over to a table engine. Beat 3 is still about which next piece fits. Braces fit because braces were already placed in the prefix. A digit can still fit only because a quantity often follows a question.

The mix-up in the other direction is that a format written into system makes the skeleton inevitable. The system line is still only a paragraph at the top of the page. If the user later writes “Explain first, then give that line.”, those later words join the same scores. Without the gate on beat 4, temperature can still take “Sure” first. If “must follow the format” does not appear to happen, the model is not defying an order. Other words on the page pushed the skeleton back down. If the gate is installed, “defiance” is the wrong word: a piece that would break the format is never taken.

What this part hands off is short. An agreed format is the skeleton the bubble must leave. It can be words on the page that lift some pieces, or a gate on beat 4 that blocks pieces that break the shape. Once the skeleton stands, the facts inside the fields can still be made up. Long material often cannot fit on this page. The next part is how retrieval cuts that gap.
