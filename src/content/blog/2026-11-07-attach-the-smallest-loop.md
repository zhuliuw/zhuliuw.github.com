---
title: "把一个最小循环接到自己的仓库"
description: "最小循环是你仓库里能指着的四样：拼页、放回、跑门、决定停；别人那一叠上的 87 接不上今晚的门。 The smallest loop is four things you can point at in your repository: assemble the page, put the model back, run the door, and decide whether to stop; an 87 on someone else's stack does not attach tonight's door."
pubDate: 2026-11-07
slug: 2026/11/07/attach-the-smallest-loop
category: AI 系列
tags:
  - AI 系列
  - AI
draft: false
---

AI 系列第 27 篇。上一篇：[基准数字在说什么，又没说什么](/2026/11/06/what-the-number-counts/)。上一篇把基准收成一叠冻住的页上判过的次数，并停在一句：把一个最小循环接到自己的仓库。这一篇拆这一接。

## 中文

还是那句目标，还是那几扇门。上一篇的 87 记在别人那一叠的账上，不打开今晚的冰箱。这一篇不改那个数，只看最小的一圈怎样接进你能打开、能改的那一份代码。

```text
[系统] 确认牛奶和鸡蛋的盒数。少于 2 盒的写进购物清单。
盒数请调用 fridge.count。写清单请调用 shopping.add。
不要编造盒数。步数上限 8。同一扇门同一组参数失败 3 次就停。
下单不在这份名单里。
[用户] 冰箱里牛奶和鸡蛋够不够？不够的列进清单。
[模型]
```

第十四篇把智能体收成一句还没做完的目标，加上会停下来再出发的循环。更早的中文单篇把这圈写成组装、决定、执行、写回、检查是否停止：[AI 智能体的执行原理](/2026/10/09/ai-agent-execution/)。那一篇不算本系列的第一篇。这一篇只钉住这圈怎样接进你自己的仓库。

### 最小，是仓库里能指着的四样

接到仓库，不是把「你是一个智能体」再写一行进页顶。页顶仍是第五篇的材料。字写上了，模型交完下一段仍会停。接上，是运行时变成你这份仓库里的文件。

最小就四样：

```text
loop.txt     目标、名单、步数上限、失败几次就停、哪些名字不跑
doors/       fridge.count 和 shopping.add。每个名字是一段你写的代码，跑完返回一行字
history.txt  这一次已经贴上的名字和观察。开头是空的
run          拼页，把模型放回页末，认出名字就去跑，把观察贴上，再决定还放不放回
```

少任何一样，圈就没有接上。没有 loop.txt，目标只在你脑子里，这一页的页顶是空的。没有 doors/，名字写出来也没人跑，第十二篇的接触一次都不发生。没有 history.txt，下一轮看不见上一轮的 1 和「已写入」。没有 run，就没有人在一扇门之后把模型放回页末，和第一篇的一次调用没有两样。

checkout 不在这份最小名单里，doors/ 里也没有这个文件。模型仍可能交出 `shopping.checkout`。run 认不出，就不跑，贴一行「不在名单上。」第二十五篇的边界，在这里是文件夹里少一个文件，不是权重忽然学会了不买。

权重可以仍留在别人的服务上。第二十四篇写过：推理是对着这一版权重读这一页。这份仓库要能改的，是拼页、认名字、贴观察、决定停不停。

### 它出现在这一次：三轮都由 run 放回

还是牛奶 1、鸡蛋 4。run 读 loop.txt，history 是空的，把模型放在页末。第 3 拍对着这一页打分，第 4 拍取走 `fridge.count`。这一次模型的工作结束了。门还关着。

run 在 doors/ 里找到这个名字，跑你写的那段代码。代码去读今晚的盒数，返回「牛奶 1」「鸡蛋 4」。run 把名字和这两行贴进 history，再把模型放回更长的页末。这是第二次放回。第二十二篇那笔账上，这一步又记了一笔：前缀被再读一遍，门后再等一轮。

第二轮，模型看见 1 和 4，交出 `shopping.add`，参数是牛奶。run 再去跑。你的代码把牛奶写进清单，返回「已写入：牛奶。」贴上，再放回。鸡蛋是 4，不写。

第三轮，模型交出一句收口：「今晚牛奶 1 盒已列进清单，鸡蛋 4 盒够。」run 按第十七篇核对：这一轮没有新的门名；少于 2 的有「已写入」；不少于 2 的没有被写上。这是完成。run 把气泡交给你，不再放回。

三轮用的是同一个模型。差别在 run 有没有在门与门之间把它放回去。上限 8 写在 loop.txt 里，走到 8 还没有能收口的观察，run 就停。同一扇门、同一组参数连着失败 3 次，比如清单写不进去，run 也停，并把「写不进去」留在 history 里。第二十篇写过：下一步会对着这行打分。模型接出「我好了」仍是页上的字。没有「已写入。」，run 不把那句话当完成。

87 没有参加这三轮。上一篇那一叠可以仍然报 87。你家冰箱开不开，只看 doors/ 里的 fridge.count 这次返回了什么。

