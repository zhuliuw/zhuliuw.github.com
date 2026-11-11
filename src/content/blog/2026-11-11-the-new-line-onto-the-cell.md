---
title: "新轨迹里这一格的句子变了之后，把图上那一格改成新行里的那一句，再拿这份新轨迹问那三句"
description: "新轨迹里这一格的句子变了，才把图上那一格改成这一行里的那一句，再拿这份新轨迹问那三句。 After this cell's sentence has changed on the new trace, change that cell on the picture to the sentence in the new line, then ask the three questions of this new trace."
pubDate: 2026-11-11
slug: 2026/11/11/the-new-line-onto-the-cell
category: AI 系列
tags:
  - AI 系列
  - AI
draft: false
---

AI 系列第 32 篇。上一篇：[这一格指着的文件里，它读到的那一句才算改到；没读到的字，新轨迹里这一格仍是旧的](/2026/11/10/the-sentence-that-cell-reads/)。上一篇停在一句：第一行变了，新轨迹里这一格的句子才变。这一篇做变了之后的那一步。

## 中文

还是那句目标，还是那几扇门。上一篇结束时，`loop.txt` 的第一行是「少于 2 才写入」，新轨迹里拼页也是这一句，图上拼页仍写着「少于 2」。那一圈对得上，是因为文件改回了图上已经有的句子。这一篇把第一行改成图上还没有的一句，等新轨迹里这一格变了，再改图。不添新的门。

```text
[系统] 确认牛奶和鸡蛋的盒数。少于 2 盒的写进购物清单。
盒数请调用 fridge.count。写清单请调用 shopping.add。
不要编造盒数。步数上限 8。同一扇门同一组参数失败 3 次就停。
下单不在这份名单里。
[用户] 冰箱里牛奶和鸡蛋够不够？不够的列进清单。
[模型]
```

第十四篇那一圈，更早的中文单篇写成过组装、决定、执行、写回、检查是否停止：[AI 智能体的执行原理](/2026/10/09/ai-agent-execution/)。那一篇不算本系列的第一篇。这一篇仍从冰箱写起。要分开的是新轨迹里这一格写下的句子，和图上那一格还留着的句子。

### 新行里的句子先变，图上那一格再改成这一句

上一篇结束时的那一圈，拼页记下「少于 2 才写入」，后面走进 `shopping.add`，贴上「已写入：牛奶。」图上拼页也是「少于 2」，并写着牛奶是 1 会走进 `shopping.add`。今晚只改 `loop.txt` 的第一行，改成「少于 1 才写入」。名单、停、末尾的注都不动。注可以仍写「其实少于 2」，也可以没有。`diagram.txt` 先不动。

牛奶 1，鸡蛋 4。`cartons.txt` 不动。`run` 走一圈。新的 `trace.txt` 是这八行：

```text
1  拼页      读 loop.txt 第一行「少于 1 才写入」。名单仍是 fridge.count，shopping.add。页上没有注
2  放回模型  放回次数 1
3  认名字    跑了 doors/fridge.count。贴上「牛奶 1」「鸡蛋 4」
4  还放回吗  走否则
5  拼页      第一行仍是「少于 1 才写入」。名单没变
6  放回模型  放回次数 2
7  收口      「牛奶 1 盒，不小于 1，不写。鸡蛋 4 盒够。」
8  停        气泡交出去
```

拿上一篇结束时的拼页来比。旧行是「少于 2 才写入」。新的第 1 行是「少于 1 才写入」。读的仍是 `loop.txt` 的第一行。这一格的句子变了。第 5 行是同一句。没有 `shopping.add`。放回是两次。

变了的证据是这两行不一样，而且新的一行是改完第一行之后新走的一圈写下的。到这一步，图还写着「少于 2」。第三十篇先改的是文件。这一格已经变了，图是落后的那一张。现在才改图。

改的是拼页那一格里的那一句，改成新的第 1 行里记下的那一句：「少于 1 才写入」。从这一行抄。格子右边仍指着 `loop.txt`。新轨迹写着名单没变，图上的名单就不动。

```text
diagram.txt 里拼页那一格
旧：目标：少于 2 才写入。牛奶是 1，会走进 shopping.add
新：目标：少于 1 才写入。牛奶是 1，不小于 1，这一次不走进 shopping.add
右边仍是 loop.txt。名单仍是 fridge.count，shopping.add
```

