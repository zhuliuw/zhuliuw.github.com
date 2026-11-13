---
title: "第一行没变、盒数变了的那一圈，拼页记下的句子仍是旧的，图上目标那一句留着；「会走进哪一格」那半句按这一次的盒数重写，再拿这一圈问那三句"
description: "第一行没变时，拼页仍记下旧句子，图上目标留着；盒数变了，只把「会走进哪一格」按这一次重写，再问这一圈。 When the first line stays, assemble still records the old sentence and the goal on the picture stays; if the counts changed, rewrite only which cell this run enters, then ask this walk."
pubDate: 2026-11-13
slug: 2026/11/13/the-half-sentence-for-these-counts
category: AI 系列
tags:
  - AI 系列
  - AI
draft: false
---

AI 系列第 34 篇。上一篇：[三句在这份新轨迹上过了之后，第一行再改，图先不动；更新的那一圈里这一格的句子又变了，才把图上那一格改成那一行里的新句子，再拿那一份更新的轨迹问那三句](/2026/11/12/the-newer-line-after-the-pass/)。上一篇停在一句：这一格的句子又变了，才改图上那一句。这一篇做句子没变、盒数变了的那一圈。

## 中文

还是那句目标，还是那几扇门。上一篇结束时，三句在那份十二行上过了。`loop.txt` 的第一行是「少于 3 才写入」，图上拼页也是这一句，并写着牛奶是 1、这一次走进 `shopping.add`。那一圈对得上。这一篇不改第一行。只改盒数。不添新的门。

```text
[系统] 确认牛奶和鸡蛋的盒数。少于 2 盒的写进购物清单。
盒数请调用 fridge.count。写清单请调用 shopping.add。
不要编造盒数。步数上限 8。同一扇门同一组参数失败 3 次就停。
下单不在这份名单里。
[用户] 冰箱里牛奶和鸡蛋够不够？不够的列进清单。
[模型]
```

第十四篇那一圈，更早的中文单篇写成过组装、决定、执行、写回、检查是否停止：[AI 智能体的执行原理](/2026/10/09/ai-agent-execution/)。那一篇不算本系列的第一篇。这一篇仍从冰箱写起。开头那一块是原来的任务。拼上页、写进轨迹的，是 `loop.txt` 的第一行。要分开的是目标那一句，和旁边「会走进哪一格」那半句。

### 第一行没变，拼页记下的仍是旧句子

今晚第一行仍是「少于 3 才写入」。名单、停、注都不动。注可以仍写「其实少于 1」。动的是 `cartons.txt`。上一圈是牛奶 1、鸡蛋 4。这一圈改成牛奶 5、鸡蛋 4。`diagram.txt` 先留着。它还写着「少于 3」，还写着牛奶是 1、这一次走进 `shopping.add`。

`fridge.count` 仍去读 `cartons.txt`。`run` 走一圈。这一圈的 `trace.txt` 是这八行：

```text
1   拼页      读 loop.txt 第一行「少于 3 才写入」。名单仍是 fridge.count，shopping.add。页上没有注
2   放回模型  放回次数 1
3   认名字    跑了 doors/fridge.count。贴上「牛奶 5」「鸡蛋 4」
4   还放回吗  走否则
5   拼页      第一行仍是「少于 3 才写入」。名单没变
6   放回模型  放回次数 2
7   收口      「牛奶 5 盒，不小于 3，不写。鸡蛋 4 盒够。」按读到的句子，没有必须写上的那一项
8   停        气泡交出去
```

拿上一篇那十二行的拼页来比。旧的第 1 行是「少于 3 才写入」。新的第 1 行也是这一句。读的仍是第一行。这一格的句子没变。第 5 行是同一句。图上目标那一句留着，不改成别的句子。

变了的是另一格读到的数。第 3 行贴上「牛奶 5」「鸡蛋 4」。5 不小于 3，不写，后面没有 `shopping.add`。鸡蛋是 4，也不写。放回从三次变成两次，是少走一扇门。第二十二篇那笔账上，少一扇门就少一次放回。改的是盒数，不是第一行。

第三十篇见过盒数变了、拼页仍是旧句子，用来说明对不上的那一格没变。这一篇的盒数是要变的。拼页没变，目标留着。要改的是半句。

### 它出现在这一次：半句按这一次的盒数重写，再问这八行

三句是第二十九篇那三句。每一行在图上找得到格。图上那一句配上这一次的盒数，说会走进的格，轨迹里有。格子里的句子，和这一行读到的句子，是同一句。

