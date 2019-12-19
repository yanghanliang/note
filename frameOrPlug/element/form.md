## element 表单验证 数据嵌套太深

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

## 表单验证-验证失效

```js

data() {
    let uploadRules = (rule, value, callback) => {
        if(this.type === 3) {
            let img = this.selectedSwiper.number.img
            if(img !== this.uploadImgList.length) {
                this.$message.error('请上传素材')
                // return false 这种写法是错误的
                // 它并不会让验证不通过的元素改变样式
                // 也不会执行 this.$refs.form.validate 这个方法

                callback(new Error(' ')) // 必须要有 callback 并且里面如果不需要文字，则必须是空字符串，否则验证错误时会显示一个空对象出来 {}
            }
        }
        callback()
    }

    return {
        rules: [
            budget: [
                { validator: uploadRules, trigger: 'blur' }
            ]
        ]
    }
}

```

---


## 验证纯数组

```html

<template v-for="(item, index) in selectedSwiper.number.txt">
    <el-form-item v-if="index === 0" label="标题" :key="index" :prop="'describeList.' + index" :rules="{ required: true, message: '请输入标题文案', trigger: 'change' }">
        <el-input class="w504" v-model="form.describeList[index]" placeholder="请输入标题文案" maxlength="10">
            <span slot="suffix">{{ form.describeList[index] | describeLength }}/10</span>
        </el-input>
    </el-form-item>
    <el-form-item v-else label="描述" :key="index" :prop="'describeList.' + index" :rules="{ required: true, message: '请输入描述文案', trigger: 'change' }">
        <el-input class="w504" v-model="form.describeList[index]" placeholder="请输入描述文案" maxlength="20">
            <span slot="suffix">{{ form.describeList[index] | describeLength }}/20</span>
        </el-input>
    </el-form-item>
</template>


```


```js

data() {
    return {
        form: {
            describeList: [], // 必须在 form 对象中
            // 如果此数组中的值是对象形式此方法也适用
            // 修改 :prop="'describeList.' + index + '.name'" 
            // 修改 v-model="form.describeList[index].name"
        },
        selectedSwiper: {
            number: {
                txt: 5
            }
        }
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

