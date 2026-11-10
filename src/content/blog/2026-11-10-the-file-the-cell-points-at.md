---
title: "对不上时，先改那一格指着的文件，再用新轨迹看它变没变"
description: "对不上时，先改那一格右边指着的那一个文件，再走一圈；新轨迹里这一格的行变了，这一格才变了。 When the lines disagree, change the one file that cell points at and walk once more; the cell changed only if its line on the new trace changed."
pubDate: 2026-11-10
slug: 2026/11/10/the-file-the-cell-points-at
category: AI 系列
tags:
  - AI 系列
  - AI
draft: false
---

AI 系列第 30 篇。上一篇：[拿这一次的轨迹核对这张图还在不在](/2026/11/09/trace-against-the-diagram/)。上一篇拿这一次的轨迹问了三句，并停在一句：对不上时，先改那一格指着的文件，再用新轨迹看它变没变。这一篇做这一改。

## 中文

还是那句目标，还是那几扇门。上一篇把 `loop.txt` 的页顶改成了「少于 1 才写入」，`diagram.txt` 上拼页那一格仍写着「少于 2 才写入」。三句没过。这一篇不添新的门。留下的是一份规矩：对不上的那一格右边指着哪个文件，就先改那一个，再让 `run` 走一圈，拿新的 `trace.txt` 看这一格变没变。

```text
[系统] 确认牛奶和鸡蛋的盒数。少于 2 盒的写进购物清单。
盒数请调用 fridge.count。写清单请调用 shopping.add。
不要编造盒数。步数上限 8。同一扇门同一组参数失败 3 次就停。
下单不在这份名单里。
[用户] 冰箱里牛奶和鸡蛋够不够？不够的列进清单。
[模型]
```

第十四篇那一圈，更早的中文单篇写成过组装、决定、执行、写回、检查是否停止：[AI 智能体的执行原理](/2026/10/09/ai-agent-execution/)。那一篇不算本系列的第一篇。这一篇仍从冰箱写起。图还是上一篇那张，轨迹却已经不是那张图上的句子。

### 对不上的那一格，右边写着要打开的文件

上一篇停下时，`trace.txt` 是这八行。牛奶 1，鸡蛋 4。页顶已经是「少于 1 才写入」。

```text
1  拼页      读 loop.txt。页顶是「少于 1 才写入」。history.txt 是空的
2  放回模型  放回次数 1
3  认名字    跑了 doors/fridge.count。贴上「牛奶 1」「鸡蛋 4」
4  还放回吗  走否则
5  拼页      又读 loop.txt。页顶仍是「少于 1 才写入」
6  放回模型  放回次数 2
7  收口      「牛奶 1 盒，不小于 1，不写。鸡蛋 4 盒够。」按这一次读到的句子，没有必须写上的那一项
8  停        气泡交出去
```

三句里，没过的是拼页。第 1 行读到的是「少于 1 才写入」，图上那一格仍写着「少于 2 才写入」。图还说牛奶是 1 会走进 `shopping.add`，这八行里没有这一格。收口那句气泡是整齐的：按页顶，牛奶确实不该写。整齐说的是这一次的文件。它不说图还在。

要开的文件写在那一格的右边。上一篇的图上，拼页的页顶指着 `loop.txt`。认名字跑起来指着 `doors/` 里的那一个文件。放回、还放回吗、收口和停，指着 `run`。已经贴上的指着 `history.txt`。这一次对不上的句子在页顶，所以打开 `loop.txt`，改第一行。这一篇信的是图上那一句：少于 2 才写入，牛奶是 1 就要写上。第一行从「少于 1 才写入」改回「少于 2 才写入」。名单、步数上限、失败几次就停，都不动。`doors/` 里的两个文件也不动。

先改的是这个文件，不是 `diagram.txt`，也不是手里这份八行的 `trace.txt`。图告诉你打开哪一个。参加这一次的是那个文件。第二十八篇写过：只改图，这一次仍走文件。

### 它出现在这一次：新轨迹里这一格的行变了，这一格才变了

`cartons.txt` 仍是牛奶 1、鸡蛋 4。`fridge.count` 仍去读它。`run` 再走一圈，新的 `trace.txt` 是这十二行：

