---
title: 'Git Error with egg hurt'
description: '一个很蛋疼的git问题'
pubDate: 'Nov 8 2023'
heroImage: '/git_large.jpeg'

---

## 起因

之前维护 [CG-Intro](/blog/CG_Intro) 那篇那篇博客时准备塞一个视频上去，众所周知博客主本人是没买服务器的，理由是不想迁移数据 🤪 。妄想直接把视频塞进仓库里，但报错显示
文件超过了 100M 的限制，本来以为没什么就没管，大不了下次 push 的时候加个 *--force*

## 之后就一发不可收拾了 😭

当天晚上忙着调用一个叫 [MUX](https://dashboard.mux.com/organizations/scu3s4/environments/446g0r/video/assets) 的 api ，就是可以给前端托管视频然后直接引用他生成的一个 id 就好,
但前前后后也弄了很多东西，本意只是想加一个 [Aplayer](https://aplayer.js.org/#/) 放点歌听，再然后是这个同样让人蛋疼的 [astro 框架](https://docs.astro.build/zh-cn/getting-started/)，也就是
搭建本站用的前端框架，最初看上它就是它宣传主打一个不需要写一句 javascript 就能搭建个人网站。但真正要用上这些拓展功能的时候就发现哪哪都没权限，调用插件只能在一个不知道怎么 export 的
mjs 文件里统一调用（有点像设计模式里的门面模式）,然后别的模块里要用就得单独列个参数从这个文件里传过去……（好像跑题了🫣）

反正就是报了这个文件超过限制的错误后没管他了，继续整活。

## 等到重新push的时候才发现后悔莫及 😤

本地文件删除了，git 的缓存也删除了，远程仓库里那个文件也去掉了，但怎么都没法 push 上去。实在没办法就只能本地 reset 了，干了一晚上的活最后只能留个备份然后再一点点加回来😭。

不知道有没有更好的解决办法，或者这就是 git 逻辑上的一些缺陷，欢迎各位一起交流🤗
