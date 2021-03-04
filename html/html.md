C/S  client/server 客户端/服务器


初始化文件css
margin: 0;

ul>li*20>img[src=images/$.jpg]   sublime快捷方式


阴影:
box-shadow: 0 0 20px skyblue;

box-shadow: -2px 0 3px -1px green,
            0 -2px 3px -1px blue,
            0 2px 3px -1px red,
            2px 0 3px -1px yellow;

-3px -1px 3px -1px #d2d2d2, 1px 1px 3px -1px transparent, -4px 1px 3px -1px transparent, 2px -2px 3px -1px #a2a2a2

-3px -1px 5px -2px #b9b9b9, 0 -2px 3px -1px #ffffff, 0 2px 3px -1px transparent, 2px -2px 3px -1px #a0a0a0

box-shadow:20px 0px 30px 10px #abcdef  inset;/zz/
/*这6个值分别是：left值 、top值、透明度、阴影外延宽度、颜色、向里凹陷（选填，默认为外延）*/

h-shadow    必需。水平阴影的位置。允许负值。    测试
v-shadow    必需。垂直阴影的位置。允许负值。    测试
blur    可选。模糊距离。    测试
spread  可选。阴影的尺寸。   测试
color   可选。阴影的颜色。请参阅 CSS 颜色值。   测试
inset   可选。将外部阴影 (outset) 改为内部阴影。

灰度:
    filter: grayscale(100%);

虚化||模糊：
    filter: blur(15px);

---------------------------过度:(动画效果)  一般与hover配合使用--------------------
需注意: :hover 后面只能写一个类名

all:默认
transition: all 1s 1s linear;   //一秒过度时间,延迟1s才开始过度(复合类型)
后面的是延迟时间

transition:margin-left: ;  //可以这麽写

transition-property:width; //设置要参与过度的属性

transition-duration:1s; //设置过度效果要完成的时间

transition-timing-function:ease; //慢快慢(默认值)

transition-timing-function:linear; //匀速

transition-timing-function:ease-in; //快慢快

transition-timing-function:easeOut;

transition-timing-function:easeInOut;

transition-delay:1s; //设置延迟执行时间


要实现宽变化完成后再执行下面的变化时,需要使用延迟
transition:width 1s linear,
			height 1s 1s linear,
			background-color 1s 2s liner;

总结：
	1. 属性联写过程中，可以不用设置all
	2. 没有顺序的限制
    3. 执行过渡效果的时候，必须要有用户的动作（比如：hover 或者 点击等动作）
    4. transition可以放到元素的开始状态（默认效果中）也可以放到元素的结束状态中


鼠标放上去凸显出现(带有立体效果)
.one{
    width: 200px;
    height: 300px;
    margin-top: 180px;
    background-color: pink;
    transition: all  0.5s 0s linear;
}

.one:hover{
    margin-top: 150px;
    box-shadow: 1px 3px 6px black;
}



--------------------------2D转换位移:translate----------------

transform:translate(400px,200px);  //x 和 y

如果只设置一个值,那么代表该元素在水平方向移动,垂直方向为0
移动的距离是相对于自己的(原来的位置)

总结:
通过2D转换的位移,可以实现定位的盒子居中

例子:----------------居中
子绝父相
给自己设置:
left:50%;
transform:translate(-50%);

top: 0;
left: 0;
right: 0;
bottom: 0;
margin: auto;
position: absolute;


------------------------------旋转-----------------------------
设置旋转中心点:transform-origin: left|right|top|bottom|center
设置具体值改变旋转中心的位置:transform-origin:150px 150px; // [left, top] || 默认为元素的中心旋转
transform:rotate(30deg);    //deg角度,只能用这个单位


注意: i 直接设置旋转不生效,是以为旋转不能设置给没有定位的行内元素,相对定位也不行,只能设置绝对定位||固定定位||块级元素||行内块元素

.box {
    width: 60px;
    height: 60px;
    background-color: red;
    transition: all 1s linear;
}
.box:hover{
    transform: rotate(360deg);
}


transform:scale(0.5);-------------------设置缩放
如果scale中设置了两个值,第一个值代表水平方向的扩大或缩小,第二个值代表垂直方向扩大或缩小
如果scale中设置了一个值,那么代表水平和垂直同时放大或缩小
如果希望放大的效果,那么设置的值要大于1
如果希望缩小的效果,那么设置的是大于0小于1
不能为负值



----------------------旋转与位移--------------------------
如果要同时设置旋转和位移:推荐:先位移再旋转
因为如果先旋转再位移,已经改变原来坐标轴的方向了,他是绕一圈才到目标位置
transform:translate(400px) rotate(360deg);  //注意位置不能交换

下面这种写法是错误的:
transform:translate(400px);
transform:rotate(360deg);

如果同时设置位移,旋转,缩放,那么不能单独设置,可以用复合写法




------------------------------3D动画---------------------------
tr

透视:
perspective  不是一个必须要设置的属性,如果希望看到立体的效果:
只要使用transform属性元素的父容器


transparent                 透明的颜色

vertical-align: middle;     垂直居中



-------------------------html框架--------------------------
frameset
frame   单标签
rows    行
cols    列
src     链接页面
*       剩下的全部
frameborder     边框
scrolling="no"  不允许拖动框架(没有滚动条)
noresize="noresize" 禁止重新设置大小
target = "name的名称"  对应着 框架中的name值

-----------------------------------------------------------
rules="all";    改变表格边宽线,让边框线变细


----------------------常用属性--------------------
border-radius   设置边框角度(圆角)


----------------------盒子-图片问题--------------------
改变盒子宽高使其里面的图片等比例缩放
只需要给图片设置width:100%;



---------------------实现动态的修改动态网站---------------
自动重新加载
http://www.jsjtt.com/webkaifa/HTML/41.html


<meta http-equiv="Cache-Control" content="max-age=5">

5:为秒值



--------------------------------限制输入长度---------
maxlength="4"

4:代表的是4位数

border-collapse: collapse; //合并边框线