```text
1   拼页        读 loop.txt。页顶是「少于 2 才写入」。history.txt 是空的
2   放回模型    放回次数 1
3   认名字      跑了 doors/fridge.count。贴上「牛奶 1」「鸡蛋 4」
4   还放回吗    走否则
5   拼页        又读 loop.txt。页顶仍是「少于 2 才写入」
6   放回模型    放回次数 2
7   认名字      交出 shopping.add，参数是牛奶。跑了 doors/shopping.add。贴上「已写入：牛奶。」
8   还放回吗    走否则
9   拼页        又读 loop.txt。页顶仍是「少于 2 才写入」
10  放回模型    放回次数 3
11  收口        「今晚牛奶 1 盒已列进清单，鸡蛋 4 盒够。」和 history 对得上
12  停          气泡交出去
```

拿旧的八行和新的十二行，只比拼页那一格。旧的第 1 行是「少于 1 才写入」。新的第 1 行是「少于 2 才写入」。读的仍是 `loop.txt`，句子换了。第 5 行、第 9 行也是这一句。这一格变了。后面多出来的 `shopping.add`，是这一句走完之后的路。图上本来就写着：牛奶是 1，会走进那一格。那一行是这一格变了以后带出来的，不是第二处改动。放回从 2 次变成 3 次，也是这一句带出来的。第二十二篇那笔账上，多走一扇门就多一次放回。次数变了，改的仍是页顶那一个文件。

变了的证据是这两行不一样，而且新的一行是改完文件之后新走的一圈写下的。旧的八行留着，用来比。它不能代替新的一圈。你保存 `loop.txt` 的时间、气泡写得整不整齐、`diagram.txt` 有没有涂改，都不是这一格变了的证据。

现在把第一行改回「少于 1 才写入」，专门做这个对照。你只改 `diagram.txt`，让拼页那一格也写成「少于 1」，并把「牛奶会走进 `shopping.add`」从画上擦掉。再走一圈。新轨迹的拼页仍是「少于 1 才写入」，和旧的八行是同一句。这一格没有变。三句可以在这张新画上过，过的是你改出来的画。`run` 走进的那一格还是旧句子。

改错文件也比得出来。拼页对不上，你不去动 `loop.txt`。认名字那一格跑的是 `doors/fridge.count`，它去读 `cartons.txt`。你把 `cartons.txt` 改成牛奶 0、鸡蛋 4。页顶仍是「少于 1」。新轨迹里拼页那一行仍是「少于 1 才写入」。认名字那一行变了：贴上的是「牛奶 0」。0 小于 1，后面会出现 `shopping.add`。变的是另一格读到的数，不是拼页这一格。对不上的那一格没有变。

还有一种看起来像变了。你不让 `run` 再走，把旧的 `trace.txt` 改成十二行，句子写成「少于 2 才写入」，并补上 `shopping.add`。图上的三句这时过了。`loop.txt` 仍是「少于 1」。再让 `run` 走一次，新轨迹还是那八行。这一格没有变。你改的是上一篇留给你看的记录。第二十九篇写过：从 `diagram.txt` 抄进行，对不出来这一次打开的文件。这一篇是反过来的那一手：把轨迹涂成图的样子，也不是新的一圈。

### 一个常见误会

误会是：气泡改口了，这一格就变了；或者问模型「你是不是改过了」；或者一次改了 `loop.txt` 和 `cartons.txt`，新轨迹长得不一样，就说是拼页这一格变的；或者拿改图之前的那份旧轨迹，对改完的图再问一遍三句。

气泡是收口交出去的那一句。它可以用少于 1 的说法把清单说成空的，也可以在文件已经改回少于 2 之后，仍交出一句和 `history.txt` 对不上的收口。第十七篇写过：没有「已写入。」，`run` 不把那句话当完成。第八篇写过：下一段不是观察。这一格变没变，看新轨迹里这一格那一行，不看气泡。

模型看不见 `diagram.txt`，也看不见你保存的是哪一个文件。你问它变了没有，它交出来的仍是下一段。哪一个文件被打开，是 `run` 在打开的那一刻写进轨迹的。

两个文件一起改，新轨迹里拼页和认名字都会变。你指不出哪一行是哪一个文件带来的。这一篇只改拼页右边那一个文件。别的格的行才能拿来当对照：认名字仍贴「牛奶 1」「鸡蛋 4」，说明 `doors/` 没有被动过。

