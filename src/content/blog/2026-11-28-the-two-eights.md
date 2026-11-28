---
title: "牛奶这句里两个 8 是同一个数字，盒数那个 8 抄这一行的牛奶，门槛那个 8 抄第一行。「不小于」留着，是因为这一行的牛奶和第一行比仍是不小于，不是因为门槛那个数可以留着。下一圈只改第一行，从「少于 7」改成「少于 8」，牛奶仍是 8，鸡蛋仍是 1。牛奶这句若留着「牛奶是 8，不小于 7，这一次不走进」，盒数对了，门槛是上一圈的。8 不小于 8，走进那半句碰巧仍是不走进。轨迹第 1 行写的是「少于 8」，第二句不过。不过的时候，不把盒数那个 8 也改成 7。门槛按这一圈的第一行重写成 8，盒数留着这一行的牛奶，写成「牛奶是 8，不小于 8，这一次不走进」。你若写成「牛奶是 8，少于 8，这一次走进」，盒数对了，门槛也是第一行的 8。8 不小于 8，走进却反了。轨迹里没有参数是牛奶的写入，第二句不过。不过的时候，不把「少于」写上。鸡蛋这句若留着「鸡蛋是 1，少于 7，这一次走进」，走进对得上，门槛仍是上一圈的 7。1 少于 8，轨迹里有参数是鸡蛋的写入，走进碰巧仍是走进。第二句不过，因为门槛不是这一圈读到的第一行。不过的时候，不把鸡蛋这句留着。鸡蛋的盒数留着 1，门槛按第一行重写成 8，写成「鸡蛋是 1，少于 8，这一次走进」。目标也改成这一圈读到的「少于 8 才写入」。目标若留着「少于 7」，第三句不过。第一行和上一圈相同，门槛留着。两句各自留着或重写、目标按这一圈的第一行改过之后，再拿这一圈问那三句"
description: "牛奶这句里两个 8 是同一个数字：盒数留着这一行的牛奶，门槛按这一圈的第一行重写成 8；「不小于」留着，是因为 8 和 8 比仍是不小于，不是因为门槛那个数可以留着。 The two 8s in the milk sentence are the same digit: the count stays this line's milk, and the threshold is rewritten as 8 from this walk's first line; not-below stays because 8 compared with 8 is still not below, not because that threshold number can stay."
pubDate: 2026-11-28
slug: 2026/11/28/the-two-eights
category: AI 系列
tags:
  - AI 系列
  - AI
draft: false
---

AI 系列第 49 篇。上一篇：[牛奶这句里的 8 和 7 不是同一个数字，盒数那个 8 抄这一行的牛奶，门槛那个 7 抄第一行。「不小于」留着，是因为这一行的牛奶和第一行比仍是不小于，不是因为盒数可以留着。下一圈只改牛奶，从 7 改成 8，第一行仍是「少于 7」，鸡蛋仍是 1。牛奶这句若留着「牛奶是 7，不小于 7，这一次不走进」，门槛对了，盒数是上一圈的。8 不小于 7，走进那半句碰巧仍是不走进。轨迹第 3 行贴的是「牛奶 8」，第二句不过。不过的时候，不把门槛那个 7 也改成 8。盒数按这一行的牛奶重写成 8，门槛留着第一行的 7，写成「牛奶是 8，不小于 7，这一次不走进」。你若把两个数都改成 8，写成「牛奶是 8，不小于 8，这一次不走进」，盒数对了，门槛却是这一行的牛奶。8 不小于 8，写成不走进；8 和第一行的 7 比，也是不走进，走进碰巧没反。轨迹里没有参数是牛奶的写入，走进对得上，第二句仍不过，因为门槛不是这一圈读到的第一行。不过的时候，不把门槛改成这一行的牛奶。鸡蛋这句的门槛仍是第一行，盒数仍只看这一行的鸡蛋。第一行和上一圈相同，鸡蛋仍是 1，鸡蛋这句留着，目标也留着「少于 7 才写入」。目标若改成「少于 8」，第三句不过。这一行的牛奶和上一圈相同，盒数留着。牛奶这句按这一行的牛奶重写盒数、门槛留着、「不小于」按比出来的结果留着之后，再拿这一圈问那三句](/2026/11/27/the-eight-and-the-seven/)。上一篇停在一句：牛奶这句里的 8 是这一行的牛奶，7 是第一行。这两个数已经不是同一个数字。「不小于」留着，是这一比仍是不小于。这一篇只改第一行，看「不小于」留着的时候，门槛那个数能不能跟着留着。

## 中文

还是那句目标，还是那几扇门。上一篇结束时，三句在那份十二行上过了。`loop.txt` 的第一行仍是「少于 7 才写入」，图上目标也是这一句。牛奶这句是「牛奶是 8，不小于 7，这一次不走进 `shopping.add`」。鸡蛋这句是「鸡蛋是 1，少于 7，这一次走进 `shopping.add`」。那一圈第 3 行贴的是「牛奶 8」「鸡蛋 1」，第 7 行的参数是鸡蛋，后面没有参数是牛奶的写入。这一篇把第一行从「少于 7」改成「少于 8」。牛奶仍是 8。鸡蛋仍是 1。不添新的门。盒数那个 8 抄这一行的牛奶。门槛那个 8 抄第一行。两个 8 是同一个数字，才分得清「不小于」留着，是这一比仍是不小于，不是门槛那个数可以留着。

