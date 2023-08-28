---
title: '喝前摇一摇，考前背一背'
description: '统统上岸！！！'
pubDate: 'Aug 28 2023'
heroImage: '/Math.jpeg'
---

#### 本文宗旨
​       距离24考研接近100天，各位150分的苗子应该已经逐渐完成强化阶段，进入真题和模拟题的训练当中👏。笔者在套卷练习的过程中，发现很多题目虽然能给出一套做题思路，但需要开卷查看已有结论，尤其是数学一概率论部分😭，比如利用方差或样本方差判断分布的四条公式，还有各种概率分布和样本分布的方差均值，每次笔者自己做到套卷最后两道选择题时都不得不翻书，更为明显的例子是计算一阶微分方程$y'+P(x)y=Q(x)$时，强化阶段可以以锻练基本功为由每次遇到都手。在这个阶段除了保证每周两到三张套卷来维持手感的情况下，希望能和观看帖子的诸位一起补充完成这份**喝前摇一摇，考前背一背**清单，笔者归纳能力有限，也难以避免会出现一些“fat finger”的情况希望能够理解。如有修正或者补充乃至对网站维护的建议，欢迎通过[邮件](mailto:ouyangj0815@outlook.com)或者[issue](https://github.com/Joviisaus/Joviisaus.github.io/issues)向我提出。条件允许的话也请为我的[仓库](https://github.com/Joviisaus/Joviisaus.github.io)点个star，感激不尽！

**祝大家全部上岸！**


#### 高等数学

---

##### 中值定理

- 罗尔定理
  $$
  f(x)在[a,b]上连续，\\若 f(a) = f(b) ,\\则\exist \xi \in(a,b),f'(\xi) = 0
  $$

- 拉格朗日中值定理
  $$
  f(x)在[a,b]上连续，\\则\exist \xi \in(a,b),\\有\frac{f(b)-f(a)}{b-a} = f'(\xi)
  $$
  >  出现$f 与f'$的关系时多考虑，只有一个$f$时找$f(x) = 0$
- 柯西中值定理
  $$
  f(x),g(x)在[a,b]上连续，\\则\exist \xi \in(a,b),\\有\frac{f(b)-f(a)}{g(b)-g(a)} = \frac{f'(\xi)}{g'(\xi)}
  $$
  > 一般$f$和$g$一个具体一个抽象
- 泰勒公式
  > 这个都要来查的建议先复习到两点😡
  >
  > 🌟在出现$f$和$f''$的时候重点考虑

##### 常见积分
不定积分
$$
 \int \tan x dx = -ln|\cot x|+c 
$$
$$
 \int \frac{dx}{\cos x} = ln|\frac{1}{\cos x}+\tan x|+c
$$
$$
 \int \frac{dx}{\sin x} = ln|\frac{1}{\sin x}-\tan x|+c
$$
$$
 \int \frac{dx}{\sqrt{x^2+a^2}} = ln|x+\sqrt{x^2+a^2}|+c
$$
$$
 \int \frac{dx}{\sqrt{x^2-a^2}} = ln|x+\sqrt{x^2-a^2}|+c
$$
$$
 \int \frac{dx}{x^2-a^2} = \frac{1}{2a}ln|\frac{x-a}{x+a}|+c
$$
$$
 \int \tan^2 x dx = \tan x -x+c
$$
$$
 \int \cot^2 x dx = -\cot x-x +c
$$

##### 简单的二次曲面（记名字）
1. 单叶双曲面
   $$
   \frac{x^2}{a^2}+\frac{y^2}{b^2}-\frac{z^2}{c^2} = 1
   $$
2. 双叶双曲面
   $$
   \frac{x^2}{a^2}+\frac{y^2}{b^2}-\frac{z^2}{c^2} = -1
   $$
   > 以上统称旋转双曲面
3. 椭圆抛物面
   $$
   \frac{x^2}{a^2}+\frac{y^2}{b^2} = cz
   $$
4. 双曲抛物面（马鞍面）
   $$
   \frac{x^2}{a^2}-\frac{y^2}{b^2} = cz
   $$

#### 空间几何
 曲面的法向量：
$$
 曲面:F(x,y,z) = 0,法向量:\vec{\lambda} = (F'_x,F'_y,F'_z)
$$
 曲线的切向量：

<img src="http://chart.googleapis.com/chart?cht=tx&chl=\Large F\left\{
\begin{array}
      x= \phi(t) \\
      y = \Phi(t) \\
      z = \omega(t)\\
    \end{array}
    \right.
    \\ \vec{\tau} = (\phi'(t),\Phi'(t),\omega'(t))" style="border:none;">



曲面的交线：

<img src="http://chart.googleapis.com/chart?cht=tx&chl= 
\left\{
\begin{array}
      F(x,y,z) = 0\\
      G(x,y,z) = 0
    \end{array}
    \right.
" style="border:none;">

<img src="https://latex.codecogs.com/png.image?{
   \vec{\tau} = ( \left|\begin{matrix}
    F'_y & F'_z \\
    G'_y & G'_z \\
    \end{matrix}\right|
    ,
    \left|\begin{matrix}
    F'_z & F'_x \\
    G'_z & G'_x \\
    \end{matrix}\right|,
    \left|\begin{matrix}
    F'_x & F'_y \\
    G'_x & G'_y \\
    \end{matrix}\right|)
}">

#### 微分方程
一阶非齐次线性微分方程
$$y'+P(x)y=Q(x)$$
$$
y = (
  \int q(x)e^{\int p(x) dx}+c
)e^{-\int p(x) dx}
$$

#### 曲线与曲面积分

第一型曲线积分("一投，二代，三计算")

<img src="https://latex.codecogs.com/png.image?{
  \left\{
  \begin{matrix}
  ds = \sqrt{1+(y'_x)^2}dx \\
  ds = \sqrt{(x'_t)^2+(y'_t)^2}dt \\
  ds = \sqrt{[r(\theta)]^2+[r'(\theta)]^2}d\theta
  \end{matrix}
  \right.
}">
