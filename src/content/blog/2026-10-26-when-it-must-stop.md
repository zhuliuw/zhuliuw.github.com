---
title: "停止条件：完成、上限、重复失败、需要人点头"
description: "循环什么时候必须断：做成了、步数到了、同一扇门反复失败、或下一扇门要等人点头。 The loop has to break for one of four reasons: the job is done, the cap is hit, the same door keeps failing, or the next door needs a person to nod."
pubDate: 2026-10-26
slug: 2026/10/26/when-it-must-stop
category: AI 系列
tags:
  - AI 系列
  - AI
draft: false
---

AI 系列第 17 篇。上一篇：[规划的三种安排：边想边做、先计划、做完再看](/2026/10/25/three-ways-to-plan/)。上一篇把计划拆成三种排法，并停在一句：计划能走下去，还要知道何时必须停。这一篇拆停止条件：完成、上限、重复失败、需要人点头。

## 中文

还是那句目标，还是那几扇门。上一篇可以先写清单、边想边做、收口前再核一次。三种排法都还在第十四篇那圈循环里。循环自己不会收工。谁在一扇门之后决定「这一次不要再把模型放回页末」，就是停止条件。

```text
[系统] 确认牛奶和鸡蛋的盒数。少于 2 盒的写进购物清单。盒数请调用 fridge.count。写清单请调用 shopping.add。下单请调用 shopping.checkout。步数上限 8。同一扇门同一组参数失败 3 次就停。checkout 必须先等人点头。
[用户] 冰箱里牛奶和鸡蛋够不够？不够的列进清单。列完如果要下单，先问我。
[模型]
```

第十四篇写过：智能体是目标加上循环。更早有一篇中文单篇，把停止条件写成要在循环外面写死：[AI 智能体的执行原理](/2026/10/09/ai-agent-execution/)。那一篇不算本系列的第一篇。这一篇仍从冰箱这句问法写起，只钉住四种停法。停的人是运行时。模型接出「我好了」，仍是页上的字。

### 完成：该做的都有观察，才把气泡交给你

完成，是目标里该做的事都有观察撑着，模型这一轮交出的是一句收口，不是又一个名字。运行时才把气泡交给你，循环不再出发。

还是牛奶 1、鸡蛋 4。数过，写过牛奶，鸡蛋不必写。页上有「1」「4」「已写入。」。模型接出「今晚牛奶 1 盒已列进清单，鸡蛋 4 盒够。」运行时核过：没有再交出门的名字，关键步骤有观察，收口和观察说的是同一件事。这才是完成。

上一篇的「做完再看」是页上多一轮核对。停止条件里的完成，是运行时在循环外面做的那次检查。核对那一轮仍可能编造。第八篇写过：形状对了，也可以是编造。所以「完成」不能只听模型说「已经列进清单」。没有「已写入。」这一行观察，运行时就不该把这句话当收口。

完成停的是「这件事做完了」。下面三种停，常常是「还没做完，但这一圈必须断」。

### 上限：步数用完，即使目标还短

上限是事先写死的数字：最多几轮、最多开几扇门、最多花多少时间。到了这个数，运行时不再把模型放回页末。

目标如果改成「把冰箱里每一样都数一遍」，样数比 8 多，第八轮之后模型还想交 `fridge.count`。没有上限，循环会一直开下去，窗口也会被旧观察占满。第十五篇写过：满了以后，动手拿掉的是运行时。上限先拦住的是圈数，不是空位。

撞上上限，不是完成。气泡里如果仍写「都数过了」，那是编造。运行时该交出去的是：停在上限，数到了哪几样，哪几样还没有观察。模型自己说「我还可以再试」，运行时也不该再出发。时间或费用写成另一个数字，也是同一种上限：到了就断，不断在模型愿不愿意收手。

### 重复失败：同一扇门、同一组参数，失败到次数

重复失败，是同一扇门带着同一组参数，观察连续几次都是「写不进去」或「没有这个名字」。运行时数过次数，到了就停。不必等到上限。

还是 `shopping.add`。第一轮观察是「写不进去」。第二轮模型再交同一个名字、同一行牛奶。第三轮还是。上一篇写过：不许改计划，循环会抱着过时的一步走到上限。重复失败把这一抱提前剪断。

停下来之后，页上要留下「同一扇门失败了三次」这一行。只停、不写，下一轮若有人又把它放回去，模型看见的仍是「再试一次」的空位。第八篇写过：空位上仍会接出像成功的块。

