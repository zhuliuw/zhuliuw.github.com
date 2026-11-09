---
title: "拿这一次的轨迹核对这张图还在不在"
description: "轨迹是这一次按顺序留下的格子、文件和读到的那一句；拿它问三句，三句都过，图才还在这一次上。 A trace is the cells, files, and sentence this run kept in order; ask it three questions, and only when all three pass is the diagram still this run's."
pubDate: 2026-11-09
slug: 2026/11/09/trace-against-the-diagram
category: AI 系列
tags:
  - AI 系列
  - AI
draft: false
---

AI 系列第 29 篇。上一篇：[从这一系列里留下可以自己改的一张执行图](/2026/11/08/diagram-you-can-edit/)。上一篇把那一圈收成仓库里一张你能改的图，并停在一句：拿这一次的轨迹核对这张图还在不在。这一篇做这件核对。

## 中文

还是那句目标，还是那几扇门。上一篇的 `diagram.txt` 还在仓库里，和 `loop.txt` 放在一起。这一篇不添新的门。留下的是 `run` 边走边写的 `trace.txt`，以及你拿它去对那张图的三句。

```text
[系统] 确认牛奶和鸡蛋的盒数。少于 2 盒的写进购物清单。
盒数请调用 fridge.count。写清单请调用 shopping.add。
不要编造盒数。步数上限 8。同一扇门同一组参数失败 3 次就停。
下单不在这份名单里。
[用户] 冰箱里牛奶和鸡蛋够不够？不够的列进清单。
[模型]
```

第十四篇那一圈，更早的中文单篇写成过组装、决定、执行、写回、检查是否停止：[AI 智能体的执行原理](/2026/10/09/ai-agent-execution/)。那一篇不算本系列的第一篇。这一篇核对的是，这一次走进的格和图上画的是不是同一路。

### 轨迹是这一次走进的格，一行里有格子、文件和读到的那一句

图是你下周还打得开的那张画。轨迹是这一次已经走完的那些步。`run` 每走进一格，就在 `trace.txt` 末尾加一行。这一行写四样：第几步、走进哪一格、这一格当时碰的哪个文件、这一步实际读到或贴上的那一句。

牛奶 1、鸡蛋 4，页顶仍是「少于 2 才写入」。这一次停下之后，`trace.txt` 是这十二行：

```text
trace.txt    run 走进一格就加一行。不要从 diagram.txt 抄。

1   拼页        读 loop.txt。页顶是「少于 2 才写入」。history.txt 是空的。用户那一行在这次调用里
2   放回模型    run 把模型放在页末。放回次数 1
3   认名字      交出 fridge.count。跑了 doors/fridge.count。贴上「牛奶 1」「鸡蛋 4」
4   还放回吗    不是收口，放回没满 8，这一门没失败。走否则，回到拼页
5   拼页        又读 loop.txt。页顶仍是那一句。history.txt 里有上面两行
6   放回模型    放回次数 2
7   认名字      交出 shopping.add，参数是牛奶。跑了 doors/shopping.add。贴上「已写入：牛奶。」
8   还放回吗    走否则，回到拼页
9   拼页        又读 loop.txt。页顶仍是那一句
10  放回模型    放回次数 3
11  收口        「今晚牛奶 1 盒已列进清单，鸡蛋 4 盒够。」和 history 对得上
12  停          气泡交出去。不再放回
```

这十二行不是上限里的 8。8 数的是放回，这里第 3 次放回就收口。

这十二行的读者是你。它不贴进下一轮的页。模型下一轮看见的，仍是 `history.txt` 里的名字和观察。第二十篇写过：写错的那一行要留在历史里，下一步才会对着它打分。那一份是给模型看的。轨迹是给看图的人看的。`run` 写下「走否则」的时候，模型并不读这一行。

一行要对得上图，就得在 `run` 走进那个分支的时候写下。打开 `doors/` 里哪个文件，就在打开的那一刻写。决定停还是回到拼页，就在决定的那一刻写。读到的那一句原样留下。从 `diagram.txt` 把格子抄进 `trace.txt`，每一行都会在图上找到自己，可它没有记下这一次打开的文件。

