---
title: "费用、延迟和步数是同一笔账"
description: "多走一步，就要再读一遍前缀、再等一轮、再记一笔；钱、时间和圈数不是三本账。 One extra step reads the prefix again, waits another round, and adds one to the count; money, time, and loops are not three separate books."
pubDate: 2026-11-02
slug: 2026/11/02/the-same-bill
category: AI 系列
tags:
  - AI 系列
  - AI
draft: false
---

AI 系列第 22 篇。上一篇：[多个智能体分工时，谁拿目标，谁拿观察](/2026/10/31/who-holds-goal-and-observation/)。上一篇把分工收成几页不同的前缀，并停在一句：两圈一接上，步数会翻倍。这一篇拆这一笔账：费用、延迟和步数是同一笔。

## 中文

还是那句目标，还是那几扇门。上一篇把数盒和写清单拆成两圈。这一篇先不拆，只数一圈要付几次。付的不是三种东西。付的是同一次「再把模型放回页末」。

```text
[系统] 确认牛奶和鸡蛋的盒数。少于 2 盒的写进购物清单。盒数请调用 fridge.count。写清单请调用 shopping.add。下单请调用 shopping.checkout。checkout 必须先问人。
[用户] 冰箱里牛奶和鸡蛋够不够？不够的列进清单。
[模型]
```

第十四篇把智能体收成目标加上循环。循环每走一圈，运行时就把模型放回更长的一页。第十七篇把步数上限、时间和费用写成同一种上限。这一篇把那三个数字钉回同一次放回：多走一步，前缀被再读一遍，门后再等一轮，上限上再记一笔。

### 步数是把模型放回页末的次数

一步，不是产品条上闪一下的「正在思考」。一步是运行时又拼好一页，再让第 3 拍对着这一页打分。第一篇写过：一次调用交出下一段就停。循环要再出发，就得再来一次这样的调用。

还是牛奶 1、鸡蛋 4。一圈走完，常常是三次放回：

```text
[模型] fridge.count
[观察] 牛奶 1。鸡蛋 4。
[模型] shopping.add 牛奶
[观察] 已写入：牛奶。
[模型] 今晚牛奶 1 盒已列进清单，鸡蛋 4 盒够。
```

三次放回，就是三步。中间两扇门各开一次，是运行时在模型外面跑。第十三篇写过：写出名字以后，这一次模型的工作结束了。门开着的那一段时间，不另算一步；下一步从观察贴回来、模型再被放回页末开始算。

上一篇拆成两圈，步数不会自己变少。协调的那一页要决定交给谁，数盒的那一页要自己走一圈，写清单的那一页再走一圈，交回之后协调的那一页还要再看一次。两圈之间没有走廊，运行时每抄一次、每拼一页，就是又一次放回。第十六篇的「先计划」和「做完再看」，在这一圈里再各加一轮，步数再加。

第十七篇的上限数的就是这个次数。撞上上限，不是厨房走完了。是放回的次数用完了。

### 费用是这一串前缀被再读一遍

第二篇写过：以后量窗口和费用，数的是块数。第四篇写过：窗口装的是整串。费用跟着这两句走。每一次放回，运行时都要把这一页再切成编号，整串再交给第 3 拍。前缀里的目标、例子、已经交出的名字、已经贴回来的观察，每一块都要再读一次。

上面那三步，不是付了三段一样长的字。第一步读的是目标和问句。第二步读的是目标和问句，加上 `fridge.count`，加上「牛奶 1。鸡蛋 4。」。第三步再把「已写入：牛奶。」叠上去。后一步比前一步贵，因为被再读的那一串变长了。气泡里你看见的只是最后那句收口。账上先被扫过的，是整页。

输出也按块数算。第 3 拍每接一块，都是一次打分。接出一个工具名，块少。接出一段「我先数、再写、再核对」的计划，块多。第十六篇的三种安排，改的不只是顺序，也是每一轮要写出多长。写出的块，下一轮又变成前缀，再被读一遍。

上一篇若把数盒那一页的整份历史抄进写清单那一页，费用会换一间房间再付一次。第二十篇的错账如果也在里面，污染和费用一起走。只交「牛奶 1。鸡蛋 4。」和「少于 2 才写」，前缀短，账也短。

所以费用不是界面上另开的一本钱。它是步数在块上的样子：放回几次，每次读多长、写多长。第十七篇把费用写成另一个数字，也是同一种上限：到了就断。断的仍是下一次放回。

### 延迟是每一拍都要等人

