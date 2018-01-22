import * as http from './http'

export default {
/**
 * @post接口
 */
    Login(params) {return http.fetchPost('/agent/session', params)},//修改密码
    modifyPwd(params) {return http.fetchPost('/agent/password', params)},//修改密码
    addAgent(params) {return http.fetchPost('/agent/user', params)},//创建代理


/**
 * @get接口
 */
    OperateData(params) {return http.fetchGet('/agent/stat', params)},//修改密码
    getAgentList(params) {return http.fetchGet('/agent/team', params)},//代理列表
    childAgenter(params) {return http.fetchGet('/agent/child', params)},//查询子代理
    
    // childPlayer(params) {return http.fetchGet('/agent/player', params)},//玩家列表
    childPlayer(params) {return http.fetchGet('/agent/player', params)},//查询子玩家
   
}