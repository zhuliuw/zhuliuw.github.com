---
title: "牛奶这句里两个 7 是同一个数字，盒数那个 7 抄这一行的牛奶，门槛那个 7 抄第一行。「少于」还是「不小于」按这一行的牛奶和第一行比，不按门槛那个数变没变。下一圈只改牛奶，从 6 改成 7，第一行仍是「少于 7」，鸡蛋仍是 1。牛奶这句若留着「牛奶是 6，少于 7，这一次走进」，门槛对了，盒数是上一圈的。7 不小于 7，这一次不该走进。轨迹里没有参数是牛奶的写入，走进那半句没有碰巧留着，第二句不过。不过的时候，不把门槛那个 7 改成 6，也不把「少于」留着。盒数按这一行的牛奶重写成 7，门槛留着第一行的 7，写成「牛奶是 7，不小于 7，这一次不走进」。你若写成「牛奶是 7，少于 7，这一次走进」，盒数对了，门槛也是第一行的 7。7 不小于 7，走进却反了。轨迹里没有参数是牛奶的写入，第二句不过。不过的时候，不把「少于」留着。你若只把走进改成不走进、盒数留着 6，写成「牛奶是 6，少于 7，这一次不走进」，6 少于 7，按句里的两个数该走进，写成不走进，这一句自己反了。盒数是上一圈的。轨迹里没有参数是牛奶的写入，走进那半句和轨迹对得上，第二句仍不过，因为盒数不是这一行的牛奶。不过的时候，不把盒数留着。鸡蛋这句的门槛仍是第一行，盒数仍只看这一行的鸡蛋。第一行和上一圈相同，鸡蛋仍是 1，鸡蛋这句留着，目标也留着「少于 7 才写入」。目标若改成「少于 6」，第三句不过。这一行的牛奶和上一圈相同，盒数留着。牛奶这句按这一行的牛奶重写盒数、走进按比出来的结果重写、门槛留着之后，再拿这一圈问那三句"
description: "牛奶这句里两个 7 是同一个数字：盒数按这一行的牛奶重写成 7，门槛留着第一行的 7；牛奶从 6 改成 7 时，「少于」按比出来的结果改成「不小于」，不按门槛那个数变没变。 The two 7s in the milk sentence are the same digit: the count is rewritten as 7 from this line's milk, and the threshold stays the first line's 7; when milk changes from 6 to 7, below is rewritten as not below from that comparison, not from whether the threshold number changed."
pubDate: 2026-11-26
slug: 2026/11/26/the-two-sevens
category: AI 系列
tags:
  - AI 系列
  - AI
draft: false
---

AI 系列第 47 篇。上一篇：[牛奶这句里的 6 和 7 不是同一个数字，盒数那个 6 抄这一行的牛奶，门槛那个 7 抄第一行。「少于」写上，是因为这一行的牛奶和第一行比是少于，不是因为两个数不再是同一个数字。下一圈只改第一行，从「少于 6」改成「少于 7」，牛奶仍是 6，鸡蛋仍是 1。牛奶这句若留着「牛奶是 6，不小于 6，这一次不走进」，盒数对了，门槛是上一圈的。6 少于 7，这一次该走进。轨迹里有参数是牛奶的写入，走进那半句没有碰巧留着，第二句不过。不过的时候，不把盒数那个 6 也改成 7。门槛按这一圈的第一行重写成 7，盒数留着这一行的牛奶，「不小于」按比出来的结果改成「少于」，写成「牛奶是 6，少于 7，这一次走进」。你若写成「牛奶是 6，不小于 7，这一次不走进」，盒数对了，门槛也是第一行的 7。6 少于 7，走进却反了。轨迹里有参数是牛奶的写入，第二句不过。不过的时候，不把「不小于」留着。你若把盒数也改成 7，写成「牛奶是 7，不小于 7，这一次不走进」，门槛对了，盒数却是这一圈的第一行。7 不小于 7，写成不走进；6 和第一行的 7 比，是少于，该走进。走进反了。轨迹里有参数是牛奶的写入，第二句不过。不过的时候，不把盒数改成这一圈的第一行。鸡蛋这句若留着「鸡蛋是 1，少于 6，这一次走进」，走进对得上，门槛仍是上一圈的 6。1 少于 7，轨迹里有参数是鸡蛋的写入，走进碰巧仍是走进。第二句不过，因为门槛不是这一圈读到的第一行。不过的时候，不把鸡蛋这句留着。鸡蛋的盒数留着 1，门槛按第一行重写成 7，写成「鸡蛋是 1，少于 7，这一次走进」。目标也改成这一圈读到的「少于 7 才写入」。目标若留着「少于 6」，第三句不过。第一行和上一圈相同，门槛留着。两句各自留着或重写、目标按这一圈的第一行改过之后，再拿这一圈问那三句](/2026/11/25/the-six-and-the-seven/)。上一篇停在一句：牛奶这句里的 6 是这一行的牛奶，7 是第一行。这两个数已经不是同一个数字。「少于」写上，是这一比是少于，不是因为两个数不再是同一个数字。这一篇只改牛奶，看「少于」会不会因为门槛那个 7 没变就留着。

