<template>
<div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/agent/index' }">代理列表</el-breadcrumb-item>
        <el-breadcrumb-item>新增</el-breadcrumb-item>
    </el-breadcrumb>
    <hr>
    <br>
    <div class="content-container">
      
        <el-form  :model="creatAgent" :rules="rules" ref="creatAgent" label-width="120px">
            <el-form-item label="账号：" prop='account' >
                <el-input v-model="creatAgent.account" placeholder='请输入账号' :maxlength='20'></el-input>
            </el-form-item>
            <el-form-item label="密码："  prop='password'>
                <el-input v-model="creatAgent.password" type='password' placeholder='请输入密码' :maxlength='20'></el-input>
            </el-form-item>
            <el-form-item label="姓名："  prop='name'>
                <el-input v-model="creatAgent.name" placeholder='请输入姓名' :maxlength='20'></el-input>
            </el-form-item>
            <el-form-item label="级别：" prop='level'>
                <el-select v-model="creatAgent.level" placeholder="请选择">
                    <el-option v-for="item in agentLevels" :key="item.id" :label="item.name" :value="item.id">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="我的库存：" >
                <el-button type="text">2555</el-button>
            </el-form-item>
            <el-form-item label="赠送数量：" prop='giveAmount'>
                <el-input v-model="creatAgent.giveAmount" type="number" placeholder='请输入赠送数量' :maxlength='20'></el-input>
            </el-form-item>
            <el-form-item>
                <div class="operate">
                    <el-button @click="onSubmit" type="primary" >确认</el-button>
                    <router-link to="index"><el-button >取消</el-button></router-link>
                </div>
            </el-form-item>
        </el-form>
    </div>
</div>

    
</template>

<style type="text/css" scoped>
  .content-container{width: 600px}
</style>

<script type="text/javascript">
    import { mapGetters } from 'vuex'
    import api from '@/api/index'

    export default {
        data() {
            return {
                creatAgent:{
                    account:'',
                    password:'',
                    name:'',
                    level:'',
                    giveAmount:'',
                },
                rules:{
                    // account: [
                    //     {  required: true , validator: this._Util.validateName, trigger: 'blur' }
                    // ],
                    // password: [
                    //     { required: true , validator: this._Util.validateTel, trigger: 'blur' }
                    // ],
                    // name:[
                    //     { required: true , validator: this._Util.validatestrCardNum, trigger: 'blur' }
                    // ],
                    // level:[
                    //     { required: true , validator: this._Util.validatestrEmail, trigger: 'blur' }
                    // ],
                    // giveAmount:[
                    //     { required: true , validator: this._Util.validatestrEmail, trigger: 'blur' }
                    // ]
                }
            }
        },
        computed:{
            ...mapGetters({
                'agentLevels':'agent/agentLevels'
            }),
        },
        mounted()  {

        },
        methods:{
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