旁边「会走进」那半句，按格子里的新句子和这一次的盒数重写。少于 1，牛奶是 1，这一次不走进 `shopping.add`。旧轨迹里的那一行不添到图上。

### 它出现在这一次：拿这份八行问那三句

三句是第二十九篇那三句。问的是上面这八行。

每一行在图上有没有这一格。1 和 5 是拼页，2 和 6 是放回，3 是认名字，4 是否则，7 是收口，8 是停。都有。没有多出来的一行。

图上自己写的那一句，配上这一次的盒数，说会走进的格，轨迹里有没有。图上现在是「少于 1 才写入」，牛奶 1，鸡蛋 4。两样都不写。轨迹里没有 `shopping.add`。这一句过了。

格子右边的文件，和这一行写下的文件，是不是同一个；格子里的那一句，和这一行读到的那一句，是不是同一句。拼页指着 `loop.txt`，第 1 行写的是读 `loop.txt`。格子里是「少于 1 才写入」，第 1 行记下的也是这一句。认名字跑的是 `doors/fridge.count`，贴上的是「牛奶 1」「鸡蛋 4」。这一句也过了。

三句都过。图追上了这一次。追上说的是这八行。

你不看新的第 1 行，把图改成注里的「少于 2」，或改成你打算写成的「少于 5」。第一行和轨迹都是「少于 1」。第三句过不去。格子里的句子要和这一行读到的句子相同。注不在这一行里。上一篇写过：注被丢掉，这一格仍是旧句子。

你把图上那一格改成收口那句「牛奶 1 盒，不小于 1，不写」。第三句比的是拼页读到的第一行。气泡可以很整齐。整齐是第 7 行的收口，它不写进拼页那一格。

你把目标改成了「少于 1」，旁边仍写着「牛奶是 1 会走进 shopping.add」。第二句过不去。图自己还说会走进那一格，这八行里没有。那半句是旧句子留下的，要按新句子重写。

你把格子改成了「少于 1」，却拿上一篇结束时的那一圈来问。那一圈的拼页是「少于 2」，后面还有 `shopping.add`。第三句和第二句都过不去。你问的是改第一行之前的那一圈。三句要问在这份新轨迹上。旧的那一圈只用来比这一格变过没有。

上一篇加注时也留下过八行，拼页写着「少于 1」，那是更早的一圈。后来第一行改回「少于 2」，最新的一圈已经换了句子。拿那份旧八行来改图，问的不是这一次。用来抄的是今晚这八行的第 1 行。

注没让句子变，图也不改。上一篇加注时第一行仍是「少于 1」，新轨迹的拼页还是这一句。这一格没有变，图上这一格留着。

八行还没有的时候，不改图。第三十篇写过：只改图，再走一圈，拼页仍是文件里的旧句子，第三句过不去。这一篇要等那一句已经写进新行，才改图，再问这份新的。

### 一个常见误会

误会是：文件一保存，就把图改成你刚写进文件的那句；或者新轨迹长得不一样，就把整份八行抄进 `diagram.txt`；或者三句过了，就说第一行再改，这张图仍然还在；或者问模型「图要不要改成少于 1」。

保存写的是 `loop.txt`。这一格变没变，看新轨迹里拼页那一行。没有这一行，你还不知道拼上页的是第一行，还是被丢掉的注。这一行写下「少于 1」之后，再把图上那一格改成这一句。

把八行整份抄进图，句子是从轨迹抄的，图就不再指着文件。这一篇只改拼页那一格里变了的那一句。放回、认名字、停留着，右边的文件名也不换。

三句过了，只盖住这八行。明天第一行若再改，图先留着今晚这句。要等更新的那一圈把拼页写成新句子，才能再改图上那一格，再拿那一份更新的轨迹问。这八行不能代替那一圈。

模型看不见 `diagram.txt`。你问它图要不要改，它交出来的仍是下一段。第八篇写过：下一段不是观察。该写上图的那一句，是新轨迹里这一格那一行已经写下的句子。

留下三句就够这一篇用：新轨迹里这一格的句子和旧的不同，才把图上那一格改成新行里的那一句；然后拿这份新轨迹问那三句，不拿旧的那一圈问；三句过了只说明图追上了这一次。下一篇再拆：三句在这份新轨迹上过了之后，第一行再改，图先不动；更新的那一圈里这一格的句子又变了，才把图上那一格改成那一行里的新句子，再拿那一份更新的轨迹问那三句。

