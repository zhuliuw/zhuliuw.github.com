---
title: "三句在这份新轨迹上过了之后，第一行再改，图先不动；更新的那一圈里这一格的句子又变了，才把图上那一格改成那一行里的新句子，再拿那一份更新的轨迹问那三句"
description: "三句过了之后，第一行再改，图先留着；更新的那一圈里这一格的句子又变了，才把图改成那一行里的新句子，再拿那一圈问。 After the three questions have passed, a further edit to the first line leaves the picture in place; only when a newer walk has changed this cell's sentence do you set the picture to that newer line and ask that walk."
pubDate: 2026-11-12
slug: 2026/11/12/the-newer-line-after-the-pass
category: AI 系列
tags:
  - AI 系列
  - AI
draft: false
---

AI 系列第 33 篇。上一篇：[新轨迹里这一格的句子变了之后，把图上那一格改成新行里的那一句，再拿这份新轨迹问那三句](/2026/11/11/the-new-line-onto-the-cell/)。上一篇停在一句：三句过了，只说明图追上了这一次。这一篇做追上之后、第一行再改的那一步。

## 中文

还是那句目标，还是那几扇门。上一篇结束时，三句在那份八行上过了。`loop.txt` 的第一行是「少于 1 才写入」，图上拼页也是这一句，并写着牛奶是 1、这一次不走进 `shopping.add`。那一圈对得上。这一篇把第一行再改成图上还没有的一句。图先留着。不添新的门。

```text
[系统] 确认牛奶和鸡蛋的盒数。少于 2 盒的写进购物清单。
盒数请调用 fridge.count。写清单请调用 shopping.add。
不要编造盒数。步数上限 8。同一扇门同一组参数失败 3 次就停。
下单不在这份名单里。
[用户] 冰箱里牛奶和鸡蛋够不够？不够的列进清单。
[模型]
```

第十四篇那一圈，更早的中文单篇写成过组装、决定、执行、写回、检查是否停止：[AI 智能体的执行原理](/2026/10/09/ai-agent-execution/)。那一篇不算本系列的第一篇。这一篇仍从冰箱写起。开头那一块是原来的任务。拼上页、写进轨迹的，是 `loop.txt` 的第一行。要分开的是已经通过的那一份轨迹，和第一行再改之后新走的那一圈。

### 三句过了，图先留着，等更新的那一圈

三句是第二十九篇那三句。每一行在图上找得到格。图上那一句配上这一次的盒数，说会走进的格，轨迹里有。格子里的句子，和这一行读到的句子，是同一句。上一篇的八行三句都过。拼页是「少于 1 才写入」，没有 `shopping.add`，放回两次。过了的是这八行。

今晚只改第一行，改成「少于 3 才写入」。名单、停、注都不动。注可以仍写「其实少于 1」，也可以没有。`diagram.txt` 不改。它还写着「少于 1」，还写着这一次不走进 `shopping.add`。

图和文件这时对不上，是刚改出来的。通过不要求你在保存的同一刻把图改成刚打进去的那句。图先不动。

### 它出现在这一次：句子又变了，才改图，再问这十二行

牛奶 1，鸡蛋 4。`cartons.txt` 不动。`run` 走一圈。更新的 `trace.txt` 是这十二行：

```text
1   拼页      读 loop.txt 第一行「少于 3 才写入」。名单仍是 fridge.count，shopping.add。页上没有注
2   放回模型  放回次数 1
3   认名字    跑了 doors/fridge.count。贴上「牛奶 1」「鸡蛋 4」
4   还放回吗  走否则
5   拼页      第一行仍是「少于 3 才写入」。名单没变
6   放回模型  放回次数 2
7   认名字    交出 shopping.add，参数是牛奶。贴上「已写入：牛奶。」
8   还放回吗  走否则
9   拼页      第一行仍是「少于 3 才写入」。名单没变
10  放回模型  放回次数 3
11  收口      「今晚牛奶 1 盒已列进清单，鸡蛋 4 盒够。」和 history 对得上
12  停        气泡交出去
```