text-decoration: none;   //去除a标签的下划线


---------------------------border边框--------------------------

dotted //点线边框
dashed //虚线边框
double //两个边框

div{
border-top-style:dotted;
    border-right-style:solid;
    border-bottom-style:dotted;
    border-left-style:solid; //分别定义某个边框
}

border: 5px groove #98bf21;padding:3px //groove: 定义3D沟槽边框。效果取决于边框的颜色值

border: 5px ridge #98bf21;padding:3px  //ridge: 定义3D脊边框。效果取决于边框的颜色值

border: 5px inset #98bf21;padding:3px  //inset:定义一个3D的嵌入边框。效果取决于边框的颜色值

border: 5px outset #98bf21;padding:3px //outset: 定义一个3D突出边框。 效果取决于边框的颜色值

li:nth-child(odd) //奇数
li:nth-child(even) //偶数


-----------------------------border-radius 圆角边框--------------------------------------

border-radius:20px;
border: 2px dotted red;



checkbox //复选框
<input type="checkbox" checked> //无属性值




inupt (表单对齐)对齐处理 //在文字中间加上 全角空格(相当于一个汉字)


改变表格边框线 rules="all"; 让边框线变细



--------------------------------------------------2018-3-6---------------------------------

第二天

<meta charset="utf-8">



<meta name="keywords" content="设置网页关键字"> 给搜索引擎用的（网站推广）



<meta name="description" content="描述信息"> 网站推广（百度搜索京东看到京东的描述信息）



<meta http-equiv="refresh" content="3；http://www.baidu.com">网页重定向

打开一个网站，提示网站不存在，几秒后跳转到另一个网站（防止客户流失）3代表3秒后跳转到新页面



<link rel="icon" href="favivon.ico">设置网页图标

，最好将这个小图标放在根目录下，最好用这个图片格式（优化性）放在head中



无序列表

<ul></li></li></ul>



有序列表

<ol type="A"><li></li></ol> 列表前有顺序ABCD



自定义列表

<dl>

<dt>标题</dt>只能包含行内元素（span a）

<dd>项1</dd>

</dl>一般用于网页结尾处



<table rules="all" border="1表格线" cellspacing="设置td与td之间的距离，默认值为:2" cellpadding="设置内容与td左边的距离" align="设置对齐方式center right" height="">表格

align在tr中设置和在tabel不一样，一个应用于整个表格，一个应用于内容

##
表格行间距
<table style="border-collapse:separate; border-spacing:10px;">
    <tr></tr>
</table>

#
去除td的行间距
<table cellspacing="0">

#
css 去除td的行间距
table {
    border-collapse:collapse;
}

##

bgcolor 背景颜色

texe-align:left center right 内容居中显示，该元素只能给块级元素设置。



<th>表头<th> th代替td 只能有一行，语义问题



<caption>设置标题 放在表格里的</caption>



表格结构

<thead></thead>

<tbody></tbody>

<tfoot></tfoot>





<td colspan="2">横向合并单元格,把多余的去掉</td>

<td rowspan="3">纵向合并单元格



表单（收集信息的，例如注册账号）

<form action="1.php" method="get或post">（表单域）

用户名:<input type="text" name="username">

<br>

<br>

密码:<input type="password" name="pwd">

<br>

<br>

<input type="submit">（提交数据的按钮）

</form>



<form>

账号:

<input type="text" maxlength="最大长度" readonly="设置控件为只读" disabled禁止输入（和前一个效果一样，推荐用前面的) value="设置默认值（可以看到的框里提示）name="username（给后台确认是密码，取名字，设置控件名称）id="控件编号">



密码:

<input type="password">



性别:

<input type="radio">男

<input type="radio">女



</form>



action:设置后台处理数据的后台程序

method:提交数据给后台程序的方式

get:不安全，可以看到密码（数据），长度有限制

post:通过后台提交数据（提交方式）



密码输入框

<input type="password">



单选控件

性别:

<input type="radio" name="相同的name才能单选" checked（默认选中项）>男

<input type="radio" name="相同的name才能单选">女



下拉列表

<select multiple="multiple（实现多选，很少用，按ctr键选择）">

<option>河北</option>

<option>河北</option>

<option>河北</option>

<option selected（设置默认选中项）>河北</option>

</select>

其他写法

<select>

<optgroup label="河北省">

<option>张家界</option>

</optgroup>

</select>提示所属地区



多选控件

爱好:

<input type="checkbox" checked（设置默认选中项)>看书



资源上传控件

<input type="file">（图片上传之类的)


上传图片需要在from表单中添加 multipart/form-data
在使用包含文件上传控件的表单时，必须使用该值。



文本域:<textarea></textarea>
resize: no; //禁止改变页面尺寸


隐藏控件

<input type="hidden" valu="1" name="">与数据库有关



提交按钮

<input type="submit">提交数据

<input type="button">普通按钮



重置按钮

<input type="reset">



图片提交按钮

<input type="image" src="1.jpg">



分组控件和标题

<form>

<fieldset>

<legend>人员注册信息</legend>

</fieldset>3

</form>







第一天



<strong>字体加粗</strong>

<em>斜体</em>

text-decoration:underline; 下划线

text-decoration:overline; 顶划线

text-decoration:line-through; 删除线

text-decoration:blink; 闪烁

但是闪烁在IE浏览器中并不支持这个效果，所以建议不要使用。



<a href=“#maodian”>锚点链接</a>

<p id=“maodian”>锚点链接</p>



<img src="地址" title="图片还没出来时看到的名字" alt="给搜索引擎用的">



ctr+shfit+d 快速复制

ctr+l 选中

table+tab

table[bordet=1（边框） cellspacing=0（td与td的距离） 属性]>tr*7>td*7+tab


border-radius设置圆形边框


在浏览器中，选中边框大小，按↑或↓可以调节大小。


北京第一天