```text
[系统] 确认牛奶和鸡蛋的盒数。少于 8 盒的写进购物清单。
盒数请调用 fridge.count。写清单请调用 shopping.add。
不要编造盒数。步数上限 8。同一扇门同一组参数失败 3 次就停。
下单不在这份名单里。
[用户] 冰箱里牛奶和鸡蛋够不够？不够的列进清单。
[模型]
```

第十四篇那一圈，更早的中文单篇写成过组装、决定、执行、写回、检查是否停止：[AI 智能体的执行原理](/2026/10/09/ai-agent-execution/)。那一篇不算本系列的第一篇。这一篇仍从冰箱写起。开头那一块是原来的任务。拼上页的是 `loop.txt` 的第一行。贴上两个数的是 `doors/fridge.count`。要分开的是盒数那个 8，和门槛那个 8。数字相同，才看得出「不小于」不是跟着门槛那个数走的。步数上限仍是 8。那个 8 是停，不是盒数，也不是这一圈的门槛。

### 牛奶这句留着，走进那半句碰巧仍是不走进

今晚把 `loop.txt` 的第一行改成「少于 8 才写入」。`cartons.txt` 不动。牛奶仍是 8，鸡蛋仍是 1。名单、停都不动。图上牛奶这句先留着上一圈那句。

`fridge.count` 仍去读 `cartons.txt`。`run` 不读 `diagram.txt`。`run` 走一圈。这一圈的 `trace.txt` 是这十二行：

```text
1   拼页      读 loop.txt 第一行「少于 8 才写入」。名单仍是 fridge.count，shopping.add。页上没有注
2   放回模型  放回次数 1
3   认名字    跑了 doors/fridge.count。贴上「牛奶 8」「鸡蛋 1」
4   还放回吗  走否则
5   拼页      第一行仍是「少于 8 才写入」。名单没变
6   放回模型  放回次数 2
7   认名字    交出 shopping.add，参数是鸡蛋。贴上「已写入：鸡蛋。」
8   还放回吗  走否则
9   拼页      第一行仍是「少于 8 才写入」。名单没变
10  放回模型  放回次数 3
11  收口      「牛奶 8 盒，不小于 8，不写。鸡蛋 1 盒已列进清单。」和 history 对得上
12  停        气泡交出去
```

上一圈也是十二行。第 1 行是「少于 7」，第 3 行是「牛奶 8」「鸡蛋 1」，第 7 行参数是鸡蛋。这一圈仍是十二行。第 1 行换成「少于 8」。第 3 行仍是「牛奶 8」「鸡蛋 1」。8 不小于 8，后面没有参数是牛奶的写入。1 少于 8，第 7 行仍是一次参数是鸡蛋的写入。放回还是三次。第二十二篇那笔账上，门数没变，放回就没变。没变的那一笔账，不说明第 1 行还是「少于 7」，也不说明「不小于」可以替门槛那个数留着。门槛那个 7 若留在图上，它是上一圈读到的。这一圈读到的是 8。盒数那个 8 仍在第 3 行。两个 8 是同一个数字。上一篇里 8 和 7 不是同一个数字，比出来的词和这一圈相同。这一圈数字合成了同一个，比出来的词仍是「不小于」。步数上限也是 8。放回三次，还没满。停的那个 8 在还放回吗那一格，不在第 1 行，也不在第 3 行。

三句是第二十九篇那三句。问的是这十二行。每一行都有格。拼页记下的是「少于 8 才写入」。牛奶这句留着「牛奶是 8，不小于 7，这一次不走进」。盒数对了，这个 8 是这一圈第 3 行的牛奶。「不小于」也对了，8 和第一行的 8 比，仍是不小于。门槛是上一圈的 7。第 1 行写的是「少于 8」。8 不小于 8，走进那半句碰巧仍是不走进。轨迹里没有参数是牛奶的写入，走进对得上。第二句不只核对走进，也不只核对盒数，也不只核对「不小于」。门槛不是这一圈读到的第一行，这一句不过。

「不走进」对得上的是 8 和第一行的 8。「不小于」对得上的也是这一比。门槛那个 7 对得上的是上一圈第 1 行。这一圈第 1 行是「少于 8」。

不过的时候，不把盒数那个 8 也改成 7。8 改成 7，门槛留着 7，写成「牛奶是 7，不小于 7，这一次不走进 `shopping.add`」。7 是上一圈的第一行，不是这一行的牛奶。第 3 行贴的是「牛奶 8」。7 不小于 7，写成不走进。8 和第一行的 8 比，也是不走进。走进碰巧没反。轨迹里没有参数是牛奶的写入，走进对得上。第二句仍不过，因为盒数不是这一行的牛奶，门槛那个 7 也不是这一圈读到的第一行。7 盖不住第 3 行，也盖不住第 1 行。

门槛按这一圈的第一行重写成 8。盒数留着这一行的牛奶。「不小于」留着，是因为这一行的牛奶和第一行比仍是不小于，不是因为门槛那个数可以留着。

### 门槛重写成 8，盒数留着，「不小于」按比出来的结果留着，再问这十二行

牛奶这句写成「牛奶是 8，不小于 8，这一次不走进 `shopping.add`」。盒数那个 8 是这一行的牛奶。门槛那个 8 是第一行，不是这一行的牛奶。两个 8 是同一个数字。8 不小于 8，这一次不走进。停的那个 8 仍不写进这一句。放回三次，步数上限还没到。