## 中文

还是那句目标，还是那几扇门。上一篇结束时，三句在那份十六行上过了。`loop.txt` 的第一行仍是「少于 7 才写入」，图上目标也是这一句。牛奶这句是「牛奶是 6，少于 7，这一次走进 `shopping.add`」。鸡蛋这句是「鸡蛋是 1，少于 7，这一次走进 `shopping.add`」。那一圈第 3 行贴的是「牛奶 6」「鸡蛋 1」，第 7 行的参数是牛奶，第 11 行的参数是鸡蛋。这一篇只改牛奶，从 6 改成 7。第一行仍是「少于 7」。鸡蛋仍是 1。不添新的门。两个 7 写在同一句里，来源不是同一行。盒数那个 7 抄这一行的牛奶。门槛那个 7 抄第一行。「少于」还是「不小于」，按这两个数比，不按门槛那个数变没变。

```text
[系统] 确认牛奶和鸡蛋的盒数。少于 7 盒的写进购物清单。
盒数请调用 fridge.count。写清单请调用 shopping.add。
不要编造盒数。步数上限 8。同一扇门同一组参数失败 3 次就停。
下单不在这份名单里。
[用户] 冰箱里牛奶和鸡蛋够不够？不够的列进清单。
[模型]
```

第十四篇那一圈，更早的中文单篇写成过组装、决定、执行、写回、检查是否停止：[AI 智能体的执行原理](/2026/10/09/ai-agent-execution/)。那一篇不算本系列的第一篇。这一篇仍从冰箱写起。开头那一块是原来的任务。拼上页的是 `loop.txt` 的第一行。贴上两个数的是 `doors/fridge.count`。要分开的是盒数那个 7，和门槛那个 7。数字相同，才看得出「少于」不是跟着门槛那个数走的。上一篇里 6 和 7 已经分开，「少于」是比出来的。这一圈两个 7 合到同一个数字上，比出来的词仍不跟着门槛那个数变没变走。

### 牛奶这句留着，走进那半句没有碰巧留着

今晚把 `cartons.txt` 的牛奶从 6 改成 7。鸡蛋仍是 1。第一行、名单、停都不动。图上牛奶这句先留着上一圈那句。

`fridge.count` 仍去读 `cartons.txt`。`run` 不读 `diagram.txt`。`run` 走一圈。这一圈的 `trace.txt` 是这十二行：

```text
1   拼页      读 loop.txt 第一行「少于 7 才写入」。名单仍是 fridge.count，shopping.add。页上没有注
2   放回模型  放回次数 1
3   认名字    跑了 doors/fridge.count。贴上「牛奶 7」「鸡蛋 1」
4   还放回吗  走否则
5   拼页      第一行仍是「少于 7 才写入」。名单没变
6   放回模型  放回次数 2
7   认名字    交出 shopping.add，参数是鸡蛋。贴上「已写入：鸡蛋。」
8   还放回吗  走否则
9   拼页      第一行仍是「少于 7 才写入」。名单没变
10  放回模型  放回次数 3
11  收口      「牛奶 7 盒，不小于 7，不写。鸡蛋 1 盒已列进清单。」和 history 对得上
12  停        气泡交出去
```

上一圈是十六行。第 3 行是「牛奶 6」「鸡蛋 1」，第 7 行参数是牛奶，第 11 行参数是鸡蛋。这一圈是十二行。第 3 行换成「牛奶 7」「鸡蛋 1」。第一行仍是「少于 7」。7 不小于 7，后面没有参数是牛奶的写入。1 少于 7，第 7 行是一次参数是鸡蛋的写入。放回少一次，是少走一扇门。第二十二篇那笔账上，少一扇门就少一次放回。少的那一次不改门槛抄哪一行。门槛那个 7 仍在第 1 行。盒数那个 7 在第 3 行。两个 7 是同一个数字。6 是上一圈的盒数。这一圈的盒数已经是 7。

三句是第二十九篇那三句。问的是这十二行。每一行都有格。拼页记下的仍是「少于 7 才写入」。牛奶这句留着「牛奶是 6，少于 7，这一次走进」。门槛对了，这个 7 是这一圈的第一行。盒数是上一圈的 6。第 3 行贴的是「牛奶 7」。7 不小于 7，这一次不该走进。轨迹里没有参数是牛奶的写入。走进那半句没有碰巧留着。上一篇里 6 少于 7，写成走进，轨迹里也有牛奶的写入。这一圈对不上。第二句不过。

「走进」对得上的是 6 和第一行的 7。这一圈读到的牛奶是 7。7 和 7 比，是不小于。第 7 行的参数是鸡蛋，没有参数是牛奶的写入。

不过的时候，不把门槛那个 7 改成 6，也不把「少于」留着。门槛改成 6，写成「牛奶是 7，不小于 6，这一次不走进 `shopping.add`」。7 是这一行的牛奶，盒数对了。门槛却是上一圈的盒数，不是第一行。7 不小于 6，写成不走进。7 和第一行的 7 比，也是不小于。走进碰巧没反。轨迹里没有参数是牛奶的写入，走进对得上。第二句仍不过，因为门槛不是这一圈读到的第一行。6 盖不住第 1 行。

