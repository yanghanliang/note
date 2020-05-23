
### BOM与DOM的区别
#
#### BOM中的对象：

`window`对象是整个`BOM`的核心，所有对象和集合都以某种方式回接到`window`对象。`window`对象表示整个浏览器窗口，但不必表示其中包含的内容。

#### Document对象：

实际上是`window`对象的属性。这个对象的独特之处是唯一一个既属于`BOM`又属于`DOM`的对象。从`BOM`角度看，`document`对象由一系列集合构成，这些集合可以访问文档的各个部分。

#### Location对象：

它是`window`对象和`document`对象的属性。`Location`对象表示载入窗口的URL，此外它还可以解析`URI`.

#### Navigator对象：

`Navigator`包含大量Web浏览器相关的信息。各种浏览器支持该对象的属性和方法不尽相同。

#### Screen对象：

> 通过其可以获取用户屏幕相关的信息

`BOM`是浏览器对象模型，用来获取或设置浏览器的属性、行为，例如：新建窗口、获取屏幕分辨率、浏览器版本号等。 `DOM`是文档对象模型，用来获取或设置文档中标签的属性，例如获取或者设置`input`表单的`value`值。 `BOM`的内容不多，主要还是`DOM`。 由于`DOM`的操作对象是文档（`Document`），所以`dom`和浏览器没有直接关系。

#


### 需求:给好多数字,找出里面的最大值
  var result = Math.max(10, 20, 30, 40, 50, 100);
  console.log(result);

#

### 需求:给好多数字,找出里面的最小值
  var result = Math.min(10, 20, 30, 40, 50, 100);
  console.log(result);

```js
var a=[1,2,3,5];
alert(Math.max.apply(null, a));//最大值
alert(Math.min.apply(null, a));//最小值
```

</br></br></br>
#

### 绝对值

Math.abs(number)
返回的值是 number 参数的绝对值。
求一个数字的绝对值---Math中的方法来实现
console.log(Math.abs(-20));
#

### 向上取整

Math.ceil(number)
> 返回值为大于等于其数字参数的最小整数。

`78.1`   `78.3`   `78.9` 用Math的方法能够实现后的结果是79
console.log(Math.ceil(78.1));
console.log(Math.ceil(78.3));
console.log(Math.ceil(78.9));
#

### 向下取整

Math.floor(number)
> 返回值为小于等于其数值参数的最大整数值。

console.log(Math.floor(78.1));
console.log(Math.floor(78.3));
console.log(Math.floor(78.9));
#

### 关于js小数的bug

```js
var num1 = 0.1;
var num2 = 0.2;

var sum = num1 + num2;
console.log(sum);
console.log(sum == 0.3);
```
#

### 随机数

Math.random()
产生的伪随机数介于 0 和 1 之间（含 0，不含 1），也就是，返回值可能为0，但总是小于1

#

获取某个范围的随机数（x >= 300 && x < 1300
(Math.random() * (1300-300)) + 300

#

获取某个范围的随机数（x >= 300 && x <= 1300
Math.floor(Math.random() * (max - min + 1) + min)

### 平方根
Math.sqrt(number)
返回数字的平方根,如果 number 为负数，则返回值为零。
console.log(Math.sqrt(9));




### Date(时间)中的相关方法

```js
// 1.
var dt = new Date();
  console.log(dt);

// 2.
var dt = new Date('2018-01-01');
console.log(dt);

// 3.一串数字(70年-现在的秒数)
var dt = Date.now();
console.log(dt);

// 4.
var dt = new Date();
//年
console.log(dt.getFullYear());
//月
console.log(dt.getMonth()+1);
//日
console.log(dt.getDate());
//星期
console.log(dt.getDay());
//时
console.log(dt.getHours());
//分
console.log(dt.getMinutes());
//秒
console.log(dt.getSeconds());

/*--------------------------------------------------------------------------------*/

console.log(getDate(new Date()));

function getDate(dt) {
  //获取年
  var year = dt.getFullYear();
  //获取月
  var month = dt.getMonth() + 1;
  //获取日
  var day = dt.getDate();
  //获取时
  var hour = dt.getHours();
  //获取分
  var min = dt.getMinutes();
  //获取秒
  var sec = dt.getSeconds();
  month = month < 10 ? '0' + month : month;
  day = day < 10 ? '0' + day : day;
  hour = hour < 10 ? '0' + hour : hour;
  min = min < 10 ? '0' + min : min;
  sec = sec < 10 ? '0' + sec : sec;
  return year + '年' + month + '月' + day + '日 ' + hour + ':' + min + ':' + sec;
}
```

</br>


## 判断某个对象(变量)是否属于某个对象 {从属关系}

instanceof:
返回一个 Boolean 值，指出对象是否是特定类的一个实例。
console.log(result = object instanceof class);

result

必选项。任意变量。

object

必选项。任意对象表达式。

class

必选项。任意已定义的对象类。
<br/>

# Array


用于确定传递的值是否是一个 Array。 -------------------判断某个值(某些值)是否是数组

Array.isArray()   

Array.isArray([1, 2, 3]);  
// true

Array.isArray({foo: 123});
// false

Array.isArray("foobar");   
// false

Array.isArray(undefined);  
// false

</br>

## 数组遍历 forEach()  

var arr=[10,20,30,40];

arr.forEach(function (x,y,z) {
  //第一个参数----元素值
  //第二个参数----索引(下标)
  //第三个参数----谁调用了这个forEach方法--那么就是谁
  //console.log(arguments[2]);
  console.log(x+'====='+y+'===='+z);
});

</br>

## 将数组中的所有值乘以特定数字。

> 改变数组中每一个元素的值 forEach(实例)

```js
var numbers = [65, 44, 12, 4];

dv.onclick = function(){
  numbers.forEach(myFunction);
};

function myFunction(value,key,arr) {
    arr[index] = item * 10;
    demo.innerHTML = numbers;
}

// 结果: 650,440,120,40
```

</br>

## 计算数组所有元素相加的总和

> 数组求和 forEach(实例)

```js
var sum = 0;
var numbers = [65, 44, 12, 4];
var btn = document.getElementById('btn');

btn.onclick = function(){
  numbers.forEach(myFunction);
};

function myFunction(item) {
    sum += item;
    demo.innerHTML = sum + '*'; //这里造成了一个假象,看起来似乎一次就执行完了,
    //其实只是最后的那个值将前面的替换掉了
}
```

</br>

## concat() - 合并数组

```js
var arr1 = [10, 20, 30];
var arr2 = [60, 50, 40];
var arr3 = [70, 80, 90];
var newArr = arr1.concat(arr2, arr3);
console.log(newArr);
```

</br>

## reverse - 数组反转

```js
var arr = [1, 100, 20, 50, 30, 90, 70]; //反转
arr.reverse();
console.log(arr);

// 下面是自己做的冒泡排序
for (var i = 0; i < arr.length - 1; i++) {
    for (var j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] < arr[j + 1]) {
            var temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
console.log(arr);
```

###############

----------------------------------------------------- sort  能够对数字,字母,汉字进行排序
var names = ['李四','张三'];
names.sort(function (a, b) {
  if (a > b) {
    return 1;
  } else if (a == b) {
    return 0;
  } else {
    return -1;
  }
});

console.log(names);

</br>

## sort  - 数组排序不一定稳点

排序:但不稳定

> 注意:比较的是一个一个的的字符串 300>1999

```js
var arr = [1, 100, 20, 50, 30, 90, 70];
arr.sort(function (a, b) {
  if (a < b) {
    return 1;
  } else if (a == b) {
    return 0;
  } else {
    return -1;
  }
});
console.log(arr);

var names = ['abx','abd','adc'];
names.sort(function(x,y){
  if(x>y){ // if 可写可不写,只是展示了不同情况的返回值
    return 1;
  }else if(x==y){ // 从小到大排序
    return 0;
  }else{
    return -1;
  }
});
console.log(names);


// 例子:
// 每一部影片都是一个对象,影片有名字,有日期,大小

//影片文件的构造函数
function File(name,size,date){
  this.name=name;
  this.size=size;
  this.date=date;
}

// 创建对象
var f1 = new File('jack.avi','400M','1997-1-12');
var f2 = new File('cang.avi','800M','2010-5-5');
var f3 = new File('xiaoze.avi','200M','2012-12-12');

// 对象排序,实际上是按照对象的某个属性进行排序的
var files = [f1,f2,f3];

function compareFunc(attr){
  return function (obj1,obj2){
    if(obj1[attr] > obj2[attr]){ // 从小到大排序
      return 1;
    }else if(obj1[attr] == obj2[attr]){
      return 0;
    }else{
      return -1;
    }
  }
}

files.sort(compareFunc('date'));

// 遍历显示
for(var i=0;i<files.length;i++){
  console.log(files[i].name + '****'+files[i].size+'*****'+files[i].date);
}
```

</br>


### 获取数组中最后一个值

> 在保证原数组不变的情况下，快速获取数组中最后一个值

```js

[1, 2, 3].slice(-1)[0]

```























## join 指定一个字符串分开每对相邻元素的数组

> 给数组元素中间添加一个元素,使其分开,或者说:在数组元素中间添加一个元素使其相连

也就是说:拆分或连接某字符串数组


```js
var elements = ['Fire', 'Wind', 'Rain'];

console.log(elements.join());
// expected output: Fire,Wind,Rain(执行后的效果)

console.log(elements.join(''));
// expected output: FireWindRain

console.log(elements.join('-'));
// expected output: Fire-Wind-Rain
```

</br>

## 轮播图需要用到的函数

```js
var arr=[10,20,30,40,50];

arr.push(100);// 追加一个数据(最后面)

// arr.unshift(100); // 插入一个数据(最前面)
// arr.pop();        // 删除数组中的最后一个数据
// arr.shift();      // 删除数组中的第一个数据
console.log(arr);
```

</br>

## str.indexOf(searchStr, startIndex) - 找字符串下标

str: 字符串
searchStr: 查找的字符串
startIndex: 开始查找的位置

```js
var str='abcdcefgc';

// 根据字符串找对应字符串的索引值,找到则返回索引值,找不到则返回-1
// var index=str.indexOf('c');

var index=str.lastIndexOf('c');// 倒数的c的下标
console.log(index);
```

</br>

## indexOf 与 replace 综合案例

> 字符串替换,替换字符串的某一个或多个(段)的值

var str = '小华华好帅哦';

if (str.indexOf('帅') != -1) {
  str = str.replace('华华', '猥琐');
}
console.log(str);

</br>

## substr 语法

> 返回一个从指定位置开始的指定长度的子字符串。

stringvar.substr(start [, length ])
stringvar.substring(startIndex [, endIndex ])

参数
stringvar

必选项。要提取子字符串的字符串文字或 String 对象。

start

必选项。所需的子字符串的起始位置。字符串中的第一个字符的索引为 0。

length

可选项。在返回的子字符串中应包括的字符个数。

#

substr  实例---------------------------------------截取"字符串"

返回一个从指定位置开始的指定长度的子字符串。

var str = '今天好开心啊';

str = str.substr(2);//从索引为2的位置开始截取字符串,一直到最后

console.log(str);

var str = '今天好开心啊';

str = str.substring(2,5);//从索引为2的地方开始截取,到索引为5的地方结束,没有索引5的字符串

console.log(str);

</br>

## 字符串.indexOf('某个字符')

var str = 'hello world';

str.indexOf('e');  //找不到返回-1,找到了返回索引值(下标)


19. str.slice(0,4) //参数1:开始位置,参数2:结束位置.只写一个参数时,代表从这个参数开始
截取到最后

str.slice(-2,-1) //从后面开始

去掉某个字符


借助window定义全局的函数

window['函数名'] = function(){

}

时间字符串


###############

trim  -------------------------------------------去掉字符串两边的空格
var str = '   天   啊   ';
str = str.trim();
console.log('=========' + str + '==========');

###############

--------------------------------------------------将字母字符串转大写或小写
var str='abcdefg';
   str=str.toLocaleUpperCase();//转大写
   console.log(str);
   str=str.toLocaleLowerCase();//转小写
   console.log(str);
//    str.toLowerCase()效果一样
//    str.toUpperCase()

###############

slice  ---------------------------------------------删除或截取一个"数组"中的某些元素
var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];
var result=arr.slice(5);    //删除的是5个元素,从0的位置开始删除到4结束,没有索引5的
var result=arr.slice(2,5);  //保留索引为2的开始到4的数据
console.log(result);
console.log(arr);

###############

trim  --------------------------------------------去掉字符串两边的空格
var str = '   天   啊   ';
str = str.trim();
console.log('=========' + str + '==========');


--------------------------------------------------将字母字符串转大写或小写
var str='abcdefg';

str=str.toLocaleUpperCase(); //转大写
console.log(str);

str=str.toLocaleLowerCase(); //转小写
console.log(str);

// str.toUpperCase(); //效果一样-大写
// str.toLowerCase(); //小写



###############

---------------------------获取元素或节点的各种方式--------------------------

<div id="dv">
  <ul id="uu">嘎嘎
    <li>乔峰</li>
    嘿嘿
    <li id="two">张无忌</li>
    呵呵
    <li>虚竹</li>
    <li>郭靖</li>
    <li>独孤求败</li>
    哈哈
  </ul>
</div>
<script>
   //获取ul的父级节点
   console.log(my$('uu').parentNode);
   //获取ul的父级元素
   console.log(my$('uu').parentElement);
   //获取ul中的所有的子级节点
   console.log(my$('uu').childNodes);
   //获取ul中的所有的子级元素
   console.log(my$('uu').children);
   //获取ul中第一个子级节点
   console.log(my$('uu').firstChild);
   //获取ul中第一个子级元素
   console.log(my$('uu').firstElementChild);
   //获取ul中最后一个子级节点
   console.log(my$('uu').lastChild);
   //获取ul中最后一个子级元素
   console.log(my$('uu').lastElementChild);
   //获取当前li的前一个兄弟节点
   console.log(my$('two').previousSibling);
   //获取当前li的前一个兄弟元素
   console.log(my$('two').previousElementSibling);
   //获取当前li的后一个兄弟节点
   console.log(my$('two').nextSibling);
   //获取当前li的后一个兄弟元素
   console.log(my$('two').nextElementSibling);



--------------------------元素创建三种方式:-----------------------------

### 创建元素

1.  document.write('标签代码及内容');

2. 对象.innerHTML='标签代码及内容';

3. document.createElement('标签名字'); 配合:父级元素.appendChild(子级元素);

