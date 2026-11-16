---
title: "半句只有一句，写的是这一行的牛奶走进不走进。牛奶改成不小于 3、鸡蛋仍少于 3 的那一圈，按牛奶会写成不走进，轨迹里却有参数是鸡蛋的写入，第二句不过。不过的时候，不把牛奶这句改成鸡蛋。把半句拆成两句：牛奶这句按这一行的牛奶留着或重写，鸡蛋这句按这一行的鸡蛋另写走进还是不走进，再拿这一圈问那三句"
description: "半句拆成牛奶和鸡蛋两句；牛奶不小于 3 而鸡蛋少于 3 时，不把牛奶这句改成鸡蛋，两句各按这一行留着或重写，再问这一圈。 When milk is not below 3 and the eggs still are, one sentence about the milk says this run does not walk in, but the trace has a write for the eggs; split that half-sentence into two, and do not turn the milk sentence into the eggs."
pubDate: 2026-11-16
slug: 2026/11/16/the-two-sentences
category: AI 系列
tags:
  - AI 系列
  - AI
draft: false
---

AI 系列第 37 篇。上一篇：[认名字那一行贴着牛奶和鸡蛋两个数，半句里的盒数抄这一行的牛奶，不抄同一行的鸡蛋；鸡蛋变了、牛奶和上一圈相同，半句留着；只有牛奶那个数不同，才按那一行的牛奶重写半句，再拿这一圈问那三句](/2026/11/15/the-milk-on-that-line/)。上一篇停在一句：半句里的盒数抄这一行的牛奶。这一篇做这半句还只有一句的时候，牛奶不走进、鸡蛋却写上的那一圈。

## 中文

还是那句目标，还是那几扇门。上一篇结束时，三句在那份八行上过了。`loop.txt` 的第一行仍是「少于 3 才写入」，图上目标也是这一句。半句只有一句，写的是这一行的牛奶走进不走进：牛奶是 5，不小于 3，这一次不走进 `shopping.add`。那一圈第 3 行贴的是「牛奶 5」「鸡蛋 4」。上一篇把一支留下了：牛奶改成 5，鸡蛋仍停在 1。图是后来那份八行改的，那一圈鸡蛋是 4。这一篇把鸡蛋放回 1，牛奶留在 5，走留下的那一支。不改第一行。不添新的门。

```text
[系统] 确认牛奶和鸡蛋的盒数。少于 2 盒的写进购物清单。
盒数请调用 fridge.count。写清单请调用 shopping.add。
不要编造盒数。步数上限 8。同一扇门同一组参数失败 3 次就停。
下单不在这份名单里。
[用户] 冰箱里牛奶和鸡蛋够不够？不够的列进清单。
[模型]
```

第十四篇那一圈，更早的中文单篇写成过组装、决定、执行、写回、检查是否停止：[AI 智能体的执行原理](/2026/10/09/ai-agent-execution/)。那一篇不算本系列的第一篇。这一篇仍从冰箱写起。开头那一块是原来的任务。拼上页的是 `loop.txt` 的第一行。贴上两个数的是 `doors/fridge.count`。要分开的是半句里那一句牛奶，和轨迹里参数是鸡蛋的那一次写入。

### 按牛奶写成不走进，第二句不过

今晚把 `cartons.txt` 的鸡蛋从 4 改回 1。牛奶仍是 5。第一行、名单、停都不动。`diagram.txt` 先留着。它还写着牛奶是 5、不走进 `shopping.add`。

`fridge.count` 仍去读 `cartons.txt`。`run` 走一圈。这一圈的 `trace.txt` 是这十二行：

```text
1   拼页      读 loop.txt 第一行「少于 3 才写入」。名单仍是 fridge.count，shopping.add。页上没有注
2   放回模型  放回次数 1
3   认名字    跑了 doors/fridge.count。贴上「牛奶 5」「鸡蛋 1」
4   还放回吗  走否则
5   拼页      第一行仍是「少于 3 才写入」。名单没变
6   放回模型  放回次数 2
7   认名字    交出 shopping.add，参数是鸡蛋。贴上「已写入：鸡蛋。」
8   还放回吗  走否则
9   拼页      第一行仍是「少于 3 才写入」。名单没变
10  放回模型  放回次数 3
11  收口      「牛奶 5 盒，不小于 3，不写。鸡蛋 1 盒已列进清单。」和 history 对得上
12  停        气泡交出去
```

