---
title: "一次工具调用里，模型、运行时、观察各做哪一步"
description: "一次调用拆成三步：模型只写出名字，运行时去跑，观察把结果写回下一页。 One tool call has three jobs: the model writes a name, the runtime runs it, and the observation is written back onto the next page."
pubDate: 2026-10-22
slug: 2026/10/22/who-does-which-step
category: AI 系列
tags:
  - AI 系列
  - AI
draft: false
---

AI 系列第 13 篇。上一篇：[工具：模型接触外部世界的唯一方式](/2026/10/21/only-through-a-tool/)。上一篇把工具钉成那一扇门，并停在一句：一次调用里，模型、运行时、观察各站在哪一步。这一篇把这三步拆开。

## 中文

还是那句问法，还是那扇门：

```text
[系统] 盒数请调用 fridge.count。用一个数字回答。
[用户] 冰箱里现在有几盒牛奶？
[模型]
```

上一篇说，接触厨房只有这一条路：写出名字，再由外面的人去跑。界面上往往只剩四个字：「已调用」。四个字把三份工作叠在一起。叠在一起，就分不清谁写了名字，谁开了门，谁把盒数送回这一页。这一篇按出现的顺序拆：模型先交出一段字，运行时再决定跑不跑，观察最后作为字贴回来。

### 模型只做第一篇写过的那件事

第 3 拍看见前缀里有 `fridge.count`，也可以看见「2。」。两段都是词表上的块。排序可以把名字推到前面。模型接出来，页上就多了一行：

```text
[模型] fridge.count
```

到这里，这一次模型的工作结束了。它没有多一只手。门还关着。第八篇写过：这几个字本身也还是续写。第十二篇写过：写了名字还不是接触。这一篇只补一句：模型在一次调用里能交出来的，只有这段认得出的字，以及字后面要带上的参数。参数也是字。「隔层：冷藏」写出来了，冷藏层没有因此被打开。

同一轮里它也可以跳过名字，直接交出「2。」。系统那一行只是页上的字。排序可以把工具名推到前面，也可以把数字推到前面。模型交「2。」和交 `fridge.count`，动作相同。差别不在它忽然会不会用工具，而在运行时后面认不认、跑不跑。

名单上没有的名字，它也可以接出来。接出来的仍是一段字。没有人跑，就没有观察可写。所以「它调用了」如果只指模型开口的那一下，这句话只等于「它接出了一段像工具的字」。

### 运行时认名字、去跑、也负责拦住

门开在模型外面。运行时先看这一段字是不是名单上的名字。认得出，才去开门、数盒，或者去问一个接口。认不出，就没有这一步。厨房对这次调用仍然不存在。

认得出也不等于已经数完。运行时还要真的去做这件事。做完得到 1，或者得到「门打不开」。这一下发生在窗口外面。第 3 拍已经停了。写气泡的那个模型这时没有在打分。它要等下一页拼好，才会再开口。

运行时也负责拦住。名单上没有的名字，模型可以写得很工整，运行时可以拒绝去跑。参数缺了、格式不对，也可以拒绝。拒绝之后，厨房仍没被碰到。被拦住和跑完失败不一样：失败是跑过了，只是没数到；拦住是门根本没开。两种情况后面都可能留下一行字，但那一行从哪来，要看有没有离开过这一页。

上一篇把工具说成一扇门。运行时是开门的人。模型不是。本子、嵌入、温度、格式，也都不是。它们最多把名字推到前面。推到前面，只是让这段字更容易被交出来。交出来之后，还要有人认、有人跑。

### 观察是跑完以后贴回下一页的材料

跑完留下一行字。运行时把这行字贴进下一页。贴进来的这一行，叫观察：

```text
[系统] 盒数请调用 fridge.count。用一个数字回答。
[用户] 冰箱里现在有几盒牛奶？
[模型] fridge.count
[观察] 1
[模型]
```

这一次，编号串里有了「1」。第 3 拍对着这串打分，「1。」可以顺着观察走上来。气泡里的数字如果和观察对得上，是因为那一行已经被写进前缀，不是因为模型中途看见了冰箱。

