---
title: "改行为的三种办法：提示、检索、微调"
description: "要换一种接法，改的是这一页、贴回来的材料，或排序本身；三处不是同一种「教」。 To change the next span, change this page, the passages pasted back, or the ranking itself; those are not three names for teaching."
pubDate: 2026-11-03
slug: 2026/11/03/three-ways-to-change
category: AI 系列
tags:
  - AI 系列
  - AI
draft: false
---

AI 系列第 23 篇。上一篇：[费用、延迟和步数是同一笔账](/2026/11/02/the-same-bill/)。上一篇把三个数字钉回同一次放回，并停在一句：账要改，先拆改行为的三种办法。这一篇拆这三处：提示、检索、微调。

## 中文

还是那句目标，还是那几扇门。上一篇数的是放回几次。这一篇先不加减步数，只问行为从哪一处改：

```text
[系统] 确认牛奶和鸡蛋的盒数。少于 2 盒的写进购物清单。盒数请调用 fridge.count。写清单请调用 shopping.add。下单请调用 shopping.checkout。checkout 必须先问人。
[用户] 冰箱里牛奶和鸡蛋够不够？不够的列进清单。
[模型]
```

第一篇写过：模型看见前缀，交出下一段。行为就是这一段往哪边排。要它不再写「牛奶」、改写「燕麦奶」；要它不再编盒数、改顺着今晚的本子走，改的不是三套新脑子。改的是前缀、贴回来的材料，或者排序本身。

### 提示：改这一页上的字

提示是第五篇那一页。系统那一行、例子、你刚打的字、运行时又贴上的旧轮次，都在里面。把页顶换成「默认买燕麦奶。少于 2 才写。」前缀变了，第 3 拍的排序跟着变。很顺的下一段可以从 `shopping.add 牛奶` 换成 `shopping.add 燕麦奶`。门没换。权重没换。换的是眼前这张纸。

```text
[系统] 确认盒数。少于 2 的写进清单。默认写燕麦奶，不要写牛奶。盒数请调用 fridge.count。写清单请调用 shopping.add。
[用户] 冰箱里牛奶和鸡蛋够不够？不够的列进清单。
[模型]
```

这一刀来得快。今晚改一行，下一轮就可以换接法。它也贵在每一轮。第二十二篇写过：每一次放回都要把这一页再读一遍。规则写长了，窗口先被规则占满，盒数和观察会被挤下去。第四篇写过：被拿掉的块，这次不存在。提示改得了这一次，改不了没被贴进来的下一次。换一条新线程，系统那一行如果没再写上，燕麦奶就不会自己跟过来。

提示也拦不住空位。页上没有盒数，第 3 拍仍然会交出像数字的块。第八篇把这个叫做编造。把「不要编造」写进页顶，空位还在，很顺的数字还可以再出现。提示改的是页上的字，不是厨房。

### 检索：改贴回来的那几段

检索不改页顶那句规则，也不改权重。它改的是第十篇那一刀：运行时在拼页时，从窗口外面挑几段贴回来。本子里有「今晚牛奶 1。鸡蛋 4。」贴上了，前缀里就有今晚的盒数。贴上的是上周「牛奶 2。」，排序就会顺着 2 走。模型没有多一个动作叫「自己去翻柜子」。翻的人是运行时。

还是那两扇门。检索和观察同类，来源不同。观察是今晚真的去数。检索翻的是已经写好的本子。本子写着 1，今晚如果已经喝掉，贴进来的仍是 1。行为变了，是因为材料变了，不是因为它学会了数冰箱。

检索也占窗口，也要付上一篇那一笔账。每一轮拼页，都可能再翻一次、再贴一次。贴错了，行为也会错：洗衣机说明书上的「一盒」会把牛奶挤到边上。第十一篇写过：近不是证明。挑错的几段一旦坐进前缀，第 3 拍就对着错的材料打分。

适合检索的，是今晚才会变的事实：盒数、清单、上周那张偏好。这些字不该写进权重。写进权重，明天的厨房还是昨天的数字。

### 微调：改排序本身

微调改的不是这一页。它改的是：同一张纸上，哪几种接法算「顺」。提示和检索都还在第 1 拍。微调发生在任何一次放回之前。改完以后，权重换了一版。同一句「回家顺路」，没写燕麦奶，下一段也可以更常接到燕麦奶。窗口没有因此变长。上一篇的前缀账，少付的是那几行规则，不是这一次调用本身。