### 自己的，是这一次真的走你改得了的三处

自己的仓库，不是克隆来的那一份文件夹。克隆来的 run 如果仍去跑写死的 100 页，观察仍是脚本里的盒数，接上的仍是上一篇的清点，今晚的门没开。

自己的，是这三处你能改，而且这一次执行真的走它们。

loop.txt 里的目标和名单，是这一页的页顶。你把「少于 2 才写」改成「少于 1 才写」，下一轮打分看见的就是新句子。这是第二十三篇的第一种改法：改提示。权重不动。

doors/ 里的代码，是门后的那一手。fridge.count 去读你仓库里的一个数字文件，改那个文件，观察就变。它去问你自己的接口，观察就是接口返回的那一行。两种都算接上，因为跑的是你这份代码。若这段代码只是把「牛奶 1」写死，第十二篇的接触没有发生。你把基准那一页搬进了自己的文件夹。

run 里的停止，是第十七篇那四种。完成看 history 里有没有对应观察。上限看放回次数。重复失败看同一个名字、同一组参数。需要人点头的门，最小这一圈可以先不接。要接，就在 run 里先停住，等人回一句，再决定跑不跑。第二十五篇写过：确认是运行时在门外拦一下。拦的那一行在你的 run 里，你才改得了它何时拦。

第十九篇的例子可以留在同一份仓库里，判今晚这一页过不过。那一判不是上一篇的 87。把 87 写进 loop.txt，只是第五篇的又一行字，不改 doors/ 的返回，也不替 run 决定停不停。

### 一个常见误会

误会是：仓库里有一份智能体框架，循环就已经接到自己的仓库了；或者把循环写进系统那一行，模型就会自己一圈一圈跑；或者把权重文件放进仓库，门就会开。

会有这种感觉，是因为克隆下来的文件夹里常常已经有 loop、tools、agent 这几个名字。名字是文件名。文件名不拼页，也不放回。今晚 run 没有被调用，history 仍是空的，冰箱仍关着。框架是别人写好的四样的形状。接到自己的仓库，是这四样在这一次里读的是你的目标、跑的是你的门、停的是你写的条件。

连在这个误会上的，是把「接到仓库」当成第二十三篇的微调，或者当成把基准仓库跑出更高的分。微调改的是权重那一版。基准改的是别人那一叠上的计数。这一篇接上的是循环外面的那一手：谁拼页，谁跑门，谁决定还放不放回。这三件都不在权重里，也不在 87 里。

另一个方向上的误会是：最小就要把检索、第二个智能体、规划的三种排法一起接上。那些是别的篇里的安排。最小这一圈只有一个目标、两扇门、一份 history、一个 run。多接一扇门，第二十二篇的账就多一步。先让这一圈指着文件走完牛奶和鸡蛋，再加。

留下三句就够这一篇用：最小循环是仓库里能指着的四样，拼页、放回、跑门、决定停；自己的仓库是这四样这一次读你的目标、跑你的门，而不是别人冻住的那一叠；87 和写在页顶的「你是智能体」都接不上今晚的门。下一篇再拆：从这一系列里留下可以自己改的一张执行图。

## English

Part 27 starts where [part 26](/2026/11/06/what-the-number-counts/) stopped. The last part folded a benchmark into how many pages on one frozen stack passed one check, and stopped on one line: attach one smallest loop to your own repository. This part splits that attachment.

The goal is the same, and so are the doors. The 87 from the last part sits on someone else's books. It does not open tonight's fridge. This part leaves that number alone. It only follows how the smallest loop is attached inside code you can open and change.

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

Part 14 folded an agent into one unfinished goal plus a loop that stops and starts again. An earlier Chinese piece, outside this series, wrote that loop as assemble, decide, run, write back, and check whether to stop: [how an agent actually runs](/2026/10/09/ai-agent-execution/). That piece is not part 1. This part still starts from the fridge. It only pins the smallest loop to your own repository, and to a file you can point at for each step.

### Smallest means four things you can point at

Attaching the loop is not one more line at the top of the page that says "you are an agent." The top of the page is still the material from part 5. After those words are written, the model still stops once it has handed over the next span. The loop is attached when the runtime is files in this repository.

Four files are enough:

```text
loop.txt      goal, door list, step cap, how many failures stop the loop, which names never run
doors/        fridge.count and shopping.add. Each name is code you wrote. A run of it returns one line
history.txt   names and observations already pasted for this call. It starts empty
run           assemble the page, put the model at the end, run a recognized name, paste the observation, decide whether to put the model back
```

Leave one out and the loop is not attached. Without loop.txt the goal stays in your head, and the top of this page is empty. Without doors/ a written name has no code behind it, and the contact from part 12 never happens. Without history.txt the next round cannot see the 1, or the line that says "written." Without run, nobody puts the model back after a door, and the call is the single continuation from part 1.

