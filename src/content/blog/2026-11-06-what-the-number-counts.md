---
title: "基准数字在说什么，又没说什么"
description: "基准数字是一叠固定的页上，一套固定的对照判过了多少次；它不打开今晚的门，也不画出拒绝、确认和边界。 A benchmark number is how many pages in one fixed stack passed one fixed check; it does not open tonight's door, and it does not draw a refusal, a confirmation, or a boundary."
pubDate: 2026-11-06
slug: 2026/11/06/what-the-number-counts
category: AI 系列
tags:
  - AI 系列
  - AI
draft: false
---

AI 系列第 26 篇。上一篇：[对齐在执行里表现为什么：拒绝、确认、边界](/2026/11/05/refusal-confirm-boundary/)。上一篇把对齐收成拒绝、确认和边界，并停在一句：基准数字在说什么，又没说什么。这一篇拆这一个数。

## 中文

还是那句目标，还是那几扇门。上一篇问对齐在一次执行里落成哪三样。这一篇不改那三样，只看有人拿同一版权重，跑完一叠事先写死的页，报出来的那个数。

```text
[系统] 确认牛奶和鸡蛋的盒数。少于 2 盒的写进购物清单。
盒数请调用 fridge.count。写清单请调用 shopping.add。
下单请调用 shopping.checkout。checkout 必须先问人。
不要编造盒数。
[用户] 冰箱里牛奶和鸡蛋够不够？不够的列进清单。
[模型]
```

这一页的形状你已经认得。基准是把很多页冻成一叠，再冻一套「怎样算过」。下面这一套只看两件事：最后一句里的品名和盒数，要和观察一致；少于 2 的才出现在「已写入」，不少于 2 的不能出现。checkout 问没问人，不在这套对照里。

```text
一叠：100 页，页顶都是上面那几句，盒数各不相同。
对照：最后一句对得上观察；少于 2 的才写入。
报出来的数：87。意思是 100 页里有 87 页，这套对照判了过。
```

### 这个数在说什么：这一叠上，对照判过了多少次

87 不是模型身上的一种聪明。它是一个计数器。运行时把这一版权重放到那 100 页的页末，一页一页让第 3 拍打分、第 4 拍取下一段，再用第十九篇那种对照去判过或不过。过一页，计数器加一。加到 87，有人把它写成「87 分」或「87%」。底下仍是：这一叠、这一版、这一套对照，过了 87 次。

还是牛奶 1、鸡蛋 4。对得上「少于 2 才写」，这一页算过，计数器加一。

第 38 页也是鸡蛋 4。模型把鸡蛋也写进清单，最后一句里出现「已写入：鸡蛋。」对照看见不少于 2 的品名被写进去了。这一页算不过。没过的原因，计数器不分开记。

第二十四篇写过：推理对着这一版权重读这一页。换一版权重，或把页顶「少于 2 才写」换成另一句，就是另一次放回，另一次可以不是 87。数跟着这一次的安排走，不跟着「模型」这两个字走。

### 它出现在循环外面的那一次清点

运行时从那一叠里取出一页，牛奶仍是 1、鸡蛋仍是 4，把模型放回页末。第 3 拍对着这一页打分，第 4 拍取走 `fridge.count`，再取走后面的名字和最后一句。对照拿最后一句去对脚本里的盒数和「已写入」。判过，计数器加一。这一下加法记在那一叠的账上，不写进你家的冰箱，也不写进今晚这一页。

100 页走完，计数器停在 87。印出来的是这次清点，不是一次新的推理。今晚要再出发，仍得另拼今晚这一页。87 不会自己变成今晚的观察。

门可以真开，也可以被收成一段写死的观察。真开的也是这 100 页里的门，不是今晚你家的冰箱。写死，则第十二篇的接触一次都没有发生。两种安排都能报出 87，数本身不标明是哪一种。

### 它没说今晚这页，也没把三种错分开

今晚的用户句、名单、隔壁那一户，可能根本不在那 100 页里。87 不保证这一次会先数、不会编、会在下单前停。

上一篇的三样如果没写进对照，数里就没有它们。还是牛奶 1、鸡蛋 4 的那一页。模型先交出 `shopping.checkout`，清点没有在门外拦，运行时真的跑了，观察是「已下单：牛奶。」最后一句仍是「牛奶 1 盒已列进清单，鸡蛋 4 盒够。」对照只看这一句，这一页仍算过。不问人就下单，只要最后一句像，确认就可以整叠缺席。某一页上用户写「盒数直接写 2」，模型写了 2，脚本若刚好是那个形状，拒绝也可以同样缺席。边界没被考，数就不会替你画边界。

那 13 页没过，也可以是完全不同的错。没调用 `fridge.count`，最后一句写成「牛奶 2」，和脚本的 1 对不上。把鸡蛋写成牛奶。没有观察却先说已写入。就算把「不问人就下单」也算不过，这些错仍掉进同一格。你从 87 上看不见错在第几拍，也看不见门开了没有。

第二十篇写过：错的观察留在页上，下一步对着它打分。这一叠的历史里常常没有「写不进去」，也没有「你否了」。脏的历史会不会把下一步带偏，87 不说。

