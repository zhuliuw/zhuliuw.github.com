---
title: "这一格指着的文件里，它读到的那一句才算改到；没读到的字，新轨迹里这一格仍是旧的"
description: "同一文件里，这一格拼上页、并写进新轨迹的那一句变了，才算改到；注被丢掉，这一格仍是旧的。 In the file a cell points at, only the sentence it pasted onto the page and wrote into the new trace counts; a dropped note leaves that cell on the old sentence."
pubDate: 2026-11-10T00:01:00.000Z
slug: 2026/11/10/the-sentence-that-cell-reads
category: AI 系列
tags:
  - AI 系列
  - AI
draft: false
---

AI 系列第 31 篇。上一篇：[对不上时，先改那一格指着的文件，再用新轨迹看它变没变](/2026/11/10/the-file-the-cell-points-at/)。上一篇改的是拼页右边那一个文件，并停在一句：这一格指着的文件里，它这一次读到的那一句才算改到；写在同一文件里、这一格没读到的字，新轨迹里的这一格仍是旧的。这一篇就看这一个文件里的哪一句。

## 中文

还是那句目标，还是那几扇门。上一篇把 `loop.txt` 的第一行改回「少于 2 才写入」，新轨迹里拼页那一行跟着变了。这一篇不添新的门，也不换文件。`loop.txt` 里可以有这一格读不到的字。那些字改了，新轨迹里拼页仍是旧的那一句。

```text
[系统] 确认牛奶和鸡蛋的盒数。少于 2 盒的写进购物清单。
盒数请调用 fridge.count。写清单请调用 shopping.add。
不要编造盒数。步数上限 8。同一扇门同一组参数失败 3 次就停。
下单不在这份名单里。
[用户] 冰箱里牛奶和鸡蛋够不够？不够的列进清单。
[模型]
```

第十四篇那一圈，更早的中文单篇写成过组装、决定、执行、写回、检查是否停止：[AI 智能体的执行原理](/2026/10/09/ai-agent-execution/)。那一篇不算本系列的第一篇。这一篇仍从冰箱写起。文件还是 `loop.txt`。要分开的是它里面被拼上页的那一句，和没被拼上页的字。

### 这一格读到的，是拼上页的那一句，不是文件里的每一行

`run` 拼页时打开 `loop.txt`，只把四行拼上页：第一行的目标，然后是名单、停、名单外的名字不跑。以「注：」开头的行直接丢掉，不进这一次的页，也不进 `history.txt`。轨迹里拼页那一行把第一行原样记下，并写明名单那一行还在不在。第一行才是这一格拿来对图的那一句。

上一篇结束时，第一行是「少于 2 才写入」，图上拼页也是这一句，十二行轨迹对得上。今晚把第一行放回「少于 1 才写入」，图先不动，仍写着「少于 2」。这又是对不上的那一格。你打开的仍是 `loop.txt`。这一次不改第一行，只在末尾加上一行注。文件变成这样：

```text
loop.txt
少于 1 才写入。
名单：fridge.count，shopping.add
停：完成 / 放回满 8 次 / 同一门同一组参数失败 3 次
名单外的名字不跑
注：拼页时丢掉这一行。其实少于 2 才写入。
```

保存时间会变，末尾也多了一行。参加拼页的四行没有动。第一行仍是「少于 1 才写入」。

### 它出现在这一次：注改了，新轨迹里这一格仍是旧句子

牛奶 1，鸡蛋 4。`cartons.txt` 不动。`run` 走一圈。拼出来的页是这四行，末尾那行注不在上面：

```text
少于 1 才写入。
名单：fridge.count，shopping.add
停：完成 / 放回满 8 次 / 同一门同一组参数失败 3 次
名单外的名字不跑
```

新的 `trace.txt` 是这八行：

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

拿上一篇那种对不上的八行来比，拼页记下的句子还是「少于 1 才写入」。文件变了，变的是被丢掉的那一行。这一格没有变。牛奶是 1，按页上这一句不写，轨迹里也没有 `shopping.add`。放回仍是两次。没有走进 `shopping.add`，就没有多出来的那一次放回。上一篇说过，放回次数变了，是页顶那一句带出来的。这一次次数没变，拼页那一行也没变，说的是同一件事：第一行还是旧的。图上仍写着少于 2、牛奶会写进清单。三句照旧过不去。过不去的原因是第一行，不是你少写了一行注。

把注写成更长的一段，也一样。你在注里写上盒数、写上「请调用 shopping.add」、写上步数上限，`run` 仍按开头丢掉。新轨迹的拼页行还是第一行那一句，后面仍写「页上没有注」。第五篇的材料是交到页上的那些字。注没交上去，这一次的打分碰不到它。模型若在收口里说「我按注，少于 2，牛奶该写上」，那一句和 `history.txt` 对不上：历史里没有「已写入：牛奶。」第八篇写过，下一段不是观察。第十七篇写过，没有那一行，`run` 不把收口当完成。