如何将一张logo图等比例缩放的，具体：先给a标签设置背景图片，将一张500*500的logo图片放入到这个a标签中，再让这个500*500的a标签等比例缩放到300*300的盒子中。（不能用修图软件将图片缩小）实现logo能在300*300的盒子中完全显示先设置
font-size:contain;

服务器 services.msc


第六天

    浮动(为了解决块级元素在同一行显示)

    float:left;|right

    特点:

    浮动的元素不占位置(脱标)

    浮动可以让块级元素在一行上显示

    可以进行模式转换(类似于display)行内元素"行内块元素"



    作用:

    图片文字环绕效果(包裹性)文字的标签被压住了，但是文字没被压住。





    清除浮动:

    1. 在浮动标签后添加一个空标签

    .clear{

    clear:both; (清除左右浮动)

    }

    浮动的标签

    <div class="clear"></div>



    2.给父元素设置overflow:hidden;

    overflow:hidden;可以将超出父元素的部分进行隐藏。

    visible 默认值


    3. 使用伪元素清除浮动(推荐)

    .clearfix::after{

    content:" ";

    height:0;

    line-height:0;

    display:block;

    clear:both;

    visibility:hidden;

    }

    .clearfix::after{

    zoom:1; (兼容IE)

    }



    清除浮动的时机:

    父容器没有高度(height=0 也不行)

    父容器中所有的子元素都设置了浮动



    overflow: visible; 默认可将超出部分显示

    overflow: hidden; 将超出标签部分内容隐藏

    overflow: scroll; 设置滚动条(不超出时也有滚动条)

    overflow: auto; 自适应(超出时才有滚动条)

    ## 隐藏滚动条还可以滚动

    ```css

    .box::-webkit-scrollbar {
        display: none;
    }

    ```



第四天

text-indent:2em; 首行缩进2个字符

line-height:20px; 行高



设置鼠标样式

cursor:pointer; 鼠标为小手模式



块级元素独占一行显示

块级元素的默认宽度与其父元素的宽度一致

块级元素可以设置宽度和高度



行内元素在一行上显示(多个行内元素)

行内元素不能设置宽度和高度



行内块元素

元素可以在一行上显示

元素可以设置宽度和高度



转换元素

display:block; 转化为块级元素



display:inline-block; 转化为行内块元素



转化为行内元素

display:inline;



继承性:在默认情况下，如果子元素没有设置样式，那么该子元素会受到父元素的样式影响。

注意:

1.css继承性只能发生在标签嵌套结构中(可以在浏览器中查看)

2.宽度和高度不能被继承(但是宽度会被影响)

由于html元素宽度不具有继承特性，块级元素(block)的宽度会占据一整行，所以看似继承了，实则不是。
让一个元素的宽度根据内容撑开，只要设置其display不为块级元素，不设置宽度就可以了

可继承的属性:


4.行高(line-height)可以被继承



################################# 可继承 - start - ################################# -->

1.
2. text-aling   对齐方式
3. font         属性相关的属性都可以被继承 如: font-color font-size
4. line-height  行高

################################# 可继承 - end - ################################# <--



############################### 不能继承 - start - ############################### -->

1. height 高
2. width  宽

############################### 不能继承 - end - ############################### <--


层叠性:在权重相同的情况下，同一个标签中样式发生冲突，后面定义样式会将前面定义的样式给覆盖掉。

注意:

样式与定义的顺序有关，与调用的顺序无关


.testClass{
color:blue !important;
}


优先级(权重):

继承的值<标签选择器<类选择器<ID选择器<行内选择器<!important

继承的权重为0

权重可以叠加

比较权重，先判断指向那个标签，注意继承性



a:visited{属性:值;} 设置a标签访问过后的样式

注意:

1.:visited{}该伪类中只能设置与颜色相关的属性

2.该伪类具有缓存特性



重点:

a:hover{属性:值;} 设置鼠标悬停到a标签的样式 (可以添加其他标签div......)

a:hover{

font-size:50px;

color:blue;

}



text-decoration:none; 去掉下划线

text-decoration:underline; 显示下划线



a:active{属性:值;} 设置a标签激活状态下的样式(鼠标左键点击时显示的样式)



总结:

1.:hover{}该伪类可以单独使用

2.如果以上伪类都要设置需要按照顺序设置LVHA



目标伪类

:target{属性:值;}

注意:

该伪类要配合锚点链接使用 (可以设置背景颜色，点击后调到锚点处，令其背景颜色改变)



空伪类

:empty{属性:值;}


input[type="text"]  --实用

#
[attr^=val]  找到属性为attr且值为val开头的
li[midd^="abc"]
<li midd="abc"></li>
#

[attr$=val]  找到属性为attr且值为val结尾的

#

[attr*=val]  找到属性为attr且值为包含val的

#

排除伪类

div:not(.two){
    width:200px;
    height:200px;
    background-color:red;
}


<div class="one two">23588</div>
<div class="one">只改变他的属性时，用排除伪类</div>

排除多个类

div:not(.w-auto):not(.h-auto) 


background-image:url(2.png) 设置背景图片



background-repeat:no-repeat; 设置背景图片不平铺



bottom 底部对齐(实现一张图片上下部分转换，鼠标放上去看到另一张图片的效果)

background-position:right top; 右上角 设置背景图片位置

注意:当背景图片位置设置一个值时，另一个值默认为:center





background属性联写

1.该属性联写中没有个数限制

2.该属性中没有顺序的限制





第七天

静态定位，不能移动位置

position: static; 默认



绝对定位:

position: absolute; 1.当父元素没有设置除静态定位以外的定位时，子元素以页面(body)为参照物移动



2.当父元素设置了除静态定位以外的定位时，子元素以父元素为参照物移动



3.绝对定位的元素脱标不占位置



4.绝对定位可以实现模式转换



相对定位:

position:relative;

特点:

1.相对定位元素是以元素原来的位置为参照

2.相对定位的元素占位置

3.不能实现模式转换



一般情况下要设置子元素绝对定位，父相对定位



固定定位:

position:fixed;

1.固定定位的元素始终是以body(浏览器)可视区域为参照物设置定位(始终都能看到)



