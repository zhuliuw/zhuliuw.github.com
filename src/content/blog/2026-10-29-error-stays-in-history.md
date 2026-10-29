---
title: "错误怎样留在历史里，并污染下一步"
description: "历史是还在页上的前缀；错的观察一旦留下，下一步就对着它打分，窗口外的错账还会被取回来。 History is the prefix still on the page; a wrong observation left there is what the next step scores against, and a wrong line written outside can be fetched back."
pubDate: 2026-10-29
slug: 2026/10/29/error-stays-in-history
category: AI 系列
tags:
  - AI 系列
  - AI
draft: false
---

AI 系列第 20 篇。上一篇：[怎么判断它做对了：例子、对照和失败样本](/2026/10/28/examples-checks-failures/)。上一篇把做对了拆成例子、对照和失败样本，并停在一句：对过了、错的也写进页了。这一篇拆这一刀：错误怎样留在历史里，并污染下一步。

## 中文

还是那句目标，还是那几扇门。上一篇对照过了，也写下了失败样本。这一篇问对照之后：判错的那一行如果还坐在页上，下一步会拿它当什么。

```text
[系统] 确认牛奶和鸡蛋的盒数。少于 2 盒的写进购物清单。盒数请调用 fridge.count。写清单请调用 shopping.add。下单请调用 shopping.checkout。checkout 必须先问人。
例子：牛奶 1 → 写牛奶。鸡蛋 4 → 不写。
失败样本：鸡蛋 4 却写鸡蛋；没有观察却说已写入。
[用户] 冰箱里牛奶和鸡蛋够不够？不够的列进清单。
[模型] fridge.count
[观察] 牛奶 1。鸡蛋 4。
[模型] shopping.add 鸡蛋
[观察] 已写入：鸡蛋。
[模型]
```

鸡蛋 4，不少于 2，不该写。模型还是交了 `shopping.add`，品名是鸡蛋。观察回来了：「已写入：鸡蛋。」上一篇的对照会判错。判错不是把这一行从页上揭掉。历史就是还在这一页上的那一串：目标、例子、已经交出的名字、已经贴回来的观察。错的那一行也在串里。下一步对着这一串打分。

### 历史是还在页上的前缀，不是一本会自己改对的日记

第六篇写过：系统、用户、模型是同一页上的三段标签。循环走起来以后，页上还会多出观察。第十五篇把这些字叫窗口里的记忆。这一篇给它另一个名字：历史。历史不是模型另外长出来的本子。它就是这一次拼进来的前缀。

前缀里每一行都会参加第 3 拍。对的观察会把对的接法推到前面。错的观察也会。鸡蛋已经写入，下一轮问「清单上有什么」，「有鸡蛋」会顺着「已写入：鸡蛋。」走上来。它不是回忆厨房，是续写这一页。

对照可以把这一步标成错。标在运行时自己的本子上，不等于从窗口里拿走。运行时如果只在条上画一个叉，页上仍留着「已写入：鸡蛋。」叉是界面。第八篇写过：形状对了，也可以是编造。这一篇补对面那一句：形状错了，贴回来以后，也是前缀。前缀不认对错。它只认还在不在。

### 错的一行一旦留下，下一步就站在它上面

污染，是下一步把错的那一行当成已经发生过的事。第 3 拍看不见厨房，只看得见编号串。串里有「已写入：鸡蛋。」，「再写一次鸡蛋」可能往后排，「去 checkout」可能往前排。目标里如果还有下单，循环会把一盒不该买的鸡蛋带出厨房。

还有更早的一种写进法。模型没开 `fridge.count`，先在气泡里写「牛奶 2，够了。」运行时如果把这句当成观察贴回去，历史里就多了一行假盒数。后面「不够才写」对不上 2，牛奶就不会进清单。第八篇写过：编造是接得顺的下一段。接得顺的字一旦被当成观察，下一步就不再去开那扇该开的门。

对照失败以后，页上会同时坐下两样东西：失败样本，和已经写进去的那一行。失败样本说鸡蛋 4 不该写。观察说已经写了。两样都参加打分。更靠近页末的，常常是观察。第 3 拍更容易顺着更新的那一行走。所以只把失败样本写在系统那一侧，挡不住已经贴在页末的错。

第十七篇写过：同一扇门同一组参数反复失败，要停。停的前提是运行时还认得这是失败。如果失败被写成「已写入。」，循环看见的就不是失败，是完成的形状。上限和重复失败都拦不住。拦得住的，是不要把错的那一行留成下一步的材料。

### 写到窗口外的错误，还会被取回来

第十五篇写过：要跨过这一次窗口，就得写成窗口外的字。购物清单就是这样一份。`shopping.add` 跑完，门外多了一行鸡蛋。窗口里也许只剩「已写入。」清单本身在窗口外。第十篇写过：本子要被读到，还得贴回来，或者再开一扇读的门。

