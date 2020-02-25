<template>
  <div id="outCity">
    <guideBar />
     <Header />
     
            <el-row type="flex" style="background:#061123;margin:0;padding:0">
        <el-col style ='width:25vw;background:#061123'> <dataLogo 
                :dataTitle = 'dataTitle'
             />
             </el-col>
        <el-col  style="width:75vw;background:#061123;margin:0;padding:0" >
            <dataLast 
                :dataShow = 'dataShow'
                :dataYesShow = 'dataYesShow'
            />
        </el-col>
    </el-row>
     <el-row   style="background:#061123;">
          <div class="margin">
            <el-col   style="width:20.8vw;height:64.8vh;margin-left:1.82vw;"><weekContrast 
                  :totalSum = 'totalSum'
                  :chineseMe = 'chineseMe'
            />
            <dragPro  :msg = 'title' 
                    :dragPro = 'dragPro'
            /></el-col>
            <el-col   style='width:36.3vw;height:73.1vh; margin-left:9.6vw;margin-right:9.6vw'><centerSider
                       @sendNewdate = 'getChoiceData'
                       :Days = 'time1'
            /></el-col>
            <el-col style="width:20.8vw;height:73.1vh;overflow:hidden;">
              <singleLine :titlesin='titlesin' 
                          :dataTime= 'dataTimeSin'
                          :dataNumber = 'dataNumberSin'
                          :maxSin = 'maxSin'
                          :intervalSin = 'intervalSin'
            /><doubleLine 
                  :dataNumberSin = 'dataNumberSin'
                  :dataNumberDou = 'dataNumberDou'
            /></el-col>
          </div>
     </el-row> 
  </div> 