## English

Part 32 starts where [part 31](/2026/11/10/the-sentence-that-cell-reads/) stopped. The last part stopped on one line: when the first line changes, this cell's sentence on the new trace changes. This part does the step after that change.

The goal is the same, and so are the doors. At the end of the last part, the first line of `loop.txt` was "write it only below 2," the assemble line on the new trace said the same, and the assemble cell on the picture still said "below 2." That walk matched because the file had been put back onto a sentence the picture already had. This part changes the first line to a sentence the picture does not have yet, waits until this cell's sentence has changed on a new trace, and only then changes the picture. It adds no new door.

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

An earlier Chinese piece, outside this series, wrote the loop from part 14 as assemble, decide, run, write back, and check whether to stop: [how an agent actually runs](/2026/10/09/ai-agent-execution/). That piece is not part 1. This part still starts from the fridge. What has to be pulled apart is the sentence this cell wrote on the new trace, and the sentence that cell on the picture still holds.

### The sentence changes on the new line first, and the cell on the picture is then set to that sentence

On the walk at the end of the last part, assemble recorded "write it only below 2," and a later step entered `shopping.add` and pasted "written: milk." The assemble cell on the picture also said "below 2," and it said milk at 1 walks into `shopping.add`. Tonight you change only the first line of `loop.txt`, to "write it only below 1." The list, the stops, and a note at the end stay put. The note can still say "actually below 2," or it can be absent. `diagram.txt` stays where it is.

Milk is 1, eggs are 4. `cartons.txt` stays put. `run` walks once. The new `trace.txt` is these eight lines:

```text
1  assemble the page     read the first line of loop.txt, "write it only below 1." The list is still fridge.count, shopping.add. The note is not on the page
2  put the model back    put-back 1
3  recognize the name    ran doors/fridge.count. Pasted "milk 1" and "eggs 4"
4  put the model back again?    took otherwise
5  assemble the page     the first line is still "write it only below 1." The list did not change
6  put the model back    put-back 2
7  close                 "Milk is 1 carton, which is not below 1, so it is not written. 4 cartons of eggs are enough."
8  stop                  hand over the bubble
```

Set the assemble line from the end of the last part beside this one. The old line says "write it only below 2." The new line 1 says "write it only below 1." The file read is still the first line of `loop.txt`. This cell's sentence changed. Line 5 carries the same sentence. There is no `shopping.add`. Put-backs are 2.

The evidence that it changed is that these two lines differ, and that the new line was written by a walk after the first line was saved. At this moment the picture still says "below 2." Part 30 changed the file first. This cell has already changed. The picture is the one that is behind. Now the picture changes.

What you change is the sentence inside the assemble cell. You set it to the sentence recorded on line 1 of the new trace: "write it only below 1." You copy it from that line. The right side of the cell still points at `loop.txt`. The new trace says the list did not change, so the list on the picture stays.

```text
the assemble cell in diagram.txt
old: goal: write it only below 2. Milk at 1 walks into shopping.add
new: goal: write it only below 1. Milk at 1 is not below 1, so this run does not walk into shopping.add
the right side is still loop.txt. The list is still fridge.count, shopping.add
```

The half-sentence about which cell this run enters is what the sentence in the cell says once you pair it with this run's counts. The old sentence was below 2, so the old picture said the run walks into `shopping.add`. After the sentence is the new line's "below 1," milk is 1, and this run does not walk into that cell. That half-sentence is rewritten from the new sentence. The `shopping.add` line on the old trace is not added to the picture.

### Where it shows up: ask the three questions of these eight lines

The three questions are the three from part 29. You ask them of these eight lines.

Does each line have a cell on the picture? Lines 1 and 5 are assemble. Lines 2 and 6 put the model back. Line 3 recognizes a name. Line 4 takes otherwise. Line 7 closes. Line 8 stops. Each of those cells is on the picture. No extra line appears.

Given the sentence written on the picture and this run's counts, did the trace enter every cell the picture says this run would walk? The picture now says "write it only below 1," milk is 1, and eggs are 4. Neither is written. The trace has no `shopping.add`. This question passes.

