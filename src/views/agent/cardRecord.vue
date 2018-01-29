<template>
    <div id = "rewardRecord">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>代理发卡记录</el-breadcrumb-item>
        </el-breadcrumb>
        <hr>
        <br>
        <el-table border :data="dataList" style="width: 100%,min-height:300px">
            <el-table-column prop="orderId" label="订单号"></el-table-column>
            <el-table-column prop="amount" label="数量"></el-table-column>
            <el-table-column prop="sendType" label="赠送类型"></el-table-column>
            <el-table-column prop="sendId" label="赠送方ID"></el-table-column>
            <el-table-column prop="sendAccount" label="赠送方账号"></el-table-column>
            <el-table-column prop="acceptId" label="接受方ID"></el-table-column>
            <el-table-column prop="acceptAccount" label="接受方账号"></el-table-column>
            <el-table-column prop="sendName" label="赠送人"></el-table-column>
            <el-table-column prop="sendTime" label="赠送时间"></el-table-column>
            
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
            dataList: [
                {
                    orderId:'5974165aee5',
                    amount:'600',
                    sendType:'类型1',
                    sendId:'s123',
                    sendAccount:'hongzhaji',
                    acceptId:'a124',
                    acceptAccount:'pengkuan',
                    sendName:'xiaobai',
                    sendTime:'2017-12-26 08:52:36',
                }
            ],
            search: {
                "txnId": "",
                "pageIndex": "0",
                "pageSize": "10"
            },
            currentPage: 1,
            total: 1

        }
    },
    mounted() {
        this.init()
    },
    methods: {
        async init(){
            let res = await api.sendRecord({page:this.search.pageIndex , type:'agent'})
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
    }

}

</script>
<style lang="scss">
#rewardRecord {
    .el-date-editor.el-input,.el-date-editor.el-input__inner{width: 200px!important} /*控制所有搜索长度为 200px*/
}
    
</style>