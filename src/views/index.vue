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
            /**公共数据**/
            date: ['12/07', '12/08', '12/09', '12/10', '12/11', '12/12'],
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
                legendData:{data: ['房卡消耗','当天消耗']}
            }
        }
    },
    computed:{
        legend1(){
            return merge({},this.legend,this.bar1.legendData)
        },
        legend3(){
            let obj = {}
            merge(obj,this.legend,this.bar3.legendData)
            return obj
        },
    },
    methods: {
        async init(){
            // let res = await api.OperateData({})
            // if (res.ret != '0') {
            //     this.$alert(res.retinfo,"提示")
            //     return
            // }
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
                xAxis: {
                    type: 'category',
                    data: this.date
                },
                yAxis: {
                    type: 'value',
                    boundaryGap: [0, 0.01]
                },
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
                xAxis: {
                    type: 'category',
                    data: this.date
                },
                yAxis: {
                    type: 'value',
                    boundaryGap: [0, 0.01]
                },
                series: [
                    merge({},this.series,{barWidth:'30%',data:[483, 834, 290, 104, 131, 1635]})
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
                tooltip: {
                    trigger: 'axis',

                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: this.legend3,
                grid: this.grid,
                xAxis: {
                    type: 'value',
                    boundaryGap: [0, 0.01]
                },
                yAxis: {
                    type: 'category',
                    data: this.date
                },
                series: [
                    merge({},this.series,{name:'房卡消耗',data:[183, 834, 290, 104, 131, 1635],label:{normal:{position:'right'}}}),
                    merge({},this.series,{name:'当天登录',data:[183, 834, 290, 104, 131, 1635],label:{normal:{position:'right'}}})
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
                xAxis: {
                    type: 'category',
                    data: this.date
                },
                yAxis: {
                    type: 'value',
                    boundaryGap: [0, 0.01]
                },
                series: [
                    merge({},this.series,{barWidth:'30%',data:[483, 834, 290, 104, 131, 1635]})
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