延迟是同一次放回在时间上的样子。第 3 拍要对整串打分，前缀越长，这一等越久。第三篇写过：一块一块接，接上以后再打分。输出长，这一轮就更晚结束。

门开在模型外面，又是另一段等。`fridge.count` 交出去以后，模型停着。运行时去数，数完才贴观察。`shopping.add` 也一样。两扇门若串着开，两段等就串着加。上一篇拆成两圈，若数盒没交回、写清单就不出发，等也会串着加。只有运行时真的同时开两扇互不依赖的门，等才会并在一起。并在一起的是门。两页前缀仍要各走各的第 3 拍。

产品条上的「正在处理」，把这几段等叠成一根。叠在一起，好像它在连续想。第十四篇写过：门开着的时候模型没有在看冰箱。你等的是：这一轮打分、门外那一跑、拼下一页、再打分。步数加一，这根条就再长一截。

上限写成时间，和上限写成步数、写成费用，拦的是同一件事。到点就不要再放回。不要等模型自己说「我还可以再试」。

### 一个常见误会

误会是：费用是账单上的价，延迟是模型想得快不快，步数是条上跳了几下，三本账可以分开管；再加一圈、再拆一个智能体、再反思一轮，只是多想了想，不另付钱。

会有这种感觉，是因为产品把钱画在用量页，把时间画在条上，把步骤画成勾。三处界面。底下是同一次放回。多走一步，前缀再读一遍，第 3 拍再等一轮，上限再减一。没有第四本可以白走的账。

连在这个误会上的，是以为换一个更便宜的模型就能把账砍掉，却多走三圈；或者以为拆成两圈就会更快，因为两个人可以一起做。更便宜的模型，每一步仍要读整页。两圈若互相等观察，延迟是串的；两页若各抄一份长历史，费用是两份。上一篇已经写过：没有自动的走廊。走廊是运行时再拼一页。拼一页，就要付这一页。

另一个方向上的误会是：步数越少越好，所以不要观察、不要对照、把门都省掉，让它一次交一段收口。第八篇写过：没有观察，接得顺的下一段也可以是编造。第十九篇的对照也要占一步。省掉的不是账，是材料。账可以短，短的是一段没有出门的续写。

留下三句就够这一篇用：步数是把模型放回页末的次数；费用是这一串前缀被再读、下一段被再写的块数；延迟是每一拍和每一扇门都要等。三个数字记的是同一次放回，不是三本账。账要改，下一篇再拆：改行为的三种办法：提示、检索、微调。

## English

Part 22 starts where [part 21](/2026/10/31/who-holds-goal-and-observation/) stopped. The last part folded a split of work into several different prefixes, and stopped on one line: once two loops are wired together, the step count doubles. This part splits that bill: cost, latency, and step count are the same account.

The goal is the same, and so are the doors. Part 21 split counting and writing the list into two loops. This part does not split them yet. It only counts how many times one loop has to pay. What it pays is not three different things. It pays the same act: putting the model back at the end of the page.

```text
[system] Confirm the carton counts for milk and eggs. If either is below 2, write it on the shopping list. For a count, call fridge.count. To write the list, call shopping.add. To place an order, call shopping.checkout. checkout must ask a person first.
[user] Are the milk and eggs in the fridge enough? Put whatever is short on the list.
[model]
```

Part 14 folded an agent into a goal plus a loop. Each time the loop moves, the runtime puts the model back on a longer page. Part 17 already wrote a step cap, a time cap, and a cost cap as the same kind of cap. This part pins those three numbers back onto the same put-back: one extra step reads the prefix again, waits another round after the door, and adds one mark to the cap.

### A step is one more time the model is put back at the end of the page

A step is not the “thinking” flash on a product bar. A step is the runtime assembling a page again, then letting beat 3 score against that page. Part 1 already said: one call hands over a next span and stops. For the loop to start again, it has to make that call again.

Keep the milk at 1 and the eggs at 4. One loop, finished, is often three put-backs:

```text
[model] fridge.count
[observation] milk 1. eggs 4.
[model] shopping.add milk
[observation] written: milk.
[model] Tonight, milk at 1 is on the list; eggs at 4 are enough.
```

Three put-backs are three steps. The two doors in the middle each open once; that run belongs to the runtime, outside the model. Part 13 already said: after the name is written, the model’s work on that call is over. The time the door stays open is not another step. The next step starts when the observation has been pasted back and the model is put at the end of the page again.