你若写成「牛奶是 8，少于 8，这一次走进 `shopping.add`」。盒数对了，门槛也是第一行的 8。第一行写着「少于 8 才写入」，你把规则里的「少于」抄进了牛奶这句。8 不小于 8，走进却反了。轨迹里没有参数是牛奶的写入。第二句不过。不过的时候，不把「少于」写上。两个数都抄对了，盖不住比出来的那一个词。第一行里的「少于」是规则。牛奶这句里的「不小于」是这一行的牛奶和这一行比出来的。数字相同，不把规则抄成结果。

鸡蛋这句若留着「鸡蛋是 1，少于 7，这一次走进 `shopping.add`」。第 7 行的参数是鸡蛋，走进对得上。1 少于 8，轨迹里有参数是鸡蛋的写入，走进碰巧仍是走进。门槛仍是上一圈的 7，不是这一圈第 1 行的 8。第二句不只核对走进。门槛那个数对不上，这一句不过。

不过的时候，不把鸡蛋这句留着。不因为走进碰巧仍是走进，就把「少于 7」留着。鸡蛋的盒数留着 1。门槛按第一行重写成 8。写成「鸡蛋是 1，少于 8，这一次走进 `shopping.add`」。1 少于 8，这一次走进。不因为牛奶这句写成了「不小于」，就把鸡蛋的「少于」改成「不小于」。1 少于 8，改成不小于，走进就反了。轨迹里有参数是鸡蛋的写入。第二句不过。第三十六篇写过：盒数抄这一行的牛奶，不抄同一行的鸡蛋。反过来也一样。不因为门槛写成了 8，就把鸡蛋的盒数改成 8。鸡蛋若写成「鸡蛋是 8，不小于 8，这一次不走进」，盒数是这一行的牛奶，走进反了。

目标也改成这一圈读到的「少于 8 才写入」。目标若留着「少于 7」，第 1 行、第 5 行、第 9 行都是「少于 8」。格子里的句子不是这一次读到的句子。第三句不过。两句改对了，盖不住目标那一句。目标里的 8 抄第一行。这一圈它和这一行的牛奶是同一个数字。从第 3 行的牛奶抄来「少于 8」，这一圈碰巧相同。来源仍是第一行。步数上限也是 8。从停那一格抄来「少于 8」，数字碰巧相同。来源仍不是停。这一圈放回三次，停的那个 8 还没走到。

```text
diagram.txt 里拼页那一格
旧：目标：少于 7 才写入。牛奶是 8，不小于 7，这一次不走进 shopping.add。鸡蛋是 1，少于 7，这一次走进 shopping.add
新：目标：少于 8 才写入。牛奶是 8，不小于 8，这一次不走进 shopping.add。鸡蛋是 1，少于 8，这一次走进 shopping.add
右边仍是 loop.txt。名单仍是 fridge.count，shopping.add
```

十二行不添到图上。`shopping.add` 仍是认名字那一格。第 7 行仍是认名字，不是新的门。上一圈第 7 行的鸡蛋，走的是这一格。这一圈仍走进鸡蛋，格还在。两句都写在拼页那一格上。盒数那个 8 是第 3 行的牛奶。盒数那个 1 是同一行的鸡蛋。门槛那个 8 和目标里的 8 是同一行抄来的。上一篇里 8 和 7 已经分开。这一圈把门槛那个 7 换成了 8，盒数那个 8 仍留着，「不小于」也留着。词留着，门槛那个数不跟着留。两个 8 写成同一个数字，来源不是同一行。停的那个 8 也不在这一行里。

再问这十二行。第 1、5、9 行是拼页，第 2、6、10 行是放回，第 3 行和第 7 行是认名字，第 4 行和第 8 行是否则，第 11 行是收口，第 12 行是停。都有。没有多出来的一行。

牛奶这句说不走进。轨迹里没有参数是牛奶的写入。盒数是 8，和第 3 行的牛奶是同一个数。门槛是 8，和第 1 行是同一个数。这两个 8 是同一个数字。来源不是同一行。「不小于」是比出来的。鸡蛋这句说走进。第 7 行的参数是鸡蛋。鸡蛋的盒数是 1，门槛是 8。这一句过了。

拼页指着 `loop.txt`，第 1 行记下的是「少于 8 才写入」。认名字先跑 `doors/fridge.count`，贴上「牛奶 8」「鸡蛋 1」，再跑 `doors/shopping.add`，参数是鸡蛋。这一句也过了。盒数的 8 来自第 3 行的牛奶，不来自第一行。门槛的 8 来自第一行，不来自第 3 行的牛奶。数字相同，不把来源说成同一行。停的那个 8 来自还放回吗，不来自第一行。第三句比的是读到的那一句。两句对不对，看的是第二句。第二句核对走进，核对门槛那个数，核对盒数是不是这一行贴上的那个数，也核对「少于」还是「不小于」是不是这两个数比出来的。

三句都过。图追上了这一次。追上说的是这十二行。上一圈那十二行留着，只用来比：那边第 1 行是「少于 7」，牛奶这句写的是「不小于 7」。形状一样。门槛不是同一句。「不小于」是同一词，来源不是「门槛那个数没变」。

十二行还没有，你就把门槛写成 8、盒数留着 8、「不小于」留着。后来若第一行仍是「少于 7」，图说门槛是 8，第 1 行是「少于 7」。第二句不过。门槛换成这一圈的第一行、盒数仍用这一行的牛奶、「不小于」按比出来的结果留着之后，要问写下这一行的那一圈。

