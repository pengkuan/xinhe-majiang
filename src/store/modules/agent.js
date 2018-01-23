import api from '@/api/index'
import * as types from '../mutation-types'

// initial state
const state = {
    agentLevels: [
        {'name':'一级','id':1},
        {'name':'二级','id':2},
        {'name':'三级','id':3},
        {'name':'四级','id':4}
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
    
}

// mutations
const mutations = {

}

export default {
    state,
    getters,
    actions,
    mutations
}