----------------------------鼠标的移入移除-----------------------------------
移入:box.onmouseenter = function () {
        arr.style.display = 'block';
    };

移出:box.onmouseleave = function () {
        arr.style.display = 'none';
    };

---------------------------2018-02-02--------------------------------






 /*
BOM的概念:Browser Object Model 浏览器对象模型
浏览器中的顶级对象:Window
页面中的顶级对象:Document
页面的加载事件:window.onload--->页面中所有的内容全部加载后才触发---word里面有详细介绍----js笔记

-----------------location(需要在虚拟主机下打开)------------------------
    console.log(location.hash);
    //获取的是地址栏上#及#后面的内容

    console.log(location.host);
    //主机名和端口

    console.log(location.hostname);
    //主机名

    console.log(location.pathname);
    //相对路径

    console.log(location.port);
    //端口

    console.log(location.protocol);
    //协议:

    console.log(location.search); //截取地址栏 ? 后面的参数

    例子:
     var search = location.search.slice(1);

    //搜索的

---

#### 页面跳转

```js

    // 很重要----下面的两种方式,历史记录中都没有
    // 页面跳转的两个方法
    location.href="www.zm.com"; // 属性
    location.assign("http://www.zm.com"); // 方法
    window.open(`https://www.baidu.com/s?wd=${message.data}`, '_blank') // 在新窗口中打开链接

```

```html

<a href="javascript:window.history.go(-1);"></a>

```


### 刷新页面


+ history.go(0) 
+ location.reload() 
+ location=location 
+ location.assign(location) 
+ document.execCommand('Refresh') 
+ window.navigate(location)
+ location.replace(location) 
+ document.URL=location.href

转载： `https://blog.csdn.net/qq_36657997/article/details/80932708`
---

-----------------------------navigator对象-----------------------------

console.log( window.navigator.userAgent);  //获取当前浏览器的信息的

console.log(window.navigator.platform);//系统的相关的信息

//.userAgent--->浏览器的相关信息



-----------------------------history对象-----------------------------
<input type="button" value="前进" id="btn1"/>
<input type="button" value="跳转" id="btn2"/>

//删了js标签
  my$('btn1').onclick = function () {
   //前进---模拟浏览器上的前进箭头
    history.forward();//前进
  };

  //跳转
  my$('btn2').onclick = function () {
    //跳转的----很重要----必须记住
    location.href = '07test.html';
  };

  my$('btn3').onclick=function () {
    //可以前进,也可以后退,参数是正数还是负数,整数时可以不用加(+加号)
    history.go(-1);
  }

  my$('btn3').onclick=function () {
    //后退的
    history.back();
  }



------------------------------定时器:--------------------------------
1.
定时器的声明: var timeId = setInterval(函数,时间);

时间:以毫秒为单位

清除定时器: clearInterval(timeId);

-------------------->函数调用之小括号问题<-----------------------------
setInterval(tweenedAnimation,3000);----------------"这时候函数调用不需要加括号" 遇到两次了
注释:
    tweenedAnimation:函数

rbId.onclick = tweenedAnimation;-------------------这时候也是

2.
定时器的声明:var timeId = setTimeout(函数,时间);//只是执行一次

清除定时器:clearTimeout(timeId);

注释:
timeId:是定时器的名字(可随意命名)
定时器1可以用定时器2清除,但不推荐.

> setTimeout 函数第三个参数及以后的参数都可以作为回调函数的参数。

-----------------------------为元素绑定事件---------------------------

1. 对象.onclick=事件处理函数
例子:
document.getElementById('btn').onclick=function();

2. 对象.addEventListener('没有on的事件的名字',事件处理函数,false);

//addEventListener这个方法,IE8不支持,但谷歌,火狐支持

例子:
document.getElementById('btn').addEventListener('click',function(){},false);
#####################################################################
3. 对象.attachEvent('有on的事件的名字',事件处理函数);

 //attachEvent这个方法IE8支持,但谷歌,火狐不支持

 例子:document.getElementById('btn').attachEvent('onclick',function(){});

 注释:
    事件:就是一件事,有事件源,触发和响应.
    绑定事件:为了同时处理一个事件(btn)而产生的.
    根据id获取按钮元素,注册点击事件,添加事件处理(辅助理解).
    绑定事件:就是使点击按钮时,可以同时响应多个点击事件

----->js笔记有详细介绍(辅助理解的)



--------------------------(重点)绑定事件的兼容问题:-------------------

//为任意的一个元素,绑定任意的一个事件
//在任意的浏览器中都可以执行

element:任意的一个元素对象
type:   事件的名字--没有on
fn:     事件处理函数

function addEventListener(element, type, fn) {
  //判断浏览器是否支持addEventListener
  if (element.addEventListener) {
    element.addEventListener(type, fn, false);
  } else if (element.attachEvent) {
    element.attachEvent('on' + type, fn);
  } else {
    element['on' + type] = fn;
  }
}

//调用函数测试:
addEventListener(my$('btn'),'click',function () {
  console.log('哦天啊');
});



----------------------------解绑事件的三种方式:-----------------------

1. 对象.onclick=null

2. 对象.removeEventListener('没有on的事件的名字',事件处理函数的名字,false);

3. 对象.detachEvent('有on的事件的名字',事件处理函数的名字);



-------------------------------事件的三个阶段:------------------------
1.捕获阶段
2.目标阶段
3.冒泡阶段

e.eventPhase这个属性的值:
1----捕获阶段出来的
2----目标出来的
3----冒泡出来

addEventListener中第三个参数:
是布尔类型:
如果是true:从捕获到目标的阶段
如果是false:从目标到冒泡的阶段

<div id="dv1">
  <div id="dv2">
    <div id="dv3">
    </div>
  </div>
</div>
事件冒泡从里向外("dv3"是里面)

三个div都注册点击事件
  var arr = [my$('dv1'), my$('dv2'), my$('dv3')];
  arr.forEach(function (ele) {
    ele.addEventListener('click', function (e) {
      //console.log(this.id);
      console.log(e.eventPhase);
    }, false);
  });



forEach:小案例

arr.forEach(function(ele,index){
ele();
});



------------------------------事件冒泡--------------------------
事件冒泡:
元素A中有元素B,都有相同的事件,
里面元素B的事件触发,那么外面元素A的事件会自动触发

阻止事件冒泡的方法:
1. e.stopPropagation();
2. window.event.cancelBubble=true;      IE8的写法

例子:
my$('dv1').onclick = function () {
  console.log(this.id);
};

my$('dv2').onclick = function (e) {
  console.log(this.id);
  //window.event.cancelBubble=true;
  e.stopPropagation();
};


---------------------------元素的创建-----------------------------
//元素的创建---标签的创建
//为什么要有元素创建?为了提升用户的体验

元素创建三种方式:
1. document.write('标签代码及内容');

2. 对象.innerHTML='标签代码及内容';

3. document.createElement('标签名字'); 配合:父级元素.appendChild(子级元素);



1.document.write  

//点击按钮,在页面中创建一个p标签

//可以创建标签元素,但是如果是在页面加载后使用这种方式创建,

//那么页面中原有的内容会被删除

my$('btn').onclick=function () {
    document.write('<p>这是一个p</p>');
};



2.innerHTML

点击按钮在div中创建一个p

my$('btn').onclick = function () {
my$('dv').innerHTML = '<p>女孩说:abcdefg,a boy can do everything for girl</p>';
};



3.//点击按钮用第三种方式创建一个p标签,加入到div中

  //document.createElement('标签名字');返回的是该标签的元素对象

  my$('btn').onclick = function () {
    //创建
    var pObj = document.createElement('p');
    //加入
    my$('dv').appendChild(pObj);
    //设置内容
    pObj.innerText = '冰激淋和冰箱是情侣';
  };



--------------------- 获取元素的方式:-------------------------------

根据id属性的值来获取元素,返回的是一个元素对象
document.getElementById('id属性的值');


根据标签名字来获取元素,返回的是一个伪数组,里面的每个元素是一个标签元素
document.getElementsByTagName('标签的名字');


根据类样式的名字来获取元素,返回的是一个伪数组,里面的每个元素是一个标签元素
document.getElementsByClassName('类样式的名字');


根据name属性值来获取元素,返回的是一个伪数组,里面的每个元素是一个标签元素
document.getElementsByName('txt')
例子:
my$('btn').onclick = function () {
       var txtObjs = document.getElementsByName('txt');
       for (var i = 0; i < txtObjs.length; i++) {
           txtObjs[i].value = '嘎嘎';
       }
   };


---------------------------------------querySelector(非常强大)-----------------------------------------
1.
根据选择器获取元素,返回的是一个元素对象
document.querySelector('选择器')

例子:
<div class="dv">
        <p></p>
        <a href=""></a>
    </div>
    <div id="gg"></div>

    <img src="" alt="">

    var a = document.querySelector('a');
    var dv = document.querySelector('.dv');
    var img = document.querySelector('img');
    var gg = document.querySelector('#gg');
    var btn = document.querySelector('input[type=button]'); // <input type="button" value="搜索"/>
    var a = document.querySelector('.box a'); //后代选择器

    它可以获取所有的元素

    console.log(a);
    console.log(dv);
    console.log(img);
    console.log(gg);


2.
根据选择器获取元素,返回的是一个伪数组
document.querySelectorAll('选择器')




-------->
<div id="dv">
    <ul id="uu">嘎嘎
        <li>帮助</li>
        嘿嘿
        <li id="two">老张</li>
        呵呵
        <li>虚竹</li>
        <li>国际</li>
        <li>独孤求败</li>
        哈哈
    </ul>
</div>

//获取ul的父级节点
console.log(my$('dv').parentNode);
//获取ul的父级元素
console.log(my$('dv').parentElement);
//获取ul中的所有子级节点
console.log(my$('dv').childNodes);
//获取ul中的所有子级元素
console.log(my$('dv').children);
//获取ul中第一个子级节点
console.log(my$('dv').firstChild);
//获取ul中第一个子级元素
console.log(my$('dv').firstElementChild);
//获取ul中最后一个子级节点
console.log(my$('dv').lastChild);
//获取ul中最后一个子级元素
console.log(my$('dv').lastElementChild);
//获取当前li的前一个兄弟节点
console.log(my$('two').previousSibling);
//获取当前li的前一个兄弟元素
console.log(my$('two').previousElementSibling);
//获取当前li的后一个兄弟节点
console.log(my$('two').nextSibling);
//获取当前li的后一个兄弟元素
console.log(my$('two').nextElementSibling);

//通过父元素获取第一个子元素
function getFirstElement(element) {
    //判断浏览器是否支持获取第一个子元素的属性
    if (typeof element.firstElementChild != 'undefined') {
        return element.firstElementChild;
    } else {
        //不支持,先获取第一个节点
        var node = element.firstChild;
        while (node && node.nodeType != 1) {
            node = node.nextSibling;
        }
        return node;
    }
}

<-------------



---------------------------添加类样式---------------------------------

元素.className = '类名';

---------------------------添加ID(设置id)-----------------------------
元素.id = 'id名';   //必须放在追加前(appendChild);

############

----------------------------鼠标移入,移出-----------------------------
  var list = my$('uu').getElementsByTagName('li');
//循环
   for (var i = 0; i < list.length; i++) {
     //鼠标进入事件
     list[i].onmouseover = function () {
       this.style.backgroundColor = 'hotpink';
     };
     //鼠标离开事件
     list[i].onmouseout = function () {
       this.style.backgroundColor = '';
     };
   }


onmouseenter 事件在鼠标指针移动到元素上时触发。(移入)

提示： 该事件通常与 onmouseleave 事件一同使用, 在鼠标指针移出元素上时触发。(移出)

唯一的区别是 onmouseenter 事件不支持冒泡 。

语法:object.onmouseenter=function(){myScript};

---------------- onmousedown -----------鼠标按下事件
---------------- onmouseup   -----------鼠标抬起事件
---------------- onmousewheel -------------鼠标滚轮事件
---------------- onmouseenter -------------鼠标移入事件  // 每一个元素都触发一次
---------------- onmouseleave -------------鼠标移出事件

---------------- onmouseover -------------鼠标移入事件（有坑 // 同一个元素触发多次
---------------- onmouseout -------------鼠标移出事件 （有坑
---------------- onblur -------------鼠标失去焦点事件
---------------- focus -------------鼠标获取焦点事件(不需要on)


元素.focus();


语法同上

----------------鼠标滚轮事件----------------
document.onmousewheel = function(){
	console.log(11);
};


例子:

```js

// 获取滚动时所在位置
function mousePos(e){
	e=e||window.event;
	var scrollX=document.documentElement.scrollLeft||document.body.scrollLeft;//分别兼容ie和chrome
	var scrollY=document.documentElement.scrollTop||document.body.scrollTop;
	var x=e.pageX||(e.clientX+scrollX);//兼容火狐和其他浏览器
	var y=e.pageY||(e.clientY+scrollY);
	console.log(x,y);
	return {x:x,y:y};
}


var box =  document.getElementsByClassName('box');

box[0].onmousewheel = function(e){
    mousePos(e);
};

```

```js

// 
roller() {
	let that = this
	var scrollFunc = function() {
		that.moveTipLine()
	}
	/*注册事件*/
	if(document.addEventListener){
		document.addEventListener('DOMMouseScroll',scrollFunc,false)
	}// W3C

	document.onmousewheel = scrollFunc // IE/Opera/Chrome/Safari
	window.onmousewheel = scrollFunc
},

```


---------------------------removeAttribute-----------------------------

removeAttribute() 方法删除指定的属性。

此方法与 removeAttributeNode() 方法的差异是：removeAttributeNode() 方法删除指定的 Attr 对象，而此方法删除具有指定名称的属性。结果是相同的。同时此方法不返回值，而 removeAttributeNode() 方法返回被删除的属性，以 Attr 对象的形式。

语法:element.removeAttribute(attributename)----注意:设置属性style="属性:值;"时,attributename = "style"
attributename:属性名

注意: jquery 对象 和 原生DOM 不一样


--------------------------removeAttributeNode---------------------
删除指定节点
removeAttributeNode
例子:
<h1 style="color:red">Hello World</h1>

<p id="demo">点击按钮来删除标题中的 style 属性节点。</p>

<button onclick="myFunction()">试一下</button>

<script>
function myFunction()
{
var n=document.getElementsByTagName("H1")[0];
var a=n.getAttributeNode("style");
n.removeAttributeNode(a);
}

----------------------------删除div--------------------------
创建div
var divZj = document.createElement('div');

//添加id选择器
divZj.id = 'myid';

//添加到box中
document.body.appendChild(divZj);

//删除div
第一种方法:
document.body.removeChild(divZj);

第二种方法:
divZj.remove();


---------------------------克隆----------------------------

cloneNode

// 克隆一个ul中的li,并追加到最后一个
ul.appendChild(ul.children[0].cloneNode(true));

```js

