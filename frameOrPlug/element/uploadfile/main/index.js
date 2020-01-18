/*
    文件上传
    author: svon.me@gmail.com
*/

import Vue from 'init'
import upload from './upload'

const lib = {
    install(vue) {
        vue.component('upload', upload)
    }
}
Vue.use(lib)

export default upload
