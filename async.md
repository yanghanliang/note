### 1. 一个函数中发送多个请求时

```js

async function getData() {
    var result = await Promise.all(
        ajax('/get/data/1'),
        ajax('/get/data/2')
    )
}

```
