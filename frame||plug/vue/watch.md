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