Is the file the cell points at the file written on the line, and is the sentence in the cell the sentence the line recorded? Assemble points at `loop.txt`, and line 1 says it read `loop.txt`. The cell says "write it only below 1," and line 1 recorded that sentence. Recognizing the name ran `doors/fridge.count` and pasted "milk 1" and "eggs 4." This question passes too.

All three pass. The picture has caught up with this run. Caught up means these eight lines.

The same three questions show which sentence was copied wrong.

Ignore line 1, and set the picture to "below 2" from the note, or to "below 5" because that is the sentence you meant to write. The first line and the trace both say "below 1." The third question fails. The sentence in the cell has to be the sentence this line read. The note is not on this line. The last part already said a dropped note leaves this cell on the old sentence.

Set the cell to the closing sentence, "Milk is 1 carton, which is not below 1, so it is not written." The third question compares the cell with the first line assemble read. The bubble can look tidy. Tidy is the close on line 7. It is not written into the assemble cell.

Change the goal to "below 1," and leave "milk at 1 walks into shopping.add" beside it. The second question fails. The picture still says this run walks into that cell, and these eight lines never enter it. That half-sentence was left by the old sentence. It has to be rewritten from the new one.

Change the cell to "below 1," and ask the questions of the walk from the end of the last part. That walk's assemble line says "below 2," and it still has `shopping.add`. The third question and the second question both fail. You asked about the walk from before this first line was changed. The three questions belong on this new trace. The older walk is only there so you can see that this cell's sentence changed.

There is an earlier eight-line trace, from the note in the last part, and its assemble line also says "below 1." At that time the first line was "below 1," and the picture still said "below 2." The first line was later put back to "below 2," and the latest walk already said "below 2." If you change the picture from that earlier eight-line trace and then ask that trace, you are not asking about this run. The new line is the line written by the walk after the sentence you just saved. The line this part copies is line 1 of tonight's eight lines.

When a note leaves the sentence unchanged, the picture stays too. The last part added a note while the first line was still "below 1," and assemble on the new trace was still "below 1," the same sentence as before the note. This cell did not change. When the sentence did not change, this cell on the picture stays. You do not set the picture to the sentence in the note.

This step also waits until the eight lines exist. Part 30 already said that editing only the picture leaves this cell's line on the new trace unchanged. Paint the picture "below 1" while `loop.txt` still says "below 2," walk once, and assemble still says "below 2." The third question fails. The order in this part is the other half of that rule. The sentence in the file is already on the new line. Then you set the cell on the picture to the sentence in that new line, and you ask this new trace.

### The usual mix-up

The usual mix-up is to treat saving the file as the moment to set the picture to the sentence you just typed; or to treat a different-looking trace as a reason to copy all eight lines into `diagram.txt`; or to treat three passing questions as a picture that will still be this run's after the first line changes again; or to ask the model whether the picture should say below 1.

A save writes `loop.txt`. Whether this cell changed is the assemble line on the new trace. Without that line, you do not yet know whether the page received the first line or a note that was dropped. After that line says "below 1," you set the cell on the picture to that sentence.

Copy all eight lines onto the picture, and the three questions look as if they pass, because the sentences came from the same trace. The picture no longer points at a file. Next week you cannot tell that assemble opens `loop.txt`. This part changes only the sentence that changed, inside the assemble cell, and rewrites "which cell this run enters" from that sentence. The cells for putting the model back, recognizing a name, and stopping stay, and the file names on their right stay.

Three questions passing covers these eight lines. If the first line changes again tomorrow, the picture keeps tonight's sentence until a newer walk writes a new sentence on assemble. Then you change that cell on the picture to the sentence in that newer line, and you ask that newer trace. These eight lines cannot stand in for that walk.

The model does not see `diagram.txt`. Ask whether the picture should change, and what it hands back is still a next span. Part 8 already said a next span is not an observation. The sentence that belongs on the picture is the sentence this cell's line on the new trace has already written down.

What this part hands off is short. When this cell's sentence on the new trace differs from the old one, change that cell on the picture to the sentence in the new line. Then ask the three questions of this new trace, not of the older walk. Three questions passing says only that the picture has caught up with this run. The next part splits the step after that pass: once the three questions have passed on this new trace, a further edit to the first line leaves the picture where it is; only after a newer walk has changed this cell's sentence again do you set that cell on the picture to the sentence in that newer line, and ask the three questions of that newer trace.
