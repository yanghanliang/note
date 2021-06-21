#### css3 Transition动画执行时有可能会出现闪烁的bug，一般出现在开始的时候或结束的时候。

测试环境： OPPO R15

> 解决方法如下：

```css
-webkit-backface-visibility: hidden;
-webkit-transform-style: preserve-3d;
```


需要应用在动画元素上即可
估计是Chrome在初始渲染CSS动画时产生的Bug

https://www.cnblogs.com/alantao/p/11021787.html


---