旧轨迹是改文件之前的那一圈。图改完之后拿它来问，问的不是这一次。三句要问在新的一圈上。旧的八行只用来和新的十二行比那一格。

留下三句就够这一篇用：对不上时，先改那一格右边指着的那一个文件，不先改图，也不改旧轨迹；再走一圈，新轨迹里这一格的行和旧的不同，这一格才变了；只改图、改了别的文件、或涂改旧轨迹，新轨迹里这一格仍是旧的。下一篇再拆：这一格指着的文件里，它这一次读到的那一句才算改到；写在同一文件里、这一格没读到的字，新轨迹里的这一格仍是旧的。

## English

Part 30 starts where [part 29](/2026/11/09/trace-against-the-diagram/) stopped. The last part asked this run's trace three questions, and stopped on one line: when they disagree, change the file that cell points at first, then use a new trace to see whether that cell changed. This part makes that change.

The goal is the same, and so are the doors. The last part left the top of `loop.txt` saying "write it only below 1," while the assemble cell on `diagram.txt` still said "write it only below 2." The three questions failed. This part adds no new door. What it leaves is a rule. The cell that failed has a file written to its right. Change that one file, let `run` walk once more, and use the new `trace.txt` to see whether that cell changed.

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

An earlier Chinese piece, outside this series, wrote the loop from part 14 as assemble, decide, run, write back, and check whether to stop: [how an agent actually runs](/2026/10/09/ai-agent-execution/). That piece is not part 1. This part still starts from the fridge. The diagram is the one from the last part. The trace is already on a different sentence from the one in that cell.

### The cell that failed has the file to open written on its right

When the last part stopped, `trace.txt` was these eight lines. Milk is 1, eggs are 4, and the top of the page already says "write it only below 1."

```text
1  assemble the page     read loop.txt. The top says "write it only below 1." history.txt is empty
2  put the model back    put-back 1
3  recognize the name    ran doors/fridge.count. Pasted "milk 1" and "eggs 4"
4  put the model back again?    took otherwise
5  assemble the page     read loop.txt again. The top is still "write it only below 1"
6  put the model back    put-back 2
7  close                 "Milk is 1 carton, which is not below 1, so it is not written. 4 cartons of eggs are enough." Under the sentence this run read, nothing had to be written
8  stop                  hand over the bubble
```

Of the three questions, assemble is the one that failed. Line 1 read "write it only below 1." The cell on the picture still says "write it only below 2." The picture also says milk at 1 walks into `shopping.add`. These eight lines never enter that cell. The closing bubble is tidy: under the top of the page, milk should not be written. Tidy describes this run's files. It does not say the picture is still this run's.

The file to open is written on the right of that cell. On the diagram from the last part, the top of the page points at `loop.txt`. Recognizing a name, once it runs, points at one file under `doors/`. Putting the model back, asking whether to put it back, closing, and stopping point at `run`. What was already pasted points at `history.txt`. The sentence that failed is the top of the page, so you open `loop.txt` and change the first line. This part trusts the sentence on the picture: write it only below 2, and milk at 1 has to be written. The first line goes from "write it only below 1" back to "write it only below 2." The list of names, the step cap, and how many failures stop the loop stay put. The two files under `doors/` stay put.

The file comes first. `diagram.txt` does not, and neither does the eight-line `trace.txt` already in your hand. The picture tells you which file to open. The file is what joins this run. Part 28 already said that editing the picture and leaving the file means this run still walks the file.

### Where it shows up: the cell changed only when its line on the new trace changed

`cartons.txt` is still milk 1 and eggs 4. `fridge.count` still reads it. `run` walks once more, and the new `trace.txt` is these twelve lines:

```text
1   assemble the page     read loop.txt. The top says "write it only below 2." history.txt is empty
2   put the model back    put-back 1
3   recognize the name    ran doors/fridge.count. Pasted "milk 1" and "eggs 4"
4   put the model back again?    took otherwise
5   assemble the page     read loop.txt again. The top is still "write it only below 2"
6   put the model back    put-back 2
7   recognize the name    handed over shopping.add, argument milk. Ran doors/shopping.add. Pasted "written: milk."
8   put the model back again?    took otherwise
9   assemble the page     read loop.txt again. The top is still "write it only below 2"
10  put the model back    put-back 3
11  close                 "Tonight 1 carton of milk is on the list, and 4 cartons of eggs are enough." It matches history
12  stop                  hand over the bubble
```

