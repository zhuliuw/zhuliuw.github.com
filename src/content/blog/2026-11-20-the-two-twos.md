---
title: "牛奶这句里两个 2 是同一个数字，盒数那个 2 抄这一行的牛奶，门槛那个 2 抄第一行。下一圈只改牛奶，从 2 改成 4，第一行仍是「少于 2」，鸡蛋仍是 1。牛奶这句若两个 2 一起留着，「牛奶是 2，不小于 2，这一次不走进」，门槛对了，盒数是上一圈的。4 不小于 2，走进那半句碰巧仍是不走进。轨迹第 3 行贴的是「牛奶 4」，第二句不过。不过的时候，不把门槛那个 2 也改成 4。盒数按这一行的牛奶重写成 4，门槛留着第一行的 2，写成「牛奶是 4，不小于 2，这一次不走进」。你若把两个 2 都改成 4，写成「牛奶是 4，不小于 4，这一次不走进」，盒数对了，门槛却是这一行的牛奶。4 不小于 4，写成不走进；4 和第一行的 2 比，也是不走进，走进碰巧没反。轨迹里没有参数是牛奶的写入，走进对得上，第二句仍不过，因为门槛不是这一圈读到的第一行。不过的时候，不把门槛改成这一行的牛奶。鸡蛋这句的门槛仍是第一行，盒数仍只看这一行的鸡蛋。第一行和上一圈相同，鸡蛋这句留着，目标也留着「少于 2 才写入」。目标若改成「少于 4」，第三句不过。牛奶这句按这一行的牛奶重写盒数、门槛留着之后，再拿这一圈问那三句"
description: "牛奶这句里两个 2 要拆开：盒数抄这一行的牛奶，门槛抄第一行；牛奶从 2 改成 4 时，只把盒数重写成 4，门槛那个 2 留着。 The two 2s in the milk sentence come apart: the count is copied from this line's milk and the threshold from the first line; when milk changes from 2 to 4, only the count is rewritten as 4, and that threshold 2 stays."
pubDate: 2026-11-20
slug: 2026/11/20/the-two-twos
category: AI 系列
tags:
  - AI 系列
  - AI
draft: false
---

AI 系列第 41 篇。上一篇：[门槛那一截要和这一圈读到的第一行是同一个数，第二句不只核对走进。下一圈第一行从「少于 3」改成「少于 2」，牛奶仍是 2，鸡蛋仍是 1。牛奶这句若留着「牛奶是 2，少于 3，这一次走进」，盒数对了，门槛是上一圈的。2 不小于 2，这一次不该走进。轨迹里没有参数是牛奶的写入，第二句不过。鸡蛋这句若留着「鸡蛋是 1，少于 3，这一次走进」，走进对得上，门槛仍是上一圈的 3，第二句也不过。不过的时候，不把这两句留着。门槛按这一圈的第一行重写，盒数和上一圈相同就留着。牛奶写成「牛奶是 2，不小于 2，这一次不走进」。这个 2 是第一行，不是这一行的牛奶。鸡蛋写成「鸡蛋是 1，少于 2，这一次走进」。你若把鸡蛋的门槛改成这一行的鸡蛋，写成「鸡蛋是 1，不小于 1，这一次不走进」，盒数对了，走进却反了。轨迹里有参数是鸡蛋的写入，第二句不过。目标那一句也改成这一圈读到的「少于 2 才写入」。目标若留着「少于 3」，第三句不过。第一行和上一圈相同，门槛留着。两句各自留着或重写、目标按这一圈的第一行改过之后，再拿这一圈问那三句](/2026/11/19/the-threshold-this-walk-read/)。上一篇停在两句：牛奶这句里两个 2 是同一个数字，门槛那个 2 是第一行，不是这一行的牛奶。这一篇做这两个 2 要拆开。

## 中文