2.固定定位的元素脱标不占位置



3.固定定位的元素可以实现模式转换



Z-index(重点)

定位元素的特点:

只有(除静态定位)定位的元素才有层级关系



通过z-index属性改变层级关系



层级关系特点:

当给一个元素设置了定位，那么该元素默认的层级z-index值是auto(个人认为是:"0")

当z-index值相同的情况下，那么最后的定位元素层次要高于前面的定位元素(后来居上)

当z-index值不同的情况下，那么z-index值越大该元素的层级越高。

如果元素的父元素设置了z-index值那么父元素的z-index值越大，那么该元素的层级关系越高



盒子居中:margin:0 auto; 标准流的盒子居中显示(只针对块级元素有效)



绝对定位的盒子居中显示: 重点

left:50%；父元素宽度一半

margin-left: - ; 元素自己宽度一半



段落中不能包含标题标签

段落标签中不能包含div

行内元素最好不要包含块级元素



网页布局规避脱标流:

网页布局优先考虑标准流

然后考虑使用浮动

最后使用定位

元素模式转换必须使用display





vertical-align属性介绍

text-align 水平对齐

vertical-align 垂直对齐

默认行内块元素(img,input),有默认的vertical-align属性值

vertical-align:baseline; 默认值 基线对齐

top 顶部

middle 中部对齐

bottom 底部对齐

也可以用display: block; 来设置对齐



css元素可见性

overflow:hidden; 将溢出部分隐藏

display:none; 元素隐藏(不占位置)

display:block; 显示元素

visibility:hidden; 元素隐藏(占位置)



logo内容移除

logo 一般推荐给a标签设置背景图片

logo 中a标签最好设置文字(给a标签设置text-index=-999px;)

color:transparent; 给字体设置透明颜色



精灵图:特殊的背景图片(一张包含很多背景图片的图片background-repeat: no-repeat 不平铺)

作用:可以减少请求的次数, 以及可以降低服务器处理压力



background-image: url(qq.png);

background-repeat: no-repeat;

background-position:-350px -100px; 横纵坐标xy,使用fw切片工具，使用打开方式，选中图片



用伪元素设置一个细线，在浏览器用看不到"代码"

.one:before {

content:" "

height:200px;

width:1px;

display:block;

background-color:pink;

添加绝对定位或者相对定位;

}


第三天

lat 对图片标签的描述，应用于搜索引擎

background-color 背景颜色

font-size 设置文字大小

red 红色



半透明效果:

background-color:rgba（0,0,0,0.1）; 可以写.1

只改变背景颜色透明度

opacity:.1 连文字透明度也改变了



（filter:Alpha（opacity=10）; /*IE8以及更早的浏览器，解决兼容问题*/）





标签命名不可以出现空格，下划线可以出现，但很老了，有的浏览器不认识，保险可以用中划线





类选择器

.自定义类名{属性:值；}



使用:通过.自定义类名 定义一个类样式

.p_red{

提交color:red;

}

.public{

font-size:30px;

}

标签通过class属性调用类样式

<p class="p_red"></p>





一个标签调用多种类名

<p class="p_red public"> 类名与类名之间用空格隔开就好 </p>



text-indent:2em; 设置首行缩进2个字符





id选择器

语法:#自定义名称{属性:值}



#p_color{color:red;}



¥<p id="p_color"></p>

id选择器只能定义一个属性名，不建议使用





通配符选择器

*{

color="red"

}

<p>hdbdj</p>



能把所有标签都选中



font属性

font-size 文字大小

font-weight:normal;

700 加粗

bold 加粗

400 正常显示



font-style:normal;正常

italic 斜体显示



font-family 设置文体字体，可以设置多个字体，中间用，(逗号)隔开



escape("宋体") 在浏览器console中输入然后回车，可看到对应编码，%是\ (最好用他)



line-height:设置文字行高



font联写

font:700 italic 30px(font-size)/20px(line-height) 微软雅黑；

属性联写中必须设置font-size和font-family

在属性联写中font-size必须放到font-family前面设置

行高必须放在字体后面用/隔开

italic 700必须放在最前面

如果font属性联写中的属性都要设置，那么按照图片中的属性去设置font:30px 宋体;



复合标签

标签指定式

div.one{

color:green;

}



<div class="one">你特过第二题你饿了</div>



后代选择器

1.后代选择器标签之间必须是嵌套关系

2.选择器与选择器之间必须用空格隔开

3.后代选择器只能选中后代元素

语法:

选择器 选择器{属性:值}



并集选择器

语法:选择器，选择器{属性:值;}

注意:1.选择器与选择器之间必须使用逗号隔开

2.选择器标签之间的结构可以是任意一种关系



子代选择器

语法

选择器与选择器之间用>隔开

---

兄弟选择器（弟选择器，找到它的下一个元素）

语法

选择器与选择器之间用 + 隔开

> 注意: html元素必须是紧挨着的

---
相邻兄弟选择器(弟弟们选择器) ~

选中相邻的下面所有元素


属性选择器

例子: 选中已icon开头的类名并且是i元素

i[class^="icon"] 

语法:

[属性名]{属性:值;}

[id][class]{ (既包含id选择器又包含class选择器的才显示绿色)

color:green;

}

</style>

</head>

<body>

<div class="one">123</div>

<div class="one" id="two">456</div>

<div class="one" name="username">789</div>



属性赋值

[属性=值]{}

[class=one]{}



[属性^=字母] {} 属性值首字母

[class^=o]{}



[属性$=字母]{} 属性值尾字母



[属性*=字母]{} 属性值包含字母，字母可以是多个

[class^=o]{}



// 伪元素
footer .one a:after {
    content: "";
    position: relative;
    height: 15px;
    width: 1px;
    margin: 0px 25px;
    top: 3px;
    display: inline-block;
    background-color: #ffffff;
}

// 选中after这个最后一个
footer .one a:nth-last-child(1):after {
    display: none;
}



伪类选择器

语法:

li:first-child 选中第一个li标签{属性:值}

li:last-child

nth-child(n) 第几个

nth-last-child(n) 倒数第几个

li代表选择器，n可以取值123456....

li:nth-child(odd) 改变奇数

li:nth-child(even) 改变偶数

#
选择多行有6列的li的第二列

li:nth-child(6n+2) 括号里是一个表达式(n从0到无限大0,1,2,3...)
注意: 变量n必须在公式前面,公式结果==正整数

li:nth-last-child(-n+3)  选中最后的三个li

选择前几个元素
/*【负方向范围】选择第1个到第6个 */
:nth-child(-n+6){}

从第几个开始选择
/*【正方向范围】选择从第6个开始的，直到最后  */
:nth-child(n+6){}

两者结合使用，可以限制选择某一个范围
/*【限制范围】选择第6个到第9个，取两者的交集【感谢小伙伴的纠正~】 */
:nth-child(-n+9):nth-child(n+6){}



工作原理: li去找父元素,父元素下"所有的子元素",去找第n个子元素

--

li:nth-of-type(n)

li:first-of-type

li:last-of-type

li:nth-last-of-type


工作原理: li去找父元素,父元素下"类型为li的所有的子元素",去找第n个子元素



第十天



重点:

一. 当两个盒子在同一行显示时，边框出现重叠，变厚的现象时，设置margin-left:-1px;

实现鼠标放上去能看到两个紧挨着盒子的边框，设置

:hover{

position:relative; 设置层级关系

}



二. 当设置一个盒子模认情况下没有边框，鼠标放上去后有边框，出现抖动的处理方式:



1.给默认情况下的盒子设置透明边框，设置鼠标放上去后，给边框改变透明度。



2.给:hover设置:改变盒子计算方式{box-sizing:border-box;} 在原来的基础上做减法

(box-sizing:content-box;默认计算方式)



三.让图片在盒子中正中间显示:

1. 先给图片设置，水平居中(给盒子设置text-align:center)，再给盒子设置行高，给图片设置垂直居中(在img样式中设置vertical-align:middle;)



2.给img标签设置{

vertical-align:middle;

}


伪元素
给盒子标签设置:after{

content:"";

height:100%；

display:inline-block;

vertical-align:middle;

}



3.

<style>

.table{

width:300px;

height:300px;

border:1px solid red;

display:table;

}

.td{

display:table-cell;

text-align:center;

}

</style>



<div class="table">

<div class="td">

<img src="2.png">

</div>

</div>





第五天

行高line-height

行高属于文字的属性

行高=文字大小+上下间距(默认行高18px)

行高作用:

设置文字垂直方向中有距离

文字垂直居中 (行高=容器)

"在没设置行高时"影响行高的因素:

文字大小

文字字体

如果给标签单独设置行高

px:行高值就是设置的行高(line-height=20px 行高=20px)"不受字体影响！"

em(代表一个字体大小):行高值=设置的行高*文字大小(line-height=2em 行高=两倍字体大小)

%或者不带单位和em是一样的。



如果给父元素设置行高，子元素行高特点:

px em %都是先计算，后继承

"不带单位":子元素的行高=父元素的行高*子元素的文字大小(先继承，后计算)



重点:盒子模型

作用:实现网页布局



组成:

边框:border

内边距:padding 盒子子中的内容与盒子边框的距离

外边距:margin 盒子与盒子之间的距离



border-style:solid; 设置直线的边框样式(默认值none(没有边框) solid实线 dotted点线 dashed虚线)

border属性联写中:

必须设置border-style

没有顺序的限制



去掉边框:

border:0 none; 这个0可有可无，优化性



input{

border:0 none; 去掉边框

outline-style:none 去掉轮廓线

}



增强用户体验，点击用户名，就能输入

<label for="um">用户名:</label>

<input type="text" class="username" id="um">



padding属性联写:

padding:10px; 上右下左

padding:10px 20px 上下10px 左右20px

10px 20px 30px 上10px 右左20px 下30px



盒子大小问题:

边框和内边距可以改变盒子大小

盒子大小(宽度)=内容的宽度+左右内边距+左右边框



设置盒子计算方式

box-sizing:border-box;

box-sizing:content-box; (让一个大盒子包含一个小盒子，小盒子在大盒子中居中显示，大盒子宽高不变)



嵌套盒子padding值对盒子大小的影响

*"继承"的盒子，默认不设置宽度的情况下，给子盒子设置padding值在父盒子宽度范围内，不会影响盒子大小。



margin(外边距)

特点:

垂直(方向)外边距合并，以最大外边距为准

垂直在边距塌陷(给包含小边框的大边框设置外边距，大边框也会跟随小边框移动)

解决在边距塌陷:

1. 给父元素设置overflow:hidden;

2. 给父元素设置边框

由于overflow:hideen触发了元素的bfc(格式上下文)





fw

ctr加"+" 放大

ctr加"-" 缩小

ctr+鼠标中键

z 放大镜

v选取



第九天



查看类名是否重复，先选中类名，后按ctr+f



cursor:pointer; 改变鼠标显示样式



制作三角形:

div{
    width:0px;
    height:0px;
    border-top:10px solid transparent;
    border-right:10px solid transparent;
    border-bottom:10px solid blue;
    border-left:10px solid transparent;
}



圆角边框:

border-radius:7px;



当需要一张超出屏幕的背景图片时，设置:

background:top center;



当需要一张不占位置的背景图片时，可设置:

position:absolute; 不影响整体布局

字体属性：(font)

大小 {font-size: x-large;}(特大) xx-small;(极小) 一般中文用不到，只要用数值就可以，单位：PX、PD

样式 {font-style: oblique;}(偏斜体) italic;(斜体) normal;(正常)

行高 {line-height: normal;}(正常) 单位：PX、PD、EM

粗细 {font-weight: bold;}(粗体) lighter;(细体) normal;(正常)

变体 {font-variant: small-caps;}(小型大写字母) normal;(正常)