上一圈第 3 行是「牛奶 5」「鸡蛋 4」，后面没有 `shopping.add`。这一圈第 3 行是「牛奶 5」「鸡蛋 1」。牛奶仍是 5。按牛奶，这一次写成不走进，和上一圈那句是同一句，所以留着。鸡蛋从 4 变成 1，第 7 行才有一次参数是鸡蛋的写入。放回多一次，是多走一扇门。第二十二篇那笔账上，多一扇门就多一次放回。多出来的那一次，不改牛奶这句抄哪一个数。

三句是第二十九篇那三句。问的是这十二行，图上还只有那一句牛奶。每一行都有格。拼页记下的仍是「少于 3 才写入」。图上说这一次不走进 `shopping.add`。第 7 行走进了。第二句不过。

不过的时候，不把牛奶这句改成鸡蛋。改成「鸡蛋是 1，少于 3，这一次走进 `shopping.add`」，句里的 1 不是第 3 行的牛奶。第 3 行的牛奶是 5。第三十六篇那一关还在：半句里的盒数是这一行的牛奶。1 不是 5。第二句仍不过。1 只解释第 7 行的参数。改成「牛奶是 1」也一样，盒数错了。

### 拆成两句，再问这十二行

牛奶这句按这一行的牛奶留着。牛奶仍是 5，和上一圈相同，不重写。鸡蛋这句按这一行的鸡蛋另写：鸡蛋是 1，少于 3，这一次走进 `shopping.add`。

```text
diagram.txt 里拼页那一格
旧：目标：少于 3 才写入。牛奶是 5，不小于 3，这一次不走进 shopping.add
新：目标：少于 3 才写入。牛奶是 5，不小于 3，这一次不走进 shopping.add。鸡蛋是 1，少于 3，这一次走进 shopping.add
右边仍是 loop.txt。名单仍是 fridge.count，shopping.add
```

「少于 3 才写入」不动。十二行不添到图上。`shopping.add` 仍是认名字那一格。第 7 行仍是认名字，不是新的门。两句都写在拼页那一格上，不另开一格。

再问这十二行。1、5、9 是拼页，2、6、10 是放回，3 和 7 是认名字，4 和 8 是否则，11 是收口，12 是停。都有。没有多出来的一行。

牛奶这句说不走进。轨迹里没有参数是牛奶的写入。鸡蛋这句说走进。第 7 行的参数是鸡蛋。这一句过了。

拼页指着 `loop.txt`，第 1 行记下的是「少于 3 才写入」。认名字先跑 `doors/fridge.count`，贴上「牛奶 5」「鸡蛋 1」，再跑 `doors/shopping.add`，参数是鸡蛋。这一句也过了。5 来自第 3 行的牛奶。1 来自同一行的鸡蛋。第三句比的是读到的那一句。两句对不对，看的是第二句。

三句都过。图追上了这一次。追上说的是这十二行。八行留着，只用来比：那边鸡蛋是 4，没有给鸡蛋的写入，半句还只有牛奶那一句。

### 牛奶不同，才重写牛奶这句

后一圈不接着十二行走。鸡蛋留在 1。这一次只改牛奶，从 5 改成 2。第一行不动。`run` 再走。这一圈的 `trace.txt` 是这十六行：

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

上一圈第 3 行的牛奶是 5，鸡蛋是 1。这一圈第 3 行的牛奶是 2，鸡蛋仍是 1。牛奶不同，牛奶这句才重写。鸡蛋相同，鸡蛋这句留着。不因为第 7 行多了一次参数是牛奶的写入，就把鸡蛋这句一起改掉。

```text
diagram.txt 里拼页那一格
旧：目标：少于 3 才写入。牛奶是 5，不小于 3，这一次不走进 shopping.add。鸡蛋是 1，少于 3，这一次走进 shopping.add
新：目标：少于 3 才写入。牛奶是 2，少于 3，这一次走进 shopping.add。鸡蛋是 1，少于 3，这一次走进 shopping.add
右边仍是 loop.txt。名单仍是 fridge.count，shopping.add
```

「少于 3 才写入」不动。十六行不添到图上。两扇写入仍是认名字那一格。第 7 行的参数是牛奶，对上牛奶这句。第 11 行的参数是鸡蛋，对上鸡蛋这句。

问的是这十六行。每一行都有格。两句说会走进的，轨迹里都有，参数也对。拼页记下的仍是「少于 3 才写入」。三句都过。追上说的是这十六行。十二行留着，只用来比：牛奶从 5 变成了 2，鸡蛋仍是 1。