它改不了今晚的盒数。盒数是厨房里的事实，不是这种便签通常怎样收尾。把「牛奶 1」写进权重，明天盒子若是 3，排序仍可能先交出 1。第八篇的编造，在这里换了一件外套：数字很稳，只是稳在旧厨房。

聊过一轮，权重也不会因此改掉。第六篇写过：换一条新线程，刚才的气泡不会自己跟过来。气泡是字，坐在窗口里。微调要另走一套：拿许多张已经写好的页，在调用外面改排序。聊，只是又往这一页上贴字。贴上去的是提示，不是微调。

微调也更难当场收回。权重里如果已经很顺地写出鸡蛋，页顶再写「少于 2 才写」，两股力会顶着。第 3 拍仍只打一次分。哪一边更靠前，要看这一页和这一版权重。没有单独的开关，写着「以提示为准」。

### 一个常见误会

误会是：三种办法都是「教它」；微调是更强的提示；聊过就等于调过；调过以后就不必再写提示，也不必再检索。

会有这种感觉，是因为产品把「自定义」「知识库」「训练」画在同一块设置里。三处界面。底下不是同一处。提示改这一页。检索改贴上来的材料。微调改排序本身。聊过一轮，窗口里多了几行字，权重没有多记一笔。第十五篇写过：记得的是运行时又把那一行贴进来。

连在这个误会上的，是以为改行为只要选一种。规则短、今晚就要换，先改提示。事实在本子里、而且会过期，用检索。同一类便签要换一种收尾，而且不想每轮都把规则再读一遍，才轮到微调。三种可以叠：页顶写「少于 2 才写」，本子贴今晚的盒数，权重里更常交出这户人家的口吻。叠在一起，仍是第一篇那一次续写。

另一个方向上的误会是：微调能把厨房写进脑子，提示和检索就都是多余的装饰。厨房今晚的数字进不了权重。进得去的，是这种字后面常常怎样接。没有观察，调过的模型仍然会编。没有提示，checkout 仍可能被交出来。第十八篇的名单还在循环外面。

留下三句就够这一篇用：提示改这一页上的字，这一次排序跟着变；检索改拼页时贴回来的材料，没贴上来的这次读不到；微调改的是同一页上何谓顺，改的是权重，不是今晚的厨房。这三处不是同一件事。下一篇再拆：训练、权重和推理不是同一件事。

## English

Part 23 starts where [part 22](/2026/11/02/the-same-bill/) stopped. The last part pinned three numbers back onto the same put-back, and stopped on one line: to change the bill, first split three ways to change behavior. This part splits those three places: the prompt, retrieval, and fine-tuning.

The goal is the same, and so are the doors. Part 22 counted how many times the model was put back. This part does not add or subtract a step yet. It only asks where a change of behavior actually sits:

```text
[system] Confirm the carton counts for milk and eggs. If either is below 2, write it on the shopping list. For a count, call fridge.count. To write the list, call shopping.add. To place an order, call shopping.checkout. checkout must ask a person first.
[user] Are the milk and eggs in the fridge enough? Put whatever is short on the list.
[model]
```

Part 1 already said: the model sees a prefix and hands over a next span. Behavior is which way that span ranks. To stop writing “milk” and write “oat milk”; to stop inventing a count and follow tonight’s notebook — that is not three new minds. It is a change to the prefix, to the material pasted back, or to the ranking itself.

### The prompt: change the wording on this page

The prompt is the page from part 5. The system line, the examples, the line you just typed, and older turns the runtime pasted again all sit on it. Swap the top of the page for “Default to oat milk. Write only if below 2.” The prefix changes, so beat 3’s ranking changes. A smooth next span can move from `shopping.add milk` to `shopping.add oat milk`. The doors did not change. The weights did not change. What changed is the sheet in front of it.

```text
[system] Confirm the counts. Write what is below 2. Default to oat milk; do not write milk. For a count, call fridge.count. To write the list, call shopping.add.
[user] Are the milk and eggs in the fridge enough? Put whatever is short on the list.
[model]
```

This cut is fast. Change one line tonight, and the next round can take a different continuation. It is also paid on every round. Part 22 already said: every put-back reads this page again. If the rules run long, the window fills with rules first, and the counts and observations are pushed off. Part 4 already said: a dropped piece is absent from this call. A prompt can change this call. It cannot change the next one if it is not pasted in. Open a new thread, and if the system line is not written again, oat milk will not walk over by itself.

