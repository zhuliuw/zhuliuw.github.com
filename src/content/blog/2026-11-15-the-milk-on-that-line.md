---
title: "认名字那一行贴着牛奶和鸡蛋两个数，半句里的盒数抄这一行的牛奶，不抄同一行的鸡蛋；鸡蛋变了、牛奶和上一圈相同，半句留着；只有牛奶那个数不同，才按那一行的牛奶重写半句，再拿这一圈问那三句"
description: "半句里的盒数抄认名字那一行的牛奶，不抄同一行的鸡蛋；鸡蛋变了而牛奶相同就留着，只有牛奶不同才按它重写，再问这一圈。 The half-sentence copies the milk on that pasted line, not the eggs beside it; when the eggs change and the milk matches, it stays, and only a different milk count is rewritten from that line before you ask this walk."
pubDate: 2026-11-15
slug: 2026/11/15/the-milk-on-that-line
category: AI 系列
tags:
  - AI 系列
  - AI
draft: false
---

AI 系列第 36 篇。上一篇：[「会走进哪一格」那半句里的盒数，抄这一圈认名字贴上的那一行，不抄你写进 cartons.txt、这一圈还没贴上的那个数；那一行还没写下，半句留着；贴上的数和上一圈不同，才按那一行重写半句，再拿这一圈问那三句](/2026/11/14/the-count-that-line-pasted/)。上一篇停在一句：盒数抄贴上的那一行。这一篇做这一行上的两个数，抄哪一个。

## 中文

还是那句目标，还是那几扇门。上一篇结束时，三句在那份十二行上过了。`loop.txt` 的第一行仍是「少于 3 才写入」，图上目标也是这一句。半句写着牛奶是 2、这一次走进 `shopping.add`。那一圈第 3 行贴的是「牛奶 2」「鸡蛋 4」。这一篇不改第一行。不添新的门。半句里的盒数，抄这一行的牛奶，不抄同一行的鸡蛋。

```text
[系统] 确认牛奶和鸡蛋的盒数。少于 2 盒的写进购物清单。
盒数请调用 fridge.count。写清单请调用 shopping.add。
不要编造盒数。步数上限 8。同一扇门同一组参数失败 3 次就停。
下单不在这份名单里。
[用户] 冰箱里牛奶和鸡蛋够不够？不够的列进清单。
[模型]
```

第十四篇那一圈，更早的中文单篇写成过组装、决定、执行、写回、检查是否停止：[AI 智能体的执行原理](/2026/10/09/ai-agent-execution/)。那一篇不算本系列的第一篇。这一篇仍从冰箱写起。开头那一块是原来的任务。拼上页的是 `loop.txt` 的第一行。贴上两个数的是 `doors/fridge.count`。要分开的是同一行里的牛奶，和同一行里的鸡蛋。

### 鸡蛋变了、牛奶和上一圈相同，半句留着

今晚把 `cartons.txt` 的鸡蛋从 4 改成 1。牛奶仍是 2。第一行、名单、停都不动。`diagram.txt` 先留着。它还写着牛奶是 2、走进 `shopping.add`。

`fridge.count` 仍去读 `cartons.txt`。`run` 走一圈。这一圈的 `trace.txt` 是这十六行：

```text
1   拼页      读 loop.txt 第一行「少于 3 才写入」。名单仍是 fridge.count，shopping.add。页上没有注
2   放回模型  放回次数 1
3   认名字    跑了 doors/fridge.count。贴上「牛奶 2」「鸡蛋 1」
4   还放回吗  走否则
5   拼页      第一行仍是「少于 3 才写入」。名单没变
6   放回模型  放回次数 2
7   认名字    交出 shopping.add，参数是牛奶。贴上「已写入：牛奶。」
8   还放回吗  走否则
9   拼页      第一行仍是「少于 3 才写入」。名单没变
10  放回模型  放回次数 3
11  认名字    交出 shopping.add，参数是鸡蛋。贴上「已写入：鸡蛋。」
12  还放回吗  走否则
13  拼页      第一行仍是「少于 3 才写入」。名单没变
14  放回模型  放回次数 4
15  收口      「今晚牛奶 2 盒、鸡蛋 1 盒都已列进清单。」和 history 对得上
16  停        气泡交出去
```

