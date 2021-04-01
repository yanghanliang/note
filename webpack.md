npm init -y     // 生成一个package.json 文件

```

"scripts": {
    "start": "set NODE_ENV=development&& nodemon ./dist/app.js",
    "serve": "vue-cli-service serve --port 9090",
    "debug": "set NODE_ENV=development&& set PORT=8080&&nodemon --inspect --debug ./dist/app.js",
    "debugbrk": "set NODE_ENV=development&& nodemon --inspect --debug-brk ./dist/app.js"
},

```

--port 9090    指定端口


---


#### 包介绍


`devDependencies`

eslint 代码规则
standard 集成代码规范的包，定义好了各种规则，可以理解为，这个包是基于eslint规则定制了一套规范
babel-eslint 它可以让你快速找到规则错误的地方，并且它也可以不错eslint不足的地方
eslint-plugin-vue 因为vue文件不是纯js文件，这个包可以帮助解析vue文件