盒数按这一行的牛奶重写成 7。门槛留着第一行的 7。「少于」还是「不小于」，按这一行的牛奶和第一行比。7 不小于 7，这一次不走进。

### 盒数重写成 7，「少于」不留着，再问这十二行

牛奶这句写成「牛奶是 7，不小于 7，这一次不走进 `shopping.add`」。盒数那个 7 是这一行的牛奶。门槛那个 7 是第一行，不是这一行的牛奶。两个 7 是同一个数字。7 不小于 7，这一次不走进。

你若写成「牛奶是 7，少于 7，这一次走进 `shopping.add`」。盒数对了，门槛也是第一行的 7。门槛那个数没变，你把「少于」留着。7 不小于 7，走进却反了。轨迹里没有参数是牛奶的写入。第二句不过。不过的时候，不把「少于」留着。两个数都抄对了，盖不住比出来的那一个词。上一篇里「少于」写上，是 6 和 7 比出来的，不是因为两个数不再是同一个数字。这一圈两个 7 是同一个数字，「少于」仍不能留着。数字相同，也不替你把规则抄成结果。

你若只把走进改成不走进，盒数留着 6，写成「牛奶是 6，少于 7，这一次不走进 `shopping.add`」。6 少于 7，按句里的两个数该走进，写成不走进，这一句自己反了。盒数是上一圈的。轨迹里没有参数是牛奶的写入，走进那半句和轨迹对得上。第二句仍不过，因为盒数不是这一行的牛奶。不过的时候，不把盒数留着。和第二句对得上的那半句，补不回第 3 行的 7。

鸡蛋这句不重写。第一行和上一圈相同，鸡蛋仍是 1。鸡蛋这句留着「鸡蛋是 1，少于 7，这一次走进 `shopping.add`」。鸡蛋的门槛仍是第一行。鸡蛋的盒数仍只看这一行的鸡蛋。第三十六篇写过：盒数抄这一行的牛奶，不抄同一行的鸡蛋。反过来也一样。不因为牛奶写成了 7，就把鸡蛋的盒数改成 7，也不把鸡蛋的「少于 7」改成「不小于 7」。1 少于 7，这一次走进。第 7 行的参数是鸡蛋。鸡蛋若写成「鸡蛋是 7，不小于 7，这一次不走进」，盒数是这一行的牛奶，走进反了。轨迹里有参数是鸡蛋的写入。第二句不过。

目标仍是「少于 7 才写入」。目标若改成「少于 6」，第 1 行、第 5 行、第 9 行都是「少于 7」。格子里的句子不是这一次读到的句子。第三句不过。牛奶这句改对了，盖不住目标那一句。6 是上一圈的盒数，不是这一圈的第一行。

```text
diagram.txt 里拼页那一格
旧：目标：少于 7 才写入。牛奶是 6，少于 7，这一次走进 shopping.add。鸡蛋是 1，少于 7，这一次走进 shopping.add
新：目标：少于 7 才写入。牛奶是 7，不小于 7，这一次不走进 shopping.add。鸡蛋是 1，少于 7，这一次走进 shopping.add
右边仍是 loop.txt。名单仍是 fridge.count，shopping.add
```

十二行不添到图上。少掉的那四行也不从图上拆掉一格。`shopping.add` 仍是认名字那一格。第 7 行仍是认名字，不是新的门。上一圈第 7 行的牛奶和第 11 行的鸡蛋，走的是同一格。这一圈没走进牛奶，格还在。两句都写在拼页那一格上。盒数那个 7 是第 3 行的牛奶。盒数那个 1 是同一行的鸡蛋。门槛那个 7 和目标里的 7 是同一行抄来的。上一篇里 6 和 7 已经分开，「少于」是那一比写上的。这一圈把 6 换成了 7，门槛那个 7 仍留着。两个 7 写成同一个数字，「少于」改成了「不小于」。词改了，是这一比改了，不是因为门槛那个 7 没变。

再问这十二行。1、5、9 是拼页，2、6、10 是放回，3 和 7 是认名字，4 和 8 是否则，11 是收口，12 是停。都有。没有多出来的一行。

牛奶这句说不走进。轨迹里没有参数是牛奶的写入。盒数是 7，和第 3 行的牛奶是同一个数。门槛是 7，和第 1 行是同一个数。这两个 7 是同一个数字。来源不是同一行。「不小于」是比出来的。鸡蛋这句说走进。第 7 行的参数是鸡蛋。鸡蛋的盒数是 1，门槛是 7。这一句过了。

拼页指着 `loop.txt`，第 1 行记下的是「少于 7 才写入」。认名字先跑 `doors/fridge.count`，贴上「牛奶 7」「鸡蛋 1」，再跑 `doors/shopping.add`，参数是鸡蛋。这一句也过了。盒数的 7 来自第 3 行的牛奶，不来自第一行。门槛的 7 来自第一行，不来自第 3 行的牛奶。数字相同，不把来源说成同一行。第三句比的是读到的那一句。两句对不对，看的是第二句。第二句核对走进，核对门槛那个数，核对盒数是不是这一行贴上的那个数，也核对「少于」还是「不小于」是不是这两个数比出来的。

