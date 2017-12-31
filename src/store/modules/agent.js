import api from '@/api/index'
import * as types from '../mutation-types'

// initial state
const state = {
    agentLevels: [
        {'name':'一级','id':'1'},
        {'name':'二级','id':'2'},
        {'name':'三级','id':'3'},
        {'name':'四级','id':'4'}
    ],
    categoryList:[],
    channelList:[],
}

// getters
const getters = {
    agentLevels: state => state.agentLevels,
}

// actions
const actions = {
    // getAllProvinces({ commit }) {
    //     if(state.provinceList.length == 0){
    //         api.get_province_list({}).then( res => {
    //             commit(types.PROVINCE_LIST,  res.provinceList )
    //         })
    //     }
    // },
    // getAllCategory({ commit }) {
    //     if(state.categoryList.length == 0){
    //         api.get_category_list({}).then( res => {
    //             commit(types.CATEGORY_LIST,  res.categoryList )
    //         })
    //     }
    // },
    // getAllChannel({ commit }) {
    //     if(state.channelList.length == 0){
    //         api.get_channel_list({}).then( res => {
    //             commit(types.CHANNEL_LIST,  res.channelList )
    //         })
    //     }
    // }
}

// mutations
const mutations = {
    [types.PROVINCE_LIST](state,  list ) {
        state.provinceList = list
    },
    [types.CATEGORY_LIST](state,  list ) {
        state.categoryList = list
    },
    [types.CHANNEL_LIST](state,  list ) {
        state.channelList = list
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
