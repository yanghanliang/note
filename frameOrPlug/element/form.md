## 1. element 表单验证 数据嵌套太深

```html

<el-form :model="form" :rules="rules" ref="form">
    <!-- prop: freControl.min -->
    <el-form-item label="" class="fl" prop="freControl.min">
        <el-input @change="freControlMin" v-model.number="form.freControl.min" placeholder="请输入数量下限"></el-input>
    </el-form-item>
</el-form>

```

```js

data() {
    return {
        form: {
            budget: 1,
            freControl: { // 追频控制
                min: '',
                max: '',
                switch: false,
            },
        },
        rules: {
            budget: [
                { required: true, message: '请输入总预算', trigger: 'blur' },
                { validator: orderDudget, trigger: 'blur' }
            ],
            freControl: {
                min: [
                    {required: true, message: '请输入数量下限', trigger: 'change'},
                    {validator: check_num, trigger: 'change'},
                    {validator: check_num_int, trigger: 'change'}
                ]
            }
        },
    }
}

```

## 表单验证-验证失效

```js

let uploadRules = (rule, value, callback) => {
    if(this.type === 3) {
        let img = this.selectedSwiper.number.img
        if(img !== this.uploadImgList.length) {
            this.$message.error('请上传素材')
            // return false 这种写法是错误的

            callback(new Error(' ')) // 必须要有 callback 并且里面如果不需要文字，则必须是空字符串，否则验证错误时会显示一个空对象出来 {}
        }
    }
    callback()
}

```



---


## 阻止表单回车默认提交

@submit.native.prevent

```html

<el-form :model="form" :rules="rules" ref="form" @submit.native.prevent>
</el-form>

```