---
title: "多个智能体分工时，谁拿目标，谁拿观察"
description: "分工不是多长了几颗脑子，是几页不同的前缀：拿目标的那一页决定何时停，拿观察的那一页才看得见已经发生的事。 Splitting work is not growing extra minds; it is several prefixes: the page that holds the goal decides when to stop, and only the page that holds the observations can see what already happened."
pubDate: 2026-10-31
slug: 2026/10/31/who-holds-goal-and-observation
category: AI 系列
tags:
  - AI 系列
  - AI
draft: false
---

AI 系列第 21 篇。上一篇：[错误怎样留在历史里，并污染下一步](/2026/10/29/error-stays-in-history/)。上一篇把错的一行钉在还在页上的前缀里，并停在一句：下一步若要分给别人做，先问谁拿目标，谁拿观察。这一篇拆这一刀。

## 中文

还是那句目标，还是那几扇门。上一篇错账还坐在页上。这一篇先问：数盒和写清单若不再走同一圈，两圈各看见哪一页。

```text
[系统] 你是协调的这一页。确认牛奶和鸡蛋的盒数。少于 2 盒的写进购物清单。数盒交给数盒的循环。写清单交给写清单的循环。下单请调用 shopping.checkout。checkout 必须先问人。
[用户] 冰箱里牛奶和鸡蛋够不够？不够的列进清单。
[模型]
```

第十四篇把智能体收成一句还没做完的目标，加上会停下来再出发的循环。两圈就是两个智能体。两圈不是两颗脑子。每一圈里的模型，仍只看见前缀、交出下一段。多出来的，是运行时拼了两页，并决定哪一句目标、哪一行观察坐进哪一页。

更早那篇中文单篇也走过循环：[AI 智能体的执行原理](/2026/10/09/ai-agent-execution/)。那一篇不算本系列的第一篇。这一篇仍从冰箱这句问法写起。

### 分工是几页前缀，不是几颗脑子围着一张桌子

产品条上常画两个名字：数盒的，写清单的。两个名字容易让人觉得厨房里坐了两个人，彼此看得见冰箱。第十三篇写过：模型只交出名字，运行时去跑，观察贴回下一页。两圈就是两次这样的三步。两页之间没有自动的走廊。

数盒的那一页，可以只拿到这一句：

```text
[系统] 只数盒。调用 fridge.count。不要写清单。不要下单。数完把盒数交回。
[用户] 数牛奶和鸡蛋。
[模型] fridge.count
[观察] 牛奶 1。鸡蛋 4。
[模型]
```

写清单的那一页是另一张纸。数盒那一页上的「牛奶 1。鸡蛋 4。」不会自己走过去。要过去，得运行时抄。它可以只抄这一行，也可以把上一篇那整串错账一起抄走，也可以什么都不抄，只丢一句「把不够的写上」。第十五篇写过：没被贴进来的，这次不存在。写清单的模型看不见厨房，也看不见另一页。它只看得见交给它的这一串。

所以「多个智能体」不是多招了几个会商量的人。它是运行时决定这一圈的前缀里放什么。放进去的参加第 3 拍。没放进去的，对这一圈来说就是没有。

### 谁拿目标：还没做完的那一句坐在哪一页

目标是还没做完的那一句。第十七篇写过：完成要看观察还在不在，循环才知道能不能停。停得住，是因为这一页上还坐着「做成什么样」。

协调的那一页拿着原句：数过，不够的写上，写上之后才收口，checkout 必须先问人。数盒的那一页只该拿「数完交回」。写清单的那一页只该拿「少于 2 的写上，写完交回」。第十八篇的名单还在循环外面。哪一页都没有资格把下单收成自己的完成。

目标坐错页，停就会停错。写清单的那一页如果只拿到「写牛奶」，观察一贴「已写入：牛奶。」，它就会收口。协调的那一页若把「已写完」当成原句做完，鸡蛋 4 还没对照过，原句其实还短着。反过来，把原句整段抄进每一页，每一圈都会对着「确认、写清单、下单」打分。第 3 拍可以把 checkout 推到写清单的页末。门的名字一旦交出来，拦不拦仍要看运行时。

