<template>
    <div :class="['upload-file', isSuccess ? 'success' : '']" ref="uploadBox">
        <slot name="header">
            <template v-if="src">
                <i :class="icon" @click="clickPreview"></i>
            </template>
        </slot>
        <div class="uf-content">
            <el-upload
                ref="upload"
                class="dfx"
                :action="action"
                :name="name"
                :data="data"
                :drag="drag"
                :headers="headers"
                :multiple="multiple"
                :limit="limit"
                :accept="accept_list"
                :show-file-list="showFileList"
                :on-exceed="onExceed"
                :before-upload="__beforeUpload"
                :on-success="success"
                :on-error="onError"
                :on-progress="onProgress"
            >
                <slot>
                    <template v-if="src">
                        <div class="upload-lib-content upload-lib-preview">
                            <slot name="successContent">
                                <img :src="src | preview">
                            </slot>
                        </div>
                    </template>
                    <template v-else>
                        <div class="upload-lib-content">
                            <slot name="content">
                                <div class="upload-text">
                                    {{ text }}
                                </div>
                            </slot>
                        </div>
                    </template>
                </slot>
            </el-upload>
        </div>
        <div class="uf-bottom">
            <template v-if="isSuccess">
                <slot name="successFooterLeft">
                    <div @click="reUpload">重新上传</div>
                </slot>
                <slot name="successFooterRight">
                    <div @click="deleteFile">删除</div>
                </slot>
            </template>
            <template v-else>
                <div @click="reUpload">
                    <slot name="footer">点击上传</slot>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
/*
    文件上传
    author: localhost_liang@163.com
*/
import 'mixin'
import _ from 'lodash'
import props from './props'

export default {
    data() {
        return {
            src: '',
            isSuccess: false
        }
    },
    mixins: [].concat(props),
    computed: {
        headers() {
            let value = this.token
            if (value) {
                return {
                    'token': value
                }
            }
            return {}
        },
        accept_list() {
            let type = this.type
            let accept = [].concat(this.accept)
            if (_.size(accept) < 1) {
                switch (type) {
                case 'image':
                    accept = ['jpg', 'jpeg', 'png']
                    break
                case 'video':
                    accept = ['mp4', 'flv', 'mov', 'avi']
                    break
                case 'text':
                    accept = ['txt', 'xlsx']
                    break
                default:
                    break
                }
            }
            let value = []
            for (let i = 0, size = accept.length; i < size; i++) {
                value.push((`${type}/${accept[i]}`).toLocaleLowerCase())
            }
            return value.join(', ')
        }
    },
    created() {
        if(this.img) {
            this.src = this.img
            this.isSuccess = true
        }
    },
    watch: {
        img() {
            if(this.img) {
                this.src = this.img
                this.isSuccess = true
            } else {
               this.src = '' 
               this.isSuccess = false
            }
        }
    },
    methods: {
        // 上传成功
        success(response, file, filelist) {
            let { data } = response
            let [item = {}] = [].concat(data)
            let {
                preview_img = '', path = '', file_path = '' 
            } = item
            this.src = preview_img || path || file_path
            
            if (path && typeof (path) !== 'string') {
                let { _file = '' } = path
                this.src = _file
            }

            // 改变上传状态
            if(data.length > 0) {
                this.isSuccess = true
                
                this.onSuccess([].concat(data), file, filelist, this.attr)
            } else {
                this.onError([].concat(data), file, filelist)
            }

            // 清空已上传文件
            const upload = this.$refs.upload
            if (upload && upload.clearFiles) {
                upload.clearFiles()
            }
        },
        // 文件上传前
        __beforeUpload(file) {
            // 重置上传状态
            this.isSuccess = false

            if (this.size > 0) {
                var size = parseInt(file.size / 1024) // 计算文件有多少 KB
                let name = '文件'
                switch (this.type) {
                    case 'image':
                        name = '图片'
                        break
                    case 'video':
                        name = '视频'
                        break
                    default:
                        break
                }

                if (size > this.size) {
                    if (this.size > 1024) {
                        let number = parseFloat(this.size / 1024)
                        number = number.toFixed(2)
                        this.$message.error(`请上传小于${parseFloat(number)}M的${name}`)
                    } else {
                        this.$message.error(`请上传小于${this.size}KB的${name}`)
                    }
                    return false
                }

                if(this.type && !file.type.includes(this.type)) {
                    this.$message.error(`请上传${name}`)
                    return false
                }
            }
            return this.beforeUpload(file)
        },
        // 重新上传
        reUpload() {
            let ele = this.$refs.upload.$el.querySelector('input[type=file]')
            ele.click()
        },
        // 删除文件
        deleteFile() {
            this.src = false
            // 改变上传状态
            this.isSuccess = false
            // 监听删除时的方法
            this.$emit('delete')
        },
        // 点击预览
        clickPreview() {
            this.$emit('preview', this.src)
        }
    }
}
</script>
