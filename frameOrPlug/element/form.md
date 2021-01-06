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
                { validator: orderDudget, trigger: 'blur' },
                { pattern:/(.apk)$/, message: '请上传.apk类型的文件', trigger: 'change' },
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

动态循环深层次复杂验证

可以采用页面组件话，将表单循环复杂部分，拆成子组件进行验证

---

## 表单验证-验证失效

> 自定义表单验证内写 `return false`

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


> vue 虚拟`DOM` 必须加 `key`

因为他们的 `type` 一致，所以加 key

> 正确写法

```html

<el-form-item label="密码" prop="password">
    <el-input type="password" v-model="form.password"></el-input>
</el-form-item>
<el-form-item label="确认密码" prop="confirmPassword" key="passwords">
    <el-input type="password" v-model="form.confirmPassword" @keyup.enter.native="register"></el-input>
</el-form-item>

```

> 错误写法

```html

<el-form-item label="密码" prop="password">
    <el-input type="password" v-model="form.password"></el-input>
</el-form-item>
<el-form-item label="确认密码" prop="passwords">
    <el-input type="password" v-model="form.passwords" @keyup.enter.native="register"></el-input>
</el-form-item>

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

## 表单验证异步处理

```js

this.$refs.form.validate(async (valid) => {
    if (valid) {
        try {
            const { data } = await this.$http.post('user/addUser', {
                username: '123',
                password: '123456'
            })
            alert(data.msg)
        } catch(e) {
            console.log(e)
        }
    }
})

```


### 阻止浏览保存密码后的自动提示

> 如果登录和注册在同一个页面的话，`key`是很必要的，可以防止一些虚拟`DOM`上的错误

```html

<el-form-item label="密码" prop="password" key="password">
    <el-input :type="type.password" @focus="passwordFocus" ref="password" autocomplete="off" v-model="form.password"></el-input>
    <!-- 这个是为了去掉浏览器默认的自动填充，这些都是在登录成功后点击浏览器默认的保存密码是才会出现的，不保存密码，则不会出现这种情况 -->
    <input type="password" autocomplete="new-password" style="display: none"/>
</el-form-item>
<el-form-item label="确认密码" autocomplete="off" prop="confirmPassword" key="passwords">
    <el-input :type="type.confirmPassword" @focus="confirmPasswordFocus" ref="confirmPassword" v-model="form.confirmPassword" @keyup.enter.native="register"></el-input>
</el-form-item>

```

```js

{
    data() {
		var confirmPassword = (rule, value, callback) => {
			if (value) {
				// 验证用户名是否重复
				if (value === this.form.password) {
					callback()
				} else {
					callback(new Error('两次密码不一致'))
				}
			} else {
				return callback(new Error('请输入密码'))
			}
		}
        return {
            rules: {
				password: [
					{ trigger: 'change', message: '请输入密码', required: true },
				],
				confirmPassword: [
					{ validator: confirmPassword, trigger: 'change', required: true }
				]
            },
            type: {
				password: 'text',
				confirmPassword: 'text',
            },
            form: {
				password: '',
				confirmPassword: '',
			},
			lock: true
        }
    },
    methods: {
		// 这个是为了去掉浏览器默认的提示
		passwordFocus() {
			if (String(this.form.password).length === 0) {
				if (this.lock) {
					this.$refs.password.blur()
					this.lock = false
					setTimeout(() => {
						this.type.password = 'text'
						this.$refs.password.focus()
						this.lock = true
					})
				}
			}
		},
		confirmPasswordFocus() {
			if (String(this.form.confirmPassword).length === 0) {
				if (this.lock) {
					this.$refs.confirmPassword.blur()
					this.lock = false
					setTimeout(() => {
						this.type.confirmPassword = 'text'
						this.$refs.confirmPassword.focus()
						this.lock = true
					})
				}
			}
		}
    },
	watch: {
		// 这个是为了去掉浏览器默认的提示
		'form.password': function(value, v2) {
			if (String(value).length > 0) {
				setTimeout(() => {
					this.type.password = 'password'
				})
			} else if (this.$refs.password) {
				this.$refs.password.blur()
				this.lock = false
				setTimeout(() => {
					this.type.password = 'text'
					this.$refs.password.focus()
					this.lock = true
				})
			}
		},
		'form.confirmPassword': function(value) {
			if (String(value).length > 0) {
				setTimeout(() => {
					this.type.confirmPassword = 'password'
				})
			} else if (this.$refs.confirmPassword) {
				this.$refs.confirmPassword.blur()
				this.lock = false
				setTimeout(() => {
					this.type.confirmPassword = 'text'
					this.$refs.confirmPassword.focus()
					this.lock = true
				})
			}
		}
	},
}


```

---

#### 还有一种方法，也可以：阻止浏览保存密码后的自动提示（更简单）

```html


<el-form-item label="密码" prop="password">
    <el-input type="text" onfocus="this.type = 'password'" v-model="commentForm.password"></el-input>
</el-form-item>
<el-form-item label="确认密码" prop="checkPass">
    <el-input type="text" onfocus="this.type = 'password'" v-model="commentForm.checkPass" autocomplete="off"></el-input>
</el-form-item>

```

注意，οnfοcus="this.type='password'"不能再IE上识别，需要做兼容性考虑，在网页初始化的时候处理下就好了，对于IE浏览器，在input标签上使用用type="password" autocomplete="off"后，浏览器是不会提示记住密码的。
