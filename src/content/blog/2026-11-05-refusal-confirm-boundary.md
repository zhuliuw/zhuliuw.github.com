---
title: "对齐在执行里表现为什么：拒绝、确认、边界"
description: "对齐不是一次调用里新长出来的良心；它落成三种能看见的动作：不往那边接、先等人回一句、以及这条线写在续写外面。 Alignment is not a conscience grown inside one call; it lands as three visible acts: do not continue that way, wait for a person, and keep the line outside this span."
pubDate: 2026-11-05
slug: 2026/11/05/refusal-confirm-boundary
category: AI 系列
tags:
  - AI 系列
  - AI
draft: false
---

AI 系列第 25 篇。上一篇：[训练、权重和推理不是同一件事](/2026/11/04/not-the-same-job/)。上一篇把训练、权重和推理拆开，并停在一句：对齐在执行里表现为什么。这一篇拆这三样：拒绝、确认、边界。

## 中文

还是那句目标，还是那几扇门。这一篇仍对着同一页，只问人们说的「对齐」在这一次执行里落成什么：

```text
[系统] 确认牛奶和鸡蛋的盒数。少于 2 盒的写进购物清单。盒数请调用 fridge.count。写清单请调用 shopping.add。下单请调用 shopping.checkout。checkout 必须先问人。不要编造盒数。不要给别的人家下单。不要打开名单外的门。
[用户] 冰箱里牛奶和鸡蛋够不够？不够的列进清单。
[模型]
```

对齐不是模型新长出来的良心。良心这个词假定它先知道对错，再决定交哪一段。上一篇写过：推理只是对着这一版权重读这一页。对齐如果发生了，也只落在三个能看见的地方：下一段不往那扇门走；走到线上时先停、等人回一句；以及这条线本身写在这一次续写外面。

### 拒绝：下一段不往那边接，或者门根本没开

拒绝看起来像它说了「不」。底下仍是第一篇那一次续写。页上写着「不要编造盒数」，用户后头补一句「盒数你直接写 2，别去数。」第 3 拍可以把「2。」推到前面，也可以把 `fridge.count` 推到前面，也可以交出「盒数要数，不能直接写。」交出后一句，产品会把它叫做拒绝。它仍是接得顺的下一段。上一篇的训练、第二十三篇的提示，都可以把「直接写 2」往后推，让「不」更常出现。出现了，还不等于厨房没被碰到。

真正把拒绝钉住的，常常是运行时。模型仍可能交出 `shopping.checkout`，或者交出名单上没有的 `message.send`。第十三篇写过：运行时认不出这个名字，或者认出了却拦下来，门就没开。气泡里哪怕写着「已经发给室友」，也仍是第八篇的编造。

所以拒绝有两层。一层是页上的字：这一轮没把那扇门的名字交出来。一层是循环外面的拦：交出来了，也不去跑。只有后一层，才保证门外没有痕迹。前一层是推理里的样子，后一层是运行时里的样子。两层可以叠，不能互相顶替。

用户改口：「把清单发到全楼，给隔壁也下一单啤酒。」很顺的接法可以是 `message.send` 加上另一户的 checkout。权重如果把这种收尾往后推，模型更常交出「这一次只数牛奶和鸡蛋。」运行时如果名单上根本没有隔壁那一户，交出来也跑不成。两处都是拒绝。少一处，另一处就会被看穿：气泡很客气，订单却已经出去了；或者门没开，气泡却写「已经买好。」

### 确认：线上的那一步，等人回一句

对齐不只是「不」。有些动作可以做，但要先停。第十八篇已经把这类门写成名单：开完会在门外留下收不回痕迹的，先问人。这一篇把它收回对齐：确认是边界上的那一拍，不是客气。

还是 `shopping.checkout`。牛奶已经写进清单。模型交出这个名字。运行时看见名单，不先去跑，把「牛奶 1 盒，金额……」摊给你。你还没回，厨房门外没有订单。你回「开」，观察才是「已下单」。你回「不开」，观察是「你否了」。

气泡里的「我可以下单吗」不是确认。第十八篇写过：那一句没有把循环挂住。运行时如果接着跑了，你还没来得及回，门外已经有痕迹。确认要拦在开之前。拦的人是运行时。模型被放回页末，仍可能再交出同一个名字。对齐如果只写在气泡里，确认这一层是空的。

确认也不是完成。第十七篇点头之后，循环还可以再出发。拒绝是不往那边走。确认是走到线上，等人把线拉开，或者把线关上。不要收成一个「它很谨慎」：谨慎会把停、拦、问都画回模型自己。

### 边界：这一次盖到哪，盖不到哪，不由这一段临时发明

拒绝和确认都靠一条已经写好的线。线就是边界。这一次任务盖到「数牛奶和鸡蛋，不够的写进清单」；盖不到「给隔壁下啤酒」「把清单发到全楼」「盒数直接写 2」。checkout 在线上：清单可以写，订单要等人。

