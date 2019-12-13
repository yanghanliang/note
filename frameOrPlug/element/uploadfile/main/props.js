/*
    上传配置参数
*/

import * as process from 'process'

let props = {
    action: {
        type: String,
        default() {
            let { api } = process.env
            return `${api.host}${api.basePath}/user/upload`
        }
    },
    // 是否支持多选文件
    multiple: {
        type: Boolean,
        default() {
            return false
        }
    },
    // 最大允许上传个数
    limit: {
        type: Number,
        default() {
            return 1
        }
    },
    // 文件超出个数限制时的钩子
    onExceed: {
        type: Function,
        default() {
            return function(){}
        }
    },
    // 是否开启拖拽
    drag: {
        type: Boolean,
        default() {
            return true
        }
    },
    // 上传类型
    type: {
        type: String,
        // required: true,
        validator(value) {
            return ['image', 'video', 'text'].indexOf(String(value)) >= 0
        }
    },
    // 文件大小，默认 5M, 小于等于0时不限制文件大小
    size: {
        type: Number,
        default() {
            return 1024 * 5
        }
    },
    // 允许上传的资源格式
    accept: {
        type: [Array, String],
        default() {
            return []
        }
    },
    // 文件名
    name: {
        type: String,
        default: 'file[0]'
    },
    // 文件上传时的附带参数
    data: {
        type: Object,
        default() {
            return {}
        }
    },
    // 附带 cookie
    withCredentials: {
        type: Boolean,
        default() {
            return false
        }
    },
    // 文件选择后是否立即上传
    autoUpload: {
        type: Boolean,
        default() {
            return true
        }
    },
    // 文件上传前的钩子
    beforeUpload: {
        type: Function,
        default() {
            return function(){
                return true
            }
        }
    },
    // 文件上传时
    onProgress: {
        type: Function,
        default() {
            return function(){}
        }
    },
    // 文件上传失败
    onError: {
        type: Function,
        default() {
            return function(){}
        }
    },
    // 文件上传成功
    onSuccess: {
        type: Function,
        default() {
            return function(){}
        }
    },
    // 是否显示已上传文件
    showFileList: {
        type: Boolean,
        default() {
            return false
        }
    },
    // 编辑的图片地址
    img: {
        type: String
    },
    // 预览的 icon
    icon: {
        type: String,
        default: function() {
            return 'icon-preview2'
        }
    },
    // 内容文字
    text: {
        type: String,
        default: 'JPG/GIF/PNG　　≤300KB'
    }
}

export default { props }