还是那句目标，还是那几扇门。上一篇结束时，三句在那份十二行上过了。`loop.txt` 的第一行仍是「少于 2 才写入」，图上目标也是这一句。牛奶这句是「牛奶是 2，不小于 2，这一次不走进 `shopping.add`」。鸡蛋这句是「鸡蛋是 1，少于 2，这一次走进 `shopping.add`」。那一圈第 3 行贴的是「牛奶 2」「鸡蛋 1」，第 7 行的参数是鸡蛋，后面没有参数是牛奶的写入。这一篇只改牛奶，从 2 改成 4。第一行仍是「少于 2」。鸡蛋仍是 1。不添新的门。两个 2 写在同一句里，来源不是同一行。盒数那个 2 抄这一行的牛奶。门槛那个 2 抄第一行。

```text
[系统] 确认牛奶和鸡蛋的盒数。少于 2 盒的写进购物清单。
盒数请调用 fridge.count。写清单请调用 shopping.add。
不要编造盒数。步数上限 8。同一扇门同一组参数失败 3 次就停。
下单不在这份名单里。
[用户] 冰箱里牛奶和鸡蛋够不够？不够的列进清单。
[模型]
```

第十四篇那一圈，更早的中文单篇写成过组装、决定、执行、写回、检查是否停止：[AI 智能体的执行原理](/2026/10/09/ai-agent-execution/)。那一篇不算本系列的第一篇。这一篇仍从冰箱写起。开头那一块是原来的任务。拼上页的是 `loop.txt` 的第一行。贴上两个数的是 `doors/fridge.count`。要分开的是盒数那个 2，和门槛那个 2。

### 两个 2 一起留着，第二句不过

今晚把 `cartons.txt` 的牛奶从 2 改成 4。鸡蛋仍是 1。第一行、名单、停都不动。图上牛奶这句先留着上一圈那句，两个 2 一起留着。

`fridge.count` 仍去读 `cartons.txt`。`run` 不读 `diagram.txt`。`run` 走一圈。这一圈的 `trace.txt` 是这十二行：

```text
1   拼页      读 loop.txt 第一行「少于 2 才写入」。名单仍是 fridge.count，shopping.add。页上没有注
2   放回模型  放回次数 1
3   认名字    跑了 doors/fridge.count。贴上「牛奶 4」「鸡蛋 1」
4   还放回吗  走否则
5   拼页      第一行仍是「少于 2 才写入」。名单没变
6   放回模型  放回次数 2
7   认名字    交出 shopping.add，参数是鸡蛋。贴上「已写入：鸡蛋。」
8   还放回吗  走否则
9   拼页      第一行仍是「少于 2 才写入」。名单没变
10  放回模型  放回次数 3
11  收口      「牛奶 4 盒，不小于 2，不写。鸡蛋 1 盒已列进清单。」和 history 对得上
12  停        气泡交出去
```

上一圈也是十二行。第 3 行是「牛奶 2」「鸡蛋 1」，第 7 行参数是鸡蛋。这一圈仍是十二行。第 3 行换成「牛奶 4」「鸡蛋 1」。第一行仍是「少于 2」。4 不小于 2，后面没有参数是牛奶的写入。1 少于 2，第 7 行仍是一次参数是鸡蛋的写入。放回还是三次。第二十二篇那笔账上，门数没变，放回就没变。没变的那一笔账，不说明第 3 行的牛奶还是 2。盒数那个 2 若留在图上，它是上一圈贴上的。这一圈贴上的是 4。门槛那个 2 仍在第 1 行。这两个 2 是同一个数字。

三句是第二十九篇那三句。问的是这十二行。每一行都有格。拼页记下的仍是「少于 2 才写入」。牛奶这句留着「牛奶是 2，不小于 2，这一次不走进」。门槛对了，这个 2 是这一圈的第一行。盒数是上一圈的 2。第 3 行贴的是「牛奶 4」。4 不小于 2，走进那半句碰巧仍是不走进。轨迹里没有参数是牛奶的写入，走进对得上。第二句不只核对走进，也不只核对门槛。盒数不是这一行的牛奶，这一句不过。

「不走进」对得上的是 4 和第一行的 2。盒数那个 2 对得上的是上一圈第 3 行。这一圈第 3 行的牛奶是 4。

