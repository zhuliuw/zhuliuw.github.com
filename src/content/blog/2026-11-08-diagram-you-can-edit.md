---
title: "从这一系列里留下可以自己改的一张执行图"
description: "执行图是仓库里一张你能改的图，每一格指着这一次真会走到的文件；只改图，这一次仍走文件。 An execution diagram is a picture in the repository you can edit, each cell pointing at a file this run will actually walk; editing the picture alone leaves the run on the files."
pubDate: 2026-11-08
slug: 2026/11/08/diagram-you-can-edit
category: AI 系列
tags:
  - AI 系列
  - AI
draft: false
---

AI 系列第 28 篇。上一篇：[把一个最小循环接到自己的仓库](/2026/11/07/attach-the-smallest-loop/)。上一篇把最小循环收成仓库里能指着的四样，并停在一句：从这一系列里留下可以自己改的一张执行图。这一篇把那四样收成一张图。

## 中文

还是那句目标，还是那几扇门。上一篇的四样已经在仓库里：`loop.txt`、`doors/`、`history.txt`、`run`。这一篇不添新代码。留下的是一张图。你能改的格子指着这四样里的文件。用户这一句不是文件，是这次调用带进来的。

```text
[系统] 确认牛奶和鸡蛋的盒数。少于 2 盒的写进购物清单。
盒数请调用 fridge.count。写清单请调用 shopping.add。
不要编造盒数。步数上限 8。同一扇门同一组参数失败 3 次就停。
下单不在这份名单里。
[用户] 冰箱里牛奶和鸡蛋够不够？不够的列进清单。
[模型]
```

第十四篇那一圈，更早的中文单篇写成过组装、决定、执行、写回、检查是否停止：[AI 智能体的执行原理](/2026/10/09/ai-agent-execution/)。那一篇不算本系列的第一篇。这一篇仍从冰箱写起，留下的是你下周还能改的几格。

### 图是这一次会走到的几格，每一格指着一个文件

下周要改门，一句「这是什么」不告诉你打开哪个文件。用得上的是一张图：从哪一格进去，从哪一格出来，改这句话要动哪一份。把检索、第二个智能体、训练和 87 一起画上，这一圈又不走那些格，你就不知道今晚改哪一个文件。

留下的是仓库里的 `diagram.txt`，和 `loop.txt` 放在一起。它只画这一圈实际在走的路：

```text
diagram.txt    改某一格之前，先改它右边指着的文件。

拼页                          run 来拼。材料从这三处来
  页顶                       loop.txt
    目标：少于 2 才写入
    名单：fridge.count，shopping.add
    停：完成 / 放回满 8 次 / 同一门同一组参数失败 3 次
    名单外的名字不跑
  已经贴上的                  history.txt，这一次开头是空的
  用户这一句                  这次调用带进来的那一行
        |
        v
放回模型                      run 里把模型放在页末的那一行
  模型对着这一页，交下一段
  旁注：权重这一版今晚不动，不占一格
        |
        +-- 收口，且和 history 对得上
        |       run 里核对的那几行。过了，气泡交出去，不再放回
        |
        +-- 一个名字
              |
              v
认名字                        run
  名单上没有                  贴「不在名单上。」进 history.txt
  doors/ 里有这个文件         跑它，返回的那一行贴进 history.txt
        |
        v
还放回吗                      run，照 loop.txt 里的停
  完成、放回满 8 次、失败满 3 次     停
  否则                        回到拼页。历史比上一轮长
```

拼页写明字从哪三处来：页顶在 `loop.txt`，用户这一句由这次调用带进来，已经贴上的在 `history.txt`。三处拼在一起，才是这一次的前缀。放回模型指着 `run` 里的一行，不指着权重。第二十四篇写过：权重这一次坐着不动。训练在调用外面才写出新一版，这一圈走不到，所以不占一格。

认名字指着 `run`，跑起来指着 `doors/`。观察，连写错的那一行，都贴进 `history.txt`，下一轮再拼回页上。还放不放回，也指着 `run`。图上的 8 是放回的次数，不是门开了几次。没有「已写入。」，收口就不算完成。第十七篇有四种停，这一圈只接了三种。要人点头的那一种还没接上，图上就先不画空着的「问人」。`loop.txt` 里没有先写好的清单，图上也就没有「先计划」那一格。

