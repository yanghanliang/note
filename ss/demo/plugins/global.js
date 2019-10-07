import Vue from 'vue'

const Global = {
    baseURL: 'http://localhost:3001/' // 接口基地址
}

Vue.prototype.Global = Global // 挂载到Vue实例上面