document.querySelector('body').cloneNode(true)

```



-----------------------getScroll(卷曲)--------------------------

兼容代码:
  function getScroll() {
    return {
      left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0,
      top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    };
  }

例子:
  //为window注册滚动事件
  window.onscroll = function () {
    //获取向上卷曲出去的距离的值和第一个div的高度对比
    if (getScroll().top >= my$('topPart').offsetHeight) {
      my$('navBar').className='nav fixed';
      my$('mainPart').style.marginTop=my$('navBar').offsetHeight+'px';
    }else{
      my$('navBar').className='nav';
      my$('mainPart').style.marginTop='10px';
    }

  };





zIndex   层级
window.onload=function(){}  页面加载
push() 追加


------------------------------client系列:-----------------------------

clientX:可视区域的横坐标
clientY:可视区域的纵坐标


//鼠标移动事件
document.onmousemove = function (e) {
  //console.log(e.clientX+'==='+e.clientY);
  my$('im').style.left = e.clientX + 'px';
  my$('im').style.top = e.clientY + 'px';

  //my$('im').style.left = e.pageX + 'px';
  //my$('im').style.top = e.pageY + 'px';

  //首先:IE8不支持e,支持window.event
  //IE8也不支持pageX和pageY
};



----------------------------unshift 方法:--------------------------

将指定的元素插入数组开始位置并返回该数组。(例子3)

arrayObj.unshift([item1[, item2 [, . . . [, itemN]]]])

参数
arrayObj

必选项。一个 Array 对象。

item1, item2,. . .,itemN

可选项。将插入到该 Array 开始部分的元素。


*********************例子1:****************************

var arr = [10, 20, 30, 40, 50];

arr.unshift();
console.log(arr);

结果:
Array(5)------返回的是一个数组
0: 10
1: 20
2: 30
3: 40
4: 50
length: 5
__proto__: Array(0)

*********************************************************

************************例子2:***************************
var arr = [10, 20, 30, 40, 50];
console.log(arr.unshift());

结果:
5

*********************************************************

**************************例子3:**************************
var arr = [10, 20, 30, 40, 50];
arr.unshift(70);
console.log(arr);

结果:
Array(6)
0: 70
1: 10
2: 20
3: 30
4: 40
5: 50
length: 6
__proto__: Array(0)






---------------------------pop 方法---------------------------

移除数组中的最后一个元素并返回该元素。

arrayObj.pop()

必选的 arrayObj 引用是一个 Array 对象。


--------------------pop和unshift综合案例:----------------------
var arr = [10, 20, 30, 40, 50];
arr:是一个数组
arr.unshift(arr.pop());
可以将数组的第一个元素与最后一个元素交换位置,多次这样循环可将数组
的元素反过来显示
arr.unshift(arr.pop());//交换元素位置
console.log(arr);

﻿结果:
(5) [50, 10, 20, 30, 40]
0:50
1:10
2:20
3:30
4:40
length:5
__proto__:Array(0)

理解:往后挤

---------------------------------shift 方法--------------------------
var arr = [10, 20, 30, 40, 50];

arr.shift();
//console.log(arr.shift());--------10
console.log(arr)
结果:
(4) [20, 30, 40, 50]
0: 20
1: 30
2: 40
3: 50
length: 4
__proto__: Array(0)

移除数组中的第一个元素并返回该元素。

arrayObj.shift( )

必选的 arrayObj 引用是一个 Array 对象。


-----------------------------------push 方法--------------------------
将新元素添加到一个数组中，并返回数组的新长度值。

arrayObj.push([item1 [item2 [. . . [itemN ]]]])

参数
arrayObj

必选项。一个 Array 对象。

item, item2,. . . itemN

可选项。该 Array 的新元素。


例子:
var arr = [1,2,3];
arr.push(4);
console.log(arr);

结果:
(4) [1, 2, 3, 4]




------------------------------push和shift综合案例---------------------

var arr = [10, 20, 30, 40, 50];

arr.push(arr.shift());

console.log(arr);

结果:
(5) [20, 30, 40, 50, 10]
0:20
1:30
2:40
3:50
4:10
length:5
__proto__:Array(0)

理解:往前挤



###########

Math.floor(); //向下取整

###########


----------------------Math.random()随机数-----------------------------

//有(0-1)之间的随机数,如何获取[1-51]之间的随机数

console.log(Math.ceil(Math.random()*51));




自定义构造函数:
function opshi(age,name) {
        this.age= age;
        this.name = name;
        this.f1() = function () {//打仗
            console.log('哈哈');
        };
    }
    var p = new opshi('24','张绍刚');



对象:特指的某件事物,具有属性和方法
一切属性和方法都是对象
prototype


---


### 原型

```

```js

//主要经过:
    //1.创建父类构造函数
    //2.创建父类的原型方法:父类的构造函数.prototype.方法名 = function(){};
    //3.创建子类的构造函数:
    //4.实现继承:子类构造函数.prototype = new 父类构造函数(参数);
    //5.添加子类原型方法:子类的构造函数.prototype.方法名 = function(){};
    //6.创建子类对象(实例化子类对象):var 对象名 = new 子类构造器(参数);

    //1.创建父类构造函数
    function Person(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }

    //2.创建父类原型方法
    Person.prototype.eat = function () {
        console.log('丫丫丫丫');
    };

    //3.创建子类构造方法(函数)
    function Student(score) {
        this.score = score;
    }

    //4.实现继承
    Student.prototype = new Person('延续', 33, '男');
    //5.创建子类原型方法
    Student.prototype.stud = function () {
        console.log('我去');
    };
    //6.创建子类对象(实例化对象
    var str = new Student(66);
    //测试代码:
    console.log(str.name, str.age, str.sex);
    str.stud();
    str.eat();

```

> 总结:任何的函数实际上都是Function的实例对象



--------------------------------------apply和call改变指向------------------------------

什么东西可以调用call?(apply和bind)--函数式对象

第一个参数是:对象
第二个参数是:任意的类型--多个参数
返回值:任意的类型
对象调用call方法的时候使用的方式:
1.函数名字.call();
2.函数名字.call(null);
上面的这两种方式里面的this都是window

call方法作用:改变里面this的指向的

call方法如果不想改变里面this的指向,就传入null,就可以了,

call方法可以借用其他对象的方法


参数1:对象
参数2:数组
apply和call作用一样,唯一不一样的就是第二个参数
call第二个参数传入的时候是一个一个传入的
apply是以数组的方式传入

f1.apply(null,[10,20,30]);


小例子:
//apply
var obj1 = {
  age:200,
  eat:function(){
    console.log(this);
  }
};

var obj2 = {
  sex:'男'
};

obj1.eat.apply(obj2);

//call
var stu = {
  name:'小明',
  eat:function(){
    console.log(this);
  }
};

stu.eat();
var tea = {
  age:20
};

stu.eat.call(tea);



----------------------------call和forEach综合--------------

var arr = ['高铁','动车','鹿皮策','直达','特快'];
    //遍历数组
    arr.forEach(function(ele,index){
      console.log(ele);
    });

    String中没有forEach方法
    //字符串不能用forEach
    var str = 'hello world';
    [].forEach.call(str,function(ele){
      console.log(ele);
    });

//输出
h
e
 l
o

w
o
r
l
d


------------------将字符串转成数组(字符串数组)------------------------------

var s, ss;
var s = "The rain in Spain falls mainly in the plain.";

ss = s.split(" "); //以空格将字符串分割
console.log(ss); //输出数组


-----------------apply和forEach综合--------------
var str = 'hello world';
    [].forEach.apply(str,[function(ele){
      console.log(ele);
    }]);


-------------------------arguments------------------------
获取函数的形参个数

function f1(){
      console.log(f1.arguments.length);
    }

    f1();

-------------------------caller------------------------
获取函数的实参

function f1(){
  console.log(f1.caller);//在哪一个函数中调用,就是那个函数,函数代码
}

f1();


-------------------------filter(过滤)-----------------------

var newArr = [10,11,20,30,40,50,66,80,10].filter(function(ele){
        //ele数组中的元素
        return ele>40;
    });

    console.log(newArr);



----------------------光标定位--------------

//当网页加载完成后,将光标定位到用户名输入框中
window.onload = function(){
  document.form1.username.focus();
}


--------------JS简单问候语函数-------------

function showTime(){
  //定义问候语变量
  var str = "";
  //获取id=showTime的元素
  var liObj = document.getElementById("showTime");
  //创建日期对象实例
  var today = new Date();
  //取出小时数
  var hours = today.getHours();
  //根据小时数，输出不同的问候语
  if(parseInt(hours)>=0 && parseInt(hours)<=11){
    str = "早上好";
  }else if(parseInt(hours)>11 && parseInt(hours)<=13){
    str = "中午好";
  }else if(parseInt(hours)>13 && parseInt(hours)<=17){
    str = "下午好";
  }else{
    str = "晚上好";
  }
  //向id=showTime元素写入内容
  liObj.innerHTML = str;

}
window.onload = showTime;


-------------------------解决元素获取问题-------------------------------

1.获取元素(标签)中某属性的值(获取元素属性值)

a:元素.attributes["defMyTag"].value;  ********特别注意,当需要获取一个元素的value属性的值时: 元素.value 即可

例如:
var id = document.getElementById("id的值").attributes["id"].value;  
var name = document.getElementById("id的值").attributes["name"].value;  
var value = document.getElementById("id的值").attributes["value"].value;  
var myTag = document.getElementById("id的值").attributes["defMyTag"].value;  

b:元素.getAttribute('index');
---------------------------------------------this.getAttribute('index');
注释:defMyTag---自定义属性

c.
元素.style.属性;----------重点

例如:
document.getElementById("id的值").style.zIndex;


#################

获取元素值

var btn = document.querySelector('button');
var inp = document.querySelector('input[type=text]');
var p = document.querySelector('p');
btn.onclick = function () {
  console.log(inp.value);  //输入框只能用 value 获取
  console.log(p.innerText);
  console.log(p.innerHTML);
};




------------------------------设置元素属性值-------------------------------------

第一种方法:images[i].setAttribute("style", "z-index: " + i ); //以字符串的形式添加样式属性(注意)
第二中方法:images[i].style.zIndex = i+1;
注释:images[i]---元素  document.getElementById('id值');

//设置元素值(适用于input);
b. 元素.value = 值;

-----------------------------------switch-case判断-----------------------------------------

//主要是针对的是值来判断---switch-case语句

     * switch-case语句
     *
     * 语法:
     * switch(表达式){
     *   case 值1: 代码1;break;
     *   case 值2: 代码2;break;
     *   case 值3: 代码3;break;
     *   case 值4: 代码4;break;
     *  default :代码5;break;
     * }
     *
     * 执行过程:
     * 获取表达式的值,和值1对比,一样,执行代码1,遇到break,则结束
     * 如果和值1对比不匹配和和值2对比,匹配了,则执行代码2,遇到break则结束,否则和值3对比,匹配则执行代码3,遇到break则结束,否则和值4对比,匹配了则执行代码4,遇到break则结束,否则执行代码5,遇到break,则结束
     *
     * 注意问题:
     * 1. switch-case语句中判断的时候是严格等于的方式来判断: ===
     * 2. switch-case语句中default可以省略
     * 3. switch-case语句中break是可以省略的
     *
     *
     *
     * 例子:
     *
     *


    //例子:根据对应的级别,显示对应范围的成绩

    var str = 'D';
    switch (str) {
      case 'A':
        console.log('分数在90到100之间');
        break;
      case 'B':
        console.log('分数在80到90之间');
        break;
      case 'C':
        console.log('分数在70到80之间');
        break;
      case 'D':
        console.log('分数在60到70之间');
        break;
      default :
        console.log('不好意思说');
        break;

    }


    //switch-case的注意问题:
    //
    //    var num = 10;
    //    switch (num) {
    //      case '10':
    //        console.log('1');
    //        break;
    //      case 10:
    //        console.log('2');
    //        break;
    //    }


    //根据月份,显示对应的天数
    var month = 1;
    switch (month) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        console.log('31天');
        break;

      case 4:
      case 6:
      case 9:
      case 11:
        console.log('30天');
        break;

      case 2:
        console.log('28天');
        break;
    }


--------------------------------------while循环-----------------------------------------
     *
     * 语法:
     * 要有一个计数器:记录循环的次数
     *
     * var i=0;//负责记录循环的次数
     * while(表达式){
     * 循环体---代码
     * i++;
     * }
     *
     * 执行过程:
     * 先判断条件是否成立,成立(true)则开始循环,执行里面的循环体,然后i++,然后回到循环的条件位置(表达式).,判断是否成立,成立则继续循环,直到条件为false,的时候,结束循环
     *
     *
     * 例子:
     *
     *

    //例子:请输出10次,我喜欢男人,江江说;

    var i = 0;
    while (i < 10) {
      console.log('我喜欢男人,瑞华说' + (i + 1));
      i++;//计数器---千万别都丢了
    }
    console.log('结束了');




-------------------------------------------------do-while循环---------------------------------------
     *
     * 语法:
     *
     * do{
     *   循环体
     * }while(条件);
     *
     * 执行过程:
     * 先执行循环体,然后判断条件是否成立,成立则继续循环,否则跳出循环
     *
     *
     * 例子:
     *
     *

    //例子:求1-100之间所有数字的和---do-while来实现

    //    var sum = 0;
    //    var i = 1;
    //    do {
    //      sum += i;
    //      i++;
    //    } while (i <= 100);
    //    console.log(sum);


    //提示用户输入帐号和密码,有一个是错误的则一直提示用户输入帐号和密码
    //admin ---帐号,   123----密码


    do {
      var userName = prompt('请您输入帐号');
      var userPwd = prompt('请您输入密码');
    } while (userName != 'admin' || userPwd != '123');
    console.log('登录成功');




