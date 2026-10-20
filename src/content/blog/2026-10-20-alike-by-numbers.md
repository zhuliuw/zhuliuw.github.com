---
title: "嵌入：用一组数表示像不像"
description: "嵌入是把一段字收成一组数，用两串数的远近来挑哪几段像今天这句。 An embedding turns a stretch of text into a group of numbers; closeness between those groups is how retrieval picks stretches that look like this question."
pubDate: 2026-10-20
slug: 2026/10/20/alike-by-numbers
category: AI 系列
tags:
  - AI 系列
  - AI
draft: false
---

AI 系列第 11 篇。上一篇：[长资料进不了窗口：检索是在补这一刀](/2026/10/19/retrieval-fills-the-gap/)。上一篇把检索收成拼页时贴回来的几段，并停在一句：怎么判断哪几段「像」今天这句。这一篇把「像」收成一组数。

## 中文

还是那本厨房本子。问句还是：

```text
[系统] 用一个数字回答。
[用户] 冰箱里现在有几盒牛奶？
[模型]
```

本子里至少有三行：

```text
2026-10-18 冰箱：牛奶 1 盒。
上周冰箱：牛奶 2 盒。
洗衣机说明书：洗衣剂一盒。
```

上一篇说运行时会挑几段贴进这一页。挑的时候，写气泡的那个模型还没开口。第 3 拍还没给下一块打分。页都还没拼完。运行时要先在窗口外面给这些行排一个「像不像今天这句」的序。嵌入就是这个办法：把一段字先换成一组数，再用这组数比远近。

### 一段字换成一组数，像不像变成两串数近不近

另一次调用会把问句收成一串固定长度的数。同一套办法也会把本子里每一行收成同样长度的一串。两串数如果指向差不多的方向，运行时就说这两段字「像」。这组数叫嵌入。它不是第二篇里的编号。编号是词表上的一块一块；嵌入是整段字收完以后留下的一份坐标。

为了看清差别，下面用三组故意写得很短的数。真产品里每一组会有几百到几千个位置。号码是这篇现编的，用来看「比的是坐标」。关系是同一种：位置对上了，才能比。

```text
问句「冰箱里现在有几盒牛奶？」     0.9  0.8  0.1
「2026-10-18 冰箱：牛奶 1 盒。」   0.9  0.7  0.1
「洗衣机说明书：洗衣剂一盒。」     0.2  0.6  0.8
```

前两串挨得近。「洗衣机」那一串偏了。运行时按远近排序，就会先贴冰箱那一行。贴上去的仍是字，不是这串数。第 2 拍切到的，还是「牛奶」「1 盒」这种片段。嵌入的数只活在窗口外面的那次比较里。比较结束，数就完成了任务。

这组数从哪来？不是第 3 拍给下一块打的分。那一次打分是「下一块接得顺不顺」。嵌入是另一张纸、另一次调用：面前是一段已经写好的字，交出来的不是下一段，而是这组坐标。很多产品里，做这件事的模型和写气泡的模型不是同一个。写气泡的那个仍然只看见贴进来的字。

本子可以事先算好。每一行在放进柜子时就算成一组数，存起来。你今晚打出问句，运行时只把问句新算一次，再拿去和柜子里那些数比。翻柜子翻的是数。贴回来的是原来的字。

### 像，只说明两串数近，不说明那一行是今晚的厨房

「上周冰箱：牛奶 2 盒」和今天这句也很像。两行都有冰箱、都有牛奶、都有盒数。嵌入会给它一个也很近的位置。上一篇写过：贴了哪一行，前缀就跟着哪一行走。嵌入不会因为日期更旧，就自动把它推远。日期是字面上的事实。远近是两串数挨不挨着。没有人把「今晚」写进比较里的话，上周那一行完全可以排到最前。

洗衣机那一行也不是绝对远。「一盒」这种字样两边都有。如果本子更乱，问句更短，它也可能挤进前几名。嵌入失败的样子，和上一篇检索失败的样子是同一件事：页上出现了字，这些字只是问到了另一件家务。不是比较器坏了。是「像」这个字被收成了近，近并不等于同一件家务。

