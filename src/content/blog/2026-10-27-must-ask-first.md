---
title: "哪些动作必须先问人"
description: "会留下收不回痕迹的门，要写在循环外面的名单上，开之前等人回一句。 Doors that leave a mark you cannot take back sit on a list outside the loop; the runtime does not open them until a person answers."
pubDate: 2026-10-27
slug: 2026/10/27/must-ask-first
category: AI 系列
tags:
  - AI 系列
  - AI
draft: false
---

AI 系列第 18 篇。上一篇：[停止条件：完成、上限、重复失败、需要人点头](/2026/10/26/when-it-must-stop/)。上一篇把循环的停法拆成四种，并停在一句：下一扇会留下痕迹的门，该不该先问。这一篇拆哪些动作必须先问人。

## 中文

还是那句目标，还是那几扇门。上一篇把 `shopping.checkout` 写成必须等人点头。点头是停止条件里的一种。这一篇问更前面的那一刀：名单上哪些名字，运行时看见了也不许先跑。

```text
[系统] 确认牛奶和鸡蛋的盒数。少于 2 盒的写进购物清单。盒数请调用 fridge.count。写清单请调用 shopping.add。下单请调用 shopping.checkout。把清单发给室友请调用 message.send。checkout 和 message.send 必须先问人。
[用户] 冰箱里牛奶和鸡蛋够不够？不够的列进清单。列完如果要下单或发给别人，先问我。
[模型]
```

「先问人」不是模型在气泡里写一句「我可以下单吗」。那一句仍是页上的字。第十二篇写过：写出名字还不是接触。先问人，是运行时在门外拦下一张名单：这些名字交出来了，先停，把要开的门、带着的参数、门外会留下什么痕迹摊给你，等你回「开」或「不开」。你还没回，门就还关着。第八篇写过：门关着，模型先接出「已经买好了」，仍是编造。

### 先看痕迹收不收得回，再决定要不要写进名单

不是每一扇门都要问。问得太多，循环会在数盒这种事上反复挂住。上一篇写过：需要人点头，是下一扇门会花钱、会发给别人、会删掉东西。这一篇把这一条拆开：先看这扇门开完，厨房门外会不会留下一笔收不回的痕迹。

`fridge.count` 是看。数完，盒数还在原处。观察是一个数字。没有订单，没有短信，没有被划掉的行。这一扇不必先问。循环要走下去，就让它开。

`shopping.add` 是写厨房里的一张纸。纸上多一行牛奶，你还可以划掉。痕迹在屋里，收得回。这一扇常常也不必每写一行都问。若这张纸会同步到别人的本子，或者写上去就自动变成订单，它就不再只是屋里的纸，该进名单。

`shopping.checkout` 会把清单变成一笔钱、一辆车、一次送货。钱出去了，车已经在路上，这一笔收不回。`message.send` 会把字送到别人的屏幕上。发出去的字，你收不回别人已经看见的那一眼。删文件、改权限、公开一篇、把钥匙交给另一扇门，也是同一种：门外已经变了，回滚要另做一件事，而且常常做不成原来那样。

所以名单不是「所有工具」。名单是「开完会在门外留下收不回痕迹的那些名字」。看、数、读，通常不在上面。花、发、删、公开、交钥匙，通常在上面。写一张还能划掉的纸，看它会不会自己变成花、发、删。

还是牛奶 1、鸡蛋 4。数过，写过牛奶。模型交出 `shopping.checkout`。运行时看见名单，不先去跑，先把「牛奶 1 盒，金额……」摊给你。你还没回，厨房门外没有订单。

### 名单写在循环外面，不由这一轮续写临时发明

谁来写这张名单？是人。写在运行时外面，和上限、重复失败写在同一侧。模型这一轮接出「checkout 很安全，不必问」，运行时也不该信。那一句是第 3 拍打出来的下一段。第七篇写过：温度高一点，同一句也可以走出另一扇门。门开不开，不该只交给这一段续写。

名单也可以写得更窄：不是整个 `shopping.checkout`，而是「金额超过 50」才问，或者「收货地址不在本页上」才问。窄了以后，检查的仍是运行时。它看见名字，再看见参数，对过规则，才决定拦还是跑。模型把金额写成 49.9，或把地址写成页上已有的那一行，都还只是字。第八篇写过：形状对了，也可以是编造。参数要进规则，得先经过运行时认出来的那一次解析，而不是气泡里的一句「不超过五十」。

上一篇的「需要人点头」是停法。这一篇的名单是停之前那张表。没有这张表，运行时看见任何名字都会去跑，点头这一条就空了。表是空的，和没有这一条停法，是同一件事。

### 问在门开之前。气泡里的一句，不是问

先问，说的是次序。模型交出名单上的名字，运行时先停。你看见的是：要开哪一扇、带着什么参数、门外会留下什么。你回「开」，观察才是「已下单」或「已发出」。你回「不开」，观察是「你否了」，循环不要再交同一扇门。

