<template>
    <div id="single">
             <div class="center_right_title">
                <p>{{titledouble}}</p>
            </div>
            <div class="center_right_two" :style="{width:width+'vw',height:height+'vh'}">
                <div id="bxt"  :style="{width:width+'vw',height:height+'vh'}" ></div>   
            </div> 
    </div>
</template>
<script>
export default {
    name:'doubleLine',
    props:{
        width:{
            type:Number,
            default:20.2,
        },
        height:{
            type:Number,
            default:28.8,
        },
        one:{
            type:String,
            default:'one'
        },
        dataNumberSin:{
            type:Array,
            default:[]
        },
         dataNumberDou:{
            type:Array,
            default:[]
        },
        maxDou:{
            type:Number,
            default:1200000
        },
        intervalDou:{
        type:Number,
        default:200000
        },
        titledouble:{
            type:String,
            default:'2018-2019门诊收费金额对比'
        }

    },
    data(){
            return{
                 msg:'2018-2019门诊收费金额对比'
            }
    },
     computed:{
      'sum':function(){
          return [this.dataNumberDou,this.dataNumberSin] //监听 多个数值的变化
      }
    },
    watch:{
        sum:{
            handler(a){
                this.secShow()
            }
        }
    },
    mounted(){
        
    },
    mounted(){
            console.log(this.dataNumberSin,'单线的');
            console.log(this.dataNumberDou,'双线的');
            // this.secShow()
    },
    methods:{
            secShow(){
                    var secChart =  this.$echarts.init(document.getElementById('bxt'));
                        var charts = {
                            unit: '(元)',
                            names: ['18年门诊', '19年门诊'],  //设置数据名字

                            lineX: ['1','2','3','4','5','6','7','8','9','10','11','12'],
                            //设置数据拿到11月和12月的数据
                            value: [
                                this.dataNumberDou,
                                this.dataNumberSin
                              ]
                      }
                    var color = ['#EB6100', '#32B16C']
                    var lineY = []

                    for (var i = 0; i < charts.names.length; i++) {
                        var x = i
                        if (x > color.length - 1) {
                            x = color.length - 1
                        }
                        var data = {
                            name: charts.names[i],
                            type: 'line',
                            color: color[x],
                            smooth: true,
                            symbol: 'circle',
                            symbolSize: 5,
                            data: charts.value[i]
                        }
                        lineY.push(data)
                     }

                    var option = {
                         backgroundColor: 'rgba(12,116,214,0.1)',  //背景颜色
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {    //图例说明
                            data: charts.names,
                            align:'left',
                            top: 12,
                            right:10,
                            textStyle: {
                                fontSize: 14,
                                color: '#03B0D8'
                            },
                            // right: '4%'
                        },
                        grid: {
                            top: '18%',
                            left: '4%',
                            right: '4%',
                            bottom: '8%',
                            containLabel: true  
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: false,
                            data: charts.lineX,
                            axisLabel: {
                                textStyle: {
                                    color: '#03B0D8'
                                },
                                formatter: function(params) {
                                    return params.split(' ')[0] 
                                }
                            }
                        },
                        yAxis: {
                            name: charts.unit,
                            type: 'value',
                            nameTextStyle:{
                                color:'#03B0D8',
                                align:'right'
                            },
                                // nameLocaltion:'end',
                            nameGap:20,
                            min:0,
                            max:this.maxDou,
                            interval:this.intervalDou,
                            axisLabel: {
                                formatter: '{value}',
                                textStyle: {
                                    color: '#03B0D8'
                                }
                            },
                            splitLine: {
                                lineStyle: {
                                    color: '#0E3254'
                                }
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#152E46'
                                }
                            }
                        },
                    series:  lineY

                     }  // option  结束
                    setInterval(() => {
                             secChart.setOption({
                            legend: {
                                selected: {
                                '11月': false,
                                '12月': false
                                }
                            }
                          })
                             secChart.setOption({
                             legend: {
                                selected: {
                                '11月': true,
                                '12月': true
                                }
                            }
                        })
                        },5000)
                    secChart.setOption(option)
                        }
                        
                }  //函数结束
}
</script>
<style scoped>
 .center_right_title{
    overflow: hidden;
    width:20.8vw;
    height:4.2vh;
    background: url(../../assets/img/外框2@2x.png) no-repeat center;
    background-size: cover;
    margin-top: 1.85vh;
}
  .one{margin-top: 20px;}
  .two{
      margin-top: 50px;
  }
 .center_right_title p{
    margin-top: 1vh;
    font-size:1rem;
    font-family:PingFang SC;
    font-weight:400;text-indent: 1.14vw;
    color:rgba(0,204,255,1);
}
 .center_right_green{
    margin-top: 10px;
    width:400px;
    height:318px;
    background:linear-gradient(-39deg,rgba(12,116,214,0.1),rgba(19,50,121,0.1));
    border:1px solid;
    border-image:radial-gradient(circle, rgba(13, 54, 78, 0.35), rgba(3, 110, 154, 0.35)) 1 1;
}
.center_right_two{
    position: relative;
    border:1px solid;
    margin-top: .92vh;
    border-image:radial-gradient(circle, rgba(13, 54, 78, 0.35), rgba(3, 110, 154, 0.35)) 1 1;
}
.center_right_green{
    margin-top: 10px;
    width:400px;
    height:318px;
    background:linear-gradient(-39deg,rgba(12,116,214,0.1),rgba(19,50,121,0.1));
    border:1px solid;
    border-image:radial-gradient(circle, rgba(13, 54, 78, 0.35), rgba(3, 110, 154, 0.35)) 1 1;
}
</style>