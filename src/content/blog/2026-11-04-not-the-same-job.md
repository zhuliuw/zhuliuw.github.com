---
title: "训练、权重和推理不是同一件事"
description: "训练在调用外面写出新一版排序，权重是坐着不动的那一版，推理是对着这一版读这一页；三件事不能互相顶替。 Training writes a new edition of the ranking outside any call, the weights are the edition that sits still, and inference reads this page against that edition; one job cannot stand in for the others."
pubDate: 2026-11-04
slug: 2026/11/04/not-the-same-job
category: AI 系列
tags:
  - AI 系列
  - AI
draft: false
---

AI 系列第 24 篇。上一篇：[改行为的三种办法：提示、检索、微调](/2026/11/03/three-ways-to-change/)。上一篇把改行为拆成三处，并停在一句：微调改的是权重，不是今晚的厨房。这一篇再拆那一处后面的三件事：训练、权重和推理。

## 中文

还是那句目标，还是那几扇门。上一篇问行为从哪一处改。这一篇先不改提示，也不改本子，只问一次放回里，哪一段是训练，哪一段是权重，哪一段是推理。

```text
[系统] 确认牛奶和鸡蛋的盒数。少于 2 盒的写进购物清单。盒数请调用 fridge.count。写清单请调用 shopping.add。下单请调用 shopping.checkout。checkout 必须先问人。
[用户] 冰箱里牛奶和鸡蛋够不够？不够的列进清单。
[模型]
```

第一篇写过：模型看见前缀，交出下一段。交出这一段的那一次，叫推理。推理用的那一版排序，叫权重。写出新一版排序的那一套，叫训练。三件事可以前后接着，但不是同一次动作。

### 训练：在任何一次放回之前，写出新一版排序

训练不发生在今晚这张便签上。它发生在调用外面。拿许多张已经写好的页，看这一版权重把哪几种接法排到前面，再把排序推近那些页上已经写下的收尾。推完以后，权重换了一版。上一篇的微调，是这种工作里较晚、较小的一刀。更早、更大的那一刀，也是训练：许多公开的文字，先写出第一版「这种字后面常常怎样接」。

训练改的是何谓顺。同一句「回家顺路」，训练之前更常接到「买一盒牛奶」，训练之后可以更常接到「买燕麦奶」。门没有因此多一扇。今晚的盒数也没有写进去。写进去的，是这种便签通常怎样收尾。

训练也要另付一笔账。第二十二篇数的是放回。训练数的是另一堆页、另一段时间和另一份机器。聊过一轮，不会顺手把这一笔付掉。第六篇写过：换一条新线程，刚才的气泡不会自己跟过来。气泡是字。训练要的是在调用外面改排序。

把「牛奶 1」写进训练材料，得到的也不是今晚的厨房。得到的是：这种问句后面，很稳地接上 1。明天盒子若是 3，推理仍可能先交出 1。第八篇的编造，在这里穿的是训练留下的外套。

### 权重：坐着不动的那一版排序

权重是训练交出来的那一版。一次推理开始时，它已经在那里。一次推理结束时，它还是那一版。第 3 拍对着这一页打分，用的就是它。它不因为你又打了一句而多记一笔，也不因为观察贴回来而改掉一个数字。

上一篇写过：微调改的是权重。改完之前和改完之后，是两版。今晚这三步放回，用的是同一版。`fridge.count` 交出去，观察贴回来，「牛奶 1。鸡蛋 4。」坐进前缀，权重没有换成「今晚牛奶=1」那一版。换成的是这一页上的字。

权重也不是柜子。柜子里今晚几盒，属于厨房。权重里有的，是许多厨房便签里常常出现的接法。第十五篇写过：留在窗口里的，和写在窗口外的。权重比窗口外的本子还要外面：本子还能在拼页时贴回来，权重不会在第 3 拍里被改写一行。

所以权重稳，稳的是排序。不稳的是今晚。把权重当成记事本，会把昨天的盒数当成今天的观察。

### 推理：对着这一版，读这一页，交出下一段

推理是第一篇那一次续写。运行时拼好这一页，把这一版权重放在页末，第 3 拍打分，交出下一段。第三篇写过：一块一块接，接上以后再打分。整段过程里，权重不更新。更新的是前缀：多了一块刚交出的字，或者多了一段贴回来的观察。

还是牛奶 1、鸡蛋 4。三次放回，是三次推理：