A prompt also cannot fill an empty slot. With no count on the page, beat 3 can still hand over a number-shaped piece. Part 8 named that fabrication. Write “do not make things up” at the top, and the empty slot is still there; a smooth digit can still appear. The prompt changes wording on the page, not the kitchen.

### Retrieval: change the passages pasted back

Retrieval does not change the rule at the top of the page, and it does not change the weights. It changes the cut from part 10: while the runtime assembles the page, it picks a few stretches outside the window and pastes them. If the notebook holds “tonight, milk 1. eggs 4.” and that line is pasted, tonight’s counts sit in the prefix. If last week’s “milk 2.” is pasted instead, the ranking follows 2. The model did not grow an action called “go rummage the cabinet.” The rummaging belongs to the runtime.

The two doors are still there. Retrieval and observation are the same kind of thing, from different sources. An observation is tonight’s actual count. Retrieval searches a notebook that was already written. If the notebook says 1 and tonight’s carton has already been drunk, what gets pasted is still 1. Behavior changed because the material changed, not because it learned to count a fridge.

Retrieval occupies the window too, and it pays the bill from the last part. Every round of assembly may search again and paste again. A wrong pick changes behavior the wrong way: “one box” from the washer manual can push the milk aside. Part 11 already said closeness is not proof. Once the wrong stretches sit in the prefix, beat 3 scores against the wrong material.

What belongs in retrieval is a fact that will be different tonight: a count, a list, last week’s preference. Those words should not be written into the weights. Write them into the weights, and tomorrow’s kitchen still holds yesterday’s number.

### Fine-tuning: change the ranking itself

Fine-tuning does not change this page. It changes which continuations count as “smooth” on the same sheet. The prompt and retrieval still live on beat 1. Fine-tuning happens before any put-back. After it, the weights are a different edition. The same “on the way home,” with no oat milk written down, can more often continue with oat milk. The window did not grow. What the last part’s prefix-bill can skip is those extra rule-lines, not the call itself.

It cannot change tonight’s count. A count is a fact in the kitchen, not how this kind of note usually ends. Write “milk 1” into the weights, and if tomorrow the carton is 3, the ranking may still hand over 1 first. Part 8’s fabrication puts on another coat here: the digit is stable, only stable about an old kitchen.

A chat does not change the weights either. Part 6 already said: open a new thread, and the last bubble will not follow on its own. A bubble is wording. It sits in the window. Fine-tuning takes a different path: many pages already written, and the ranking is changed outside any one call. A chat only pastes more wording onto this page. What was pasted is a prompt, not a fine-tune.

Fine-tuning is also harder to take back on the spot. If the weights already treat writing eggs as smooth, and the top of the page says “write only if below 2,” the two pulls sit against each other. Beat 3 still scores once. Which side ranks higher depends on this page and this edition of the weights. There is no separate switch that says “the prompt wins.”

### The usual mix-up

The usual mix-up is to treat the three as one act of “teaching”; to treat fine-tuning as a stronger prompt; to treat a finished chat as a finished tune; and to treat a tuned model as one that no longer needs a prompt or retrieval.

The feeling comes from products drawing “custom instructions,” “knowledge,” and “training” in one settings panel. Three interfaces. Underneath they are not the same place. The prompt changes this page. Retrieval changes the material pasted on. Fine-tuning changes the ranking itself. After one chat, the window holds a few extra lines. The weights did not record a new mark. Part 15 already said: what it “remembers” is the runtime pasting that line again.

The same mix-up treats a change of behavior as a choice of one lever. A short rule that has to change tonight belongs in the prompt. A fact that lives in a notebook and will go stale belongs in retrieval. A whole family of notes that should end differently, without re-reading the rule every round, is when fine-tuning earns its keep. The three can stack: the top of the page says “write only if below 2,” the notebook pastes tonight’s counts, and the weights more often hand over this household’s tone. Stacked, it is still the one continuation from part 1.

The mix-up in the other direction is that fine-tuning writes the kitchen into a mind, so the prompt and retrieval are decoration. Tonight’s number cannot go into the weights. What can go in is how this kind of wording usually continues. With no observation, a tuned model can still fabricate. With no prompt, checkout can still be handed over. The list from part 18 still sits outside the loop.

What this part hands off is short. A prompt changes the wording on this page, and this call’s ranking follows. Retrieval changes the material pasted while the page is assembled; what was never pasted is not read in this call. Fine-tuning changes what counts as smooth on the same page — the weights, not tonight’s kitchen. These three are not the same thing. The next part splits that further: training, weights, and inference are not the same job.
