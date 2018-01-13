import * as http from './http'

export default {
/**
 * @post接口
 */
    modifyPwd(params) {return http.fetchPost('/agent/password', params)},//修改密码


/**
 * @get接口
 */
    OperateData(params) {return http.fetchGet('/agent/stat', params)},//修改密码
   
}