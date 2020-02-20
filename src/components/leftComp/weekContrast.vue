<template>
    <div id="record">
        <div class="leftSider_left_title">
            <p>{{recordsTitle}}</p>
        </div>
        <div class="leftSider_left_info" id="histogram">
           
        </div> 
    </div>
</template>

<script>
export default {
    name:'weekConstrast', 
    props:{
        chineseMe:{
            type:Array,
            default:[]
        },
        totalSum:{
            type:Array,
            default:[]
        },
        maxRec:{
            type:Number,
            default:350000
        },
        intervalRec:{
            type:Number,
            default:50000,
        },
        recordsTitle:{
            type:String,
            default:'四周处方数量对比'
        }
    },
      computed:{
      'sum':function(){
          return [this.chineseMe,this.totalSum] //监听 多个数值的变化
      }
    },
    watch:{
        sum:{
             handler(){
                      this.showHistogarm()
             }
        }
    },
    methods:{
       showHistogarm(){
           var myChart = this.$echarts.init(document.getElementById('histogram'));
             var   option = {
                    backgroundColor: 'rgba(12,116,214,0.1)',
                    tooltip: {
                        trigger: 'axis',
                        // axisPointer: {   //校准线
                        //     type: 'cross',
                        //     crossStyle: {
                        //         color: 'red'
                        //     }
                        // }
                    },
                      grid: {    //控制大小的东西
                                 top: '19%',
                                left: '4%',
                                right: '4%',
                                bottom: '8%',
                                containLabel: true  
                            },
                    // toolbox: {
                    //     feature: {
                            // dataView: {show: true, readOnly: false},
                            // magicType: {show: true, type: ['line', 'bar']},
                            // restore: {show: true},
                            // saveAsImage: {show: true}
                    //     }
                    // },
                    legend: {
                         data: ['处方总量', '中医处方'],
                         align: 'left',
                         top: 15,
                         right:20,
                         textStyle: {
                            color: "#03B0D8"
                          },
                         itemWidth: 35,
                         itemHeight: 13,
                         itemGap: 35
                      },
                    xAxis: [
                        {
                            type: 'category',
                            data: ['前一周','前二周','前三周','前四周'],
                            axisPointer: {
                                type: 'shadow'
                            },
                            axisLabel:{
                                interval:0,//横轴信息全部显示
                                // rotate:30,//度角倾斜显示
                                textStyle:{
                                    color:'#03B0D8'
                                }
                            },
                            splitLine: {
                                show: true, 
                                //  改变轴线颜色
                                lineStyle: {
                                    // 使用深浅的间隔色
                                    color: '#0E3254'
                                },                          
                        },
                        axisLine:{
                            lineStyle:{
                                color:'#0E3254',
                                  width:2,   //这里是坐标轴的宽度,可以去掉
                            }
                        }
                    },     
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            name: '(人次)',
                            nameTextStyle:{
                                color:'#03B0D8',
                                align:'right'
                            },
                            // nameLocaltion:'start',
                            nameGap:18,
                            min: 0,
                            max: this.maxRec,
                            interval: this.intervalRec,                            
                            axisLabel: {
                                formatter: '{value}',
                                textStyle:{
                                    color:'#03B0D8'
                                }
                            },
                            splitLine: {
                                show: true, 
                                //  改变轴线颜色
                                lineStyle: {
                                    // 使用深浅的间隔色
                                    color: '#0E3254'
                                }    
                                                        
                        },
                        axisLine:{
                            lineStyle:{
                                color:'#0E3254',
                                  width:3,   //这里是坐标轴的宽度,可以去掉
                            }
                        }
                    },       
                      
                    ],
                    series: [
                        {
                            name:'处方总量',
                            type:'bar',
                            data:this.totalSum, //处方总量的对比 前一周的 第二周的 第三周的
                            itemStyle:{
                                normal:{
                                    color:'#08D3F7'
                                }
                            }
                        },
                        {
                            name:'中医处方',
                            type:'bar',
                            data:this.chineseMe,  // 中医处方的对比
                            itemStyle:{
                                normal:{
                                    color:'#9CEF59'
                                }
                            }
                        }
                    ]
            };
            myChart.setOption(option)
    
       }
    },
    mounted(){
        //  this.showHistogarm()
    },
   }
</script>

<style scoped>
 .leftSider_left_title{
    overflow: hidden;
    width:20.8vw;
    height:4.25vh;
    /* background:linear-gradient(90deg,rgba(2,89,130,0.29) 0%,rgba(3,96,140,0) 100%); */
    background: url(../../assets/img/外框2@2x.png) no-repeat center;
    background-size:  cover;
}
 .leftSider_left_title p{
    /* width:96px;
    height:16px; */
    font-size:1rem;
    font-family:PingFang SC;
    font-weight:400;
    color:rgba(0,204,255,1);
    margin: 1.1vh 0 0 1.04vw;
}
.leftSider_left_info{
    margin-top: 1vh;
     width:20.8vw;
    height:29.4vh;
    border:1px solid;
    border-image:radial-gradient(circle, rgba(13, 54, 78, 0.35), rgba(3, 110, 154, 0.35)) 1 1;
    overflow: hidden;
}
</style>