问晚了，就是门已经开过。订单已经出了厨房，气泡里再写「刚才下了一单，可以吗」，那不是先问。那是事后通知。第十三篇写过：门开在模型外面，开完才有观察。先问要拦在开之前，拦的人是运行时，不是模型自己犹豫一下。

气泡里的「我先问你要不要下单」也不是问。那一行没有把循环挂住。运行时如果接着跑了 `shopping.checkout`，你还没来得及回，门外已经有订单。第十四篇写过：气泡里的步骤也是字。字不会自己等你。等你的，是运行时把循环挂在门外。

目标里写过「不够就列进清单」，也不等于「列完就下单」。清单是屋里的纸。下单是门外的痕迹。用户那一句只覆盖了写纸。把覆盖范围读成所有门都已点头，是把目标里的字当成了名单上的放行。名单空着，放行就不存在。

四种停法仍可以叠在同一次任务里。先看完成，再看这扇门在不在先问的名单上，再看重复失败，最后看上限。叠在一起，仍是运行时在循环外面做的检查。模型每一轮仍然只交下一段。

### 一个常见误会

误会是：它是智能体，所以它自己知道哪一扇危险；它在气泡里问过了，就是先问了；你把目标交给它，后面的门就都默认可以开。

会有这种感觉，是因为产品会弹出一句「是否允许下单」，气泡里也常先出现「我需要你确认」。弹窗如果是运行时看见名单才挂出来的，那才是这一篇说的先问。只是模型接出几个问句，门已经在后面开了，那只是界面上的客气。

连在这个误会上的，是把「先问人」当成模型新长出来的谨慎。谨慎这个词好像说它会自己收手。收手的是运行时。模型被放回页末，就还会再交出名单上的名字。第十二篇写过：写出名字还不是接触。拦住接触的，是名单，不是这一段里的犹豫。

另一个方向上的误会是：每一扇门都先问，才算安全；或者只有花钱的门要问，发出去的字、删掉的文件不必问。门门都问，循环会停在数盒上，目标走不完。只问花钱，室友的屏幕上已经出现一句话，那句话也收不回。名单看的是门外的痕迹收不收得回，不是只看钱包。

留下三句就够这一篇用：必须先问人的，是开完会在门外留下收不回痕迹的那些门；名单写在循环外面，由运行时在开门之前拦住，气泡里的问句不是问；看和数通常不必问，花、发、删、公开、交钥匙通常要问，屋里还能划掉的纸要看它会不会自己变成门外的痕迹。门开了、人也点了头，下一篇再拆：怎么判断它做对了。

## English

Part 18 starts where [part 17](/2026/10/26/when-it-must-stop/) stopped. The last part split the ways a loop must break into four, and stopped on one line: whether the next door that would leave a mark has to ask first. This part splits which actions must ask a person first.

The goal is the same, and so are the doors. Part 17 wrote `shopping.checkout` as a door that must wait for a person to nod. A nod is one kind of stop. This part asks the cut before that stop: which names, once handed over, the runtime is still not allowed to run.

```text
[system] Confirm the carton counts for milk and eggs. If either is below 2, write it on the shopping list. For a count, call fridge.count. To write the list, call shopping.add. To place an order, call shopping.checkout. To send the list to a roommate, call message.send. checkout and message.send must ask a person first.
[user] Are the milk and eggs in the fridge enough? Put whatever is short on the list. If you would place an order or send it to someone after listing, ask me first.
[model]
```

“Ask a person first” is not the model appending “may I place the order?” in the bubble. That sentence is still wording on the page. Part 12 already said writing a name is not yet contact. Asking first is a list the runtime holds outside the door: when one of those names is handed over, stop, lay out the door, the arguments, and the mark it would leave, and wait for “open” or “do not open.” Until you answer, the door stays closed. Part 8 already said it: if the door is still closed and the model appends “already bought,” that is still fabrication.

### Look at whether the mark can be taken back, then decide if the name belongs on the list

Not every door has to ask. Ask too often, and the loop will hang on a count. The last part said a person has to nod when the next door would spend money, send something to someone else, or delete a thing. This part splits that line: after the door opens, will a mark sit outside the kitchen that you cannot take back?

`fridge.count` is a look. After the count, the cartons are still where they were. The observation is a number. There is no order, no text message, no crossed-out line. This door does not have to ask first. If the loop needs to move, let it open.

`shopping.add` writes a sheet inside the kitchen. A milk line can still be crossed out. The mark is in the house, and it can be taken back. This door often does not have to ask on every write. If the sheet syncs to someone else’s notebook, or if writing a line turns into an order by itself, it is no longer only a sheet in the house, and it belongs on the list.