于是污染有两条路。一条在窗口里：错的观察还在前缀上，下一步直接顺着它写。另一条在窗口外：清单上已经有了不该买的鸡蛋，下一轮检索或再读清单，又把这行取回来。取回来的字会重新变成观察。观察一贴上，又是历史。更早那篇中文单篇也写过这一刀：[AI 智能体的执行原理](/2026/10/09/ai-agent-execution/)。那一篇不算本系列的第一篇。这一篇仍从冰箱这句问法写起：门外那一行如果不改，窗口清过也还会再脏。

运行时可以做三件和留下相反的事。第一件：对照判错以后，不要把「已写入。」留在下一页的前缀里，或者在旁边贴一行「这一步判错，鸡蛋 4 不该写。」第二件：门外那一份也改掉，清单上的鸡蛋划掉。第三件：错的已经留下去了，就不要再出发去 checkout。第十八篇的名单还在。带着一笔错账去下单，是另一扇必须先问的门。

模型不会自己做这三件。它被放回页末，只会再交下一段。清页的人是运行时。改门外那一行的，也是运行时，通常还是通过另一扇门。

### 一个常见误会

误会是：它是智能体，走着走着会自己发现错了；对照判了错，错误就从历史上消失；气泡里改一句「刚才写错了」，厨房门外那一行也跟着没了；窗口清一次，污染就结束。

会有这种感觉，是因为产品把叉和「已纠正」画在条上，旧气泡也可以被折起来。折起来的是界面。第十四篇写过：气泡里的步骤也是字。字还在前缀里，第 3 拍就还对着它打分。叉没有从编号串里抠掉那一行。

连在这个误会上的，是把「它会反思」当成另一次会改历史的调用。第十六篇的「做完再看」仍是模型的一轮。它可以接出「鸡蛋不该写」。那一句如果只停在气泡里，清单上的鸡蛋还在。它也可以接出「其实刚才没写」。那一句如果没有观察对上，就是编造。反思不会把前缀里已经贴上的观察变成没贴过。

另一个方向上的误会是：错的观察不该出现，所以历史里只应留下对的。循环会做错。做错的那一行如果完全不记，下一步看不见失败，可能再开同一扇门。第十七篇要认得重复失败，就得看见失败还在。要留下的是「判错过」这行字，不是把错的结果当成已经做成的事。污染的不是「页上出现过错」，是「错的被当成下一步的事实」。

留下三句就够这一篇用：历史是还在页上的前缀，错的观察也在里面；下一步只对着这一串打分，所以错的一行会把后面的门推歪；写到窗口外的错误还会被取回来，要改就得改门外那一份，并决定还要不要再出发。错的留下去了，下一步若还要分给别人做，下一篇再拆：多个智能体分工时，谁拿目标，谁拿观察。

## English

Part 20 starts where [part 19](/2026/10/28/examples-checks-failures/) stopped. The last part split “did it right” into examples, a check, and failure samples, and stopped on one line: after a match, and after a miss is also written onto the page. This part splits that cut: how an error stays in the history and spoils the next step.

The goal is the same, and so are the doors. Part 19 already ran the check and wrote the failure samples. This part asks after the check: if the line marked wrong is still sitting on the page, what does the next step take it for?

```text
[system] Confirm the carton counts for milk and eggs. If either is below 2, write it on the shopping list. For a count, call fridge.count. To write the list, call shopping.add. To place an order, call shopping.checkout. checkout must ask a person first.
Examples: milk 1 → write milk. Eggs 4 → do not write.
Failure samples: eggs 4 and still write eggs; say “written” with no observation.
[user] Are the milk and eggs in the fridge enough? Put whatever is short on the list.
[model] fridge.count
[observation] milk 1. eggs 4.
[model] shopping.add eggs
[observation] written: eggs.
[model]
```

Eggs at 4 are not below 2, so they should not be written. The model still handed over `shopping.add` with the item eggs. The observation came back: “written: eggs.” The check in the last part marks that wrong. Marking it wrong is not peeling the line off the page. History is the string still on this page: the goal, the examples, the names already handed over, the observations already pasted back. The wrong line is in that string too. The next step scores against this string.

### History is the prefix still on the page, not a diary that corrects itself

Part 6 already said system, user, and model are three labels on one page. Once the loop is running, observations land on the page as well. Part 15 called those words memory in the window. This part gives them another name: history. History is not a notebook the model grew. It is the prefix assembled for this call.

Every line in the prefix joins beat 3. A right observation lifts the right continuation. A wrong observation does too. Eggs have been written; the next round asks what is on the list; “eggs are on it” can walk up along “written: eggs.” That is not a memory of the kitchen. It is a continuation of this page.