上一圈第 3 行是「牛奶 2」「鸡蛋 4」。这一圈是「牛奶 2」「鸡蛋 1」。牛奶仍是 2。鸡蛋从 4 变成 1，第 11 行才多了一次参数是鸡蛋的 `shopping.add`。放回多一次，是多走一扇门。第二十二篇那笔账上，多一扇门就多一次放回。多出来的那一次，不改半句抄哪一个数。牛奶没变，半句留着，不把 1 写进去。

```text
diagram.txt 里拼页那一格
仍是：目标：少于 3 才写入。牛奶是 2，少于 3，这一次走进 shopping.add
右边仍是 loop.txt。名单仍是 fridge.count，shopping.add
```

「少于 3 才写入」不动。十六行不添到图上。`shopping.add` 仍是认名字那一格。第 11 行仍是认名字，不是新的门。牛奶这一次走进了，半句里本来就写着走进。鸡蛋那一次也走进了，参数写在第 11 行，不写进这半句。

第三十五篇写过：盒数抄贴上的那一行。这一篇把那一行拆开。行已经写下，还要看抄的是这一行的牛奶，还是同一行的鸡蛋。

三句是第二十九篇那三句。问的是这十六行。每一行都有格。图上牛奶是 2，走进 `shopping.add`，第 7 行有。拼页记下的仍是「少于 3 才写入」。半句里的 2 来自第 3 行的牛奶，不是同一行的 1。三句都过。追上说的是这十六行。十二行留着，只用来比：牛奶仍是 2，鸡蛋从 4 变成了 1。

你看见鸡蛋变成 1，把半句改成「牛奶是 1」。走进对了，盒数错了。第 3 行的牛奶是 2。第二句过不去。1 解释第 11 行的参数，不替换半句里的牛奶。十六行还没有就改成 1，后来若仍贴「牛奶 2」「鸡蛋 4」，轨迹里的牛奶是 2，也没有给鸡蛋的写入。第二句过不去。牛奶和上一圈相同，半句留着。

### 只有牛奶那个数不同，才按那一行的牛奶重写，再问这八行

后一圈不接着十六行走。鸡蛋放回 4，回到上一篇那一行的鸡蛋。这一次只改牛奶，从 2 改成 5。第一行不动。`run` 再走。这一圈的 `trace.txt` 是这八行：

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

上一圈第 3 行的牛奶是 2，鸡蛋是 4。这一圈第 3 行的牛奶是 5，鸡蛋仍是 4。同一行还是两个数。只有牛奶那个数不同。现在才改半句。从第 3 行的牛奶抄。不从同一行的鸡蛋抄。5 不小于 3，这一次不走进 `shopping.add`。鸡蛋是 4，本来也不写。写成「鸡蛋是 4，不走进」，门碰巧没走进，抄的却是另一个数。第 3 行的牛奶是 5。半句里的盒数要和这个 5 是同一个。

```text
diagram.txt 里拼页那一格
旧：目标：少于 3 才写入。牛奶是 2，少于 3，这一次走进 shopping.add
新：目标：少于 3 才写入。牛奶是 5，不小于 3，这一次不走进 shopping.add
右边仍是 loop.txt。名单仍是 fridge.count，shopping.add
```

「少于 3 才写入」不动。八行不添到图上。这扇门仍是认名字那一格。这一次没走进，就写在半句里。不把这扇门从图上擦掉。

问的是这八行。1 和 5 是拼页，2 和 6 是放回，3 是认名字，4 是否则，7 是收口，8 是停。都有。没有多出来的一行。

图上现在是「少于 3 才写入」，牛奶是 5，不走进 `shopping.add`。这八行里没有这一格。鸡蛋是 4，轨迹里没有给鸡蛋的写入。这一句过了。

拼页指着 `loop.txt`，第 1 行记下的是「少于 3 才写入」。认名字跑的是 `doors/fridge.count`，贴上的是「牛奶 5」「鸡蛋 4」。这一句也过了。半句里的 5 来自第 3 行的牛奶，不是同一行的 4。第三句比的是读到的那一句。半句对不对，看的是第二句。

三句都过。图追上了这一次。追上说的是这八行。十二行留着，只用来比：牛奶从 2 变成了 5，鸡蛋仍是 4。十六行也留着，只用来比另一支：那边鸡蛋变了，牛奶没变，半句没有改。

