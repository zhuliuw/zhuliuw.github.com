---
title: "工具：模型接触外部世界的唯一方式"
description: "工具是运行时在模型外面能真的跑起来的一件事；模型接触厨房、接口或文件，只有这一条路。 A tool is a named job the runtime can actually run outside the model; that run is the only way the model touches a kitchen, an interface, or a file."
pubDate: 2026-10-21
slug: 2026/10/21/only-through-a-tool
category: AI 系列
tags:
  - AI 系列
  - AI
draft: false
---

AI 系列第 12 篇。上一篇：[嵌入：用一组数表示像不像](/2026/10/20/alike-by-numbers/)。上一篇把「像」收成一组数，并停在一句：模型要接触厨房本身时，只能通过工具。这一篇把工具钉成那一扇门。

## 中文

还是那句问法，还是那本厨房本子：

```text
[系统] 用一个数字回答。
[用户] 冰箱里现在有几盒牛奶？
[模型]
```

上一篇写过：嵌入可以把问句和本子收成数，挑近的几行贴上来。贴上来的是已经写好的字。本子写着「1 盒」，今晚如果已经喝掉，页上仍是「1 盒」。第一篇写过：一次调用交出的是接得顺的下一段。它没有手。门不会因为排序靠前就自己开了。

要碰到今晚的厨房，必须有人在模型外面真的去做一件事：开门、数盒，或者去问一个接口。这件事要有名字，运行时认得出这个名字，并且真的去跑。跑完留下一行字，再贴回下一页。这样一件能跑的事，叫工具。

### 工具是一扇门，不是模型新长出来的手

页顶可以先写下名字：

```text
[系统] 盒数请调用 fridge.count。用一个数字回答。
[用户] 冰箱里现在有几盒牛奶？
[模型]
```

「fridge.count」现在在前缀里。第 3 拍可以把它推到前面。模型接出这几个字，和接出「2。」是同一种动作：看见前缀，交出下一段。第八篇写过：这几个字本身也还是续写。门还没开。

门开在模型外面。运行时认出这是名单上的名字，真的去数，得到 1。没有这一步，厨房对这次调用仍然不存在。本子、嵌入、温度、格式，都动不了冰箱门。它们改的是页上有哪些字，以及后面哪一块排到前面。字不是厨房。

所以「唯一」说的不是产品里只能接一种接口。搜索、读文件、问天气、数冰箱，都可以是工具。唯一的是这条路：模型只写出名字，以及后面要带上的参数；接触发生在运行时跑完这件事的时候。没有跑，就没有接触。写了「我去数过了」，也没有接触。那一句仍是编造。

### 本子、坐标和窗口，都停在字这一侧

第十篇的检索翻的是已经写好的本子。第十一篇的嵌入给本子里的行排远近。第四篇的窗口数的是块。第五篇的提示词是拼好的那一页。这些都在字上工作。本子可以很新，也可以过期。坐标可以很近，也可以贴错。窗口可以装下今晚的记录，也可以把那一行挤掉。没有一扇门因此被打开。

工具和它们的差别，是有没有离开字。检索把柜子里的纸贴上来。工具让运行时去碰柜子外面的东西，再把碰完的结果写成纸。碰完之前，页上没有今晚的盒数。碰完之后，观察才进前缀。第八篇把这一刀切开过。这一篇补上为什么没有第二条路：模型的动作从第一篇到现在没有变。它不会在第 3 拍里长出一只手，伸进冰箱。

名单本身也是字。系统那一行写下 `fridge.count`，这只是告诉排序：接出这个名字是顺的。运行时如果没有把这个名字接到一台真的会数的东西上，模型再把名字写得工整，厨房仍是关着的。反过来，名单上没有的名字，模型也可以接出来。接出来的仍是一段字。没有人跑，就没有观察可写。

同一句问法，页上也可以同时有本子里的旧行，和工具的名字。贴上来的「1 盒」是柜子里的纸。接出来的 `fridge.count` 是一扇还没开的门。两行都在前缀里，第 3 拍都给它们打分。打分高的可以是数字，也可以是名字。只有名字被认出来并且跑完，今晚的厨房才进得了下一页。

### 一个常见误会

误会是：它会用工具了，所以它能看见外面，答案就是刚查过的。

会有这种感觉，是因为界面上出现了「已调用 fridge.count」，气泡里接着是一个数字。调用这两个字更窄。模型交出来的是一段运行时认得出的字。认得出，不等于已经跑过。跑过，不等于后面每一块都顺着观察走。第八篇写过：观察写回来以后，仍可以再编出「还剩两盒」。

连在这个误会上的，是把工具当成模型新长出来的感官。感官这个词好像说它自己能看。看的人是运行时。模型仍然只做第一篇写过的事。换一个没有接上冰箱的名字，或者今天名单是空的，它照样可以接出很像工具的字。字很像，门不存在。

另一个方向上的误会是：只有数冰箱、搜网页才叫工具，读本子、贴资料也算它自己看过了。读本子是检索。检索不碰厨房。工具才碰。把检索回来的「1 盒」读成今晚刚数的，是把柜子里的纸当成了刚开过的门。