拿通过的那八行来比。旧的拼页是「少于 1 才写入」。新的第 1 行是「少于 3 才写入」。读的仍是第一行。这一格的句子又变了。第 5 行、第 9 行是同一句。牛奶是 1，少于 3，要写，所以后面有 `shopping.add`。鸡蛋是 4，不写。放回从两次变成三次，是多走一扇门带出来的。第二十二篇那笔账上，多一扇门就多一次放回。改的仍是第一行。

图这时还写着「少于 1」。变了的证据是这两行不一样，而且新的一行是再改第一行之后走出来的。现在才改图。从这十二行的第 1 行抄。

```text
diagram.txt 里拼页那一格
旧：目标：少于 1 才写入。牛奶是 1，不小于 1，这一次不走进 shopping.add
新：目标：少于 3 才写入。牛奶是 1，少于 3，这一次走进 shopping.add
右边仍是 loop.txt。名单仍是 fridge.count，shopping.add
```

旁边「会走进」那半句，按新句子和这一次的盒数重写。八行不添到图上。`shopping.add` 仍是认名字那一格，不写进拼页。

问的是这十二行。1、5、9 是拼页，2、6、10 是放回，3 和 7 是认名字，4 和 8 是否则，11 是收口，12 是停。都有。没有多出来的一行。

图上现在是「少于 3 才写入」，牛奶 1，会走进 `shopping.add`。这十二行里有。鸡蛋是 4，不写，轨迹里也没有给鸡蛋的写入。这一句过了。

拼页指着 `loop.txt`，第 1 行写的是读 `loop.txt`。格子里是「少于 3 才写入」，第 1 行记下的也是这一句。认名字先跑 `doors/fridge.count`，贴上「牛奶 1」「鸡蛋 4」，再跑 `doors/shopping.add`。这一句也过了。

三句都过。图追上了这一次。追上说的是这十二行。八行留着，只用来比这一格变过没有。

你把图留在「少于 1」，拿这十二行来问。格子里是「少于 1」，第 1 行是「少于 3」，第三句过不去。图还说这一次不走进 `shopping.add`，这十二行走进了，第二句过不去。八行上的通过不说明这张图还是这一圈的。

十二行还没有，你就把图改成「少于 3」。行还没写下，你还不知道页上收到的是第一行，还是被丢掉的注。把「少于 3」写在注里，第一行仍是「少于 1」。更新的那一圈拼页还是「少于 1」，也没有 `shopping.add`。这一格没有变。图留着「少于 1」。这一圈上三句仍然过。句子没变，就不改图。

十二行已经写下「少于 3」，你却拿八行来问。图是新句子，八行的拼页是「少于 1」，也没有 `shopping.add`。第二句和第三句都过不去。八行过的时候，图还是「少于 1」。图换成新句子之后，要问写下这个新句子的那一圈。

你不看第 1 行，把图改成收口那句，或改成你打算写成的「少于 5」。第 1 行是「少于 3」。第三句过不去。气泡整齐，整齐是第 11 行，它不写进拼页。

目标改成了「少于 3」，旁边仍写着「不走进 shopping.add」。第二句过不去。那半句是「少于 1」留下的，要按新句子和这一次的盒数重写。

### 一个常见误会

误会是：三句刚过，第一行和图要一起改，好让它们一直对得上；或者十二行比八行长，就把整份抄进 `diagram.txt`；或者八行上过了的那三句，可以拿来给这十二行盖章；或者问模型「图现在是不是该写成少于 3」。

一起改，改的是你打进去的字。这一格变没变，看更新的那一圈里拼页那一行。那一行写下「少于 3」之后，才把图上那一格改成这一句。在那之前，图留着刚通过的那一句。对不上，是这一步该有的样子。

把十二行整份抄进图，句子是从轨迹抄的，图就不再指着文件。这一篇只改拼页里变了的那一句，并把「会走进」按这一次重写。放回、认名字、停留着，右边的文件名也不换。

八行上的通过只盖住那八行。十二行上的通过只盖住这十二行。

模型看不见 `diagram.txt`。你问它图要不要改，它交出来的仍是下一段。第八篇写过：下一段不是观察。该写上图的那一句，是更新的那一圈里这一格那一行已经写下的句子。

