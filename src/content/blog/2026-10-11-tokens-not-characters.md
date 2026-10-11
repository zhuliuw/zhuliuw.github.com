---
title: "Token：模型看见的不是字，是切好的片段"
description: "便签先被切成词表里的片段并换成编号，模型每一步接上的是下一块。 The note is cut into vocabulary pieces and numbered first; each step appends the next piece."
pubDate: 2026-10-11
slug: 2026/10/11/tokens-not-characters
category: AI 系列
tags:
  - AI 系列
  - AI
draft: false
---

AI 系列第 2 篇。上一篇：[模型在做什么：接下去最可能的下一段](/2026/10/10/next-likely-span/)。上一篇里，模型接上的是很小的一截。这一截有个名字，叫 token：词表里预先切好的一块。

## 中文

冰箱门上还是那张便签。

```text
牛奶只剩最后一盒。
回家顺路
```

人读到的是字。字要变成模型的输入，中间还有一次切分。切分用的是一份事先写好的词表，也就是一张允许出现的片段清单。便签被收成清单上的片段，每个片段换成一个编号。这些片段就叫 token。模型这次调用拿到的，是编号排成的一串。

上一篇说模型看见前缀。前缀拼好之后、模型开口之前，前缀已经切成编号。模型没有一条路再走回纸上的笔画。

### 清单上有的，才能单独成块

词表在这次调用之前就定好了。它不按词典分栏，也不按词性。长成这份清单的办法，可以收成一句：从很小的块开始，把经常紧挨着出现的两块收成新的一块，写回清单，再重复很多轮。常见的字串因此变成一块，少见的字串还停在小块上。调用开始时，这种统计已经结束。清单和合并的先后顺序都冻住了。切分器只按冻住的顺序，把眼前这段文字收拢。同一段文字、同一份词表，每次切出来的都是同一串。

为了看清切在哪里，下面用一份只为这张便签准备的小词表。号码是这篇现编的，用来看「交给模型的是号码」。真产品的清单要大得多，关系是同一种：清单上有的，才能单独成块。两行之间的换行也占一块，下面先把它放下，只看字。

```text
牛奶 11
只剩 12
最后 13
一盒 14
。   15
回家 16
顺路 17
买   18
```

「一」和「盒」这种更小的块通常还在清单里。它们挨在一起时，合并顺序已经要求收成「一盒」，所以这张便签上用的是 14 这一块。模型不能在调用中途另造一块。它没有「往清单里加一条」这个动作。

这张便签因此变成：

```text
牛奶 | 只剩 | 最后 | 一盒 | 。 | 回家 | 顺路
11     12     13     14    15   16     17
```

纸上你可以指出「一盒」的第二个字是「盒」。编号那一串里，没有一个单独的位置叫「盒」。14 是一整块。

标点也这样切。在这份小词表里，句号自己是 15。英文里还有一件纸上不容易注意到的事：很多现在常用的词表，把单词前面的空格粘进后一个片段。下面用 `␣` 代表一个空格。句子开头的 `milk`，和句子中间的 `␣milk`，可以是两个不同的编号。人把它们读成同一个词。模型收到的是清单上的两条。

少见的字串会碎。把便签改成一张补货单：

```text
补货 A91F-77C2
```

「牛奶」这种常见字串往往是一块。「A91F-77C2」很少整段出现，清单里通常没有这一整条，于是它被收成许多小块。常见的词表还会留着很小的兜底块，所以这串编号写得出来，代价是块数变多。两行在纸上可以一样短，编号的个数却差一截。以后量窗口和费用，数的是这个个数。这里先记住衡量标准：模型看见的长短，是块数。

### 一次回复里，这一刀在模型开口之前

上一篇的前缀，是运行时先拼好的一条文字：

```text
[系统] 用一句中文回答。
[用户] 牛奶只剩最后一盒。回家顺路要做什么？
[模型]
```

拼好以后，模型还没有开始接。切分器先把整条收成编号。角色标记也在这条里面。有的运行时为它们在词表里单独留了一块特殊片段，有的就是普通文字再切一次。两种做法交给模型的都已经是编号。`[系统]` 只是这篇里的写法。

模型站在这串编号的末尾。它交出的下一块，是清单里的一个编号。用上面的小词表，很顺的一块可以是「买」，号码 18。运行时把 18 译回「买」，接到已有的文字后面。编号序列是在末尾直接加上 18，不会先变回「回家顺路买」再整段重切。重切有时会改边界。

上一篇写过：便签从「回家顺路」长到「回家顺路买」，下一步更容易是「一盒」。用这份词表，那就是 18 后面再接 14。屏幕上的「买一盒」是两块译回文字之后拼起来的。气泡里的句子是给人读的。模型走过的每一步，是一个编号。

这次切分在整次执行里的位置是四拍：

```text
1. 运行时把材料拼成一条文字。
2. 切分器按词表把这条文字收成编号。
3. 模型只面对这串编号，交出下一块的编号。
4. 运行时把那个编号译回文字，放进气泡。
```

下一块怎么从清单里排到前面，是下一篇的题目。这一篇停在切分：模型开口之前，纸上的字已经收成编号。

### 一个常见误会

误会是：一个汉字是一步，一个英文单词是一步，模型像人一样逐字往下看。

气泡会帮着维持这个误会。编号译回文字以后，你读到的又是字，切分留在气泡外面。于是「买一盒牛奶」看起来像五个汉字走了五步。按上面的词表，「买」是一步，「一盒」是一步，「牛奶」也是一步。步数跟着切分走。

