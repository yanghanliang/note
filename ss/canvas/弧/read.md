### 概述：arc() 方法创建弧/曲线（用于创建圆或部分圆）。

> 语法：`ctx.arc(x , y, r, sAngle, eAngle, counterclockwise)`;

```
  - x,y：圆心坐标。 
        - r：半径大小。
        - sAngle:绘制开始的角度。 圆心到最右边点是0度，顺时针方向弧度增大。
        - eAngel:结束的角度，注意是弧度。π
        - counterclockwise：是否是逆时针。true是逆时针，false：顺时针，默认false;
        - 弧度和角度的转换公式： rad = deg*Math.PI/180;  
        - 在Math提供的方法中**sin、cos等都使用的弧度**

```