The check can mark the step wrong. A mark in the runtime’s own book is not the same as taking the line out of the window. If the runtime only draws a cross on the bar, “written: eggs.” still sits on the page. The cross is the interface. Part 8 already said a well-shaped span can still be fabrication. This part adds the sentence on the other side: a badly shaped span, once pasted back, is still prefix. The prefix does not keep score. It only keeps what is still there.

### Once a wrong line stays, the next step stands on it

Spoiling is the next step treating the wrong line as something that already happened. Beat 3 cannot see the kitchen. It can only see the numbered string. The string holds “written: eggs.” “Write eggs again” may be pushed back; “go to checkout” may walk forward. If the goal still has an order to place, the loop will walk a carton of eggs that should not have been bought out of the kitchen.

There is an earlier way to write a wrong line in. The model never opened `fridge.count`, and first wrote “milk 2, enough.” in the bubble. If the runtime pastes that sentence back as an observation, history gains a fake count. “Write only if below 2” then fails to match 2, and the milk never reaches the list. Part 8 already said fabrication is a smooth next span. Once a smooth span is treated as an observation, the next step no longer opens the door that should have opened.

After the check fails, two things sit on the page at once: the failure sample, and the line already written in. The sample says eggs at 4 should not be written. The observation says they already were. Both join the scoring. The one closer to the end of the page is often the observation. Beat 3 is more willing to walk along the newer line. So writing failure samples only on the system side does not block a wrong line already pasted at the end of the page.

Part 17 already said: the same door with the same arguments, failing again and again, has to stop. Stopping depends on the runtime still recognising a failure. If the failure was written as “written.,” what the loop sees is not a failure. It is the shape of done. A cap and repeated failure will not catch it. What will catch it is not leaving the wrong line as material for the next step.

### A wrong line written outside the window can be fetched back

Part 15 already said: to last past this window, a line has to be written outside it. The shopping list is one such copy. After `shopping.add` runs, a line of eggs sits outside the door. The window may only hold “written.” The list itself is outside. Part 10 already said: for a notebook to be read, it has to be pasted back, or another reading door has to open.

So spoiling has two roads. One is in the window: the wrong observation is still on the prefix, and the next step continues from it. The other is outside: the list already holds eggs that should not have been bought; the next round retrieves or rereads the list, and fetches that line back. The fetched wording becomes an observation again. Once pasted, it is history. An earlier Chinese-only piece already cut this same line: [How an AI agent actually runs](/2026/10/09/ai-agent-execution/). That piece is not part 1 of this series. This part still starts from the fridge question: if the line outside the door is not changed, clearing the window will not keep the next page clean.

The runtime can do three things that are the opposite of leaving a line. First: after the check marks it wrong, do not keep “written.” in the next page’s prefix, or paste a line next to it, “this step was wrong; eggs at 4 should not have been written.” Second: change the copy outside the door as well; strike the eggs off the list. Third: if the wrong line has already been left, do not set off toward checkout. The list from part 18 is still there. Walking to place an order on a wrong bill is another door that must ask first.

The model will not do these three itself. Put it back at the end of the page, and it will only hand over another span. The one who clears the page is the runtime. The one who changes the line outside the door is the runtime too, usually through another door.

### The usual mix-up

The usual mix-up is to treat “it is an agent” as proof that it will notice the error as it goes, that a check marking it wrong erases the error from history, that changing the bubble to “that write was wrong” also removes the line outside the kitchen door, and that clearing the window once ends the spoiling.

The feeling comes from a cross and “corrected” drawn on the product bar, and from old bubbles being folded away. What folds is the interface. Part 14 already said it: the steps in the bubble are wording too. If the wording is still in the prefix, beat 3 still scores against it. The cross did not pick that line out of the numbered string.

The same mix-up treats “it will reflect” as another call that rewrites history. “Look back after,” in part 16, is still a model round. It can append “eggs should not have been written.” If that sentence stays only in the bubble, the eggs are still on the list. It can also append “it was not actually written.” If no observation matches that sentence, it is fabrication. Reflection does not turn an observation already pasted into the prefix into one that was never pasted.

The mix-up in the other direction is that a wrong observation should never appear, so history should only keep what was right. The loop will get a step wrong. If the wrong line is not recorded at all, the next step cannot see the failure, and may open the same door again. Part 17 has to recognise repeated failure, so it has to see that the failure is still there. What should be left is the wording “this was marked wrong,” not the wrong result treated as a job already done. What spoils the next step is not “a miss appeared on the page.” It is “the miss was taken as a fact for the next step.”

What this part hands off is short. History is the prefix still on the page, and a wrong observation sits in it too. The next step only scores against this string, so a wrong line will push later doors off course. A wrong line written outside the window can be fetched back; to change it you have to change the copy outside the door, and decide whether to set off again. After a miss has been left, if the next step is to be handed to someone else, the next part splits who holds the goal and who holds the observations when several agents share the work.