大小写 {text-transform: capitalize;}(首字母大写) uppercase;(大写) lowercase;(小写) none;(无)

修饰 {text-decoration: underline;}(下划线) overline;(上划线) line-through;(删除线) blink;(闪烁)



常用字体： (font-family)

"Courier New", Courier, monospace, "Times New Roman", Times, serif, Arial, Helvetica, sans-serif, Verdana



背景属性： (background)

色彩 {background-color: #FFFFFF;}

图片 {background-image: url();}

重复 {background-repeat: no-repeat;}

滚动 {background-attachment: fixed;}(固定) scroll;(滚动)

位置 {background-position: left;}(水平) top(垂直);

简写方法 {background:#000 url(..) repeat fixed left top;}



区块属性： (Block)

字间距 {letter-spacing: normal;} 数值

对齐 {text-align: justify;}(两端对齐) left;(左对齐) right;(右对齐) center;(居中)

缩进 {text-indent: 数值px;}

垂直对齐 {vertical-align: baseline;}(基线) sub;(下标) super;(下标) top; text-top; middle; bottom; text-bottom;

词间距word-spacing: normal; 数值

空格white-space: pre;(保留) nowrap;(不换行)



显示 {display:block;}(块) inline;(内嵌) list-item;(列表项) run-in;(追加部分) compact;(紧凑) marker;(标记) table; inline-table; table-raw-group; table-header-group; table-footer-group; table-raw; table-column-group; table-column; table-cell; table-caption;(表格标题)



方框属性： (Box)

width:; height:; float:; clear:both; margin:; padding:; 顺序：上右下左

边框属性： (Border)

border-style: dotted;(点线) dashed;(虚线) solid; double;(双线) groove;(槽线) ridge;(脊状) inset;(凹陷) outset;

border-width:; 边框宽度

border-color:#;



简写方法border：width style color;



列表属性： (List-style)

类型list-style-type: disc;(圆点) circle;(圆圈) square;(方块) decimal;(数字) lower-roman;(小罗码数字) upper-roman; lower-alpha; upper-alpha;

位置list-style-position: outside;(外) inside;

图像list-style-image: url(..);

定位属性： (Position)

Position: absolute; relative; static;

visibility: inherit; visible; hidden;

overflow: visible; hidden; scroll; auto;

clip: rect(12px,auto,12px,auto) (裁切)



css属性代码大全

一 CSS文字属性：

color : #999999;

font-family : 宋体,sans-serif;

font-size : 9pt;

font-style:itelic;

font-variant:small-caps;

letter-spacing : 1pt;

line-height : 200%;

font-weight:bold;

vertical-align:sub;

vertical-align:super;

text-decoration:line-through;

text-decoration: overline;

text-decoration:underline;

text-decoration:none;

text-transform : capitalize;

text-transform : uppercase;

text-transform : lowercase;

text-align:right;

text-align:left;

text-align:center;

text-align:justify;

vertical-align属性

vertical-align:top;

vertical-align:bottom;

vertical-align:middle;

vertical-align:text-top;

vertical-align:text-bottom;

二、CSS边框空白

padding-top:10px;

padding-right:10px;

padding-bottom:10px;

padding-left:10px;

list-style-type:decimal;

list-style-type:lower-roman;

list-style-type:upper-roman;

list-style-type:lower-alpha;

list-style-type:upper-alpha;

list-style-type:disc;

list-style-type:circle;

list-style-type:square;

list-style-image:url(/dot.gif);

list-style-position: outside;

list-style-position:inside;

四、CSS背景样式：

background-color:#F5E2EC;

background:transparent;

background-image : url(/image/bg.gif);

background-attachment : fixed;

background-repeat : repeat;

background-repeat : no-repeat;

background-repeat : repeat-x;

background-repeat : repeat-y;

指定背景位置

background-position : 90% 90%;

background-position : top;

background-position : buttom;

background-position : left;

background-position : right;

background-position : center;

五、CSS连接属性：

a

a:link

a:visited

a:active

a:hover

鼠标光标样式：

链接手指 CURSOR: hand

十字体 cursor:crosshair

箭头朝下 cursor:s-resize

十字箭头 cursor:move

箭头朝右 cursor:move

加一问号 cursor:help

箭头朝左 cursor:w-resize

箭头朝上 cursor:n-resize

箭头朝右上 cursor:ne-resize

箭头朝左上 cursor:nw-resize

文字I型 cursor:text

箭头斜右下 cursor:se-resize

箭头斜左下 cursor:sw-resize

漏斗 cursor:wait

默认 cursor:default

光标图案(IE6) p {cursor:url("光标文件名.cur"),text;}

六、CSS框线一览表：

border-top : 1px solid #6699cc;

border-bottom : 1px solid #6699cc;

border-left : 1px solid #6699cc;

border-right : 1px solid #6699cc;

以上是建议书写方式,但也可以使用常规的方式 如下:

border-top-color : #369

border-top-width :1px

border-top-style : solid

其他框线样式

solid

dotted

double

groove

ridge

inset

outset

七、CSS表单运用：

文字方块

按钮

复选框

选择钮

多行文字方块

下拉式菜单 选项1选项2

八、CSS边界样式：

margin-top:10px;

margin-right:10px;

margin-bottom:10px;

margin-left:10px;



CSS 属性： 字体样式(Font Style)

序号 中文说明 标记语法

1 字体样式 {font:font-style font-variant font-weight font-size font-family}

2 字体类型 {font-family:"字体1","字体2","字体3",...}

3 字体大小 {font-size:数值|inherit| medium| large| larger| x-large| xx-large| small| smaller| x-small| xx-small}

4 字体风格 {font-style:inherit|italic|normal|oblique}

5 字体粗细 {font-weight:100-900|bold|bolder|lighter|normal;}

6 字体颜色 {color:数值;}

7 阴影颜色 {text-shadow:16位色值}

8 字体行高 {line-height:数值|inherit|normal;}

9 字 间 距 {letter-spacing:数值|inherit|normal}

10 单词间距 {word-spacing:数值|inherit|normal}

11 字体变形 {font-variant:inherit|normal|small-cps }

12 英文转换 {text-transform:inherit|none|capitalize|uppercase|lowercase}

13 字体变形 {font-size-adjust:inherit|none}

14 字体 {font-stretch:condensed|expanded|extra-condensed|extra-expanded|inherit|narrower|normal| semi-condensed|semi-expanded|ultra-condensed|ultra-expanded|wider}

文本样式(Text Style)

序号 中文说明 标记语法

1 行 间 距 {line-height:数值|inherit|normal;}

2 文本修饰 {text-decoration:inherit|none|underline|overline|line-through|blink}

3 段首空格 {text-indent:数值|inherit}

4 水平对齐 {text-align:left|right|center|justify}

5 垂直对齐 {vertical-align:inherit|top|bottom|text-top|text-bottom|baseline|middle|sub|super}

6 书写方式 {writing-mode:lr-tb|tb-rl}

背景样式

序号 中文说明 标记语法

1 背景颜色 {background-color:数值}

2 背景图片 {background-image: url(URL)|none}

3 背景重复 {background-repeat:inherit|no-repeat|repeat|repeat-x|repeat-y}

4 背景固定 {background-attachment:fixed|scroll}

5 背景定位 {background-position:数值|top|bottom|left|right|center}

6 背景定位 {background-size: conver} // background-size: 135px 208px;

7 背影样式 {background:背景颜色|背景图象|背景重复|背景附件|背景位置}

框架样式(Box Style)

序号 中文说明 标记语法

1 边界留白 {margin:margin-top margin-right margin-bottom margin-left}

2 补　　白 {padding:padding-top padding-right padding-bottom padding-left}

3 边框宽度 {border-width:border-top-width border-right-width border-bottom-width border-left-width}　　

宽度值： thin|medium|thick|数值

4 边框颜色 {border-color:数值 数值数值数值}　　数值：分别代表top、right、bottom、left颜色值

5 边框风格 {border-style:none|hidden|inherit|dashed|solid|double|inset|outset|ridge|groove}

6 边　　框 {border:border-width border-style color}

上 边 框 {border-top:border-top-width border-style color}

右 边 框 {border-right:border-right-width border-style color}

下 边 框 {border-bottom:border-bottom-width border-style color}

左 边 框 {border-left:border-left-width border-style color}

7 宽　　度 {width:长度|百分比| auto}

8 高　　度 {height:数值|auto}

9 漂　　浮 {float:left|right|none}

10 清　　除 {clear:none|left|right|both}

分类列表

序号 中文说明 标记语法

1 控制显示 {display:none|block|inline|list-item}

2 控制空白 {white-space:normal|pre|nowarp}

3 符号列表 {list-style-type:disc|circle|square|decimal|lower-roman|upper-roman|lower-alpha|upper-alpha|none}

4 图形列表 {list-style-image:URL}

5 位置列表 {list-style-position:inside|outside}

6 目录列表 {list-style:目录样式类型|目录样式位置|url}

7 鼠标形状 {cursor:hand|crosshair|text|wait|move|help|e-resize|nw-resize|w-resize|s-resize|se-resize|sw-resize}





02起步,各种兼容代码

<meta http-equiv='X-UA-Compatible' content="IE=edge">

-------------------------------媒体查询-------------

在样式里面写:

@media (max-width: 640px){
    body {
        background-color: pink;
    }
}

@media (min-width: 920px){
    body {
        background-color: red;
    }
}


// 在进行媒体条件设置时,一般根据当前主流设备来设置























------------------------------------课外学习--------------------------------------------
1.
让盒子自适应屏幕高度
给html设置 height:100%;
给body设置 margin:0; height:100%;
给需要自适应盒子设置 height:100%;


2.
语法:
<input type="search" name="user_search" placeholder="Search W3School" />
搜索\输入时提示信息(类似value)
placeholder 属性提供可描述输入字段预期值的提示信息（hint）。

该提示会在输入字段为空时显示，并会在字段获得焦点时消失。

注释：placeholder 属性适用于以下的 <input> 类型：text, search, url, telephone, email 以及 password。

样式:
input::-webkit-input-placeholder {
        /* placeholder颜色  */
        color: #aab2bd;
        /* placeholder字体大小  */
        font-size: 12px;
        /* placeholder位置  */
        text-align: right;
    }

兼容代码
::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color:    #909;
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
   color:    #909;
}
::-moz-placeholder { /* Mozilla Firefox 19+ */
   color:    #909;
}
:-ms-input-placeholder { /* Internet Explorer 10-11 */
   color:    #909;
}


----------------------------2018-3-8-----------

width 默认值 auto (剩下多少就占多少)

相对定位 参考本身(原来的位置)

绝对定位 参考祖先元素(不是父元素)

固定定位 参考浏览器窗口


line-height: 1; 和文字一样高


hadmin

###############

<input autofocus="autofocus">

//autofocus 属性规定当页面加载时 input 元素应该自动获得焦点。


####

视频控件
video 的 controls  属性


<video controls width=640 height=360>
    <source src="./video/1.mp4" type='video/mp4'>
</video>


#####################

zoom 不仅可以解决清除浮动的兼容性问题,还可以使整个html页面按比例缩小或增大;


####
解决hover作用于同级元素上的解决办法: 加号是关键

若#a与#b是亲兄弟关系，有相同的父节点，且#b紧跟在#a后面，则可通过#a + #b{……}来控制#b的CSS样式

rem   相对于网页根目录

em    相对自己的字体大小,若自己没有则以祖先元素的字体大小


###
iframe 来实现comet(长轮询)

<iframe src="/"></iframe>




var io = require('socket.io')(server);
io.on('connection', function(){
   console.log("连接上了浏览器");

   //接受数据
   client.on("name", function(data){
        console.log(data);
   });
   client.emit("age", "16");
});


###

实体符号:
&lt;  &gt;  &nbsp;

"&amp;" 代表 "&"。


###

强制换行

word-wrap: break-word;
white-space:pre-wrap; //兼容Firefox

pre {
    white-space: pre-wrap;
    word-wrap: break-word;
}

disabled || disabled="disabled"  禁用
disabled="false" 不禁用

--------------------------------------rem--------------------------------------
浏览器的默认字体高度一般为16px，即1em:16px，但是 1:16 的比例不方便计算，
为了使单位em/rem更直观，CSS编写者常常将页面跟节点字体设为62.5%，
比如选择用rem控制字体时，先需要设置根节点html的字体大小，因为浏览器默认字体大小16px*62.5%=10px。
这样1rem便是10px，方便了计算。


------------------------------------流式布局------------------------------------
就是宽用百分比设置,高用固定单位设置(px)



##########  让页面所有内容都变成灰色

html {
    filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);
    -webkit-filter: grayscale(100%);
}