checkout is not on this short list, and doors/ has no file by that name. The model can still hand over `shopping.checkout`. run does not recognize it, does not run it, and pastes "not on the list." The boundary from part 25 is a missing file here. The weights did not learn, on their own, to skip the purchase.

The weights can stay on someone else's service. Part 24 already said inference reads this page against that edition. The repository does not have to hold a copy. What you open and change is the page, the name, the pasted observation, and the decision to stop.

### Where it shows up: three rounds, and run is what puts the model back

Milk is 1, eggs are 4. run reads loop.txt, finds an empty history, and puts the model at the end of the page. Beat 3 scores the page. Beat 4 takes `fridge.count`. This call's work for the model is finished. The door is still shut.

run finds the name under doors/ and runs your code. The code reads tonight's counts and returns "milk 1" and "eggs 4." run pastes the name and those two lines into history, then puts the model at the end of the longer page. That is the second put-back. The bill from part 22 adds one: the prefix is read again, and there is another wait after the door.

On the second round the model meets 1 and 4 and hands over `shopping.add` with milk. run runs your code. The code writes milk onto the list and returns "written: milk." The line is pasted, and the model goes back to the end of the page. Eggs stay off the list, because 4 is not below 2.

On the third round the model hands over a closing sentence: "Tonight 1 carton of milk is on the list, and 4 cartons of eggs are enough." run checks it the way part 17 described. This round names no new door. The count below 2 has a "written" line. The count that is not below 2 was not written. That is done. run gives you the bubble and does not put the model back.

One model serves all three rounds. What changes is whether run put it back between doors. The cap of 8 lives in loop.txt. If the eighth put-back still has no closing sentence that passes, run stops. If the same door with the same arguments fails three times, as when the list file refuses the write, run stops as well and leaves "could not write" in history. Part 20 already said the next step would score against that line. The stop belongs to run. "I'm done," handed over by the model, is still words on the page. With no "written" line in history, run does not treat the sentence as done.

87 is not in these three rounds. The stack from the last part can still report 87. Whether the fridge at home opens is only what fridge.count under doors/ returns this time.

### Your own means this run walks the three places you can edit

A repository is not yours just because the folder was cloned. If that run still walks 100 pages written in advance, and the observation is still a scripted count, what you attached is the tally from the last part, and tonight's door stayed shut.

Yours means three places you can edit, and this run actually walks them.

The goal and the list in loop.txt are the top of the page. Change "write it only below 2" to "write it only below 1," and the next scoring reads the new sentence. That is the first change from part 23: edit the prompt. The weights stay put.

The code under doors/ is the hand on the far side of the door. Point fridge.count at a number file in the repository, and editing the file edits the observation. Point it at an interface you run, and the observation is the line that comes back. Both count as attached, because your code ran. If the code can only return a baked-in "milk 1," part 12's contact never happens. One page of the benchmark has been moved into your folder.

The stops inside run are the four from part 17. Done looks for a matching observation in history. The cap looks at how many times the model was put back. A repeated failure looks at the same name and the same arguments. A door that needs a nod can stay unwired in this smallest loop. Wiring it means run halts, waits for a person's answer, and only then decides whether to run. Part 25 already said a confirmation is the runtime blocking outside the door. The blocking line has to sit in your run before you can change when it blocks.

Examples from part 19 can live in the same repository and mark this run pass or fail. That check is yours, and it judges tonight's page. It is not the 87 from the last part. An 87 typed into loop.txt is one more line of the kind in part 5. It does not change what doors/ returns, and it does not choose the stop for run.

### The usual mix-up

The usual mix-up is to treat an agent framework in the repository as a loop already attached to your own work; or to treat the word "loop" in the system line as a model that will keep going by itself; or to treat a weights file checked into the repository as a door that now opens.

The feeling comes from a cloned tree that already has files named loop, tools, and agent. A name is a filename. A filename does not assemble a page, and it does not put the model back. If nothing calls run tonight, history stays empty and the fridge stays shut. A framework is the shape of the four things, written by someone else. Attached to your repository means that this time those four read your goal, run your doors, and stop on conditions you wrote.

Joined to that mix-up is treating "put it in the repository" as the fine-tuning from part 23, or as running a benchmark tree until the score climbs. Fine-tuning changes the edition of the weights. A benchmark changes a count on someone else's stack. This part attaches the hand outside the loop: who assembles the page, who runs the door, who decides whether to put the model back. Those three are not in the weights, and they are not in 87.

The mix-up in the other direction says smallest must arrive with retrieval, a second agent, and all three ways of planning already wired. Those belong to other parts. This loop has one goal, two doors, one history, and one run. One more door is one more step on the bill from part 22. Walk milk and eggs first, with a file you can point at for each step.

What this part hands off is short. The smallest loop is four things you can point at in the repository: assemble the page, put the model back, run the door, and decide whether to stop. Your own repository means those four, this time, read your goal and run your doors, on a page that is not someone else's frozen stack. An 87, and the words "you are an agent" at the top of the page, do not attach tonight's door. The next part splits how to leave, from this series, one execution diagram you can change yourself.