问模型「这张便签里，『盒』出现了几次」，它也可能答「一次」。这个回答说明不了序列里有单独的「盒」。上一篇说过，问句后面经常跟着一个数字，数字会排到前面。14 这块里面没有一个可以指出来的「盒」。答成「一次」，仍然是接得顺。

和这个误会连在一起的，是用字数比较两句话有多长。纸上「买一盒牛奶」和「补货 A91F-77C2」可以差不多短。交给模型的编号个数不一定接近。家务用语常常块数少，少见的编号块数多。用字数去估计它看了多少，估计的是纸。

留下三句就够这一篇用：模型拿到的是词表编号；一次续写的最小一截，是清单上的下一块；纸上一样长的两行，块数可以不同。下一块的分数从哪来，下一篇再写。

## English

Part 2 names the small piece from [part 1](/2026/10/10/next-likely-span/). That piece is a token: one entry from a vocabulary, cut before the model writes anything. The fridge note is the same.

```text
One carton of milk left.
On the way home
```

A person reads characters. The model call receives a row of integers. Between those two is a tokenizer and a fixed vocabulary, a list of pieces the tokenizer is allowed to emit. The note is gathered into pieces from that list, and each piece is swapped for its number. Part 1 called the input a prefix. By the time the model sees the prefix, the prefix has already been replaced by those numbers. There is no second path back to the ink.

The list is closed before this call. It is not a dictionary and it is not sorted by part of speech. The usual way it grows is easy to picture: start from very small pieces, and when two pieces sit next to each other often, freeze them together as a new piece and put that piece on the list. Repeat that for many rounds. Common stretches become one entry. Rare stretches stay broken. None of that counting happens during the call. The list and the order of merges are already frozen, and the tokenizer only applies them. The same note and the same list produce the same cut every time.

A toy list is enough to see the cut. The numbers are made up for this page. A real vocabulary is much larger, and the relationship is the same: a piece can stand alone only if the list contains it.

```text
One      21
␣carton  22
␣of      23
␣milk    24
␣left    25
.        26
On       27
␣the     28
␣way     29
␣home    30
␣buy     31
␣a       32
```

`␣` stands for a space. The space is part of the piece on purpose. Many tokenizers in current use glue it to the following word, so `milk` at the start of a line and `␣milk` after a space are two different numbers. A reader treats them as one word. The model is handed two entries. The line break between the two lines of the note is a piece too; the cut below leaves it out and keeps the words.

On this list the note becomes:

```text
One | ␣carton | ␣of | ␣milk | ␣left | . | On | ␣the | ␣way | ␣home
21    22        23    24      25     26   27   28     29     30
```

You can point at the letter s in “carton” on the paper. The row of numbers has no separate position for that letter. 22 is the whole piece.

A rare string breaks the other way. Replace the errand with a reorder code:

```text
Reorder A91F-77C2
```

“milk” is often one piece. “A91F-77C2” is rarely stored whole, so it is gathered from many smaller pieces. Common lists also keep very small fallback pieces, which means the code can still be written. The price is the number of pieces. Two lines can take the same space on paper and very different space in the row of numbers. Later parts of this series measure the context window and the bill in that count. The measure to keep here is the count of pieces.

In a chat product the prefix is assembled first, as part 1 described:

```text
[system] Answer in one English sentence.
[user] One carton of milk is left. What should I do on the way home?
[model]
```

The model does not start writing when that text exists. The tokenizer cuts the whole page, including the role markers. Some runtimes reserve a single special piece for a marker. Others cut the marker as ordinary text. Either way, what arrives is a row of numbers. The bracketed words are the notation on this page.

The model stands at the end of the row and returns the next number, one list entry. On the toy list a fitting next piece is `␣buy`, number 31. The runtime decodes 31 back to characters and appends them to the text. The row of numbers grows by appending 31. It does not turn “On the way home buy” back into characters to be cut again. Cutting again can move the boundaries.

Part 1 followed the note from “on the way home” to “on the way home, buy”, and said the next piece then tends to be “a carton”. On this list that is 31, then 32, then 22: `␣buy`, `␣a`, `␣carton`. The bubble shows “buy a carton” because the pieces were decoded and joined. Each step the model took was one number.

The order inside one reply is:

```text
1. The runtime joins the materials into one text.
2. The tokenizer turns that text into numbers from the vocabulary.
3. The model sees the numbers and returns the next number.
4. The runtime decodes that number into characters for the bubble.
```

How the next number reaches the front of the ranking is the next part. This part stops at the cut.

The usual mix-up is to treat one English word, or one Chinese character, as one step, and to picture the model reading glyphs the way a person does. The bubble supports that picture: after decoding, the reply is characters again, and the cut stayed outside the bubble. “buy a carton” is three words, and on this particular list it is also three pieces. That lineup belongs to the list. “carton” is one piece and six letters, so the letters are not six steps. A rarer spelling of the same errand, or the code `A91F-77C2`, comes apart into more pieces than the spaces suggest. The step count follows the cut.

Ask how many times the letter s appears in “carton”, and the reply may be “one”. That reply does not show a separate s in the row. Part 1 already noted that a question is often followed by a number, so a number ranks high. Entry 22 has no slot you can point at and call s. A correct count is still a smooth continuation.

The same mix-up shows up when two lines are compared by how many characters they have. “buy a carton” and “Reorder A91F-77C2” can look similar in length on paper. The rows of numbers need not be close. Household words often stay in few pieces. Rare codes often do not. A character count estimates the paper.

What this part hands off is short. The model receives vocabulary numbers. The smallest append is the next entry on that list. Two lines of equal length on paper can be different lengths in pieces. Where the score for the next piece comes from is the next part.