### 第一行和上一圈相同，门槛留着

后一圈不把第一行再改。第一行仍是「少于 8 才写入」。牛奶仍是 8。鸡蛋仍是 1。`run` 再走。这一圈的 `trace.txt` 仍是这十二行：

```text
1   拼页      读 loop.txt 第一行「少于 8 才写入」。名单仍是 fridge.count，shopping.add。页上没有注
2   放回模型  放回次数 1
3   认名字    跑了 doors/fridge.count。贴上「牛奶 8」「鸡蛋 1」
4   还放回吗  走否则
5   拼页      第一行仍是「少于 8 才写入」。名单没变
6   放回模型  放回次数 2
7   认名字    交出 shopping.add，参数是鸡蛋。贴上「已写入：鸡蛋。」
8   还放回吗  走否则
9   拼页      第一行仍是「少于 8 才写入」。名单没变
10  放回模型  放回次数 3
11  收口      「牛奶 8 盒，不小于 8，不写。鸡蛋 1 盒已列进清单。」和 history 对得上
12  停        气泡交出去
```

第一行和上一圈相同，门槛留着。牛奶这句不重写。不因为又走了一圈，就把门槛那个 8 改回 7，也不把「不小于」改成「少于」，也不把盒数那个 8 改成 7。这一行的牛奶和上一圈相同，盒数留着。鸡蛋仍是 1，鸡蛋这句不重写。目标仍是「少于 8 才写入」。步数上限仍是 8，放回仍是三次。不因为又走了一圈，就把门槛说成停。

问的是这一圈的十二行。每一行都有格。牛奶这句说不走进，轨迹里没有参数是牛奶的写入。盒数是 8，和第 3 行的牛奶是同一个数。门槛是 8，和第 1 行是同一个数。鸡蛋这句说走进，第 7 行的参数是鸡蛋。拼页记下的仍是「少于 8 才写入」。三句都过。追上说的是这一圈。上一圈那十二行留着，只用来比：第一行没变，两句是同一句。

你若看见牛奶这句里两个 8，把「不小于」说成可以替门槛那个数留着。这一圈第一行没变，第二句会过。过的是第一行没变，不是「不小于」能把门槛留住。第一行从「少于 8」改成「少于 9」、牛奶仍是 8 的那一圈，这一篇先不走。8 和 9 不是同一个数字、「少于」要写上、走进那半句不再碰巧留着的那一支，留给下一篇。

### 一个常见误会

误会是：十二行的形状没变，牛奶这句就留着；或者「不小于」留着，门槛那个数就可以留着；或者第二句不过，就把盒数那个 8 改成 7；或者两个 8 是同一个数字，就写成「少于 8，这一次走进」；或者鸡蛋仍走进，鸡蛋这句就留着，不管门槛仍写着 7；或者看见牛奶是 8，就把目标从第 3 行抄来，这一圈碰巧对上；或者看见步数上限是 8，就把门槛说成停；或者问模型「不小于能不能留着」。上一圈十二行上的通过盖不住这十二行。

模型看不见 `diagram.txt`。你问它不小于能不能留着，它交出来的仍是下一段。第八篇写过：下一段不是观察。算的是这一圈第 3 行贴上的牛奶，和这一圈第 1 行写下的那个数，比出少于还是不小于。盒数不跟着门槛改。门槛不跟着盒数改。「不小于」不跟着门槛那个数能不能留着走。第一行和上一圈相同，门槛才留着。这一行的牛奶和上一圈相同，盒数才留着。比出来的结果和上一圈相同，「少于」或「不小于」才留着。步数上限那个 8 不参加这一比。放回满 8 次才用到它。这一圈没有满。

