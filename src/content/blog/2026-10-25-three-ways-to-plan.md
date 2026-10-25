---
title: "规划的三种安排：边想边做、先计划、做完再看"
description: "计划不是另一种脑子，是页上字的三种排法：看完这一步再写下一步、先写下清单再走、做完再对照观察。 A plan is not another kind of mind; it is three ways to arrange the wording: decide the next step as you go, write a list first, or look back against the observations."
pubDate: 2026-10-25
slug: 2026/10/25/three-ways-to-plan
category: AI 系列
tags:
  - AI 系列
  - AI
draft: false
---

AI 系列第 16 篇。上一篇：[记忆：留在窗口里的，和写在窗口外的](/2026/10/24/in-window-and-outside/)。上一篇把记忆拆成窗口里的前缀和窗口外的字，并停在一句：字放稳了，再拆计划。这一篇拆计划的三种安排：边想边做、先计划、做完再看。

## 中文

还是那句目标，还是那几扇门。上一篇把偏好写到了窗口外。目标如果再长一点，循环就不是只开一扇门：

```text
[系统] 确认牛奶和鸡蛋的盒数。少于 2 盒的写进购物清单。盒数请调用 fridge.count，参数是品名。写清单请调用 shopping.add。
[用户] 冰箱里牛奶和鸡蛋够不够？不够的列进清单，最后告诉我列了什么。
[模型]
```

要做完，至少要数两次，不够的还要写。第十四篇把这收成目标和循环。循环本身不问下一步怎么排。三种排法用的仍是同一页、同一扇门、同一圈循环。差别不在换了一种脑子。

### 边想边做：这一步看完，再写下一步

边想边做，是每一轮先接出一句很短的判断，再交出一个名字，等观察贴回来，再对着新页想下一步。计划不事先写满。它只活在「此刻该开哪一扇门」。

第一轮页上还没有盒数。模型先接「先数牛奶」，再交出 `fridge.count`，参数是牛奶。运行时去数，观察贴回来：1。第二轮看见 1 小于 2，再接「先写进清单」，交出 `shopping.add`。观察贴回来：已写入。第三轮再数鸡蛋，得到 4。四不小于二，不必写鸡蛋。第四轮才收口：「今晚牛奶 1 盒已列进清单，鸡蛋 4 盒够。」

四轮用的仍是第十四篇那个循环。每一轮模型只交下一段。判断和门挨在一起，现场变了，下一步可以跟着变。牛奶若是 3 盒，第二轮就不会去写清单。

这种安排省的是事先那张清单。它费的是窗口。每一步的判断和观察都要坐在这一页上。上一篇写过：循环一长，旧观察会把空位占满。判断写得太长，窗口先满的是这些句子，不是盒数。

### 先计划：先把清单写在页上，再按它走

先计划，是第一轮先接出几步，再出发。清单可以只写在窗口里：

```text
[模型] 1. fridge.count 牛奶
2. fridge.count 鸡蛋
3. 不够的 shopping.add
4. 回报列了什么
```

也可以写成窗口外的字，再贴回短纸。无论坐在哪，它仍是字。第 3 拍对着这串打分，后面几轮顺着 1、2、3 走。边界清楚时，这张清单能拦住乱开的门：先数完两样，再决定写不写。

清单写错了，就要允许改。鸡蛋若没有 `fridge.count`，只有 `fridge.eggs`，按旧清单走会交出一个名单上没有的名字。第十二篇写过：写了名字还不是接触。运行时认不出，观察是「没有这个名字」。若不许改计划，循环会抱着过时的第二步走到上限。改的不是权重里的一张新脑图，是这一页上的字。

清单本身也占空位。写到窗口外，下一轮还得贴回来，否则第十五篇写过：没被贴进来的，这次不存在。模型可能对着空页再编一张新清单，两张对不上。

### 做完再看：收口之前，对着观察核一次

做完再看，是行动之后另开一轮，专门对照目标。这一轮不是再开一扇门，是问：该数的数过没有，该写的有没有观察，页上的收口和观察是不是同一件事。