观察不是气泡。气泡是下一轮模型又接出来的字。观察是下一页上的材料。第八篇已经切过：观察写回来以后，仍可以再编出「还剩两盒」。这一篇把位置钉死：观察占的是前缀的座位，待遇和系统那一行、你打的字一样。它占窗口，参加打分，不保证后面每一块都顺着它走。

没有跑，就没有观察可写。模型写了「我去数过了」，那一句不是观察。运行时若把「fridge.count」这几个字直接交给你当答案，那也不是观察。观察只在跑完之后出现，并且只以字的形式出现。盒数进得了下一页，是因为有人把它写成了「1」，不是因为厨房自己坐进了窗口。

同一句问法，三步可以在不同的地方断开。模型没写出名字，调用在第一步就停了。写出了名字，运行时没认出来，或者认出来没跑，调用停在第二步。跑完了，观察贴回来，模型又接出另一句，那是另一次续写，不再是这一次调用里的第三步。

### 一个常见误会

误会是：界面写着「已调用」，所以这三步都是它做的，气泡里的数字就是刚查到的。

会有这种感觉，是因为产品把三份工作收成一个动词。动词下面其实有先后。「已调用」常常只报告模型交过一段认得出的字。认得出，不等于已经跑过。跑过，不等于你看见的那个数字就是观察原文。观察在下一页。气泡是再往后的续写。

连在这个误会上的，是把运行时当成模型新长出来的手。手这个词好像说它自己伸进了冰箱。伸进去的是运行时。模型仍然只做第一篇写过的事。换一个没有接上冰箱的名字，它照样可以写得很像。字很像，第二步不存在，第三步也就没有。

另一个方向上的误会是：观察写回来了，后面就不必再分谁做了哪一步。观察只是材料。下一轮的「1。」仍是模型接出来的。把材料、开门的人、写名字的人叠回一个「它」，下一篇的循环就说不清谁该停、谁该再出发。

留下三句就够这一篇用：一次工具调用里，模型只交出名字和参数；运行时认名字、去跑，也负责拦住；观察是跑完以后贴回下一页的字，不是气泡本身。这三步拆开以后，才写得动下一篇：目标要做完，往往要停下来再出发。

## English

Part 13 starts where [part 12](/2026/10/21/only-through-a-tool/) stopped. The last part pinned the tool as that door, and stopped on one line: which step belongs to the model, which to the runtime, and which to the observation, in one tool call. This part splits those three seats.

The question is the same, and so is the door:

```text
[system] For a carton count, call fridge.count. Answer with one number.
[user] How many cartons of milk are in the fridge right now?
[model]
```

Part 12 said the only path to the kitchen is to write a name, then let someone outside run it. The interface often keeps four words: “called a tool.” Those words stack three jobs. Once they are stacked, it is hard to see who wrote the name, who opened the door, and who sent the count back onto this page. This part splits them in the order they appear: the model first hands over a span of text, the runtime then decides whether to run, and the observation is pasted back last, as wording.

### The model only does what part 1 already described

Beat 3 can see `fridge.count` in the prefix, and it can also see “2.” Both are pieces on the vocabulary list. The ranking can lift the name. The model appends it, and the page gains a line:

```text
[model] fridge.count
```

The model’s job in this call is over. It did not grow a hand. The door is still closed. Part 8 already said those letters are still a continuation. Part 12 already said that writing a name is not yet a touch. This part adds only this: in one call, the model can hand over nothing but a recognizable span, and the arguments that follow it. Arguments are wording too. “Shelf: fridge” can be written without the fridge shelf being opened.

In the same turn it can also skip the name and hand over “2.” The system line is still only words on the page. The ranking can lift the tool name, or it can lift a digit. Handing over “2.” and handing over `fridge.count` are the same action. The difference is not that the model suddenly knows how to use a tool. The difference is whether the runtime later recognizes the span and runs it.