同一句问法，换几个字，坐标也会动。「还有几盒」换成「牛奶过没过期」，近的那几行可能还是冰箱记录，也可能滑到说明书里写保质期的那一页。运行时贴哪几段，整页的前缀就换成哪几段。第 3 拍仍然只对贴上来的那些块打分。

### 这组数不进窗口，也不负责真假

第四篇的窗口按块数计。嵌入的几百个数不是那些块。它们没有座位。窗口里坐的是被挑中的原文。所以你会看到「已参考资料」，看不到那串 0.9、0.8。把数写进页里也帮不上第 3 拍：模型要续写的是字，不是去解一道坐标题。

近，也不等于真。本子写着「1 盒」，今晚已经喝掉，两串数仍然可以很近。嵌入比的是已经写好的字和问句像不像。它没有打开冰箱。第八篇的观察才可能是今晚去数的结果。嵌入翻的是本子。本子和厨房之间那一刀，上一篇已经切开，这一篇没有把它缝回去。

资料贴上来以后，「2。」仍然可以被接出来。嵌入只决定谁配占用这格容量。它不管后面每一块是不是顺着资料走。第九篇的骨架也管不了这件事。

### 一个常见误会

误会是：它把意思理解成一组数了，所以近的就是同一回事，远的就是无关。

会有这种感觉，是因为「语义」「向量」这类词听起来像理解。实际交出来的是坐标。坐标近，是因为这两段字在用来训练那些坐标的文字里常常挨着出现，或者字面上就叠着很多相同的片段。近可以帮运行时少翻许多页。近不是一份证明，写着「这两段在讲同一件厨房事实」。

连在这个误会上的，是把嵌入当成写气泡的那个模型新长出来的记忆。算坐标的那一次调用，常常根本不是它。就算是同一个产品里的另一个模型，动作也不同：一个交坐标，一个交下一段。写气泡的那个仍然只做第一篇写过的事。柜子里的数再近，不贴成字，它也读不到。

另一个方向上的误会是：问句和资料都变成数了，就可以不贴原文，直接拿数来回答。数没有盒数。数只有远近。盒数仍然写在被贴上来的那一行字里。没有贴，第 3 拍就没有「1」。第八篇的编造还可以再出现。

留下三句就够这一篇用：嵌入是把一段字收成一组数，用远近表示像不像；这组数活在窗口外面的挑选里，贴进页的仍是原文；近不等于今晚厨房里的事实，也不等于后面每一块都顺着资料走。本子里没有的东西，再近也比不出来。下一篇写模型要接触厨房本身时，只能通过工具。

## English

Part 11 starts where [part 10](/2026/10/19/retrieval-fills-the-gap/) stopped. The last part folded retrieval into a few passages pasted while the page is assembled, and stopped on one line: how to tell which stretches look like today’s question. This part folds “looks like” into a group of numbers.

The household notebook is the same. The question is still:

```text
[system] Answer with one number.
[user] How many cartons of milk are in the fridge right now?
[model]
```

The notebook has at least three lines:

```text
2026-10-18 fridge: 1 carton of milk.
Last week’s fridge: 2 cartons of milk.
Washer manual: one box of detergent.
```

Part 10 said the runtime will pick a few stretches and paste them onto this page. While it picks, the model that writes the bubble has not opened its mouth. Beat 3 has not scored the next piece. The page is not assembled yet. The runtime first needs an order, outside the window, for how much each line looks like today’s question. An embedding is that method: turn a stretch of text into a group of numbers, then use those groups to measure near and far.

### A stretch becomes a group of numbers; alike becomes two groups sitting close

A separate call folds the question into a row of numbers with a fixed length. The same method folds each notebook line into a row of the same length. If two rows point in roughly the same direction, the runtime calls those stretches alike. That group of numbers is an embedding. It is not the numbering from part 2. Those numbers are vocabulary pieces, one by one. An embedding is a set of coordinates left after a whole stretch has been folded.

To see the difference, here are three groups written short on purpose. In a real product each group has hundreds or thousands of places. The digits are made up for this page, to show that the comparison is coordinates. The relation is the same: the places have to line up before two rows can be compared.

```text
question “How many cartons of milk are in the fridge right now?”   0.9  0.8  0.1
“2026-10-18 fridge: 1 carton of milk.”                             0.9  0.7  0.1
“Washer manual: one box of detergent.”                             0.2  0.6  0.8
```

