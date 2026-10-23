---
title: "智能体：目标加上会停下来再出发的循环"
description: "智能体不是另一种脑子，是一句还没做完的目标，加上会在一扇门之后停住、再把模型放回页末的循环。 An agent is not another kind of mind; it is an unfinished goal plus a loop that stops after a door and puts the model back at the end of the page."
pubDate: 2026-10-23
slug: 2026/10/23/goal-plus-a-loop
category: AI 系列
tags:
  - AI 系列
  - AI
draft: false
---

AI 系列第 14 篇。上一篇：[一次工具调用里，模型、运行时、观察各做哪一步](/2026/10/22/who-does-which-step/)。上一篇把一次调用拆成三步，并停在一句：目标要做完，往往要停下来再出发。这一篇把「停下来再出发」收成智能体。

## 中文

还是那句问法，还是那扇门。上一篇停在观察贴回下一页。盒数已经在前缀里。如果这一次只要一个数字，循环可以到此结束。目标如果写成另一句，一扇门开完还不够：

```text
[系统] 确认今晚的盒数。少于 2 盒就写入购物清单。盒数请调用 fridge.count。写清单请调用 shopping.add。
[用户] 冰箱里的牛奶够不够？不够就列进清单。
[模型]
```

目标不是「回答这句话」。目标是把这件事做完：数过，不够就写上，写上之后才收口。数完得到 1，清单还是空的。做完往往要经过好几轮：交出名字，停住，等观察贴回来，再对着新的一页出发。

会停下来再出发的这一圈，加上前面那句还没做完的目标，就是这一篇里的智能体。它不是另一个更会写的模型。模型仍然只做第一篇写过的事：看见前缀，交出下一段。多出来的是运行时。它守着目标，在一扇门开完之后，决定要不要再把模型放到页末。

更早有一篇中文单篇，走过同一条圈：[AI 智能体的执行原理](/2026/10/09/ai-agent-execution/)。那一篇不算本系列的第一篇。这一篇仍从冰箱这句问法写起。

### 一次回复在交完下一段就停；目标常常还没做完

第一篇写过：一次调用交出下一段，然后这次调用结束。屏幕上的气泡，是这一截被切出来给你看。第 3 拍打完分，模型就停了。它没有在工具跑的时候继续想。第十三篇写过：写完 `fridge.count`，这一次模型的工作结束了。门还关着。观察还没贴回来。

这一停是真的停。如果运行时把这一截当最终答复交给你，你看见的是一个工具名，或者一个「已调用」。目标里的清单还没写。盒数也还没变成一句能收口的话。

智能体要的不是把这一截写得更长。它要的是：这一截如果只是一个名字，就先停住；等运行时跑完、观察贴上，再把模型放回页末，对着更长的前缀再接一次。停，是这一次续写结束。再出发，是另一次续写开始。中间那一步不是模型在转，是运行时在拼下一页。

所以智能体不是一段更长的提示词。提示词仍是第五篇写过的那一页。页可以写上目标，也可以写上工具名。没有人在一扇门之后再把它放回页末，目标就只是页上的字。字不会自己去写清单。

### 同一扇门，可以开一轮，也可以开几轮

还是数盒。第一轮模型交出 `fridge.count`。运行时去数，得到 1。观察贴回来：

```text
[系统] 确认今晚的盒数。少于 2 盒就写入购物清单。盒数请调用 fridge.count。写清单请调用 shopping.add。
[用户] 冰箱里的牛奶够不够？不够就列进清单。
[模型] fridge.count
[观察] 1
[模型]
```

目标还在。1 小于 2。清单还没有对应的观察。运行时检查过：模型没有交出最终答复，步数也还没用完。于是再出发。第 3 拍对着这串打分，`shopping.add` 可以顺着观察和目标走上来。模型交出名字和参数。运行时再去写清单。写完又贴一行：「已写入。」

第三轮再出发。两件该做的事都有观察撑着：数过，也写过。这时接出一句收口的话才站得住，比如「今晚 1 盒，已经列进清单。」气泡是这第三轮的续写，不是第一轮在门后偷偷写完的。

一轮和三轮用的是同一个模型。差别在运行时有没有在门与门之间把它放回去。只有一扇门、只要一个数字，也可以不循环。第十二篇把工具钉成门。有工具，不等于已经是智能体。门开一次，是一次调用。智能体是围着目标，把「开门、贴回、再出发」收成一圈。

那篇更早的单篇把循环写成组装、决定、执行、写回、检查是否停止。这一篇只钉住智能体是什么：一句还没做完的目标，加上会在一扇门之后停下来、再把模型放回页末的那一圈。计划怎么排、记忆放哪、何时必须停，后面几篇再拆。

### 一个常见误会

误会是：它是智能体，所以它自己会一直想，门开着的时候它也在看冰箱，答案是它连续做完的。

会有这种感觉，是因为产品把好几轮收成一条「正在处理」。条下面仍是第十三篇的三步，只是三步走完还不收工。模型没有在运行时数盒的时候多看一眼。它停着。再看见 1，是因为 1 已经被写成观察，贴进了下一页。

连在这个误会上的，是把智能体当成另一种脑子。脑子还是第一篇那个。换一个不会循环的运行时，同一组权重仍然只交一段就停。反过来，循环如果在第一轮之后就交给你一个工具名当答案，目标也没有做完。智能体不在权重里，在这圈有没有被接上。

另一个方向上的误会是：名单上有工具，它就是智能体；或者它在一个气泡里写出「我先数，再写清单」，这件事就算做完了。名单是字。气泡里的步骤也是字。没有停下来让人去跑，再出发对着观察写下一句，厨房和清单都还在门外。第八篇写过：写了「我去数过了」，仍是编造。