牛奶这句若留着「不走进」，第 7 行有参数是牛奶的写入。第二句不过。把两句并成一句「这一次走进」，第 7 行和第 11 行都走进了，分不清是哪一个数。这一次碰巧都该走进。并成一句，就又回到只有一句。下一圈若只走进一次，第二句对不上是哪一句。

十六行还没有，你就把牛奶这句改成 2。后来若仍贴「牛奶 5」「鸡蛋 1」，图说牛奶走进，轨迹里没有参数是牛奶的写入。第二句不过。两句换成这一行的数之后，要问写下这一行的那一圈。

你看见有写入，把目标改成「少于 1」，或把两句改成收口那一句。第 1 行仍是「少于 3」。第三句不过。

鸡蛋改成不小于 3、牛奶仍是 2 的那一圈，这一篇先不走。鸡蛋这句若只写「这一次走进」，不写这一行的鸡蛋是几，那一句是从看见的写入抄来的。下一圈这一行的鸡蛋贴成不小于 3，轨迹里没有参数是鸡蛋的写入，第二句不过。那一支留给下一篇。

### 一个常见误会

误会是：第二句不过，就把牛奶这句改成鸡蛋；或者拆成两句之后，看见多了一次写入，两句一起改；或者为鸡蛋这句在图上添一扇门；或者问模型「要不要拆」。

半句原来只有一句，写的是这一行的牛奶走进不走进。牛奶不小于 3、鸡蛋仍少于 3，按牛奶会写成不走进，轨迹里却有参数是鸡蛋的写入。不过，也不把牛奶这句改成鸡蛋。拆成两句。牛奶这句按这一行的牛奶留着或重写。鸡蛋这句按这一行的鸡蛋另写走进还是不走进。再拿这一圈问那三句。十二行上的通过盖不住这十六行。

模型看不见 `diagram.txt`。你问它拆不拆，它交出来的仍是下一段。第八篇写过：下一段不是观察。算的是这一行贴上的牛奶，和同一行贴上的鸡蛋，各写一句。

留下三句就够这一篇用：半句只有一句，写的是这一行的牛奶走进不走进；牛奶改成不小于 3、鸡蛋仍少于 3 的那一圈，按牛奶会写成不走进，轨迹里却有参数是鸡蛋的写入，第二句不过；不过的时候，不把牛奶这句改成鸡蛋。把半句拆成两句：牛奶这句按这一行的牛奶留着或重写，鸡蛋这句按这一行的鸡蛋另写走进还是不走进，再拿这一圈问那三句。下一篇再拆：鸡蛋这句若只写「这一次走进」，不写这一行的鸡蛋是几，那一句是从看见的写入抄来的。下一圈这一行的鸡蛋贴成不小于 3，轨迹里没有参数是鸡蛋的写入，第二句不过。不过的时候，不把「走进」留着。鸡蛋这句里的盒数抄这一行的鸡蛋；这一行的鸡蛋和上一圈相同，鸡蛋这句留着；只有不同，才按那一行重写走进还是不走进。牛奶这句仍只看这一行的牛奶。两句各自留着或重写之后，再拿这一圈问那三句。

## English

Part 37 starts where [part 36](/2026/11/15/the-milk-on-that-line/) stopped. The last part stopped on one line: the count in the half-sentence is the milk on that pasted line. This part is about that half-sentence while it is still one sentence, on the walk where the milk does not walk in and the eggs still get written.

The goal is the same, and so are the doors. At the end of the last part, the three questions had passed on an eight-line trace. The first line of `loop.txt` was still "write it only below 3," and the goal on the picture said the same. The half-sentence was one sentence, and it only said whether this line's milk walks in: milk at 5 is not below 3, so this run does not walk into `shopping.add`. Line 3 of that walk pasted "milk 5" and "eggs 4." The last part left one branch unwalked: the milk changed to 5, and the eggs stayed at 1. The picture was updated later by those eight lines, where the eggs were 4. This part puts the eggs back to 1, leaves the milk at 5, and walks the branch that was left. It does not change the first line. It adds no new door.

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

An earlier Chinese piece, outside this series, wrote the loop from part 14 as assemble, decide, run, write back, and check whether to stop: [how an agent actually runs](/2026/10/09/ai-agent-execution/). That piece is not part 1. This part still starts from the fridge. The block above is the original task. What gets pasted onto the page is the first line of `loop.txt`. What pastes the two counts is `doors/fridge.count`. What has to be pulled apart is the one sentence about milk, and the write on the trace whose argument is eggs.