留下三句就够这一篇用：牛奶这句里两个 8 是同一个数字，盒数那个 8 抄这一行的牛奶，门槛那个 8 抄第一行。「不小于」留着，是因为这一行的牛奶和第一行比仍是不小于，不是因为门槛那个数可以留着。下一圈只改第一行，从「少于 7」改成「少于 8」，牛奶仍是 8，鸡蛋仍是 1。牛奶这句若留着「牛奶是 8，不小于 7，这一次不走进」，盒数对了，门槛是上一圈的。8 不小于 8，走进那半句碰巧仍是不走进。轨迹第 1 行写的是「少于 8」，第二句不过。不过的时候，不把盒数那个 8 也改成 7。门槛按这一圈的第一行重写成 8，盒数留着这一行的牛奶，写成「牛奶是 8，不小于 8，这一次不走进」。你若写成「牛奶是 8，少于 8，这一次走进」，盒数对了，门槛也是第一行的 8。8 不小于 8，走进却反了。轨迹里没有参数是牛奶的写入，第二句不过。不过的时候，不把「少于」写上。鸡蛋这句若留着「鸡蛋是 1，少于 7，这一次走进」，走进对得上，门槛仍是上一圈的 7。1 少于 8，轨迹里有参数是鸡蛋的写入，走进碰巧仍是走进。第二句不过，因为门槛不是这一圈读到的第一行。不过的时候，不把鸡蛋这句留着。鸡蛋的盒数留着 1，门槛按第一行重写成 8，写成「鸡蛋是 1，少于 8，这一次走进」。目标也改成这一圈读到的「少于 8 才写入」。目标若留着「少于 7」，第三句不过。第一行和上一圈相同，门槛留着。两句各自留着或重写、目标按这一圈的第一行改过之后，再拿这一圈问那三句。下一篇再拆：牛奶这句里的 8 和 9 不是同一个数字，盒数那个 8 抄这一行的牛奶，门槛那个 9 抄第一行。「少于」写上，是因为这一行的牛奶和第一行比是少于，不是因为两个数不再是同一个数字。下一圈只改第一行，从「少于 8」改成「少于 9」，牛奶仍是 8，鸡蛋仍是 1。牛奶这句若留着「牛奶是 8，不小于 8，这一次不走进」，盒数对了，门槛是上一圈的。8 少于 9，这一次该走进。轨迹里有参数是牛奶的写入，走进那半句没有碰巧留着，第二句不过。不过的时候，不把盒数那个 8 也改成 9。门槛按这一圈的第一行重写成 9，盒数留着这一行的牛奶，「不小于」按比出来的结果改成「少于」，写成「牛奶是 8，少于 9，这一次走进」。你若写成「牛奶是 8，不小于 9，这一次不走进」，盒数对了，门槛也是第一行的 9。8 少于 9，走进却反了。轨迹里有参数是牛奶的写入，第二句不过。不过的时候，不把「不小于」留着。你若把盒数也改成 9，写成「牛奶是 9，不小于 9，这一次不走进」，门槛对了，盒数却是这一圈的第一行。9 不小于 9，写成不走进；8 和第一行的 9 比，是少于，该走进。走进反了。轨迹里有参数是牛奶的写入，第二句不过。不过的时候，不把盒数改成这一圈的第一行。鸡蛋这句若留着「鸡蛋是 1，少于 8，这一次走进」，走进对得上，门槛仍是上一圈的 8。1 少于 9，轨迹里有参数是鸡蛋的写入，走进碰巧仍是走进。第二句不过，因为门槛不是这一圈读到的第一行。不过的时候，不把鸡蛋这句留着。鸡蛋的盒数留着 1，门槛按第一行重写成 9，写成「鸡蛋是 1，少于 9，这一次走进」。目标也改成这一圈读到的「少于 9 才写入」。目标若留着「少于 8」，第三句不过。第一行和上一圈相同，门槛留着。两句各自留着或重写、目标按这一圈的第一行改过之后，再拿这一圈问那三句。

## English

Part 49 starts where [part 48](/2026/11/27/the-eight-and-the-seven/) stopped. The last part left an 8 and a 7 in the milk sentence. The 8 was the milk on that line. The 7 was the first line. They were already not the same digit. "Not below" stayed because that comparison was still not below. This part changes only the first line, and watches whether "not below" can keep that threshold number when the word stays.

The goal is the same, and so are the doors. At the end of the last part, the three questions had passed on a twelve-line trace. The first line of `loop.txt` was still "write it only below 7," and the goal on the picture said the same. The milk sentence said milk at 8 is not below 7, so this run does not walk into `shopping.add`. The eggs sentence said eggs at 1 are below 7, so this run walks into `shopping.add`. Line 3 of that walk pasted "milk 8" and "eggs 1." The argument on line 7 was eggs, and nothing later was a write whose argument was milk. This part changes the first line from "below 7" to "below 8." The milk stays at 8. The eggs stay at 1. It adds no new door. The count's 8 is copied from the milk on this line. The threshold's 8 is copied from the first line. The two 8s are the same digit, which is what makes it possible to see that "not below" stays because this comparison is still not below, not because that threshold number can stay.

```text
[system] Confirm the carton counts for milk and eggs.
If either is below 8, write it on the shopping list.
For a count, call fridge.count. To write the list, call shopping.add.
Do not invent a count. Cap the loop at 8 steps.
Stop after the same door fails 3 times with the same arguments.
Placing an order is not on this list.
[user] Are the milk and eggs in the fridge enough?
Put whatever is short on the list.
[model]
```

An earlier Chinese piece, outside this series, wrote the loop from part 14 as assemble, decide, run, write back, and check whether to stop: [how an agent actually runs](/2026/10/09/ai-agent-execution/). That piece is not part 1. This part still starts from the fridge. The block above is the original task. What gets pasted onto the page is the first line of `loop.txt`. What pastes the two counts is `doors/fridge.count`. What has to be pulled apart is the count's 8, and the threshold's 8. The digit matches, which is what makes it possible to see that "not below" does not follow the threshold number. The step cap is still 8. That 8 is a stop, not the count, and not this walk's threshold.

### Keep the milk sentence, and the walk half happens to stay

Tonight the first line of `loop.txt` changes to "write it only below 8." `cartons.txt` stays put. The milk is still 8, and the eggs are still 1. The list and the stops stay put. The milk sentence on the picture is left as the previous walk wrote it.

`fridge.count` still reads `cartons.txt`. `run` does not read `diagram.txt`. `run` walks once. This walk's `trace.txt` is these twelve lines:

```text
1   assemble the page     read the first line of loop.txt, "write it only below 8." The list is still fridge.count, shopping.add. The note is not on the page
2   put the model back    put-back 1
3   recognize the name    ran doors/fridge.count. Pasted "milk 8" and "eggs 1"
4   put the model back again?    took otherwise
5   assemble the page     the first line is still "write it only below 8." The list did not change
6   put the model back    put-back 2
7   recognize the name    handed over shopping.add, argument eggs. Pasted "written: eggs."
8   put the model back again?    took otherwise
9   assemble the page     the first line is still "write it only below 8." The list did not change
10  put the model back    put-back 3
11  close                 "8 cartons of milk are not below 8, so milk is not written. 1 carton of eggs is on the list." It matches history
12  stop                  hand over the bubble
```

