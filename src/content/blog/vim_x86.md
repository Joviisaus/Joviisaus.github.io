---
title: '最近遇到的一些小麻烦'
description: '这个破网 packer 怎么都下不下来 🤬'
pubDate: 'Jan 26 2024'
heroImage: '/vim_error/title.jpeg'
---

## NEOVIM 架构不兼容

考完研爽玩了差不多一个月，再打开之前的代码时发现 neovim 报出这么一个错误

![ERROR](/vim_error/error.png)

大致意思就是 nvim-treesitter 的文件利用 ARM64 格式下编译出的 .o 文件与其本身的 X86_64 架构不匹配，这有可能是之前在学校捣鼓 GPTK 的时候安装了一个 X86_64 的终端，并且在这个时间段
更新了 Packer 管理下的插件就刷新成了 X86_64 的执行文件，后来终端改回来后就出现了兼容问题。

本来是更新一下 Packer 就好，但我硬是选择把 nvim-treesitter 文件删掉重装，然后发现删掉这个高亮插件的库后高亮功能不受影响，而且还不报错了，不过 neovim 内置终端的功能打不开了🥵

本来还想设置一下 LSP ，但离了校园网这个 Packer 怎么都连接不上，不知道怎么回事😭

## CMAKELIST 链接不到文件

浅浅玩了一个月就多了一堆事情，而且还发现自己 CMAKE 不会写了😭，CMAKELIST 里写得明明白白的路径就是找不到😥

![CMAKELIST](/vim_error/CMAKELIST.png)

Mesh/Vertex.h 按道理只需要 include_directories 里添加到所在文件夹即可，但还是报错😭

![CMAKE](/vim_error/CMAKE.png)

按道理应该不是 CMAKELIST.txt 文件内容的原因,还要再研究一下

## 曲面配准的下一步优化

主要可以突破的地方就是摆脱点的约束，最早的想法是用样条来让离散的曲面连续化。目前来看显然不可行，主要有两点原因

1. 样条曲面和在样条曲面上重新构建网格都是很可能产生畸变的，这也是网格前处理的一个难点，这么做只会引来更大的麻烦

2. 就算构建了样条曲面，重新采样的点也未必更好，而且新的 Laplace Matrix 也不好重新构建

接下来的想法应该是从解方程的角度入手，虽然矩阵大小不同但要对齐前面的若干个特征值应该还是有办法的。
