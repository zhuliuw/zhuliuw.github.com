---
title: "鸡蛋这句若只写「这一次走进」，不写这一行的鸡蛋是几，那一句是从看见的写入抄来的。下一圈这一行的鸡蛋贴成不小于 3，轨迹里没有参数是鸡蛋的写入，第二句不过。不过的时候，不把「走进」留着。鸡蛋这句里的盒数抄这一行的鸡蛋；这一行的鸡蛋和上一圈相同，鸡蛋这句留着；只有不同，才按那一行重写走进还是不走进。牛奶这句仍只看这一行的牛奶。两句各自留着或重写之后，再拿这一圈问那三句"
description: "鸡蛋这句若只写「这一次走进」、不写盒数，那一句是从看见的写入抄来的；鸡蛋贴成不小于 3 时第二句不过，盒数要抄这一行的鸡蛋，和上一圈相同才留着。 If the eggs sentence says only that this run walks in, it was copied from a write; when the eggs are not below 3 and no eggs write appears, copy the count from that line, and leave the sentence only when the eggs match."
pubDate: 2026-11-17
slug: 2026/11/17/the-eggs-on-that-line
category: AI 系列
tags:
  - AI 系列
  - AI
draft: false
---

AI 系列第 38 篇。上一篇：[半句只有一句，写的是这一行的牛奶走进不走进。牛奶改成不小于 3、鸡蛋仍少于 3 的那一圈，按牛奶会写成不走进，轨迹里却有参数是鸡蛋的写入，第二句不过。不过的时候，不把牛奶这句改成鸡蛋。把半句拆成两句：牛奶这句按这一行的牛奶留着或重写，鸡蛋这句按这一行的鸡蛋另写走进还是不走进，再拿这一圈问那三句](/2026/11/16/the-two-sentences/)。上一篇停在两句。这一篇做鸡蛋这句若只写「这一次走进」、不写这一行的鸡蛋是几。

## 中文

还是那句目标，还是那几扇门。上一篇结束时，三句在那份十六行上过了。`loop.txt` 的第一行仍是「少于 3 才写入」，图上目标也是这一句。牛奶这句是「牛奶是 2，少于 3，这一次走进 `shopping.add`」。鸡蛋这句是「鸡蛋是 1，少于 3，这一次走进 `shopping.add`」。那一圈第 3 行贴的是「牛奶 2」「鸡蛋 1」，第 11 行的参数是鸡蛋。这一篇把鸡蛋这句收成「这一次走进」，不写鸡蛋是几。那一句是从看见的写入抄来的。不改第一行。不添新的门。牛奶这句仍只看这一行的牛奶。

```text
[系统] 确认牛奶和鸡蛋的盒数。少于 2 盒的写进购物清单。
盒数请调用 fridge.count。写清单请调用 shopping.add。
不要编造盒数。步数上限 8。同一扇门同一组参数失败 3 次就停。
下单不在这份名单里。
[用户] 冰箱里牛奶和鸡蛋够不够？不够的列进清单。
[模型]
```

第十四篇那一圈，更早的中文单篇写成过组装、决定、执行、写回、检查是否停止：[AI 智能体的执行原理](/2026/10/09/ai-agent-execution/)。那一篇不算本系列的第一篇。这一篇仍从冰箱写起。开头那一块是原来的任务。拼上页的是 `loop.txt` 的第一行。贴上两个数的是 `doors/fridge.count`。要分开的是鸡蛋这句里的盒数，和上一圈看见的那一次写入。

### 只写「走进」，下一圈第二句不过

今晚把 `cartons.txt` 的鸡蛋从 1 改成 4。牛奶仍是 2。第一行、名单、停都不动。`diagram.txt` 先留着那句没有盒数的鸡蛋。

`fridge.count` 仍去读 `cartons.txt`。`run` 走一圈。这一圈的 `trace.txt` 是这十二行：