---------------------------------------for循环------------------------------------------
     * 语法:
     * for(第一个表达式;第二个表达式;第三个表达式){
     *   循环体
     * }
     *
     * for(var i=0;i<length;i++){
     *   循环体
     * }
     *
     *
     * 执行过程:
     * 先执行一次var i=0;然后执行i<length的条件,成立则执行循环体,然后执行i++;然后判断条件i<length是否成立,成立则继续循环,否则跳出循环----反复执行
     *
     *

    //例子:
    //请把我好帅,显示10次,通过for完成
    //    for (var i = 0; i < 10; i++) {
    //      console.log('哈哈,我又变帅了');
    //    }


    //计算1-100之间所有数字的和
    //    var sum = 0;//存储和
    //    for (var i = 1; i <= 100; i++) {
    //      sum += i;
    //    }
    //    console.log(sum);
    //
    //    //计算1-100之间所有偶数的和
    //    var sum2 = 0;
    //    for (var i = 1; i <= 100; i++) {
    ////判断i是不是偶数
    //      if (i % 2 == 0) {
    //        sum2 += i;
    //      }
    //    }
    //console.log(sum2);
    //计算1-100之间所有奇数的和
    var sum = 0;
    for (var i = 1; i <= 100; i++) {
      if (i % 2 != 0) {
        sum += i;
      }
    }
    console.log(sum);



  --------------------------------------------------------------------------
  join = {
      'backgroundColor': 'red'
    };
    for(var attr in join){
      console.log(attr); //下标
      console.log(join[attr]); //值
    }

结果:
backgroundColor
red



-----------------------------js中的类型转换---------------
Number() 转换为数字， String() 转换为字符串， Boolean() 转化为布尔值。
parseInt()

在浏览器中黑色代表: 字符串
蓝色代表:数字类型


--------------------------------jaxa-----------
1.异步,是程序执行的一种方式,相较于同步在某种程度上执行效率高

2.XMLHttpRequest 他是javascript的内置对象,主要用于异步的方式向服务器发起请求并处理响应结果

a. var xhr = new XMLHttpRequest; //创建对象  new ActiveXObject("Microsoft.XMLHTTP"); //兼容IE5 IE6写法
b. xhr.open(); //跳转页面
c. xhr.setRequestHeader(); //声明数据格式 post 方式使用
d. xhr.send(); //发送请求的指令
e. xhr.addEventListener('readystatechange',function(){}); //添加事件监听
f. xhr.readyState; //客户端状态码4
g. xhr.status; //服务器的状态码200
h. xhr.responseText; //响应文本

详解:案例集合(anlijihe)-->jaxa-->2.open中

var xhr = new XMLHttprequest();
xhr.open('get', 'index.php');
xhr.send(null);
xhr.onreadystatechange = function(){
  if(xhr.readyState == 4 && xhr.status == 200){
    box.innerHTML = xhr.responseText;
  }
}

------------------------------------状态码---------------
常见状态码
2XX 成功
3XX 重定向
4XX 请求问题
5XX 服务器


Forbidden ????

new ActiveXObject("Microsoft.XMLHTTP");

--------------------------------------兼容性问题----------
在 IE 低版本(IE8)不存在:
1. console.log();  //consle,用alert()代替

2. JSON.parse(); //json转数组

3. JSON.stringify(); //IE7不存在  值转换为 JSON 字符串

less than
&lt;   <
&gt;   >
eyual  =

lte 小于等于


JSON.stringify() 从一个对象中解析出字符串

JSON.stringify({"a":"1","b":"2"})

结果是："{"a":"1","b":"2"}"



JSON.parse()从一个字符串中解析出JSON对象

var str = '{"a":"1","b":"2"}';

JSON.parse(str);

结果是：Object{a:"1",b:"2"}



---------------------模板引擎---------------

template();
//参数1:html模板
//参数2:数据(需要对象数据类型)

例子:
template('',{lists: users})





-------------------------------XML------------------------
使用XML 必须使用DOM
在Web开发中不常用XML
不使用XML的原因:
1.DOM操作很繁琐,且解析DOM比较耗费性能
2.XML数据过于臃肿(标签的数据量大于数据本身)

E:\xxbiji\anlijihe\jaxa\02.25

可以使用JSON代替XML


--------------------------------JSON---------------------
json独立于语言,其本质就是字符串

语法:必须使用双引号,不能有多余的逗号

json 数据类型:
a:
["a","b",1,2];

b:
{"name":"小米"."age":16};

复合类型:
[
  {"name":"小明","age":16},
  {"name":"小hong","age":26},
  {"name":"红红","age":20},
  {
    "name":"小刑",
    "age":15,
    "childs": [
      {"name":"小李","age":61}
    ]
  }
]

{"apps":
  [
    {"pkg":"2","data":"3"},
    {"pkg":"33","data":"5555555"}
  ]
}


JSON 数据类型转换:

array = {
  数据
}

json_encode() //变成字符串,php中将数据转换成他

JSON.parse(xhr.responseText); //数据解析,js中




location.pathname;  -----------自己的请求地址

获取到响应头信息
xhr.getResponseHeader('Content-Type');--

字符串.slice(0,-1);  --去掉最后一个字符串






--------------------------jQuery--------------------

$(); //调用

1.
参数:css选择器
例子:

$('button');

$('a + p'); //选择a标签后面紧挨着第一个的p

2.入口函数
a:
$(function(){

})
参数:函数

b:
$(document).ready(function(){

})

用来取代window.onload ,无需等待资源加载完成

jQuery 中的方法:
1. $('元素').click();

###################

2. $('元素').css(); //可以传入对象类型的属性,设置值为%时,需要加引号

例子:

//设置样式
    join = { //设置盒子样式
      'height': ulh
    };

    ct.css(join);
#################### 获取元素值,设置元素值

3. $('元素').html(); //通过html方法可以获取元素的内容,相当于 innerHTML
a. 不传参表示获取

b. 传参表示设置(修改)
$('元素').html('<p></p>');

4. $('.box').text();
a. 不传参表示获取      //套路
b. 传参表示设置(修改)

5. $('元素').val();
a. 不传参表示获取
b. 传参表示设置(修改)

6. $('元素').focus(); //鼠标获取焦点事件

7. $('.box').find('p'); //查找
方便链式操作

8.
.end(); //向后跳转一级

.slideUp();  //向上动

$('button').click(
d += 50;
.animate({
  marginLft:d
},1000);
)

9. $(this) //当前的

10. siblings().css('background','') //兄弟元素

siblings('img') //兄弟元素叫img的所有标签


排他功能:

$(this).css('background','red').siblings().css('background','')



11. $(this)() //当前点击标签对应的索引

12.
var index = $(this).index();

$('.cont').css('display','none').eq(index).css('display','block')

eq()  //等于的意思


alert() //弹窗,可用于调试

e.preventDefult() //阻止元素默认行为


阻止事件冒泡

document.getElementById("btn").onclick=function(e){
  ev = e||window.event; //兼容低版本IE
  ev.stopPropagation(); //1.
  // 2. ev.cancelBubble = true;
  // 3. ev.preventDefault();
  // 4. return false;
}

###

return false;   //防止跳转(阻止跳转)

当return false失效时,可以设置

<a href="www.baidu.com" onclick="gg(); return false;">点击</a>

###

13. $(this).serialize();  //获取表单提交值


--------------------------------------append()--------------------
创建元素:
<p>I would like to say: </p>

例1:

$("p").append("<b>Hello</b>");

例2:

var obj = $('<tr></tr>');

$('table').append(obj);


--------------------------------------删除元素--------------------------------

 $("#div1").empty();  //删除元素里的所有内容,清空子元素
 $("#div1").remove(); //删除整个(包括自己)元素,


-----------------------------------jQuery(事件处理)-----------------
jQuery中通过on实现,,事件的监听(绑定:支持同时处理某个元素的多个(点击)事件)

jquery事件绑定

on()
参数: a.事件名称 b.事件的回调函数

例子:
$('button').on('click',function(){})
$('button').on('mouseover',function(){})

jquery事件委托:
$('.box').on('click', '.box li', function(){})  //常用

事件委托是先找到父元素,给父元素绑定事件,从而给子元素添加事件 -->用于给动态生成的元素添加事件
事件绑定是已经找到了元素,给多个或一个元素添加一个或多个事件

##########
//jQuery中通过off方法实现,事件的移除

参数: a.

例子:
$('.box').off('mouseover');


##########
on 相对于bind要全一点(bind 动态添加的子元素触发不了父元素的事件)

b) 不需要参数时，表示一次移除事件

$('.off').on('click', function () {
  // $('.box').off('mouseover click'); //移除某个元素的这两个事件
  $('.box').off(); //移除这个元素的所有事件
})



#########
jQuery中通过 one 实现,,事件的"一次"监听

触发一次后就没有(移除)了


#############
hover()  == mouserover() + mouserout()

例如:
hover(fn(){},fn(){})


#############
DOC  ?


###############
$(this)

将this 转换成jQery(原生)对象

this 是一个DOM(原生)对象, 将this传到jQery(方法中去创建一个this对象),得到jQery原生对象.


##############
将jQery 对象转换成原生DOM对象

$('.box')[0]

##########
原生 DOM 表单元素 reset 方法可以清空表单

form.reset(); //这样写不行

$('form')[0].reset()

将$('form') jQery的对象转换成DOM对象,后使用DOM原生方法



########
将一段html 字符串,单词参数传入 $ 或 jQuery

$('<div class="minbox"></div>').text('测试').appendTon('.box');

----------------------------动画-------------------------

######### show(显示) ##### hide(隐藏) #######

$('.box').show(300); //显示
$('.box').hide(300); //隐藏

参数: a. 时间(毫秒) b. fn(可选)

不传参时没有动画效果

只传函数时,会有一个默认时间

只传入时间时: 渐变显示或隐藏(从左上角慢慢变大,慢慢显示)


######### fadeIn(淡入) ##### fadeOut(淡出) #######

参数: a. 时间(毫秒) b. fn(可选)

不传参时没有效果

只传函数时,会有一个默认时间

只传入时间时: 实现淡入淡出


######### slideUp(向上收缩) ##### slideDown(向下移出) #######

参数: a. 时间(毫秒) b. fn(可选)

不传参时没有效果

只传函数时,会有一个默认时间

只传入时间时: 实现效果


######### (fade)Toggle(切换) #########
不需要先给元素加效果

a.
//渐变显示(显示||隐藏)

注释:只改变了,display和opacity

$('.btn').click(function () {
  $('.box').fadeToggle();
})


b.
//卷帘门效果(向上移动||向下移动)
$('.btn').click(function () {
  $('.box').slideToggle();
})

c.
// 淡入||淡出切换
注释:不只改变了opacity,还改变了width,height

$('.toggle').click(function () {
  $('.box').toggle(3000);
})


------------------------自定义动画-----------

元素.animate({},time) //注意在使用它前加上元素,他的第三个参数,是依次执行的,不是同时

参数: a.对象 b.时间(毫秒) c.fn

a. 传入对象类型的参数对象(由css属性和值构成)

例子:
$('.box').animate({
  marginLeft: 400,
  height: 500
}, 3000,fn(){
  this //原生DOM对象
  $(this) //jQuery的
});

注意:一般只支持值为数字类型的属性


##################

参数:时间(毫秒)

delay(time) //等待(用来设置动画间的延迟)

##################

stop() //停止

通过 stop 可以将未完成的动画停止

参数:当只有一个参数时,并且 true 表示动画的终止,
当传入两个参数时,并且都是true 表示动画快速到结束,
默认是一个true.

##############

next()  //下一个兄弟节点(元素)


#############

prev()  //查找上一个兄弟节点
parent()  //查找上一个父级元素


#############

attr('属性') //获取标签属性值

#############
first() #筛选符合条件的第一个

last() #筛选符合条件的最后一个

#############

last().prev() //符合条件的前一个

first().next() //符合条件的后一个

#############

????????模糊

$('li').not('.box') //筛选出 box 的li元素

$('li').filter('.box') //筛选

$('ul').children('.span') //筛选出符合条件的子元素,不是后代元素

--------------------------添加类------------------------

addClass('类名'); //添加类名
ele.className = 'className'

removeClass('类名'); //删除类名

hasClass('类名'); //判断是否有这个类

toggleClass('类名'); //如果存在（不存在）就删除（添加）一个类。



--------------------------------jQuery 文档操作(处理)-----------------

1.创建元素

在table元素内部,最开始部分添加tr

prepend();

例1:
$('table').prepend('<tr> djfdjs</tr>');

例2:

var obj = $('<tr><td></td><td></td><td></td></tr>')

$('table').prepend(obj);



例3:

$('table').prepend(obj[0]);

############

prependTo //将原来的元素"剪切"走了

把所有段落追加到ID值为foo的元素中。

$("p").prependTo("#foo");

把谁放到谁中


------------------------------------

后面
$('.box').after()

前面
$('.box').before()


first()

在元素第一个位置添加新元素

first().before('<tr></tr>');

-------------------------------
在元素最后面

last().defore('<tr></tr>')


-------------------------------insertBefore()-----------------
$('<tr><td></td><td></td></tr>') //jQuery 对象

例1:
$('<tr><td></td><td></td></tr>').insertBefore($('tr').firset())

他还支持原生DOM
例2:
$('<tr><td></td><td></td></tr>').insertBefore($('tr').firset()[0])

还支持选择器,作为参数
$('<tr><td></td><td></td></tr>').insertBefore($('tr').firset('.box'))

------------------------insertAfter()------------------------

以被添加元素的角度添加


----------------------------clone()---------------------------------
$('tr').first().clone().insertAfter('.last');


找到内容中有删除的元素

clone 只是克隆了 html 结构

//通过传参可以将事件监听带上 clone(true);   #重点


###############
contains()     #面试

a.
$('td:contains("删除")').click(function(){
  $('tr').first().clone().insertAfter()
})

b.
$('td:contains("删除")').click(function(){
  $(this).paren().fadeOut(function(){

  })
})


#####################

元素.width(); //获取内容的宽
元素.height(); //获取内容的高

元素.width(300); //改变宽(不需要加单位)
元素.height(400); //改变高

outerWidth() //可以获取内容 + 内边距 + 边框的宽度
outerHeight() //可以获取内容 + 内边距 + 边框的高度
若用于 window 表示整个浏览器窗体（看得到的）的大小，包括浏览器任务栏等。（不包括电脑桌面的任务栏）

innerWidth() //内容 + 内边距的宽度  | 若用于 window.innerWidth   包括滚动条的宽度
innerHeight() //内容 + 内边距的高度 | 若用于 window.innerHeight  "看到的html部分内容"的高度

