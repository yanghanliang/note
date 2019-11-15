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
        this.entexpands= []
        this.entexpands.push(row.id)
     } else {
        this.entexpands.remove(row.id)
     }
},