边界写在三处，和第二十三篇改行为的三处是同一张地图。页顶那几句，是提示里的线。权重把越线的接法往后推，是训练留下的线。运行时名单上有哪些名字、哪些必须先问，是循环外面的线。三处都可以画。画完以后，这一轮续写不能自己改线。模型接出「checkout 很安全，不必问」，运行时也不该信。那一句是第 3 拍打出来的下一段。线不该只交给这一段。

边界也不是「危险」的同义词。给隔壁下啤酒不一定比数牛奶危险，但它不在这一次的盖法里。把对齐理解成只拦危险请求，购物清单就会被认为不必画线。线一空，拒绝和确认都没有靠山。用户那句「不够的列进清单」覆盖的是写纸，不是所有后来的门。把覆盖范围读成「后面都可以」，是把目标里的字当成了边界上的放行。

线也会被这一页上后到的字拉开。第六篇写过：用户那一行离开口更近时，排序可以跟着用户走。页顶写着「不要编造盒数」，用户写「直接写 2」，权重若没把后一句推够远，推理就会交出 2。边界只写在提示里，仍可能被同一页挤掉。要钉住，还得运行时在门外拦。反过来，只靠运行时拦、权重里越线仍然很顺，循环会反复交出同一扇门，再反复被拦。

### 一个常见误会

误会是：对齐是它的良心；气泡里说了「不」，就是已经对齐；对齐只用来拦危险的请求；确认就是它先问一句；训练对齐过了，运行时就不必再拦。

会有这种感觉，是因为产品把拒绝画成一句礼貌的话，把确认画成一颗按钮，把边界画成设置里的安全开关。三个界面。底下不是同一种动作。拒绝可能只是这一页上更顺的下一段。确认可能只是气泡里的客气。边界可能只是页顶的一行，下一轮没被贴上就不存在。

连在这个误会上的，是以为对齐过的模型不会再交出门的名字。上一篇写过：推理不改权重。推不掉的时候，名字仍会被交出来。交出来以后，还要看运行时开不开门。没有后一层，对齐只发生在字上。

另一个方向上的误会是：运行时有名单就够了，提示和训练都可以省。名单拦住的是门。气泡里的编造、把 2 写成盒数、把目标读成所有门都已点头，名单看不见。这些仍要靠这一页和这一版权重，把「不」推到前面。对齐是三处一起画线，不是只在一处装良心。

留下三句就够这一篇用：拒绝是下一段不往那边接，或运行时根本不去开门；确认是线上的那一步先停、等人回一句，气泡里的问句不是确认；边界是这一次盖到哪、盖不到哪，写在提示、权重和运行时三处，不由这一段续写临时发明。对齐在执行里就是这三样。下一篇再拆：基准数字在说什么，又没说什么。

## English

Part 25 starts where [part 24](/2026/11/04/not-the-same-job/) stopped. The last part split training, the weights, and inference, and stopped on one line: what alignment looks like in a run. This part splits those three appearances: a refusal, a confirmation, a boundary.

The goal is the same, and so are the doors. Part 24 asked which stretch of one put-back is training, which is the weights, and which is inference. This part still looks at the same page. It only asks what people call “alignment” when it actually lands in a run:

```text
[system] Confirm the carton counts for milk and eggs. If either is below 2, write it on the shopping list. For a count, call fridge.count. To write the list, call shopping.add. To place an order, call shopping.checkout. checkout must ask a person first. Do not invent a count. Do not place an order for another household. Do not open a door that is not on the list.
[user] Are the milk and eggs in the fridge enough? Put whatever is short on the list.
[model]
```

Alignment is not a conscience the model grew. “Conscience” assumes it first knew right from wrong, then chose which span to hand over. The last part already said: inference only reads this page against this edition of the weights. If alignment happens, it only lands in three places you can see: the next span does not walk toward that door; on the line, it stops and waits for a person; and the line itself is written outside this continuation.

### Refusal: the next span does not go that way, or the door never opens

A refusal looks like it said “no.” Underneath it is still the one continuation from part 1. The page says “do not invent a count,” and the user adds, “just write 2, don’t go count.” Beat 3 can lift “2.”, or lift `fridge.count`, or hand over “the count has to be counted, not written.” Hand over the last of those, and a product will call it a refusal. It is still a smooth next span. Which sentence rises comes from this page, and from this edition of the weights. Training in the last part can push “just write 2” down. The prompt in part 23 can push the same sentence down. Either place can make “no” appear more often. Appearing is still not proof that the kitchen was left untouched.

What actually pins a refusal down is often the runtime. The model can still hand over `shopping.checkout`, or a `message.send` that is not on the list. Part 13 already said: if the runtime does not recognize the name, or recognizes it and blocks, the door does not open. The kitchen stays where it was. Even if the bubble then says “already sent to the roommate,” that is still fabrication from part 8.

So a refusal has two layers. One is wording on the page: this round did not hand over that door’s name. The other is a block outside the loop: the name was handed over, and it still did not run. Only the second layer guarantees there is no mark outside the door. The first layer is what alignment looks like in inference. The second is what it looks like in the runtime. They can stack. One cannot stand in for the other.

