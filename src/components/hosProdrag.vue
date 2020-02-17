<template>
    <div id="leftSider" :style="{width:width +'px',marginTop:margin+'px'}">
        <div class="leftSider_left">
        <div class="leftSider_left_title nannv" >
            <p>{{title}}</p>
        </div>
        <div class="leftSider_left_people"  :class="one" :style="{height:height+'px'}">
               <div class="people_top pone">
                   <p class="small">门诊收费金额</p>
                   <span>35385.54</span>
               </div>
                 <div class="people_top ptwo">
                   <p class="small">药品收费金额</p>
                   <span>25487.65</span>
               </div>
                 <div class="people_top pthree">
                   <p class="small" id="tebie">药占比</p>
                   <span id="tebie1">65.12%</span>
               </div>
               <div class="people_echarts" id="people">

               </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    // 背景颜色的更换 以及  
    name:'Proportion',  //占比组件 圆环的
    props:{  //组件化 修改样式
      title:{
          type:String,
          default:'药占比'
      },
      width:{
          type:[String,Number],
          default:404,
      },
      height:{
          type:[String,Number],
          default:322,
      },
      back:{
        type:String,
        default:'../assets/img/外框@2x.png'
      },
      msg:{
          type:String,
          default:'HHH'
      },
      one:{
        type:String,
        default:'two'
      },
      margin:{
        type:Number,
        default:0,
      }
    },
    data(){
        return{
            name:''
        }
    },
    mounted(){
        this.echart();
    },
    methods:{
        echart(){
           var myChart = this.$echarts.init(document.getElementById('people'));
      var   option = {
            title: {
              text: '65.12%',
              x: 'center',
              y: 'center',
              textStyle: {
                fontWeight: 'normal',
                color: '#00FFFF',
                fontSize: '20'
              }
            },
            tooltip:{
                formatter:'{b}',
                backgroundColor:'#41bcd3',
            }, 
            color: ['rgba(176, 212, 251, 1)'],
            // legend: {
            //   show: true,
            //   itemGap: 2,
            //   data: ['门诊', '药品']
            // },

            series: [{
              name: 'Line 1',
              type: 'pie',
              clockWise: true,
              radius: ['50%', '66%'],
            //   hoverAnimation:true,
              itemStyle: {
                normal: {
                  label: {
                    show: false
                  },
                  labelLine: {
                    show: false
                  }
                }
              },
              hoverAnimation: false,
              data: [{
                value: 35385.54,
                name: '门诊',
                itemStyle: {
                  normal: {
                    color: { // 完成的圆环的颜色
                      colorStops: [{
                        offset: 0,
                        color: '#00D2FF' // 0% 处的颜色
                      }, {
                        offset: 1,
                        color: '#F0FF00' // 100% 处的颜色
                      }]
                    },
                    label: {
                      show: false
                    },
                    labelLine: {
                      show: false
                    }
                  }
                }
              }, {
                name: '药品',
                value: 25487.65,
                itemStyle:{
                    color:'#004A70'
                }
              }]
            }]
        };
              myChart.setOption(option)
        }
            
    },
}
</script>

<style scoped>
.span_left{
    margin-right:20px;
}
.people_echarts{
    width: 306px;height: 306px;
     position: absolute;
    left: 234px;top:10px;;
}
.leftSider_left_people .people_top{display: flex

}
.leftSider_left_people .people_top span{
    width:88px;
    height:22px;
    font-size:30px;
    font-family:Agency FB;
    font-weight:400;
    color:rgba(0,204,255,1);
}
.leftSider_left_people .people_top p{
    margin-right: 25px;
    margin-top: 10px;
    width:90px;
    font-size:12px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(132,149,194,1);
    margin-left: 26px;
}
.pone{
    padding-top: 61px;
}
.ptwo{
    padding-top: 18px
}
.pthree{
  padding-top: 100px;
}
#tebie{
    width:60px;
    height:20px;
    font-size:20px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(136,149,190,1);
}
#tebie1{
    width:88px;
    height:32px;
    font-size:40px;
    font-family:Agency FB;
    font-weight:400;
    color:rgba(99,202,250,1);
    margin-left:  20px;
}
.two{
  /* background: url(../assets/img/外框@2x1.png) no-repeat center; */
  background:linear-gradient(-39deg,rgba(12,116,214,0.1),rgba(19,50,121,0.1));
}
.leftSider_left .leftSider_left_title{
    overflow: hidden;
    width:400px;
    height:46px;
    background: url(../assets/img/外框2@2x.png) no-repeat center;
}
 .leftSider_left .leftSider_left_title p{
    /* width:96px;
    height:16px; */
    font-size:16px;
    font-family:PingFang SC;
    font-weight:400;
    color:rgba(0,204,255,1);
    margin: 12px 0 0 20px;
}
.leftSider_left .leftSider_left_title.nannv{
    margin-top: 20px;
}
.one{
    /* background:url(../assets/img/外框@2x.png) no-repeat center; */
    background:linear-gradient(-39deg,rgba(12,116,214,0.1),rgba(19,50,121,0.1));
   
}
  .leftSider_left  .leftSider_left_people{
    /* /* width:404px;
    height: 322px; */
   
    margin-top: 10px;  
    position: relative;     
}

 
</style>