##
::selection 选择选择器

只能向 ::selection 选择器应用少量 CSS 属性：color、background、cursor 以及 outline。

<style>
::selection{
    color:#ff0000;
}

::-moz-selection{
color:#ff0000;
}

</style>


焦点的光标颜色：
caret-color: red;

去掉i标签的倾斜
font-style: normal;


textarea 去除默认样式
resize:none;
outline:none;


## -- css添加提示
div:hover::after {
    content: attr(data-title); // 可获取属性值
    display: inline-block;
    padding: 10px 14px;
    border: 1px solid #ddd;
    border-radius: 5px;
    position: absolute;
    top: -50px;
    left: -30px;
}

<div data-title="hello, world">hello...</div>
##


##
这段文本包含 <sup>上标</sup>
这段文本包含 <sub>下标</sub>
<code>  定义计算机代码文本。
<var>   定义变量。您可以将此标签与 <pre> 及 <code> 标签配合使用。
<cite>  定义引用。可使用该标签对参考文献的引用进行定义，比如书籍或杂志的标题。
<q> 标签定义短的引用。浏览器经常在引用的内容周围添加引号。
<blockquote>  标签定义长的引用
<mark> 标签定义带有记号的文本（有默认背景色）
##


注释
<ruby>
 百度 <rt> baidu </rt>
