> 1. 使用单页面时

```js

beforeDestroy() {
    // 如果不清除, 那么跳转到其他页面是还是会出现流星雨的效果，因为
    // 1、setInterval事件和组件的生命周期没有直接关系。
    // 2、setInterval会返回一个ID 值。setInterval() 方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭
    clearInterval(this.currentTimer) // 关闭流星雨效果
},

// https://www.cnblogs.com/lrj567/p/6141061.html 从别人的博客中找到的答案

```
