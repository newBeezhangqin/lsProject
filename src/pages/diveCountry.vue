<template>
  <div id="outCity">
     <Header  />
       <el-row type="flex" >
        <el-col style ='width:25vw'> <dataLogo 
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
  <el-row  style="background:#061123;">
        <div class="test">
             <el-col   style="width:20.8vw;height:64.8vh;margin-left:1.82vw;"><weekContrast
                  :totalSum = 'totalSum'
                  :chineseMe = 'chineseMe'
                  :maxRec= 'maxRec'
                  :intervalRec = 'intervalRec'
            />
            <dragPro  :msg = 'title' 
                         :dragPro = 'dragPro'
             /></el-col>
          <el-col  style='width:36.3vw;height:73.1vh; margin-left:9.6vw;margin-right:9.6vw'><centerSider  :nameCountry = 'nameCountry' 
                @sendNewdate = 'getChoiceData'
                :Days='time1'
            /></el-col>
                  <!-- 右边栏的东西哈 -->
            <el-col  style="width:20.8vw;height:73.1vh;overflow:hidden;">
            <singleLine 
               :dataTime= 'dataTimeSin'
               :dataNumber = 'dataNumberSin'
                :maxSin = 'maxSin'
                :intervalSin = 'intervalSin'
            />
             <doubleLine 
                  :dataNumberSin = 'dataNumberSin'
                  :dataNumberDou = 'dataNumberDou'
                  :maxDou = 'maxDou'
                  :intervalDou = 'intervalDou'
            /> 
            </el-col> 
            </div>
     </el-row> 
  </div>