### 它出现在这一次：三轮都在这几格上，改一格就改那个文件

还是牛奶 1、鸡蛋 4。`run` 读 `loop.txt`，历史是空的，走拼页，把模型放在页末。模型交出 `fridge.count`。`run` 在 `doors/` 里找到这个名字，跑你写的那段代码，把「牛奶 1」「鸡蛋 4」贴进 `history.txt`。这一轮不是收口，放回还不到 8 次，这一门也还没失败。走「否则」，回到拼页。这是第二次放回。

第二轮仍是这张图。模型看见 1 和 4，交出 `shopping.add`，参数是牛奶，贴上「已写入：牛奶。」鸡蛋是 4，不写，再回到拼页。第三轮交出收口：「今晚牛奶 1 盒已列进清单，鸡蛋 4 盒够。」少于 2 的已有「已写入」，`run` 走完成那一格，气泡交出去，不再放回。

三轮都在这张图上。本子没有被贴上来，没有第二页，87 没参加，两次放回之间也没有新的一版权重。

现在改一格。把「少于 2 才写入」改成「少于 1 才写入」。这一格指着 `loop.txt`。图上那一行要改，文件里那一句也要改。下一轮拼页读到的是新句子。牛奶是 1，不小于 1，这一次不再交 `shopping.add`。只改 `diagram.txt`、不改 `loop.txt`，`run` 仍读旧句子，牛奶仍会被写上。图告诉你该打开哪个文件。参加这一次的是文件。

加一格，也是这条规矩。你要下单先问人。这张图上没有 `shopping.checkout`。第十八篇写过：必须先问的那一份名单在循环外面，运行时在开门之前拦住。要加这一格，就在 `run` 里先停住等人，`diagram.txt` 上才多出「等人点头」。只在图上画一个问号，`doors/` 里仍然没有这扇门，`run` 里也没有拦住的那一行。模型若交出 `shopping.checkout`，走的仍是「名单上没有」，贴一行「不在名单上。」问号那一格没有被走到。

第二十三篇的三种改法落在不同的格上。改提示，改拼页指着的字，权重不动。改检索，这一圈还没有那一格；要加，就在拼页旁边加一格，并让 `run` 真的去贴，没贴上的这次读不到。改微调，改的是旁边那句「这一版」，不是今晚格子里的字。

### 一个常见误会

误会是：产品上那张架构图就是这张执行图；或者模型会读这张图，照着格子走；或者把系列里每一篇都画上去，图才算从这一系列里留下了。

会有这种感觉，是因为架构图上也有模型、记忆、工具、计划这几个圆。圆不指着 `loop.txt`，也不指着 `doors/` 里的某一个文件。你改圆的颜色，今晚的冰箱不开。框架附带的那张图是形状。上一篇写过：形状不是接上。接上，是这一次走你的文件。要留下的图，是这些文件在这一次里的走法，而且你下周打得开、改得了。

模型并不读 `diagram.txt`。它看见的是拼出来的那一页。图不在页上，这一次的打分就碰不到它。你若把整张图贴进 `loop.txt`，它就变成第五篇的材料。字可以在页上，门仍要 `run` 去开。它也不是第十五篇那种窗口外的记忆。那种记忆要再贴回来，下一轮才读得到。这张图的读者是你。你靠它去改文件。把它当成第二份脑子，格子仍不参加下一次打分。

另一个方向上的误会，是格越多越忠于这一系列。检索、第二页、87、训练，这一次都没走。画上去，你会去改一个今晚没有的文件，或把 87 当成这张图的输出。第二十六篇的 87 是另一叠上的计数，不打开今晚的门。第二十一篇的第二页是另一张图，不是这一张上多出来的、也能看见这台冰箱的格子。没走进这一圈的，注明「这一次没有」。要加，先改文件，再加格。