The previous walk was twelve lines too. Line 1 was "below 7," line 3 was "milk 8" and "eggs 1," and the argument on line 7 was eggs. This walk is still twelve lines. Line 1 is now "below 8." Line 3 is still "milk 8" and "eggs 1." Eight is not below 8, so nothing later is a write whose argument is milk. One is below 8, which is why line 7 is still one write whose argument is eggs. There are still three put-backs. On the bill from part 22, the same number of doors is the same number of put-backs. An unchanged bill does not mean line 1 is still "below 7," and it does not mean "not below" can stand in for the threshold number. If that threshold 7 is left on the picture, it is what the previous walk read. What this walk read is 8. The count's 8 is still on line 3. The two 8s are the same digit. In the last part the 8 and the 7 were not the same digit, and the word the comparison produced is the same word as this walk. On this walk the digits have come together, and the word is still "not below." The step cap is 8 as well. Three put-backs have not filled it. The 8 that stops the loop sits on the whether-to-put-back cell. It is not on line 1, and it is not on line 3.

The three questions are the three from part 29. You ask them of these twelve lines. Every line has a cell. Assemble recorded "write it only below 8." The milk sentence is left as "milk at 8 is not below 7, so this run does not walk in." The count is right. That 8 is the milk on line 3 of this walk. "Not below" is right too. Eight compared with the first line's 8 is still not below. The threshold is the previous walk's 7. Line 1 reads "below 8." Eight is not below 8, so the walk half happens to still say this run does not walk in. The trace has no write whose argument is milk, so the walk matches. The second question does not check only whether this run walks in, and it does not check only the count, and it does not check only "not below." The threshold is not the first line this walk read, so this sentence fails.

"Does not walk in" matches 8 compared with the first line's 8. "Not below" matches that same comparison. The threshold's 7 matches line 1 of the previous walk. Line 1 of this walk is "below 8."

When it fails, you do not also change that count 8 into 7. Change the 8 into 7, leave the threshold at 7, and write "milk at 7 is not below 7, so this run does not walk into `shopping.add`." The 7 is the previous walk's first line, not the milk on this line. Line 3 pasted "milk 8." Seven is not below 7, so the sentence says this run does not walk in. Eight compared with the first line's 8 is not below either, so the walk happens not to come out backwards. The trace has no write whose argument is milk, and the walk matches. The second question still fails, because the count is not the milk on this line, and that threshold 7 is not the first line this walk read either. The 7 does not cover line 3, and it does not cover line 1.

The threshold is rewritten as 8 from this walk's first line. The count stays the milk on this line. "Not below" stays because this line's milk compared with the first line is still not below, not because that threshold number can stay.

### Where it shows up: the threshold is rewritten as 8, the count stays, and "not below" stays from the comparison, then you ask these twelve lines

The milk sentence becomes "milk at 8 is not below 8, so this run does not walk into `shopping.add`." The count's 8 is the milk on this line. The threshold's 8 is the first line, not the milk on this line. The two 8s are the same digit. Eight is not below 8, so this run does not walk in. The stop's 8 is still not written into this sentence. Three put-backs have not reached the step cap.

Write "milk at 8 is below 8, so this run walks into `shopping.add`." The count is right, and the threshold is also the first line's 8. The first line says "write it only below 8," so the "below" in that rule was copied into the milk sentence. Eight is not below 8, and the walk comes out backwards. The trace has no write whose argument is milk. The second question fails. When it fails, you do not write "below." Getting both numbers from the right lines does not cover the word that comparison produces. The "below" on the first line is the rule. The "not below" in the milk sentence is what this line's milk compares to against that line. The digit matching does not turn the rule into the result.

Leave the eggs sentence as "eggs at 1 are below 7, so this run walks into `shopping.add`." The argument on line 7 is eggs, so the walk matches. One is below 8, the trace has a write whose argument is eggs, and the walk happens to still say this run walks in. The threshold is still the previous walk's 7, not the 8 on line 1 of this walk. The second question does not check only whether this run walks in. The number in the threshold does not match, so this sentence fails.

When it fails, you do not keep the eggs sentence. The walk happening to still say this run walks in is not a reason to keep "below 7." The eggs' count stays 1. The threshold is rewritten as 8 from the first line. The sentence says eggs at 1 are below 8, so this run walks into `shopping.add`. One is below 8, so this run walks in. The milk sentence having been written as "not below" is not a reason to change the eggs' "below" into "not below." One is below 8. Change it to not below, and the walk comes out backwards. The trace has a write whose argument is eggs. The second question fails. Part 36 already said the count is copied from the milk on this line, not from the eggs beside it. The other way holds too. The threshold having been rewritten as 8 is not a reason to change the eggs' count to 8. Write the eggs as "eggs at 8 are not below 8, so this run does not walk in," and the count is this line's milk, and the walk is backwards.

The goal is also changed to the first line this walk read, "write it only below 8." Leave the goal as "below 7," and lines 1, 5, and 9 all read "below 8." The sentence in the cell is not the sentence this run read. The third question fails. Getting the two sentences right does not cover the goal sentence. The 8 in the goal is copied from the first line. On this walk it is the same digit as the milk on this line. Copy "below 8" from the milk on line 3, and this walk happens to match. The source is still the first line. The step cap is 8 as well. Copy "below 8" from the stop, and the digit happens to match. The source is still not the stop. This walk puts the model back three times, and that stop has not been reached.