```text
1   拼页      读 loop.txt 第一行「少于 3 才写入」。名单仍是 fridge.count，shopping.add。页上没有注
2   放回模型  放回次数 1
3   认名字    跑了 doors/fridge.count。贴上「牛奶 2」「鸡蛋 4」
4   还放回吗  走否则
5   拼页      第一行仍是「少于 3 才写入」。名单没变
6   放回模型  放回次数 2
7   认名字    交出 shopping.add，参数是牛奶。贴上「已写入：牛奶。」
8   还放回吗  走否则
9   拼页      第一行仍是「少于 3 才写入」。名单没变
10  放回模型  放回次数 3
11  收口      「牛奶 2 盒已列进清单。鸡蛋 4 盒，不小于 3，不写。」和 history 对得上
12  停        气泡交出去
```

上一圈第 3 行是「牛奶 2」「鸡蛋 1」，第 11 行参数是鸡蛋。这一圈第 3 行是「牛奶 2」「鸡蛋 4」。牛奶仍是 2，牛奶这句留着。鸡蛋从 1 变成 4，不小于 3。放回少一次，是少走一扇门。第二十二篇那笔账上，少一扇门就少一次放回。少的那一次不告诉你鸡蛋是几。4 在第 3 行。

三句是第二十九篇那三句。问的是这十二行。每一行都有格。拼页记下的仍是「少于 3 才写入」。牛奶这句说走进，第 7 行的参数是牛奶。鸡蛋这句只写「这一次走进」。它坐在鸡蛋那一句的位置上，说的是鸡蛋会走进。十二行里没有参数是鸡蛋的写入。第 7 行那一次已经归牛奶这句。第二句不过。

「走进」对得上的是上一圈第 11 行，不是这一行的 4。句里没有 4。4 不小于 3，这一次不该走进。

不过的时候，不把「走进」留着。改成「牛奶是 4」，第 3 行的牛奶是 2，第二句仍不过。只写成「不走进」、不写 4，句里仍没有这一行的鸡蛋。鸡蛋若仍是 1，「走进」会碰巧对上写入，盒数还是不在句里。

### 盒数抄这一行的鸡蛋，再问这十二行

鸡蛋这句里的盒数抄这一行的鸡蛋。鸡蛋是 4，不小于 3，这一次不走进 `shopping.add`。牛奶仍是 2，和上一圈相同，牛奶这句不重写。不因为第 7 行的参数是牛奶，就把鸡蛋这句改成牛奶。

```text
diagram.txt 里拼页那一格
旧：目标：少于 3 才写入。牛奶是 2，少于 3，这一次走进 shopping.add。这一次走进 shopping.add
新：目标：少于 3 才写入。牛奶是 2，少于 3，这一次走进 shopping.add。鸡蛋是 4，不小于 3，这一次不走进 shopping.add
右边仍是 loop.txt。名单仍是 fridge.count，shopping.add
```

「少于 3 才写入」不动。十二行不添到图上。`shopping.add` 仍是认名字那一格。第 7 行仍是认名字，不是新的门。两句都写在拼页那一格上。

再问这十二行。1、5、9 是拼页，2、6、10 是放回，3 和 7 是认名字，4 和 8 是否则，11 是收口，12 是停。都有。没有多出来的一行。

牛奶这句说走进。第 7 行的参数是牛奶。鸡蛋这句说不走进。轨迹里没有参数是鸡蛋的写入。这一句过了。

拼页指着 `loop.txt`，第 1 行记下的是「少于 3 才写入」。认名字先跑 `doors/fridge.count`，贴上「牛奶 2」「鸡蛋 4」，再跑 `doors/shopping.add`，参数是牛奶。这一句也过了。2 来自第 3 行的牛奶。4 来自同一行的鸡蛋。第三句比的是读到的那一句。两句对不对，看的是第二句。

三句都过。图追上了这一次。追上说的是这十二行。十六行留着，只用来比：那边鸡蛋是 1，有给鸡蛋的写入，鸡蛋这句还写着盒数。十二行还没有就写成 4，后来若仍贴「鸡蛋 1」，轨迹里有给鸡蛋的写入，第二句不过。

### 鸡蛋和上一圈相同，鸡蛋这句留着

