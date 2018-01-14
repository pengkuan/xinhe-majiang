<template>
    <div id = "rewardRecord">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>代理列表</el-breadcrumb-item>
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
            <el-table-column prop="id" label="代理ID"></el-table-column>
            <el-table-column prop="uname" label="代理账号"></el-table-column>
            <el-table-column prop="name" label="代理姓名"></el-table-column>
            <el-table-column prop="phone" label="代理手机号"></el-table-column>
            <el-table-column prop="level" label="代理级别"></el-table-column>
            <el-table-column prop="parent" label="上级代理"></el-table-column>
            <el-table-column prop="children" label="代理数"></el-table-column>
            <el-table-column prop="player" label="玩家数"></el-table-column>
            <el-table-column prop="card" label="库存卡数"></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button class='indexFunBtn' type="primary" @click="sendCard(scope.row.id)" size="small">发卡</el-button>
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
                "pageIndex": "0",
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
            // let res = await api.getAgentList({page:this.search.pageIndex})
            // if (res.ret != '0') {
            //     this.$alert(res.retinfo,"提示")
            //     return
            // }
            this.dataList = [{
                id:'a2546',
                uname:'pengzaza',
                name:'pengzaza',
                phone:'13410000000',
                level:'二级',
                parent:'pengdada',
                children:'200',
                player:'540',
                card:'1200',
            }]
            this.total = 1
        },
        handleCurrentChange(val) {
            this.currentPage = val
            this.search.pageIndex = String(val - 1)
            this.random_init()
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
            console.log(id)
            this.$router.push({
                name:'agentCard',
                query:{id:id}
            })
        }
    }

}

</script>
<style lang="scss">
#rewardRecord {
    .el-date-editor.el-input,.el-date-editor.el-input__inner{width: 200px!important} /*控制所有搜索长度为 200px*/
}
    
</style>