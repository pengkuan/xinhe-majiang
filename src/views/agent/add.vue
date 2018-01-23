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
            <el-form-item label="账号：" prop='uname' >
                <el-input v-model="creatAgent.uname" placeholder='请输入账号' :maxlength='20'></el-input>
            </el-form-item>
            <el-form-item label="密码："  prop='pwd'>
                <el-input v-model="creatAgent.pwd" type='pwd' placeholder='请输入密码' :maxlength='20'></el-input>
            </el-form-item>
            <el-form-item label="姓名："  prop='name'>
                <el-input v-model="creatAgent.name" placeholder='请输入姓名' :maxlength='20'></el-input>
            </el-form-item>
            <el-form-item label="手机号："  prop='phone'>
                <el-input v-model="creatAgent.phone"  type="number" placeholder='请输入手机号' :maxlength='11'></el-input>
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
            <el-form-item label="赠送数量：" prop='card'>
                <el-input v-model="creatAgent.card" type="number" placeholder='请输入赠送数量' :maxlength='20'></el-input>
            </el-form-item>
            <el-form-item>
                <div class="operate">
                    <el-button @click="onSubmit('creatAgent')" type="primary" >确认</el-button>
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
    import md5 from 'js-md5'
    import api from '@/api/index'

    export default {
        data() {
            return {
                creatAgent:{
                    uname:'pengkuan',
                    pwd:'123456',
                    phone:'13410079888',
                    name:'测试',
                    level:1,
                    card:25,
                },
                rules:{
                    // uname: [
                    //     {  required: true , validator: this._Util.validateName, trigger: 'blur' }
                    // ],
                    // pwd: [
                    //     { required: true , validator: this._Util.validateTel, trigger: 'blur' }
                    // ],
                    // name:[
                    //     { required: true , validator: this._Util.validatestrCardNum, trigger: 'blur' }
                    // ],
                    // level:[
                    //     { required: true , validator: this._Util.validatestrEmail, trigger: 'blur' }
                    // ],
                    // card:[
                    //     { required: true , validator: this._Util.validatestrEmail, trigger: 'blur' }
                    // ]
                }
            }
        },
        computed:{
            ...mapGetters({
                'agentLevels':'agent/agentLevels',
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
            onSubmit(formName) {
                let self = this
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        const reqData = {
                            'user':{
                                'uname': this.creatAgent.uname,
                                'pwd': md5( String(this.creatAgent.pwd) ),
                                'phone':this.creatAgent.phone,
                                'name':this.creatAgent.name,
                                'level':this.creatAgent.level,
                                'card':this.creatAgent.card
                            }
                        }
                        api.addAgent(reqData).then(res =>{
                            if (res.code != '0') {
                                this.$alert(res.retinfo,"提示")
                                return
                            }
                            this.$message("成功！")
                            self.$router.push({ path: '/index' });
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