innerWidth(true) //可以获取内容 + 内边距 + 外边距 + 边框的宽度###似乎没用
innerHeight(true) //可以获取内容 + 内边距 + 外边距 + 边框的高度


(辅助理解(有理解图在js笔记里)

    #dv{
    width: 100px;
    height: 100px;
    border: 2px solid red;
    margin-top: 10px;
    padding: 10px;
    background: pink;
  }

    var dv = $('#dv');

    var w = dv.width(); //获取内容的宽
    var h = dv.height(); //获取内容的高

    var outw = dv.outerWidth() //可以获取内容100 + 内边距20 + 边框的宽度4
    var outh = dv.outerHeight() //可以获取内容 + 内边距 + 边框的高度

    var inw = dv.innerWidth() //内容 + 内边距的宽度
    var inh = dv.innerHeight() //内容 + 内边距的高度

    var inwt = dv.innerWidth(true) //可以获取内容 + 内边距 + 外边距 + 边框的宽度###似乎没用
    var inht = dv.innerHeight(true) //可以获取内容 + 内边距 + 外边距 + 边框的高度

    console.log(w,h,outw,outh);
    console.log(inw,inh);
    console.log(inwt,inht);


)

#####################

offset().top; //参照目标是 浏览器窗口(html,页面) 元素
offset().left; //参照目标是 浏览器窗口(html) 元素

position().top
是相对定位父元素的

offset().top
是相对视窗的

#####################

  ; //参照"已定位的祖先"元素(就是 left top 对应的值)

position().right; //

scrollTop() //父元素垂直滚动卷进去的距离
scrollLeft() //父元素垂直滚动卷进去的距离


#####################
语法:

$.fn.zdgd = function (){

}

$.fn.方法名 //可以在jQuery中加入自己的方法

$('.box').zdgd() //调用方法(现在他是jQuery的方法) 注意!!!!

辅助理解:

{
$ = jQuery; //在jquery中写了的,还未确认??????

$.fn = jQuery.prototype; //在jquery中写了的,还未确认??????
}




#################

each() //遍历

each(function(key,val){
  key
})

例子: //处理DOM

var arr = [];

//通过 each 遍历所有的li

li.each(function(key,val){

  arr[key] = $(this).outerHeight(); //将li的高存在数组中

})

js-->anlijihe-->自己写的插件中有详细使用


例2: //处理数据
var arr = ['a', 'b', 'c'];
$.each(arr, function(key, val){

})





--------------------------------2018-3-5----------------------

jQuer 继承 extend

var Person = {
    age: 18,
    sayHi : function(){

    }
};

var user = {
  age: 16,
  name: '小米'
}


$.extend(Person,user)

##

$.extend({a:10},{b:20})

{a: 10, b: 20}


#################

必须记住1,2,3,4

jQuery 为简化 XMLHttpRequest 的使用,对

XMLHttpRequest进行了一系列的封装,其中 ajax 方法是最实用的一个

ajax 参数详解:

$('button').click(function(){
  $.ajax({
    // 请求地址(默认为当前地址)
    1. url: 'ajax.php',

    //请求方式(默认是get)
    2. type: 'post',

    //请求数据(支持对象类型,字符串类型,格式为:key=val&key1=val1...)
    3. data: {name: '小米', age: 16},

    timeout: 3000; //超时设置(超时响应)3000前走success,3000后走error

    contentType: 'application/json', //设置请求头信息(默认值

    application/x-www.form-urlencoded);

    dataType: 'josnp'; //(约束)期望 服务器返回数据格式(xml)

    ###########
    josnp 有安全隐患,无法识别请求的用户,不好限制访问
    ###########

    响应成功的响应()
    4. success: function(info,stauts,xhr){
      //第一个参数,表示响应内容
      //第二第参数,表示响应状态(成功||失败||...)
      //第三个参数,是 ajax 实例
    },
    error: function(a,b,c){ //执行失败时执行它
      //第一个参数,表示ajax实例
      //第二个参数,表示失败原因
      //第三个参数,
    },
    complete: function(){
      //不管成功或失败,都会执行此操作
    }
  })
})

##################

$(window).height() //获取浏览器的高度

------------------------------事件委托------------------------------
事件委托是为了解决动态创建元素添加事件的方法

给动态元素添加事件(不是事件绑定)

重点:

a. on 给父元素添加事件(更加全面)

$('ul').on('click', 'li',function(){
  console.log(111);
})

注释:通过为动态添加元素的祖先元素添加事件
,那么动态添加的子元素也会触发器祖先元素的事件
,并且回调函数中的 this 指的是触发祖先元素事件的

(自己理解:通过子元素触发祖先元素的事件实现事件绑定)

#
冒泡可以处理所有兼容性,捕获在ie的一些浏览器不支持,
所有我们一般用冒泡

在事件对象中,通过ev.target



function on(type, child, cd){
  ul.addEventListener()
}


b. delegate()

解决动态添加元素,没有事件的问题

$('ul').delegate('li','click',function(){});


########################## jQuery 事件触发器##########################

$('.box').click(function(){
  $('.btn').trigger('click');
})



########################## JSONP 解决跨域问题 ##########################

为了保证浏览器数据安全,浏览器限制了我们访问其他不同源网站(数据)

不同源访问数据(跨域)

JSONP 就是程序员对现有问题想出来的解决方案


$('button').on('click',function(){
  $.ajax({
    url :' http://api.com/test.php',
    type: 'get', //对于jsonp没有意义,只能get
    dataType: 'jsonp', //要使用 jsonp 方案进行访问(注意)
    //jsonp: 'cb' //可以更改默认名(callback)
    data: {name:'小麦', age:16},
    success: function(info){
      console.log();
    }
  })
})


$(".a_post").on("click",function(event){
    event.preventDefault();//使a自带的方法失效，即无法调整到href中的URL(http://www.baidu.com)
    $.ajax({
           type: "POST",
           url: "url地址",
           contentType:"application/json",
           data: JSON.stringify({param1:param1,param2:param2}),//参数列表
           dataType:"json",
           success: function(result){
              //请求正确之后的操作
           },
           error: function(result){
              //请求失败之后的操作
           }
    });
});


// 测试通过
$('button').on('click',function(){
 $.ajax({  
        url:"index.php",  
        type:"get",  
        dataType:"json",
        async: false, // 更改为同步
        data:{  
            userID:"1"  
        },  
        success:function(response){  
            $('body').html(response);
        },  
        error:function() {  
        }  
    });
})



$.ajax({
//几个参数需要注意一下
    type: "POST",//方法类型
    dataType: "json",//预期服务器返回的数据类型
    url: "/users/login" ,//url
    data: $('#form1').serialize(),
    success: function (result) {
        console.log(result);//打印服务端返回的数据(调试用)
        if (result.resultCode == 200) {
            alert("SUCCESS");
        }
        ;
    },
    error : function() {
        alert("异常！");
    }
});

全局的名字容易被覆盖掉,所以生成随机的名字(jQery2311...566262)

作业:
天气预报
瀑布流


##################### id 选择器注意事项 #####################

不能同时获取多个相同 id 的元素

---------------------------------2018-3-6-------------------
元素.attr('属性','值')

一个参数读取,两个参数设置

$('img').attr('src'); //jquery获取属性值

$('img').attr('src','Luffys2.png'); //设置属性值

$('img').css() //传一个参数时是获取,传两个参数时是设置

#####################

元素.removeAttr('属性')

$('img').removeAttr('alt'); //删除属性

#####################(重点)

$('input').prop('checked' ,false); //不选中(全选true)

<input type="checked" checked>

prop() 处理无值属性更方便

$(this).prop('checked')  //返回布尔值

$("input[type='radio']:checked").val()  //获取选中的单选框的值

--------------------------伪类选择器----------------
<input type="text" name="username" />
<input type="password" name="pass" />

$('input:text').css(); //选中type是text
$('inout:password').css();


js 的写法
document.querySelector('input[type=button]');




################

$(':input').size(); //获取表单所有输入元素


$('form').submit(function(){
  //获取整个表单的数据(只支持这种格式的字符串,字符串格式) key=val&key1=val1...

  var data = $(this).serialize();

  //数组格式也可以
  //var arr = $(this).serializeArray();

  $.ajax({
    url: 'form.php',
    type: 'post',
    data: data,
    success:function(info){

    }
  });
  return false //阻止表单提交
  //submit 默认行为是提交
  //preventDefault(); //阻止表单提交
})


form.submit() //通过方法提交表单

text.select() //通过方法选中内容(原生DOM的方法)


#################### serialize() ####################
返回值:String

serialize() //将表单数据转换成 single=Single&multiple=Multiple&multiple=Multiple3&check=check2&radio=radio1这种类型的字符串

用于 Ajax 请求。


####################

$(this).trim(str) //去空格

去掉字符串起始和结尾的空格。


jquery中回调函数中传的参数就是事件对象

####################
function(ev){
  ev.stopPropagetion(); //阻止事件默认冒泡
  //return false; //既能阻止事件冒泡又能阻止跳转
}


function(ev){
  ev.preventDefault(); //阻止跳转(阻止表单提交类似于 return false)
}


ev 在jquery 事件对象中,它并非原生事件对象
要想



-----------------------全局配置 (了解)--------------------

通过全局配置可以精简代码,方便维护
//这样写之后后面的ajxa请求可以省略提交方式了,
//全局配置可以被覆盖
//相当于对ajax 的默认值进行设置
//data 参数除外,(data参数类似于继承,自己理解的)

$.ajaxSetUp({
  type: 'post'
})

################

jQuery 对 ajax 的请求和相响阶段进行非常精细化的处理


//当请求准备发送前
ajaxStart

$(document).ajaxStart(function(){
  console.log('ajaxSend');
})

################

懒加载就是预加载

///////////////////////////////////////////////
控制器中出现
灰色的数字是字符串类型的
绿色的是数字类型的


node

第一步:
在E:\xxbiji\anlijihe\letao\api  必须在这个目录下

shift + 右键 在此处打开命令窗口

第二步:
npm start

第三步在浏览器输入:
localhost:3000

###################
E:\xxbiji\anlijihe\letao\api>node app.js //可以不输

E:\xxbiji\anlijihe\letao\api>npm start

> letao@0.0.0 start E:\xxbiji\anlijihe\letao\api
> node ./bin/www

GET / 404 38.096 ms - 46
GET /favicon.ico 404 9.693 ms - 46
###################

//嘱咐浏览器可以进行跨域数据访问
header('Access-Control-Allow-Origin: *');

*  // 是所有都可以访问
http://localhost //域名 限制只能让某个域名可以访问

有毛病

###################
CORS 面试  如何解决跨域问题?

//反向代理

蓝灯(翻墙软件) 正向代理

实际开发中,反向代理更有意义,不用装软件

就是apache 配置

步骤:


############################

------------------------------------------正则表达式------------------------------------------

非严格模式

元字符:

.  -------除了 \n 以外的任意的一个单个字符

|  ------------或者

() ------------分组或提升优先级别
(()(()))       从最左边开始查

[] ------------范围
[0-9]          任意一个数字就能匹配
[a-z]          只要有符合 a-z 范围内的任意一个小写字母就能匹配
[A-Z]          只要有符合 A-Z 范围内的任意一个大写字母就能匹配
[a-zA-Z]       只要有符合 a-z,A-Z 任意一个字母就能匹配
[0-9a-zA-Z]    只要有符合 0-9,a-z,A-Z 任意一个数字或字母就能匹配

一般的元子符如果进入到[]里面 失去原有的意义
[.] 在这就表示 点


限定符 (也是元字符)

*   前面的表达式出现了0次到多次
+   前面的表达式出现了1次到多次
?   前面的表达式出现了0次到1次(在非严格模式,不管多少次都能匹配)贪婪模式

{0,}  前面的表达式出现了0次到多次和 * 一样
{1,}  前面的表达是出现了1次到多次和 + 一样
{0,1} 前面的表达式出现了0次到 1次和 ? 一样
{9}   前面的表达式出现了9次  
{,1}  错误的写法

\d    数字--相当于[0-9]
\D    非数字
\s    空白符号
\S    非空白符
\w    非特殊符号 [a-zA-Z0-9_]
\W    特殊符号 [^a-zA-Z0-9]

\b    单词边界

^     以什么开始或取反
^[0-9] 以数字开头
[^a-zA-Z0-9_] 取反,区别在于 ^ 在不在括号里面

$     以什么结尾

/g意思就是：global可选标志，带这个标志表示替换将针对行中每个匹配的串进行，否则则只替换行中第一个匹配串。

/i意思就是 case insensitive,区分大小写小字。如：sw与sW不管；

/m多行搜索


######

中文
/[\u4e00-\u9fa5]/


###########################

ip/掩码：

'192.168.255.245/24'

/^([1-9]|[1-9]\d|1\d{2}|2[0-5][0-5])\.(\d|[1-9]\d|1\d{2}|2[0-5][0-5])\.(\d|[1-9]\d|1\d{2}|2[0-5][0-5])\.(\d|[1-9]\d|1\d{2}|2[0-5][0-5])([/](\d|1\d|(2[0-4]))){1}$/

###########################

匹配一个单词
/\b(com)\b/    // /\bcom\b/也可以 不需要加 {1}

###########################


######

原创噢~~~~~~~
匹配大括号里的内容
获取括号里的值
'姓{}名{q}： {abc1111}性别： {a11}年}龄：{112}{1abc：{11111啊实打实}'.match(/[{]+[^{^}]+[}]+/g)

######

邮箱验证：
/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/ // 百度的
/[0-9a-zA-Z_.-]+[@]{1}[0-9a-zA-Z_.-]+([.]\bcom\b)$/ // 我写的

###########################

例:

var reg = /[0-9a-zA-Z_.-]+[@][0-9a-zA-Z_.-]+([.][a-zA-Z]+){1,2}/;

reg.test(str) //返回布尔值

###########################

例:

function ReplaceDemo(){   
  var r, re;                    // 声明变量。
  var ss = "The man hit the ball with the bat.while the fielder caught the ball with the glove.";
  re = /The/g;             // 创建正则表达式模式。
  r = ss.replace(re, "A");    // 用 "A" 替换 "The"。
  console.log(r);                   // 返回替换后的字符串。
}

ReplaceDemo();

例:
function trim(str) {
    return str.replace(/(^\s+)|(\s+$)/g, "");
}

###########
替换斜杠
var r, re;
var ss = "The man hit t/he /ball wit/h the bat.";