```text
[模型] fridge.count
[观察] 牛奶 1。鸡蛋 4。
[模型] shopping.add 牛奶
[观察] 已写入：牛奶。
[模型] 今晚牛奶 1 盒已列进清单，鸡蛋 4 盒够。
```

三次都在读同一版权重。变的是页。第一次页上没有盒数，很顺的下一段是出门去数。第二次页上有了观察，很顺的下一段是写清单。第三次页上有了「已写入」，很顺的下一段是收口。看起来它「学会了今晚的盒数」。学会的不是权重。是运行时又把观察贴进了这一页。

聊，也是推理。你补一句「默认燕麦奶」，下一轮推理读到这句，排序跟着变。提示那一刀发生在第 1 拍。权重仍是进门时那一版。产品把长对话画成「它越来越懂你」，底下是窗口变长，不是训练又跑了一轮。

推理也编得出来。页上没有盒数，这一版权重仍会把像数字的块排到前面。训练不能代替观察。权重不能代替今晚的本子。推理不能一边交下一段，一边改自己用的那一版。

### 一个常见误会

误会是：训练、权重、推理是同一件事的三个名字；聊就是在训练；权重复述了它读过的事实；推理结束以后模型就更聪明了一点。

会有这种感觉，是因为产品把「训练」「自定义」「对话」画在同一块。三个词。底下不是同一处。训练在调用外面写出新一版。权重是坐着的那一版。推理是对着这一版读这一页。聊过以后，窗口里多了几行。权重没有多记一笔。第十五篇写过：记得的是运行时又把那一行贴进来。

连在这个误会上的，是以为只要推理得够久，就能得到微调的效果；或者以为把说明书丢进一次对话，就等于写进了权重。说明书坐在这一页上，这一次排序会顺着它。换一条新线程，说明书不在了，权重还是旧的那一版。反过来，把今晚的盒数写进训练，推理会很稳地交出旧数字。稳不是观察。

另一个方向上的误会是：既然推理不改权重，那提示和检索就都是临时的，只有训练才算数。上一篇已经拆过：规则短、今晚就要换，先改提示。事实会过期，用检索。同一类收尾要换，而且不想每轮再读一遍规则，才轮到训练里的微调。推理是每次都要发生的那一步。没有推理，训练出来的权重只是一版还没被放回页末的排序。

留下三句就够这一篇用：训练在调用外面写出新一版排序；权重是推理时坐着不动的那一版；推理是对着这一版读这一页，交出下一段。三件事不是同一件事。下一篇再拆：对齐在执行里表现为什么：拒绝、确认、边界。

## English

Part 24 starts where [part 23](/2026/11/03/three-ways-to-change/) stopped. The last part split a change of behavior into three places, and stopped on one line: fine-tuning changes the weights, not tonight’s kitchen. This part splits the three jobs sitting behind that line: training, the weights, and inference.

The goal is the same, and so are the doors. Part 23 asked where a change of behavior actually sits. This part does not change the prompt yet, and it does not change the notebook. It only asks, in one put-back, which stretch is training, which is the weights, and which is inference.

```text
[system] Confirm the carton counts for milk and eggs. If either is below 2, write it on the shopping list. For a count, call fridge.count. To write the list, call shopping.add. To place an order, call shopping.checkout. checkout must ask a person first.
[user] Are the milk and eggs in the fridge enough? Put whatever is short on the list.
[model]
```

Part 1 already said: the model sees a prefix and hands over a next span. The call that hands over that span is inference. The edition of the ranking inference uses is the weights. The job that writes a new edition of the ranking is training. The three can follow one another. They are not the same act.

### Training: write a new edition of the ranking before any put-back

Training does not happen on tonight’s note. It happens outside the call. It takes many pages already written, looks at which continuations this edition of the weights ranks first, and pushes the ranking toward the endings those pages already wrote. After the push, the weights are a different edition. Fine-tuning in the last part is a later, smaller cut of this job. The earlier, larger cut is training too: a mass of public wording, used to write the first edition of “how this kind of wording usually continues.”

Training changes what counts as smooth. The same “on the way home,” before training, more often continues with “buy a carton of milk”; after training, it can more often continue with “buy oat milk.” No extra door appeared. Tonight’s count was not written in. What was written in is how this kind of note usually ends.

Training also pays a different bill. Part 22 counted put-backs. Training counts another stack of pages, another stretch of time, and another set of machines. One chat does not pay that bill on the side. Part 6 already said: open a new thread, and the last bubble will not follow on its own. A bubble is wording. Training wants the ranking changed outside any one call.