`shopping.checkout` turns the list into money, a truck, and a delivery. Once the money has left and the truck is on the road, that mark does not come back. `message.send` puts wording on someone else’s screen. You cannot take back the glance they already had. Deleting a file, changing a permission, publishing a page, or handing a key to another door is the same kind: the outside has already changed, rolling it back is another job, and it often cannot restore the thing as it was.

So the list is not “every tool.” The list is “the names that leave a mark outside the door that you cannot take back.” Looking, counting, and reading usually stay off it. Spending, sending, deleting, publishing, and handing over a key usually sit on it. If the job only writes a sheet you can still cross out, ask whether that sheet will turn into a spend, a send, or a delete by itself.

Keep the milk at 1 and the eggs at 4. They have been counted; the milk has been written. The model hands over `shopping.checkout`. The runtime sees the list, does not run first, and lays out “1 carton of milk, amount…” for you. Until you answer, there is no order outside the kitchen door.

### The list is written outside the loop, not invented by this continuation

Who writes the list? A person. It sits outside the runtime, on the same side as the cap and the repeated-failure count. If this round the model appends “checkout is safe, no need to ask,” the runtime should not believe it. That sentence is the next span beat 3 scored. Part 7 already said it: turn the temperature up a little, and the same sentence can walk out a different door. Whether a door opens should not be left to this one continuation.

The list can also be written narrower: not every `shopping.checkout`, but only when the amount is above 50, or only when the delivery address is not already on this page. After it is narrowed, the check is still the runtime’s. It sees the name, then the arguments, then the rule, and only then decides to block or to run. If the model writes 49.9, or copies an address already on the page, those are still wording. Part 8 already said a well-shaped span can still be fabrication. For an argument to enter the rule, the runtime has to parse it. A sentence in the bubble that says “not over fifty” does not count.

“A person has to nod,” in the last part, is a way to stop. The list in this part is the table before that stop. Without the table, the runtime will run every name it sees, and the nod sits empty. An empty table is the same thing as not having that stop.

### Ask before the door opens. A sentence in the bubble is not a question

“First” is an order. The model hands over a name on the list; the runtime stops. What you see is which door, which arguments, and which mark would sit outside. After you say “open,” the observation is “ordered” or “sent.” After you say “do not open,” the observation is “you said no,” and the loop should not hand over the same door again.

Asking late means the door has already opened. The order has left the kitchen, and the bubble then says “I just placed an order, is that all right?” That is not asking first. That is a notice after the fact. Part 13 already said the door opens outside the model, and the observation comes only after it has opened. Asking first has to block before the open. The one who blocks is the runtime, not a pause the model wrote for itself.

“Let me ask if you want to order” in the bubble is not a question either. That line does not hang the loop. If the runtime then runs `shopping.checkout`, the order is already outside before you can answer. Part 14 already said it: the steps in the bubble are wording too. Wording does not wait. What waits is the runtime hanging the loop outside the door.

“Put whatever is short on the list” in the goal is also not “place the order after listing.” The list is a sheet in the house. The order is a mark outside. That user sentence only covers the write. Reading it as a nod for every later door treats wording in the goal as a pass on the list. If the list is empty, there is no pass.

The four stops can still sit in the same job. Check for done first, then whether this door is on the ask-first list, then whether the same door has failed enough times, and the cap last. Stacked like that, it is still a check the runtime does outside the loop. Each round, the model still only hands over a next span.

### The usual mix-up

The usual mix-up is to treat “it is an agent” as proof that it knows which door is dangerous, that a question in the bubble counts as asking first, and that handing it a goal means every later door is already allowed.

The feeling comes from a product popup that says “allow this order,” and from “I need you to confirm” appearing in the bubble first. If the popup is what the runtime hangs when it sees the list, that is the ask in this part. If the model only appended a few questions and the door already opened behind them, that is courtesy on the interface.

The same mix-up treats “ask a person first” as caution the model grew. “Caution” sounds as if it will hold itself back. The one who holds back is the runtime. Put the model back at the end of the page, and it will hand over a name on the list again. Part 12 already said writing a name is not yet contact. What blocks the contact is the list, not a hesitation in this span.

The mix-up in the other direction is that every door must ask before the setup is safe, or that only doors that spend money have to ask, and a sent sentence or a deleted file does not. If every door asks, the loop will stop on a count, and the goal will not finish. If only money asks, a sentence is already on a roommate’s screen, and that glance does not come back. The list looks at whether the mark outside the door can be taken back, not only at the wallet.

What this part hands off is short. The actions that must ask a person first are the doors that leave a mark outside you cannot take back. The list is written outside the loop; the runtime blocks before the door opens; a question in the bubble is not a question. Looking and counting usually do not ask; spending, sending, deleting, publishing, and handing over a key usually do; a sheet you can still cross out has to be checked for whether it turns into a mark outside by itself. After a door has opened and a person has nodded, the next part splits how to tell whether it did the job right.