function ReplaceDemo(){   
  re = /[/]+/g;                  // 创建正则表达式模式。
  r = ss.replace(re, "\\");      // 用 "A" 替换 "The"。
  alert(r);
}

ReplaceDemo();

###########################

替换第一个和最后一个

var str = 'abcdeafeesa'
str.replace(/^a(.*)a$/, function(input, $1) {
  return '*'+$1+'*'
})

###########################

exec 方法

用正则表达式模式在字符串中运行查找，并返回包含该查找结果的一个数组。

rgExp.exec(str)

-----------------构造函数来生成正则表达式------------------


var re = new RegExp("^\\d+$","gim"); //注意，反斜杠需要转义

var v = "bl";

var re =new RegExp("^\\d+" + v + "$","gim"); // re为/^\d+bl$/gim

第一个参数不需要//,其他都一样

###########################

500  服务器内部错误
502  

########################

解决鼠标滚动触发多次事件的方法

var tur = true;
function haha(){alert("haha"); tur = true; }

window.onscroll = function(){
if(tur){ setTimeout(haha,1000); tur = false;
}else{ }
}


##################################
判断鼠标滚动方向

```js

var scrollFunc=function(e){
    var direct=0;
    e=e || window.event;

    var t1=document.getElementById("wheelDelta");
    var t2=document.getElementById("detail");
    if(e.wheelDelta){//IE/Opera/Chrome
        t1.value=e.wheelDelta;
    }else if(e.detail){//Firefox
        t2.value=e.detail;
    }
    ScrollText(direct);
}
//注册事件
if(document.addEventListener){
    document.addEventListener('DOMMouseScroll',scrollFunc,false);
}//W3C
window.onmousewheel=document.onmousewheel=scrollFunc;//IE/Opera/Chrome/Safari

```

###################################

键盘方向键事件

<script type="text/javascript">
 function jumpPage() {
    if (event.keyCode==37)//左
fun_a();
if (event.keyCode==38)//上
 fun_b();
 if (event.keyCode==39)//右
fun_c();
if (event.keyCode==40)//下
fun_d();
 }



function fun_a(){
window.alert('你按下了左')
 }

function fun_b(){
window.alert('你按下了上')
}

function fun_c(){
window.alert('你按下了右')
}

function fun_d(){
 window.alert('你按下了下')
}
document.onkeydown=jumpPage;

####################
jquery

$(document).keydown(function(event){  
    //判断当event.keyCode 为37时（即左方面键），执行函数to_left();  
    //判断当event.keyCode 为39时（即右方面键），执行函数to_right();  

    if(event.keyCode == 37){  
       to_left();   
    }else if (event.keyCode == 39){   
       to_right();   
    }   
});


Array.sum()


---

### 获取属性值

getComputedStyle 和 element.style 的相同点就是二者返回的都是 CSSStyleDeclaration 对象，
取相应属性值得时候都是采用的 CSS 驼峰式写法，均需要注意 float 属性。
而不同点就是：
1.  element.style 读取的只是元素的"内联样式"，即 写在元素的 style 属性上的样式；
而 getComputedStyle读取的样式是最终样式，包括了"内联样式"、"嵌入样式"和"外部样式"。
　　
2.  element.style 既支持读也支持写，我们通过 element.style 即可改写元素的样式。而 getComputedStyle仅支持读并不支持写入。
　　我们可以通过使用 getComputedStyle 读取样式，通过 element.style 修改样式


let 的「创建」过程被提升了，但是初始化没有提升。
var 的「创建」和「初始化」都被提升了。
function 的「创建」「初始化」和「赋值」都被提升了。

```js

/**
* 获取属性值
* @return {number} value 属性值
*
*/
My.prototype.getStyle = function (ele, attr) {
    if (window.getComputedStyle) {
        let value = window.getComputedStyle(ele, null)[attr]
        let index = value.indexOf('px')
        return Number(value.slice(0, index))
    } else {
        console.log('老铁！解决下兼容')
        return el.currentStyle;
    }
}

```


##########

var str="How are you doing today?"

//第一个参数是分割条件,第二个参数是:分割字符串个数
document.write(str.split(" ") + "<br />")
document.write(str.split("") + "<br />")
document.write(str.split(" ",3))


输出：

How,are,you,doing,today?
H,o,w, ,a,r,e, ,y,o,u, ,d,o,i,n,g, ,t,o,d,a,y,?
How,are,you

############

cookie

document.cookie

cookie 大小不能超过4kb,由于cookie是存放在客户端的计算机中,修改很方便,所以cookie不能存放重要信息

cookie 的类型是字符串,而不是数组

document.cookie = "name=value;expires=date" //设置cookie有效期

#例子1:
生成cookie并设置到期时间:

function setCookie(c_name, value, expiredays){
　　　var exdate=new Date();
　　　exdate.setDate(exdate.getDate() + expiredays);
　　　document.cookie=c_name+ "=" + escape(value) + ((expiredays==null) ? "" : ";expires="+exdate.toGMTString());
}

使用方法：setCookie('username','Darren',30)


#例子2
最常用的例子就是让 cookie 在跟目录下,这样不管是哪个子页面创建的 cookie，所有的页面都可以访问到了:

　　document.cookie = "name=Darren;path=/"

#

最常用的例子就是让 cookie 在根目录下,这样不管是哪个子页面创建的 cookie，所有的页面都可以访问到了:

　　document.cookie = "name=Darren;path=/"

#
"www.qq.com" 与 "sports.qq.com" 公用一个关联的域名"qq.com"，我们如果想让 "sports.qq.com" 下的cookie被 "www.qq.com" 访问，我们就需要用到 cookie 的domain属性，并且需要把path属性设置为 "/"。例：

　　document.cookie = "username=Darren;path=/;domain=qq.com"
　　注：一定的是同域之间的访问，不能把domain的值设置成非主域的域名。

#

cookie 编码细节
　在输入cookie信息时不能包含空格，分号，逗号等特殊符号，而在一般情况下，cookie 信息的存储都是采用未编码的方式。所以，在设置 cookie 信息以前要先使用escape()函数将 cookie 值信息进行编码，在获取到 cookie 值得时候再使用unescape()函数把值进行转换回来。如设置cookie时：


例子3
document.cookie = name + "="+ escape (value)

return unescape(document.cookie.substring(c_start,c_end))

######

escape() 函数可对字符串进行编码，这样就可以在所有的计算机上读取该字符串。(类似于加密)
unescape()  解密


##

//获取指定cookie的值
function getCookie(cookieName) {
    var strCookie = document.cookie;
    var arrCookie = strCookie.split("; ");
    for(var i = 0; i < arrCookie.length; i++){
        var arr = arrCookie[i].split("=");
        if(cookieName == arr[0]){
            return arr[1];
        }
    }
    return "";
    }

#####

//获取地址栏数据
SearchList.prototype.queryUrlParams = function(){
  // 获取搜索信息url 后面的信息
  var obj = {};
  var search = location.search; //获取地址栏的值
  if(search){
    search = search.replace('/^\?/', ''); //删除第一个问号
    if(search){
      var arr = search.split('&'); //以&符分开字符串并转成数组
      arr.forEach(function(){
        var itemArr = v.split('='); //以&符分开字符串并转成数组
        obj[itemArr[0]] = itemArr[1]; //再组成数组
      })
    }
  }
  return obj;
};

获取地址栏的值,并将字符串转成关联数组

#############

获取地址栏的值
function GetQueryString(name)
        {
            　　var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
            　　var r = window.location.search.substr(1).match(reg);
            　　if(r!=null)return unescape(r[2]);
            return null;
        }
// 调用方法
alert(GetQueryString("id"));


window.location.search //关键, 获取地址栏的值


################

拼接数字

将他转换成string类型就行了
var z = y.tostring()+x.tostring();
或者
var z = y+''+x;


#

jquery  的页面加载完成后执行的方法 == window.onload
$.(function(){

})

// 页面文档加载完成
document.addEventListener('DOMContentLoaded', function(){
  console.log(0);
})


#
过渡的结束事件
transitionend

$('.box li:last-child').on('transitionend',function () {

});


##

checked  判断复选框是否选中

val.checked == true 则为选中

val是原生的DOM元素

##

获取所有选中的复选框

$(this).parent().find('input:checked')


##

数组里面不能写数字类型的下标,那样会导致多出很多个值出来
arr[1] = 50;
arr[10] =500;
这样是不行的, 可以将1 和 10 转换一下类型


#

查看数据类型


#
属性选择器
$("[id=10]");
$('input[v-pid=' + id + ']')


###
格式化时间
var h = Math.floor(that.time/3600);
var m = Math.floor(that.time%3600/60);
var s = Math.floor(that.time%60);


moment  需要下载(日期格式化)

moment(time).format('YYYY-MM-DD HH:mm:ss');

##
数组反转
arr.reverse()

##
+ 删除数组中的某个值

arr.splice(index,howmany,item1,.....,itemX)

例:

var arr = [1, 2, 3]
arr.splice(0, 1) // return [1]
console.log(arr) // [2, 3]


例:

+ 将某个值插入到数组中特定的位置

var arr = [1, 2, 4]

arr.splice(2, 0, 3) // return []

console.log(arr) // [1, 2, 3, 4]

参数  描述
index 必需。整数，起始值
删除项目的位置，使用负数可从数组结尾处规定位置。
howmany 必需。要删除的项目数量。如果设置为 0，则不会删除项目。
item1, ..., itemX 可选。向数组添加的新项目。

**** 特别注意: 此方法会改变原有数组,若想不改变原数组可使用 slice() 此方法

##

arr.spl


##
删除数组中的某个元素
var arr = [1,2,3,4,5,6];
for(var i = 0; i < arr.length; i++){
  if(arr[i] == 5){
    arr.splice(i, 1);
  }
}

删除数组中某个下标的值
arr


##
tofixed()

去小数点后两位
amount.toFixed(2);  用于移动端,PC有兼容问题

round(number,digits) [1]
参数
number,要四舍五入的数，digits是要小数点后保留的位数,
注意: 可是当保留位跟着的即使是5，有可能进位，也有可能舍去，机会各50%。

##

- 四舍五入

`
Math.round()
`
##

##
javascript:history.go(-1);  返回上一级

##
xml 有一定格式的字符串

##
当元素的值发生改变时，会发生 change 事件。

$(selector).change(function)

##
当 DOM（文档对象模型） 已经加载，并且页面（包括图像）已经完全呈现时，会发生 ready 事件。

语法 1
$(document).ready(function)

语法 2
$().ready(function)

语法 3
$(function)


##
解决图片加载失败问题
图片加载失败会触发onerror这个api
<img src="./1.png" onerror="this.src='images/2.png'">

##
restfull webapi
面向资源

##
快速排序

function quickSort(arr){
    //如果数组<=1,则直接返回
    if(arr.length<=1){return arr;}
    var pivotIndex=Math.floor(arr.length/2);
    //找基准，并把基准从原数组删除
    var pivot=arr.splice(pivotIndex,1)[0];
    //定义左右数组
    var left=[];
    var right=[];

    //比基准小的放在left，比基准大的放在right
    for(var i=0;i<arr.length;i++){
        if(arr[i]<=pivot){
            left.push(arr[i]);
        }
        else{
            right.push(arr[i]);
        }
    }
    //递归
    return quickSort(left).concat([pivot],quickSort(right));
}


##
提示框||确定框||弹出框
confirm("您确定删除吗?")   确定则返回true,否则返回false


##
转码:
var b = encodeURI('我很...');
console.log(b);
结果: %E6%88%91%E5%BE%88...

解码:
var c = decodeURI('%E6%88%91%E5%BE%88...');
console.log(c);
结果: 我很...

------------------------------es6-----------------

开启严格模式:
'use strict';

var  声明变量提升
let  声明变量不提升

let  声明的变量无法重复声明

let  声明变量有块级作用域

作用域: 每个大括号之内都是一个块级作用域
作用: 在作用域值内声明的内容, 在作用域之外是不能使用的(只是由于js)

let 可以解决一些闭包问题

##

const 常量: 一旦赋值无法修改

常量一般用于node中引入模块


在特定情况下是可以修改常量中的值的

##

由于以前js中的操作字符串的方法存在缺点
ES6 为我们扩展了很多新的操作字符串的方法

includes()  // 判断一个字符串是否包含另一个字符串
var str1 = "dsfdg";
var str2 = "dgdfdddd";
var res = str1.includes(str2);  //返回值为boolean值


startsWith()  //判断一个字符串是否以另一个字符串开头
endsWith()    //判断一个字符串是否以另一个字符串结尾
返回值是布尔值

repeat()      //将一段字符串重复多次
var a = "adf";
var res = a.repeat(30);
console.log(res);

###

模板字符串

用于: 拼接多个字符串时使用
格式: ``
特点: 在字符串中可以直接输出变量
      可以识别换行

#

var obj = {
  name: '大幅度',
  age: 18
}

var str = `大家反${obj.name}对封${obj.age}建`;

#

var str = `
<ul>
  <li>
    <a href="#"> 5666</a>
  </li>
</ul>
`

###

箭头函数: 为了让匿名函数更高效

普通的:
var fs = require("fs");
fs.readFile("./index.html", function(err, data){

});

箭头函数:
var fs = require("fs");
fs.readFile("./index.html", (err, data) => {

});

#
只有一个参数时可以省略括号
fn(a => {
  console.log(a);
});

#
如果箭头函数代码体质有一句话可以省略大括号
fn(a => console.log(a));

#
如果箭头函数的代码体只有一句并且还有关键字 return ,可以省略大括号和return
fn(function(a){
  return a * 2;
});

箭头函数的调用方式:
fn(a => a * 2);


#
箭头函数没有自己的this,函数体内部写的this,指向的是外层代码块的this

this.name = "高于啊暖";
this.age = 16;
var aa = {
  showLove: () => console.log(`大家好,我叫${this.name},今年${this.age}`)
}

#
箭头函数内部的this是定义时所在的对象, 而不是使用时所在的对象并且一旦设置就不会改变

#
箭头函数不能用作构造函数

#
1. promise then 方法的返回值
  + 没有返回值, 前面的then方法

---------------------------canvas-----------

如果浏览器不兼容canvas,会将它解析成div标签

1.兼容处理
<canvas id="can">您的浏览器版本过低请升级您的浏览器</canvas>

2.获取canvas对象
var cas = document.getElementById("can");

3.调用getContext() //上下文对象
var ctx = cas.getContext("2d");