后一圈不接着十二行走。鸡蛋留在 4。这一次只改牛奶，从 2 改成 5。第一行不动。`run` 再走。这一圈的 `trace.txt` 是这八行：

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

上一圈第 3 行的牛奶是 2，鸡蛋是 4。这一圈第 3 行的牛奶是 5，鸡蛋仍是 4。鸡蛋相同，鸡蛋这句留着。牛奶不同，牛奶这句才重写。不因为这一圈没有写入，就把鸡蛋这句一起改掉。没有写入，是两句都写了不走进才对得上。

```text
diagram.txt 里拼页那一格
旧：目标：少于 3 才写入。牛奶是 2，少于 3，这一次走进 shopping.add。鸡蛋是 4，不小于 3，这一次不走进 shopping.add
新：目标：少于 3 才写入。牛奶是 5，不小于 3，这一次不走进 shopping.add。鸡蛋是 4，不小于 3，这一次不走进 shopping.add
右边仍是 loop.txt。名单仍是 fridge.count，shopping.add
```

「少于 3 才写入」不动。八行不添到图上。这扇门仍是认名字那一格。这一次没走进，就写在两句里。不把这扇门从图上擦掉。

问的是这八行。1 和 5 是拼页，2 和 6 是放回，3 是认名字，4 是否则，7 是收口，8 是停。都有。没有多出来的一行。

两句都说不走进。八行里没有 `shopping.add`。拼页记下的仍是「少于 3 才写入」。5 来自第 3 行的牛奶。4 来自同一行的鸡蛋。三句都过。追上说的是这八行。十二行留着，只用来比：牛奶从 2 变成了 5，鸡蛋仍是 4。

鸡蛋这句若留着「走进」，八行里没有参数是鸡蛋的写入。第二句不过。把鸡蛋这句的盒数改成牛奶的 5，第 3 行的鸡蛋是 4。5 不是 4。第二句不过。

八行还没有，你就把牛奶这句改成 5。后来若仍贴「牛奶 2」「鸡蛋 4」，图说牛奶不走进，轨迹里却有参数是牛奶的写入。第二句不过。两句换成这一行的数之后，要问写下这一行的那一圈。

你看见没有给鸡蛋的写入，把目标改成「少于 4」。第 1 行仍是「少于 3」。第三句不过。

鸡蛋这句里「不小于 3」的 3，这一篇留着。3 是第一行，不是这一行的鸡蛋。牛奶仍是 5、鸡蛋从 4 改成 1 的那一圈，这一篇先不走。按这一行会写成「鸡蛋是 1，少于 3，这一次走进」。你若把门槛改成这一行的鸡蛋，写成「鸡蛋是 1，不小于 1，这一次不走进」，盒数对了，走进却反了。那一支留给下一篇。

### 一个常见误会

误会是：第二句不过，就把「走进」留着，因为牛奶那一次还写上了；或者把鸡蛋这句改成这一行的牛奶；或者鸡蛋和上一圈相同，看见写入少了，两句一起改；或者问模型「鸡蛋是几」。十二行上的通过盖不住这八行。

模型看不见 `diagram.txt`。你问它鸡蛋是几，它交出来的仍是下一段。第八篇写过：下一段不是观察。算的是这一行贴上的鸡蛋。牛奶贴在旁边，参加的是牛奶这句，不参加鸡蛋这句里的盒数。

