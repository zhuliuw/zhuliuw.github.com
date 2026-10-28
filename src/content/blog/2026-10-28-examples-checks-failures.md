---
title: "怎么判断它做对了：例子、对照和失败样本"
description: "做对了不是模型说「我对了」，是页上先有例子和失败样本，运行时再用观察去对照。 “Did it right” is not the model saying so; examples and failure samples sit on the page, and the runtime checks the observation against them."
pubDate: 2026-10-28
slug: 2026/10/28/examples-checks-failures
category: AI 系列
tags:
  - AI 系列
  - AI
draft: false
---

AI 系列第 19 篇。上一篇：[哪些动作必须先问人](/2026/10/27/must-ask-first/)。上一篇把必须先问的门写成循环外面的名单，并停在一句：门开了、人也点了头，怎么判断它做对了。这一篇拆这一刀：例子、对照和失败样本。

## 中文

还是那句目标，还是那几扇门。上一篇拦在开门之前。这一篇问开门之后：观察回来了，凭什么说这件事做对了。

```text
[系统] 确认牛奶和鸡蛋的盒数。少于 2 盒的写进购物清单。盒数请调用 fridge.count。写清单请调用 shopping.add。下单请调用 shopping.checkout。checkout 必须先问人。
例子：牛奶 1 → 写牛奶。鸡蛋 4 → 不写。
失败样本：鸡蛋 4 却写鸡蛋；没有观察却说已写入；把鸡蛋写成牛奶。
对照：观察里的品名和盒数，必须对得上「少于 2 才写」。
[用户] 冰箱里牛奶和鸡蛋够不够？不够的列进清单。
[模型]
```

「做对了」不是模型在气泡里写一句「已经列对」。那一句仍是页上的字。第八篇写过：形状对了，也可以是编造。第十七篇写过：完成要看观察还在不在窗口里。这一篇把「看」拆开：页上要先放下例子和失败样本，运行时再用观察去对照。对照过了，才谈做对。

### 例子：先把做对的样子写进页里

例子是还没出发之前，写在页上的一对：这种盒数，该开哪一扇门，门外该留下哪一行观察。

牛奶 1，少于 2，该写。鸡蛋 4，不少于 2，不该写。这两对坐在系统那一行旁边。第五篇写过：你交给它的全部材料都在这一页。例子也是材料。第 3 拍对着这页打分，「写牛奶」会顺着「1 → 写」走上来，「写鸡蛋」会往后排。

例子不是检查。它只是把做对的接法推到前面。没有例子，模型仍会交下一段。温度高一点，第七篇写过，同一句也可以走出另一扇门。例子把那扇门的名字往前推，它不在门开完以后核一行。

例子也可以写得更窄：不是「少于 2 就写」，而是「牛奶 1 → shopping.add 牛奶；鸡蛋 4 → 不调用 shopping.add」。窄了以后，页上留下的是门的名字，不是一句家务话。第九篇写过：约定格式是骨架。例子把骨架填成一对已经做过的事。

还是牛奶 1、鸡蛋 4。页上有这两对。模型先交 `fridge.count`。观察回来是 1 和 4。下一轮它交 `shopping.add`，品名是牛奶。这一截读起来像例子。像，还不是对。对要等对照。

### 对照：用观察去对例子，对的人是运行时

对照，是门开完以后，运行时拿观察去对页上那一对。观察说「已写入：牛奶」，盒数是 1，少于 2，对得上。观察说「已写入：鸡蛋」，盒数是 4，对不上。观察是「写不进去」，也不是对，是这扇门失败了。

对的人是运行时。不是模型再接一句「我对过了」。第十六篇的「做完再看」是页上多一轮核对。那一轮仍可能编造。第八篇写过：空位上仍会接出像成功的块。所以对照不能交给这一轮续写。运行时看见观察，看见例子里的规则，对过了才把这一步标成对。没对过，就不要把气泡里的「已列进清单」当成完成。

对照要看三件东西：开的是不是该开的那扇门，带着的参数是不是例子里的品名，观察是不是那一行该留下的字。三件里缺一件，就还没做对。模型交了 `shopping.add`，运行时还没跑，页上没有观察，对照还没开始。第十二篇写过：写出名字还不是接触。没有接触，就没有可对的那一行。

人点了头，也不等于做对了。上一篇的点头，是放行开门。门开了，观察才来。对照发生在观察之后。你回「开」，订单出去了，对照还要看：出去的是不是清单上的牛奶，金额是不是这一页上的数。点头放的是门。对照核的是门外留下来的那一行。

还是牛奶 1、鸡蛋 4。数过，写过牛奶。观察是「已写入。」运行时对过：品名是牛奶，盒数 1，规则是少于 2 才写。这才是做对。气泡里先写「今晚都列好了」，鸡蛋也被写进去了，对照就该判错。

