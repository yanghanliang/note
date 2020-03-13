### 解决跨域问题

> config/index.js

- 定义

```js
module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/baidu': {
        target: 'http://api.fanyi.baidu.com/api/trans/vip/translate',
        changeOrigin: true,
        pathRewrite: {
          '^/baidu': '/'
        }
      }
    },
  }
}
```

-调用

```js

methods: {
    async getBaidu() {
        try {
            const data = await axios({
                url: '/baidu?q=我爱你&from=auto&to=en&appid=20200303000391987&salt=3456&sign=1f8e17625fe232c0fca9ba69a37902f1',
                method: 'get',
            })
            console.log(data, 'baidu')
        } catch (e) {
            console.log(e)
        }
    }
}

```

> 这样本地是没有问题的，但是打包后，会发现请求的地址是本地的
`http://47.98.182.149:3000/baidu?q=%E5%87%AF%E6%92%92%E5%9C%B0%E6%96%B9&from=auto&to=en&appid=20200303000391987&salt=3456&sign=5096ee13813ae837af2a1007a758c621`
所以需要做nginx代理

```nginx

location /baidu {
  	proxy_pass http://api.fanyi.baidu.com/api/trans/vip/translate;
}

```

重启nginx就可以了