留下三句就够这一篇用：鸡蛋这句若只写「这一次走进」，不写这一行的鸡蛋是几，那一句是从看见的写入抄来的；下一圈这一行的鸡蛋贴成不小于 3，轨迹里没有参数是鸡蛋的写入，第二句不过；不过的时候，不把「走进」留着。鸡蛋这句里的盒数抄这一行的鸡蛋；这一行的鸡蛋和上一圈相同，鸡蛋这句留着；只有不同，才按那一行重写走进还是不走进。牛奶这句仍只看这一行的牛奶。两句各自留着或重写之后，再拿这一圈问那三句。下一篇再拆：鸡蛋这句里「少于 3」或「不小于 3」那一截的 3，抄第一行，不抄这一行的鸡蛋。这一行的鸡蛋只提供盒数，并由此重写走进还是不走进。下一圈第一行仍是「少于 3」，鸡蛋从 4 改成 1，牛奶仍是 5。按这一行写成「鸡蛋是 1，少于 3，这一次走进」。你若把门槛改成这一行的鸡蛋，写成「鸡蛋是 1，不小于 1，这一次不走进」，盒数对了，走进却反了。轨迹里有参数是鸡蛋的写入，第二句不过。不过的时候，不改门槛那一截。牛奶这句的门槛也是第一行，盒数仍只看这一行的牛奶。两句各自留着或重写之后，再拿这一圈问那三句。

## English

Part 38 starts where [part 37](/2026/11/16/the-two-sentences/) stopped. The last part split the half-sentence into two: one sentence for the milk on that line, and one sentence for the eggs on that line. This part is about the eggs sentence when it says only "this run walks in" and never says what this line's eggs are.

The goal is the same, and so are the doors. At the end of the last part, the three questions had passed on a sixteen-line trace. The first line of `loop.txt` was still "write it only below 3," and the goal on the picture said the same. The milk sentence said milk at 2 is below 3, so this run walks into `shopping.add`. The eggs sentence said eggs at 1 are below 3, so this run walks into `shopping.add`. Line 3 of that walk pasted "milk 2" and "eggs 1," and the argument on line 11 was eggs. This part shortens the eggs sentence to "this run walks in," and leaves out what the eggs are. That sentence was copied from a write you saw. It does not change the first line. It adds no new door. The milk sentence still looks only at the milk on this line.

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

An earlier Chinese piece, outside this series, wrote the loop from part 14 as assemble, decide, run, write back, and check whether to stop: [how an agent actually runs](/2026/10/09/ai-agent-execution/). That piece is not part 1. This part still starts from the fridge. The block above is the original task. What gets pasted onto the page is the first line of `loop.txt`. What pastes the two counts is `doors/fridge.count`. What has to be pulled apart is the count inside the eggs sentence, and the write you saw on the previous walk.

### The sentence that only says "walks in" fails the second question on the next walk

Tonight the eggs in `cartons.txt` go from 1 to 4. The milk stays at 2. The first line, the list, and the stops stay put. `diagram.txt` keeps the eggs sentence that has no count.

`fridge.count` still reads `cartons.txt`. `run` walks once. This walk's `trace.txt` is these twelve lines:

```text
1   assemble the page     read the first line of loop.txt, "write it only below 3." The list is still fridge.count, shopping.add. The note is not on the page
2   put the model back    put-back 1
3   recognize the name    ran doors/fridge.count. Pasted "milk 2" and "eggs 4"
4   put the model back again?    took otherwise
5   assemble the page     the first line is still "write it only below 3." The list did not change
6   put the model back    put-back 2
7   recognize the name    handed over shopping.add, argument milk. Pasted "written: milk."
8   put the model back again?    took otherwise
9   assemble the page     the first line is still "write it only below 3." The list did not change
10  put the model back    put-back 3
11  close                 "2 cartons of milk are on the list. 4 cartons of eggs are not below 3, so eggs are not written." It matches history
12  stop                  hand over the bubble
```

The previous line 3 was "milk 2" and "eggs 1," and the argument on line 11 was eggs. This line 3 is "milk 2" and "eggs 4." The milk is still 2. The milk sentence is the same sentence as the previous walk, so it stays. The eggs went from 1 to 4, which is not below 3. One fewer put-back is one fewer door. On the bill from part 22, one fewer door is one fewer put-back. The missing step does not tell you what the eggs are. The 4 is on line 3.

The three questions are the three from part 29. You ask them of these twelve lines. Every line has a cell. Assemble still recorded "write it only below 3." The milk sentence says this run walks in, and the argument on line 7 is milk. The eggs sentence says only "this run walks in." It sits where the eggs sentence sits, so it says the eggs walk in. These twelve lines have no write whose argument is eggs. The write on line 7 already belongs to the milk sentence. The second question fails.