### 它出现在这一次：三句都过，图还在；页顶改了图没改，图就不在

核对在停了之后做，不是第十七篇那四种停里新加的一种。气泡已经交出去。你拿 `trace.txt` 去对 `diagram.txt`，问三句。

每一行在图上有没有这一格。图上自己写的那一句，配上这一次的盒数，说会走进的格，轨迹里有没有。格子右边指着的文件，和这一行写下的文件，是不是同一个；格子里的那一句，和这一行读到的那一句，是不是同一句。

三句都过，图还在这一次上。「还在」说的是这三句，不是 `diagram.txt` 这个文件还躺在仓库里。上面十二行对得上。1、5、9 是拼页，读的是 `loop.txt`，页顶仍是「少于 2 才写入」，和图上那一格同一句。2、6、10 是放回，指着 `run`。3 和 7 是认名字，跑的是 `doors/` 里那两扇门，贴上的行就是图上「贴进 history.txt」的那一格。4 和 8 走的是「否则」。11 和 12 走的是收口和停。没有多出来的一行。牛奶是 1，图说会写进清单，轨迹里有 `shopping.add`。鸡蛋是 4，不写，轨迹里也没有给鸡蛋的写入。

现在只改页顶，图留着。`loop.txt` 换成「少于 1 才写入」。`diagram.txt` 仍写着「少于 2 才写入」，也仍画着牛奶会走进 `shopping.add`。今晚盒数还是 1 和 4。`run` 再走一圈，`trace.txt` 换成这八行：

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

第三句过不去。第 1 行读到的是「少于 1 才写入」，图上拼页那一格仍写着「少于 2 才写入」。格子里的句子不是这一次读到的句子。第二句也过不去。图自己仍写着少于 2，牛奶是 1，它说会走进 `shopping.add`。这八行里没有这一格。气泡可以很整齐：清单是空的，按新句子也确实不该写。整齐说明这一次的文件是这么判的。它不说明图还是这一次的图。

轨迹上也可以多一行。`doors/` 里放进 `shopping.checkout`，名单上写了它，这一次 `run` 真的跑了，轨迹就有「认名字 shopping.checkout」。图上没有这一格。上一篇写过：只在图上画，这一次不走。这一次走了、图上没有，图同样不是这一次的。

还有一种轨迹会让三句假装通过。`run` 不在走进分支时写，把 `diagram.txt` 的格子抄进 `trace.txt`。抄出来的行都找得到格，句子也一样，因为句子是从同一张图抄的。页顶已换成「少于 1」的那一次，这种文件对不出来，它没记下打开的文件。

### 一个常见误会

误会是：气泡和清单都对，图就还在；或者把 `diagram.txt` 扫一遍点过头，就算核对过了；或者 `history.txt` 就是轨迹；或者让模型回答「你是不是照这张图走的」，那句回答可以代替 `trace.txt`。

清单对，说的是这一次的文件按页顶做完了。图还在，说的是这些行能在图上找到，而且找到的是同一句、同一个文件。两件是两件。少于 1 的那一次，清单空着是对的，图仍是旧的。

眼睛扫图，读的是上一篇留下的那张画。画会过时，上一篇末尾写过。核对用的是这一次的 `trace.txt`。没有这一次的行，点头只盖在画上。

`history.txt` 里有「牛奶 1」和「已写入：牛奶。」。它没有「走否则」，也没有「这一次页顶读到的是哪一句」，除非你把这些也贴进去。贴进去，下一轮就会对着它打分。那是第五篇的材料，也是第十五篇那种要再贴回来才读得到的字。轨迹不参加下一次打分。读者不同，留下的行就不同。

模型看不见 `diagram.txt`。你问它照没照图走，它交出来的仍是下一段。第八篇写过：下一段不是观察。哪一个文件被打开，是 `run` 在打开的那一刻写进轨迹的。那一行才是这一次的观察。