</template>
<script>
import guideBar from '../components/otherComp/guideBar'
import Header from '../components/otherComp/Header'
import dataLogo from '../components/dataShow/dataLogo'
import dataLast from '../components/dataShow/dataLast'
import dragPro from '../components/leftComp/dragPro'
import weekContrast from '../components/leftComp/weekContrast'
import singleLine from  '../components/rightComp/singleLine'
import doubleLine from '../components/rightComp/doubleLine'
import centerSider from '../components/otherComp/centerSider'
import {getSingledata, request,handleData,getMonth} from '../network/request.js'  // 引入請求的函數 
import {numTime,monthTime} from '../network/time.js'
export default {
  name:'outPatient',
   components:{
       Header,dragPro,centerSider,singleLine,weekContrast,doubleLine,guideBar,dataLogo,dataLast
  },
   data(){
    return{
        title:'药占比',
        test:'',
        titlesin:'2019年门诊次数汇总',
        dataTimeSin:[],    //时间的数量
        dataNumberSin:[],  //每个月的数量
        dataTitle:'丽水市门诊数据表',
        maxSin:1200000,
        intervalSin:200000,
        dragPro:[],  //门诊收费金额 药品收费金额  药占比
        dataShow:[], // 门诊人数 ， 处方总数 ， 门诊电子病历 ，门诊收费金额
        dataYesShow:[], // 同上哈
        getNewdate:[],
        Days:6,
        dataTimeDou:['1','2','3','4','5','6','7','8','9','10','11','12'],
        dataNumberDou:[],
        time1:200,   // 获取的时间1  数字越大 代表的时间开始越早
        time2:60,   // 获取的时间2   
        lastMonth:30, // 自动获取上个月的时间
        totalSum:[],
        chineseMe:[],
    }
  },
  created(){
         this.getHomedata()
  },
  watch:{
      getNewdate:{
          handler(newdata){
              // console.log(newdata,'数据监听里面的data首页') 
              //  再次触发 函数 并修改传入的参数 得到新的数据 最后进行渲染 
              //  参数直接传入进行 不需要进行修改   拿到俩个日期直接进行天数的转换 
              var one = newdata[0];
              var two = newdata[1];
              // console.log(one,two); //将俩个时间转换为 天数 并进行计算  
              var now = new Date();  // 设置现在的时间
              one = new Date(one.replace(/-/g, "/"));   //转换第一次的时间
              two = new Date(two.replace(/-/g, "/"));   //转换第二次的时间
              var getdays1 = now - one;        // 
              var getdays2 = now - two;
              var time1 = parseInt(getdays1 / (1000 * 60 * 60 * 24));   // 得到第一天相隔的时间
              var time2 = parseInt(getdays2 / (1000 * 60 * 60 * 24));   //得到第二天相隔的时间 
              // console.log(time1,time2)     // 125 84 
              this.time2 = time2;
              this.time1 = time1;  
              this.chineseMe = [];
              this.totalSum = []; 
              this.getHomedata();   
          }
      },
  },
  mounted(){
     this.getFiexdata();
  },
  methods:{
         //获取选择的时间的函数 绑定监听
      getChoiceData(data){
            // console.log(data,'这个首页页面里面')  //拿到子传过来的数据
            this.getNewdate = data; 
        },
      //书写跳转的函数
      makeDate(dayNumber){
        var day1 = new Date();
            day1.setTime(day1.getTime()-24*60*60*1000*dayNumber);
            function conver(s) {
              return s < 10 ? '0' + s : s;
            }
             if(dayNumber == 30){
                var s2  = day1.getFullYear()+"-" + conver((day1.getMonth()+1)) + "-" ;
                return s2;
                }
               var s1 = day1.getFullYear()+"-" + conver((day1.getMonth()+1)) + "-" + conver(day1.getDate());
              return s1;    
      }, 
    getHomedata(){    //请求动态时间的函数
          // 传入 数字返回 数据
          console.log(this.time1,'time1')
      getSingledata({     
        url:'/api',params:{
            StateTime:numTime(this.time1),
            EndTime:numTime(this.time1),
        }
      }).then(res=>{
          console.log(res.data.data[0].data,'请求动态的数据')
          // hhh 5号为 药占比  6号为 门诊收费金额  hhh0 hhh1
          //  0 门诊人次 1 当年的门诊人次 2 处方总数 3 中医处方 4 门诊电子病历 5 药占比 6 门诊收费金额  
          var hhh =  handleData(res.data.data[0].data,[5,6,0,2,4])
          var dragMoney = (hhh[1].门诊收费金额/hhh[0].药占比).toFixed(2)   //药品收费金额
          var dragPro = hhh[0].药占比.toFixed(2)      //药占比 
          var outPatMoney = hhh[1].门诊收费金额.toFixed(2);
          this.dragPro = [outPatMoney,dragMoney,dragPro]
          var numPatient = hhh[2].门诊人次
          var tolPrescription = hhh[3].处方总数
          var electronicPatient = hhh[4].门诊电子病历
            console.log(hhh,'123')
          // 门诊人数 ， 处方总数 ， 门诊电子病历 ，门诊收费金额 
          this.dataShow = [numPatient,tolPrescription,electronicPatient,dragMoney]

      })
        getSingledata({     // 请求上个月的数据
        url:'/api',params:{
            StateTime:monthTime(this.time1)[0],
            EndTime:monthTime(this.time1)[1],
        }
      }).then(res=>{
          console.log(res.data.data[0].data,'上月的总数的数据')
        //  0 门诊人次 1 当年的门诊人次 2 处方总数 3 中医处方 4 门诊电子病历 5 药占比 6 门诊收费金额  
            var hhh =  handleData(res.data.data[0].data,[0,2,4,6])
            console.log(hhh,'上个月的数据总数');
            var numPatient = hhh[0].门诊人次;
            var tolPrescription = hhh[1].处方总数
            var electronicPatient = hhh[2].门诊电子病历
            var outPatMoney = hhh[3].门诊收费金额.toFixed(2);
            this.dataYesShow = [numPatient,tolPrescription,electronicPatient,outPatMoney]

      })

      // 请求 前四周的 数据
      getMonth(this.time1).then(res=>{
        console.log(res,'这是前四周的数据')
        var tolPrescription0 = handleData(res[0],[2])[0].处方总数
        var tolPrescription1 = handleData(res[1],[2])[0].处方总数
        var tolPrescription2 = handleData(res[2],[2])[0].处方总数
        var tolPrescription3 = handleData(res[3],[2])[0].处方总数
        var traditionalPrescription0 = handleData(res[0],[3])[0].中医处方数量
        var traditionalPrescription1 = handleData(res[1],[3])[0].中医处方数量
        var traditionalPrescription2 = handleData(res[2],[3])[0].中医处方数量
        var traditionalPrescription3 = handleData(res[3],[3])[0].中医处方数量
        this.totalSum = [tolPrescription0,tolPrescription1,tolPrescription2,tolPrescription3]
        this.chineseMe = [traditionalPrescription0,traditionalPrescription1,traditionalPrescription2,traditionalPrescription3]
      })
      },
      
      getFiexdata(){    //请求18年和19年的 门诊就医数量
          var   StateTime = '2019-01-01'
          var   EndTime = '2019-12-31' 
          const  url =  '/api'
          getSingledata({url,params:{StateTime,EndTime}}).then(res=>{
              var hhh  =    handleData(res.data.data[0].data,[1]);  
               hhh[0].forEach((item,index) => {
                     this.dataNumberSin.push(item.当月门诊就医数量)  // 19年的数据
                     this.dataTimeSin.push(item.月份)               //19年的月份
               }); 
          })  
          var   StateTime = '2018-01-01'
          var   EndTime = '2018-12-31' 
          getSingledata({url,params:{StateTime,EndTime}}).then(res=>{
                var hhh =  handleData(res.data.data[0].data,[1]);
                  hhh[0].forEach((item,index) => {
                     this.dataNumberDou.push(item.当月门诊就医数量)    //18年的数据
                  });
                 }
              )
      }
  },
 
}
</script>

<style scoped>
  .margin{
  height: 73.7vh;
}   
  .el-col{
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 0 0 10px 0;
    background-color: #f9fafc;
  }
  .dataShow{
      display: flex;
  }
</style>