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



---


## 阻止表单回车默认提交

@submit.native.prevent

```html

<el-form :model="form" :rules="rules" ref="form" @submit.native.prevent>
</el-form>

```