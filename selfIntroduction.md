### 自我介绍

您好！ 我叫杨汉梁，来自贵州，我的上一家公司叫做趣云科技，在上家公司项目中，我们基于vue使用pug进行页面渲染，使用async进行异步处理，使用moment进行时间格式处理，使用scss使项目更有结构性、灵活性和可塑性，我们使用axios进行前后端交互，使用swiper完成图片轮播，使用富文本编辑器（wangeditor）实现短信编辑功能。

最近我对我的博客进行了更新，我的博客是一个前后端分离的项目，前端基于vue使用vue-cli搭建的，后端基于node使用express搭建的，我对博客新增了“完整的”权限管理功能、图片上传以及上传进度条的效果展示，我还做了一个有趣的小功能，我调用了百度和青云客智能聊天的接口做了一个百度翻译和机器人对话的功能。您要是有兴趣的话有时间可以看一下


我对博客做了移动端和pc端的设配，这个适配不仅仅只是简单对于页面大小的缩放，而是区别pc端和移动端整体布局的调整，我将页面组件化，移动端和pc端整体的布局会有所不同。



### 面试题

1. 简单说一下mvc 和 mvvm
2. vue 生命周期
3. 请求写在哪一个声明周期中
    很多人喜欢写在mounted里，但是我喜欢写在created里，当然如果请求回来的数据需要操作DOM那就得写在mounted里了，比如echarts
4. 上一个项目做的是什么
5. 上一家公司干了多久
6. 单项数据绑定和双向数据绑定


7. 有哪几种解决异步请求的方式
8. 当后端没有给出接口时，怎么调试页面
9. 有哪几种定位
10. 有哪几种请求方式
11. get和post的请求方式有什么区别
12. 兼容哪些浏览器
13. 怎么提高项目的加载速度
14. async 打包成es5会是什么样子的
15. 样式权重
    继承的值<标签选择器<类选择器<ID选择器<行内选择器<!important
16. 解决冒泡的方式有哪几种


18. 继承有哪几种方式
19. 对于闭包的理解
20. this 指向问题
    箭头函数，构造函数指向的是实例...
21. 构造函数的继承有什么有点和缺点
22. 谈一谈cookie和本地存储
23. 页面优化
    + css 放在顶部，js放在底部
    + 尽可能的使用原生的api
    + 页面懒加载
    + js，css,图片打包
    + 操作DOM时尽量选择id选择器
    + cdn
    + 减少请求次数
    + 减少cookie的数据量，使用token代替
24. 前端安全性


25. css 实现省略号有哪些属性
26. 关于http协议
27. 处理异步有哪几种方式
28. poimses 和 async 的优缺点
    + 简洁
    + 错误处理
    + 条件语句
    + 调试
29. es6的遍历有哪几种方式
    map filter
30. bfc
31. dislay 的值有哪些
32. 模块化开发


33. 简单的说一下const和let
    let 声明的变量的作用域是块级的；局部作用域
    let 不能重复声明已存在的变量；
    let 有暂时死区，不会被提升。

34. 简单的说一下http协议
35. 说一下面向对象或者面向过程


36. vue中的data为什么是函数
    防止变量污染

37. 节流和防抖（今日头条）



38. 回流和重绘
39. call applay 还有一个什么忘了
40. 如何判断数组和对象的类型
    + instanceof
        `arr instanceof Array`
    + constructor
        `arr.constructor === Array`

41. http 缓存

42. vue 中路由有几种模式
43. 有若干根粗细不均的草绳，每一根草绳烧完需要一个小时，怎么在一个小时45分钟刚好烧完草绳？
44. 想让字体大小小于12px怎么做？

45. 用过哪些抓包工具

---

手写面试题

一，用正则表达式来将字符串"I? love ?? the ?great ? ?wall in ?beijing"更改为："I love the Great Wall in Beijing"，主要是为了解决编码的问题导致的问题，规律：

1，乱码只有两种特殊字符分别是'?'和' ';

2，如果乱码的末尾是'?'则它的下一位字母肯定是大写；

二，不使用类似for，while循环控制语句和js本身自带方法（如：forEach）的情况下，实现将一个空数组[]赋值成[0,2,4,6,8,10,...,100]，范围0-100便可。

三，设计一个自由可灵活配置的时间调度器，有a,b,c,d...很多个需要被调度的方法（方法名称的命名可随意），调度有两种形式，一个是顺序调用（例如调度完a后才能调度b），一个是间隔某个时间进行循环调度。用一个统一的方法进行封装可以实现下列的例子：

1，可以为5秒后调用a,3秒后调用b，10秒后调用。c...z方法不执行（不执行的方法可以设计成不传递参数），那么在第14秒的时候开始重新从0秒循环，又变成第一秒后调用a,3秒后调用b，这样循环往复；

2，每间隔6秒调用一次a,每间隔4秒调用一次b，c...z方法不执行；

3，第一秒先执行a，3秒后执行b，但是c却是每间隔3秒执行一次，d是每间隔4秒执行一次，a和b是每4秒进行一次循环；

4，a不执行，b和c每间隔3秒执行一次，d不执行；