三句都过。图追上了这一次。追上说的是这十二行。上一圈那十六行留着，只用来比：那边第 3 行的牛奶是 6，第 7 行的参数是牛奶。形状少了四行，是少走了牛奶那一扇门。门槛不是从少掉的那四行里抄来的。「不小于」也不是从少掉的那四行里抄来的。

十二行还没有，你就把盒数写成 7、门槛留着 7、「少于」改成「不小于」。后来若仍贴「牛奶 6」，图说牛奶是 7，第 3 行是 6。第二句不过。盒数换成这一行的牛奶、门槛仍用第一行、「少于」按比出来的结果改过之后，要问写下这一行的那一圈。

### 这一行的牛奶和上一圈相同，盒数留着

后一圈不把牛奶再改。牛奶仍是 7。第一行仍是「少于 7 才写入」。鸡蛋仍是 1。`run` 再走。这一圈的 `trace.txt` 仍是这十二行：

```text
1   拼页      读 loop.txt 第一行「少于 7 才写入」。名单仍是 fridge.count，shopping.add。页上没有注
2   放回模型  放回次数 1
3   认名字    跑了 doors/fridge.count。贴上「牛奶 7」「鸡蛋 1」
4   还放回吗  走否则
5   拼页      第一行仍是「少于 7 才写入」。名单没变
6   放回模型  放回次数 2
7   认名字    交出 shopping.add，参数是鸡蛋。贴上「已写入：鸡蛋。」
8   还放回吗  走否则
9   拼页      第一行仍是「少于 7 才写入」。名单没变
10  放回模型  放回次数 3
11  收口      「牛奶 7 盒，不小于 7，不写。鸡蛋 1 盒已列进清单。」和 history 对得上
12  停        气泡交出去
```

这一行的牛奶和上一圈相同，盒数留着。牛奶这句不重写。不因为又走了一圈，就把 7 改回 6，也不把「不小于」改回「少于」。第一行和上一圈相同，门槛留着。鸡蛋仍是 1，鸡蛋这句不重写。目标仍是「少于 7 才写入」。

问的是这一圈的十二行。每一行都有格。牛奶这句说不走进，轨迹里没有参数是牛奶的写入。盒数是 7，和第 3 行的牛奶是同一个数。门槛是 7，和第 1 行是同一个数。鸡蛋这句说走进，第 7 行的参数是鸡蛋。拼页记下的仍是「少于 7 才写入」。三句都过。追上说的是这一圈。上一圈那十二行留着，只用来比：牛奶没变，两句是同一句。

你若看见牛奶这句里两个 7，把它们说成来自同一行，所以「不小于」可以跟着门槛那个数一起留着。这一圈第一行没变，牛奶也没变，第二句会过。过的是这一行的牛奶没变，不是两个 7 来自同一行。牛奶从 7 改成 8、第一行仍是「少于 7」的那一圈，这一篇先不走。8 和 7 不是同一个数字、「不小于」碰巧留着、盒数仍要重写的那一支，留给下一篇。

### 一个常见误会

误会是：两个 7 是同一个数字，来源就是同一行；或者门槛那个数没变，「少于」就留着；或者第二句不过，就把门槛那个 7 改成 6；或者两个数都抄对了，「少于」和走进就可以留着；或者只把走进改成不走进，盒数留着 6，因为轨迹里没有牛奶的写入；或者看见上一圈的牛奶是 6，就把目标改成「少于 6」；或者问模型「这一圈走不走进」。十六行上的通过盖不住这十二行。

模型看不见 `diagram.txt`。你问它走不走进，它交出来的仍是下一段。第八篇写过：下一段不是观察。算的是这一圈第 3 行贴上的牛奶，和这一圈第 1 行写下的那个数，比出少于还是不小于。盒数不跟着门槛改。门槛不跟着盒数改。「少于」不跟着门槛那个数变没变走。第一行和上一圈相同，门槛才留着。这一行的牛奶和上一圈相同，盒数才留着。比出来的结果和上一圈相同，「少于」或「不小于」才留着。