### Written from the milk, it says this run does not walk in, and the second question fails

Tonight the eggs in `cartons.txt` go from 4 back to 1. The milk stays at 5. The first line, the list, and the stops stay put. `diagram.txt` stays for now. It still says milk at 5 does not walk into `shopping.add`.

`fridge.count` still reads `cartons.txt`. `run` walks once. This walk's `trace.txt` is these twelve lines:

```text
1   assemble the page     read the first line of loop.txt, "write it only below 3." The list is still fridge.count, shopping.add. The note is not on the page
2   put the model back    put-back 1
3   recognize the name    ran doors/fridge.count. Pasted "milk 5" and "eggs 1"
4   put the model back again?    took otherwise
5   assemble the page     the first line is still "write it only below 3." The list did not change
6   put the model back    put-back 2
7   recognize the name    handed over shopping.add, argument eggs. Pasted "written: eggs."
8   put the model back again?    took otherwise
9   assemble the page     the first line is still "write it only below 3." The list did not change
10  put the model back    put-back 3
11  close                 "5 cartons of milk are not below 3, so milk is not written. 1 carton of eggs is on the list." It matches history
12  stop                  hand over the bubble
```

The previous line 3 was "milk 5" and "eggs 4," and `shopping.add` did not show up later. This line 3 is "milk 5" and "eggs 1." The milk is still 5. Written from the milk, this run does not walk in, which is the same sentence as the previous walk, so it stays. The eggs went from 4 to 1, which is why line 7 is a write whose argument is eggs. One more put-back is one more door. On the bill from part 22, one more door is one more put-back. That extra step does not change which number the milk sentence copies.

The three questions are the three from part 29. You ask them of these twelve lines while the picture still has only the milk sentence. Every line has a cell. Assemble still recorded "write it only below 3." The picture says this run does not walk into `shopping.add`. Line 7 does. The second question fails.

When it fails, you do not change the milk sentence into the eggs. Change it to "eggs at 1 are below 3, so this run walks into `shopping.add`," and the 1 in that sentence is not the milk on line 3. The milk on line 3 is 5. The check from part 36 is still in force: the count in the half-sentence is the milk on that line. One is not 5. The second question still fails. The 1 accounts for the argument on line 7. Change the sentence to "milk at 1," and the count is wrong in the same way.

### Where it shows up: split the half-sentence, then ask these twelve lines

The milk sentence stays, taken from the milk on this line. The milk is still 5, the same as the previous walk, so it is not rewritten. The eggs sentence is written separately from the eggs on this line: eggs at 1 are below 3, so this run walks into `shopping.add`.

```text
the assemble cell in diagram.txt
old: goal: write it only below 3. Milk at 5 is not below 3, so this run does not walk into shopping.add
new: goal: write it only below 3. Milk at 5 is not below 3, so this run does not walk into shopping.add. Eggs at 1 are below 3, so this run walks into shopping.add
the right side is still loop.txt. The list is still fridge.count, shopping.add
```

"Write it only below 3" stays. The twelve lines are not added to the picture. `shopping.add` stays the recognize-the-name cell. Line 7 is still recognize-the-name, not a new door. Both sentences sit on the assemble cell. They do not open a new cell.

Ask the twelve lines again. Lines 1, 5, and 9 are assemble. Lines 2, 6, and 10 put the model back. Lines 3 and 7 recognize a name. Lines 4 and 8 take otherwise. Line 11 closes. Line 12 stops. Each of those cells is on the picture. No extra line appears.

The milk sentence says this run does not walk in. The trace has no write whose argument is milk. The eggs sentence says this run walks in. The argument on line 7 is eggs. This question passes.

Assemble points at `loop.txt`, and line 1 recorded "write it only below 3." Recognizing the name ran `doors/fridge.count` and pasted "milk 5" and "eggs 1," then ran `doors/shopping.add` with the argument eggs. This question passes too. The 5 comes from the milk on line 3. The 1 comes from the eggs on the same line. The third question compares the sentence that was read. Whether the two sentences are right is the second question.

All three pass. The picture has caught up with this run. Caught up means these twelve lines. The eight lines stay, so you can see the other branch: there the eggs were 4, there was no write for eggs, and the half-sentence was still only the milk sentence.

### Only a different milk count rewrites the milk sentence

The next walk does not continue from the twelve lines. The eggs stay at 1. This time only the milk changes, from 5 to 2. The first line stays. `run` walks again. This walk's `trace.txt` is these sixteen lines:

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