图上那半句还写着牛奶是 1、走进 `shopping.add`。那是十二行那一圈的盒数。这一圈的盒数在第 3 行：牛奶 5，鸡蛋 4。牛奶不小于 3，这一次不走进 `shopping.add`。现在改的是这半句。目标那一句不动。

```text
diagram.txt 里拼页那一格
旧：目标：少于 3 才写入。牛奶是 1，少于 3，这一次走进 shopping.add
新：目标：少于 3 才写入。牛奶是 5，不小于 3，这一次不走进 shopping.add
右边仍是 loop.txt。名单仍是 fridge.count，shopping.add
```

「少于 3 才写入」没换，因为拼页记下的仍是旧句子。半句按第 3 行的数，和这一圈走进的格，重写。八行不添到图上。`shopping.add` 仍在名单上，仍是认名字那一格。这一次没走进，就在半句里写明不走进。不把这扇门从图上擦掉。

问的是这八行。1 和 5 是拼页，2 和 6 是放回，3 是认名字，4 是否则，7 是收口，8 是停。都有。没有多出来的一行。

图上现在是「少于 3 才写入」，牛奶 5，不走进 `shopping.add`。这八行里没有这一格。鸡蛋是 4，不写，轨迹里也没有给鸡蛋的写入。这一句过了。

拼页指着 `loop.txt`，第 1 行写的是读 `loop.txt`。格子里的目标是「少于 3 才写入」，第 1 行记下的也是这一句。认名字跑的是 `doors/fridge.count`，贴上的是「牛奶 5」「鸡蛋 4」。这一句也过了。半句不在第一行里。第三句比的是读到的那一句。半句对不对，看的是第二句。

三句都过。图追上了这一次。追上说的是这八行。十二行留着，只用来比：拼页那一句没变，盒数变了。

牛奶若改成 2，鸡蛋仍是 4。2 仍少于 3，这一圈仍走进 `shopping.add`。拼页仍是「少于 3」，目标留着。半句不能留着「牛奶是 1」。按这一次写成「牛奶是 2，少于 3，这一次走进 shopping.add」。门没换，数换了，半句也要重写。半句仍写牛奶是 1，这一圈贴上牛奶 2，第二句不过。

你把半句留在「牛奶是 1，走进 shopping.add」，拿牛奶 5 的这八行来问。图还说这一次走进 `shopping.add`，这八行没有。第二句过不去。目标那一句仍是「少于 3」，和第 1 行相同，第三句过得去。过得去的是目标。半句是旧的。十二行上的通过不说明这半句还是这一圈的。

你看见没有 `shopping.add`，把目标改成「少于 5」，或改成收口那句「不写」。第 1 行仍是「少于 3」。第三句过不去。气泡整齐，整齐是第 7 行，它不写进拼页。盒数写进半句，不写进目标那一句。

八行已经写下牛奶 5、没有 `shopping.add`，你却拿十二行来问。半句是「不走进」，十二行走进了，贴的是「牛奶 1」。第二句过不去。半句换成这一次的数之后，要问写下这个数的那一圈。

你把 `shopping.add` 从名单上擦掉，因为这一次没走进。第 1 行写着名单仍是 `fridge.count`，`shopping.add`。格子里的名单和这一行读到的名单不是同一句。没走进，写在半句里。门还在名单上。

### 一个常见误会

误会是：第一行没变，图上整格都可以留着，不必再问；或者盒数一变，目标那一句也要跟着改；或者八行比十二行短，就把短的那份抄进 `diagram.txt`；或者问模型「这一次还进不进 shopping.add」。

第一行没变，留的是目标那一句。半句写的是这一次的盒数会走进哪一格。盒数变了，半句还是上一圈的，第二句就过不去。十二行上过了的那三句，盖不住这八行。

把目标改成「牛奶 5」或「少于 5」，改的就不是拼页读到的那一句。第 1 行仍是「少于 3」。这一格的句子没变，目标就不换句子。

把八行整份抄进图，句子是从轨迹抄的，图就不再指着文件。这一篇目标不动，只重写半句。放回、认名字、停留着，右边的文件名也不换。

模型看不见 `diagram.txt`。你问它这一次进不进那一格，它交出来的仍是下一段。第八篇写过：下一段不是观察。这一圈进没进，看轨迹里有没有那一行。盒数是多少，看这一圈已经贴上的那一行。

留下三句就够这一篇用：第一行没变、盒数变了的那一圈，拼页记下的句子仍是旧的，图上目标那一句留着；「会走进哪一格」那半句按这一次的盒数重写；再拿这一圈问那三句，不拿盒数还是旧的那一圈问。下一篇再拆：「会走进哪一格」那半句里的盒数，抄这一圈认名字贴上的那一行，不抄你写进 `cartons.txt`、这一圈还没贴上的那个数；那一行还没写下，半句留着；贴上的数和上一圈不同，才按那一行重写半句，再拿这一圈问那三句。