不过的时候，不把门槛那个 2 也改成 4。两个 2 一起改，写成「牛奶是 4，不小于 4，这一次不走进 `shopping.add`」。4 是这一行的牛奶，盒数对了。门槛却是这一行的牛奶，不是第一行。4 不小于 4，写成不走进。4 和第一行的 2 比，也是不走进。走进碰巧没反。轨迹里没有参数是牛奶的写入，走进对得上。第二句仍不过，因为门槛不是这一圈读到的第一行。

不过的时候，不把门槛改成这一行的牛奶。盒数按这一行的牛奶重写成 4。门槛留着第一行的 2。

### 盒数重写成 4，门槛留着，再问这十二行

牛奶这句写成「牛奶是 4，不小于 2，这一次不走进 `shopping.add`」。4 是这一行的牛奶。门槛那个 2 是第一行，不是这一行的牛奶。4 不小于 2，这一次不走进。鸡蛋这句不重写。第一行和上一圈相同，鸡蛋仍是 1。鸡蛋这句留着「鸡蛋是 1，少于 2，这一次走进 `shopping.add`」。鸡蛋的门槛仍是第一行。鸡蛋的盒数仍只看这一行的鸡蛋。第三十六篇写过：盒数抄这一行的牛奶，不抄同一行的鸡蛋。反过来也一样。不因为牛奶写成了 4，就把鸡蛋的「少于 2」改成「少于 4」。1 少于 4，走进碰巧仍是走进。门槛不是第一行的 2。第二句不过。

目标仍是「少于 2 才写入」。目标若改成「少于 4」，第 1 行、第 5 行、第 9 行都是「少于 2」。格子里的句子不是这一次读到的句子。第三句不过。牛奶这句改对了，盖不住目标那一句。

```text
diagram.txt 里拼页那一格
旧：目标：少于 2 才写入。牛奶是 2，不小于 2，这一次不走进 shopping.add。鸡蛋是 1，少于 2，这一次走进 shopping.add
新：目标：少于 2 才写入。牛奶是 4，不小于 2，这一次不走进 shopping.add。鸡蛋是 1，少于 2，这一次走进 shopping.add
右边仍是 loop.txt。名单仍是 fridge.count，shopping.add
```

十二行不添到图上。`shopping.add` 仍是认名字那一格。第 7 行仍是认名字，不是新的门。两句都写在拼页那一格上。盒数那个 4 是第 3 行的牛奶。门槛那个 2 和目标里的 2 是同一行抄来的。上一篇里这两个 2 写在一起，数字相同，来源仍不是同一行。这一圈数字分开了，才看得出哪一个跟着牛奶走。

再问这十二行。1、5、9 是拼页，2、6、10 是放回，3 和 7 是认名字，4 和 8 是否则，11 是收口，12 是停。都有。没有多出来的一行。

牛奶这句说不走进。轨迹里没有参数是牛奶的写入。盒数是 4，和第 3 行的牛奶是同一个数。门槛是 2，和第 1 行是同一个数。鸡蛋这句说走进。第 7 行的参数是鸡蛋。鸡蛋的盒数是 1，门槛是 2。这一句过了。

拼页指着 `loop.txt`，第 1 行记下的是「少于 2 才写入」。认名字先跑 `doors/fridge.count`，贴上「牛奶 4」「鸡蛋 1」，再跑 `doors/shopping.add`，参数是鸡蛋。这一句也过了。4 来自第 3 行的牛奶，不来自同一行的鸡蛋。1 来自同一行的鸡蛋。门槛的 2 来自第一行，不来自第 3 行的牛奶。第三句比的是读到的那一句。两句对不对，看的是第二句。第二句核对走进，核对门槛那个数，也核对盒数是不是这一行贴上的那个数。

三句都过。图追上了这一次。追上说的是这十二行。上一圈那十二行留着，只用来比：那边第 3 行的牛奶是 2，牛奶这句写的是「牛奶是 2」。形状一样。盒数不是同一句。

十二行还没有，你就把牛奶这句写成 4、门槛写成 2。后来若仍贴「牛奶 2」，图说牛奶是 4，第 3 行是 2。第二句不过。盒数换成这一行的牛奶、门槛仍用第一行之后，要问写下这一行的那一圈。