"Walks in" matches line 11 of the previous walk, not the 4 on this line. The sentence does not contain 4. Four is not below 3, so this run should not walk in.

When it fails, you do not keep "walks in." Change the sentence to "milk at 4," and the milk on line 3 is 2. Change it to "the eggs do not walk in this time" and still leave out 4, and the sentence still does not carry this line's eggs. If the eggs change again on a later walk, there is no count to match. Leave the eggs at 1, and the trace still has a write whose argument is eggs, so "walks in" happens to match. The count is still missing from the sentence. This part walks the one that pastes 4, and the second question fails first.

### Where it shows up: the count is copied from the eggs on this line, then you ask these twelve lines

The count in the eggs sentence is copied from the eggs on this line. Eggs at 4 are not below 3, so this run does not walk into `shopping.add`. The milk is still 2, the same as the previous walk, so the milk sentence is not rewritten. The argument on line 7 is milk, and that is not a reason to turn the eggs sentence into the milk.

```text
the assemble cell in diagram.txt
old: goal: write it only below 3. Milk at 2 is below 3, so this run walks into shopping.add. This run walks into shopping.add
new: goal: write it only below 3. Milk at 2 is below 3, so this run walks into shopping.add. Eggs at 4 are not below 3, so this run does not walk into shopping.add
the right side is still loop.txt. The list is still fridge.count, shopping.add
```

"Write it only below 3" stays. The twelve lines are not added to the picture. `shopping.add` stays the recognize-the-name cell. Line 7 is still recognize-the-name, not a new door. Both sentences sit on the assemble cell.

Ask the twelve lines again. Lines 1, 5, and 9 are assemble. Lines 2, 6, and 10 put the model back. Lines 3 and 7 recognize a name. Lines 4 and 8 take otherwise. Line 11 closes. Line 12 stops. Each of those cells is on the picture. No extra line appears.

The milk sentence says this run walks in. The argument on line 7 is milk. The eggs sentence says this run does not walk in. The trace has no write whose argument is eggs. This question passes.

Assemble points at `loop.txt`, and line 1 recorded "write it only below 3." Recognizing the name ran `doors/fridge.count` and pasted "milk 2" and "eggs 4," then ran `doors/shopping.add` with the argument milk. This question passes too. The 2 comes from the milk on line 3. The 4 comes from the eggs on the same line. The third question compares the sentence that was read. Whether the two sentences are right is the second question.

All three pass. The picture has caught up with this run. Caught up means these twelve lines. The sixteen lines stay, so you can see the other branch: there the eggs were 1, there was a write for eggs, and the eggs sentence still carried a count. Write 4 before the twelve lines exist, and a later walk that still pastes eggs at 1 has a write for eggs. The second question fails.

### When the eggs match the previous walk, the eggs sentence stays

The next walk does not continue from the twelve lines. The eggs stay at 4. This time only the milk changes, from 2 to 5. The first line stays. `run` walks again. This walk's `trace.txt` is these eight lines:

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

On the previous line 3, the milk was 2 and the eggs were 4. On this line 3, the milk is 5 and the eggs are still 4. The eggs match, so the eggs sentence stays. The milk differs, so the milk sentence is rewritten. The fact that this walk has no write is not a reason to rewrite the eggs sentence along with the milk. No write matches the picture only because both sentences say this run does not walk in.

```text
the assemble cell in diagram.txt
old: goal: write it only below 3. Milk at 2 is below 3, so this run walks into shopping.add. Eggs at 4 are not below 3, so this run does not walk into shopping.add
new: goal: write it only below 3. Milk at 5 is not below 3, so this run does not walk into shopping.add. Eggs at 4 are not below 3, so this run does not walk into shopping.add
the right side is still loop.txt. The list is still fridge.count, shopping.add
```

"Write it only below 3" stays. The eight lines are not added to the picture. The door stays the recognize-the-name cell. This run did not enter it, so both sentences say so. The door is not erased from the picture.