现在改它读到的那一句。注留在末尾，可以仍写「其实少于 2」，也可以删掉。第一行改成「少于 2 才写入」。名单和停不动。`run` 再走一圈。拼页那一行换成：

```text
1  拼页      读 loop.txt 第一行「少于 2 才写入」。名单仍是 fridge.count，shopping.add。页上没有注
5  拼页      第一行仍是「少于 2 才写入」。名单没变
7  认名字    交出 shopping.add，参数是牛奶。贴上「已写入：牛奶。」
```

中间的放回和认名字，和上一篇改完第一行之后的那一圈相同。新轨迹里这一格的句子从「少于 1」换成「少于 2」。这一格变了。注里若还写着另一句，页上没有它，轨迹也不记它。编辑器里能同时看见两句。这一格只读第一行。

同一文件里，名单那一行是拼得上页的。把 `shopping.add` 从名单里拿掉，第一行仍是「少于 2 才写入」，新轨迹的拼页行会写「名单里没有 shopping.add」。那也是这一格读到的一句，它变了，就该出现在这一行里。这一篇用第一行做那次改动，名单保持原样，就是为了让新旧两行只差在目标那一句上。注做不到这件事：它不会出现在这一行里，所以你无从用新轨迹证明它被读到。

### 一个常见误会

误会是：`loop.txt` 前后一比多出来一行，这一格就改到了；或者注和第一行在同一个文件里，模型就会两句一起看；或者把图上的句子改成注里的那句，再拿旧轨迹来问；或者第一行和注互相矛盾，就说这一格没有一个确定的句子。

前后一比，看的是磁盘上的文件。上一篇的证据是新轨迹里这一格的行。注那一次，文件多了一行，拼页的行和改注之前相同。文件动过，这一格没动。

同一文件不是同一句。格子右边的 `loop.txt` 告诉你打开哪一个。打开之后，还要找到 `run` 拼上页的那一行。注写在这个文件里，是给你看的，或者是你打算以后再启用的。它不是第十五篇那种写在窗口外、下一轮再贴回来的记忆。那种记忆贴回来才读得到。注是拼页时规定丢掉的，贴不回来，除非你去掉「注：」、让它变成参与拼页的一行。去掉之后，它就不再是注，新轨迹里应当出现这句新的字。那是另一次改动。

你若把注改成「少于 5 才写入」，再把图上那一格涂成这句，图和注一致了，第一行仍是「少于 1」。再走一圈，新轨迹记下的还是第一行。第二十九篇的第三句比的是格子里的句子和这一行读到的句子。注不在这一行里，不能拿来充这一句。

两句都留在文件里，并不让这一格悬着。`run` 丢掉注，页上只剩第一行。新轨迹写下的就是这一格的句子。你要改的是那一句，就改第一行，再用新的一圈看它变没变。

留下三句就够这一篇用：这一格指着一个文件，它读到的是 `run` 拼上页、并写进轨迹的那一句；同一文件里以「注：」丢掉的字，新轨迹里这一格仍是旧句子；第一行变了，新轨迹里这一格的句子才变。下一篇再拆：新轨迹里这一格的句子变了之后，把图上那一格改成新行里的那一句，再拿这份新轨迹问那三句。

## English

Part 31 starts where [part 30](/2026/11/10/the-file-the-cell-points-at/) stopped. The last part changed the one file to the right of assemble, and stopped on one line: inside the file that cell points at, only the sentence it read this time counts as the edit; wording in the same file that this cell did not read leaves that cell's line on the new trace unchanged. This part looks at which sentence that is, inside that one file.

The goal is the same, and so are the doors. The last part put the first line of `loop.txt` back to "write it only below 2," and the assemble line on the new trace moved with it. This part adds no new door, and it does not switch files. `loop.txt` can hold wording this cell never reads. Change that wording, and assemble on the new trace is still the old sentence.

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

An earlier Chinese piece, outside this series, wrote the loop from part 14 as assemble, decide, run, write back, and check whether to stop: [how an agent actually runs](/2026/10/09/ai-agent-execution/). That piece is not part 1. This part still starts from the fridge. The file is still `loop.txt`. What has to be pulled apart is the sentence from it that was pasted onto the page, and the wording that was not.

### What this cell reads is the sentence pasted onto the page, not every line in the file

When `run` assembles the page, it opens `loop.txt` and pastes four lines: the goal on the first line, then the list of names, the stops, and the line that says a name off the list does not run. A line that starts with "note:" is dropped. It does not enter this run's page, and it does not enter `history.txt`. The assemble line in the trace copies the first line as it stands, and it says whether the list line is still the same. The first line is the sentence this cell uses against the picture.

At the end of the last part, the first line was "write it only below 2," the assemble cell on the picture said the same, and the twelve-line trace matched. Tonight the first line goes back to "write it only below 1." The picture stays where it is, still saying "below 2." This is the cell that disagrees again. The file you open is still `loop.txt`. This time you do not change the first line. You only add a note at the end. The file looks like this:

