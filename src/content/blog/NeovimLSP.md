---
title: 'Neovim C++ LSP Config'
description: 'Neovim C++ LSP 配置'
pubDate: 'Mar 6 2024'
heroImage: '/NeovimLSP/title.jpeg'
---

简单记录一下配置 Neovim 的 C++ LSP 的过程, 以及一些常用的快捷键。是上一篇 [Neovim 配置](/Neovim.md) 的延续😋。

## 安装

首先 Neovim 仅仅作为编辑器使用，需要确保已经安装了 C++ 编译器以及 CMake (最好是非集成的), 代码跳转和高亮的实现都依赖于这些工具。

以 MacOS 为例，首先保证安装好 Homebrew


```bash

brew install Neovim

```

进入配置文件目录，下载 lua 配置文件,并重命名 为 nvim , 使用 nvim 命令进入改文件夹，Packer 将自动安装插件

```bash

cd ~/.config 

git clone https://github.com/Joviisaus/my.neovim

mv my.neovim nvim

nvim

```

## 快捷键(常用)

除 vim 原生快捷键外，还有一些常用的快捷键，这里只列出了一些常用的快捷键，更多的快捷键可以在配置文件中查看。


### Normal 模式快捷键

| 快捷键  | 功能   | 模式   |
|:--------------: | :--------------: | :--------------: |
| \<gcc>    |   行注释   | Normal     |
| \<gbc>    |   块注释   | Normal     |
| < -s>    |   代码格式化   | Normal     |
| \<gd>    |   跳转到定义   | Normal     |
| \<gD> / \<dt>    |   定义浮窗显示   | Normal     |
| \<gr>    |   查找   | Normal     |
| \<gp>    |   显示代码诊断   | Normal     |
| \<gj>    |   跳转到下一个诊断   | Normal     |
| \<gk>    |   跳转到上一个诊断   | Normal     |
| \<F8>    |   显示函数签名   | Normal     |
| \<C-F5>    |   开始调试      | Normal       |
| \<F6>      |   设置断点        | Normal    |
| \<S-F6>    |   删除断点        | Normal    |

### Insert 模式快捷键

| 快捷键  | 功能   | 模式   |
|:--------------: | :--------------: | :--------------: |
| \<jk> / \<ESC>    |   进入 Normal 模式   | Insert     |
| \<C-k>    |   上一个   | Insert     |
| \<C-j>    |   下一个   | Insert     |
| \<Commans + .>    |   补全   | Insert     |
| \<Commans + ,>    |   取消补全   | Insert     |
| \<C + u>  |   向上滚动   | Insert     |
| \<C + d>  |   向下滚动   | Insert     |
| \<S + Tab>    | cmp 补全   | Insert     |
| \<Tab>    |   copilot 补全   | Insert     |

### Visual 模式快捷键

| 快捷键  | 功能   | 模式   |
|:--------------: | :--------------: | :--------------: |
| \<gc>    |   行注释   | Visual     |
| \<gb>     |   块注释   | Visual     |






