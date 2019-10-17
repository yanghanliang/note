
### async 同时发送多个请求

```

async getShopList(date) {
    const [data, data2] = await Promise.all([get_shop_list(postData), get_shop_list(postData)]);

    if(typeof data !== 'undefined' && typeof data.list !== 'undefined') {
        this.tableData = [].concat(data.list)
        this.all_page = data.all_page
    }
},

// get_shop_list 返回 Promise 对象

```

---

### 请求延迟

```js

abc() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve({
                "all_page": 3,
                "list":[]
            })
        }, 3000)
    });
}


async gg() {
    await abc()
}

```