Splitting the work into two loops, as the last part did, does not shrink the count by itself. The coordinating page has to decide whom to hand the job to; the counting page has to walk its own loop; the writing page walks another; after the hand-back, the coordinating page has to look again. There is no hallway between the two pages. Each copy the runtime makes, each page it assembles, is another put-back. “Plan first” and “look back after,” from part 16, each add one more round inside this loop, and the step count rises with them.

The cap in part 17 counts this number. Hitting the cap does not mean the kitchen is done. It means the put-backs have been used up.

### Cost is this prefix being read again

Part 2 already said: later, when you measure the window and the bill, you count pieces. Part 4 already said: the window holds the whole string. Cost follows those two sentences. Every put-back, the runtime cuts this page into numbers again and hands the whole row to beat 3. The goal, the examples, the names already handed over, the observations already pasted back — every piece is read again.

The three steps above are not three payments of the same length. The first step reads the goal and the question. The second reads the goal and the question, plus `fridge.count`, plus “milk 1. eggs 4.” The third stacks “written: milk.” on top. The later step costs more, because the string being read again has grown. The bubble shows only the closing sentence. What the bill scanned first is the whole page.

Output is counted in pieces too. Beat 3 scores once for every piece it appends. Handing over a tool name is a short span. Handing over a plan that says “I will count, then write, then check” is a long one. The three arrangements in part 16 change more than order. They change how much each round has to write. What was written becomes prefix on the next round, and is read again.

If the last part copies the counting page’s whole history onto the writing page, the cost is paid again in another room. If the wrong bill from part 20 is in that copy, the spoiling and the cost travel together. Handing over only “milk 1. eggs 4.” and “write only if below 2” keeps the prefix short, and the bill short.

So cost is not a separate money book the interface opened. It is the step count in the shape of pieces: how many times the model was put back, and how long each of those pages was to read and to write. When part 17 writes cost as another number, it is still the same kind of cap: at the number, stop. What it stops is the next put-back.

### Latency is waiting for every beat

Latency is the same put-back in the shape of time. Beat 3 has to score the whole string; the longer the prefix, the longer this wait. Part 3 already said: append one piece, then score again. A long output makes this round end later.

A door opening outside the model is another wait. After `fridge.count` is handed over, the model is stopped. The runtime counts, and only then pastes the observation. `shopping.add` is the same. If the two doors open one after the other, the two waits add. If the last part’s two loops wait on each other — no writing until counting has been handed back — those waits add too. Waits sit in parallel only when the runtime actually opens two doors that do not depend on each other. What can run together are the doors. The two prefixes still each take their own beat 3.

The “working” bar on a product stacks these waits into one line. Stacked, it looks like continuous thought. Part 14 already said: while the door is open, the model is not looking at the fridge. What you wait for is this round’s scoring, the run outside the door, the next page being assembled, and the scoring after that. Add one step, and that bar grows another segment.

A cap written as time, a cap written as steps, and a cap written as cost all block the same thing. When the number is hit, do not put the model back. Do not wait for the model to say “I can try again.”

### The usual mix-up

The usual mix-up is to treat cost as the price on a usage page, latency as how fast the model thinks, and steps as how many ticks jumped on a bar — three books you can keep apart; and to treat one more loop, one more agent, or one more reflection as extra thought that does not add to the bill.

The feeling comes from money drawn on a usage page, time drawn on a bar, and steps drawn as checks. Three interfaces. Underneath is the same put-back. One extra step reads the prefix again, waits through beat 3 again, and subtracts one from the cap. There is no fourth book you can walk for free.

The same mix-up treats a cheaper model as a way to cut the bill, then walks three extra loops; or treats a split into two loops as faster, because two people can work at once. A cheaper model still reads the whole page on every step. If the two loops wait on each other’s observations, latency is serial. If each page is copied a long history, cost is paid twice. Part 21 already said there is no automatic hallway. The hallway is the runtime assembling another page. Assemble a page, and you pay for that page.

The mix-up in the other direction is that fewer steps are always better, so drop the observations, drop the check, skip the doors, and let it hand over a closing span in one go. Part 8 already said: with no observation, a smooth next span can still be fabrication. The check in part 19 also takes a step. What you saved is not the bill. What you saved is the material. The bill can be short. What is short is a continuation that never left the page.

What this part hands off is short. A step is how many times the model is put back at the end of the page. Cost is how many pieces of that prefix are read again, and how many pieces of the next span are written. Latency is the wait for every beat and every door. The three numbers record the same put-back, not three books. To change what the loop does, the next part splits three ways to change behavior: the prompt, retrieval, and fine-tuning.