The first two rows sit close. The washer row leans away. Rank by distance, and the runtime pastes the fridge line first. What gets pasted is still words, not this row of numbers. Beat 2 still cuts “milk” and “1 carton.” The embedding numbers live only in that comparison outside the window. Once the comparison is done, the numbers have finished their job.

Where do the numbers come from? Not from beat 3 scoring the next piece. That score is about which next piece fits. An embedding is another sheet, another call: in front of it sits a stretch already written, and what it hands back is not a next span but this set of coordinates. In many products, the model that does this and the model that writes the bubble are not the same one. The one that writes the bubble still sees only the pasted words.

The notebook can be scored in advance. Each line is turned into a group of numbers when it is put in the cabinet, and stored. Tonight you type the question; the runtime only scores the question once, then compares it with the numbers already in the cabinet. What it searches is numbers. What it pastes back is the original words.

### Alike only means two rows are close, not that the line is tonight’s kitchen

“Last week’s fridge: 2 cartons of milk” also looks like today’s question. Both lines have a fridge, milk, and a count. An embedding will give it a close place too. Part 10 already said: whichever line is pasted is the line the prefix follows. An embedding does not push a line away just because the date is older. The date is a fact in the wording. Near and far are whether two rows of numbers sit close. If nobody wrote “tonight” into the comparison, last week’s line can sit at the front.

The washer line is not infinitely far either. Both sides contain “one box.” If the notebook is messier and the question is shorter, it can squeeze into the top few. Embedding failure looks like retrieval failure in the last part: words appear on the page, words that belong to a different errand. The comparer did not break. “Alike” was folded into closeness, and closeness is not the same as the same errand.

Change a few words in the same question, and the coordinates move. Swap “how many cartons” for “has the milk gone off,” and the nearest lines may still be the fridge log, or they may slide to a manual page about expiry. Whichever stretches the runtime pastes become the prefix on the whole page. Beat 3 still only scores the pieces that were pasted.

### The numbers do not enter the window, and they do not settle truth

Part 4’s window is counted in pieces. The hundreds of embedding numbers are not those pieces. They have no seat. What sits in the window is the original wording that was chosen. So the interface can say “sources used” without ever showing 0.9, 0.8. Writing the numbers onto the page would not help beat 3 either: the model is to continue in words, not to solve a coordinate problem.

Close is also not true. If the notebook says “1 carton” and tonight’s carton has already been drunk, the two rows can still sit close. An embedding compares already-written words with the question. It does not open the fridge. Part 8’s observation is the thing that can be tonight’s count. Embeddings search a notebook. The cut between notebook and kitchen was already made in the last part. This part does not sew it back.

After a source is pasted, “2.” can still be appended. An embedding only decides who deserves this capacity. It does not watch whether every later piece follows the source. Part 9’s skeleton does not watch that either.

### The usual mix-up

The usual mix-up is to treat this as meaning folded into numbers, so close means the same thing and far means irrelevant.

The feeling comes from words like “semantic” and “vector,” which sound like understanding. What is handed over is coordinates. Coordinates sit close because those two stretches often appeared near each other in the text used to train the coordinates, or because the wording already shares many of the same pieces. Closeness can save the runtime from turning many pages. Closeness is not a certificate that says “these two stretches are the same kitchen fact.”

The same mix-up treats embeddings as a new memory the bubble-writing model grew. The call that computes coordinates is often not that model at all. Even when it is another model in the same product, the action is different: one hands back coordinates, one hands back a next span. The one that writes the bubble still only does what part 1 described. Numbers in the cabinet can sit as close as they like; if they are not pasted as words, that model cannot read them.

The mix-up in the other direction is that once question and sources are numbers, the original wording no longer needs to be pasted, and the numbers can answer by themselves. The numbers have no carton count. They only have near and far. The count is still written in the line that gets pasted. With no paste, beat 3 has no “1.” Part 8’s fabrication can appear again.

What this part hands off is short. An embedding folds a stretch of text into a group of numbers, and uses near and far for alike. Those numbers live in the picking outside the window; what is pasted onto the page is still the original wording. Close is not tonight’s kitchen, and it is not a promise that every later piece will follow the source. What is not in the notebook cannot be compared, however close other rows sit. The next part is the only way the model can touch the kitchen itself: a tool.