A name that is not on the list can still be appended. What was appended is still a span of text. If nobody ran it, there is no observation to write. So if “it called a tool” only points at the moment the model opened its mouth, the sentence only means “it appended a span that looks like a tool.”

### The runtime recognizes, runs, and also blocks

The door opens outside the model. The runtime first checks whether this span is a name on the list. Only then does it open the door, count the cartons, or ask an interface. If it does not recognize the name, that step does not happen. The kitchen is still absent from this call.

Recognition is also not a finished count. The runtime still has to actually do the job. After the job it may have 1, or “the door will not open.” That happens outside the window. Beat 3 has already stopped. The model that writes the bubble is not scoring anything at this moment. It waits for the next page to be assembled before it opens its mouth again.

The runtime also blocks. A name that is not on the list can be written neatly; the runtime can refuse to run it. Missing arguments or a broken shape can also be refused. After a refusal, the kitchen has still not been touched. A block is not the same as a failed run: failure means the job ran and did not get a count; a block means the door never opened. Both cases may later leave a line of text, but where that line came from depends on whether anything left this page.

Part 12 called the tool a door. The runtime is the one who opens it. The model is not. A notebook, an embedding, a temperature, a format — none of them are either. At most they lift the name. Lifting a name only makes that span easier to append. After it is appended, someone still has to recognize it, and someone still has to run it.

### An observation is material pasted onto the next page after the run

The run leaves a line of text. The runtime pastes that line onto the next page. The pasted line is the observation:

```text
[system] For a carton count, call fridge.count. Answer with one number.
[user] How many cartons of milk are in the fridge right now?
[model] fridge.count
[observation] 1
[model]
```

This time the numbered pieces include “1.” Beat 3 scores that string, and “1.” can rise by following the observation. If the digit in the bubble matches the observation, it is because that line has already been written into the prefix, not because the model saw the fridge in the middle of the call.

An observation is not the bubble. The bubble is wording the model appends on the next turn. The observation is material on the next page. Part 8 already made the cut: after an observation is written back, “two left” can still be fabricated. This part pins the seat: the observation occupies a place in the prefix, with the same treatment as the system line and the words you typed. It takes window space, it joins the scoring, and it does not promise that every later piece will follow it.

No run, no observation to write. If the model writes “I already counted,” that sentence is not an observation. If the runtime hands the letters “fridge.count” to you as the answer, that is not an observation either. An observation appears only after the run, and only as wording. The carton count can enter the next page because someone wrote it as “1,” not because the kitchen sat down in the window by itself.

The same question can break a call at different places. If the model never writes the name, the call stops at the first step. If it writes the name and the runtime does not recognize it, or recognizes it and does not run, the call stops at the second step. If the run finishes, the observation is pasted back, and the model appends another sentence, that is a later continuation, not the third step of this call.

### The usual mix-up

The usual mix-up is to treat “called a tool” on the interface as proof that it did all three jobs, and that the digit in the bubble is what was just looked up.

The feeling comes from the product folding three jobs into one verb. Under the verb there is an order. “Called” often only reports that the model handed over a recognizable span. Recognition is not a finished run. A finished run is not a promise that the digit you see is the observation itself. The observation sits on the next page. The bubble is a continuation after that.

The same mix-up treats the runtime as a new hand the model grew. “Hand” sounds as if it reached into the fridge by itself. The reaching belongs to the runtime. The model still only does what part 1 described. Swap in a name that is not wired to the fridge, and it can still write letters that look right. The letters look right. The second step does not exist, so the third step has nothing to write.

The mix-up in the other direction is that once an observation is written back, there is no longer any need to keep the three jobs apart. An observation is only material. The next turn’s “1.” is still appended by the model. Fold the material, the person who opens the door, and the person who writes the name back into one “it,” and the next part’s loop cannot say who should stop and who should start again.

What this part hands off is short. In one tool call, the model only hands over a name and its arguments. The runtime recognizes the name, runs the job, and also blocks. An observation is wording pasted onto the next page after the run, not the bubble itself. Once those three seats are split, the next part can move: finishing a goal often means stopping and starting again.
