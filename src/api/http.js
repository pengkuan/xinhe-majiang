import axios from 'axios'
import config from '@/config/index'
import merge from '@/util/merge'
// axios 配置
// axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/json'
// axios.defaults.baseURL = ''

import { Message } from 'element-ui'
//POST传参序列化
axios.interceptors.request.use((config) => {
    // if(config.method  === 'post'){
    //     config.data = qs.stringify(config.data)
    // }
    return config
}, (error) => {
    return Promise.reject(error)
})

//返回状态判断
axios.interceptors.response.use((res) => {
    let _this = this
    if (res.status != 200) {
        return Promise.reject(res)
    }
    return res.data
}, (error) => {
    if (error.response) {
        Message({ message: error.response.data.msg, type: 'warning' })
        switch (error.response.status) {
            case 403:

        }
    }
    return Promise.reject(error)
})

export function fetchPost(apiPath,params) {
    var resParams = {    
        'session':'e68ebengek6455'
    }
    merge(resParams,params)
    console.log(666,resParams)

    return new Promise((resolve, reject) => {
        axios.post(config.api+apiPath, resParams)
            .then(response => {
                resolve(response)
            }, err => {
                reject(err)
            })
            .catch((error) => {
                reject(error)
            })
    })
}
export function fetchGet(apiPath,params) {
    var resParams = {    
        'session':'e68ebengek6455'
    }
    merge(resParams,params)
    console.log(666,resParams)

    return new Promise((resolve, reject) => {
        axios.post(config.api+apiPath, resParams)
            .then(response => {
                resolve(response)
            }, err => {
                reject(err)
            })
            .catch((error) => {
                reject(error)
            })
    })
}
