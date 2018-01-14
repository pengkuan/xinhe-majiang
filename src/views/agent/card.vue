<template>
<div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/agent/index' }">代理列表</el-breadcrumb-item>
        <el-breadcrumb-item>发卡</el-breadcrumb-item>
    </el-breadcrumb>
    <hr>
    <br>
    <div class="content-container">
        <!-- 搜索start -->
        <el-form :inline="true" label-width="120px">
            <el-form-item label="搜索：" prop="txnId">
                <el-input v-model="searchKey" placeholder="请输入关键字"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="init">查询</el-button>
            </el-form-item>
        </el-form>

        <el-form label-width="120px">
            <el-form-item label="代理ID：">{{info.id}}</el-form-item>
            <el-form-item label="代理账号：">{{info.uname}}</el-form-item>
            <el-form-item label="代理手机号：">{{info.phone}}</el-form-item>
            <el-form-item label="代理姓名：">{{info.name}}</el-form-item>
            <el-form-item label="代理级别：">{{info.level}}</el-form-item>
            <el-form-item label="我的库存：">{{info.card}}</el-form-item>


            <el-form-item label="赠送数量：" >
                <el-input v-model="num" type="number" placeholder='请输入赠送数量' :maxlength='20'></el-input>
            </el-form-item>
            <el-form-item>
                <div class="operate">
                    <el-button @click="onSubmit" type="primary" >发卡</el-button>
                    <router-link to="index"><el-button >取消</el-button></router-link>
                </div>
            </el-form-item>
        </el-form>
    </div>
</div>

    
</template>

<style type="text/css" scoped>
  .content-container{width: 500px}
</style>

<script type="text/javascript">
    import { mapGetters } from 'vuex'
    import api from '@/api/index'

    export default {
        data() {
            return {
               num:0,
               info:{}
            }
        },
        computed:{
            ...mapGetters({
                'agentLevels':'agent/agentLevels'
            }),
        },
        mounted()  {
            this.init()
        },
        methods:{
            async init(){
                let key = this.searchKey?this.searchKey:this.$route.query.id
                // let res = await api.childAgenter({})
                // if (res.ret != '0') {
                //     this.$alert(res.retinfo,"提示")
                //     return
                // }
                this.info = {
                    id:'11',
                    uname:'42424',
                    name:'3434',
                    phone:'77',
                    level:'3737',
                    card:'27',
                }
            },
            //取消
            cancelnow() {
                this.$router.push({ path: '/channel/employee' });
            },

            //确定
            async onSubmit(formName) {
                let self = this
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        // let res = await api.addEmployeeLogic(this.creatAgent)
                        // if (res.ret != '0') {
                        //     this.$alert(res.retinfo,"提示")
                        //     return
                        // }
                        // this.$message("成功！")
                        // self.$router.push({ path: '/channel/employee' });
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                })

            }
        }
    }
</script>