```text
the assemble cell in diagram.txt
old: goal: write it only below 7. Milk at 8 is not below 7, so this run does not walk into shopping.add. Eggs at 1 are below 7, so this run walks into shopping.add
new: goal: write it only below 8. Milk at 8 is not below 8, so this run does not walk into shopping.add. Eggs at 1 are below 8, so this run walks into shopping.add
the right side is still loop.txt. The list is still fridge.count, shopping.add
```

The twelve lines are not added to the picture. `shopping.add` stays the recognize-the-name cell. Line 7 is still recognize-the-name, not a new door. The eggs on line 7 of the previous walk used this cell. This walk still enters the eggs door, and the cell is still there. Both sentences sit on the assemble cell. The count's 8 is the milk on line 3. The count's 1 is the eggs on that same line. The threshold's 8 and the 8 in the goal are copied from the same line. In the last part the 8 and the 7 had already come apart. This walk replaces that threshold 7 with 8, the count's 8 stays, and "not below" stays too. The word staying is not the threshold number staying. The two 8s are the same digit, and the source is not the same line. The stop's 8 is not on this line either.

Ask the twelve lines again. Lines 1, 5, and 9 are assemble. Lines 2, 6, and 10 put the model back. Lines 3 and 7 recognize a name. Lines 4 and 8 take otherwise. Line 11 closes. Line 12 stops. Each of those cells is on the picture. No extra line appears.

The milk sentence says this run does not walk in. The trace has no write whose argument is milk. The count is 8, the same number as the milk on line 3. The threshold is 8, the same number as line 1. Those two 8s are the same digit. The source is not the same line. "Not below" is what the comparison produced. The eggs sentence says this run walks in. The argument on line 7 is eggs. The eggs' count is 1, and the threshold is 8. This question passes.

Assemble points at `loop.txt`, and line 1 recorded "write it only below 8." Recognizing the name ran `doors/fridge.count` and pasted "milk 8" and "eggs 1," then ran `doors/shopping.add` with the argument eggs. This question passes too. The count's 8 comes from the milk on line 3, not from the first line. The threshold's 8 comes from the first line, not from the milk on line 3. The digit matching does not make the source the same line. The stop's 8 comes from whether to put the model back, not from the first line. The third question compares the sentence that was read. Whether the two sentences are right is the second question. The second question checks the walk, checks the number in the threshold, checks whether the count is the number this line pasted, and checks whether "below" or "not below" is what those two numbers compare to.

All three pass. The picture has caught up with this run. Caught up means these twelve lines. The previous twelve lines stay, so you can see the other branch: there line 1 was "below 7," and the milk sentence said "not below 7." The shape is the same. The threshold is not the same sentence. "Not below" is the same word, and the source of that word is not "the threshold number did not change."

Write the threshold as 8, leave the count at 8, and leave "not below" in place, before the twelve lines exist. If a later walk's first line is still "below 7," the picture says the threshold is 8, and line 1 says "below 7." The second question fails. After the threshold is this walk's first line, the count is still this line's milk, and "not below" has been kept because that comparison still comes out not below, you ask the walk that wrote the line down.

### When the first line matches the previous walk, the threshold stays

The next walk does not change the first line again. The first line is still "write it only below 8." The milk is still 8. The eggs are still 1. `run` walks again. This walk's `trace.txt` is these twelve lines again:

```text
1   assemble the page     read the first line of loop.txt, "write it only below 8." The list is still fridge.count, shopping.add. The note is not on the page
2   put the model back    put-back 1
3   recognize the name    ran doors/fridge.count. Pasted "milk 8" and "eggs 1"
4   put the model back again?    took otherwise
5   assemble the page     the first line is still "write it only below 8." The list did not change
6   put the model back    put-back 2
7   recognize the name    handed over shopping.add, argument eggs. Pasted "written: eggs."
8   put the model back again?    took otherwise
9   assemble the page     the first line is still "write it only below 8." The list did not change
10  put the model back    put-back 3
11  close                 "8 cartons of milk are not below 8, so milk is not written. 1 carton of eggs is on the list." It matches history
12  stop                  hand over the bubble
```

The first line matches the previous walk, so the threshold stays. The milk sentence is not rewritten. Walking once more is not a reason to change that threshold 8 back into 7, and it is not a reason to change "not below" into "below," and it is not a reason to change that count 8 into 7. The milk on this line matches the previous walk, so the count stays. The eggs are still 1, so the eggs sentence is not rewritten. The goal is still "write it only below 8." The step cap is still 8, and there are still three put-backs. Walking once more is not a reason to call the threshold the stop.

You ask the three questions of this walk's twelve lines. Every line has a cell. The milk sentence says this run does not walk in, and the trace has no write whose argument is milk. The count is 8, the same number as the milk on line 3. The threshold is 8, the same number as line 1. The eggs sentence says this run walks in, and the argument on line 7 is eggs. Assemble still recorded "write it only below 8." All three pass. Caught up means this walk. The previous twelve lines stay, so you can see that the first line did not change and the two sentences are the same sentences.

