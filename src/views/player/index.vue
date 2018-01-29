<template>
    <div id = "rewardRecord">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>玩家列表</el-breadcrumb-item>
        </el-breadcrumb>
        <hr>
        <br>
        <!-- 搜索start -->
        <el-form :inline="true" :model="search" ref="search" label-width="60px" size="small" class="demo-form-inline">
            <el-form-item label="搜索：" prop="txnId">
                <el-input v-model="search.txnId" placeholder="请输入关键字"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="init">查询</el-button>
                <el-button @click="reset('search')">重置</el-button>
            </el-form-item>
        </el-form>
        <br>
        <!-- 搜索end -->
        <div class="operate">
            <el-button type="primary" @click="add" size="mini">新增</el-button>
        </div>
        <el-table border :data="dataList" style="width: 100%,min-height:300px">
            <el-table-column prop="head" label="头像"></el-table-column>
            <el-table-column prop="gameId" label="游戏ID"></el-table-column>
            <el-table-column prop="bindAgent" label="绑定代理"></el-table-column>
            <el-table-column prop="restCard" label="剩余房卡"></el-table-column>
            <el-table-column prop="registTime" label="注册时间"></el-table-column>
            <el-table-column prop="lastLoginTime" label="最后登录时间"></el-table-column>
            <el-table-column prop="lastLoginIp" label="最后登录IP"></el-table-column>
            <el-table-column prop="loginTime" label="登录次数"></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button class='indexFunBtn' type="primary" @click="sendCard(scope.row.gameId)" size="small">发卡</el-button>
                    <el-button class='indexFunBtn' type="primary" @click="disabled(scope.row.gameId)" size="small">封号</el-button>
                   
                </template>
            </el-table-column>
            
        </el-table>
        <div class="hjx-pagination">
            <el-pagination @current-change="handleCurrentChange" :current-page="currentPage" layout="total, prev, pager, next, jumper" :total="total">
            </el-pagination>
        </div>
    </div>
</template>
<script>
import api from '@/api/index'
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            dataList: [],
            search: {
                "txnId": "",
                "pageIndex": 0,
                "pageSize": "10"
            },
            currentPage: 1,
            total: 0
        }
    },
    mounted() {
        this.init()
    },
    methods: {
        async init(){
            let res = await api.playerList({page:this.search.pageIndex})
            if (res.code != 0) {
                this.$alert(res.msg,"提示")
                return
            }
            this.dataList = res.list
            this.total = res.total_page
        },
        handleCurrentChange(val) {
            this.currentPage = val
            this.search.pageIndex = String(val - 1)
            this.init()
        },
        reset(formName){
            this.$refs[formName].resetFields()
            this.init()
        },
        add(){
            this.$router.push({
                name:'agentAdd',
            })
        },
         //发卡
        sendCard(id){
            this.$router.push({
                name:'playerCard',
                query:{id:id}
            })
        },
        //封号
        disabled(){

        }
    }

}

</script>
<style lang="scss">
#rewardRecord {
    .el-date-editor.el-input,.el-date-editor.el-input__inner{width: 200px!important} /*控制所有搜索长度为 200px*/
}
    
</style>