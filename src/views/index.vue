<template>
    <div>
        <!-- <anchored1-heading :level="1">测试</anchored1-heading> -->
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
export default {
    name: '',
    data() {
        return {
            bar1: '',
            bar2: '',

        }
    },
    methods: {
        drawBar1(id) {
            this.bar1 = echarts.init(document.getElementById(id))
            this.bar1.setOption({
                title: {
                    text: '世界人口总量',
                    subtext: '数据来自网络',
                    left: "center",
                    // textStyle:{align:'center'}
                },
                tooltip: {
                    trigger: 'axis',

                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: {
                    align: 'right',
                    right: "10",
                    top: "middle",
                    orient: 'vertical',
                    data: ['2011年', '2012年','2013年']
                },
                grid: {
                    left: '3%',
                    right: '15%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    data: ['巴西', '印尼', '美国', '印度', '中国', '法国']
                },
                yAxis: {
                    type: 'value',
                    boundaryGap: [0, 0.01]
                },
                series: [{
                        name: '2011年',
                        type: 'bar',
                        label: {
                            normal: {
                                show: true,
                                position: 'top'
                            }
                        },
                        data: [283, 834, 290, 104, 131, 1635]
                    },
                    {
                        name: '2012年',
                        type: 'bar',
                        label: {
                            normal: {
                                show: true,
                                position: 'top'
                            }
                        },
                        data: [725, 438, 510, 194, 141, 81]
                    },
                    {
                        name: '2013年',
                        barGap:'1%',
                        type: 'bar',
                        label: {
                            normal: {
                                show: true,
                                position: 'top'
                            }
                        },
                        data: [325, 538, 310, 194, 141, 1681]
                    },

                ]
            })
        },
        drawBar2(id) {
            this.bar2 = echarts.init(document.getElementById(id))
            this.bar2.setOption({
                title: {
                    text: '世界人口总量',
                    subtext: '数据来自网络',
                    left: "center",
                    // textStyle:{align:'center'}
                },
                tooltip: {
                    trigger: 'axis',

                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: {
                    align: 'right',
                    right: "10",
                    top: "middle",
                    orient: 'vertical',
                    data: ['2011年']
                },
                grid: {
                    left: '3%',
                    right: '15%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    data: ['巴西', '印尼', '美国', '印度', '中国', '法国']
                },
                yAxis: {
                    type: 'value',
                    boundaryGap: [0, 0.01]
                },
                series: [
                    {
                        name: '2013年',
                        barWidth:'30%',
                        type: 'bar',
                        label: {
                            normal: {
                                show: true,
                                position: 'top'
                            }
                        },
                        data: [325, 538, 310, 194, 141, 1681]
                    },

                ]
            })
        },
        drawBar3(id) {
            this.bar3 = echarts.init(document.getElementById(id))
            this.bar3.setOption({
                title: {
                    text: '世界人口总量',
                    subtext: '数据来自网络',
                    left: "center",
                    // textStyle:{align:'center'}
                },
                tooltip: {
                    trigger: 'axis',

                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: {
                    align: 'right',
                    right: "10",
                    top: "middle",
                    orient: 'vertical',
                    data: ['2011年', '2012年']
                },
                grid: {
                    left: '3%',
                    right: '15%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'value',
                    boundaryGap: [0, 0.01]
                },
                yAxis: {
                    type: 'category',
                    data: ['巴西', '印尼', '美国', '印度', '中国', '法国']
                },
                series: [{
                        name: '2011年',
                        type: 'bar',
                        label: {
                            normal: {
                                show: true,
                                position: 'right'
                            }
                        },
                        data: [183, 234, 290, 104, 131, 635]
                    },
                    {
                        name: '2012年',
                        type: 'bar',
                        barGap:'1%',
                        label: {
                            normal: {
                                show: true,
                                position: 'right'
                            }
                        },
                        data: [325, 438, 310, 194, 141, 1681]
                    },

                ]
            })
        },
        drawBar4(id) {
            this.bar4 = echarts.init(document.getElementById(id))
            this.bar4.setOption({
                title: {
                    text: '世界人口总量',
                    subtext: '数据来自网络',
                    left: "center",
                    // textStyle:{align:'center'}
                },
                tooltip: {
                    trigger: 'axis',

                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: {
                    align: 'right',
                    right: "10",
                    top: "middle",
                    orient: 'vertical',
                    data: ['2013年']
                },
                grid: {
                    left: '3%',
                    right: '15%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    data: ['巴西', '印尼', '美国', '印度', '中国', '法国']
                },
                yAxis: {
                    type: 'value',
                    boundaryGap: [0, 0.01]
                },
                series: [
                    {
                        name: '2013年',
                        type: 'bar',
                        barWidth:'30%',
                        label: {
                            normal: {
                                show: true,
                                position: 'top'
                            }
                        },
                        data: [325, 538, 310, 194, 141, 1681]
                    },

                ]
            })
        },
    },
    //调用
    mounted() {
        // this.$nextTick(()=> {this.drawBar1('bar1')})
        this.drawBar1('bar1')
        this.drawBar2('bar2')
        this.drawBar3('bar3')
        this.drawBar4('bar4')
        
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