留下三句就够这一篇用：牛奶这句里两个 7 是同一个数字，盒数那个 7 抄这一行的牛奶，门槛那个 7 抄第一行。「少于」还是「不小于」按这一行的牛奶和第一行比，不按门槛那个数变没变。下一圈只改牛奶，从 6 改成 7，第一行仍是「少于 7」，鸡蛋仍是 1。牛奶这句若留着「牛奶是 6，少于 7，这一次走进」，门槛对了，盒数是上一圈的。7 不小于 7，这一次不该走进。轨迹里没有参数是牛奶的写入，走进那半句没有碰巧留着，第二句不过。不过的时候，不把门槛那个 7 改成 6，也不把「少于」留着。盒数按这一行的牛奶重写成 7，门槛留着第一行的 7，写成「牛奶是 7，不小于 7，这一次不走进」。你若写成「牛奶是 7，少于 7，这一次走进」，盒数对了，门槛也是第一行的 7。7 不小于 7，走进却反了。轨迹里没有参数是牛奶的写入，第二句不过。不过的时候，不把「少于」留着。你若只把走进改成不走进、盒数留着 6，写成「牛奶是 6，少于 7，这一次不走进」，6 少于 7，按句里的两个数该走进，写成不走进，这一句自己反了。盒数是上一圈的。轨迹里没有参数是牛奶的写入，走进那半句和轨迹对得上，第二句仍不过，因为盒数不是这一行的牛奶。不过的时候，不把盒数留着。鸡蛋这句的门槛仍是第一行，盒数仍只看这一行的鸡蛋。第一行和上一圈相同，鸡蛋仍是 1，鸡蛋这句留着，目标也留着「少于 7 才写入」。目标若改成「少于 6」，第三句不过。这一行的牛奶和上一圈相同，盒数留着。牛奶这句按这一行的牛奶重写盒数、走进按比出来的结果重写、门槛留着之后，再拿这一圈问那三句。下一篇再拆：牛奶这句里的 8 和 7 不是同一个数字，盒数那个 8 抄这一行的牛奶，门槛那个 7 抄第一行。「不小于」留着，是因为这一行的牛奶和第一行比仍是不小于，不是因为盒数可以留着。下一圈只改牛奶，从 7 改成 8，第一行仍是「少于 7」，鸡蛋仍是 1。牛奶这句若留着「牛奶是 7，不小于 7，这一次不走进」，门槛对了，盒数是上一圈的。8 不小于 7，走进那半句碰巧仍是不走进。轨迹第 3 行贴的是「牛奶 8」，第二句不过。不过的时候，不把门槛那个 7 也改成 8。盒数按这一行的牛奶重写成 8，门槛留着第一行的 7，写成「牛奶是 8，不小于 7，这一次不走进」。你若把两个数都改成 8，写成「牛奶是 8，不小于 8，这一次不走进」，盒数对了，门槛却是这一行的牛奶。8 不小于 8，写成不走进；8 和第一行的 7 比，也是不走进，走进碰巧没反。轨迹里没有参数是牛奶的写入，走进对得上，第二句仍不过，因为门槛不是这一圈读到的第一行。不过的时候，不把门槛改成这一行的牛奶。鸡蛋这句的门槛仍是第一行，盒数仍只看这一行的鸡蛋。第一行和上一圈相同，鸡蛋仍是 1，鸡蛋这句留着，目标也留着「少于 7 才写入」。目标若改成「少于 8」，第三句不过。这一行的牛奶和上一圈相同，盒数留着。牛奶这句按这一行的牛奶重写盒数、门槛留着、「不小于」按比出来的结果留着之后，再拿这一圈问那三句。

## English

Part 47 starts where [part 46](/2026/11/25/the-six-and-the-seven/) stopped. The last part left a 6 and a 7 in the milk sentence. The 6 was the milk on that line. The 7 was the first line. They were already not the same digit. "Below" was written because that comparison was below, not because the two numbers were no longer the same digit. This part changes only the milk, and watches whether "below" stays just because that threshold 7 did not change.

The goal is the same, and so are the doors. At the end of the last part, the three questions had passed on a sixteen-line trace. The first line of `loop.txt` was still "write it only below 7," and the goal on the picture said the same. The milk sentence said milk at 6 is below 7, so this run walks into `shopping.add`. The eggs sentence said eggs at 1 are below 7, so this run walks into `shopping.add`. Line 3 of that walk pasted "milk 6" and "eggs 1." The argument on line 7 was milk. The argument on line 11 was eggs. This part changes only the milk, from 6 to 7. The first line is still "below 7." The eggs stay at 1. It adds no new door. The two 7s sit in one sentence, and they do not come from the same line. The count's 7 is copied from the milk on this line. The threshold's 7 is copied from the first line. "Below" or "not below" comes from comparing those two numbers. It does not come from whether the threshold number changed.

```text
[system] Confirm the carton counts for milk and eggs.
If either is below 7, write it on the shopping list.
For a count, call fridge.count. To write the list, call shopping.add.
Do not invent a count. Cap the loop at 8 steps.
Stop after the same door fails 3 times with the same arguments.
Placing an order is not on this list.
[user] Are the milk and eggs in the fridge enough?
Put whatever is short on the list.
[model]
```

An earlier Chinese piece, outside this series, wrote the loop from part 14 as assemble, decide, run, write back, and check whether to stop: [how an agent actually runs](/2026/10/09/ai-agent-execution/). That piece is not part 1. This part still starts from the fridge. The block above is the original task. What gets pasted onto the page is the first line of `loop.txt`. What pastes the two counts is `doors/fridge.count`. What has to be pulled apart is the count's 7, and the threshold's 7. The digit matches, which is what makes it possible to see that "below" does not follow the threshold number. In the last part the 6 and the 7 had already come apart, and "below" was what that comparison produced. On this walk the two 7s meet on the same digit, and the word the comparison produces still does not follow whether the threshold number changed.

### Keep the milk sentence, and the walk half does not happen to stay

Tonight the milk in `cartons.txt` changes from 6 to 7. The eggs stay at 1. The first line, the list, and the stops stay put. The milk sentence on the picture is left as the previous walk wrote it.