还是牛奶 1、鸡蛋 4。写清单时若门没开成，观察是「写不进去」。边想边做可能已经接出「已经列进清单」。第八篇写过：形状对了，也可以是编造。做完再看的那一轮，看见的是「写不进去」。对不上，就回到循环里补：再写一次，或者收口改成「牛奶不够，清单没写成」。

这一轮仍然是一次续写。模型没有多一只校对的眼睛。运行时只是换了一页：目标还在，观察还在，系统那一行改成「只核对这些观察，不要再开门」。第 3 拍照样打分。核得住，是因为观察还在窗口里。核不住，是因为页上只剩一句收口，观察已经被拿掉。

三种安排可以叠在同一次任务里。先写一张短清单，执行时边想边做，结束前再对一下目标。叠在一起，仍是同一套循环。

### 一个常见误会

误会是：规划是智能体自己长出来的能力，三种安排是三套引擎，写了计划就等于做完了。

会有这种感觉，是因为产品界面上有「正在规划」，气泡里也常先出现几步。几步是页上的字。没有停下来让人去跑，再出发对着观察写下一句，厨房和清单都还在门外。第十四篇写过：气泡里的步骤也是字。

连在这个误会上的，是把边想边当做它在门开着的时候继续想。门开着的时候模型是停着的。想下一步，发生在观察贴回来、它被放回页末之后。先计划也不是它在权重里画好了路线。路线是这一页上的几行，满了会被拿掉，没贴回来就没有。

另一个方向上的误会是：做完再看能保证对。核对那一轮同样会编造。它只能看见还在窗口里的观察。观察是「写不进去」，它仍可能接出「已写上」。拦住这句话的，常常是运行时：收口之前检查关键步骤有没有观察，没有就不要把气泡交给你。下一篇会把这类停止条件拆开。

留下三句就够这一篇用：规划是页上字的三种排法，不是另一种脑子；边想边做是看完这一步再写下一步，先计划是先写下清单并允许改，做完再看是收口前对着观察核一次；三种可以叠在同一圈循环里，清单和核对都还是字，要坐在窗口里才参加打分。计划能走下去，还要知道何时必须停。下一篇再拆停止条件：完成、上限、重复失败、需要人点头。

## English

Part 16 starts where [part 15](/2026/10/24/in-window-and-outside/) stopped. The last part split memory into the prefix in the window and wording written outside it, and stopped on one line: once the words have a seat, split the plan. This part splits three ways to arrange a plan: do it as you go, plan first, or look back after.

The goal is the same, and so are the doors. Part 15 wrote a preference outside the window. If the goal is a little longer, the loop is no longer one door:

```text
[system] Confirm the carton counts for milk and eggs. If either is below 2, write it on the shopping list. For a count, call fridge.count with the item name. To write the list, call shopping.add.
[user] Are the milk and eggs in the fridge enough? Put whatever is short on the list, and tell me what was listed.
[model]
```

Finishing takes at least two counts, and a write when a count is short. Part 14 folded that into a goal plus a loop. The loop itself does not say how the next step is arranged: appended from the scene, written as a list on the page first, or checked against the goal after the work. All three arrangements still use the same page, the same door, and the same loop that stops and starts again. The difference is not another kind of mind.

### Do it as you go: see this step, then write the next

Doing it as you go means each round appends a very short judgment, hands over a name, waits for the observation to be pasted back, then thinks the next step against the new page. The plan is not written out in advance. It only lives as “which door should open now.”

The first round has no carton counts on the page. The model appends “count the milk first,” then hands over `fridge.count` with milk as the argument. The runtime counts. The observation is pasted back: 1. The second round sees that 1 is below 2, appends “write it on the list first,” and hands over `shopping.add`. The observation comes back: written. The third round counts the eggs and gets 4. Four is not below two, so the eggs stay off the list. Only the fourth round closes: “1 carton of milk tonight, already on the list; 4 cartons of eggs, enough.”

Those four rounds are still the loop from part 14. Each round, the model only hands over a next span. Judgment and door sit next to each other, so the next step can change when the scene changes. If the milk count is 3, the second round does not write the list. If the egg count fails, the third round can count again, or close by saying the eggs were not counted.

