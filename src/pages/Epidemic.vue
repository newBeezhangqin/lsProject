<template>
  <div id="epidemic">
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
    name:'epidemic',
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