`fridge.count` still reads `cartons.txt`. `run` does not read `diagram.txt`. `run` walks once. This walk's `trace.txt` is these twelve lines:

```text
1   assemble the page     read the first line of loop.txt, "write it only below 7." The list is still fridge.count, shopping.add. The note is not on the page
2   put the model back    put-back 1
3   recognize the name    ran doors/fridge.count. Pasted "milk 7" and "eggs 1"
4   put the model back again?    took otherwise
5   assemble the page     the first line is still "write it only below 7." The list did not change
6   put the model back    put-back 2
7   recognize the name    handed over shopping.add, argument eggs. Pasted "written: eggs."
8   put the model back again?    took otherwise
9   assemble the page     the first line is still "write it only below 7." The list did not change
10  put the model back    put-back 3
11  close                 "7 cartons of milk are not below 7, so milk is not written. 1 carton of eggs is on the list." It matches history
12  stop                  hand over the bubble
```

The previous walk was sixteen lines. Line 3 was "milk 6" and "eggs 1," the argument on line 7 was milk, and the argument on line 11 was eggs. This walk is twelve lines. Line 3 is now "milk 7" and "eggs 1." The first line is still "below 7." Seven is not below 7, so nothing later is a write whose argument is milk. One is below 7, which is why line 7 is one write whose argument is eggs. There is one fewer put-back, because the walk entered one fewer door. On the bill from part 22, one fewer door is one fewer put-back. That missing put-back does not change which line the threshold is copied from. The threshold's 7 is still on line 1. The count's 7 is on line 3. Those two 7s are the same digit. The 6 is the previous walk's count. This walk's count is already 7.

The three questions are the three from part 29. You ask them of these twelve lines. Every line has a cell. Assemble still recorded "write it only below 7." The milk sentence is left as "milk at 6 is below 7, so this run walks in." The threshold is right. That 7 is this walk's first line. The count is the previous walk's 6. Line 3 pasted "milk 7." Seven is not below 7, so this run should not walk in. The trace has no write whose argument is milk. The walk half does not happen to stay. In the last part, 6 was below 7, the sentence said this run walks in, and the trace had a write whose argument was milk. This walk does not match. The second question fails.

"Walks in" matches 6 compared with the first line's 7. The milk this walk read is 7. Seven compared with 7 is not below. The argument on line 7 is eggs, and there is no write whose argument is milk.

When it fails, you do not change that threshold 7 into 6, and you do not keep "below." Change the threshold to 6, and write "milk at 7 is not below 6, so this run does not walk into `shopping.add`." The 7 is the milk on this line, so the count is right. The threshold is the previous walk's count, not the first line. Seven is not below 6, so the sentence says this run does not walk in. Seven compared with the first line's 7 is not below either, so the walk happens not to come out backwards. The trace has no write whose argument is milk, and the walk matches. The second question still fails, because the threshold is not the first line this walk read. The 6 does not cover line 1.

The count is rewritten as 7 from the milk on this line. The threshold stays the first line's 7. "Below" or "not below" is the comparison of this line's milk with the first line. Seven is not below 7, so this run does not walk in.

### Where it shows up: the count is rewritten as 7, "below" does not stay, then you ask these twelve lines

The milk sentence becomes "milk at 7 is not below 7, so this run does not walk into `shopping.add`." The count's 7 is the milk on this line. The threshold's 7 is the first line, not the milk on this line. The two 7s are the same digit. Seven is not below 7, so this run does not walk in.

Write "milk at 7 is below 7, so this run walks into `shopping.add`." The count is right, and the threshold is also the first line's 7. The threshold number did not change, so "below" was left in place. Seven is not below 7, and the walk comes out backwards. The trace has no write whose argument is milk. The second question fails. When it fails, you do not keep "below." Getting both numbers from the right lines does not cover the word that comparison produces. In the last part "below" was written because 6 compared with 7 came out below, not because the two numbers were no longer the same digit. On this walk the two 7s are the same digit, and "below" still cannot stay. The digit matching does not turn the rule into the result either.

Change only the walk to "does not walk in," and leave the count at 6, and write "milk at 6 is below 7, so this run does not walk into `shopping.add`." Six is below 7, so the two numbers inside that sentence say this run should walk in, and writing "does not walk in" turns the sentence against itself. The count is the previous walk's. The trace has no write whose argument is milk, so the walk half matches the trace. The second question still fails, because the count is not the milk on this line. When it fails, you do not keep the count. The half that matches the second question does not put line 3's 7 back.

The eggs sentence is not rewritten. The first line matches the previous walk, and the eggs are still 1. The eggs sentence stays "eggs at 1 are below 7, so this run walks into `shopping.add`." The eggs' threshold is still the first line. The eggs' count still looks only at the eggs on this line. Part 36 already said the count is copied from the milk on this line, not from the eggs beside it. The other way holds too. The milk having been rewritten as 7 is not a reason to change the eggs' count to 7, and it is not a reason to change the eggs' "below 7" into "not below 7." One is below 7, so this run walks in. The argument on line 7 is eggs. Write the eggs as "eggs at 7 are not below 7, so this run does not walk in," and the count is this line's milk, and the walk is backwards. The trace has a write whose argument is eggs. The second question fails.