You ask the three questions of these eight lines. Lines 1 and 5 are assemble. Lines 2 and 6 put the model back. Line 3 recognizes a name. Line 4 takes otherwise. Line 7 closes. Line 8 stops. Each of those cells is on the picture. No extra line appears.

Both sentences say this run does not walk in. These eight lines have no `shopping.add`. Assemble still recorded "write it only below 3." The 5 comes from the milk on line 3. The 4 comes from the eggs on the same line. All three pass. Caught up means these eight lines. The twelve lines stay, so you can see that the milk went from 2 to 5 and the eggs stayed at 4.

Leave the eggs sentence on "walks in," and these eight lines have no write whose argument is eggs. The second question fails. Change the count in the eggs sentence to the milk's 5, and the eggs on line 3 are 4. Five is not 4. The second question fails.

Change the milk sentence to 5 before the eight lines exist. If a later walk still pastes "milk 2" and "eggs 4," the picture says the milk does not walk in, and the trace has a write whose argument is milk. The second question fails. After the two sentences are set from this line, you ask the walk that wrote the line down.

See that there is no write for eggs, and change the goal to "below 4." Line 1 is still "below 3." The third question fails.

This part leaves the 3 in "not below 3" where it is. That 3 is the first line, not the eggs on this line. This part does not walk the branch where the milk stays at 5 and the eggs go from 4 to 1. Written from that line, the eggs sentence would say eggs at 1 are below 3, so this run walks in. Change the threshold to this line's eggs, and write "eggs at 1 are not below 1, so this run does not walk in." The count is right. The walk is backwards. That branch is the next part.

### The usual mix-up

The usual mix-up is to keep "walks in" after the second question fails, because the milk was still written; or to change the eggs sentence into the milk on this line; or, when the eggs match the previous walk, to rewrite both sentences because one write disappeared; or to ask the model what the eggs are.

If the eggs sentence says only "this run walks in," and does not say what this line's eggs are, that sentence was copied from a write you saw. On the next walk the eggs on that line are pasted as not below 3, the trace has no write whose argument is eggs, and the second question fails. When it fails, you do not keep "walks in." The count in the eggs sentence is copied from the eggs on this line. When those eggs match the previous walk, the eggs sentence stays. Only when they differ do you rewrite, from that line, whether this run walks in. The milk sentence still looks only at the milk on this line. After each sentence has stayed or been rewritten, you ask this walk the three questions. The pass on the twelve lines does not cover these eight.

The model does not see `diagram.txt`. Ask what the eggs are, and what it hands back is still a next span. Part 8 already said a next span is not an observation. The number that belongs in the eggs sentence is the eggs this line pasted. The milk pasted beside it takes part in the milk sentence. It does not take part in the count inside the eggs sentence.

What this part hands off is short. If the eggs sentence says only "this run walks in" and never says what this line's eggs are, that sentence was copied from a write you saw. On the next walk the eggs on that line are pasted as not below 3, the trace has no write whose argument is eggs, and the second question fails. When it fails, you do not keep "walks in." The count in the eggs sentence is copied from the eggs on this line. When those eggs match the previous walk, the eggs sentence stays. Only when they differ do you rewrite, from that line, whether this run walks in. The milk sentence still looks only at the milk on this line. After each sentence has stayed or been rewritten, you ask this walk the three questions. The next part splits the 3 in "below 3" or "not below 3." That 3 is copied from the first line, not from the eggs on this line. The eggs on this line only supply the count, and the walk or not-walk is rewritten from that count. On the next walk the first line is still "below 3," the eggs go from 4 to 1, and the milk stays at 5. Written from that line, the sentence says eggs at 1 are below 3, so this run walks in. Change the threshold to this line's eggs, and write "eggs at 1 are not below 1, so this run does not walk in." The count is right. The walk is backwards. The trace has a write whose argument is eggs, and the second question fails. When it fails, you do not change that threshold. The milk sentence's threshold is the first line too, and its count still looks only at the milk on this line. After each sentence has stayed or been rewritten, you ask this walk the three questions.