图还会过时。你在 `doors/` 里加了一扇门，图上仍是两扇。下周你对着图改「少于 2」，以为改的是正在跑的那一圈。正在跑的那一圈已经多了一扇门。图要和四样一起改。它指着的还是上一周的仓库时，就不再是这一次的执行图。

留下三句就够这一篇用：执行图是仓库里一张你能改的图，改得动的格指着这一次真会走到的文件；只改图不改文件，这一次仍走文件；没走进这一圈的，不要画成这一张图上的格。下一篇再拆：拿这一次的轨迹核对这张图还在不在。

## English

Part 28 starts where [part 27](/2026/11/07/attach-the-smallest-loop/) stopped. The last part folded the smallest loop into four things you can point at in the repository, and stopped on one line: leave, from this series, one execution diagram you can change yourself. This part folds those four into that diagram.

The goal is the same, and so are the doors. The four things are already in the repository: `loop.txt`, `doors/`, `history.txt`, and `run`. This part adds no further piece of code that runs. What it leaves is a picture. A cell you can change points at one of those four, which is why the cell can change. The user's line is not a file. This call brings it in.

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

An earlier Chinese piece, outside this series, wrote the loop from part 14 as assemble, decide, run, write back, and check whether to stop: [how an agent actually runs](/2026/10/09/ai-agent-execution/). That piece is not part 1. This part still starts from the fridge. What it leaves is a few cells you can still change next week.

### The diagram is the cells this run will walk, and each cell points at a file

Next week, when you change a door, a sentence that says what something is does not tell you which file to open. The picture that helps says which cell this run enters, which cell it leaves by, and which file has to move when this sentence changes. Draw retrieval, a second agent, training, and that 87 on the same sheet, while this loop does not walk them, and you no longer know which file to edit tonight.

What you leave is `diagram.txt` in the repository, next to `loop.txt`. It draws only the path this loop actually walks:

```text
diagram.txt    Before you change a cell, change the file it points at.

assemble the page                 run does this. The material comes from three places
  top of the page                 loop.txt
    goal: write it only below 2
    list: fridge.count, shopping.add
    stops: done / 8 put-backs / the same door fails 3 times with the same arguments
    a name off the list does not run
  already pasted                  history.txt, empty at the start of this run
  the user's line                 the line this call brought in
        |
        v
put the model back                the line in run that puts the model at the end of the page
  the model hands over a next span for this page
  note beside it: this edition of the weights does not move tonight, and it is not a cell
        |
        +-- a close, and it matches history
        |       the lines in run that check. If they pass, hand over the bubble and do not put the model back
        |
        +-- a name
              |
              v
recognize the name                run
  not on the list                 paste "not on the list." into history.txt
  doors/ has this file            run it, and paste the line it returns into history.txt
        |
        v
put the model back again?         run, using the stops written in loop.txt
  done, 8 put-backs, or 3 failures      stop
  otherwise                       return to assemble the page. The history is longer than last round
```

Assembling the page names the three sources of the wording. The top lives in `loop.txt`. The user's line comes in with this call. What was already pasted lives in `history.txt`. The three together are this call's prefix. Putting the model back points at a line in `run`, not at the weights. Part 24 already said the weights sit still for this call. Training writes a new edition outside the call. This loop never walks that step, so the edition does not get a cell.

Recognizing a name points at `run`. Running it points at `doors/`. The observation, including a wrong line, is pasted into `history.txt` and assembled back onto the page next round. Whether to put the model back points at `run` as well. The 8 on the diagram is how many times the model is put back. It is not how many doors opened. With no "written." in the history, a closing sentence is not done. Part 17 named four stops. This loop wires three. The one that waits for a person to nod is not wired yet, so the picture does not draw an empty "ask first" cell. If `loop.txt` has no plan written out first, the picture has no cell for that either.

### Where it shows up: three rounds stay on these cells, and editing a cell means editing that file

Milk is 1, eggs are 4. `run` reads `loop.txt`, finds an empty history, assembles the page, and puts the model at the end. The model hands over `fridge.count`. `run` finds that name under `doors/` and runs the code you wrote. It pastes "milk 1" and "eggs 4" into `history.txt`. This round is not a close. The put-backs are not at 8. This door has not failed. The run takes the "otherwise" branch and returns to assembling the page. That is the second put-back.

