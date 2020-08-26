npm init -y     // 生成一个package.json 文件

```

"scripts": {
    "start": "set NODE_ENV=development&& nodemon ./dist/app.js",
    "debug": "set NODE_ENV=development&& set PORT=8080&&nodemon --inspect --debug ./dist/app.js",
    "debugbrk": "set NODE_ENV=development&& nodemon --inspect --debug-brk ./dist/app.js"
},

```