失败三次，不是完成。清单可能还是空的。气泡该说的是：这扇门打不开，停在这里。不要把「已写入。」接出来充数。

### 需要人点头：下一扇门会留下收不回的痕迹

需要人点头，是下一扇门会花钱、会发给别人、会删掉东西。运行时看见名单上的这个名字，先停，把要开的门摊给你，等人回一句「开」或「不开」。

`shopping.checkout` 会把清单变成一笔订单。模型交出这个名字，运行时不要先跑。厨房门外还没有订单。你点头之后，观察才是「已下单」或「你否了」。模型先接出「已经买好了」，仍是编造。门还关着。

这一种停不是收工，是把循环挂住。点头之后还可以再出发。否了，就不要再交同一扇门。下一篇会把「哪些动作必须先问人」从这一条里再拆开。

四种停法可以叠在同一次任务里。先看是不是完成，再看是不是必须问人，再看是不是同一扇门重复失败，最后看上限。叠在一起，仍是运行时在循环外面做的检查。模型每一轮仍然只交下一段。

### 一个常见误会

误会是：它是智能体，所以它自己知道何时停；它说「我好了」，就是做完了；停了，就是做成了。

会有这种感觉，是因为产品在条上画出勾，气泡里也常先出现「已完成」。勾和那几个字是界面。第十四篇写过：气泡里的步骤也是字。没有运行时在门外核观察、数步数、数失败、拦住要问人的门，循环要么不收工，要么把一句编造当收口。

连在这个误会上的，是把停止条件当成模型新长出来的自制力。自制力这个词好像说它会自己收手。收手的是运行时。模型被放回页末，就还会再交下一段。温度高一点，第七篇写过，同一句也可以走出另一扇门。门开不开，不该只交给这一段续写。

另一个方向上的误会是：设了上限，就算有了停止条件。上限只是四种里的一种。没有「完成」那一核，上限到了也会交出去一句听起来做完的话。没有「重复失败」，它会在同一扇坏门上把上限用完。没有「需要人点头」，订单会在你看见之前就出了门。

留下三句就够这一篇用：停止条件是运行时在循环外面写死的检查，不是模型自己说的「我好了」；四种停法是完成、上限、重复失败、需要人点头，后三种停了不等于做成了；完成要看观察还在不在窗口里，点头要等你回一句，循环才能再出发。下一扇会留下痕迹的门，该不该先问，下一篇再拆。

## English

Part 17 starts where [part 16](/2026/10/25/three-ways-to-plan/) stopped. The last part split a plan into three arrangements, and stopped on one line: for the plan to keep moving, the loop also has to know when it must stop. This part splits the stop conditions: done, a cap, repeated failure, or a person has to nod.

The goal is the same, and so are the doors. Part 16 can write a list first, do it as you go, and look back before closing. All three arrangements still sit in the loop from part 14. The loop does not clock out by itself. Whoever decides, after a door, “do not put the model back at the end of the page this time” is the stop condition.

```text
[system] Confirm the carton counts for milk and eggs. If either is below 2, write it on the shopping list. For a count, call fridge.count. To write the list, call shopping.add. To place an order, call shopping.checkout. Cap: 8 steps. Stop if the same door with the same arguments fails 3 times. checkout must wait for a person to nod.
[user] Are the milk and eggs in the fridge enough? Put whatever is short on the list. If you would place an order after listing, ask me first.
[model]
```

Part 14 already said an agent is a goal plus a loop. An earlier Chinese-only tutorial wrote the same rule: stop conditions have to be written outside the loop: [How an AI agent executes](/2026/10/09/ai-agent-execution/). That post is not part 1 of this series. This part still starts from the fridge question, and only pins four ways to stop. The one who stops is the runtime. “I am done,” appended by the model, is still wording on the page.

### Done: hand over the bubble only when the required work has observations

Done means the jobs in the goal have observations under them, and this round the model hands over a closing sentence, not another name. Only then does the runtime hand you the bubble, and the loop does not start again.

Keep the milk at 1 and the eggs at 4. They have been counted; the milk has been written; the eggs do not need a write. The page holds “1”, “4”, and “written.” The model appends “1 carton of milk tonight, already on the list; 4 cartons of eggs, enough.” The runtime has checked: no door name was handed over, the required steps have observations, and the close and the observations say the same fact. That is done.

