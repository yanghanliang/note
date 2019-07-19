### moment 时间戳与时间格式相互转换

```js

// 获取时间戳 :
moment(Date.now(), 'YYYY-MM-DD HH:mm:ss').valueOf();

// 获取格式时间:
moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');



```