On the previous line 3, the milk was 5 and the eggs were 1. On this line 3, the milk is 2 and the eggs are still 1. The milk differs, so the milk sentence is rewritten. The eggs match, so the eggs sentence stays. The extra write on line 7, whose argument is milk, is not a reason to rewrite the eggs sentence along with it.

```text
the assemble cell in diagram.txt
old: goal: write it only below 3. Milk at 5 is not below 3, so this run does not walk into shopping.add. Eggs at 1 are below 3, so this run walks into shopping.add
new: goal: write it only below 3. Milk at 2 is below 3, so this run walks into shopping.add. Eggs at 1 are below 3, so this run walks into shopping.add
the right side is still loop.txt. The list is still fridge.count, shopping.add
```

"Write it only below 3" stays. The sixteen lines are not added to the picture. Both writes stay the recognize-the-name cell. The argument on line 7 is milk, which matches the milk sentence. The argument on line 11 is eggs, which matches the eggs sentence.

You ask the three questions of these sixteen lines. Every line has a cell. Both sentences say this run walks in, and the trace has both writes, with the matching arguments. Assemble still recorded "write it only below 3." All three pass. Caught up means these sixteen lines. The twelve lines stay, so you can see that the milk went from 5 to 2 and the eggs stayed at 1.

Leave the milk sentence on "does not walk in," and line 7 has a write whose argument is milk. The second question fails. Fold the two sentences back into one sentence, "this run walks in," and both line 7 and line 11 walk in, with no way to say which count is which. On this walk both happen to be writes that should happen. One sentence puts you back where the half-sentence was only one sentence. On a later walk with only one write, the second question cannot say which sentence it belongs to.

Change the milk sentence to 2 before the sixteen lines exist. If the later walk still pastes "milk 5" and "eggs 1," the picture says the milk walks in, and the trace has no write whose argument is milk. The second question fails. After the two sentences are set from this line, you ask the walk that wrote the line down.

See that a write happened, and change the goal to "below 1," or replace the two sentences with the closing sentence. Line 1 is still "below 3." The third question fails.

This part does not walk the branch where the eggs become not below 3 and the milk stays at 2. If the eggs sentence says only "this run walks in," and does not say what this line's eggs are, that sentence was copied from a write you saw. On the next walk, the eggs on that line are pasted as not below 3, the trace has no write whose argument is eggs, and the second question fails. That branch is the next part.

### The usual mix-up

The usual mix-up is to treat a failed second question as a reason to change the milk sentence into the eggs; or, once the half-sentence is two sentences, to rewrite both because one more write showed up; or to add a door on the picture for the eggs sentence; or to ask the model whether to split.

The half-sentence started as one sentence, and it only said whether this line's milk walks in. On the walk where the milk is not below 3 and the eggs are still below 3, writing from the milk says this run does not walk in, while the trace has a write whose argument is eggs. When that fails, you do not change the milk sentence into the eggs. You split the half-sentence. The milk sentence stays or is rewritten from the milk on this line. The eggs sentence is written separately from the eggs on this line, saying whether this run walks in. Then you ask this walk the three questions. The pass on the twelve lines does not cover these sixteen.

The model does not see `diagram.txt`. Ask whether to split, and what it hands back is still a next span. Part 8 already said a next span is not an observation. What you count are the milk this line pasted and the eggs pasted on the same line, one sentence each.

What this part hands off is short. The half-sentence is one sentence, and it only says whether this line's milk walks in. On the walk where the milk is no longer below 3 and the eggs are still below 3, writing from the milk says this run does not walk in, while the trace has a write whose argument is eggs, and the second question fails. When it fails, you do not change the milk sentence into the eggs. You split the half-sentence into two. The milk sentence stays or is rewritten from the milk on this line. The eggs sentence is written separately from the eggs on this line, saying whether this run walks in. Then you ask this walk the three questions. The next part splits the eggs sentence that says only "this run walks in" and never says what this line's eggs are. That sentence was copied from a write you saw. On the next walk the eggs on that line are pasted as not below 3, the trace has no write whose argument is eggs, and the second question fails. When it fails, you do not keep "walks in." The count in the eggs sentence is copied from the eggs on this line. When those eggs match the previous walk, the eggs sentence stays. Only when they differ do you rewrite, from that line, whether this run walks in. The milk sentence still looks only at the milk on this line. After each sentence has stayed or been rewritten from this line, you ask this walk the three questions.