4.方法:
  + moveTo(x, y)
    + ctx.moveTo(x, y); // 起始点

  + lineTo(x, y)
    + ctx.lineTo(x, y); // 终点(下一个点)

  + stroke()
    + ctx.stroke(); // 描边(最好只出现一次)

  + closePath()
    + ctx.closePath(); // 闭合(能出现多次)

  + 设置宽高
    + 如果用css来设置宽高, 画布并能够不会改变它的大小,只会进行"缩放"
    + 可以设置行内样式

  + fill() 填充颜色
    + 将图像围成的区域进行颜色填充
    + 非零环绕(为0的话就不填充)
      + 在区域内部随意拉出一条线来,然后将线段的方向进行计数,顺时针为+1
      + 逆时针记为-1
    + ctx.fill();

  + 设置线
    + ctx.lineWidth = 10; //设置线宽
    + ctx.lineCap  //设置线段末端样式
      + butt //默认值
      + round //圆角线帽(比默认值宽)
      + square //直角(比默认值宽)
      + 语法:
        + ctx.lineCap = "round";
  + 开启一个新的图形,为了上下互不影响
    + ctx.beginPath();
  + 设置拐角
    + lineJoin
      + miter 默认值(不作任何处理)
      + round 圆角
      + bevel 平角
      + ctx.lineJoin = "miter";

  + 绘制虚线
    + setLineDash(arr): 设置虚线的结构
      + arr = [5, 5]; //虚线长度,空格长度()循环, 数组可以为多个值
    + lineDashOffset = number; //设置线段平移
      + 值为正数向左移动
      + 值为负数向右移动
    + 重新设置宽度也可以清除内容
      + 如果用设置宽度的方式清除会将整个cas全部清除
      + 如果使用clearRect方法来清除,可以只清除局部内容

    ```js
    ctx.beginPath();
    ctx.setLineDash([5, 10]);
    ctx.mouseover

    ```

  + 可以设置画面宽度,清除画布内容
    + ctx.width = ctx.width;


  + strokeStyle 给用来给描边
    + ctx.strokeStyle = "red";
    + ctx.fillStyle = "rgb(5,5,5)";
  + files

  + 描边矩形  strokeRect
    + x 矩形的起始点的x轴的坐标
    + y 矩形的起始点的y轴的坐标
    + width 矩形的宽
    + height 矩形的高
    ctx.strokeRect(100,100,200,100);
  + 填充矩形
    + ctx.fillRect = (0,0,600,600);
  + 清除矩形区域的内容
    + ctx.clearRect

  + 绘制圆弧
    + arc
      + x 圆心的x轴坐标
      + y 原心的y轴坐标
      + radius 半径
      + startAngle 开始的角度(单位:弧度)
      + endAngle 结束的角度(单位:弧度)
      + anticlockwise 绘制方向 true为逆时针 false为顺时针
        + ctx.arc(300,300,200,0,360); //绘制圆
        + 3.14126    Math.PI
        + ctx.arc(300,300,200,0,30 * Math.PI / 180); //设置圆弧
        + 弧度可以为负值
        + 注意: 要描边 ctx.stroke();
      + 加上缩放可以绘制椭圆

  + 绘制相切的圆弧
    x0
    y0
    x1
    y1
    radius 半径


context.drawImage(img,x,y);
JavaScript 语法 2
在画布上定位图像，并规定图像的宽度和高度：

context.drawImage(img,x,y,width,height);
JavaScript 语法 3
剪切图像，并在画布上定位被剪切的部分：

context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
参数值
参数  描述
img 规定要使用的图像、画布或视频。
sx  可选。开始剪切的 x 坐标位置。
sy  可选。开始剪切的 y 坐标位置。
swidth  可选。被剪切图像的宽度。
sheight 可选。被剪切图像的高度。
x 在画布上放置图像的 x 坐标位置。
y 在画布上放置图像的 y 坐标位置。
width 可选。要使用的图像的宽度。（伸展或缩小图像）
height  可选。要使用的图像的高度。（伸展或缩小图像）

+ 绘制文本
  + fillText:
    text: 要绘制的文本
    x:
    y: 设置文本起始点的坐标
    ctx.fillText("你好世界", 100, 100);
  + strokeText:(会粗一点)
    text: 要绘制的文本
    x:
    y: 设置文本起始点的坐标

+ 设置字体
  + ctx.font = "20px 微软雅黑";
  + textAlign属性
    + textAlign = "left";

+ 绘制图片
  + ctx.drawImage(img, 100, 100);
  + img 图片,这个的参数不能是一个路径是一个具体的图片对象
  + dx 绘制的x坐标
  + dy 绘制的y坐标
  + dWidth 绘制的宽度
  + dHeight 绘制的高度
  +
```js

var img = new Image();
img.src = "./1.jpg";
img.onload = function(){
  ctx.drawImage(img, 100, 100);
}

```

+ ctx.translate(50, 50);  //移动(移动坐标轴)
+ ctx.rotate(30 * Math.PI / 180); //旋转
+ ctx.scale(x, y);  //缩放


###

konva  

> 使用步骤

+ 引用js文件
+ 设置html代码
+ 书写js代码, 创建一个stage(舞台对象)
+ c创建一个layer(层)对象
+ 将形状添加到layer中
+ 将layer添加到stage中

closed: true

贝塞尔曲线: 运动曲线

+ dash: 虚线传数组
+ draggable: true 可拖拽


```js

var sidth = window.innerWidth;
var height = window.innerheight;

// 1.创建一个stage对象
var stage = new Konva.Stage({
  container: "container",
  width: width,
  height: height
});

// 2.创建一个层对象
var layer = new Konva.Layer();

// 3.开始绘制形状
var redline = new Konva.Line({
    points: [5, 70, 140, 23, 250, 60, 300, 200],
    stroke: 'red', //描边
    strokeWidth: 15, //描边的宽度
    lineCap: 'round',
    lineJoin: 'round'
});

// 4. 将形状添加到layer中
  layer.add(redLine);

  5. 将层添加到stag
  s
```


#################################

清除数组中所有的元素
arr.length = 0;

####

+ 信息交互:
  + 短论寻
    + 缺点: 占用服务器, 一直发送请求(造成资源浪费)
  +



#############################

字符产反转:
    var str = 'hello word,php';
    // var newstr = '';
    // [].forEach.call(str, function(one){
    //  newstr = one + newstr;
    // });

    // var one = str.split(' '); //字符串转数组
    // var two = one[1].split(',');
    // var temp = two[0];
    // two[0] = two[1];
    // two[1] = ',' + temp;
    // two.push(' ' + one[0]);
    // var newstr = two.join('');
    console.log(newstr);


##################

设置代码块  pre

var arr = $("pre").html().split("\n");
var text = "<ol>";

$.each(arr,function(k, v){

    if(v.trim() != " "){
      console.log(666);
        text += "<li>"+ v +"</li>";
    }
});

text += "</ol>"

$("pre").html(text);

###############

arr.reverse()   数组反转
</body>
</html>

######

转换时间格式:
time.toLocaleDateString()

time 时间(new Date());

获取时间戳:
Date.parse(new Date())
1542211128000

(new Date()).valueOf()
1542211138859

new Date('2018-05-01').getTime()
1542211149348

第一种：获取的时间戳是把毫秒改成000显示，因为这种方式只精确到秒
第二种和第三种是获取了当前毫秒的时间戳。

#
charAt(index) 方法可返回指定位置的字符。
index 必需。表示字符串中某个位置的数字，即字符在字符串中的下标。
str.charAt(0) // 返回下标为0的字符串

#
str.toUpperCase();  //将字符串转为大写
str.toLocaleLowerCase();  //将字符串转为小写

##

str.split(',').reverse().join(',');  //字符串反转



###
arr.findIndex((item) => { // 返回符合回调函数条件的数组元素的索引
  return item.pic === file;  // item  数组元素
})

vue-quill-editor   副文本框

#####  结构赋值

数组的结构赋值
let arr = [1, 5, 9];
let[a,b,...c] = arr;
console.log(a); // 1
console.log(b); // 5
console.log(c); // array[1,5]

## 数组的扩展运算符
let arr1 = [1,2,3];
let arr2 = [4,5,6];

//合并数组
let arr = [...arr1,...arr2];


##
let 结构赋值
let y = {
  name: '2s',
  age: 18
};

let { name: a, age: b } = y;


### for-in

var ary = [1,3,5,7];
for(var a in ary){
  console.log(a + '-----------' + ary[a]);
}

// a 是索引 0,1,2,3
// arr[a]  1,3,5,7

--------------------------------- map --------------------------------

遍历数组中的每一个元素, 并返回符合条件的数组
用于从数组中取出想要的某些元素,并组成新数组

arr.map((item) => {

})



例:
let arr = [
    {
        id: 1,
        name: 'y',
        age: 18
    },
    {
        id: 2,
        name: 'h',
        age: 19
    },
    {
        id: 3,
        name: 'l',
        age: 20
    }
];

const newArr = arr.map((item) => {
    return { gg: item.age }
});

console.log(newArr);


结果:

(3) [{…}, {…}, {…}]
0: {gg: 18}
1: {gg: 19}
2: {gg: 20}length:
3__proto__: Array(0)

###

window.close();  // 关闭浏览器窗口

###  数组去重

let arr = [1, 2, 8, 5, 2, 11, 9, 5, 55, 11, 9, 100, 111, 9]
function dr(arr) {
  let newarr = [arr[0]];
  for(let i = 1; i < arr.length; i++) {
    if(newarr.indexOf(arr[i]) == -1) {
      newarr.push(arr[i])
    }
  }
  return newarr
}

console.log(dr(arr))


----------------------------FormData----------------------------------

// 上传文件
<input type="file" id="file">
<div class="box">
    <span>12346666</span>
    <div>
        <span></span>
    </div>
</div>

```js
  var input = document.getElementById('file');
  var span_val = $('span').text();

  input.addEventListener('change', function (e) {
      var file = e.target.files[0];
      var formData = new FormData();
      formData.append('file', file);
      formData.append('span_val', span_val);
      for (var value of formData.values()) {
          console.log(value);
      }

  }, false);

```

----------------------------FormData----------------------------------

触发事件
在每一个匹配的元素上触发某类事件。

$("#file").trigger("click");

####

function getNowFormatDate() { // 获取当前时间
  var date = new Date();
  var seperator1 = "-";
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  if (month >= 1 && month <= 9) {
      month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
  }
  var currentdate = year + seperator1 + month + seperator1 + strDate;
  return currentdate;
}




// 密码验证
$('#password').blur(function() {
    var str = $(this).val()
    var err = $(this).parent().next('.error')
    var success = $(this).parent().find('.success')
    var reg = /^(?![^a-zA-Z]+$)(?!\D+$)/
    if(reg.test(str) && str.length >= 6){
        if(err) {
            err.remove()
            $(this).parent().css('border-color', '#eeeeee')
        }
        if(success.length === 0) {
            $(this).parent().append('<i class="iconfont icon-zhengque success"></i>')
        }
    } else if(err.length === 0) {
        $(this).parent().after('<div class="error clearfix" style="margin-left: 0px;"> <i class="iconfont icon-tishi"></i><span>请输入"带有字母和数字不少于6位"的密码</span> </div>')
        $(this).parent().css('border-color', '#f27a7a')
    }
})

$('#copy_passwd').blur(function(){
    var err = $(this).parent().next('.error')
    var success = $(this).parent().find('.success')
    if($(this).val() === $('#password').val()) {
        if(err) {
            err.remove()
            $(this).parent().css('border-color', '#eeeeee')
        }

        if(success.length === 0) {
            $(this).parent().append('<i class="iconfont icon-zhengque success"></i>')
        }
    } else {
        if(err.length === 0) {
            $(this).parent().after('<div class="error clearfix" style="margin-left: 0px;"> <i class="iconfont icon-tishi"></i><span>两次密码输入不一致</span> </div>')
            $(this).parent().css('border-color', '#f27a7a')
        }
    }
})

> 数字验证

```js
var ruleNumber = (rule, value, callback) => {
    var v = Number(value)
    if(value === '') {
         callback(new Error('不能为空'))
    } else if(v === 0) {
        callback(new Error('不能为0'))
    } else if(isNaN(v)) {
        callback(new Error('请输入数字'))
    } else if(v < 0) {
        callback(new Error('请输入大于0的正整数'))
    } else if((v | 0) !== v) {
        callback('请输入正整数')
    } else {
        callback()
    }
}
return {
    rules: {
        value: [
            { validator: ruleNumber, trigger: 'blur' }
        ]
    }
}
```

##
触发 某个事件的方法
trigger()

$('#checked').prop('checked',true).trigger('change')
##

##
$(ele).stop() // 停止运行当前元素的所有动画
##


##
删除对象属性||成员
delete obj.age   // return true
##


yang123&


字符串换行拼接
var str = '<a>\
              j\
          </a>'


#####
js在父元素上添加点击事件，怎么阻止子元素继承父元素的点击事件？
父元素中有上百了不同的子元素，怎么实现在父元素上添加点击事件，而在子元素上点击时不触发？不能在每一个子元素上阻止事件冒泡吧

div.onclick = function(ev){
    if(ev.target!=this) return;
    else {
        ...
    }
}
####


var sum = function (n) {
    if (1 == n) {
        return 1
    } else {
        return n + arguments.callee(n - 1);
        // 6 + 5 + 4 + 3 + 2 + 1  类似于递归调用
    }
}
console.log(sum(6));

Javascrip每个函数都会有一个Arguments对象实例arguments，它引用着函数的实参，
可以用数组下标的方式"[]"引用arguments的元素。arguments.length为函数实参个数，
arguments.callee引用函数自身。

####


判断一个值是否存在数组中
array.includes(ele)
return Boolean

####

判断类型
typeof a

typeof event === 'undefined' // 判断是否定义


##

参数继承

var fn = function(cs) {
    var canshu = {
        name: 'abc',
        age: 19
    }

    for (const key in cs) {
        canshu[key] = cs[key]
    }
    console.log(canshu)
}

fn({name: 'xx', sex: '男'})


###
// 路由地址发生改变时执行该函数
// index.html#safds   监听#后面的内容发生改变时执行以下函数

window.onhashchange = function() {
    console.log(location.hash)
}



###
form 表单提交-序列化
$('form').serializeArray()
$('form').serialize()

##

1.replaceWith()
使用括号内的内容替换所选择的内容。
$("#div").replaceWith("<div id="div2">div2</div>");
使用方法如上，将ID为div的元素替换为ID为div2的DIV元素。

