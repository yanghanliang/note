## upload

对 element-ui  el-upload 做的一个封装

```
<template>
    <div>
       <upload-file></upload-file>
    </div>
</template>

<script>
import uploadFile from '@dll/uploadfile'

export default {
    el: '#app',
    components: {
        uploadFile
    },
}
</script>

```

## slot

```html

<upload-file>
    <div slot="header">头部</div>
    <div slot="content">默认展示的内容</div>
    <div slot="successContent">上传成功后展示的内容</div>
    <span slot="footer">点击进行上传</span>
    <span slot="successFooterLeft">上传成功后底部左边显示的内容</span>
    <span slot="successFooterRight">上传成功后底部右边显示的内容</span>
</upload-file>

```


## 示例

```html

<span slot="header"></span>
<ul slot="content">
    <li>JPG/PNG</li>
    <li>≤ 500M</li>
</ul>
<span slot="footer">点击进行上传</span>
<div slot="successFooterLeft" class="clearfix" @click.stop="clickPreview">
    <i class="fl icon-preview2"></i>
    <span class="fl">创意预览</span>
</div>
<div slot="successFooterRight" class="clearfix">
    <i class="fl el-icon-delete"></i>
    <span class="fl">删除</span>
</div>

```


## 配置参数

名称| 是否必填 |  类型 | 默认值 | 解释 
---| --- | --- | ---  | --- 
action | 否 | String | 默认上传接口 | 指定上传接口地址
type | 否  | String  | - | 文件上传类型 image || video || text
accept| 否 | Array | - | 文件后缀格式(不传会根据 type 值自动默认, 建议不传)
size | 否 | Number | 5M | 限制文件大小
multiple | 否  | Boolean  | false |  是否开启多选
limit | 否  | Number  | 1 |  最大允许上传个数
on-exceed | 否  | Function  | - |  文件超出个数限制时触发
drag | 否  | Boolean  | true |  是否开启文件拖拽
name | 否 | String | file[0] | 与 api 交互时的文件名
data | 否 | Object | - | 文件上传时附带参数
with-credentials | 否 | Boolean | false | 是否携带cookie
auto-upload | 否 | Function | true | 是否立即上传
before-upload | 否 | Function | true | 文件上传前触发
on-progress | 否 | Function | true | 文件上传中触发
on-error | 否 | Function | true | 文件上传时触发
on-success | 否 | Function | true | 文件上传完成时触发
show-fileList | 否 |  Boolean | true | 是否显示已上传文件
img | 否 | String | - | 图片路径，编辑时使用。预览会根据 img 来进行判断，img存在时会显示预览的图标，反之亦然
icon | 否 | String | icon-preview2 | 预览的 icon
text | 否 | String | JPG/GIF/PNG　　≤300KB | 内容文字
delete | 否 | Function | - | 删除后执行此方法


---


监听`preview`方法，点击预览时会触发，并且返回图片路径
如果使用了 `<div slot="header">头部</div>` ，`preview`方法则无效了

```

<upload-file @delete="deleteFile" @preview="clickPreview"></upload-file>

```


```

methods: {
    clickPreview(src) { // 点击预览时执行
        console.log(src, 'src')
    },
    deleteFile() { // 点击删除时执行
        console.log('删除文件')
    }
}

```