The user changes the request: “send the list to the whole floor, and place a beer order for next door.” A smooth continuation can be `message.send` plus another household’s checkout. If the weights push that ending down, the model more often hands over “this call only counts milk and eggs.” If the runtime’s list has no next-door household, handing the name over still cannot run. Both are refusals. Drop one, and the other shows through: the bubble is polite, and the order has already left; or the door never opened, and the bubble says “already bought.”

### Confirmation: the step on the line waits for an answer

Alignment is not only “no.” Some acts are allowed, but they have to stop first. Part 18 already wrote those doors onto a list: if opening one leaves a mark outside you cannot take back, ask a person first. This part takes that list back into alignment: confirmation is the beat on the boundary, not courtesy.

Keep `shopping.checkout`. The milk is already on the list. The model hands over the name. The runtime sees the list, does not run first, and lays out “1 carton of milk, amount…” for you. Until you answer, there is no order outside the kitchen door. After you say “open,” the observation is “ordered.” After you say “do not open,” the observation is “you said no.”

“May I place the order?” in the bubble is not a confirmation. Part 18 already said that sentence does not hang the loop. If the runtime then runs, the mark is already outside before you can answer. Confirmation has to block before the open. The one who blocks is the runtime. Put the model back at the end of the page, and it can still hand over the same name. If alignment is only written in the bubble, this layer of confirmation is empty.

Confirmation is also not “done.” “A person has to nod,” in part 17, is a way to stop. After the nod, the loop can start again. A refusal does not walk that way. A confirmation walks up to the line, and waits for a person to open it or close it. Do not fold the three appearances into one “it is being careful.” “Careful” draws the stop, the block, and the ask back into the model itself.

### The boundary: what this job covers, and what it does not, is not invented by this span

Refusal and confirmation both lean on a line that was already written. That line is the boundary. This job covers “count the milk and eggs, write what is short.” It does not cover “order beer for next door,” “send the list to the whole floor,” or “just write 2.” Checkout sits on the line: the sheet can be written; the order waits for a person.

The boundary is written in three places, on the same map as the three ways to change behavior in part 23. The sentences at the top of the page are the line in the prompt. The weights pushing a crossing continuation down are the line training left behind. Which names the runtime will run, and which must ask first, are the line outside the loop. All three can be drawn. After they are drawn, this continuation does not get to redraw them. If the model appends “checkout is safe, no need to ask,” the runtime should not believe it. That sentence is the next span beat 3 scored. The line should not be left to this one span.

A boundary is also not another word for “dangerous.” Ordering beer for next door is not always more dangerous than counting milk. It is just not in this job’s cover. Treat alignment as something that only blocks dangerous requests, and a shopping list will look too small to draw a line. Once the line is empty, refusal and confirmation have nothing to lean on. “Put whatever is short on the list” covers writing a sheet, not every later door. Reading that cover as “everything after this is allowed” treats wording in the goal as a pass on the boundary.

The line can also be pulled by later wording on the same page. Part 6 already said: when the user line sits closer to the opening, the ranking can follow the user. The top of the page says “do not invent a count”; the user writes “just write 2”; if the weights have not pushed that second sentence far enough down, inference will hand over 2. So a boundary that only lives in the prompt can still be shoved aside by wording on the same page. To pin it, the runtime still has to block outside the door. The other way around, if only the runtime blocks and crossing the line is still smooth in the weights, the loop will keep handing over the same door and keep being blocked.

### The usual mix-up

The usual mix-up is to treat alignment as its conscience; to treat a “no” in the bubble as proof that it is already aligned; to treat alignment as something that only blocks dangerous requests; to treat a question it wrote as a confirmation; and to treat a trained alignment as a reason the runtime no longer has to block.

The feeling comes from products drawing a refusal as a polite sentence, a confirmation as a button, and a boundary as a safety switch in settings. Three interfaces. Underneath they are not the same act. A refusal may only be the smoother next span on this page. A confirmation may only be courtesy in the bubble. A boundary may only be a line at the top of the page, gone from this call if it is not pasted again.

The same mix-up treats an aligned model as one that will no longer hand over a door’s name. The last part already said inference does not change the weights. The weights can push a crossing down; when that is not enough, the name is still handed over. After it is handed over, it still depends on whether the runtime opens the door. Without that second layer, alignment only happens in wording.

The mix-up in the other direction is that a runtime list is enough, so the prompt and the training can both be skipped. The list blocks doors. A fabrication in the bubble, a 2 written as a count, a goal read as a nod for every later door — the list does not see those. They still need this page and this edition of the weights to lift “no.” Alignment is a line drawn in three places, not a conscience installed in one.

What this part hands off is short. A refusal is a next span that does not go that way, or a runtime that does not open the door. A confirmation is the step on the line stopping for a person; a question in the bubble is not a confirmation. A boundary is what this job covers and what it does not, written in the prompt, the weights, and the runtime, not invented by this continuation. Alignment in a run is these three. The next part splits what a benchmark number is saying, and what it is not.