</ruby>

--------------------------------- flex (伸缩) 布局 -------------------------------
父容器的属性值:

display: flex;
display: -webkit-flex;          不加前缀也可以了

盒子的纵向排列
flex-direction: row;            盒子在一行上 (左右)
flex-direction: column;         盒子在一列上 (上下)
flex-direction: row-reverse;    盒子在一行上 && 从右开始
flex-direction: column-reverse; 盒子在一列上 && 从下开始
flex-wrap: wrap;                当盒子超出父容器时自动换行

简写:
flex-flow: row wrap; 从左到右 && 自动换行


justify-content: center;        内容居中(横向)
justify-content: flex-end;      内容右边对齐
justify-content: space-between; 平均分布 && 左右对齐
justify-content: space-around;  平均分布 && 左右留一半 margin

align-items: center;            垂直居中


子容器的属性值:

flex: 1;          内容比例, 会将所有的子容器内容比例相加得到的值为100%,以他为参考
order: 3;         第3个, 排序, 位置顺序(条件是: 所有的子容器都设置了才有用)

##

里层div的高度始终与外层div的高度一样
解决方案: 利用绝对定位;top的值为0,bottom的值也为0 即可让里层div的高度与外层的高度一样


## 省略号

white-space: nowrap;
text-overflow: ellipsis;
width: 50px;
overflow: hidden;
border: 1px solid #000000;

## 多行文本最后省略号

display: -webkit-box;
-webkit-line-clamp:2;
overflow: hidden;
-webkit-box-orient: vertical;
text-overflow: ellipsis;

> css 多行文本溢出 js判断是否有省略号

```txt

先不给 文本加溢出有省略号在CSS；
给文本加行高 用js取文本总高度 如果大于 行高就表示有 再加个溢出有省略号CSS

```

## 自定义字体

@font-face {
    font-family: 'gg';   /*字体名称*/
    src: url('./gg.ttf');       /*字体源文件*/
}

body {
    font-family: 'gg'
}

##

自适应||撑满
width: -webkit-fill-available;
width: -moz-fill-available;
width: -moz-available;    /* FireFox目前这个生效 */
width: fill-available;

## 禁用选中

-webkit-user-select:none;
-moz-user-select:none;
-ms-user-select:none;
user-select:none;

---

## 提示(记住)

`placeh`

```html

<input type="password" autocomplete="off" placeholder="请输入原密码" placeh class="el-input__inner">

```

### 防止手机端展示pc端网站布局错乱

```html

    <meta name="viewport" content="width=device-width, initial-scale=0, maximum-scale=0, user-scalable=yes, shrink-to-fit=no">

```


### 文本域行高问题(输入框input)
```
因为textarea不支持自适应高度，就是定好高度或者是行数之后，超出部分就会显示滚动条，看起来不美观。
而用DIV来模拟时，首先遇到的问题是：div怎么实现输入功能？
可能我们还是第一次见到这个属性contenteditable，如一个普通的block元素上加个contenteditable="true"就实现编辑，出现光标了。如
```

```html

<div class="input" contenteditable="true"></div>

```

动画

[animation-name]               规定需要绑定到选择器的 keyframe 名称。。
[animation-duration]           规定完成动画所花费的时间，以秒或毫秒计。
[animation-timing-function]    规定动画的速度曲线。
[animation-delay]              规定在动画开始之前的延迟。
[animation-iteration-count]    规定动画应该播放的次数。
[animation-direction]          规定是否应该轮流反向播放动画。
[animation-fill-mode]          属性规定动画在播放之前或之后，其动画效果是否可见。


#### 字体引入

```css
@font-face {
  font-family: 'DIN Alternate';
  src: url('../fonts/dinalternate.ttf')
}
.ff {
  font-family: 'DIN Alternate';
  color: #FFB347;
}
```

#### 调试工具

chrome://inspect/#devices
http://debugx5.qq.com

