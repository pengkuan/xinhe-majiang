import Vue from 'vue'
import Router from 'vue-router'

import userCenter from './userCenter'
import agent from './agent'
import player from './player'

const login = resolve => require(['@/views/login'], resolve)
const home = resolve => require(['@/views/home'], resolve)
const index = resolve => require(['@/views/index'], resolve)  //运营数据

Vue.use(Router)

let router = new Router({ 
    routes: [
        {
            path: '/login',
            name: '登录',
            component: login
        },
        {
            path: '/',
            name: 'home', 
            component: home,
            redirect: '/index',
            leaf: true, // 只有一个节点
            menuShow: true,
            iconCls: 'iconfont icon-home_fill_light', // 图标样式class
            children: [
                {path: '/index', component: index, name: '运营数据', menuShow: true}
            ]
        },
        {
            path: '/',
            name: '代理管理', 
            component: home,
            menuShow: true,
            iconCls: 'iconfont icon-huodong', // 图标样式class
            children: [
                {path: '/agent/index', component: agent.index, name: '代理列表', menuShow: true},
                {path: '/agent/add', component: agent.add, name: 'agentAdd', menuShow: false},
                {path: '/agent/card', component: agent.card, name: 'agentCard', menuShow: false},
                {path: '/agent/cardRecord', component: agent.cardRecord, name: '代理发卡记录', menuShow: true},
            ]
        },
        {
            path: '/',
            name: '玩家管理', 
            component: home,
            menuShow: true,
            iconCls: 'iconfont icon-huodong', // 图标样式class
            children: [
                {path: '/player/index', component: player.index, name: '玩家列表', menuShow: true},
                {path: '/player/card', component: player.card, name: 'playerCard', menuShow: false},
                {path: '/player/cardRecord', component: player.cardRecord, name: '玩家发卡记录', menuShow: true},
            ]
        },
        {
            path: '/',
            name: '用户中心', 
            component: home,
            menuShow: true,
            iconCls: 'iconfont icon-huodong', // 图标样式class
            children: [
                {path: '/user/setPwd', component: userCenter.setPwd, name: '修改密码', menuShow: true},
            ]
        },
    ]
})


export default router