### 这一行的牛奶和上一圈相同，盒数留着

后一圈不把牛奶再改。牛奶仍是 4。第一行仍是「少于 2 才写入」。鸡蛋仍是 1。`run` 再走。这一圈的 `trace.txt` 仍是这十二行：

```text
1   拼页      读 loop.txt 第一行「少于 2 才写入」。名单仍是 fridge.count，shopping.add。页上没有注
2   放回模型  放回次数 1
3   认名字    跑了 doors/fridge.count。贴上「牛奶 4」「鸡蛋 1」
4   还放回吗  走否则
5   拼页      第一行仍是「少于 2 才写入」。名单没变
6   放回模型  放回次数 2
7   认名字    交出 shopping.add，参数是鸡蛋。贴上「已写入：鸡蛋。」
8   还放回吗  走否则
9   拼页      第一行仍是「少于 2 才写入」。名单没变
10  放回模型  放回次数 3
11  收口      「牛奶 4 盒，不小于 2，不写。鸡蛋 1 盒已列进清单。」和 history 对得上
12  停        气泡交出去
```

这一行的牛奶和上一圈相同，盒数留着。牛奶这句不重写。不因为又走了一圈，就把 4 改回 2，也不把门槛那个 2 改成 4。第一行和上一圈相同，门槛留着。鸡蛋这句不重写。目标仍是「少于 2 才写入」。

问的是这一圈的十二行。每一行都有格。牛奶这句说不走进，轨迹里没有参数是牛奶的写入。盒数是 4，和第 3 行的牛奶是同一个数。门槛是 2，和第 1 行是同一个数。鸡蛋这句说走进，第 7 行的参数是鸡蛋。拼页记下的仍是「少于 2 才写入」。三句都过。追上说的是这一圈。上一圈那十二行留着，只用来比：牛奶没变，两句是同一句。

你若看见牛奶这句里的 4 和 2，把门槛那个 2 说成也会跟着盒数走。这一圈第一行没变，第二句会过。过的是第一行没变，不是门槛要抄盒数。第一行从「少于 2」改成另一个数、牛奶仍是 4 的那一圈，这一篇先不走。4 少于那个新数、走进那半句不再碰巧留着的那一支，留给下一篇。

### 一个常见误会

误会是：十二行的形状没变，牛奶这句就留着；或者第二句不过，就把两个 2 都改成 4；或者看见牛奶是 4，就把目标改成「少于 4」；或者问模型「这两个 2 哪个是盒数」。上一圈十二行上的通过盖不住这十二行。

模型看不见 `diagram.txt`。你问它哪个 2 是盒数，它交出来的仍是下一段。第八篇写过：下一段不是观察。算的是这一圈第 3 行贴上的牛奶，和这一圈第 1 行写下的那个数。盒数不回头去改门槛。第一行和上一圈相同，门槛才留着。这一行的牛奶和上一圈相同，盒数才留着。