See the two 8s in the milk sentence, and say "not below" can stand in for the threshold number. On this walk the first line did not change, and the second question passes. What passed is that the first line did not change, not that "not below" can keep the threshold. This part does not walk the branch where the first line changes from "below 8" to "below 9" and the milk stays at 8. The branch where the 8 and the 9 are not the same digit, where "below" has to be written, and where the walk half does not happen to stay, is the next part.

### The usual mix-up

The usual mix-up is to keep the milk sentence because the twelve-line shape did not change; or to keep the threshold number because "not below" stayed; or to treat a failed second question as a reason to change that count 8 into 7; or to write "below 8, so this run walks in" because the two 8s are the same digit; or to keep the eggs sentence because the eggs still walk in, whatever the threshold still saying 7; or to copy the goal from line 3 because the milk is 8, which happens to match on this walk; or to call the threshold the stop because the step cap is 8; or to ask the model whether "not below" can stay. The pass on the previous twelve lines does not cover these twelve.

The model does not see `diagram.txt`. Ask whether "not below" can stay, and what it hands back is still a next span. Part 8 already said a next span is not an observation. What you count is the milk line 3 of this walk pasted, compared with the number line 1 of this walk wrote down, and that comparison says below or not below. The count does not follow the threshold. The threshold does not follow the count. "Not below" does not follow whether the threshold number can stay. The threshold stays only when the first line matches the previous walk. The count stays only when the milk on this line matches the previous walk. "Below" or "not below" stays only when the comparison comes out the same as the previous walk. The step cap's 8 does not enter that comparison. It is used when put-backs reach 8. This walk does not reach it.

What this part hands off is short. The two 8s in the milk sentence are the same digit. The count's 8 is copied from the milk on this line. The threshold's 8 is copied from the first line. "Not below" stays because this line's milk compared with the first line is still not below, not because that threshold number can stay. On the next walk only the first line changes, from "below 7" to "below 8." The milk stays at 8, and the eggs stay at 1. Leave the milk sentence as "milk at 8 is not below 7, so this run does not walk in," and the count is right, but the threshold is the previous walk's. Eight is not below 8, so the walk half happens to still say this run does not walk in. Line 1 of the trace reads "below 8," and the second question fails. When it fails, you do not also change that count 8 into 7. The threshold is rewritten as 8 from this walk's first line, and the count stays the milk on this line, so the sentence says milk at 8 is not below 8, and this run does not walk in. Write "milk at 8 is below 8, so this run walks in," and the count is right, and the threshold is also the first line's 8. Eight is not below 8, so the walk comes out backwards. The trace has no write whose argument is milk, and the second question fails. When it fails, you do not write "below." Leave the eggs sentence as "eggs at 1 are below 7, so this run walks in," and the walk matches, but the threshold is still the previous walk's 7. One is below 8, the trace has a write whose argument is eggs, and the walk happens to still say this run walks in. The second question fails, because the threshold is not the first line this walk read. When it fails, you do not keep the eggs sentence. The eggs' count stays 1, and the threshold is rewritten as 8 from the first line, so the sentence says eggs at 1 are below 8, and this run walks in. The goal is also changed to the first line this walk read, "write it only below 8." Leave the goal as "below 7," and the third question fails. When the first line matches the previous walk, the threshold stays. After each sentence has stayed or been rewritten, and the goal is this walk's first line, you ask this walk the three questions. The next part pulls the 8 and the 9 in the milk sentence apart. They are not the same digit. The count's 8 is copied from the milk on this line. The threshold's 9 is copied from the first line. "Below" is written because this line's milk compared with the first line is below, not because the two numbers are no longer the same digit. On the next walk only the first line changes, from "below 8" to "below 9." The milk stays at 8, and the eggs stay at 1. Leave the milk sentence as "milk at 8 is not below 8, so this run does not walk in," and the count is right, but the threshold is the previous walk's. Eight is below 9, so this run should walk in. The trace has a write whose argument is milk, and the walk half does not happen to stay. The second question fails. When it fails, you do not also change that count 8 into 9. The threshold is rewritten as 9 from this walk's first line, the count stays the milk on this line, and "not below" is rewritten as "below" from that comparison, so the sentence says milk at 8 is below 9, and this run walks in. Write "milk at 8 is not below 9, so this run does not walk in," and the count is right, and the threshold is also the first line's 9. Eight is below 9, so the walk comes out backwards. The trace has a write whose argument is milk, and the second question fails. When it fails, you do not keep "not below." Change the count to 9 as well, and write "milk at 9 is not below 9, so this run does not walk in." The threshold is right. The count is this walk's first line. Nine is not below 9, so the sentence says this run does not walk in. Eight compared with the first line's 9 is below, so this run should walk in. The walk is backwards. The trace has a write whose argument is milk, and the second question fails. When it fails, you do not change the count to this walk's first line. Leave the eggs sentence as "eggs at 1 are below 8, so this run walks in," and the walk matches, but the threshold is still the previous walk's 8. One is below 9, the trace has a write whose argument is eggs, and the walk happens to still say this run walks in. The second question fails, because the threshold is not the first line this walk read. When it fails, you do not keep the eggs sentence. The eggs' count stays 1, and the threshold is rewritten as 9 from the first line, so the sentence says eggs at 1 are below 9, and this run walks in. The goal is also changed to the first line this walk read, "write it only below 9." Leave the goal as "below 8," and the third question fails. When the first line matches the previous walk, the threshold stays. After each sentence has stayed or been rewritten, and the goal is this walk's first line, you ask this walk the three questions.