What this arrangement saves is the list written in advance. What it spends is the window. Each judgment and each observation has to sit on this page. The last part already said it: as the loop grows, old observations fill the room. If the judgments run long, the window fills with those sentences first, not with the carton counts.

### Plan first: write the list on the page, then follow it

Planning first means the first round appends the steps, then the loop starts. The list can live only in the window:

```text
[model] 1. fridge.count milk
2. fridge.count eggs
3. shopping.add for whatever is short
4. report what was listed
```

It can also be written outside the window and pasted back as a short sheet. Either seat is still wording. Beat 3 scores this string, and later rounds follow 1, 2, 3. When the boundary is clear, the list can stop a door from opening at random: count both items first, then decide whether to write.

If the list is wrong, it has to be allowed to change. If eggs have no `fridge.count` and only `fridge.eggs`, following the old list hands over a name that is not on the roster. Part 12 already said writing a name is not yet contact. The runtime does not recognize it, and the observation is “no such name.” If the plan cannot be revised, the loop will hug that stale second step until it hits a cap. Revising the plan means replacing those lines on the page with lines that can follow the observation. What changes is not a new map in the weights. What changes is the wording on this page.

Planning first also costs window space. The list itself takes a seat. If it is written outside, the next round still has to paste it back; otherwise, as part 15 said, what was not pasted in is absent this time. The model may invent a new list against an empty page, and the two lists will not match.

### Look back after: check the observations before closing

Looking back after means another round after the actions, used only to check the goal. The job in that round is not to open another door. It asks: were the required counts done, does each required write have an observation, and is the closing sentence the same fact as those observations.

Keep the milk at 1 and the eggs at 4. If the list door does not open, the observation is “could not write.” Doing it as you go may already have appended “already on the list.” Part 8 already said a well-shaped span can still be fabrication. The look-back round sees “could not write,” not the smooth sentence. If they do not match, the loop goes back to repair: write again, or close with “milk is short, and the list was not written.”

That round is still one continuation. The model does not grow a second pair of proofreading eyes. The runtime only swaps the page: the goal is still there, the observations are still there, and the system line now says “only check these observations; do not open another door.” Beat 3 scores as usual. The check holds when the observations are still in the window. It fails when the page holds only a closing sentence and the observations have already been dropped.

The three arrangements can sit in the same job. Write a short list first, do it as you go while the doors open, and look back against the goal before closing. Stacked like that, it is still one loop. Some rounds simply have a list on the page; some rounds have the extra line “check first.”

### The usual mix-up

The usual mix-up is to treat planning as a faculty the agent grew by itself, the three arrangements as three engines, and a written plan as proof the job is done.

The feeling comes from a “planning” bar on the product, and from a few steps appearing in the bubble first. Those steps are wording on the page. Without a stop that lets someone run the job, then a new start that writes the next sentence against an observation, the kitchen and the list are still outside the door. Part 14 already said it: the steps in the bubble are wording too.

The same mix-up treats doing it as you go as thinking while the door is open. While the door is open, the model is stopped. The next step is thought after the observation has been pasted back and the model has been put back at the end of the page. Planning first is not a route drawn in the weights either. The route is a few lines on this page. They can be dropped when the window fills, and they are gone if they are not pasted back.

The mix-up in the other direction is that looking back after guarantees a correct close. That checking round can fabricate too. It can only see observations that are still in the window. If the observation is “could not write,” it can still append “written.” What often blocks that sentence is the runtime: before handing you the bubble, check that the required steps have observations, and do not hand it over if they do not. The next part will split those stop conditions.

What this part hands off is short. Planning is three ways to arrange wording on the page, not another kind of mind. Doing it as you go writes the next step after this one is seen; planning first writes a list and allows it to change; looking back after checks the observations before closing. The three can share one loop, and both the list and the check are still wording — they join the scores only while they sit in the window. For the plan to keep moving, the loop also has to know when it must stop. That is the next part: done, a cap, repeated failure, or a person has to nod.