留下三句就够这一篇用：牛奶这句里两个 2 是同一个数字，盒数那个 2 抄这一行的牛奶，门槛那个 2 抄第一行。下一圈只改牛奶，从 2 改成 4，第一行仍是「少于 2」，鸡蛋仍是 1。牛奶这句若两个 2 一起留着，「牛奶是 2，不小于 2，这一次不走进」，门槛对了，盒数是上一圈的。4 不小于 2，走进那半句碰巧仍是不走进。轨迹第 3 行贴的是「牛奶 4」，第二句不过。不过的时候，不把门槛那个 2 也改成 4。盒数按这一行的牛奶重写成 4，门槛留着第一行的 2，写成「牛奶是 4，不小于 2，这一次不走进」。你若把两个 2 都改成 4，写成「牛奶是 4，不小于 4，这一次不走进」，盒数对了，门槛却是这一行的牛奶。4 不小于 4，写成不走进；4 和第一行的 2 比，也是不走进，走进碰巧没反。轨迹里没有参数是牛奶的写入，走进对得上，第二句仍不过，因为门槛不是这一圈读到的第一行。不过的时候，不把门槛改成这一行的牛奶。鸡蛋这句的门槛仍是第一行，盒数仍只看这一行的鸡蛋。第一行和上一圈相同，鸡蛋这句留着，目标也留着「少于 2 才写入」。目标若改成「少于 4」，第三句不过。牛奶这句按这一行的牛奶重写盒数、门槛留着之后，再拿这一圈问那三句。下一篇再拆：牛奶这句里的 4 和 2 不是同一个数字，盒数那个 4 抄这一行的牛奶，门槛那个 2 抄第一行。下一圈只改第一行，从「少于 2」改成「少于 5」，牛奶仍是 4，鸡蛋仍是 1。牛奶这句若留着「牛奶是 4，不小于 2，这一次不走进」，盒数对了，门槛是上一圈的。4 少于 5，这一次该走进。轨迹里有参数是牛奶的写入，走进那半句没有碰巧留着，第二句不过。不过的时候，不把盒数那个 4 也改成 5。门槛按这一圈的第一行重写成 5，盒数留着这一行的牛奶，写成「牛奶是 4，少于 5，这一次走进」。你若把门槛改成这一行的牛奶，写成「牛奶是 4，不小于 4，这一次不走进」，盒数对了，门槛却是这一行的牛奶。4 不小于 4，写成不走进；4 和第一行的 5 比，是少于，该走进。走进反了。轨迹里有参数是牛奶的写入，第二句不过。不过的时候，不把门槛改成这一行的牛奶。鸡蛋这句若留着「鸡蛋是 1，少于 2，这一次走进」，走进对得上，门槛仍是上一圈的 2。1 少于 5，轨迹里有参数是鸡蛋的写入，走进碰巧仍是走进。第二句不过，因为门槛不是这一圈读到的第一行。不过的时候，不把鸡蛋这句留着。鸡蛋的盒数留着 1，门槛按第一行重写成 5，写成「鸡蛋是 1，少于 5，这一次走进」。目标也改成这一圈读到的「少于 5 才写入」。目标若留着「少于 2」，第三句不过。第一行和上一圈相同，门槛留着。两句各自留着或重写、目标按这一圈的第一行改过之后，再拿这一圈问那三句。

## English

Part 41 starts where [part 40](/2026/11/19/the-threshold-this-walk-read/) stopped. The last part left two 2s in the milk sentence. They were the same digit, and the threshold's 2 was the first line, not the milk on that line. This part pulls those two 2s apart.

The goal is the same, and so are the doors. At the end of the last part, the three questions had passed on a twelve-line trace. The first line of `loop.txt` was still "write it only below 2," and the goal on the picture said the same. The milk sentence said milk at 2 is not below 2, so this run does not walk into `shopping.add`. The eggs sentence said eggs at 1 are below 2, so this run walks into `shopping.add`. Line 3 of that walk pasted "milk 2" and "eggs 1." The argument on line 7 was eggs, and nothing later was a write whose argument was milk. This part changes only the milk, from 2 to 4. The first line is still "below 2." The eggs stay at 1. It adds no new door. The two 2s sit in one sentence, and they do not come from the same line. The count's 2 is copied from the milk on this line. The threshold's 2 is copied from the first line.

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

An earlier Chinese piece, outside this series, wrote the loop from part 14 as assemble, decide, run, write back, and check whether to stop: [how an agent actually runs](/2026/10/09/ai-agent-execution/). That piece is not part 1. This part still starts from the fridge. The block above is the original task. What gets pasted onto the page is the first line of `loop.txt`. What pastes the two counts is `doors/fridge.count`. What has to be pulled apart is the count's 2, and the threshold's 2.

### Keep both 2s, and the second question fails

Tonight the milk in `cartons.txt` changes from 2 to 4. The eggs stay at 1. The first line, the list, and the stops stay put. The milk sentence on the picture is left as the previous walk wrote it, with both 2s kept.

`fridge.count` still reads `cartons.txt`. `run` does not read `diagram.txt`. `run` walks once. This walk's `trace.txt` is these twelve lines:

```text
1   assemble the page     read the first line of loop.txt, "write it only below 2." The list is still fridge.count, shopping.add. The note is not on the page
2   put the model back    put-back 1
3   recognize the name    ran doors/fridge.count. Pasted "milk 4" and "eggs 1"
4   put the model back again?    took otherwise
5   assemble the page     the first line is still "write it only below 2." The list did not change
6   put the model back    put-back 2
7   recognize the name    handed over shopping.add, argument eggs. Pasted "written: eggs."
8   put the model back again?    took otherwise
9   assemble the page     the first line is still "write it only below 2." The list did not change
10  put the model back    put-back 3
11  close                 "4 cartons of milk are not below 2, so milk is not written. 1 carton of eggs is on the list." It matches history
12  stop                  hand over the bubble
```

The previous walk was twelve lines too. Line 3 was "milk 2" and "eggs 1," and the argument on line 7 was eggs. This walk is still twelve lines. Line 3 is now "milk 4" and "eggs 1." The first line is still "below 2." Four is not below 2, so nothing later is a write whose argument is milk. One is below 2, which is why line 7 is still one write whose argument is eggs. There are still three put-backs. On the bill from part 22, the same number of doors is the same number of put-backs. An unchanged bill does not mean the milk on line 3 is still 2. If the count's 2 is left on the picture, it is what the previous walk pasted. What this walk pasted is 4. The threshold's 2 is still on line 1. Those two 2s are the same digit.

The three questions are the three from part 29. You ask them of these twelve lines. Every line has a cell. Assemble still recorded "write it only below 2." The milk sentence is left as "milk at 2 is not below 2, so this run does not walk in." The threshold is right. That 2 is this walk's first line. The count is the previous walk's 2. Line 3 pasted "milk 4." Four is not below 2, so the walk half happens to still say this run does not walk in. The trace has no write whose argument is milk, so the walk matches. The second question does not check only whether this run walks in, and it does not check only the threshold. The count is not the milk on this line, so this sentence fails.

"Does not walk in" matches 4 compared with the first line's 2. The count's 2 matches line 3 of the previous walk. The milk on line 3 of this walk is 4.

When it fails, you do not also change that threshold 2 into 4. Change both 2s together, and write "milk at 4 is not below 4, so this run does not walk into `shopping.add`." The 4 is the milk on this line, so the count is right. The threshold is this line's milk, not the first line. Four is not below 4, so the sentence says this run does not walk in. Four compared with the first line's 2 is not below either, so the walk happens not to come out backwards. The trace has no write whose argument is milk, and the walk matches. The second question still fails, because the threshold is not the first line this walk read.

When it fails, you do not change the threshold to the milk on this line. The count is rewritten as 4 from the milk on this line. The threshold stays the first line's 2.

### Where it shows up: the count is rewritten as 4, the threshold stays, then you ask these twelve lines

The milk sentence becomes "milk at 4 is not below 2, so this run does not walk into `shopping.add`." The 4 is the milk on this line. The threshold's 2 is the first line, not the milk on this line. Four is not below 2, so this run does not walk in. The eggs sentence is not rewritten. The first line matches the previous walk, and the eggs are still 1. The eggs sentence stays "eggs at 1 are below 2, so this run walks into `shopping.add`." The eggs' threshold is still the first line. The eggs' count still looks only at the eggs on this line. Part 36 already said the count is copied from the milk on this line, not from the eggs beside it. The other way holds too. The milk having been rewritten as 4 is not a reason to change the eggs' "below 2" into "below 4." One is below 4, so the walk happens to still say this run walks in. The threshold is not the first line's 2. The second question fails.

The goal stays "write it only below 2." Change the goal to "below 4," and lines 1, 5, and 9 all read "below 2." The sentence in the cell is not the sentence this run read. The third question fails. Getting the milk sentence right does not cover the goal sentence.

```text
the assemble cell in diagram.txt
old: goal: write it only below 2. Milk at 2 is not below 2, so this run does not walk into shopping.add. Eggs at 1 are below 2, so this run walks into shopping.add
new: goal: write it only below 2. Milk at 4 is not below 2, so this run does not walk into shopping.add. Eggs at 1 are below 2, so this run walks into shopping.add
the right side is still loop.txt. The list is still fridge.count, shopping.add
```