留下三句就够这一篇用：三句在这份新轨迹上过了之后，第一行再改，图先不动；更新的那一圈里这一格的句子又变了，才把图上那一格改成那一行里的新句子；再拿那一份更新的轨迹问那三句，不拿过了的那一圈问。下一篇再拆：第一行没变、盒数变了的那一圈，拼页记下的句子仍是旧的，图上目标那一句留着；「会走进哪一格」那半句按这一次的盒数重写，再拿这一圈问那三句。

## English

Part 33 starts where [part 32](/2026/11/11/the-new-line-onto-the-cell/) stopped. The last part stopped on one line: three questions passing says only that the picture has caught up with that one run. This part does the step after that pass, when the first line changes again.

The goal is the same, and so are the doors. At the end of the last part, the three questions had passed on an eight-line trace. The first line of `loop.txt` was "write it only below 1," the assemble cell on the picture said the same, and it said milk at 1 does not walk into `shopping.add` on that run. That walk matched. This part changes the first line again, to a sentence the picture does not have yet. The picture stays. It adds no new door.

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

An earlier Chinese piece, outside this series, wrote the loop from part 14 as assemble, decide, run, write back, and check whether to stop: [how an agent actually runs](/2026/10/09/ai-agent-execution/). That piece is not part 1. This part still starts from the fridge. The block above is the original task. What gets pasted onto the page, and written into the trace, is the first line of `loop.txt`. What has to be pulled apart is the trace that already passed, and the walk that happens after the first line changes again.

### After the three questions pass, the picture stays until a newer walk

The three questions are the three from part 29. Does each line have a cell on the picture? Given the sentence on the picture and this run's counts, did the trace enter every cell the picture says this run would walk? Is the sentence in the cell the sentence that line recorded? On the eight lines from the last part, all three passed. Assemble says "write it only below 1," there is no `shopping.add`, and put-backs are 2. The pass covers those eight lines.

Tonight you change only the first line, to "write it only below 3." The list, the stops, and a note stay put. The note can still say "actually below 1," or it can be absent. `diagram.txt` is not edited. It still says "below 1," and it still says this run does not walk into `shopping.add`.

The picture and the file disagree at this moment because you just made them disagree. The pass does not ask you to set the picture, in the same moment you save, to the sentence you just typed. The picture stays where it is.

### Where it shows up: once the sentence has changed again, change the picture, then ask these twelve lines

Milk is 1, eggs are 4. `cartons.txt` stays put. `run` walks once. The newer `trace.txt` is these twelve lines:

```text
1   assemble the page     read the first line of loop.txt, "write it only below 3." The list is still fridge.count, shopping.add. The note is not on the page
2   put the model back    put-back 1
3   recognize the name    ran doors/fridge.count. Pasted "milk 1" and "eggs 4"
4   put the model back again?    took otherwise
5   assemble the page     the first line is still "write it only below 3." The list did not change
6   put the model back    put-back 2
7   recognize the name    handed over shopping.add, argument milk. Pasted "written: milk."
8   put the model back again?    took otherwise
9   assemble the page     the first line is still "write it only below 3." The list did not change
10  put the model back    put-back 3
11  close                 "Tonight 1 carton of milk is on the list, and 4 cartons of eggs are enough." It matches history
12  stop                  hand over the bubble
```

Set the assemble line from the eight lines that passed beside line 1 here. The old line says "write it only below 1." The new line 1 says "write it only below 3." The file read is still the first line. This cell's sentence changed again. Lines 5 and 9 carry the same sentence. Milk is 1, which is below 3, so it is written, and `shopping.add` shows up later. Eggs are 4, so they are not written. Put-backs going from 2 to 3 is the extra door bringing the loop one step further. On the bill from part 22, one more door is one more put-back. The file you edited is still the first line.

At this moment the picture still says "below 1." The evidence that the sentence changed is that these two lines differ, and that the new line was written by the walk after this further edit. Now the picture changes. You copy it from line 1 of these twelve lines.

```text
the assemble cell in diagram.txt
old: goal: write it only below 1. Milk at 1 is not below 1, so this run does not walk into shopping.add
new: goal: write it only below 3. Milk at 1 is below 3, so this run walks into shopping.add
the right side is still loop.txt. The list is still fridge.count, shopping.add
```

