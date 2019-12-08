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