```js

new Vue({
    data() {
        return {
            options: {
                // 连线的数据
                attrInfo:[],
                // 用于验证上传状态 数据可不提交
                // upload: '',
            }
        }
    },
    watch: {
        'options.attrInfo': function() {
            this.formRules()
        }
    },
})

```

### 配合计算属性,监听对象中特定的值

```js

computed: { // 配合 switch 监听对象中某一特定值
    searchData() {
        return this.pageData.searchData
    }
},
data() {
    return {
        pageData: {
            searchData: ''
        }
    }
}
watch: {
    searchData: function (newQuestion, oldQuestion) { // 配合计算属性,监听对象中特定的值
        this.pageData.lock = true
    }
}

```