<template>
    <div>
        <el-row>
            <el-col :span="12">
                <div id="bar1" style="width: 600px;height: 400px;"></div>
            </el-col>
            <el-col :span="12">
                <div id="bar2" style="width: 600px;height: 400px;"></div>
            </el-col>
        </el-row> 
        <br><br>
        <el-row>
            <el-col :span="12">
                <div id="bar3" style="width: 600px;height: 400px;"></div>
            </el-col>
            <el-col :span="12">
                <div id="bar4" style="width: 600px;height: 400px;"></div>
            </el-col>
        </el-row> 
        
    </div>
</template>
<script>
import echarts from 'echarts'
import api from '@/api/index'
import merge from '@/util/merge'
export default {
    name: '',
    data() {
        return {
            useCard:[],//房卡消耗
            mostOnline:[],//最高在线
            newAddUser:[],//新增用户
            loginUser:[],//登录用户
            /**公共数据**/
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid:{
                left: '3%',
                right: '15%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: [] //日期
            },
            yAxis:{
                type: 'value',
                boundaryGap: [0, 0.01]
            },
            legend:{
                align: 'right',
                right: "10",
                top: "middle",
                orient: 'vertical',
                
            },
            series:{
                type: 'bar',
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                }
            },
            bar1: {
                legendData:{data: ['进卡', '代理','玩家']}
            },
             bar3: {
                legendData:{data: ['房卡消耗','当天登录']}
            }
        }
    },
    computed:{
        legend1(){
            return merge({},this.legend,this.bar1.legendData)
        },
        legend3(){
            return merge({},this.legend,this.bar3.legendData)
        },
    },
    methods: {
        async init(){
            // let res = await api.OperateData({})
            // if (res.ret != '0') {
            //     this.$alert(res.retinfo,"提示")
            //     return
            // }
            const list = [
                {
                    date :'12/07',     // 日期
                    card :'28' ,    // 房卡消耗
                    online :'150'  , // 最高在线
                    user:'21' ,    // 新增用户
                    login: '224'    // 登陆用户 
                },{
                    date :'12/08',     // 日期
                    card :'28' ,    // 房卡消耗
                    online :'150'  , // 最高在线
                    user:'30' ,    // 新增用户
                    login: '324'    // 登陆用户 
                },{
                    date :'12/09',     // 日期
                    card :'8' ,    // 房卡消耗
                    online :'250'  , // 最高在线
                    user:'30' ,    // 新增用户
                    login: '86'    // 登陆用户 
                },{
                    date :'12/10',     // 日期
                    card :'28' ,    // 房卡消耗
                    online :'150'  , // 最高在线
                    user:'30' ,    // 新增用户
                    login: '124'    // 登陆用户 
                },{
                    date :'12/11',     // 日期
                    card :'28' ,    // 房卡消耗
                    online :'90'  , // 最高在线
                    user:'30' ,    // 新增用户
                    login: '84'    // 登陆用户 
                },{
                    date :'12/12',     // 日期
                    card :'21' ,    // 房卡消耗
                    online :'115'  , // 最高在线
                    user:'30' ,    // 新增用户
                    login: '34'    // 登陆用户 
                },{
                    date :'12/13',     // 日期
                    card :'28' ,    // 房卡消耗
                    online :'150'  , // 最高在线
                    user:'30' ,    // 新增用户
                    login: '324'    // 登陆用户 
                },
            ]
            list.forEach(item=>{
                this.xAxis.data.push(item.date)
                this.useCard.push(item.card)
                this.mostOnline.push(item.online)
                this.newAddUser.push(item.user)
                this.loginUser.push(item.login )
            })
            this.drawBar1('bar1')
            this.drawBar2('bar2')
            this.drawBar3('bar3')
            this.drawBar4('bar4')
        },
        drawBar1(id) {
            const bar = echarts.init(document.getElementById(id))
            bar.setOption({
                title: {
                    text: '房卡销售',
                    left: "center",
                },
                tooltip:this.tooltip,
                legend: this.legend1,
                grid: this.grid,
                xAxis: this.xAxis,
                yAxis: this.yAxis,
                series: [
                    merge({},this.series,{name:'进卡',data:[483, 834, 290, 104, 131, 1635]}),
                    merge({},this.series,{name:'代理',data:[383, 834, 290, 104, 131, 1635]}),
                    merge({},this.series,{name:'玩家',data:[283, 834, 290, 104, 131, 1635]})
                ]
            })
        },
        drawBar2(id) {
            const bar = echarts.init(document.getElementById(id))
            bar.setOption({
                title: {
                    text: '近七天新玩家注册人数',
                    left: "center",
                },
                tooltip:this.tooltip,
                legend: this.legend,
                grid: this.grid,
                xAxis: this.xAxis,
                yAxis: this.yAxis,
                series: [
                    merge({},this.series,{barWidth:'50%',data:this.newAddUser})
                ]
            })
        },
        drawBar3(id) {
            const bar = echarts.init(document.getElementById(id))
            bar.setOption({
                title: {
                    text: '近七天的房卡消耗和登录玩家',
                    left: "center",
                },
                tooltip: this.tooltip,
                legend: this.legend3,
                grid: this.grid,
                xAxis: this.yAxis,
                yAxis: this.xAxis,
                series: [
                    merge({},this.series,{name:'房卡消耗',data:this.useCard,label:{normal:{position:'right',show:true}}}),
                    merge({},this.series,{name:'当天登录',data:this.loginUser,label:{normal:{position:'right',show:true}}})
                ]
            })
        },
        drawBar4(id) {
            const bar = echarts.init(document.getElementById(id))
            bar.setOption({
                title: {
                    text: '近7天每日在线峰值',
                    left: "center",
                },
                tooltip: this.tooltip,
                legend: this.legend,
                grid: this.grid,
                xAxis: this.xAxis,
                yAxis: this.yAxis,
                series: [
                    merge({},this.series,{barWidth:'50%',data:this.mostOnline})
                ]
            })
        },
    },
    //调用
    mounted() {
        this.init()
    }
}

</script>
<style scoped>
* {
    margin: 0;
    padding: 0;
    list-style: none;
}

</style>