```js
// 第一题
var str='I? love ?? the ?great ? ?wall in ?beijing'
console.log(str.replace(/[?][a-zA-Z]/g,function($1){return $1.toLocaleUpperCase() }).replace(/[\s]*[?][\s]*/g, function($1){ return ' ' }).replace(/[\s]+/g, function($1) { return ' ' }))
 
 
// 第二题
var arr = []
var nowDate = new Date().getTime()
var tempId = setInterval(function(){
    if (new Date().getTime() - nowDate > 20 * 1000){
        clearInterval(tempId)
        console.log(arr)
    } else {
        arr.push(Math.floor(Math.random() * (0 - 100 + 1)) + 100) 
    }}, 1000)
 
 
// 第三题
const dateDispatch = function(params) {
    params.forEach((item, index) => {
        // 如果没有传入时间参数，则按顺序循环
        if (item.restartTime) {
            this[item.fnName] = setInterval(() => {
                if (item.waitFor) {
                    setTimeout(() => {
                        item.functionBody()
                    }, item.waitFor * 1000)
                } else {
                    item.functionBody()
                }
            }, item.restartTime * 1000)
        } else {
            if (item.waitFor) {
                setTimeout(() => {
                    item.functionBody()
                }, item.waitFor * 1000)
            } else {
                item.functionBody()
            }
        }
    })
}
 
// 可以为5秒后调用a,3秒后调用b，10秒后调用
// 理解为 15秒后调用a, 13秒后调用b
const paramsA = [
    {
        fnName: 'a', // 方法名
        waitFor: 15, // 等待执行时间
        callback: null, // 回调函数
        restartTime: null, // 重新开始执行的时间
        functionBody: function() { // 函数体
            console.log('a方法')
        }
    },
    {
        fnName: 'b', // 方法名
        waitFor: 13, // 等待执行时间
        callback: null, // 回调函数
        restartTime: null, // 重新开始执行的时间
        functionBody: function() { // 函数体
            console.log('b方法')
        }
    },
    {
        fnName: 'a', // 方法名
        waitFor: 1, // 等待执行时间
        callback: null, // 回调函数
        restartTime: 14, // 重新开始执行的时间
        functionBody: function() { // 函数体
            console.log('a方法')
        }
    },
    {
        fnName: 'b', // 方法名
        waitFor: 3, // 等待执行时间
        callback: null, // 回调函数
        restartTime: 14, // 重新开始执行的时间
        functionBody: function() { // 函数体
            console.log('b方法')
        }
    },
]
 
const paramsB = [
    {
        fnName: 'a', // 方法名
        waitFor: null, // 等待执行时间
        callback: null, // 回调函数
        restartTime: 6, // 重新开始执行的时间
        functionBody: function() { // 函数体
            console.log('a方法')
        }
    },
    {
        fnName: 'b', // 方法名
        waitFor: null, // 等待执行时间
        callback: null, // 回调函数
        restartTime: 4, // 重新开始执行的时间
        functionBody: function() { // 函数体
            console.log('b方法')
        }
    },
]
 
const paramsC = [
    {
        fnName: 'a', // 方法名
        waitFor: 1, // 等待执行时间
        callback: null, // 回调函数
        restartTime: null, // 重新开始执行的时间
        functionBody: function() { // 函数体
            console.log('a方法')
        }
    },
    {
        fnName: 'b', // 方法名
        waitFor: 3, // 等待执行时间
        callback: null, // 回调函数
        restartTime: null, // 重新开始执行的时间
        functionBody: function() { // 函数体
            console.log('b方法')
        }
    },
    {
        fnName: 'c', // 方法名
        waitFor: null, // 等待执行时间
        callback: null, // 回调函数
        restartTime: 3, // 重新开始执行的时间
        functionBody: function() { // 函数体
            console.log('c方法')
        }
    },
    {
        fnName: 'd', // 方法名
        waitFor: null, // 等待执行时间
        callback: null, // 回调函数
        restartTime: 4, // 重新开始执行的时间
        functionBody: function() { // 函数体
            console.log('d方法')
        }
    },
    {
        fnName: 'a', // 方法名
        waitFor: null, // 等待执行时间
        callback: null, // 回调函数
        restartTime: 4, // 重新开始执行的时间
        functionBody: function() { // 函数体
            console.log('a方法')
        }
    },
    {
        fnName: 'b', // 方法名
        waitFor: null, // 等待执行时间
        callback: null, // 回调函数
        restartTime: 4, // 重新开始执行的时间
        functionBody: function() { // 函数体
            console.log('b方法')
        }
    }
]
 
const paramsD = [
    {
        fnName: 'b', // 方法名
        waitFor: 3, // 等待执行时间
        callback: null, // 回调函数
        restartTime: null, // 重新开始执行的时间
        functionBody: function() { // 函数体
            console.log('a方法')
        }
    },
    {
        fnName: 'c', // 方法名
        waitFor: 3, // 等待执行时间
        callback: null, // 回调函数
        restartTime: null, // 重新开始执行的时间
        functionBody: function() { // 函数体
            console.log('a方法')
        }
    },
]
 
dateDispatch(paramsB)
// dateDispatch(paramsC)
// dateDispatch(paramsD)
// dateDispatch(paramsA)
```

---