鸡蛋若从 4 改成 6，牛奶仍是 5。半句留着牛奶是 5、不走进。你若改成「鸡蛋是 6」，第 3 行的牛奶是 5。第二句过不去。八行还没有就改成牛奶 5，后来若仍贴「牛奶 2」，图说不走进，轨迹里有 `shopping.add`。第二句过不去。八行已经贴上「牛奶 5」，你却拿十二行来问，十二行的牛奶是 2，走进了。第二句也过不去。半句换成这一行的牛奶之后，要问写下这一行的那一圈。

你看见没有 `shopping.add`，把目标改成「少于 5」，或把盒数抄成收口里的 4、或同一行的鸡蛋 4。第 1 行仍是「少于 3」，第三句过不去。盒数仍该是第 3 行的牛奶 5，抄成 4，第二句也不过。

牛奶改成 5、鸡蛋仍停在 1 的那一圈，这一篇先不走。按牛奶会写成不走进，轨迹里却有鸡蛋那一次写入。第二句不过。不过，也不改去抄 1。那一支留给下一篇。

### 一个常见误会

误会是：同一行里随便哪个数变了，半句都要重写；或者鸡蛋少于 3，就把半句里的盒数改成鸡蛋，不管牛奶是不是还和上一圈相同；或者两个数都贴上了，就把整行抄进 `diagram.txt`；或者问模型「该抄牛奶还是鸡蛋」。

同一行有两个数。半句里的盒数是牛奶那个。鸡蛋变了、牛奶和上一圈相同，半句留着。只有牛奶不同，才按那一行的牛奶重写，再拿这一圈问那三句。十六行上的通过盖不住这八行。把两个数都写进半句，句子就从这一行轨迹抄来的。这一篇目标不动。放回、认名字、停留着，右边的文件名也不换。变的只有半句里的牛奶，而且要等它和上一圈不同。

模型看不见 `diagram.txt`。你问它抄哪一个，它交出来的仍是下一段。第八篇写过：下一段不是观察。算的是这一行贴上的牛奶。鸡蛋贴在旁边，参加的是有没有另一行写入，不参加这半句里的盒数。

留下三句就够这一篇用：认名字那一行贴着牛奶和鸡蛋两个数，半句里的盒数抄这一行的牛奶，不抄同一行的鸡蛋；鸡蛋变了、牛奶和上一圈相同，半句留着；只有牛奶那个数不同，才按那一行的牛奶重写半句，再拿这一圈问那三句。下一篇再拆：半句只有一句，写的是这一行的牛奶走进不走进。牛奶改成不小于 3、鸡蛋仍少于 3 的那一圈，按牛奶会写成不走进，轨迹里却有参数是鸡蛋的写入，第二句不过。不过的时候，不把牛奶这句改成鸡蛋。把半句拆成两句：牛奶这句按这一行的牛奶留着或重写，鸡蛋这句按这一行的鸡蛋另写走进还是不走进，再拿这一圈问那三句。

## English

Part 36 starts where [part 35](/2026/11/14/the-count-that-line-pasted/) stopped. The last part stopped on one line: the count in the half-sentence is copied from the line this walk pasted. This part is about the two numbers on that line, and which one is copied.

The goal is the same, and so are the doors. At the end of the last part, the three questions had passed on a twelve-line trace. The first line of `loop.txt` was still "write it only below 3," and the goal on the picture said the same. The half-sentence said milk at 2 walks into `shopping.add` on that run. Line 3 of that walk pasted "milk 2" and "eggs 4." This part does not change the first line. It adds no new door. The count inside the half-sentence is the milk on that line, not the eggs on the same line.

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

An earlier Chinese piece, outside this series, wrote the loop from part 14 as assemble, decide, run, write back, and check whether to stop: [how an agent actually runs](/2026/10/09/ai-agent-execution/). That piece is not part 1. This part still starts from the fridge. The block above is the original task. What gets pasted onto the page is the first line of `loop.txt`. What pastes the two counts is `doors/fridge.count`. What has to be pulled apart is the milk on that line, and the eggs on the same line.

### When the eggs change and the milk matches the previous walk, the half-sentence stays

Tonight the eggs in `cartons.txt` change from 4 to 1. The milk stays at 2. The first line, the list, and the stops stay put. `diagram.txt` stays for now. It still says milk at 2 walks into `shopping.add`.