## English

Part 34 starts where [part 33](/2026/11/12/the-newer-line-after-the-pass/) stopped. The last part stopped on one line: only when a newer walk has changed this cell's sentence do you change that sentence on the picture. This part is the walk where that sentence does not change, and the counts do.

The goal is the same, and so are the doors. At the end of the last part, the three questions had passed on a twelve-line trace. The first line of `loop.txt` was "write it only below 3," the assemble cell on the picture said the same, and it said milk at 1 walks into `shopping.add` on that run. That walk matched. This part does not change the first line. It changes the counts. It adds no new door.

```text
[system] Confirm the carton counts for milk and eggs.
If either is below 2, write it on the shopping list.
For a count, call fridge.count. To write the list, call shopping.add.
Do not invent a count. Cap the loop at 8 steps.
Stop after the same door fails 3 times with the same arguments.
Placing an order is not on this list.
[user] Are the milk and eggs in the fridge enough?
Put whatever is short on the list.
[model]
```

An earlier Chinese piece, outside this series, wrote the loop from part 14 as assemble, decide, run, write back, and check whether to stop: [how an agent actually runs](/2026/10/09/ai-agent-execution/). That piece is not part 1. This part still starts from the fridge. The block above is the original task. What gets pasted onto the page, and written into the trace, is the first line of `loop.txt`. What has to be pulled apart is the goal sentence, and the half-sentence beside it about which cell this run enters.

### The first line stays, so assemble still records the old sentence

Tonight the first line is still "write it only below 3." The list, the stops, and a note stay put. The note can still say "actually below 1," or it can be absent. What moves is `cartons.txt`. The previous walk was milk 1 and eggs 4. This walk is milk 5 and eggs 4. `diagram.txt` stays for now. It still says "below 3," and it still says milk at 1 walks into `shopping.add`.

`fridge.count` still reads `cartons.txt`. `run` walks once. This walk's `trace.txt` is these eight lines:

```text
1   assemble the page     read the first line of loop.txt, "write it only below 3." The list is still fridge.count, shopping.add. The note is not on the page
2   put the model back    put-back 1
3   recognize the name    ran doors/fridge.count. Pasted "milk 5" and "eggs 4"
4   put the model back again?    took otherwise
5   assemble the page     the first line is still "write it only below 3." The list did not change
6   put the model back    put-back 2
7   close                 "5 cartons of milk are not below 3, so milk is not written. 4 cartons of eggs are enough." By the sentence this run read, nothing had to be written
8   stop                  hand over the bubble
```

Set line 1 of the twelve lines from the last part beside line 1 here. The old line says "write it only below 3." The new line 1 says the same sentence. The file read is still the first line. This cell's sentence did not change. Line 5 carries the same sentence. The goal on the picture stays. It is not replaced with some other sentence.

What changed is the number a different cell read. Line 3 pasted "milk 5" and "eggs 4." Five is not below 3, so it is not written, and `shopping.add` does not show up later. Eggs are 4, so they are not written either. Put-backs going from 3 to 2 is one fewer door. On the bill from part 22, one fewer door is one fewer put-back. The file you edited is the counts, not the first line.

Part 30 already saw this shape, on the walk where the wrong file had been edited: the counts changed, and the assemble line was still the old sentence. That part used the pair to show that the cell which had failed did not change. This part is the walk where the counts were supposed to change. Assemble did not change, so the goal stays. What has to change is the half-sentence about which cell this run enters.

### Where it shows up: rewrite the half-sentence from this run's counts, then ask these eight lines

The three questions are the three from part 29. Does each line have a cell on the picture? Given the sentence on the picture and this run's counts, did the trace enter every cell the picture says this run would walk? Is the sentence in the cell the sentence that line recorded?

The half-sentence on the picture still says milk at 1 walks into `shopping.add`. That count belongs to the twelve-line walk. This walk's counts are on line 3: milk 5, eggs 4. Milk is not below 3, so this run does not walk into `shopping.add`. What changes now is that half-sentence. The goal sentence stays.

```text
the assemble cell in diagram.txt
old: goal: write it only below 3. Milk at 1 is below 3, so this run walks into shopping.add
new: goal: write it only below 3. Milk at 5 is not below 3, so this run does not walk into shopping.add
the right side is still loop.txt. The list is still fridge.count, shopping.add
```

"Write it only below 3" does not change by a word, because assemble still recorded the old sentence. The half-sentence is rewritten from the counts on line 3, and from the cell this walk entered. The eight lines are not added to the picture. `shopping.add` stays on the list, and it stays the recognize-the-name cell. This run did not enter it, so the half-sentence says so. The door is not erased from the picture.