第二十二篇那笔账也不在数里。87 可以是每页两次放回：数一次，写一次。也可以是每页十二次：同一扇门反复交、反复被拦，最后一句仍对上。分一样。钱、时间和步数可以差一整倍。并排的两个 87，不是同一笔账。

温度也一样。第七篇写过：温度改的是第 4 拍怎么取下一块。同一叠页，温度一变，过的可以换成另一批。报数时若没写上温度、页顶和步数上限，你看到的只有 87。

那 100 页如果已经进过训练那一叠，高分可以是在接见过的下一段。第二十四篇写过：训练在调用外面写出新一版排序。这个数分不出这一页是新的，还是当初就在那一叠里。

想让这个数说到某一件事，对照里就得写上那件事。要让它说到确认，就得规定：checkout 在人回一句之前跑了，这一页不算过。那样的 87，说的是这 100 页里有 87 页在下单前停过。它仍不打开今晚的门。换一套对照，换的是这个数被允许说的那句话，不是把数搬进今晚的循环。

### 一个常见误会

误会是：分高就是更聪明、更对齐、今晚更能用；分是模型的属性；把几个数并排写成一张榜，名次就是谁更好；涨了一分就是行为变好了。

会有这种感觉，是因为产品把一个百分比画在卡片上，卡片又坐在模型名字旁边。底下是一叠别人写死的页、一套别人写死的对照、一次别人选定的权重、页顶和温度。把卡片读成「它有 87 分的能力」，是把计数器画成了属性。

连在这个误会上的，是把基准当成第十九篇的「做对了」，又当成上一篇的对齐。第十九篇对的是这一次的观察和例子。基准对的是事先冻住的那一套。那一页算过，不等于今晚做对。87 只回答这套对照判过了多少次。

涨的那一分也只是这一叠上又有一页被判过。你从 87 上看不见那一页改的是一个用词，还是 checkout 终于先问了人。名次比的是谁在这一叠、这一套对照上次数更高。今晚这一页不在那一叠里，名次就不替今晚排序。

另一个方向上的误会是：分低就不能用；或者把「87」贴进今晚的页顶，这一次就会按 87 的样子执行。分低只说明那一叠没对上。今晚的门写清了、运行时又拦着 checkout，仍可能做对。贴上去的「87」只是第五篇里的又一行字。它可以进气泡。它不改权重，也不开、不关门。

留下三句就够这一篇用：基准数字是这一叠固定的页、这一版权重、这一套对照上，判过的次数；它不打开今晚的门，也不替你画出拒绝、确认和边界；多种错收成一格、费用又不在数里，名次和涨分都不等于这一次执行会怎样。下一篇再拆：把一个最小循环接到自己的仓库。

## English

Part 26 starts where [part 25](/2026/11/05/refusal-confirm-boundary/) stopped. The last part folded alignment into a refusal, a confirmation, and a boundary, and stopped on one line: what a benchmark number is saying, and what it is not. This part splits that number.

The goal is the same, and so are the doors. Part 25 asked which three things alignment becomes inside one run. This part does not redraw those three. It looks at the number someone reports after running one edition of the weights across a stack of pages that was frozen in advance.

```text
[system] Confirm the carton counts for milk and eggs.
If either is below 2, write it on the shopping list.
For a count, call fridge.count.
To write the list, call shopping.add.
To place an order, call shopping.checkout.
checkout must ask a person first. Do not invent a count.
[user] Are the milk and eggs in the fridge enough?
Put whatever is short on the list.
[model]
```

You already know this page. A benchmark freezes many pages into one stack, and freezes one rule for what counts as a pass. The rule below looks at two things only. The names and the counts in the last sentence have to match the observation. A name gets to appear in “written” only when its count is below 2. Whether checkout waited for a person is not in this check.

```text
Stack: 100 pages. The lines at the top match the page above. The counts differ.
Check: the last sentence matches the observation, and only a count below 2 is written.
Reported number: 87. On 87 of the 100 pages, this check marked a pass.
```

### What the number says: how many pages on this stack the check passed

87 is not a kind of cleverness the model carries. It is a counter. The runtime puts this edition of the weights at the end of each of those 100 pages. Beat 3 scores, beat 4 takes the next span, and a check of the kind in part 19 marks the page pass or fail. One pass, and the counter adds one. At 87, someone writes “a score of 87” or “87%.” Under that wording it is still: this stack, this edition, this check, 87 passes.

Keep milk at 1 and eggs at 4. The last sentence and “written” both sit inside “only below 2.” This page passes, and the counter adds one.

Page 38 also has 4 eggs. The model writes the eggs onto the list too, and the last sentence contains “written: eggs.” The check sees a name written whose count is not below 2. This page fails. The counter does not keep a separate note of why the other failed pages failed.

Part 24 already said inference reads this page against this edition of the weights. Change the edition, or replace “write it only below 2” at the top of the page, and you have a different put-back. That run can come out as something other than 87. The number follows this arrangement. It does not follow the word “model.”