</template>
<script>
import Header from '../components/otherComp/Header'
import dataLogo from '../components/dataShow/dataLogo'
import dataLast from '../components/dataShow/dataLast'
import dragPro from '../components/leftComp/dragPro'
import weekContrast from '../components/leftComp/weekContrast'
import centerSider from '../components/otherComp/centerSider'
import singleLine from  '../components/rightComp/singleLine'
import doubleLine from  '../components/rightComp/doubleLine'
export default {
  name:'diveCountry',
   components:{
       Header,dataLogo,dragPro,centerSider,singleLine,weekContrast,doubleLine,dataLast
  },
   data(){
    return{
        title:'药占比',
        nameCountry:this.$route.query.name,
        nameCode : this.$route.query.code,
        getNewdate:'',
         dataTimeSin:[],    //时间的数量
        dataNumberSin:[],
        maxSin:200000,
        intervalSin:50000,
        dragPro:[],
        dataTitle:this.$route.query.name +'门诊数据表',
        dataShow:[],
        dataYesShow:[],
        Days:7,
        dataNumberDou:[],
        maxDou:200000,
        intervalDou:50000,
        time1:200,   // 获取的时间1  数字越大 代表的时间开始越早
        time2:6,   // 获取的时间2   
        lastMonth:30, // 自动获取上个月的时间
        totalSum:[],
        chineseMe:[],
        maxRec:60000,
        intervalRec:10000,
       
    }
  },
  methods:{
            makeDate(dayNumber){    //获取时间的函数
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
          //页面获取数据
          getCountryData(){
              axios({     //获取前三天的数据
                url:'/api',
                  params:{  
                    StateTime:this.makeDate(this.time1), //当前日期减去三天 为当前天数
                    EndTime:this.makeDate(this.time1),  
                    City:this.nameCode
                }
              }).then(res=>{
                        console.log(res.data.data[0].data,'县级昨天的数据')
                var newData = res.data.data[0].data
                console.log(newData[0].SelectItmeList[0].门诊人次,'县级昨天门诊人次');
                console.log(newData[2].SelectItmeList[0].处方总数,'县级昨天处方总数');
                console.log(newData[4].SelectItmeList[0].门诊电子病历,'县级昨天电子病历');
                console.log(newData[6].SelectItmeList[0].门诊收费金额,'县级昨天门诊收费金额');
                 var outPatinet = newData[6].SelectItmeList[0].门诊收费金额 ?  newData[6].SelectItmeList[0].门诊收费金额.toFixed(2) : ' '
                this.dataShow = [newData[0].SelectItmeList[0].门诊人次,newData[2].SelectItmeList[0].处方总数,newData[4].SelectItmeList[0].门诊电子病历,outPatinet]
                console.log(this.dataShow)
                 var dragPro = res.data.data[0].data;
                  console.log(dragPro[5].SelectItmeList[0].药占比,'药占比')
                  console.log(dragPro[6].SelectItmeList[0].门诊收费金额,'门诊收费金额')
                  //药品收费金额
                    var  yaop = dragPro[6].SelectItmeList[0].门诊收费金额/ dragPro[5].SelectItmeList[0].药占比;   
                  var hhh = yaop ? yaop.toFixed(2)  : ''
                   var Pro = dragPro[5].SelectItmeList[0].药占比 ? dragPro[5].SelectItmeList[0].药占比.toFixed(2) +'%' : '';
            //  console.log(yaop,'药品')
                   var  money = dragPro[6].SelectItmeList[0].门诊收费金额 ? dragPro[6].SelectItmeList[0].门诊收费金额.toFixed(2): '';
                    this.dragPro = [money,hhh,Pro]
              })
              axios({
                url:'/api',
                 params:{  
                     StateTime:this.makeDate(30+this.time1)+'01',
                     EndTime:this.makeDate(this.time1)+'30', 
                     City:this.nameCode
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
             //书写请求前四周的数据
              axios({  //请求当前的前一周
                url:'/api',
                params:{
                  StateTime:this.makeDate(this.time1+7),
                  EndTime:this.makeDate(this.time1),
                  City:this.nameCode
                }
         }).then(
           res=>{
                 console.log(res.data.data[0].data,'首页上一周的数据') // 需要的数据为处方总量和 中医处方
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
                  City:this.nameCode
                }
         }).then(
           res=>{
                 console.log(res.data.data[0].data,'首页上二周的数据') // 需要的数据为处方总量和 中医处方
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
                  City:this.nameCode
                }
         }).then(
           res=>{
                 console.log(res.data.data[0].data,'首页上三周的数据') // 需要的数据为处方总量和 中医处方
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
                  City:this.nameCode
                }
         }).then(
           res=>{
                  console.log(res.data.data[0].data,'首页上四周的数据') // 需要的数据为处方总量和 中医处方
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
          getFixdata(){
                    axios({    //获取当年xx县当年的数据 进行折现图的渲染 
                url:'/api', 
                params:{
                  StateTime:'2019-01-01',
                  EndTime:'2019-12-31',
                  City:this.nameCode
                }
              }).then(res=>{
                console.log(res.data.data[0].data,'获取数据')
                  var newData = res.data.data[0].data;
                  // 获取门诊次数及数量
                for(var i =0;i<newData[1].SelectItmeList.length;i++){
                 this.dataTimeSin.push(newData[1].SelectItmeList[i].月份)
                 this.dataNumberSin.push(newData[1].SelectItmeList[i].当月门诊就医数量)
                 }
                 console.log(this.dataNumberSin,'县级去年的数据');
                  
              })
               axios({
                url:'/api',
                 params:{
                    StateTime:'2018-01-01',
                    EndTime:'2018-12-31',
                    City:this.nameCode
                   }
              }).then(res=>{
                 console.log(res.data.data[0].data,'前年的数据')
                 var newData = res.data.data[0].data
                   for(var i =0;i<newData[1].SelectItmeList.length;i++){
                      this.dataNumberDou.push(newData[1].SelectItmeList[i].当月门诊就医数量)
                     }
               console.log(this.dataNumberDou,'县级的前年数据')
          })
          },
        
          // 获取可选日期的函数
        getChoiceData(data){
            console.log(data,'这个父亲页面里面')  //拿到子传过来的数据
            this.getNewdate = data;
        },
  },
  mounted(){
          this.getCountryData();
          this.getFixdata();
  },
  watch:{
      getNewdate:{
          handler(newdata){
              console.log(newdata,'数据监听里面的data') 
              //  再次触发 函数 并修改传入的参数 得到新的数据 最后进行渲染 
              //  参数直接传入进行 不需要进行修改
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
              this.getCountryData();   
          }
          
      },
  },
 
}
</script>

<style scoped>
.test{
  height: 73.7vh;
}
  /* .el-row {
    margin-bottom: 20px;
  } */
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