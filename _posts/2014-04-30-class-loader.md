---
layout: post
title: "Class Loader"
categories:
- 
tags:
- 


---
关于Jvm Class Loader的一些知识：

**1. 什么是CLassLoader?**

   Java程序并不是一个原生的可执行文件，而是由许多独立的类文件组成，每一个文件对应一个Java类.此外，这些类文件并非立即全部装入内存的，而是根据程序需要装入内存。ClassLoader专门负责类文件装入到内存.

**2. ClassLoader的体系架构**
![](https://zhuliuw.github.io/assets/images/cl.jpg)

从上图我们就可以看出类加载器之间的父子关系(注意不是类的集继承关系)和管辖范围。

(1)BootStrap 是最顶层的类加载器，它是由C++编写而成,并且已经内嵌到JVM中了,主要用来读取Java的核心类库JRE/lib/rt.jar

(2)Extension ClassLoader是是用来读取Java的扩展类库，读取JRE/lib/ext/*.jar

(3)App ClassLoader是用来读取CLASSPATH指定的所有jar包或目录的类文件

(4)Custom ClassLoader是用户自定义编写的，它用来读取指定类文件

**3.什么是双亲委派模型？**

双亲委派的模型可以通过下面的过程体现出来: 
(1)"A类加载器"加载类时,先判断该类是否已经加载过了， 
(2)如果还未被加载，则首先委托其"A类加载器"的"父类加载器"去加载该类，这是一个向上不断搜索的过程，当A类所有的"祖宗类加载器"(包括了bootstrap classloader)都没有加载到类,则回到发起者"A类加载器"去加载,如果还加载不了，则抛出ClassNotFoundException.
