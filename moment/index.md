### moment 时间戳与时间格式相互转换

```js

// 获取时间戳 :
moment(Date.now(), 'YYYY-MM-DD HH:mm:ss').valueOf()

// 获取格式时间:
moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')

```

---

### 已知开始时间和结束时间,获取他们之间的时间段

```js

let dateRange = [startDate] // 时间范围
let tempDate = startDate // 开始时, 临时时间等于开始时间

// 如果临时时间小于结束时间,那么就将临时时间加1天,并存到时间范围内
while (tempDate < endDate) {
    tempDate = moment(tempDate).add(1, 'days').format('YYYY-MM-DD')
    dateRange.push(tempDate)
}

```
