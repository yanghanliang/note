### 1. 表格实现单选框,且不需要显示单选框的值

> 如果没有 `&nbsp;` 就会显示 `label` 中的值

```html

<el-table class="table" :data="tableData" stripe style="width: 100%">
    <el-table-column prop="date" label="">
        <template slot-scope="scope">
            <el-radio v-model="radio" :label="scope.row.id">&nbsp;</el-radio>
        </template>
    </el-table-column>
    <el-table-column prop="crowd_name" label="人群名称"></el-table-column>
    <el-table-column prop="type" label="人群类型"></el-table-column>
    <el-table-column prop="coverage_total" label="覆盖总人数">
</el-table>

```

---

### table 展开行

```pug

template(slot-scope='scope', v-if="scope.height > 0")
    el-table.table(:data="tableData", @row-click="rowExpand", row-key="id",  @expand-change="rowExpand" :expand-row-keys="entexpands", v-loading="loading", align="center", stripe)
        .no-data(slot="empty")
        el-table-column(type="expand")
            template(slot-scope="scope")
                el-table(:data="tableData", v-loading="loading", align="center")
                    el-table-column(prop="name", label="日期")
                    el-table-column(prop="device", label="总花费（元）")
                    el-table-column(prop="name", label="优量通花费（元）")
                    el-table-column(prop="name", label="短信通花费（元）")
                    el-table-column(prop="name", label="邮件通花费（元）")
        el-table-column(prop="name", label="店铺名称")
        el-table-column(prop="adress", label="店铺位置")
        el-table-column(prop="device", label="已绑定探针数")
        el-table-column(prop="created_at", label="创建时间")
            template(slot-scope="scope")
                span {{ scope.row.created_at | time }}
        el-table-column(prop="id", label="操作", width="180px")
            template(slot-scope="scope")
                span.export 导出
```

```js

rowExpand(row, event, column) {
    Array.prototype.remove = function (val) {
        let index = this.indexOf(val)
        if (index > -1) {
            this.splice(index, 1)
        }
     }

     if (this.entexpands.indexOf(row.id) < 0) {
        this.entexpands = []
        this.entexpands.push(row.id)
     } else {
        this.entexpands.remove(row.id)
     }
},

```

---

### 表格复选框默认选中

| 方法名 | 说明 | 参数 
---|---|---|---
| toggleRowSelection | 用于多选表格，切换某一行的选中状态，如果使用了第二个参数，则是设置这一行选中与否（selected 为 true 则选中） | row, selected

> 由于`element`在这里的选中与否是根据`全等于`进行判断，所以传入的`row`必须是表格数据中的值，如果传入的值是复制的表格数据，则不会选中



### TypeError: u.$scopedSlots.default is not a function  表格报错

> 问题描述：使用表格时做了v-if判断；首次渲染没有问题；反复操作便会报错；

+ 给每个`el-table-column`加上`key`

```pug

el-table.table-border(:data="areaTableData", stripe, style="width: 100%", height="400")
    el-table-column(prop="name", label="地域", key="name")
    el-table-column(prop="cost" label="花费(元)", v-if="selectVal == 'cost'", key="cost")
        template(slot-scope="{row}")
            span {{ row.cost | $money | $formatNumber }}
    el-table-column(prop="impression" label="曝光数", v-if="selectVal === 'impression'", key="impression")
    el-table-column(prop="cpm" label="CPM(元)", v-if="selectVal == 'cpm'", key="cpm")
        template(slot-scope="{row}")
            span {{ row.cpm | $money | $formatNumber }}
    el-table-column(prop="click" label="点击数", v-if="selectVal == 'click'", key="click")


```


### v-if v-show 失效

>  `slot-scope="{row}"`

```html

<!-- 错误写法 -->
<el-table-column type="expand">
    <template>
        <el-select
            v-if="selectVisible"
            v-model="selectedList"
            multiple
            collapse-tags
            style="margin-left: 20px;"
            placeholder="请选择"
        >
            <el-option v-for="item in jurisdictionList" :key="item.id" :label="item.j_name" :value="item.id">
            </el-option>
        </el-select>
        <el-button v-else class="button-new-tag" size="small" @click="selectVisible = !selectVisible">+ New Tag</el-button>
    </template>
</el-table-column>

<!-- 正确写法 -->
<el-table-column type="expand">
    <template slot-scope="{row}">
        <el-select
            v-if="selectVisible"
            v-model="selectedList"
            multiple
            collapse-tags
            style="margin-left: 20px;"
            placeholder="请选择"
        >
            <el-option v-for="item in jurisdictionList" :key="item.id" :label="item.j_name" :value="item.id">
            </el-option>
        </el-select>
        <el-button v-else class="button-new-tag" size="small" @click="selectVisible = !selectVisible">+ New Tag</el-button>
    </template>
</el-table-column>

```