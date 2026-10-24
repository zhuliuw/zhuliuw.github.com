---
title: "记忆：留在窗口里的，和写在窗口外的"
description: "循环一长，旧观察会堆满这一页；这一次能用的只是窗口里的字，要留下去就得写到窗口外。 As the loop grows, old observations fill the page; this call can only use wording still in the window, and anything that must last has to be written outside it."
pubDate: 2026-10-24
slug: 2026/10/24/in-window-and-outside
category: AI 系列
tags:
  - AI 系列
  - AI
draft: false
---

AI 系列第 15 篇。上一篇：[智能体：目标加上会停下来再出发的循环](/2026/10/23/goal-plus-a-loop/)。上一篇把智能体收成目标和循环，并停在一句：循环一长，页上会堆起旧观察。这一篇拆这些字放在哪：留在窗口里的，和写在窗口外的。

## 中文

还是那句目标，还是那几扇门。上一篇走完三轮，页上已经有了盒数和「已写入。」。目标如果再长一点，循环还会再开几扇门：

```text
[系统] 确认今晚的盒数。少于 2 盒就写入购物清单。盒数请调用 fridge.count。写清单请调用 shopping.add。记下偏好请调用 notes.write。
[用户] 冰箱里的牛奶够不够？不够就列进清单。以后默认买燕麦奶。
[模型] fridge.count
[观察] 1
[模型] shopping.add
[观察] 已写入。
[模型] notes.write
[观察] 已记下。
[模型]
```

三行观察都在这一页。第四篇写过：一次调用能看见的，是窗口里装得下的那些块。智能体没有多出一个柜子。它每一轮仍然只看见运行时拼好的这一页。这一页上的字，是留在窗口里的记忆。写进 `notes.write` 的那一行，是写在窗口外的记忆。两边都叫记忆，座位不一样。

### 留在窗口里的，是这一次拼进来的那一页

窗口里的记忆，就是前缀。目标、系统那一行、你打的字、已经交出的工具名、已经贴回来的观察，都占同一格容量。第 3 拍只对这串编号打分。上一篇第三轮能收口，是因为「1」和「已写入。」当时还在编号串里。

循环每走一圈，运行时往往把旧页再贴一次，再接上新的观察。于是你会觉得它还记得刚才数过。记得的不是权重里多了一笔。记得的是运行时又把那一行贴进了这一次的窗口。第六篇写过：换一条新线程，刚才的气泡不会自己跟过来。两次调用之间，窗口不会自己接着存。

循环一长，旧观察先把空位占满。数过牛奶、写过清单、又记过偏好，再去数鸡蛋，页上会再多两行。窗口还是第四篇那个数字。运行时如果从最旧的观察开始拿掉，第一行「1」可能已经不在这一次的编号串里。后面若再问「牛奶到底几盒」，页上只剩较新的字。第八篇写过：空位上仍然会接出像数字的块。那一截不是回忆，是编造。

所以窗口里的记忆有两句限制。第一句：它只对这一次调用有效。没被贴进来的，这次不存在。第二句：它会满。满了以后，动手拿掉的是运行时，不是模型去翻柜子。

### 要留下去，就得写成窗口外的字

「以后默认买燕麦奶」如果只活在这一页上，下一轮被拿掉，就没了。要跨过这一次窗口，运行时得把这行字写到别处：一本笔记、一个文件、一张清单、一个会检索的本子。写出去，通常还是第十二篇那扇门。模型交出 `notes.write`，运行时去写，观察贴回来：「已记下。」

写出去的那一行，此刻并不自动坐在窗口里。窗口里多出来的，常常只是「已记下。」三个字。本子在门外。第十篇写过：本子要被读到，还得有人在拼页时贴回来，或者再开一扇读的门。写出去，只是让它在窗口被收走以后，还有一个地方可找。

购物清单也是这样。`shopping.add` 跑完，厨房门外多了一行牛奶。模型下一轮看见的，常常只是「已写入。」清单本身在窗口外。若要核对清单上到底有什么，还得再读一次，或者运行时把清单短纸贴回来。写到窗口外，不是把整本搬进脑子。它是另存一份，这份要再被贴上，才参加打分。

智能体循环把这两处接到一起。短的、这一轮还要用的，留在窗口里：目标、刚才的观察、还没做完的那一步。长的、以后还要用的、或者已经确认过可以收起来的，写成窗口外的字。运行时在第 1 拍拼页：窗口里留下哪些旧行，窗口外再贴回哪几张短纸。模型仍然只做第一篇写过的事。

### 一个常见误会

误会是：它是智能体，所以它自己有记忆，数过的盒数、写过的偏好，以后都会记得。

会有这种感觉，是因为产品把好几轮收成同一条线程，旧观察又被贴回下一页。贴着的时候，它看起来像记得。拿掉以后，问句还在，像记得的句子还可以再被接出来。那一句没有经过本子，也没有经过还在窗口里的观察。

连在这个误会上的，是把窗口外的笔记当成模型新长出来的日记。日记这个词好像说它写过就随时能翻。翻的人是运行时。写出去的字如果今天没被贴回来，也没有再被读一次，编号串里就没有它。权重没有因为 `notes.write` 多记一笔。

另一个方向上的误会是：写到窗口外了，就等于这件事已经做完，而且下一轮不必再看见它。清单写上了，目标里如果还要回报「列了什么」，窗口里得留下「已写入。」，或者把清单短纸贴回来。外面有一份，只说明门外有纸。这一次续写用不用得上，仍看页上有没有那些字。