The twelve lines are not added to the picture. `shopping.add` stays the recognize-the-name cell. Line 7 is still recognize-the-name, not a new door. Both sentences sit on the assemble cell. The count's 4 is the milk on line 3. The threshold's 2 and the 2 in the goal are copied from the same line. In the last part those two 2s sat together. The digit matched. The source was still not the same line. On this walk the digits have come apart, so you can see which one follows the milk.

Ask the twelve lines again. Lines 1, 5, and 9 are assemble. Lines 2, 6, and 10 put the model back. Lines 3 and 7 recognize a name. Lines 4 and 8 take otherwise. Line 11 closes. Line 12 stops. Each of those cells is on the picture. No extra line appears.

The milk sentence says this run does not walk in. The trace has no write whose argument is milk. The count is 4, the same number as the milk on line 3. The threshold is 2, the same number as line 1. The eggs sentence says this run walks in. The argument on line 7 is eggs. The eggs' count is 1, and the threshold is 2. This question passes.

Assemble points at `loop.txt`, and line 1 recorded "write it only below 2." Recognizing the name ran `doors/fridge.count` and pasted "milk 4" and "eggs 1," then ran `doors/shopping.add` with the argument eggs. This question passes too. The 4 comes from the milk on line 3, not from the eggs on the same line. The 1 comes from the eggs on that line. The threshold's 2 comes from the first line, not from the milk on line 3. The third question compares the sentence that was read. Whether the two sentences are right is the second question. The second question checks the walk, checks the number in the threshold, and checks whether the count is the number this line pasted.

All three pass. The picture has caught up with this run. Caught up means these twelve lines. The previous twelve lines stay, so you can see the other branch: there the milk on line 3 was 2, and the milk sentence said "milk at 2." The shape is the same. The count is not the same sentence.

Write the milk sentence as 4, with the threshold at 2, before the twelve lines exist. If a later walk still pastes "milk 2," the picture says the milk is 4, and line 3 says 2. The second question fails. After the count is this line's milk and the threshold is still the first line, you ask the walk that wrote the line down.

### When the milk on this line matches the previous walk, the count stays

The next walk does not change the milk again. The milk is still 4. The first line is still "write it only below 2." The eggs are still 1. `run` walks again. This walk's `trace.txt` is these twelve lines again:

```text
1   assemble the page     read the first line of loop.txt, "write it only below 2." The list is still fridge.count, shopping.add. The note is not on the page
2   put the model back    put-back 1
3   recognize the name    ran doors/fridge.count. Pasted "milk 4" and "eggs 1"
4   put the model back again?    took otherwise
5   assemble the page     the first line is still "write it only below 2." The list did not change
6   put the model back    put-back 2
7   recognize the name    handed over shopping.add, argument eggs. Pasted "written: eggs."
8   put the model back again?    took otherwise
9   assemble the page     the first line is still "write it only below 2." The list did not change
10  put the model back    put-back 3
11  close                 "4 cartons of milk are not below 2, so milk is not written. 1 carton of eggs is on the list." It matches history
12  stop                  hand over the bubble
```

The milk on this line matches the previous walk, so the count stays. The milk sentence is not rewritten. Walking once more is not a reason to change the 4 back into 2, and it is not a reason to change that threshold 2 into 4. The first line matches the previous walk, so the threshold stays. The eggs sentence is not rewritten. The goal is still "write it only below 2."

You ask the three questions of this walk's twelve lines. Every line has a cell. The milk sentence says this run does not walk in, and the trace has no write whose argument is milk. The count is 4, the same number as the milk on line 3. The threshold is 2, the same number as line 1. The eggs sentence says this run walks in, and the argument on line 7 is eggs. Assemble still recorded "write it only below 2." All three pass. Caught up means this walk. The previous twelve lines stay, so you can see that the milk did not change and the two sentences are the same sentences.

See the 4 and the 2 in the milk sentence, and say the threshold's 2 will follow the count as well. On this walk the first line did not change, and the second question passes. What passed is that the first line did not change, not that the threshold is copied from the count. This part does not walk the branch where the first line changes from "below 2" to some other number and the milk stays at 4. The branch where 4 is below that new number, and the walk half does not happen to stay, is the next part.

