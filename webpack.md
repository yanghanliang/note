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