“Look back after,” in the last part, is an extra checking round on the page. “Done,” as a stop condition, is the check the runtime does outside the loop. That checking round can fabricate too. Part 8 already said a well-shaped span can still be fabrication. So “done” cannot listen only to the model saying “already on the list.” Without the observation line “written.”, the runtime should not take that sentence as a close.

A stop for “done” means the job finished. The next three stops often mean “not finished, but this loop has to break.”

### A cap: the step budget is used up, even if the goal is still short

A cap is a number written in advance: at most this many rounds, this many doors, this much time. When the number is reached, the runtime does not put the model back at the end of the page.

If the goal is rewritten as “count every item in the fridge,” and there are more than 8 items, after the eighth round the model still wants to hand over `fridge.count`. With no cap, the loop keeps opening doors, and the window fills with old observations. Part 15 already said it: when the window is full, the runtime is the one that drops lines. The cap first stops the number of turns, not the empty slots.

Hitting a cap is not done. If the bubble still says “everything was counted,” that is fabrication. What the runtime should hand over is: stopped at the cap, which items were counted, which items have no observation. If the model says “I can try again,” the runtime still should not start another round. Time or money written as another number is the same kind of cap: when it is reached, the loop breaks, whether or not the model wants to stop.

### Repeated failure: the same door, the same arguments, failed enough times

Repeated failure is the same door with the same arguments, and the observation is “could not write” or “no such name” several times in a row. The runtime counts, and stops when the count is reached. It does not have to wait for the cap.

Keep `shopping.add`. The first observation is “could not write.” The second round the model hands over the same name and the same milk line. The third round does it again. The last part already said it: if the plan cannot be revised, the loop will hug that stale step until it hits a cap. Repeated failure cuts that hug short.

After the stop, the page needs a line that says the same door failed three times. If it only stops and writes nothing, and someone puts the model back later, the model still sees an empty slot that looks like “try once more.” Part 8 already said a success-shaped span can still be appended from an empty slot.

Failing three times is not done. The list may still be empty. The bubble should say: this door will not open; we stopped here. It should not append “written.” to fill the space.

### A person has to nod: the next door would leave a mark you cannot take back

A person has to nod when the next door would spend money, send something to someone else, or delete a thing. The runtime sees that name on the list, stops first, lays the door out for you, and waits for “open” or “do not open.”

`shopping.checkout` turns the list into an order. When the model hands over that name, the runtime should not run it first. There is still no order outside the kitchen door. After you nod, the observation is “ordered” or “you said no.” If the model first appends “already bought,” that is still fabrication. The door is still closed.

This stop is not clocking out. It hangs the loop. After a nod, it can start again. After a no, it should not hand over the same door. The next part will split “which actions must ask a person first” out of this one line.

The four stops can sit in the same job. Check for done first, then whether a person must be asked, then whether the same door has failed enough times, and the cap last. Stacked like that, it is still a check the runtime does outside the loop. Each round, the model still only hands over a next span.

### The usual mix-up

The usual mix-up is to treat “it is an agent” as proof that it knows when to stop, that “I am done” means the job is finished, and that a stop means success.

The feeling comes from a checkmark on the product bar, and from “done” appearing in the bubble first. The checkmark and those words are the interface. Part 14 already said it: the steps in the bubble are wording too. Without a runtime outside the door that checks observations, counts steps, counts failures, and blocks a door that needs a nod, the loop either never clocks out, or takes a fabricated sentence as a close.

The same mix-up treats a stop condition as self-control the model grew. “Self-control” sounds as if it will hold itself back. The one who holds back is the runtime. Put the model back at the end of the page, and it will hand over another span. Turn the temperature up a little, and part 7 already said the same sentence can walk out a different door. Whether a door opens should not be left to this one continuation.

The mix-up in the other direction is that setting a cap counts as having stop conditions. A cap is only one of the four. Without the “done” check, a cap will still hand over a sentence that sounds finished. Without “repeated failure,” it will spend the whole cap on the same broken door. Without “a person has to nod,” the order will leave the door before you see it.

What this part hands off is short. A stop condition is a check the runtime writes outside the loop, not the model saying “I am done.” The four stops are done, a cap, repeated failure, and a person has to nod; the last three can stop without the job being finished. Done depends on observations still sitting in the window; a nod waits for your sentence before the loop can start again. Whether the next door that would leave a mark has to ask first is the next part.