今晚三句都过，只说明这一次的图还在。明天 `doors/` 里多了一扇门，要拿明天那一次的轨迹再问。留下三句就够这一篇用：轨迹是 `run` 按走过的顺序留下的行，每行有格子、文件和实际读到的那一句；拿这一次的行问那三句，三句都过，图才还在这一次上；气泡对、把图抄进轨迹、或让模型自己说，都不算这三句。下一篇再拆：对不上时，先改那一格指着的文件，再用新轨迹看它变没变。

## English

Part 29 starts where [part 28](/2026/11/08/diagram-you-can-edit/) stopped. The last part folded the loop into one diagram in the repository you can still edit, and stopped on one line: take this run's trace and check whether that diagram is still the one that ran. This part does that check.

The goal is the same, and so are the doors. `diagram.txt` from the last part is still in the repository, next to `loop.txt`. This part adds no new door. What it leaves is `trace.txt`, which `run` writes while it walks, and three questions you ask with that file.

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

An earlier Chinese piece, outside this series, wrote the loop from part 14 as assemble, decide, run, write back, and check whether to stop: [how an agent actually runs](/2026/10/09/ai-agent-execution/). That piece is not part 1. This part still starts from the fridge. The diagram is already there. The question is whether the cells this run entered are still the cells on that picture.

### A trace is the cells this run entered, one line each, with the file and the sentence

The diagram is the picture you can still open next week. The trace is the steps this run already finished. Each time `run` enters a cell, it appends one line to `trace.txt`. The line carries four things: which step, which cell, which file that cell touched, and the sentence this step actually read or pasted.

Milk is 1, eggs are 4, and the top of the page still says "write it only below 2." After this run stops, `trace.txt` is these twelve lines:

```text
trace.txt    run appends a line when it enters a cell. Do not copy diagram.txt.

1   assemble the page     read loop.txt. The top says "write it only below 2." history.txt is empty. The user's line came in with this call
2   put the model back    run puts the model at the end of the page. Put-back 1
3   recognize the name    handed over fridge.count. Ran doors/fridge.count. Pasted "milk 1" and "eggs 4"
4   put the model back again?    not a close, put-backs are under 8, this door did not fail. Took otherwise, back to assemble
5   assemble the page     read loop.txt again. The top is still that sentence. history.txt now has those two lines
6   put the model back    put-back 2
7   recognize the name    handed over shopping.add, argument milk. Ran doors/shopping.add. Pasted "written: milk."
8   put the model back again?    took otherwise, back to assemble
9   assemble the page     read loop.txt again. The top is still that sentence
10  put the model back    put-back 3
11  close                 "Tonight 1 carton of milk is on the list, and 4 cartons of eggs are enough." It matches history
12  stop                  hand over the bubble. Do not put the model back
```

These twelve lines are not the 8 in the step cap. The 8 counts put-backs. This run closed on put-back 3. Each line is a cell on the diagram. The put-back count sits on the "put the model back" line.

You are the reader of these twelve lines. They are not pasted onto the next page. What the model sees next round is still the names and observations in `history.txt`. Part 20 already said a wrong line has to stay in the history, or the next step has nothing there to score. That file is for the model. The trace is for the person looking at the diagram. When `run` writes "took otherwise," the model does not read that line.

A line can be checked against the diagram only if `run` wrote it while taking that branch. The file under `doors/` is recorded at the moment it is opened. The choice to stop or return to assemble is recorded at the moment it is made. The sentence that was read is kept as it was read. Copy the cells from `diagram.txt` into `trace.txt`, and every line will find itself on the picture, without a record of which file this run opened.

### Where it shows up: all three questions pass, and the diagram is still this run; change the top and leave the picture, and it is not

The check happens after this run has stopped. It is not a fifth stop added to the four in part 17. The loop has already stopped, and the bubble has already been handed over. You take `trace.txt` to `diagram.txt` and ask three questions.

Does each line have a cell on the picture? Given the sentence written on the picture and this run's counts, did the trace enter every cell the picture says this run would walk? Is the file the cell points at the file written on the line, and is the sentence in the cell the sentence the line recorded?