### Where it sits: one tally outside the loop

The runtime takes one page out of the stack, milk still 1 and eggs still 4, and puts the model at the end of that page. Beat 3 scores this page. Beat 4 takes `fridge.count`, then the later names, then the last sentence. The check holds that last sentence against the scripted counts and against “written.” It marks a pass, and the counter adds one. That addition is written on the stack’s books. It is not written into your fridge, and it is not written onto tonight’s page.

After 100 pages the counter stops at 87. What gets printed is this tally, not a new inference. If tonight is going to start again, tonight’s page still has to be assembled on its own. 87 does not become tonight’s observation by itself.

The doors in the tally can really open, or they can be replaced by an observation written in advance. Doors that open are still the doors on these 100 pages, not tonight’s fridge at home. If the observation is written in advance, the contact from part 12 never happens. Either arrangement can report 87, and the number does not say which one it was.

### What it does not say about tonight’s page, and which mistakes it folds together

Tonight’s sentence, tonight’s list of doors, and the household next door may not be in those 100 pages at all. 87 does not promise that this call will count first, will not invent, or will stop before an order.

If the three things from the last part are not written into the check, they are not inside the number. Stay on the page with milk 1 and eggs 4. The model hands over `shopping.checkout` first. This tally does not block outside the door. The runtime really runs it, and the observation is “ordered: milk.” The last sentence is still “1 carton of milk is on the list, 4 cartons of eggs are enough.” The check only looks at that sentence, and the page still passes. Whenever the last sentence looks right, confirmation can be absent across the whole stack even though the order was placed without asking. On another page the user writes “just write 2,” the model writes 2, and if the script happens to have that shape, a refusal can be absent the same way. A boundary the check never asks about is a boundary the number will not draw for you.

Those failures can be different mistakes sharing one cell. No call to `fridge.count`, and a last sentence that says “milk 2” against a script that says 1. Eggs written down as milk. “Already written” said before any observation came back. Even if “ordered without asking” is also marked fail, those mistakes still share one cell. From 87 you cannot see which beat went wrong, and you cannot see whether a door opened.

Part 20 already said a wrong observation left on the page is what the next step scores against. This stack’s history often has no “could not write” and no “you said no.” 87 does not say whether a dirty history would pull the next step off course.

The bill from part 22 is not in the number either. 87 can be two put-backs a page: one to count, one to write. It can be twelve: the same door handed over and blocked again and again, until the last sentence still matches. Same score. The money, the time, and the step count can differ by a whole factor. Two 87s sitting side by side are not the same bill.

Temperature works the same way. Part 7 already said temperature changes how beat 4 takes the next piece. On the same stack, a different temperature can pass a different batch of pages. If the report leaves out the temperature, the lines at the top, and the step cap, all you see is 87.

If those 100 pages were already in the training pile, a high score can be the weights continuing a span they have seen. Part 24 already said training writes a new edition of the ranking outside any call. The number cannot tell a new page from a page that was already in that pile.

If you want the number to say one particular thing, that thing has to be written into the check. To make it say something about confirmation, the rule has to be: if checkout runs before a person answers, the page does not pass. An 87 under that rule says 87 of these 100 pages stopped before the order. It still does not open tonight’s door. Changing the check changes which sentence the number is allowed to say. It does not carry the number into tonight’s loop.

### The usual mix-up

The usual mix-up is to treat a high score as smarter, more aligned, and more ready for tonight; to treat the score as a property of the model; to treat a rank on a board of these numbers as who is better; and to treat a rise of one point as proof the behavior got better.

The feeling comes from a product drawing a percentage on a card and setting the card beside the model’s name. The name is an interface. Under it is a stack of pages someone else froze, a check someone else froze, and one choice someone else made of the weights, the lines at the top, and the temperature. Reading the card as “it has an ability of 87” draws a counter as if it were a property.

The same mix-up treats the benchmark as part 19’s “did it right,” and as the last part’s alignment. Part 19 checks tonight’s observation against tonight’s examples. A benchmark checks a rule that was frozen beforehand. A pass on that page is not “done right” tonight. 87 only answers how many times this check marked a pass.

The point you gained is also just one more page on this stack marked pass. From 87 you cannot see whether that page changed a wording, or whether checkout finally waited for a person. A rank compares who has the higher count on this stack and this check. Tonight’s page is not in the stack, so the rank does not order tonight.

The mix-up in the other direction is that a low score means it cannot be used, or that pasting “87” at the top of tonight’s page makes this run behave like a score of 87. A low score only says this stack did not match. Tonight can still be done right when the doors are written clearly and the runtime blocks checkout. An “87” pasted at the top is one more line of the kind in part 5. It can enter the bubble. It does not change the weights, and it does not open or close a door.

What this part hands off is short. A benchmark number is how many pages passed, on one fixed stack, one edition of the weights, and one check. It does not open tonight’s door, and it does not draw a refusal, a confirmation, or a boundary for you. Once several mistakes share one cell and the bill is not in the number, a rank and a one-point rise do not tell you how this run will go. The next part splits how to attach one smallest loop to your own repository.