上一篇的错账在这里换一只手。协调的那一页如果把「已写入：鸡蛋。」当成完成的形状，它就会把「去 checkout」交给下一圈。拿目标的人，拿的是何时算做完。它拿错了，后面每一圈都在给一笔错账收尾。

目标也可以写窄：运行时另写一句更短的放进工人那一页，原句留在协调那一页。工人停了，只表示短句做完。

### 谁拿观察：贴回来的那一行交给了谁

观察是门开完以后贴回下一页的字。第十三篇把它钉成材料。材料交给了谁，谁才拿着观察。

还是牛奶 1、鸡蛋 4。数盒的循环跑完，观察在数盒那一页上。写清单的循环还没出发。这时有三种交法。

第一种：只交一句目标，不交观察。「把不够的写上。」写清单的那一页没有盒数。空位上仍会接出下一段。第八篇写过：编造是接得顺的下一段。它可能写出鸡蛋，也可能先报「已经列好了」。没有观察，对照无从对起。

第二种：只交观察，不交「少于 2 才写」。页上坐着「牛奶 1。鸡蛋 4。」没有规则。第 3 拍看得见两个数字，看不见那一对例子。它可能两种都写。观察在，目标不在，这一圈不知道何谓够。

第三种：交规则，也交这一行观察，不交上一篇那串错账。页上有「少于 2 才写」，有「牛奶 1。鸡蛋 4。」，没有「已写入：鸡蛋。」写牛奶站得住。写鸡蛋对不上。对照也有可对的一行。

还有一种看上去最省事：把数盒那一页整份历史抄过去。上一篇写过：错的一行也在前缀里。抄走的如果带着「已写入：鸡蛋。」，污染就换了一间房间。数盒的人已经停了，错账却还在下一页上当事实。

交观察的人是运行时。工人在气泡里写「盒数是 1 和 4」，那一句不是观察。协调的那一页如果只收下这句气泡，它拿着的是一段续写。从一圈交到另一圈的，必须是贴回来的那一行。不能是气泡里的一句「我数过了」。

两圈若要共用购物清单，清单应坐在门外，需要时再读回来。读回来的才是观察。谁去读，谁的页上才有这一行。

### 一个常见误会

误会是：多个智能体就是几个人围着厨房分工，彼此看得见；交出去以后，目标和观察会自己跟着走；拆成两圈就更安全，因为每一圈更短；协调的那一个更聪明，会把错的一行挡在门外。

会有这种感觉，是因为产品把两圈画成两条对话，中间再画一支箭。箭是界面。第十四篇写过：气泡里的步骤也是字。两页之间没有走廊。搬的是运行时。它抄哪一行，下一圈就拿哪一行。

连在这个误会上的，是把交接当成两个模型在说话。模型不会把字送进另一页。它只被放回自己那一页的页末。第十六篇的三种安排，在每一圈里都还可以用。安排的是这一页上的字。

另一个方向上的误会是：拆开以后就不必再问谁拿什么；或者把整份历史交给每一个工人，以免漏掉。不问，目标就会坐错页。整份都交，上一篇的污染会换一圈再走一遍。该交的是这一圈用得上的目标和观察。不该交的，是它没有资格完成的部分，以及已经判错却还被当成事实的那一行。

留下三句就够这一篇用：多个智能体是几页不同的前缀，不是几颗会商量的脑子；拿目标的，是还坐着「做成什么样」的那一页，它决定何时算做完；拿观察的，是被贴上了那一行的那一页，没被交给它的，这一圈就当没有。两圈一接上，步数会翻倍。下一篇再拆：费用、延迟和步数是同一笔账。

## English

Part 21 starts where [part 20](/2026/10/29/error-stays-in-history/) stopped. The last part pinned a wrong line in the prefix still on the page, and stopped on one line: if the next step is to be handed to someone else, ask first who holds the goal and who holds the observations. This part splits that cut.

