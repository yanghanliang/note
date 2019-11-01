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

---

### 清除锯齿的方法

+ `this.ctx.globalCompositeOperation = 'source-atop'`
+ `this.ctx.clearRect(0, 0, this.boxInfo.width, this.boxInfo.height)`
    + `在给定的矩形内清除指定的像素`


```js


        progressBar() {
            let vueObj = this
            var My = function (params) {
                this.canvas = document.querySelector('#progress-bar')
                this.box = this.canvas.parentElement
                this.slider = this.box.querySelector('.slider') // 滑块
                this.sliderInfo = this.slider.getBoundingClientRect()
                this.boxInfo = this.box.getBoundingClientRect()
                this.ctx = this.canvas.getContext('2d')
                this.time = 10
                this.startAngle = -90 // 开始的角度  正值走的是顺时针
                this.endAngle = this.getPercentage(params.value) // 结束的角度 负值走的是逆时针
                this.circularX = this.boxInfo.width / 2 // 圆心的 x 轴坐标 - 不能设置动态的值,会影响到渐变色
                this.circularY = this.boxInfo.height / 2 // 圆心的 y 轴坐标
                this.radius = 100 // 半径
                this.isPressDow = false // 鼠标默认是抬起的状态
                this.percentage = 0 // 百分比
                this.textTop = 50 // 文字距离上边的距离 可以为负数
                this.textSize = 28 // 字体大小
                this.direction = this.startAngle > 0 ? false : true // 旋转的方向 true - 逆时针 | false - 顺时针
                this.lineWidth = 6 // 线条宽度
                this.scrollEle = document.querySelector(params.scrollEle) // 出现滚动条的元素
                // this.isStartTyping = true // 是否允许开始输入

                this.init()
            }

            // 初始化
            My.prototype.init = function () {
                this.setBoxSize() // 设置盒子大小
                this.pressDown() // 鼠标按下滑块的事件
                this.mousemove() // 鼠标按下并且移动滑块的事件
                this.mouseup() // 鼠标抬起时执行的方法
                this.arcDrawing({
                    startAngle: this.startAngle,
                    endAngle: this.endAngle,
                }) // 画弧
            }

            // 设置盒子大小
            My.prototype.setBoxSize = function () {
                this.canvas.width = this.boxInfo.width
                this.canvas.height = this.boxInfo.height
                let content = this.box.querySelector('.content')
                let width = this.radius * 2 + this.lineWidth
                content.style.width = width + 'px'
                content.style.height = width + 'px'
            }

            /**
            * 动态画弧
            * @param {object} params
            * @param {number} params.startAngle    开始的角度 
            * @param {number} params.endAngle      结束的角度
            *
            */
            My.prototype.arcDrawing = function (params) {
                console.log(params, 'params')
                // 设置渐变
                let grd = this.ctx.createLinearGradient(0, 0, this.circularX, this.circularY)
                grd.addColorStop(0, '#FFC25E')
                grd.addColorStop(1, '#F54F29')

                this.ctx.strokeStyle = grd
                this.ctx.lineWidth = this.lineWidth

                let startArc = this.getArcValue(params.startAngle)
                let temp = params.startAngle

                var clearId = setInterval(() => {
                    let eAngle = this.getArcValue(temp) // 结束的弧度
                    this.ctx.clearRect(0, 0, this.boxInfo.width, this.boxInfo.height) // 在给定的矩形内清除指定的像素
                    this.ctx.beginPath() // 开始新的一条路径
                    this.ctx.arc(this.circularX, this.circularY, this.radius, startArc, eAngle, this.direction)
                    this.ctx.stroke()

                    // 写字
                    this.ctx.fillStyle = '#0A0A0A'
                    this.ctx.font = this.textSize + 'px Microsoft Yahei'
                    this.ctx.textAlign = 'center'
                    this.ctx.fillText(this.number(temp), this.circularX, this.circularY + this.textTop)

                    // 设置点的位置
                    this.setSpotCoordinate({
                        angle: this.endAngle
                    })

                    if (this.startAngle < 0) {
                        // 逆时针旋转, 角度为负值
                        if (temp <= params.endAngle) {
                            clearInterval(clearId)
                            vueObj.$emit('percentageChange', this.percentage)
                            return false
                        }

                        temp--
                    } else {
                        // 顺时针旋转, 角度为正值
                        if (temp >= params.endAngle) {
                            clearInterval(clearId)
                            vueObj.$emit('percentageChange', this.percentage)
                            return false
                        }

                        temp++
                    }

                }, 10)

                // this.ctx.globalCompositeOperation = 'source-atop'
                this.endAngle = params.endAngle // 更新最后的角度
            }

            /**
            * 补全-画弧 
            * @param {object} params 
            * @param {number} params.startAngle    开始的角度
            * @param {number} params.endAngle      结束的角度
            */
            My.prototype.ad = function (params) {
                this.ctx.clearRect(0, 0, this.boxInfo.width, this.boxInfo.height) // 在给定的矩形内清除指定的像素
                let startArc = this.getArcValue(params.startAngle) // 开始的弧度
                let endArc = this.getArcValue(params.endAngle) // 结束的弧度
                this.ctx.beginPath() // 开始新的一条路径
                this.ctx.arc(this.circularX, this.circularY, this.radius, startArc, endArc, this.direction)
                this.ctx.stroke()

                // 写字
                this.ctx.fillText(this.number(params.endAngle), this.circularX, this.circularY +  this.textTop)

                // 设置点的位置
                this.setSpotCoordinate({
                    angle: params.endAngle
                })
                vueObj.$emit('percentageChange', this.percentage)
            }

            /**
            * 数字处理
            * @param {number} angle 角度
            * @param {number} number 百分比
            */
            My.prototype.number = function (angle) {
                // console.log(angle, this.startAngle)
                let value = 0

                if (this.direction) {
                    let sa = 360 + this.startAngle // 获取开始的实际角度
                    if (angle > 0) {
                        if (sa > angle) {
                            value = sa - angle
                        } else {
                            value = sa + 360 - angle
                        }
                    } else {
                        let temp = 360 + angle
                        value = sa - temp
                    }
                } else {
                    if (angle > this.startAngle) {
                        value = angle - this.startAngle
                    } else {
                        value = 360 - this.startAngle + angle
                    }
                }

                let percentage = Math.round(value / 360 * 100)
                this.percentage = percentage
                return percentage + '%'
            }

            /**
            *  计算弧度
            *  @param  {number}        angle 角度 可传负值
            *  @return {number}        弧度
            *
            */
            My.prototype.getArcValue = function (angle) {
                let arc = Math.abs(angle) * Math.PI / 180
                if(angle > 0) {
                    return arc
                } else {
                    return -arc
                }
            }

            /*
            * 获取圆上的坐标
            * @param   {number} angle
            * @return  {object} coordinate 坐标 { x: value, y: value }
            */
            My.prototype.getCoordinate = function (angle) {
                let sAngle = 0
                let rightAngle = this.radius / Math.sin(2 * Math.PI / 360 * 90) // 直角

                if (angle <= 90) {
                    sAngle = 90 - angle
                    return {
                        x: this.circularX + Math.sin(2 * Math.PI / 360 * sAngle) * rightAngle - this.sliderInfo.width /
                            2,
                        y: this.circularY + Math.sin(2 * Math.PI / 360 * angle) * rightAngle - this.sliderInfo.height /
                            2
                    }
                } else if (angle <= 180) {
                    sAngle = 90 - (180 - angle)
                    return {
                        x: this.circularX - Math.sin(2 * Math.PI / 360 * sAngle) * rightAngle - this.sliderInfo.width /
                            2,
                        y: this.circularY + Math.sin(2 * Math.PI / 360 * (180 - angle)) * rightAngle - this.sliderInfo
                            .height / 2
                    }
                } else if (angle <= 270) {
                    sAngle = 270 - angle
                    return {
                        x: this.circularX - Math.sin(2 * Math.PI / 360 * sAngle) * rightAngle - this.sliderInfo.width / 2,
                        y: this.circularY - Math.sin(2 * Math.PI / 360 * (180 - sAngle - 90)) * rightAngle - this.sliderInfo.height / 2
                    }
                } else if (angle <= 360) {
                    sAngle = 90 - (360 - angle)
                    return {
                        x: this.circularX + Math.sin(2 * Math.PI / 360 * sAngle) * rightAngle - this.sliderInfo.width /
                            2,
                        y: this.circularY - Math.sin(2 * Math.PI / 360 * (360 - angle)) * rightAngle - this.sliderInfo
                            .height / 2
                    }
                }
            }

            /*
            * 设置点的位置
            * @param {object}  params
            * @param {angle}   params.angle 角度
            */
            My.prototype.setSpotCoordinate = function (params) {
                let coordinate = this.getCoordinate(params.angle)
                this.slider.style.left = coordinate.x + 'px'
                this.slider.style.top = coordinate.y + 'px'
                this.slider.style.opacity = 1
            }

            /**
            * 已知一个点求角度
            * 获取角度
            * @param {Object} params.x x 轴坐标
            * @param {Object} params.y y 轴坐标
            * @return {number} 角度
            */
            My.prototype.getAngle = function (params) {
                let sinA = Math.sin(2 * Math.PI / 360 * 90)
                // let ab = 129 488
                let ab = params.y - this.circularY
                let oa = params.x - this.circularX
                let sino = sinA * ab / Math.sqrt(Math.pow(oa, 2) + Math.pow(ab, 2))
                params.sin = sino
                return this.getSinAngle(params)
            }

            /**
            * 获取 sin 角度
            * @param {object} params.sin   传入一个 sin 值
            * @param {object} params.x     传入一个元素所在的 x 轴坐标
            * @param {object} params.y     传入一个元素所在的 y 轴坐标
            * @return {number} angle
            * 正切 || 正弦 || 余弦也可用同理求出
            */
            My.prototype.getSinAngle = function (params) {
                if (params.x >= this.circularX && params.y >= this.circularY) {
                    console.log('0-90')
                    return Math.asin(params.sin) / (Math.PI / 180)
                } else if (params.x >= this.circularX && params.y <= this.circularY) {
                    console.log('270-360', Math.asin(params.sin) / (Math.PI / 180))
                    return 360 + Math.asin(params.sin) / (Math.PI / 180)
                } else if (params.x <= this.circularX && params.y <= this.circularY) {
                    console.log('180-270', Math.asin(params.sin) / (Math.PI / 180))
                    return 180 - Math.asin(params.sin) / (Math.PI / 180)
                } else if (params.x <= this.circularX && params.y >= this.circularY) {
                    console.log('90-180')
                    return 180 - Math.asin(params.sin) / (Math.PI / 180)
                }
            }

            /**
            * 给滑块注册鼠标按下事件
            */
            My.prototype.pressDown = function () {
                let that = this
                that.slider.addEventListener('mousedown', function (event) {
                    // 利用传参兼容火狐
                    let e = window.event || event
                    // 获取目标元素
                    let target = e.target ? e.target : e.srcElement
                    // 获取元素标签内容
                    let className = target.className
                    console.log(className)
                    if (className.includes('slider')) {
                        that.isPressDown = true // 开启
                        document.body.style.cursor = 'pointer' // 变化鼠标在全局的样式
                    }
                })
            }

            // 鼠标滑动时执行
            My.prototype.mousemove = function () {
                let that = this
                window.onmousemove = function (event) {
                    // 利用传参兼容火狐
                    let e = window.event || event

                    // 分别兼容ie和chrome
                    let scrollX = that.scrollEle.scrollLeft || document.documentElement.scrollLeft || document.body.scrollLeft
                    let scrollY = that.scrollEle.scrollTop || document.documentElement.scrollTop || document.body.scrollTop
                    // 获取 x 和 y
                    let x = e.clientX + scrollX - that.sliderInfo.width / 2 - that.sliderInfo.x
                    let y = e.clientY + scrollY - that.sliderInfo.height / 2 - that.sliderInfo.y

                    if (that.isPressDown) {
                        // 获取当前鼠标的角度
                        let angle = that.getAngle({
                            x: x,
                            y: y
                        })

                        // 获取当前元素在圆上的位置
                        let coordinate = that.getCoordinate(angle)

                        // 设置位置
                        that.slider.style.left = coordinate.x + 'px'
                        that.slider.style.top = coordinate.y + 'px'

                        that.ad({
                            startAngle: that.startAngle,
                            endAngle: angle
                        })
                    }
                }
            }

            // 鼠标抬起事件
            My.prototype.mouseup = function () {
                let that = this
                window.onmouseup = function (event) {
                    // 修改按下的状态
                    that.isPressDown = false
                    // 利用传参兼容火狐
                    let e = window.event || event
                    // 获取目标元素
                    let target = e.target ? e.target : e.srcElement
                    console.log(target, 'target')
                    // 获取元素标签内容
                    let className = target.getAttribute('class')
                    // 分别兼容ie和chrome
                    let scrollX = that.scrollEle.scrollLeft || document.documentElement.scrollLeft || document.body.scrollLeft
                    let scrollY = that.scrollEle.scrollTop || document.documentElement.scrollTop || document.body.scrollTop
                    // 获取 x 和 y
                    let x = e.clientX + scrollX - that.sliderInfo.width
                    let y = e.clientY + scrollY - that.sliderInfo.height

                    if (className && className.includes('slider')) {
                        // 获取当前鼠标的角度
                        let angle = that.getAngle({
                            x: x,
                            y: y
                        })
                        // 更新结束的角度
                        that.endAngle = angle
                        // 获取当前元素在圆上的位置
                        let coordinate = that.getCoordinate(angle)
                        // 设置位置
                        that.slider.style.left = coordinate.x + 'px'
                        that.slider.style.top = coordinate.y + 'px'
                    }

                    // 恢复鼠标样式
                    document.body.style.cursor = 'default'

                    vueObj.$emit('percentageChange', that.percentage)
                }
            }

            /**
            * 获取角度
            * @param {number} 百分比
            * @return {number} 角度
            * 
            */
            My.prototype.getPercentage = function(percentage) {
                return -(percentage * 360 / 100 + 90)
            }

            this.progress = new My({
                value: vueObj.value,
                scrollEle: '.scroll .musk-box'
            })
        },

```