### The usual mix-up

The usual mix-up is to keep the milk sentence because the twelve-line shape did not change; or to treat a failed second question as a reason to change both 2s into 4; or to change the goal to "below 4" because the milk is 4; or to ask the model which of the two 2s is the count. The pass on the previous twelve lines does not cover these twelve.

The model does not see `diagram.txt`. Ask which 2 is the count, and what it hands back is still a next span. Part 8 already said a next span is not an observation. What you count is the milk line 3 of this walk pasted, and the number line 1 of this walk wrote down. The count does not reach back and change the threshold. The threshold stays only when the first line matches the previous walk. The count stays only when the milk on this line matches the previous walk.

What this part hands off is short. The two 2s in the milk sentence are the same digit. The count's 2 is copied from the milk on this line. The threshold's 2 is copied from the first line. On the next walk only the milk changes, from 2 to 4. The first line is still "below 2," and the eggs stay at 1. Leave both 2s in "milk at 2 is not below 2, so this run does not walk in," and the threshold is right, but the count is the previous walk's. Four is not below 2, so the walk half happens to still say this run does not walk in. Line 3 of the trace pastes "milk 4," and the second question fails. When it fails, you do not also change that threshold 2 into 4. The count is rewritten as 4 from the milk on this line, and the threshold stays the first line's 2, so the sentence says milk at 4 is not below 2, and this run does not walk in. Change both 2s to 4, and write "milk at 4 is not below 4, so this run does not walk in." The count is right. The threshold is this line's milk. Four is not below 4, so the sentence says this run does not walk in. Four compared with the first line's 2 is not below either, so the walk happens not to come out backwards. The trace has no write whose argument is milk, and the walk matches, but the second question still fails, because the threshold is not the first line this walk read. When it fails, you do not change the threshold to the milk on this line. The eggs sentence's threshold is still the first line, and its count still looks only at the eggs on this line. The first line matches the previous walk, so the eggs sentence stays, and the goal stays "write it only below 2." Change the goal to "below 4," and the third question fails. After the milk sentence's count is rewritten from the milk on this line and its threshold stays, you ask this walk the three questions. The next part pulls the 4 and the 2 in the milk sentence apart. They are not the same digit. The count's 4 is copied from the milk on this line. The threshold's 2 is copied from the first line. On the next walk only the first line changes, from "below 2" to "below 5." The milk stays at 4, and the eggs stay at 1. Leave the milk sentence as "milk at 4 is not below 2, so this run does not walk in," and the count is right, but the threshold is the previous walk's. Four is below 5, so this run should walk in. The trace has a write whose argument is milk, and the walk half does not happen to stay. The second question fails. When it fails, you do not also change that count 4 into 5. The threshold is rewritten as 5 from this walk's first line, and the count stays this line's milk, so the sentence says milk at 4 is below 5, and this run walks in. Change the threshold to the milk on this line, and write "milk at 4 is not below 4, so this run does not walk in." The count is right. The threshold is this line's milk. Four is not below 4, so the sentence says this run does not walk in. Four compared with the first line's 5 is below, so this run should walk in. The walk is backwards. The trace has a write whose argument is milk, and the second question fails. When it fails, you do not change the threshold to the milk on this line. Leave the eggs sentence as "eggs at 1 are below 2, so this run walks in," and the walk matches, but the threshold is still the previous walk's 2. One is below 5, the trace has a write whose argument is eggs, and the walk happens to still say this run walks in. The second question fails, because the threshold is not the first line this walk read. When it fails, you do not keep the eggs sentence. The eggs' count stays 1, and the threshold is rewritten as 5 from the first line, so the sentence says eggs at 1 are below 5, and this run walks in. The goal is also changed to the first line this walk read, "write it only below 5." Leave the goal as "below 2," and the third question fails. When the first line matches the previous walk, the threshold stays. After each sentence has stayed or been rewritten, and the goal is this walk's first line, you ask this walk the three questions.