`fridge.count` still reads `cartons.txt`. `run` walks once. This walk's `trace.txt` is these sixteen lines:

```text
1   assemble the page     read the first line of loop.txt, "write it only below 3." The list is still fridge.count, shopping.add. The note is not on the page
2   put the model back    put-back 1
3   recognize the name    ran doors/fridge.count. Pasted "milk 2" and "eggs 1"
4   put the model back again?    took otherwise
5   assemble the page     the first line is still "write it only below 3." The list did not change
6   put the model back    put-back 2
7   recognize the name    handed over shopping.add, argument milk. Pasted "written: milk."
8   put the model back again?    took otherwise
9   assemble the page     the first line is still "write it only below 3." The list did not change
10  put the model back    put-back 3
11  recognize the name    handed over shopping.add, argument eggs. Pasted "written: eggs."
12  put the model back again?    took otherwise
13  assemble the page     the first line is still "write it only below 3." The list did not change
14  put the model back    put-back 4
15  close                 "Tonight 2 cartons of milk and 1 carton of eggs are both on the list." It matches history
16  stop                  hand over the bubble
```

The previous line 3 was "milk 2" and "eggs 4." This line 3 is "milk 2" and "eggs 1." The milk is still 2. The eggs went from 4 to 1, which is why line 11 is an extra `shopping.add` whose argument is eggs. One more put-back is one more door. On the bill from part 22, one more door is one more put-back. That extra step does not change which number the half-sentence copies. The milk did not change, so the half-sentence stays, and the 1 is not written into it.

```text
the assemble cell in diagram.txt
stays: goal: write it only below 3. Milk at 2 is below 3, so this run walks into shopping.add
the right side is still loop.txt. The list is still fridge.count, shopping.add
```

"Write it only below 3" stays. The sixteen lines are not added to the picture. `shopping.add` stays the recognize-the-name cell. This run did walk in for the milk, and the half-sentence already said so. It also walked in for the eggs. That argument sits on line 11, which is still recognize-the-name, not a new door. It does not sit in this half-sentence.

Part 35 already said the count is copied from the pasted line. This part splits that line. Once the line is written, you still have to see whether the copy is the milk on it, or the eggs on the same line.

The three questions are the three from part 29. You ask them of these sixteen lines. Every line has a cell. The picture says milk at 2 walks into `shopping.add`, and line 7 does. Assemble still recorded "write it only below 3." The 2 in the half-sentence comes from the milk on line 3, not from the 1 on the same line. All three pass. Caught up means these sixteen lines. The twelve lines stay, so you can see that the milk is still 2 and the eggs went from 4 to 1.

See that the eggs became 1, and change the half-sentence to "milk at 1." The door is right. The count is wrong. The milk on line 3 is 2. The second question fails. The 1 accounts for the argument on line 11. It does not replace the milk in the half-sentence. Change it to 1 before the sixteen lines exist, and a later walk that still pastes "milk 2" and "eggs 4" has milk at 2 on the trace, and no write for eggs. The second question fails. When the milk matches the previous walk, the half-sentence stays.

### Where it shows up: only a different milk count is rewritten from that line, then you ask these eight lines

The next walk does not continue from the sixteen lines. The eggs go back to 4, the eggs on the line from the last part. This time only the milk changes, from 2 to 5. The first line stays. `run` walks again. This walk's `trace.txt` is these eight lines:

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

On the previous line 3, the milk was 2 and the eggs were 4. On this line 3, the milk is 5 and the eggs are still 4. The same line still holds two numbers. Only the milk count differs. Now the half-sentence changes. You copy it from the milk on line 3. You do not copy it from the eggs on the same line. Five is not below 3, so this run does not walk into `shopping.add`. Eggs are 4, so they would not be written anyway. Write "eggs at 4, so this run does not walk in," and the door happens to be right while the number is the other one. The milk on line 3 is 5. The count in the half-sentence has to be that same 5.

```text
the assemble cell in diagram.txt
old: goal: write it only below 3. Milk at 2 is below 3, so this run walks into shopping.add
new: goal: write it only below 3. Milk at 5 is not below 3, so this run does not walk into shopping.add
the right side is still loop.txt. The list is still fridge.count, shopping.add
```