2.replaceAll()
将选择的内容替换到括号内的选择器。
$("<div>替换后的内容</div>").replaceAll("p");

##

mouse_ele.mouseleave(function (event) {
    var e = window.event || event // 利用传参兼容火狐
    var target = e.target ? e.target : e.srcElement; // 兼容所有浏览器

    if (target === icon_div || target === icon_div2) {
        return false // 兼容谷歌浏览器
    } else {
        next.css('display', 'none')
        prev.css('display', 'none')
        timer = setInterval(function () {
            next.trigger('click')
        }, 2000)
    }
})

##

获取程序执行时间,用于判断性能(优化)

console.time('global')
这里放需要执行的代码块
console.timeEnd('global')

###

正则 转义 html 代码

var HtmlUtil = {
        // 1.用浏览器内部转换器实现html转码
        htmlEncode:function (html){
            //1.首先动态创建一个容器标签元素，如DIV
            var temp = document.createElement ("div");
            //2.然后将要转换的字符串设置为这个元素的innerText(ie支持)或者textContent(火狐，google支持)
            (temp.textContent != undefined ) ? (temp.textContent = html) : (temp.innerText = html);
            //3.最后返回这个元素的innerHTML，即得到经过HTML编码转换的字符串了
            var output = temp.innerHTML;
            temp = null;
            return output;
        },
        // 2.用浏览器内部转换器实现html解码
        htmlDecode:function (text){
            //1.首先动态创建一个容器标签元素，如DIV
            var temp = document.createElement("div");
            //2.然后将要转换的字符串设置为这个元素的innerHTML(ie，火狐，google都支持)
            temp.innerHTML = text;
            //3.最后返回这个元素的innerText(ie支持)或者textContent(火狐，google支持)，即得到经过HTML解码的字符串了。
            var output = temp.innerText || temp.textContent;
            temp = null;
            return output;
        },
        // 3.用正则表达式实现html转码
        htmlEncodeByRegExp:function (str){  
             var s = "";
             if(str.length == 0) return "";
             s = str.replace(/&/g,"&amp;");
             s = s.replace(/</g,"&lt;");
             s = s.replace(/>/g,"&gt;");
             s = s.replace(/ /g,"&nbsp;");
             s = s.replace(/\'/g,"&#39;");
             s = s.replace(/\"/g,"&quot;");
             return s;  
       },
       // 4.用正则表达式实现html解码
       htmlDecodeByRegExp:function (str){  
             var s = "";
             if(str.length == 0) return "";
             s = str.replace(/&amp;/g,"&");
             s = s.replace(/&lt;/g,"<");
             s = s.replace(/&gt;/g,">");
             s = s.replace(/&nbsp;/g," ");
             s = s.replace(/&#39;/g,"\'");
             s = s.replace(/&quot;/g,"\"");
             return s;  
       }
    }   

###

跳出循环
break 语句会使运行的程序立刻退出包含在最内层的循环或者退出一个switch语句。
continue 语句和break语句相似。所不同的是，它不是退出一个循环，而是开始循环的一次新迭代。
return 语句就是用于指定函数返回的值。return语句只能出现在函数体内，出现在代码中的其他任何地方都会造成语法错误！

###
判断一个对象是否为空
function isEmptyObject(obj) {   
　　for (var key in obj){
　　　　return false;//返回false，不为空对象
　　}　　
　　return true;//返回true，为空对象
}


###

&ensp;或&#8194; //半角
&emsp;或&#8195; //全角
&nbsp;或&#160;

##

jq 监听值改变

$('.change').on('keyup paset', function() { // jq 监听值改变
    // 可以判断 .change 元素都有值时，开启下一部操作
    var templateData = null
    var targetEle = $('.btn>.confirm')
    $('.change').each(function(key, ele) {
        var value = $(ele).val()
        templateData = value.trim().length > 0 ? true : false
    })
    if (templateData) {
        targetEle.css('opacity', 1)
        targetEle.removeAttr('disabled')
    } else {
        targetEle.css('opacity', 0.5)
        targetEle.attr('disabled', 'disabled')
    }
})

##

获取对象的长度
var obj = {'name' : 'Tom' , 'sex' : 'male' , 'age' : '14'};
var length = Object.keys(obj).length;

##

获取元素名(标签名)
var name = document.getElementById("p").tagName;
$("#p").get(0).tagName;
$("#p")[0].tagName;
$("#p").prop("tagName");
$("#p").prop("nodeName");

##

artTemplate

内容不转义

template.config("escape", false)

'user_head_portrait\upload_6d97bb4befc2be3138c34b2b41fd3476.gif'

'user_head_portrait\\upload_6d97bb4befc2be3138c34b2b41fd3476.gif'.replace(/[\\]/g, '//')

'user_head_portrait//upload_6d97bb4befc2be3138c34b2b41fd3476.gif'

###

根据 pid === id  进行无限极分类

数据结构转换

方法一，经过测试，性能最佳。

data = [
  {"id":1,"classname":"HTML","pid":0},
  {"id":9,"classname":"方法","pid":3},
  {"id":2,"classname":"CSS","pid":0},
  {"id":13,"classname":"第四层级","pid":12},
  {"id":3,"classname":"javaScript","pid":0},
  {"id":12,"classname":"第三层级","pid":7},
  {"id":4,"classname":"undefined","pid":0},
  {"id":8,"classname":"试一下","pid":2},
  {"id":5,"classname":"undefined","pid":0},
  {"id":6,"classname":"添加的第一个分类","pid":0},
  {"id":11,"classname":"让人","pid":0},
  {"id":7,"classname":"第二层","pid":1},
  {"id":10,"classname":"仍然","pid":4}
]


[
  {
    "id":1,
    "classname":"HTML",
    "pid":0,
    "children": [
      {
        "id":7,
        "classname":"第二层",
        "pid":1,
        "children": [
          {
            "id":12,
            "classname":"第三层级",
            "pid":7,
            "children": [
              {"id":13,"classname":"第四层级","pid":12}
            ]
          }
        ]
      }
    ]
  },
  {
    "id":2,
    "classname":"CSS",
    "pid":0,
    "children": [
      {"id":8,"classname":"试一下","pid":2}
    ]
  },
  {
    "id":3,
    "classname":"javaScript",
    "pid":0,
    "children": [
      {"id":9,"classname":"方法","pid":3}
    ]
  },
  {
    "id":4,
    "classname":"undefined",
    "pid":0,
    "children": [
      {"id":10,"classname":"仍然","pid":4}
    ]
  },
  {"id":5,"classname":"undefined","pid":0},
  {"id":6,"classname":"添加的第一个分类","pid":0},
  {"id":11,"classname":"让人","pid":0}
]


方法一: (自己写的)
let finalData = [] // 存储最终数据
for (let i = 0; i < data.length; i++) {
  let value = data[i]
  if (value.pid === 0) { // 判断是否是第一层级
    finalData.push(value) // 将第一层级的数追加到 finalData 中
    data.splice(i, 1) // 去除数据源中的第一次层级
    i-- // 因为对象是引用传递， splice 后，数据源 data 已经更改，所以必须 i--
  }
}

function InfinitePoleClassification(finalData) {
  let childrenArr = [] // 子数组
  for (let i = 0; i < finalData.length; i++) {
    for (let j = 0; j < data.length; j++) {
      let value = data[j]
      if (finalData[i].id === value.pid) { // 找到对应的子级
        finalData[i].children = [] // 声明子层级是数组
        childrenArr.push(value) // 存储子数组
        finalData[i].children.push(value) // 将对应的子级放入最终数据中
        data.splice(j, 1)
        j--
      }
    }
  }

  if (data.length > 0) {
    InfinitePoleClassification(childrenArr)
  }

  return finalData
}

console.log(InfinitePoleClassification(finalData))

方法二: (自己写的)
var Fn = function(data) {
  for (var i = 0; i < data.length; i++) {
    if (data[i].pid !== 0) {
      for (var j = 0; j < data.length; j++) {
        if (data[i].pid === data[j].id) {
          data[j].children = []
          data[j].children.push(data[i])
        }
      }
    }
  }

  for (var i = 0; i < data.length; i++) {
    if (data[i].pid !== 0) {
      data.splice(i, 1)
      i--
    }
  }

  return data
}

Fn(data)

方法三: (百度的)

function array2tree (arr) {
  var top = [], arrObj = {};

  arr.forEach(function (item) {
      var id = item.id, parentId = item.pid, parent, own;
      if (parentId === 0) {
          top.push(item);
      }

      item.children = [];
      own = arrObj[id];
      if (own) {
          Object.keys(own).forEach(function (key) {
              item[key] = own[key];
          });
      }
      arrObj[id] = item;

      parent = arrObj[parentId];
      if (!parent) {
          parent = {'id': parentId, 'children': []};
          arrObj[parentId] = parent;
      }
      parent.children.push(item);

  });
  return top;
}
array2tree(data)


//  对象强制值传递(引用传递,对象拷贝)

var a = {'name': 'wangying'};
var b = Object.assign({}, a); // 对象
// var b = Object.assign([], a); // 数组
b.name = 'yingwang';
console.log(a.name);

var b = Object.assign({}, a, c); // 可做继承,后面的会继承替换前面的
Object.assign([1,2,3],[4,5]); // 已下标作为属性 // [4,5,3]



// 如何区分深拷贝与浅拷贝，简单点来说，就是假设B复制了A，当修改A时，看B是否会发生变化，如果B也跟着变了，说明这是浅拷贝，拿人手短，如果B没变，那就是深拷贝，自食其力。


window.onblur = function(){  
  // 切换出页面执行事件  
debugger;
   alert(1111);
}

window.onfocus = function(){  
   // 切换到页面执行事件  
debugger;
   alert(222);
}


###

document.addEventListener('visibilitychange',function(){ // 浏览器切换事件
    if(document.visibilityState=='hidden') { // 状态判断
        //normal_title=document.title;
        document.title = '标题二';
    }else {
        document.title = '标题一';
    }
});

## 获取ip
// compatibility for firefox and chrome
let PeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection
var pc = new PeerConnection({
  iceServers: []
})
var noop = function() {}
var localIPs = {}
var ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g

function iterateIP(ip) {
  if (!localIPs[ip]) sessionStorage.setItem('ip', ip)
  localIPs[ip] = true
}

// create a bogus data channel
pc.createDataChannel('')

// create offer and set local description
pc.createOffer().then(function(sdp) {
  sdp.sdp.split('\n').forEach(function(line) {
    if (line.indexOf('candidate') < 0) return
    line.match(ipRegex).forEach(iterateIP)
  })

  pc.setLocalDescription(sdp, noop, noop)
}).catch(function(reason) {
  // An error occurred, so handle the failure to connect
})

// sten for candidate events
pc.onicecandidate = function(ice) {
  if (!ice || !ice.candidate || !ice.candidate.candidate || !ice.candidate.candidate.match(ipRegex)) return
  ice.candidate.candidate.match(ipRegex).forEach(iterateIP)
}

##  全局变量

for(var p in window){ // 使用它查看构造函数名称 p
  console.log(p+'----'+typeof window[p]+'---'+window[p]);

---

## 标签层次不确定 js 怎么取标签中的内容
//替换掉所有的 html标签，得到Html标签中的内容

str.replace(/<\/?.+?>/g,"");


## 关于 return

`
return '字符串' // 报错
return 1 // 报错
return 只能放在方法中
只要是 return 那么在“此方法中”就不会执行下面的代码了
`

## 隐式类型转换

0 || null -> false


## 前端分页方法

```js

handleCurrentChange() {
  let data = Object.assign([], this.dataList)
  let start = (this.currentPage - 1) * this.pageSize
  let end = this.currentPage * this.pageSize
  this.ContractList = data.slice(start, end)
}

// handleCurrentChange 触发分页时执行的方法
// ContractList  渲染时的数据
// dataList 服务器返回的数据，定义一个值存储起来，分页时不改变它的值

```

###

返回上一步

javascript:history.go(-1)

###

获取元素信息(元素位置)

ele.getBoundingClientRect()

###

---

#### 通配符选中器

```js

$("input[name^='code']");//name属性以code开始的所有input标签
$("input[name$='code']");//name属性以code结束的所有input标签
$("input[name*='code']");//name属性包含code的所有input标签

```

```js

Math.pow(3,2);   // 3的平方

Math.sqrt(9);   9 // 开方，返回结果3

```

## 运算符当作参数传递

```js

eval(string) // 必需。要计算的字符串，其中含有要计算的 JavaScript 表达式或要执行的语句。

eval("2+2") // 4

```

#### 给数字添加一个分割符

```js

filters: {
    number(value) {
        var tempArr = []
        var val = String(value)
        var myEach = function(v, l) {
            var length = v.length
            if(length > l) {
                let str = v.substr(length - l)
                let surplus = v.substr(0, length - l)
                tempArr.unshift(str)
                if(surplus.length > l) {
                    myEach(surplus, l)
                } else {
                    tempArr.unshift(surplus)
                }
            } else {
                return v
            }
            return tempArr.join(',')
        }
        return myEach(val, 3)
    }
}

var strSplicing = function(value, limit) {
    var tempArr = []
    var val = String(value)
    var myEach = function(v, l) {
        var length = v.length
        if(length > l) {
            let str = v.substr(length - l)
            let surplus = v.substr(0, length - l)
            tempArr.unshift(str)
            if(surplus.length > l) {
                myEach(surplus, l)
            } else {
                tempArr.unshift(surplus)
            }
        } else {
            return v
        }
        return tempArr.join(',')
    }
   return myEach(val, limit)
}
console.log(strSplicing(12345678, 3))

```

## for-of 获取 key

- 对象

```js

const object1 = {
  a: 'somestring',
  b: 42
};

for (let [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}

// "a: somestring"
// "b: 42"

```

- 数组

```js

let arr = ['a','b','c']
for(let [key, value] of arr.entries()) { 
	console.log(key, value)
}

// 0 "a"
// 1 "b"
// 2 "c"

```

---

### 取数组中的值或者key,组成新的数组

```js

Object.values(arr)
Object.keys(arr)

```


### 页面置底
```js
// 让页面置底
this.$nextTick(() => {
  this.$refs.show.scrollIntoView()
})
```

### 打印或取预览html

```js
const print = document.querySelector('#printing > .content')
document.body.innerHTML = print.innerHTML
window.print()
window.location.reload()
```
```scss
@media print {
  // 修改打印时 css 的样式
}
```
