## elementui 的tabs组件出现蓝色边框问题

```css

.el-tabs__item:focus.is-active.is-focus:not(:active) {
    -webkit-box-shadow: none;
    box-shadow: none;
}

```


### 添加图标在左边

```pug

el-tabs(v-model="tabValue" 
    @tab-click="clickTab"
    @tab-remove="removeTab"
    :before-leave="beforeLeave"
    :closable="closable"
)
    template(v-for="(item, index) in creativeList")
        el-tab-pane(:label="item.label", :name="item.name", :key="index")
            creative-swiper.mb40(ref="creativeSwiper" v-if="type === 3")
            creative-form
    //- 就是它（自定义 tab
    el-tab-pane(label="rr", name="add")
        span.tab-add(slot="label")
            i.el-icon-circle-plus-outline(@click="addCreative", status="link")

```


### 删除 tab 时，页面会自动置顶

> 删除`tab`时，会删除`tab`中的数据，`vue`会重新渲染，导致页面置顶

解决的办法：
    删除`tab`数据前，先获取文档的卷曲高度，删除后赋值即可

```js

// 删除 tab 时执行
removeTab(name) {
    var scrollTop = document.documentElement.scrollTop
    this.creativeList = this.creativeList.filter((item, index) => {
        if(item.name === name) {
            // 更新当前选中的标签
            this.tabValue = this.creativeList[index - 1].name
        } else {
            return item
        }
    })
    this.$nextTick(() => {
        document.documentElement.scrollTop = scrollTop
    })
},

```