Write “milk 1” into the training pages, and what you get is still not tonight’s kitchen. What you get is: after a question like this, 1 is a stable continuation. If tomorrow the carton is 3, inference may still hand over 1 first. Part 8’s fabrication puts on the coat training left behind.

### The weights: the edition of the ranking that sits still

The weights are the edition training handed over. When one inference starts, they are already there. When that inference ends, they are still that edition. Beat 3 scores this page with them. They do not record a new mark because you typed another line, and they do not change a digit because an observation was pasted back.

The last part already said: fine-tuning changes the weights. Before the change and after it, those are two editions. Tonight’s three put-backs use the same one. `fridge.count` is handed over, the observation is pasted back, “milk 1. eggs 4.” sits in the prefix — the weights did not become an edition that says “tonight, milk = 1.” What changed is the wording on this page.

The weights are not a cabinet. How many cartons sit in the cabinet tonight belongs to the kitchen. What the weights hold is the continuations that often appear on kitchen notes. Part 15 already split what stays in the window from what is written outside it. The weights sit even further out than the notebook outside the window: the notebook can still be pasted while the page is assembled; the weights will not have a line rewritten on beat 3.

So when the weights are stable, what is stable is the ranking. What is not stable is tonight. Treat the weights as a notepad, and yesterday’s count gets read as today’s observation.

### Inference: read this page against this edition, and hand over the next span

Inference is the one continuation from part 1. The runtime assembles this page, sets this edition of the weights at the end of it, beat 3 scores, and a next span is handed over. Part 3 already said: append one piece, then score again. Through that whole stretch, the weights do not update. What updates is the prefix: one more piece just handed over, or one more observation pasted back.

Keep the milk at 1 and the eggs at 4. Three put-backs are three inferences:

```text
[model] fridge.count
[observation] milk 1. eggs 4.
[model] shopping.add milk
[observation] written: milk.
[model] Tonight, milk at 1 is on the list; eggs at 4 are enough.
```

All three read the same edition of the weights. What changed is the page. The first page has no count, so a smooth next span is to go out and count. The second page has an observation, so a smooth next span is to write the list. The third page has “written,” so a smooth next span is a closing sentence. It looks as if it “learned tonight’s count.” What learned is not the weights. It is the runtime pasting the observation onto this page again.

A chat is inference too. Add a line, “default to oat milk,” and the next inference reads it, so the ranking follows. That cut from the prompt happens on beat 1. The weights are still the edition that walked in. Products draw a long conversation as “it understands you better and better.” Underneath, the window grew. Training did not run another round.

Inference can fabricate too. With no count on the page, this edition of the weights can still lift a number-shaped piece. Training cannot replace an observation. The weights cannot replace tonight’s notebook. Inference cannot hand over the next span and, in the same motion, rewrite the edition it is using.

### The usual mix-up

The usual mix-up is to treat training, the weights, and inference as three names for one job; to treat a chat as training; to treat the weights as a recitation of facts they have read; and to treat the model as a little smarter after inference ends.

The feeling comes from products drawing “training,” “custom,” and “chat” in one panel. Three words. Underneath they are not the same place. Training writes a new edition outside the call. The weights are the edition that sits. Inference reads this page against that edition. After a chat, the window holds a few extra lines. The weights did not record a new mark. Part 15 already said: what it “remembers” is the runtime pasting that line again.

The same mix-up treats a long enough inference as a fine-tune; or treats dropping a manual into one conversation as writing it into the weights. The manual sits on this page, and this call’s ranking follows it. Open a new thread, the manual is gone, and the weights are still the old edition. The other way around, write tonight’s count into training, and inference will steadily hand over the old digit. Steady is not an observation.

The mix-up in the other direction is that, because inference does not change the weights, the prompt and retrieval are temporary, and only training counts. The last part already split this: a short rule that has to change tonight belongs in the prompt. A fact that will go stale belongs in retrieval. A whole family of endings that should change, without re-reading the rule every round, is when the fine-tune inside training earns its keep. Inference is the step that has to happen every time. With no inference, the weights training produced are only an edition that has not yet been put back at the end of a page.

What this part hands off is short. Training writes a new edition of the ranking outside the call. The weights are the edition that sits still during inference. Inference reads this page against that edition and hands over a next span. These three are not the same job. The next part splits what alignment looks like in a run: a refusal, a confirmation, a boundary.
