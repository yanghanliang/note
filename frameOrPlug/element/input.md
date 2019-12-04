## 限制输入长度&&显示当前字数

```html

<el-input class="w504" v-model="form.title" maxlength="10">
    <span slot="suffix">{{ form.title.length }}/10</span>
</el-input>

```