"Write it only below 3" stays. The eight lines are not added to the picture. The door stays the recognize-the-name cell. This run did not enter it, so the half-sentence says so. The door is not erased from the picture.

You ask the three questions of these eight lines. Lines 1 and 5 are assemble. Lines 2 and 6 put the model back. Line 3 recognizes a name. Line 4 takes otherwise. Line 7 closes. Line 8 stops. Each of those cells is on the picture. No extra line appears.

The picture now says "write it only below 3," and milk at 5 does not walk into `shopping.add`. These eight lines do not enter that cell. Eggs are 4, and the trace has no write for eggs. This question passes.

Assemble points at `loop.txt`, and line 1 recorded "write it only below 3." Recognizing the name ran `doors/fridge.count` and pasted "milk 5" and "eggs 4." This question passes too. The 5 in the half-sentence comes from the milk on line 3, not from the 4 on the same line. The third question compares the sentence that was read. Whether the half-sentence is right is the second question.

All three pass. The picture has caught up with this run. Caught up means these eight lines. The twelve lines stay, so you can see that the milk went from 2 to 5 and the eggs stayed at 4. The sixteen lines stay too, so you can see the other branch: there the eggs changed, the milk did not, and the half-sentence was left alone.

Change the eggs from 4 to 6, and leave the milk at 5. The half-sentence stays on milk at 5, and on not walking in. Change it to "eggs at 6," and the milk on line 3 is 5. The second question fails. Change the half-sentence to milk at 5 before the eight lines exist, and a later walk that still pastes "milk 2" does walk into `shopping.add`. The second question fails. The eight lines have already pasted "milk 5," and you ask the twelve lines instead. Those lines pasted milk at 2, and they do walk in. The second question fails again. After the half-sentence is set from the milk on this line, you ask the walk that wrote the line down.

See that `shopping.add` is missing, and change the goal to "below 5," or copy 4 from the close, or copy the eggs at 4 on the same line. Line 1 is still "below 3," so the third question fails. The count is still the milk at 5 on line 3, so copying 4 fails the second question too.

This part does not walk the branch where the milk becomes 5 and the eggs stay at 1. Copied from the milk, the half-sentence would say this run does not walk in. The eggs are 1, so the trace still has a write whose argument is eggs. The second question fails. Failing is not a reason to change the half-sentence over to 1. That branch is the next part.

### The usual mix-up

The usual mix-up is to treat either number on the line as a reason to rewrite the half-sentence; or to treat eggs below 3 as a reason to put the eggs into the half-sentence while the milk still matches the previous walk; or to treat two pasted numbers as a reason to copy the whole line into `diagram.txt`; or to ask the model whether to copy the milk or the eggs.

The same line holds two numbers. The count in the half-sentence is the milk. When the eggs change and the milk matches the previous walk, the half-sentence stays. Only when the milk differs do you rewrite the half-sentence from the milk on that line, and then ask this walk the three questions. The pass on the sixteen lines does not cover these eight. Copy both numbers into the half-sentence, and the sentence came off this line of the trace. This part leaves the goal where it is. The cells for putting the model back, recognizing a name, and stopping stay, and the file names on their right stay. The only change is the milk in the half-sentence, and it waits until that count differs from the previous walk.

The model does not see `diagram.txt`. Ask which number to copy, and what it hands back is still a next span. Part 8 already said a next span is not an observation. The number that belongs in the half-sentence is the milk this line pasted. The eggs pasted beside it take part in whether another write shows up. They do not take part in the count inside this half-sentence.

What this part hands off is short. The recognize-the-name line pastes two counts, milk and eggs. The count in the half-sentence is the milk on that line, not the eggs on the same line. When the eggs change and the milk matches the previous walk, the half-sentence stays. Only when that milk count differs do you rewrite the half-sentence from the milk on that line, and then ask this walk the three questions. The next part splits the half-sentence, which is still one sentence and only says whether this line's milk walks in. On the walk where the milk is no longer below 3 and the eggs are still below 3, copying the milk would say this run does not walk in, while the trace still has a write whose argument is eggs, and the second question fails. When it fails, you do not change the milk sentence over to the eggs. You split the half-sentence into two: the milk sentence stays or is rewritten from the milk on that line, and the eggs sentence is written separately from the eggs on that line, saying whether this run walks in, and then you ask this walk the three questions.