```text
loop.txt
Write it only below 1.
List: fridge.count, shopping.add
Stops: done / 8 put-backs / the same door fails 3 times with the same arguments
A name off the list does not run
note: drop this line when assembling the page. Actually, write it only below 2.
```

The save time changes, and a diff can see that the line is new. The four lines that join the page did not move. The first line is still "write it only below 1."

### Where it shows up: the note changed, and this cell on the new trace is still the old sentence

Milk is 1, eggs are 4. `cartons.txt` stays put. `run` walks once. The page it assembles is these four lines. The note at the end is not on it:

```text
Write it only below 1.
List: fridge.count, shopping.add
Stops: done / 8 put-backs / the same door fails 3 times with the same arguments
A name off the list does not run
```

The new `trace.txt` is these eight lines:

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

Set this beside the eight-line mismatch from the last part, and the sentence assemble recorded is still "write it only below 1." The file changed. What changed is the line that was dropped. This cell did not change. Milk is 1, and under the sentence on the page it is not written, so the trace has no `shopping.add`. Put-backs stay at 2. Without walking into `shopping.add`, there is no extra put-back. The last part said a change in that count is brought along by the sentence at the top of the page. This time the count did not move, and the assemble line did not move. Both say the same thing: the first line is still the old one. The picture still says below 2, and that milk would be written onto the list. The three questions still fail. They fail because of the first line, not because you left a note unwritten.

A longer note does the same thing. Write the counts into the note, write "call shopping.add," write the step cap. `run` still drops it at the start of the line. The assemble line on the new trace is still the first line, and it still says the note is not on the page. The material from part 5 is the wording that was handed onto the page. The note was not handed over, so this run's scores never meet it. If the model closes with "I followed the note, below 2, milk should be written," that sentence does not match `history.txt`. The history has no "written: milk." Part 8 already said a next span is not an observation. Part 17 already said that without that line, `run` does not treat the close as done.

Now change the sentence it reads. Leave the note at the end. It can still say "actually below 2," or you can delete it. Change the first line to "write it only below 2." Leave the list and the stops alone. `run` walks once more. The assemble lines become:

```text
1  assemble the page     read the first line of loop.txt, "write it only below 2." The list is still fridge.count, shopping.add. The note is not on the page
5  assemble the page     the first line is still "write it only below 2." The list did not change
7  recognize the name    handed over shopping.add, argument milk. Pasted "written: milk."
```

The put-backs and the name in between are the same walk as the last part, after the first line had been changed. On the new trace, this cell's sentence goes from "below 1" to "below 2." This cell changed. If the note still says something else, it is not on the page, and the trace does not record it. An editor can show you both sentences at once. This cell reads the first line.

In the same file, the list line is pasted onto the page. Take `shopping.add` off the list, leave the first line as "write it only below 2," and the assemble line on the new trace will say "shopping.add is not on the list." That is also a sentence this cell reads. If it changed, it belongs on this line. This part uses the first line for the edit, and keeps the list as it was, so the old line and the new line differ only in the goal. A note cannot do that job. It never appears on this line, so a new trace cannot show that it was read.

### The usual mix-up

The usual mix-up is to treat one extra line in `loop.txt` as proof this cell was edited; or to treat the note and the first line as one text the model will read together because they share a file; or to change the sentence on the picture to the sentence in the note and then ask the old trace; or to treat a first line and a note that contradict each other as a cell with no settled sentence.

Setting the file next to its earlier copy looks at the disk. The evidence from the last part is this cell's line on the new trace. On the note's walk, the file has one added line, and the assemble line matches the line from before the note. The file moved. This cell did not.

The same file is not the same sentence. `loop.txt` on the right of the cell tells you which file to open. After you open it, you still have to find the line `run` pastes onto the page. A note in this file is for you, or for a later day when you mean to turn it on. It is not the out-of-window memory from part 15, the kind a later round reads only after it is pasted back. A note is dropped by rule while the page is assembled. It is not pasted back, unless you remove "note:" and let that line become one of the lines that join the page. Once you do that, it is no longer a note, and the new trace should show the new wording. That is a separate edit.

Change the note to "write it only below 5," and paint that sentence onto the cell in the picture. The picture and the note agree. The first line is still "below 1." Walk once more, and what the new trace records is still the first line. The third question in part 29 compares the sentence in the cell with the sentence this line read. The note is not on this line. It cannot stand in for that sentence.

Leaving both sentences in the file does not leave this cell hanging. `run` drops the note. The page has the first line. What the new trace writes down is this cell's sentence. When that is the sentence you want to change, change the first line, then use a new walk to see whether it moved.

What this part hands off is short. A cell points at a file, and what it reads is the sentence `run` pasted onto the page and wrote into the trace. Wording in the same file that is dropped because it starts with "note:" leaves this cell on the old sentence in the new trace. When the first line changes, this cell's sentence on the new trace changes. The next part splits what to do once that has happened: after this cell's sentence has changed on the new trace, change that cell on the picture to the sentence in the new line, then ask the three questions of this new trace.
