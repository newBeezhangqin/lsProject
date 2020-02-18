<template>
  <div id="outCity">
    <guideBar />
     <Header />
       <dataShow :test='test'
            :dataShow = 'dataShow'
            :dataYesShow = 'dataYesShow'
       />
     <el-row   style="background:#061123;">
          <div class="margin">
            <el-col   style="width:20.8vw;height:64.8vh;margin-left:1.82vw;"><record 
                  :totalSum = 'totalSum'
                  :chineseMe = 'chineseMe'
            />
            <Proportion  :msg = 'title' 
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
import guideBar from '../components/guideBar'
import Header from '../components/Header'
import dataShow from '../components/dataShow'
import Proportion from '../components/Proportion'
import singleLine from  '../components/singleLine'
import centerSider from '../components/centerSider'
import record from '../components/recordsConsumption'
import doubleLine from '../components/doubleLine'
export default {
  name:'outCity',
   components:{
       Header,dataShow,Proportion,centerSider,singleLine,record,doubleLine,guideBar
  },
   data(){
    return{
        title:'药占比',
        test:'',
        titlesin:'2019年门诊次数汇总',
        dataTimeSin:[],    //时间的数量
        dataNumberSin:[],  //每个月的数量
        maxSin:1200000,
        intervalSin:200000,
        dragPro:[],  //门诊收费金额 药品收费金额  药占比
        dataShow:[], // 门诊人数 ， 处方总数 ， 门诊电子病历 ，门诊收费金额
        dataYesShow:[], // 同上哈
        getNewdate:[],
        Days:6,
        dataTimeDou:['1','2','3','4','5','6','7','8','9','10','11','12'],
        dataNumberDou:[],
        time1:20,   // 获取的时间1  数字越大 代表的时间开始越早
        time2:6,   // 获取的时间2   
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
              console.log(newdata,'数据监听里面的data首页') 
              //  再次触发 函数 并修改传入的参数 得到新的数据 最后进行渲染 
              //  参数直接传入进行 不需要进行修改   拿到俩个日期直接进行天数的转换 
              var one = newdata[0];
              var two = newdata[1];
              console.log(one,two); //将俩个时间转换为 天数 并进行计算  
              var now = new Date();  // 设置现在的时间
              one = new Date(one.replace(/-/g, "/"));   //转换第一次的时间
              two = new Date(two.replace(/-/g, "/"));   //转换第二次的时间
              var getdays1 = now - one;        // 
              var getdays2 = now - two;
              var time1 = parseInt(getdays1 / (1000 * 60 * 60 * 24));   // 得到第一天相隔的时间
              var time2 = parseInt(getdays2 / (1000 * 60 * 60 * 24));   //得到第二天相隔的时间 
              console.log(time1,time2)     // 125 84
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
            console.log(data,'这个首页页面里面')  //拿到子传过来的数据
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
           // 1 是昨天的数据  时间  2 为前天的时间
      }, 
      getHomedata(){    //请求动态时间的函数
        // 传值的时候 需要进行判断   
          axios({
             url:'/api',
             params:{
                  StateTime:this.makeDate(this.time1), //当前日期减去三天 为当前天数
                  EndTime:this.makeDate(this.time1),  
                  // StateTime:'2019-12-01', //当前日期减去三天 为当前天数
                  // EndTime:'2019-12-02', 
             }
          }).then(res=>{
            console.log(res.data.data[0].data,'首页昨天的数据')

              var newData = res.data.data[0].data
              var dragPro = res.data.data[0].data;
            //  console.log(dragPro[5].SelectItmeList[0].药占比,'药占比')
            //  console.log(dragPro[6].SelectItmeList[0].门诊收费金额,'门诊收费金额')
          
             var  yaop = dragPro[6].SelectItmeList[0].门诊收费金额/ dragPro[5].SelectItmeList[0].药占比 
             var hhh = yaop ? yaop.toFixed(2)  : ''
             var Pro = dragPro[5].SelectItmeList[0].药占比 ? dragPro[5].SelectItmeList[0].药占比.toFixed(2) +'%' : '';
            //  console.log(yaop,'药品')
            var  money = dragPro[6].SelectItmeList[0].门诊收费金额 ? dragPro[6].SelectItmeList[0].门诊收费金额.toFixed(2): '';
             this.dragPro = [money,hhh,Pro]
                console.log(newData[0].SelectItmeList[0].门诊人次,'昨天门诊人次');
                console.log(newData[2].SelectItmeList[0].处方总数,'昨天处方总数'); 
                console.log(newData[4].SelectItmeList[0].门诊电子病历,'昨天电子病历');
                console.log(newData[6].SelectItmeList[0].门诊收费金额,'昨天门诊收费金额');   // 判断下门诊收费金额  有就fixed  没有就空
                var outPatinet = newData[6].SelectItmeList[0].门诊收费金额 ?  newData[6].SelectItmeList[0].门诊收费金额.toFixed(2) : ' '
                this.dataShow = [newData[0].SelectItmeList[0].门诊人次,newData[2].SelectItmeList[0].处方总数,newData[4].SelectItmeList[0].门诊电子病历,outPatinet]
                console.log(this.dataShow)
          })
          axios({
              url:'/api',      //请求上个月的数据
              params:{
                  StateTime:this.makeDate(30+this.time1)+'01',
                  EndTime:this.makeDate(this.time1)+'30',
              }
          }).then(res=>{
            console.log(res.data.data[0].data,'上个月的数据')
            var newData = res.data.data[0].data
                console.log(newData[0].SelectItmeList[0].门诊人次,'上个月门诊人次');
                console.log(newData[2].SelectItmeList[0].处方总数,'上个月处方总数');
                console.log(newData[4].SelectItmeList[0].门诊电子病历,'上个月电子病历');
                console.log(newData[6].SelectItmeList[0].门诊收费金额,'上个月门诊收费金额');
            this.dataYesShow = [newData[0].SelectItmeList[0].门诊人次,newData[2].SelectItmeList[0].处方总数,newData[4].SelectItmeList[0].门诊电子病历,newData[6].SelectItmeList[0].门诊收费金额.toFixed(2)]
          })

         axios({  //请求当前的前一周
                url:'/api',
                params:{
                  StateTime:this.makeDate(this.time1+7),
                  EndTime:this.makeDate(this.time1),
                }
         }).then(
           res=>{
                //  console.log(res.data.data[0].data,'首页上一周的数据') // 需要的数据为处方总量和 中医处方
                   var newData = res.data.data[0].data
                   console.log(newData[2].SelectItmeList[0].处方总数,'上一周处方总数');
                    console.log(newData[3].SelectItmeList[0].中医处方数量,'上一周处方总量');
                   this.totalSum.push(newData[2].SelectItmeList[0].处方总数);
                   this.chineseMe.push(newData[3].SelectItmeList[0].中医处方数量);
           }
         )
          axios({  //请求当前的 前二周 
                url:'/api',
                params:{
                  StateTime:this.makeDate(this.time1+14),
                  EndTime:this.makeDate(this.time1+7),
                }
         }).then(
           res=>{
                //  console.log(res.data.data[0].data,'首页上二周的数据') // 需要的数据为处方总量和 中医处方
                   var newData = res.data.data[0].data
                  console.log(newData[2].SelectItmeList[0].处方总数,'上二周处方总数');
                  console.log(newData[3].SelectItmeList[0].中医处方数量,'上二周处方总量');
                   this.totalSum.push(newData[2].SelectItmeList[0].处方总数);
                   this.chineseMe.push(newData[3].SelectItmeList[0].中医处方数量);
                   axios({  // 前三周 
                url:'/api',
                params:{
                  StateTime:this.makeDate(this.time1+21),
                  EndTime:this.makeDate(this.time1+14),
                }
         }).then(
           res=>{
                //  console.log(res.data.data[0].data,'首页上三周的数据') // 需要的数据为处方总量和 中医处方
                   var newData = res.data.data[0].data
                    console.log(newData[2].SelectItmeList[0].处方总数,'上三周处方总数');
                   console.log(newData[3].SelectItmeList[0].中医处方数量,'上三周处方总量');
                   this.totalSum.push(newData[2].SelectItmeList[0].处方总数);
                   this.chineseMe.push(newData[3].SelectItmeList[0].中医处方数量);


                    axios({  // 前四周
                url:'/api',
                params:{
                  StateTime:this.makeDate(this.time1+28),
                  EndTime:this.makeDate(this.time1+21),
                }
         }).then(
           res=>{
                  // console.log(res.data.data[0].data,'首页上四周的数据') // 需要的数据为处方总量和 中医处方
                  var newData = res.data.data[0].data
                  console.log(newData[2].SelectItmeList[0].处方总数,'上四周处方总数');
                  console.log(newData[3].SelectItmeList[0].中医处方数量,'上四周处方总量');
                   this.totalSum.push(newData[2].SelectItmeList[0].处方总数);
                   this.chineseMe.push(newData[3].SelectItmeList[0].中医处方数量);
                   console.log(this.chineseMe,'中医处方总量')
                   console.log(this.totalSum,'处方总量')
           }
         )
           }
         )

           }
         )


















      },
      
      getFiexdata(){
            axios({    // 请求去年的数据
            url:'/api',
            params:{
              StateTime:'2019-01-01',
              EndTime:'2019-12-31'
            }
          }).then(res=>{
            console.log(res.data.data[0].data,'首页去年的数据')
            var newData = res.data.data[0].data;
            // console.log(newData[1].SelectItmeList,'这个是全年的门诊')
            // 处理数据  将所有的年份和 数据全部塞进一个 数组里面
            for(var i =0;i<newData[1].SelectItmeList.length;i++){
              this.dataTimeSin.push(newData[1].SelectItmeList[i].月份)
              this.dataNumberSin.push(newData[1].SelectItmeList[i].当月门诊就医数量)
            }
            // 提取药占比 和 门诊收费金额的总数 并处理 
         
          })
          axios({      //前年的数据
            url:'/api',
            params:{
              StateTime:'2018-01-01',
              EndTime:'2018-12-31'
            }
          }).then(res=>{
                 console.log(res.data.data[0].data,'前年的数据')
                 var newData = res.data.data[0].data
                   for(var i =0;i<newData[1].SelectItmeList.length;i++){
                      this.dataNumberDou.push(newData[1].SelectItmeList[i].当月门诊就医数量)
                     }
               console.log(this.dataNumberDou,'前年的数据')
          })
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
</style>