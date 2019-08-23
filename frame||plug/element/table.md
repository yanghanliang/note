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