The goal is the same, and so are the doors. Part 20 left a wrong bill sitting on the page. This part does not rush to clear it. It asks something else first: if counting and writing the list no longer share one loop, which page does each loop see?

```text
[system] This page coordinates. Confirm the carton counts for milk and eggs. If either is below 2, write it on the shopping list. Hand counting to the counting loop. Hand writing the list to the writing loop. To place an order, call shopping.checkout. checkout must ask a person first.
[user] Are the milk and eggs in the fridge enough? Put whatever is short on the list.
[model]
```

Part 14 folded an agent into an unfinished goal plus a loop that stops and starts again. Two loops are two agents. Two loops are not two minds. In each loop the model still only does what part 1 described: see a prefix, hand over a next span. What is added is the runtime assembling two pages, and deciding which goal-sentence and which observation sit on which page.

An earlier Chinese-only piece already walked a loop: [How an AI agent actually runs](/2026/10/09/ai-agent-execution/). That piece is not part 1 of this series. This part still starts from the fridge question: after the work is split, is the goal still on this page, and was the observation handed to the next one?

### Splitting work is several prefixes, not several minds around one table

Product bars often draw two names: the one who counts, the one who writes the list. Two names make it easy to picture two people in the kitchen, both able to see the fridge and hear what the other just said. Part 13 already said: in one call, the model only hands over a name, the runtime runs it, and the observation is pasted onto the next page. Two loops are that three-step job, twice. There is no automatic hallway between the two pages.

The counting page may only be handed this:

```text
[system] Count only. Call fridge.count. Do not write the list. Do not place an order. When the count is done, hand the numbers back.
[user] Count the milk and the eggs.
[model] fridge.count
[observation] milk 1. eggs 4.
[model]
```

The writing page is another sheet. “milk 1. eggs 4.” on the counting page will not walk over by itself. To get there, someone has to copy it. The copier is the runtime. It can copy only that observation, or it can copy the whole wrong bill from the last part, or it can copy nothing and drop only the sentence “write whatever is short.” Those three packets are not the same material. Part 15 already said: what was not pasted in does not exist for this call. The writing model cannot see the kitchen, and it cannot see the other page. It can see only the string it was handed.

So “several agents” is not a few extra people hired to confer. It is the runtime deciding what belongs in this loop’s prefix. What was put in joins beat 3. What was left out is, for this loop, nothing.

### Who holds the goal: which page still has the unfinished sentence

The goal is the unfinished sentence. Part 14 already said wording does not write a shopping list by itself. Part 17 already said “done” depends on observations still sitting there, or the loop cannot tell whether to stop. A stop holds because this page still holds “what done looks like.”

The coordinating page holds the original sentence: count, write what is short, close only after the write, and checkout must ask first. The counting page should not hold that whole sentence. It should hold only “count and hand back.” The writing page should not hold checkout. It should hold only “write what is below 2, then hand back.” The list from part 18 still sits outside the loop. No page gets to treat placing an order as its own idea of done.

A goal on the wrong page stops at the wrong time. If the writing page was only handed “write milk,” then as soon as “written: milk.” is pasted, it will close. If the coordinating page then takes “already written” as the original sentence finished, the eggs at 4 have not been checked, and the original sentence is still short. The other way around, if the whole original sentence is copied onto every page, every loop scores against “confirm, write the list, place an order.” Beat 3 can lift checkout to the end of the writing page. Once that door name is handed over, whether it is blocked still depends on the runtime, not on this loop claiming it only writes lists.

The wrong bill from the last part changes hands here. If the coordinating page takes “written: eggs.” as the shape of done, it will hand “go to checkout” to the next loop. Whoever holds the goal holds when the job counts as finished. If that holder is wrong, every later loop is closing someone else’s bad bill.

