# SASS 内置函数

整理常用的一些技巧

## 字符串

### unquote  删除字符串引号
```
$width: 100;

div {
    width: $width + "px";  // 输出 width: "100px:;
    width: unquote($width + "px"); // 输出 width: 100px;
}
```

### quote 给内容添加引号

```
与 unquote 功能相反，会自动判断内容在输出时没有引号，会加上引号在输出，有引号则不会重复添加
```

### To-upper-cas  将字母转换为小写字母

### To-lower-cas  将字母转换为大写字母

## 数字

### percentage 将整数转换为百分比

```
percentage(0.1);  //  输出 10%
percentage(1);    //  输出 100%
percentage(10);   //  输出 1000%
```

### round 四舍五入
### ceil 向上取整
### floor 向下取整
### abs 绝对值
### min 找出传入参数中的最小值
### max 找出传入参数中的最大值
### random 获取随机数

## 列表函数

### length 获取列表长度

```
$list: 1, 2, 3; // 定义一个列表对象
length($list); // 返回 3
```

### nth 获取列表中指定的数据

```
$list: "a", "b", "c";  // 定义一个列表对象
nth($list, 2); // 获取列表中顺序为第二的数据  返回 b
```
### join 多个列表合并为一个新的列表

```
$list1: 1, 2, 3;
$list2: 4, 5, 6;
$list3: 7, 8, 9;
join($list1, $list2, $list3);  // 返回 1, 2, 3, 4, 5, 6, 7, 8, 9
```

### append  动态的对列表添加元素
```
$list: 1, 2, 3;
append($list, 4);
```
### index  查找元素在列表中的位置

```
$list: "a", "b", "c";
index($list, "b"); // 返回 2
```

## 高级函数

### type-of  返回对象的类型
```
type-of(100px);    // 返回 number
type-of(100);      // 返回 number
type-of("50");     // 返回 string
type-of(red);      // 返回 color
type-of(#000);     // 返回 color
type-of(rgb(0, 0, 0));       // 返回 color
type-of(rgb(0, 0, 0, 0.5));  // 返回 color
```

### unit  返回对象的单位

```
unit(100px);   // 返回 px
unit(100%);    // 返回 %
unit(100rem);  // 返回 rem
unit(100em);   // 返回 em
```

### unitless 判断对象是否有单位
```
unitless(100);    // 返回 true
unitless(100px);  // 返回 false
```

### List  列表

```
$list: 1, 2, 3;  
使用 javascript 表达为
var list = [1, 2, 3];
```
```
$list: ("a", "b", "c");  
使用 javascript 表达为
var list = ["a", "b", "c"];
```
```
$list: (1, 2, 3), ("a", "b", "c");  
使用 javascript 表达为
var list = [
   [1, 2, 3], 
   ["a", "b", "c"]
];
```
### Map  对象
```
$title:  h1: 14px,  h2: 20px,  h3: 28px,  h4: 35px,  h5: 40px
使用 javascript 表达为
var title = {
    h1: '14px',
    h2: '20px',
    h3: '28px',
    h4: '35px',
    h5: '40px',
}
```

### map-get  根据指定的 key 获取Map中的数据
```
如上： 获取 h2 的数据
map-get($title, "h2"); // 返回 20px
```

### map-keys  返回Map 对象中的所有 key
```
如上  map-keys($title);  // 返回 h1, h2, h3, h4, h5  以一个列表返回
```

### map-values 返回Map 对象中的所有 value

### map-has-key  返回 Map 对象中的 key 是否有值
```
如上，使用 $title 做案例
map-has-key($title, "h2"); // 返回 true
map-has-key($title, "h10"); // 返回 false
```
## @each 循环

```
$index: 1;
$hsize: 14px, 20px, 30px, 40px, 50px;
@each $item in $hsize {
    h#{$index} {
        font-size: $item;
        $index: $index + 1;
    }
}
输出如下
h1 { font-size: 14px; }
h2 { font-size: 20px; }
h3 { font-size: 30px; }
h4 { font-size: 40px; }
h5 { font-size: 50px; }
```

### @for 循环
```
$hsize: 14px, 20px, 30px, 40px, 50px;
@for $index from 1 through length($hsize) {
  h#{$index} {
      font-size: nth($hsize, $i);
  }
}
输出如下
h1 { font-size: 14px; }
h2 { font-size: 20px; }
h3 { font-size: 30px; }
h4 { font-size: 40px; }
h5 { font-size: 50px; }
```

## 颜色

### RGB
```
将红绿蓝三色值转换为 16 进制色值
color: rgb(153, 153, 153);  返回 color: #999;
```
### RGBA
16 进制色值转换为 RGB 色值, 同时设置透明度
color: rgb(#999, 0.5);  返回 color: rgb(153, 153, 153, 0.5);

### opacify 增加不透明度
```
$color: #999;
// 对 #999999 设置 50% 的透明度
$rgba: rgba(#999, 0.5);  // 返回  rgba(153, 153, 153, 0.5)
// 增加 20% 的不透明
color: opacify($rgba, 0.2); // 返回 color: rgb(153, 153, 153, 0.7)
```

### transparentize 减少透明度
```
同 opacify 理论，效果是反方向
```

## 自定义函数
```
@function fun-name(){
    @return "返回内容";
}
```