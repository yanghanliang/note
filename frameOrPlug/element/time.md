```html

<el-date-picker
    v-model="untilTime"
    type="datetime"
    placeholder="选择日期时间"
    align="right"
    format="yyyy-MM-dd HH:mm"
    value-format="yyyy-MM-dd HH:mm"
    prefix-icon="el-icon-date"
    :clearable="false"
    :picker-options="pickerOptions">
</el-date-picker>

```


```js

pickerOptions: {
    disabledDate: (time) => {
        return time.getTime() < Date.now() - 24 * 60 * 60 * 1000
        // return time.getTime() < new Date(this.form.begin_time).getTime(); // 结束时间大于开始时间-关键在于箭头函数
    },
    // disabledDate: (time) => {
    //     const endTime = time.getTime();
    //     const nowTime = new Date().getTime();
    //     const startTime = new Date(this.ruleForm.startTime).getTime();
    //     if (startTime < nowTime) {
    //         return endTime < nowTime;
    //     }

    //     return endTime < startTime;
    // },
    shortcuts: [
        {
            text: '今天',
            onClick(picker) {
                picker.$emit('pick', new Date())
            }
        },
        {
            text: '昨天',
            onClick(picker) {
                const date = new Date()
                date.setTime(date.getTime() - 3600 * 1000 * 24)
                picker.$emit('pick', date)
            }
        },
        {
            text: '一周前',
            onClick(picker) {
                const date = new Date()
                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
                picker.$emit('pick', date)
            }
        }
    ]
},


```