The half-sentence about which cell this run enters is rewritten from the new sentence and this run's counts. The eight lines are not added to the picture. `shopping.add` stays the recognize-the-name cell. It is not written into assemble.

You ask the three questions of these twelve lines. Lines 1, 5, and 9 are assemble. Lines 2, 6, and 10 put the model back. Lines 3 and 7 recognize a name. Lines 4 and 8 take otherwise. Line 11 closes. Line 12 stops. Each of those cells is on the picture. No extra line appears.

The picture now says "write it only below 3," and milk at 1 walks into `shopping.add`. These twelve lines enter that cell. Eggs are 4, they are not written, and the trace has no write for eggs. This question passes.

Assemble points at `loop.txt`, and line 1 says it read `loop.txt`. The cell says "write it only below 3," and line 1 recorded that sentence. Recognizing the name ran `doors/fridge.count` and pasted "milk 1" and "eggs 4," then ran `doors/shopping.add`. This question passes too.

All three pass. The picture has caught up with this run. Caught up means these twelve lines. The eight lines stay, so you can see that this cell's sentence changed. They are not the trace you ask.

The same three questions show which trace, and which sentence, was used too early.

Leave the picture on "below 1," and ask these twelve lines. The cell says "below 1," line 1 says "below 3," and the third question fails. The picture still says this run does not walk into `shopping.add`, these twelve lines do, and the second question fails. The pass on the eight lines does not say this picture is still the newer walk's picture.

Change the picture to "below 3" before the twelve lines exist. There is no line yet, so you do not yet know whether the page received the first line or a note that was dropped. Write "below 3" only in the note, and leave the first line as "below 1." Assemble on the newer walk is still "below 1," and there is no `shopping.add`. This cell did not change. The picture stays on "below 1." The three questions still pass on that walk. When the sentence did not change, you do not change the picture.

The twelve lines have already recorded "below 3," and you ask the eight lines instead. The picture is the new sentence. The eight lines say "below 1," and they have no `shopping.add`. The second question and the third question both fail. When the eight lines passed, the picture still said "below 1." After the picture is set to the new sentence, you ask the walk that wrote that sentence down.

Ignore line 1, and set the picture to the closing sentence, or to "below 5" because that is the sentence you meant to write. Line 1 says "below 3." The third question fails. The bubble can look tidy. Tidy is the close on line 11. It is not written into the assemble cell.

Change the goal to "below 3," and leave "does not walk into shopping.add" beside it. The second question fails. That half-sentence was left by "below 1." It has to be rewritten from the new sentence and this run's counts.

### The usual mix-up

The usual mix-up is to treat a fresh pass as a reason to edit the first line and the picture together, so they never disagree; or to treat a longer trace as a reason to copy all twelve lines into `diagram.txt`; or to treat the pass on the eight lines as a stamp you can put on the twelve; or to ask the model whether the picture should now say below 3.

Editing them together edits the sentence you typed. Whether this cell changed is the assemble line on the newer walk. After that line says "below 3," you set the cell on the picture to that sentence. Until then, the picture keeps the sentence that just passed. The disagreement is what this step looks like before the newer line exists.

Copy all twelve lines onto the picture, and the sentences came from the trace. The picture no longer points at a file. This part changes only the sentence that changed, inside the assemble cell, and rewrites "which cell this run enters" from that sentence and these counts. The cells for putting the model back, recognizing a name, and stopping stay, and the file names on their right stay.

A pass on the eight lines covers those eight lines. A pass on the twelve lines covers these twelve lines.

The model does not see `diagram.txt`. Ask whether the picture should change, and what it hands back is still a next span. Part 8 already said a next span is not an observation. The sentence that belongs on the picture is the sentence this cell's line on the newer walk has already written down.

What this part hands off is short. Once the three questions have passed on this new trace, a further edit to the first line leaves the picture where it is. Only after a newer walk has changed this cell's sentence again do you set that cell on the picture to the sentence in that newer line. Then you ask the three questions of that newer trace, not of the walk that already passed. The next part splits the walk where the first line stays and the counts change: assemble still records the old sentence, so the goal on the picture stays; the half-sentence about which cell this run enters is rewritten from this run's counts, and you ask the three questions of that walk.