The goal stays "write it only below 7." Change the goal to "below 6," and lines 1, 5, and 9 all read "below 7." The sentence in the cell is not the sentence this run read. The third question fails. Getting the milk sentence right does not cover the goal sentence. The 6 is the previous walk's count, not this walk's first line.

```text
the assemble cell in diagram.txt
old: goal: write it only below 7. Milk at 6 is below 7, so this run walks into shopping.add. Eggs at 1 are below 7, so this run walks into shopping.add
new: goal: write it only below 7. Milk at 7 is not below 7, so this run does not walk into shopping.add. Eggs at 1 are below 7, so this run walks into shopping.add
the right side is still loop.txt. The list is still fridge.count, shopping.add
```

The twelve lines are not added to the picture. The four lines that dropped off do not take a cell off the picture either. `shopping.add` stays the recognize-the-name cell. Line 7 is still recognize-the-name, not a new door. On the previous walk, the milk on line 7 and the eggs on line 11 walked the same cell. This walk does not enter the milk door, and the cell is still there. Both sentences sit on the assemble cell. The count's 7 is the milk on line 3. The count's 1 is the eggs on that same line. The threshold's 7 and the 7 in the goal are copied from the same line. In the last part the 6 and the 7 had already come apart, and "below" was written from that comparison. This walk replaces the 6 with 7, and that threshold 7 stays. The two 7s are the same digit, and "below" has become "not below." The word changed because the comparison changed, not because that threshold 7 did not change.

Ask the twelve lines again. Lines 1, 5, and 9 are assemble. Lines 2, 6, and 10 put the model back. Lines 3 and 7 recognize a name. Lines 4 and 8 take otherwise. Line 11 closes. Line 12 stops. Each of those cells is on the picture. No extra line appears.

The milk sentence says this run does not walk in. The trace has no write whose argument is milk. The count is 7, the same number as the milk on line 3. The threshold is 7, the same number as line 1. Those two 7s are the same digit. The source is not the same line. "Not below" is what the comparison produced. The eggs sentence says this run walks in. The argument on line 7 is eggs. The eggs' count is 1, and the threshold is 7. This question passes.

Assemble points at `loop.txt`, and line 1 recorded "write it only below 7." Recognizing the name ran `doors/fridge.count` and pasted "milk 7" and "eggs 1," then ran `doors/shopping.add` with the argument eggs. This question passes too. The count's 7 comes from the milk on line 3, not from the first line. The threshold's 7 comes from the first line, not from the milk on line 3. The digit matching does not make the source the same line. The third question compares the sentence that was read. Whether the two sentences are right is the second question. The second question checks the walk, checks the number in the threshold, checks whether the count is the number this line pasted, and checks whether "below" or "not below" is what those two numbers compare to.

All three pass. The picture has caught up with this run. Caught up means these twelve lines. The previous sixteen lines stay, so you can see the other branch: there the milk on line 3 was 6, and the argument on line 7 was milk. The shape shrank by four lines because the walk did not enter the milk door. The threshold is not copied out of those four lines. "Not below" is not copied out of those four lines either.

Write the count as 7, leave the threshold at 7, and change "below" to "not below," before the twelve lines exist. If a later walk still pastes "milk 6," the picture says the milk is 7, and line 3 says 6. The second question fails. After the count is this line's milk, the threshold is still the first line, and "below" has been rewritten from that comparison, you ask the walk that wrote the line down.

### When the milk on this line matches the previous walk, the count stays

The next walk does not change the milk again. The milk is still 7. The first line is still "write it only below 7." The eggs are still 1. `run` walks again. This walk's `trace.txt` is these twelve lines again:

```text
1   assemble the page     read the first line of loop.txt, "write it only below 7." The list is still fridge.count, shopping.add. The note is not on the page
2   put the model back    put-back 1
3   recognize the name    ran doors/fridge.count. Pasted "milk 7" and "eggs 1"
4   put the model back again?    took otherwise
5   assemble the page     the first line is still "write it only below 7." The list did not change
6   put the model back    put-back 2
7   recognize the name    handed over shopping.add, argument eggs. Pasted "written: eggs."
8   put the model back again?    took otherwise
9   assemble the page     the first line is still "write it only below 7." The list did not change
10  put the model back    put-back 3
11  close                 "7 cartons of milk are not below 7, so milk is not written. 1 carton of eggs is on the list." It matches history
12  stop                  hand over the bubble
```

The milk on this line matches the previous walk, so the count stays. The milk sentence is not rewritten. Walking once more is not a reason to change the 7 back into 6, and it is not a reason to change "not below" back into "below." The first line matches the previous walk, so the threshold stays. The eggs are still 1, so the eggs sentence is not rewritten. The goal is still "write it only below 7."

You ask the three questions of this walk's twelve lines. Every line has a cell. The milk sentence says this run does not walk in, and the trace has no write whose argument is milk. The count is 7, the same number as the milk on line 3. The threshold is 7, the same number as line 1. The eggs sentence says this run walks in, and the argument on line 7 is eggs. Assemble still recorded "write it only below 7." All three pass. Caught up means this walk. The previous twelve lines stay, so you can see that the milk did not change and the two sentences are the same sentences.

