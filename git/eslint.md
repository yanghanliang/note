#### 通过git钩子实现eslint校验

1. 在 `.git/hooks/pre-commit` 文件下添加如下内容

```
#!/bin/sh
npm run pre-commit
```

2. 在 `package.json` 中添加如下规则

```json

{
	"scripts": {
		"eslint": "eslint --ext .js,.vue pages",
		"lintfix": "eslint --ext .js,.vue pages --fix",
		"pre-commit": "npm run eslint"
	},
}

```

pages 是文件夹名

3. 创建一个`.eslintrc.js`文件，

内容：

```js

module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint'
    },
    env: {
        browser: true,
    },
    extends: [
        // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
        // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
        'plugin:vue/essential', 
        // https://github.com/standard/standard/blob/master/docs/RULES-en.md
        'standard'
    ],
    // required to lint *.vue files
    plugins: [
        'vue'
    ],
    // 忽略全局变量
    "globals": {
        "uni": true 
    },
    "rules": {
        // always 需要; never 不允许
        // allow async-await
        'generator-star-spacing': 'off',
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        // 关闭tab的检测
        'no-tabs': 'off',
        // 允许但不要求在属性后面加逗号
        "comma-dangle": ["error", "only-multiline"],
        'no-multi-spaces': 'off',
        // 关闭构造函数不存储和使用： 防止 new My() 报错
        'no-new': "off",
        // 防止 eval 报错
        'no-eval': 'off',
        // 防止 在原型上操作的错误Array.prototype.remove = fn
        'no-extend-native': 'off',
        'no-proto': 'off',
        // 防止定义多个值，只写一个 var
        'one-var': 'off',
        // 防止未定义直接使用
        'no-undef': 'off',
        "semi": [2, "never"],
        'no-unreachable': 'off',
        'no-multiple-empty-lines': ["error", { "max": 2, "maxEOF": 1 }]
    }
}

```