留下三句就够这一篇用：智能体是一句还没做完的目标，加上会停下来再出发的循环；循环由运行时接着，模型每一轮仍然只交下一段；有工具还不是智能体，一扇门开完、观察贴回来，目标不够，才再出发。循环一长，页上会堆起旧观察。哪些留在窗口里，哪些要写到窗口外，下一篇再拆。

## English

Part 14 starts where [part 13](/2026/10/22/who-does-which-step/) stopped. The last part split one tool call into three seats, and stopped on one line: finishing a goal often means stopping and starting again. This part folds “stop and start again” into what this series calls an agent.

The question is the same, and so is the door. Part 13 stopped when the observation had been pasted onto the next page. The carton count is already in the prefix. If this turn only wants a number, the loop can end there. If the goal is written as a different sentence, opening one door is not enough:

```text
[system] Confirm tonight’s carton count. If it is below 2, write it on the shopping list. For a count, call fridge.count. To write the list, call shopping.add.
[user] Is there enough milk in the fridge? If not, put it on the list.
[model]
```

The goal is not “answer this sentence.” The goal is to finish the job: count, write the list if needed, and only then close. A count of 1 still leaves the list empty. Finishing often takes several rounds: hand over a name, stop, wait for the observation to be pasted back, then start again against a new page.

That loop — plus the unfinished goal in front of it — is the agent in this part. It is not a model that writes better. The model still only does what part 1 described: see a prefix, hand over a next span. What is added is the runtime. It keeps the goal, and after a door has opened it decides whether to put the model back at the end of the page.

An earlier Chinese-only tutorial walked the same loop: [How an AI agent executes](/2026/10/09/ai-agent-execution/). That post is not part 1 of this series. This part still starts from the fridge question.

### One reply stops when the next span is handed over; the goal is often still open

Part 1 said one call hands over a next span, then that call ends. The bubble on the screen is that span, cut out for you. After beat 3 has scored, the model has stopped. It is not still thinking while the tool runs. Part 13 already said: once `fridge.count` has been written, the model’s job in that call is over. The door is still closed. The observation has not been pasted back.

The stop is a real stop. If the runtime hands that span to you as the final answer, you see a tool name, or the words “called a tool.” The list in the goal has not been written. The count has not become a sentence that can close the job.

An agent does not ask for a longer span. It asks for this: if the span is only a name, stop first; wait for the runtime to run and paste the observation; then put the model back at the end of the page, and append again against a longer prefix. Stop means this continuation has ended. Start again means another continuation has begun. The step in between is not the model turning. It is the runtime assembling the next page.

So an agent is not a longer prompt. The prompt is still the page part 5 described. The page can hold a goal, and it can hold tool names. If nobody puts the model back at the end of the page after a door, the goal is only wording on the page. Wording does not write a shopping list by itself.

### The same door can open once, or several times

Count the cartons again. In the first round the model hands over `fridge.count`. The runtime counts and gets 1. The observation is pasted back:

```text
[system] Confirm tonight’s carton count. If it is below 2, write it on the shopping list. For a count, call fridge.count. To write the list, call shopping.add.
[user] Is there enough milk in the fridge? If not, put it on the list.
[model] fridge.count
[observation] 1
[model]
```

The goal is still there. 1 is below 2. The list has no matching observation. The runtime has checked: the model has not handed over a final answer, and the step budget is not used up. So it starts again. Beat 3 scores this string, and `shopping.add` can rise by following the observation and the goal. The model hands over a name and arguments. The runtime writes the list. After the write, another line is pasted: “written.”

A third round starts. Both required jobs now have observations under them: a count, and a write. Only then does a closing sentence stand, such as “1 carton tonight, already on the list.” The bubble is this third continuation, not something the first round finished in secret behind the door.

One round and three rounds use the same model. The difference is whether the runtime put it back between doors. A single door and a single number can also skip the loop. Part 12 pinned the tool as a door. Having a tool is not yet being an agent. Opening a door once is one call. An agent is the loop around a goal: open, paste back, start again.

That earlier tutorial wrote the loop as assemble, decide, run, write back, and check for a stop. This part only pins what an agent is: an unfinished goal, plus a loop that stops after a door and puts the model back at the end of the page. How a plan is arranged, where memory sits, and when a stop is required, are later parts.

### The usual mix-up

The usual mix-up is to treat “it is an agent” as proof that it keeps thinking by itself, that it is watching the fridge while the door is open, and that the answer was finished in one continuous stretch.

The feeling comes from the product folding several rounds into one “working on it.” Under that bar, the three seats from part 13 are still there; the job simply does not close after those three seats. The model did not glance at the fridge while the runtime was counting. It was stopped. It sees 1 later because 1 has already been written as an observation and pasted onto the next page.

The same mix-up treats an agent as another kind of mind. The mind is still the one from part 1. Swap in a runtime that does not loop, and the same weights still hand over one span and stop. The other way around, if the loop hands you a tool name as the answer after the first round, the goal is also unfinished. The agent is not in the weights. It is in whether this loop has been wired up.

The mix-up in the other direction is that a name on the list makes it an agent, or that writing “I will count, then write the list” inside one bubble counts as finishing the job. The list is wording. The steps in the bubble are wording too. Without a stop that lets someone run the job, then a new start that writes the next sentence against an observation, the kitchen and the list are still outside the door. Part 8 already said it: “I already counted” is still fabrication.

What this part hands off is short. An agent is an unfinished goal plus a loop that stops and starts again. The runtime keeps the loop; each round, the model still only hands over a next span. Having a tool is not yet being an agent; after a door opens and the observation is pasted back, the loop starts again only if the goal is still short. As the loop grows, old observations pile onto the page. Which of them stay in the window, and which have to be written outside it, is the next part.