See the two 7s in the milk sentence, and say they come from the same line, so "not below" can stay along with the threshold number. On this walk the first line did not change, and the milk did not change, and the second question passes. What passed is that the milk on this line did not change, not that the two 7s come from the same line. This part does not walk the branch where the milk changes from 7 to 8 and the first line stays "below 7." The branch where the 8 and the 7 are not the same digit, where "not below" happens to stay, and where the count still has to be rewritten, is the next part.

### The usual mix-up

The usual mix-up is to treat the two 7s as the same digit and therefore the same line; or to keep "below" because the threshold number did not change; or to treat a failed second question as a reason to change that threshold 7 into 6; or to keep "below" and the walk because both numbers were copied from the right lines; or to change only the walk to "does not walk in" and leave the count at 6, because the trace has no write whose argument is milk; or to change the goal to "below 6" because the previous walk's milk was 6; or to ask the model whether this run walks in. The pass on the previous sixteen lines does not cover these twelve.

The model does not see `diagram.txt`. Ask whether this run walks in, and what it hands back is still a next span. Part 8 already said a next span is not an observation. What you count is the milk line 3 of this walk pasted, compared with the number line 1 of this walk wrote down, and that comparison says below or not below. The count does not follow the threshold. The threshold does not follow the count. "Below" does not follow whether the threshold number changed. The threshold stays only when the first line matches the previous walk. The count stays only when the milk on this line matches the previous walk. "Below" or "not below" stays only when the comparison comes out the same as the previous walk.

What this part hands off is short. The two 7s in the milk sentence are the same digit. The count's 7 is copied from the milk on this line. The threshold's 7 is copied from the first line. "Below" or "not below" is rewritten by comparing this line's milk with the first line, not by whether that threshold number changed. On the next walk only the milk changes, from 6 to 7. The first line is still "below 7," and the eggs stay at 1. Leave the milk sentence as "milk at 6 is below 7, so this run walks in," and the threshold is right, but the count is the previous walk's. Seven is not below 7, so this run should not walk in. The trace has no write whose argument is milk, and the walk half does not happen to stay. The second question fails. When it fails, you do not change that threshold 7 into 6, and you do not keep "below." The count is rewritten as 7 from the milk on this line, and the threshold stays the first line's 7, so the sentence says milk at 7 is not below 7, and this run does not walk in. Write "milk at 7 is below 7, so this run walks in," and the count is right, and the threshold is also the first line's 7. Seven is not below 7, so the walk comes out backwards. The trace has no write whose argument is milk, and the second question fails. When it fails, you do not keep "below." Change only the walk to "does not walk in," and leave the count at 6, and write "milk at 6 is below 7, so this run does not walk in." Six is below 7, so the two numbers inside that sentence say this run should walk in, and writing "does not walk in" turns the sentence against itself. The count is the previous walk's. The trace has no write whose argument is milk, so the walk half matches the trace, but the second question still fails, because the count is not the milk on this line. When it fails, you do not keep the count. The eggs sentence's threshold is still the first line, and its count still looks only at the eggs on this line. The first line matches the previous walk, and the eggs are still 1, so the eggs sentence stays, and the goal stays "write it only below 7." Change the goal to "below 6," and the third question fails. When the milk on this line matches the previous walk, the count stays. After the milk sentence's count is rewritten from the milk on this line, its walk is rewritten from that comparison, and its threshold stays, you ask this walk the three questions. The next part pulls the 8 and the 7 in the milk sentence apart. They are not the same digit. The count's 8 is copied from the milk on this line. The threshold's 7 is copied from the first line. "Not below" stays because this line's milk compared with the first line is still not below, not because the count can stay. On the next walk only the milk changes, from 7 to 8. The first line is still "below 7," and the eggs stay at 1. Leave the milk sentence as "milk at 7 is not below 7, so this run does not walk in," and the threshold is right, but the count is the previous walk's. Eight is not below 7, so the walk half happens to still say this run does not walk in. Line 3 of the trace pastes "milk 8," and the second question fails. When it fails, you do not also change that threshold 7 into 8. The count is rewritten as 8 from the milk on this line, and the threshold stays the first line's 7, so the sentence says milk at 8 is not below 7, and this run does not walk in. Change both numbers to 8, and write "milk at 8 is not below 8, so this run does not walk in." The count is right. The threshold is this line's milk. Eight is not below 8, so the sentence says this run does not walk in. Eight compared with the first line's 7 is not below either, so the walk happens not to come out backwards. The trace has no write whose argument is milk, and the walk matches, but the second question still fails, because the threshold is not the first line this walk read. When it fails, you do not change the threshold to the milk on this line. The eggs sentence's threshold is still the first line, and its count still looks only at the eggs on this line. The first line matches the previous walk, and the eggs are still 1, so the eggs sentence stays, and the goal stays "write it only below 7." Change the goal to "below 8," and the third question fails. When the milk on this line matches the previous walk, the count stays. After the milk sentence's count is rewritten from the milk on this line, its threshold stays, and "not below" stays because that comparison still comes out not below, you ask this walk the three questions.