留下三句就够这一篇用：工具是运行时在模型外面能真的跑起来的一件事；模型接触外部世界只有这一条路，写出名字还不是接触；本子、坐标和窗口都停在字上，没有跑过的调用，厨房对这次调用不存在。一次调用里，模型、运行时、观察各站在哪一步，下一篇再拆。

## English

Part 12 starts where [part 11](/2026/10/20/alike-by-numbers/) stopped. The last part folded “alike” into a group of numbers, and stopped on one line: when the model needs to touch the kitchen itself, it can only do so through a tool. This part pins the tool as that door.

The question is the same, and so is the household notebook:

```text
[system] Answer with one number.
[user] How many cartons of milk are in the fridge right now?
[model]
```

Part 11 said an embedding can fold the question and the notebook into numbers, then paste the nearest lines. What gets pasted is wording already written. If the notebook says “1 carton” and tonight’s carton has already been drunk, the page still says “1 carton.” Part 1 said one call hands back a smooth next span. It has no hands. A high rank does not open the door.

To touch tonight’s kitchen, someone outside the model has to actually do a job: open the door, count the cartons, or ask an interface. That job needs a name the runtime can recognize, and the runtime has to actually run it. After the run, a line of text is left and pasted onto the next page. A job that can run like that is a tool.

### A tool is a door, not a new pair of hands the model grew

The page top can write the name first:

```text
[system] For a carton count, call fridge.count. Answer with one number.
[user] How many cartons of milk are in the fridge right now?
[model]
```

“fridge.count” is now in the prefix. Beat 3 can lift it. The model appending those letters is the same action as appending “2.”: see a prefix, hand over a next span. Part 8 already said those letters are still a continuation. The door is still closed.

The door opens outside the model. The runtime recognizes a name on the list, actually counts, and gets 1. Without that step, the kitchen is still absent from this call. A notebook, an embedding, a temperature, a format — none of them move the fridge door. They change which words sit on the page, and which later piece rises. Words are not a kitchen.

So “only” is not a claim that a product may attach only one interface. Search, file reads, a weather lookup, and a fridge count can all be tools. What is unique is the path: the model only writes a name, and the arguments that go with it; the touch happens when the runtime has finished running that job. No run, no touch. Writing “I already counted” is also not a touch. That sentence is still fabrication.

### Notebooks, coordinates, and the window all stop on the wording side

Part 10’s retrieval searches a notebook that was already written. Part 11’s embeddings rank the notebook’s lines by near and far. Part 4’s window counts pieces. Part 5’s prompt is the assembled page. All of that works on words. The notebook can be fresh or stale. Coordinates can sit close or paste the wrong line. The window can hold tonight’s log, or drop that line. No door opens because of any of this.

The difference between a tool and those steps is whether anything left the wording. Retrieval pastes paper from the cabinet. A tool lets the runtime touch something outside the cabinet, then writes the result as paper. Before the touch, tonight’s count is not on the page. After the touch, the observation enters the prefix. Part 8 already made that cut. This part adds why there is no second path: the model’s action has not changed since part 1. It does not grow a hand on beat 3 and reach into the fridge.

The list itself is also wording. A system line that writes `fridge.count` only tells the ranking that appending this name is smooth. If the runtime has not wired that name to something that can actually count, the model can write the name as neatly as it likes, and the kitchen stays closed. The other way around, a name that is not on the list can still be appended. What was appended is still a span of text. If nobody ran it, there is no observation to write.

The same question can put an old notebook line and a tool name on the page together. The pasted “1 carton” is paper from the cabinet. The appended `fridge.count` is a door that has not opened. Both lines sit in the prefix. Beat 3 scores both. The high score can be a digit or a name. Only when the name is recognized and the job has finished can tonight’s kitchen enter the next page.

### The usual mix-up

The usual mix-up is to treat “it can use tools” as proof that it can see outside, and that the answer was just looked up.

The feeling comes from the interface. It says “called fridge.count,” and a digit follows in the bubble. “Called” is narrower. What the model handed over is a span the runtime can recognize. Recognition is not a finished run. A finished run is not a promise that every later piece will follow the observation. Part 8 already said that after an observation is written back, “two left” can still be fabricated.

The same mix-up treats a tool as a new sense the model grew. “Sense” sounds as if it looks by itself. The looking belongs to the runtime. The model still only does what part 1 described. Swap in a name that is not wired to the fridge, or leave today’s list empty, and it can still append letters that look like a tool. The letters look right. The door does not exist.

The mix-up in the other direction is that only counting a fridge or searching the web counts as a tool, so reading a notebook and pasting a source also counts as having looked. Reading the notebook is retrieval. Retrieval does not touch the kitchen. A tool does. Reading a retrieved “1 carton” as tonight’s count is treating cabinet paper as a door that just opened.

What this part hands off is short. A tool is a job the runtime can actually run outside the model. That run is the only path the model has to the outside world; writing a name is not yet a touch. Notebooks, coordinates, and the window all stop on the wording; a call that never ran leaves the kitchen absent from this call. Which step belongs to the model, which to the runtime, and which to the observation, in one tool call, is the next part.