留下三句就够这一篇用：窗口里的记忆是这一次拼进来的前缀，满了会被拿掉；要跨过这一次调用，就得写成窗口外的字，并且再贴回来才读得到；智能体没有第二份脑子，只有运行时决定留下哪些、写出哪些。字放稳了，下一篇再拆计划：边想边做、先计划、做完再看。

## English

Part 15 starts where [part 14](/2026/10/23/goal-plus-a-loop/) stopped. The last part folded an agent into a goal plus a loop, and stopped on one line: as the loop grows, old observations pile onto the page. This part asks where those words sit: what stays in the window, and what has to be written outside it.

The goal is the same, and so are the doors. Part 14 finished three rounds, and the page already held a carton count and “written.” If the goal is a little longer, the loop will open a few more doors:

```text
[system] Confirm tonight’s carton count. If it is below 2, write it on the shopping list. For a count, call fridge.count. To write the list, call shopping.add. To keep a preference, call notes.write.
[user] Is there enough milk in the fridge? If not, put it on the list. From now on, default to oat milk.
[model] fridge.count
[observation] 1
[model] shopping.add
[observation] written.
[model] notes.write
[observation] noted.
[model]
```

Three observation lines now sit on this page. Part 4 already said one call can see only the pieces that fit in the window. An agent does not grow a cabinet. Each round it still only sees the page the runtime assembled. The wording on that page is memory that stays in the window. The line handed to `notes.write` is memory written outside the window. Both get called memory. They do not sit in the same seat.

### What stays in the window is the page assembled for this call

Memory in the window is the prefix. The goal, the system line, the words you typed, the tool names already handed over, and the observations already pasted back all share one capacity. Beat 3 scores only this numbered row. The third round in the last part could close because “1” and “written.” were still on that row.

Each time the loop goes around, the runtime often pastes the old page again and appends the new observation. That is the feeling that it still remembers the count from a moment ago. What is remembered is not a new mark in the weights. What is remembered is that line, pasted into this call’s window again. Part 6 already said it: start a new thread, and the earlier bubble does not follow on its own. Between calls, the window does not keep storing.

As the loop grows, old observations fill the room first. After a milk count, a list write, and a preference note, counting the eggs adds two more lines. The window is still the number from part 4. If the runtime drops the oldest observations, the first “1” may already be gone from this call’s row. Ask again how many cartons of milk there were, and the page may hold only newer wording. Part 8 already said a digit-shaped span can still be appended from an empty slot. That span is not a recollection. It is fabrication.

So memory in the window has two limits. First: it is only good for this call. What was not pasted in is absent this time. Second: it fills up. When it is full, the runtime is the one that drops lines. The model does not rummage through a cabinet.

### To last past this call, the wording has to be written outside

“From now on, default to oat milk” dies if it only lives on this page and the next round drops it. To cross this window, the runtime has to write that line somewhere else: a note, a file, a list, a notebook that can be searched. Writing it out is usually still the door from part 12. The model hands over `notes.write`. The runtime writes. An observation is pasted back: “noted.”

The line that went out does not automatically take a seat in the window. What the window often gains is only the three words “noted.” The notebook is outside the door. Part 10 already said that notebook has to be pasted back while the page is assembled, or read through another door, before it can be seen. Writing it out only means there is still a place to look after the window has been cleared.

The shopping list works the same way. After `shopping.add` runs, a milk line exists outside the kitchen door. What the model often sees next round is only “written.” The list itself sits outside the window. Checking what is actually on the list takes another read, or a short pasted copy of the list. Writing outside is not moving the whole notebook into a mind. It is keeping a second copy. That copy joins the scores only after it is pasted again.

The agent loop joins the two seats. Short lines still needed this round stay in the window: the goal, the latest observations, the step that is not finished. Long lines, lines needed later, or lines already confirmed and ready to be put away, are written outside. At beat 1 the runtime assembles the page: which old lines stay in the window, and which short sheets come back from outside. The model still only does what part 1 described.

### The usual mix-up

The usual mix-up is to treat “it is an agent” as proof that it has a memory of its own, and that carton counts and preferences will be remembered later.

The feeling comes from the product folding several rounds into one thread, and from old observations being pasted onto the next page. While they are pasted, it looks like memory. After they are dropped, the question is still there, and a sentence that sounds like memory can still be appended. That sentence did not pass through the notebook, and it did not pass through an observation that is still in the window.

The same mix-up treats a note outside the window as a new diary the model grew. “Diary” sounds as if writing it once means it can be opened at any time. The opening belongs to the runtime. If the written line is not pasted back today, and is not read again, it is gone from the numbered row. The weights did not gain a mark because `notes.write` ran.

The mix-up in the other direction is that writing something outside means the job is finished, and the next round no longer needs to see it. If the list has been written, and the goal still asks for a report of what was listed, the window still needs “written.”, or a short pasted copy of the list. A copy outside only means there is paper beyond the door. Whether this continuation can use it still depends on whether those words are on the page.

What this part hands off is short. Memory in the window is the prefix assembled for this call, and it can be dropped when the window fills. To last past this call, wording has to be written outside, and it is readable again only after it is pasted back. An agent does not grow a second mind; the runtime decides what stays and what is written out. Once the words have a seat, the next part can split the plan: do it as you go, plan first, or look back after.
