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
                searchKey:'',
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
                let res = await api.getDetail({type:'agent',key:key})
                if (res.code != 0) {
                    this.$alert(res.msg,"提示")
                    return
                }
                this.info = res.agent
            },
            //取消
            cancelnow() {
                this.$router.push({ path: '/channel/employee' });
            },
            //确定
            onSubmit(formName) {
                let self = this
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        let key = this.searchKey?this.searchKey:this.$route.query.id
                        api.sendCard({type:'agent',num:this.num,to:''}).then((res)=>{
                            if (res.code != 0) {
                                self.$alert(res.msg,"提示")
                                return
                            }
                            self.$message("成功！")
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                })

            }
        }
    }
</script>