### 失败样本：先写下做错的样子，对照才知道什么不能过

只有例子，对照容易只认形状。失败样本是反过来的一对：这种盒数，不该开这扇门；或者开了，不该留下这一行。

鸡蛋 4 却写鸡蛋，是做错。没有观察却说已写入，是做错。把鸡蛋写成牛奶，形状对了，品名错了，也是做错。这三对也写在页上，和例子坐在同一侧。

失败样本给对照一条禁行。运行时看见观察长得像「已写入。」，再看见品名是鸡蛋、盒数是 4，就该对上失败样本，判错。没有这条，对照只会看「有没有已写入」。第八篇写过：编造和观察可以长得一模一样。只认形状，就会把做错的那一行放过去。

失败样本也改第 3 拍的排序。页上写过「鸡蛋 4 却写鸡蛋是错的」，「写鸡蛋」会往后排。它仍然只是推。推完以后，还要对照。模型仍可能交出那一行。拦住它的，不是样本自己，是运行时拿观察去对样本。

样本要具体。只写「不要写错」是一句空的。空的句子不构成一对。一对是：盒数、门、不该留下的那一行。第十五篇写过：窗口会满。样本不必把厨房里每一种错法都写上。写下和这一次目标会碰上的那几类就够：写了不该写的，没写该写的，写了但品名不对，没观察却先收口。

### 一个常见误会

误会是：它是智能体，所以它自己知道做对没有；它说「我对过了」，就是对过了；页上多写几个例子，就等于有了对照；只有成功的例子就够。

会有这种感觉，是因为产品在条上画出勾，气泡里也常先出现「已完成」。勾和那几个字是界面。第十四篇写过：气泡里的步骤也是字。没有运行时拿观察去对例子和失败样本，勾只是把一句编造画成了完成。

连在这个误会上的，是把「做对了」当成模型新长出来的自检。自检这个词好像说它会自己打分。打分的是运行时。模型被放回页末，就还会再交下一段。温度高一点，同一句也可以走出另一扇门。门开得对不对，不该只交给这一段续写。

另一个方向上的误会是：对照就是第十六篇那种「做完再看」；或者例子写进提示词，失败样本就不必写。做完再看仍是模型的一轮，它可以编造。只有成功的例子，对照只会认「已写入」这种形状。失败样本不是把页写长，是给对照一条不能过的线。

留下三句就够这一篇用：做对了不是模型说「我对了」，是运行时拿观察去对页上的例子和失败样本；例子把做对的接法推到前面，它不是检查；失败样本写下做错的样子，对照才知道什么形状也不能过。对过了、错的也写进页了，下一篇再拆：错误怎样留在历史里，并污染下一步。

## English

Part 19 starts where [part 18](/2026/10/27/must-ask-first/) stopped. The last part wrote the doors that must ask first as a list outside the loop, and stopped on one line: after a door has opened and a person has nodded, how do you tell whether it did the job right. This part splits that cut: examples, a check, and failure samples.

The goal is the same, and so are the doors. Part 18 blocks before the door opens. This part asks after it opens: the observation is back; what lets you say the job was done right?

```text
[system] Confirm the carton counts for milk and eggs. If either is below 2, write it on the shopping list. For a count, call fridge.count. To write the list, call shopping.add. To place an order, call shopping.checkout. checkout must ask a person first.
Examples: milk 1 → write milk. Eggs 4 → do not write.
Failure samples: eggs 4 and still write eggs; say “written” with no observation; write milk when the item was eggs.
Check: the item and count in the observation must match “write only if below 2.”
[user] Are the milk and eggs in the fridge enough? Put whatever is short on the list.
[model]
```

“Did it right” is not the model appending “already listed correctly” in the bubble. That sentence is still wording on the page. Part 8 already said a well-shaped span can still be fabrication. Part 17 already said “done” depends on observations still sitting in the window. This part splits the “look”: examples and failure samples have to sit on the page first, and the runtime then checks the observation against them. Only after that check do you talk about right.

### Examples: write what right looks like onto the page first

An example is a pair written on the page before the loop starts: this count, this door, this observation that should sit outside after the door opens.

Milk at 1 is below 2, so write it. Eggs at 4 are not below 2, so do not write. Those two pairs sit next to the system line. Part 5 already said everything you hand over is this one page. Examples are material too. Beat 3 scores against this page; “write milk” can walk up along “1 → write,” and “write eggs” is pushed back.

An example is not a check. It only lifts the right continuation. With no examples, the model still hands over a next span. Turn the temperature up a little, and part 7 already said the same sentence can walk out a different door. Examples push that door’s name forward. They do not, after the door has opened, check a line.