The second round is the same picture. The model meets 1 and 4, hands over `shopping.add` with milk, and "written: milk." is pasted on. Eggs stay off, because 4 is not below 2, and the run returns to assembling the page. On the third round the model hands over a close: "Tonight 1 carton of milk is on the list, and 4 cartons of eggs are enough." The count below 2 already has "written." `run` takes the done cell, gives you the bubble, and does not put the model back.

All three rounds stay on this picture. No notebook was pasted on, there is no second page, 87 is not in the round, and no new edition of the weights appears between put-backs.

Now change one cell. Change "write it only below 2" to "write it only below 1." That cell points at `loop.txt`. The line on the picture changes, and the sentence in the file changes with it. The next time the page is assembled, the new sentence is what gets read. Milk is 1, which is not below 1, so this run does not hand over `shopping.add`. Edit only `diagram.txt`, leave `loop.txt` alone, and `run` still reads the old sentence. Milk is still written onto the list. The picture tells you which file to open. The file is what joins this run.

Adding a cell follows the same rule. Suppose an order has to ask a person first. This picture has no `shopping.checkout`. Part 18 already said the list of doors that must ask first lives outside the loop, and the runtime blocks before the door opens. To add the cell, `run` has to stop and wait for the person, and only then does `diagram.txt` gain an "wait for a nod" cell. A question mark drawn on the picture alone does not add the door under `doors/`, and it does not add the blocking line in `run`. If the model hands over `shopping.checkout`, the walk is still "not on the list," and the pasted line is "not on the list." The question-mark cell was never walked.

The three changes from part 23 land on different cells. Editing the prompt edits the wording the assemble cell points at. The weights stay put. Retrieval has no cell on this loop yet. To add one, put a cell beside assemble and make `run` actually paste. What was never pasted is not read in this call. Fine-tuning edits the note that says "this edition." It does not edit the wording inside a cell tonight.

### The usual mix-up

The usual mix-up is to treat the architecture drawing on a product page as this execution diagram; or to treat the model as a reader of the diagram, walking the cells; or to treat a cell for every part of the series as the picture this series asked you to leave.

The feeling comes from an architecture drawing that already has circles for model, memory, tools, and plan. A circle does not point at `loop.txt`, and it does not point at one file under `doors/`. Recoloring the circle does not open tonight's fridge. The drawing that arrives with a framework is a shape. The last part already said a shape is not yet attached. Attached means this run walks your files. The diagram worth leaving is the way those files walk this time, in a file you can open and change next week.

The model does not read `diagram.txt`. It sees the page that was assembled. If the picture is not on that page, this call's scores never meet it. Paste the whole diagram into `loop.txt` and it becomes material of the kind in part 5. The wording can sit on the page, and the door still has to be opened by `run`. It is not the out-of-window memory from part 15 either. That memory has to be pasted back before a later round can read it. You are the reader of this picture. You use it to edit the files. Treat it as a second mind, and the cells still do not join the next scores.

The mix-up in the other direction says more cells are more faithful to the series. Retrieval, a second page, 87, and training were not walked this time. Draw them, and you will edit a file that does not exist tonight, or you will read 87 as something this picture output. The 87 from part 26 is a count on another stack. It does not open tonight's door. The second page from part 21 is another diagram, not an extra cell on this one that can also see this fridge. What this loop did not walk stays off the picture, with a note that says "not this time." To add it, change the file first, then add the cell.

The picture also goes stale. Add a door under `doors/` and the diagram can still show two. Next week you edit "below 2" on the picture and believe you edited the loop that is running. The loop that is running already has one more door. The diagram has to change with the four files. While it still points at last week's repository, it is no longer this run's execution diagram.

What this part hands off is short. An execution diagram is a picture in the repository you can edit, and a cell you can change points at a file this run will actually walk. Edit the picture and leave the file, and this run still walks the file. What this loop did not walk should not be drawn as a cell on this picture. The next part splits how to take this run's trace and check whether the diagram is still the one that ran.