Set the old eight lines next to the new twelve, and compare only the assemble cell. The old line 1 says "write it only below 1." The new line 1 says "write it only below 2." The file read is still `loop.txt`. The sentence changed. Lines 5 and 9 carry the same sentence. That cell changed. The `shopping.add` line that shows up later is the path after this sentence. The picture already said milk at 1 walks into that cell. The extra line is what this cell brings with it after it changes. It is not a second edit. Put-backs going from 2 to 3 is the same sentence bringing the loop one door further. On the bill from part 22, one more door is one more put-back. The count moved, and the file you edited is still the one at the top of the page.

The evidence that it changed is that these two lines differ, and that the new line was written by a walk that happened after the file was saved. The old eight lines stay, so you can compare. They cannot stand in for the new walk. The time you saved `loop.txt`, how tidy the bubble looks, and whether you marked up `diagram.txt` are not evidence that this cell changed.

Now change the first line back to "write it only below 1," as a contrast. You edit only `diagram.txt`, so the assemble cell also says "below 1," and you erase "milk walks into `shopping.add`" from the drawing. Walk once more. The assemble line on the new trace still says "write it only below 1," the same sentence as the old eight lines. That cell did not change. The three questions can pass on this new drawing. What passed is the drawing you just edited. The cell `run` entered is still the old sentence.

Editing the wrong file shows up in the same comparison. Assemble is what failed, and you leave `loop.txt` alone. The recognize-the-name cell runs `doors/fridge.count`, and that file reads `cartons.txt`. You change `cartons.txt` to milk 0 and eggs 4. The top of the page is still "below 1." On the new trace, the assemble line still says "write it only below 1." The recognize-the-name line changed: what got pasted is "milk 0." Zero is below 1, so `shopping.add` shows up later. What changed is the number a different cell read, not the assemble cell. The cell that failed did not change.

One more version only looks like a change. You do not let `run` walk again. You rewrite the old `trace.txt` into twelve lines, put "write it only below 2" on them, and add `shopping.add`. The three questions against the picture pass. `loop.txt` still says "below 1." Let `run` walk once, and the new trace is those eight lines again. That cell did not change. What you edited is the record the last part left for you to read. Part 29 already said that copying cells out of `diagram.txt` cannot show which file this run opened. This part is that move turned around. Painting the trace until it looks like the picture is not a new walk.

### The usual mix-up

The usual mix-up is to treat a bubble that changed its mind as proof the cell changed; or to ask the model "did you change?"; or to edit both `loop.txt` and `cartons.txt`, see a different trace, and call that the assemble cell changing; or to take the old trace from before the edit and ask the three questions again against the picture you just redrew.

The bubble is the sentence handed over at the close. It can describe an empty list in the language of "below 1." It can also, after the file is back to "below 2," hand over a close that does not match `history.txt`. Part 17 already said that without "written." in the history, `run` does not treat that sentence as done. Part 8 already said a next span is not an observation. Whether this cell changed is the line for this cell on the new trace. It is not the bubble.

The model does not see `diagram.txt`, and it does not see which file you saved. Ask whether it changed, and what it hands back is still a next span. Which file was opened is written into the trace by `run` at the moment it opens the file.

Edit two files, and both the assemble line and the recognize-the-name line move on the new trace. You can no longer point at which line came from which file. This part changes only the one file to the right of assemble. The other cells' lines are then there to compare against: recognize-the-name still pastes "milk 1" and "eggs 4," so `doors/` was not touched.

The old trace is the walk from before the file changed. Asking it questions after you edit the picture is not asking about this run. The three questions belong on the new walk. The old eight lines are only there to set beside the new twelve, on that one cell.

What this part hands off is short. When the lines disagree, change the one file written to the right of that cell first. Do not start with the picture, and do not start with the old trace. Walk once more. That cell changed only when its line on the new trace differs from its line on the old one. Edit only the picture, edit a different file, or repaint the old trace, and that cell's line on the new trace is still the old sentence. The next part splits a smaller cut inside that file: only the sentence this cell actually read counts as the edit; wording in the same file that this cell did not read leaves that cell's line on the new trace unchanged.
