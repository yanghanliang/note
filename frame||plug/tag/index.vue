<template>
    <div>
        <div class="clearfix">
            <div class="box-input" v-for="(item, index) in dynamicTags" :key="index">
                <input type="text" :value="item" :disabled="disabled" @blur="blurText($event, index)">
                <div class="box-i">
                    <i class="el-icon-success" @click="success($event, index)"></i>
                    <i class="el-icon-error" @click="handDelete(index)"></i>
                    <i class="el-icon-delete" @click="edit($event, item)"></i>
                </div>
            </div>
        </div>
        <div class="add" @click="clickAdd">
            <input type="type" v-model="value" ref="addInput" :placeholder="place">
            <div class="box-i" ref="add">
                <i class="el-icon-success" @click="successAdd($event)"></i>
                <i class="el-icon-error" @click="clearText(123)"></i>
            </div>
            <div class="add-title" ref="addEle">
                <i class="el-icon-plus"></i>
                <span> {{ value }} </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            dynamicTags: [],
            inputVisible: false,
            inputValue: '',
            type: 'text',
            disabled: true,
            boxInput: null,
            value: '',
            showAdd: true,
            place: ''
        }
    },
    props:{
        data: {
            type: Array,
            default:function() {
                return []
            }
        },
        width: {
            type: String,
            default: function() {
                return '389px'
            }
        },
        height: {
            type: String,
            default: function() {
                return '500px'
            }
        },
        config: {
            type: [Object, Array]
        },
        placeholder: {
            type: String,
            default: function() {
                return '请输入'
            }
        }
    },
    watch:{
    },
    created() {
        this.dynamicTags = this.data
    },
    mounted(){

    },
    methods:{
        edit(ele) { // value
            // 获取 当前点击元素的 input
            let inputEle = ele.target.parentElement.previousElementSibling
            // 获取放 input 的盒子元素
            let boxInput = ele.target.parentElement.parentElement
            // 获取盒子的类样式
            let boxClass = boxInput.getAttribute('class').split(' ')
            // 去掉选中的样式
            // boxClass.splice(boxClass.indexOf('active'), 1)
            // 添加选中的样式
            boxClass.push('active')
            // 更新样式
            boxInput.className = boxClass.join(' ')
            // 可输入
            inputEle.removeAttribute('disabled')
            // 移动到内容的最后面
            inputEle.focus()
            // 重新获取最新的值
            // inputEle.value = inputEle.value
        },
        success(ele, index) {
            // 获取 当前点击元素的 input
            let inputEle = ele.target.parentElement.previousElementSibling
            // 获取放 input 的盒子元素
            let boxInput = ele.target.parentElement.parentElement
            // 获取盒子的类样式
            let boxClass = boxInput.getAttribute('class').split(' ')
            // 去掉选中的样式
            boxClass.splice(boxClass.indexOf('active'), 1)
            // 更新样式
            boxInput.className = boxClass.join(' ')
            console.log(inputEle)
            // 修改值 让光标移动到最后
            this.dynamicTags[index] = inputEle.value
            // 禁用
            inputEle.setAttribute('disabled', 'disabled')
            console.log(this.data, this.dynamicTags)
        },
        handDelete(index) {
            this.dynamicTags.splice(index, 1)
        },
        clickAdd() {
            console.log('????????')
            this.place = this.placeholder
            this.showAdd = false
            this.value = ''
            this.$refs.addInput.focus()
            this.$refs.add.style.display = 'block'
            this.$refs.addEle.style.display = 'none'
            console.log(this.$refs.addEle, 'this.$refs.addEle')
        },
        successAdd() { // ele
            this.place = ''
            this.showAdd = true
            console.log(this.showAdd)
            this.dynamicTags.push(this.value)
            this.$refs.add.style.display = 'none'
            this.value = '自定义'
        },
        clearText() { // number
            this.value = ''
            this.$refs.addInput.focus()
        },
        blurText(ele, index) {
            // 获取 当前点击元素的 input
            let boxInput = ele.target.parentElement.previousElementSibling
            // 修改值
            if(boxInput) {
                this.dynamicTags[index] = boxInput.value
            }
        }
    },
}
</script>

<style scoped>
.dis-none {
    display: none;
}

.add,.box-input {
    width: 230px;
    height: 44px;
    position: relative;
    border-radius: 3px;
}

.add {
    cursor: pointer;
    padding-left: 15px;
    background-color: #fff;
    color:rgba(46,135,240,1);
    border:1px solid rgba(46,135,240,1);
}

.box-input {
    float: left;
    overflow: hidden;
    padding-left: 15px;
    margin-right: 20px;
    margin-bottom: 24px;
    background: rgba(234,234,234,1);
}

.add>input,.box-input>input {
    padding: 0;
    width: 100%;
    height: 100%;
    border: none;
}

.box-input>input {
    background-color: rgba(234,234,234,1);
}

.add>input {
    border-radius: 3px;
}

.box-input.active {
    border-radius: 0;
    border-bottom: 1px solid blue;
    background-color: #fff !important;
}

.box-input.active input {
    background-color: #fff !important;
}

.box-input.active::before, .box-input.active::after {
    content: "";
    bottom: 0;
    width: 1px;
    height: 7px;
    position: absolute;
    background-color: blue;
}

.box-input.active::before {
    left: 0;
}

.box-input.active::after {
    right: 0;
}

.box-i {
    top: 50%;
    right: 5px;
    display: none;
    position: absolute;
    transform: translateY(-50%);
}

.box-i i {
    cursor: pointer;
    margin-left: 5px;
}

.box-input:hover .box-i {
    display: block;
}

.add input {
    cursor: pointer;
}

input {
    outline-style: none;
}

.add .add-title {
    display: inline-block;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 50%;
}
</style>