An example can also be written narrower: not “write if below 2,” but “milk 1 → shopping.add milk; eggs 4 → do not call shopping.add.” After it is narrowed, what sits on the page is a door name, not a household sentence. Part 9 already said an agreed format is a skeleton. An example fills that skeleton with one job already done.

Keep the milk at 1 and the eggs at 4. The two pairs are on the page. The model first hands over `fridge.count`. The observations come back as 1 and 4. The next round it hands over `shopping.add` with the item milk. That span reads like the example. Like is not right. Right waits for the check.

### The check: match the observation to the example; the one who matches is the runtime

A check is what the runtime does after the door has opened: it takes the observation and matches it to the pair on the page. “Written: milk,” count 1, below 2 — that matches. “Written: eggs,” count 4 — that does not. “Could not write” is not a match either; that door failed.

The one who matches is the runtime. It is not the model appending “I already checked.” “Look back after,” in part 16, is an extra checking round on the page. That round can fabricate too. Part 8 already said a success-shaped span can still be appended from an empty slot. So the check cannot be left to this continuation. The runtime sees the observation, sees the rule in the examples, and only then marks the step as right. If it has not matched, do not take “already on the list” in the bubble as done.

The check looks at three things: whether the door that opened is the one that should have opened, whether the arguments are the item in the example, and whether the observation is the line that should have been left. Miss one of the three, and it is not yet right. The model handed over `shopping.add`, the runtime has not run, the page has no observation, and the check has not started. Part 12 already said writing a name is not yet contact. With no contact, there is no line to match.

A person nodding is also not “did it right.” The nod in the last part is a pass to open the door. After the door opens, the observation arrives. The check happens after the observation. You said “open,” the order left, and the check still has to see: was it the milk on the list, and is the amount a number already on this page? The nod releases the door. The check reads the line left outside.

Keep the milk at 1 and the eggs at 4. They have been counted; the milk has been written. The observation is “written.” The runtime has matched: the item is milk, the count is 1, the rule is write only if below 2. That is right. If the bubble first says “everything is listed tonight” and the eggs were written too, the check should mark it wrong.

### Failure samples: write what wrong looks like, or the check will not know what must not pass

With only examples, a check is apt to accept a shape. A failure sample is the pair turned around: this count should not open this door; or if it opened, it should not leave this line.

Eggs at 4 and still writing eggs is wrong. Saying “written” with no observation is wrong. Writing milk when the item was eggs is wrong too: the shape is right, the item is not. Those three pairs also sit on the page, on the same side as the examples.

A failure sample gives the check a line that must not pass. The runtime sees an observation that looks like “written.,” then sees the item eggs and the count 4, matches the failure sample, and marks it wrong. Without that line, the check only asks whether “written” is there. Part 8 already said fabrication and observation can look the same. Accept only the shape, and a wrong line gets through.

Failure samples also change the ranking on beat 3. After the page says “eggs 4 and still writing eggs is wrong,” “write eggs” is pushed back. That is still only a push. After the push, the check still has to run. The model can still hand that line over. What blocks it is not the sample by itself; it is the runtime matching the observation to the sample.

A sample has to be concrete. “Do not write it wrong” is an empty sentence. An empty sentence is not a pair. A pair is a count, a door, and the line that should not be left. Part 15 already said the window fills. The samples do not have to list every wrong way in the kitchen. The kinds this goal will hit are enough: wrote what it should not, did not write what it should, wrote the wrong item, or closed with no observation.

### The usual mix-up

The usual mix-up is to treat “it is an agent” as proof that it knows whether it did the job right, that “I already checked” means it checked, that a few more examples on the page are the same as a check, and that success examples alone are enough.

The feeling comes from a checkmark on the product bar, and from “done” appearing in the bubble first. The checkmark and those words are the interface. Part 14 already said it: the steps in the bubble are wording too. Without a runtime that matches the observation to the examples and the failure samples, the checkmark only paints a fabricated sentence as finished.

The same mix-up treats “did it right” as self-check the model grew. “Self-check” sounds as if it will score itself. The one who scores is the runtime. Put the model back at the end of the page, and it will hand over another span. Turn the temperature up a little, and the same sentence can walk out a different door. Whether the door that opened was the right one should not be left to this continuation.

The mix-up in the other direction is that the check is the same as “look back after” in part 16, or that once examples sit in the prompt, failure samples are optional. Looking back is still a model round, and it can fabricate. With only success examples, the check only accepts a shape like “written.” A failure sample is not a longer page; it is a line the check must not let through.

What this part hands off is short. “Did it right” is not the model saying “I was right”; it is the runtime matching the observation to the examples and failure samples on the page. Examples lift the right continuation; they are not a check. Failure samples write what wrong looks like, so the check knows which shapes must not pass. After a match, and after a miss is also written onto the page, the next part splits how an error stays in the history and spoils the next step.
