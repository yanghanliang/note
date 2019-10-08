# demo

> My priceless Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).


---

### echarts 按需引入

```js

// 引入 ECharts 主模块
import echarts from '~/node_modules/echarts/lib/echarts'
// 引入柱状图
import '~/node_modules/echarts/lib/chart/bar'
// 引入提示框和标题组件
import '~/node_modules/echarts/lib/component/tooltip'
import '~/node_modules/echarts/lib/component/title'

```