A goal can also be written narrower. Narrow is not deleting the original sentence. It is the runtime writing a shorter one onto the worker’s page, and leaving the original on the coordinating page. When the worker stops, only the short sentence is done. Whether the original is still open is still for the page that holds it, together with the runtime’s stop conditions.

### Who holds the observations: who was handed the line pasted back

An observation is wording pasted onto the next page after a door has opened. Part 12 pinned the tool as a door. Part 13 pinned the observation as material. This part adds only this: whoever was handed the material is the one who holds the observation.

Keep the milk at 1 and the eggs at 4. The counting loop has finished; the observation sits on the counting page. The writing loop has not started. There are three ways to hand it over.

The first: hand over only a goal, no observation. “Write whatever is short.” The writing page has no counts. An empty slot will still append a next span. Part 8 already said fabrication is a smooth next span. It may write eggs, or it may first report “already listed.” With no observation, the check in part 19 has nothing to match.

The second: hand over only the observation, not “write only if below 2.” The page holds “milk 1. eggs 4.” and no rule. Beat 3 can see two numbers and cannot see the example pair. It may write both. The observation is there; the goal is not; this loop does not know what enough means.

The third: hand over the rule and this observation, and do not hand over the wrong bill from the last part. The page has “write only if below 2,” has “milk 1. eggs 4.,” and does not have “written: eggs.” Writing milk stands. Writing eggs does not match. The check also has a line it can match.

There is a fourth way that looks cheapest: copy the counting page’s whole history across. Part 20 already said the wrong line sits in the prefix too. If the copy carries “written: eggs.,” the spoiling has changed rooms. Beat 3 on the writing page will walk along the newer line. The counter has already stopped; the bad bill is still a fact on the next page.

The one who hands over observations is the runtime. “The counts are 1 and 4” in a worker’s bubble is not an observation. If the coordinating page only accepts that bubble, what it holds is a continuation. Part 8 already said a well-shaped span can still be fabrication. Part 19 already said the one who matches is the runtime, and what it matches is the observation. After the split, that cut is still there. What travels from one loop to the next has to be the line that was pasted back, or a line the runtime wrote down itself and then wrote onto the next page. It cannot be “I already counted” in a bubble.

The window also fills. Part 15 already said: to last past this call, write the line outside. If two loops are to share a shopping list, the list should sit outside the door and be read back when needed. What is read back is an observation. Whoever does the reading is the one whose page holds that line. If nobody reads, both loops can talk about the list, and the list still does not exist for them.

### The usual mix-up

The usual mix-up is to treat several agents as people around a kitchen who can see and hear each other; to treat a handoff as proof that the goal and the observations walk over on their own; to treat a split into two loops as safer because each loop is shorter; and to treat the coordinator as the smarter one, who will keep a wrong line outside the door.

The feeling comes from the product drawing two threads and an arrow between them. The arrow is the interface. Part 14 already said it: the steps in the bubble are wording too. There is no hallway that moves things by itself. The mover is the runtime. Whichever line it copies is the line the next loop holds.

The same mix-up treats a handoff as two models talking. A model does not send wording onto another page. It is only put back at the end of its own page. The three arrangements in part 16 still apply inside each loop: do it as you go, plan first, or look back after. They arrange wording on this page. They do not carry an observation next door.

The mix-up in the other direction is that once the work is split you no longer have to ask who holds what, or that every worker should get the whole history so nothing is missed. If you do not ask, the goal sits on the wrong page, and the stop lands at the wrong time. If you hand over everything, the spoiling from the last part walks through another loop. What should be handed over is the one goal-sentence this loop can finish, and the few observations it needs. What should not be handed over is the part of the original sentence it has no right to finish, and a line already marked wrong that is still being treated as a fact.

What this part hands off is short. Several agents are several different prefixes, not several minds that confer. Whoever holds the goal is the page that still has “what done looks like”; that page decides when the job counts as finished. Whoever holds the observations is the page those lines were pasted onto; what was not handed over does not exist for that loop. Once two loops are wired together, the step count doubles. The next part splits that bill: cost, latency, and step count are the same account.