When all three pass, the diagram is still this run's. "Still" means those three questions. It does not mean the file `diagram.txt` is still sitting in the repository. The twelve lines above pass. Lines 1, 5, and 9 are assemble. They read `loop.txt`, the top is still "write it only below 2," and that is the sentence in the cell. Lines 2, 6, and 10 are put-backs, and they point at `run`. Lines 3 and 7 recognize a name, run the two doors under `doors/`, and the pasted lines are the cell that says "paste into history.txt." Lines 4 and 8 take otherwise. Lines 11 and 12 take the close and the stop. No extra line appears. Milk is 1, the picture says it gets written onto the list, and the trace has `shopping.add`. Eggs are 4, they are not written, and the trace has no write for eggs either.

Now change only the top of the page, and leave the picture. `loop.txt` becomes "write it only below 1." `diagram.txt` still says "write it only below 2," and it still draws milk walking into `shopping.add`. Tonight the counts are still 1 and 4. `run` walks once more, and `trace.txt` is these eight lines:

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

The third question fails. Line 1 read "write it only below 1." The assemble cell on the picture still says "write it only below 2." The sentence in the cell is not the sentence this run read. The second question fails too. The picture itself still says below 2, and milk is 1, so the picture says this run walks into `shopping.add`. These eight lines never enter that cell. The bubble can still look tidy: the list is empty, and under the new sentence it should be empty. Tidy means the files judged it that way this time. It does not mean the picture is still this run's picture.

Another mismatch is a line the picture never drew. Put `shopping.checkout` under `doors/`, write it on the list in `loop.txt`, and let `run` actually run it this time. The trace gains a line, "recognize the name shopping.checkout." The picture has no such cell. That line has nowhere to land. The last part already said a cell drawn only on the picture is a cell this run does not walk. A step this run did walk, with no cell on the picture, means the picture is not this run's either.

One kind of trace lets all three questions pretend to pass. `run` does not write at the branch it took. It copies the cells of `diagram.txt` into `trace.txt`. Every copied line finds a cell, and the sentences match, because the sentences came from the same picture. That file cannot catch the run whose top of the page already says "below 1." It never recorded which file was opened.

### The usual mix-up

The usual mix-up is to treat a correct bubble and a correct list as proof the diagram is still this run's; or to treat a nod after scanning `diagram.txt` as the check; or to treat `history.txt` as the trace; or to treat the model's answer to "did you follow this diagram?" as a stand-in for `trace.txt`.

A correct list means the files finished the job the top of the page described. The diagram still being this run's means the lines can be found on the picture, on the same sentence and the same file. Those are two separate claims. On the below-1 run, an empty list is the right outcome, and the picture is still the old one.

Scanning the picture reads the drawing the last part left behind. That drawing goes stale, which the last part already said at the end. The check uses this run's `trace.txt`. Without this run's lines, the nod lands on the drawing.

`history.txt` holds "milk 1" and "written: milk." It does not hold "took otherwise," and it does not hold which sentence the top of the page was this time, unless you paste those in too. Paste them in, and the next round scores against them. That is material of the kind in part 5, and it is the kind of wording from part 15 that a later round reads only after it is pasted back. The trace does not join the next scores. A different reader keeps different lines.

The model does not see `diagram.txt`. Ask whether it followed the picture, and what it hands back is still a next span. Part 8 already said a next span is not an observation. Which file was opened is written into the trace by `run` at the moment it opens the file. That line is this run's observation.

All three questions passing tonight says only that tonight's diagram is still this run's. If `doors/` has one more door tomorrow, tomorrow's trace is what you ask again. What this part hands off is short. A trace is the lines `run` kept in the order it walked, and each line has a cell, a file, and the sentence that was actually read. Ask this run's lines those three questions, and only when all three pass is the diagram still this run's. A tidy bubble, a trace copied from the picture, or the model saying so itself, is not those three questions. The next part splits what to do when they disagree: change the file that cell points at first, then use a new trace to see whether that cell changed.