You ask the three questions of these eight lines. Lines 1 and 5 are assemble. Lines 2 and 6 put the model back. Line 3 recognizes a name. Line 4 takes otherwise. Line 7 closes. Line 8 stops. Each of those cells is on the picture. No extra line appears.

The picture now says "write it only below 3," and milk at 5 does not walk into `shopping.add`. These eight lines do not enter that cell. Eggs are 4, they are not written, and the trace has no write for eggs. This question passes.

Assemble points at `loop.txt`, and line 1 says it read `loop.txt`. The goal in the cell is "write it only below 3," and line 1 recorded that sentence. Recognizing the name ran `doors/fridge.count` and pasted "milk 5" and "eggs 4." This question passes too. The half-sentence is not on line 1. The third question compares the sentence that was read. Whether the half-sentence is right is the second question.

All three pass. The picture has caught up with this run. Caught up means these eight lines. The twelve lines stay, so you can see that the assemble sentence did not change and the counts did.

The same split shows up when the door does not change. Change milk to 2, and leave eggs at 4. Two is still below 3, so this walk still enters `shopping.add`. Assemble is still "below 3," and the goal sentence still stays. The half-sentence cannot stay on "milk at 1." That count is the previous walk's. Rewrite it as "milk at 2 is below 3, so this run walks into shopping.add." The door did not change. The counts did, so the half-sentence is rewritten anyway. Then you ask the walk that pasted "milk 2." Leave the half-sentence on milk at 1 while this walk pasted milk 2, and the cell name matches while the count does not. The second question fails.

Leave the half-sentence on "milk at 1, walks into shopping.add," and ask the eight lines where milk is 5. The picture still says this run walks into `shopping.add`. These eight lines do not. The second question fails. The goal is still "below 3," the same sentence as line 1, so the third question passes. What passed is the goal. The half-sentence is the previous walk's. The pass on the twelve lines does not say this half-sentence is still this walk's.

See that `shopping.add` is missing, and change the goal to "below 5," or to the closing sentence that says milk is not written. Line 1 is still "below 3." The third question fails. The bubble can look tidy. Tidy is the close on line 7. It is not written into the assemble cell. The counts go in the half-sentence. They do not go in the goal.

The eight lines have already recorded milk 5 and no `shopping.add`, and you ask the twelve lines instead. The half-sentence says this run does not walk in. The twelve lines do, and they pasted "milk 1." The second question fails. After the half-sentence is set to this run's counts, you ask the walk that wrote those counts down.

Erase `shopping.add` from the list because this run did not enter it. Line 1 says the list is still `fridge.count` and `shopping.add`. The list in the cell is not the list that line recorded. Not entering is written in the half-sentence. The door stays on the list.

### The usual mix-up

The usual mix-up is to treat an unchanged first line as a reason to leave the whole cell, and skip the questions; or to treat a new count as a reason to change the goal sentence along with it; or to treat a shorter trace as a reason to copy all eight lines into `diagram.txt`; or to ask the model whether this run still enters `shopping.add`.

An unchanged first line is a reason to keep the goal sentence. The half-sentence says which cell this run's counts enter. Once the counts have changed, a half-sentence that still belongs to the previous walk fails the second question. The pass on the twelve lines does not cover these eight.

Change the goal to "milk 5" or to "below 5," and you have changed a sentence assemble did not read. Line 1 is still "below 3." This cell's sentence did not change, so the goal does not take a new sentence.

Copy all eight lines onto the picture, and the sentences came from the trace. The picture no longer points at a file. This part leaves the goal where it is and rewrites only the half-sentence. The cells for putting the model back, recognizing a name, and stopping stay, and the file names on their right stay.

The model does not see `diagram.txt`. Ask whether this run enters that cell, and what it hands back is still a next span. Part 8 already said a next span is not an observation. Whether this walk entered the cell is whether that line is on the trace. What the counts are is the line this walk has already pasted.

What this part hands off is short. On the walk where the first line stays and the counts change, assemble still records the old sentence, so the goal on the picture stays. The half-sentence about which cell this run enters is rewritten from this run's counts. Then you ask the three questions of this walk, not of the walk whose counts are still the old ones. The next part splits where the count in that half-sentence comes from: copy the line this walk's recognize-the-name step pasted, not the number you typed into `cartons.txt` before this walk has pasted anything. While that line is not written yet, the half-sentence stays. Only when the pasted count differs from the previous walk do you rewrite the half-sentence from that line, and then ask this walk the three questions.
