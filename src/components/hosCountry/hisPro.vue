<template>
  <div id="hisPro">
        <div class="leftSider_left_title nannv">
            <p>药占比</p>
        </div>
        <div class="left">
               <div class="leftSider_left_people">
               <div class="people_top pone">
                   <p class="small">门诊收费金额</p>
                   <span>35385.54</span>
               </div>
                 <div class="people_top ptwo">
                   <p class="small">药品收费金额</p>
                   <span>25487.65</span>
               </div>
                 <div class="people_top pthree">
                   <p class="small">药占比</p>
                   <span>65.12%</span>
               </div>
               <div class="people_echarts" id="people">
                    <!-- echarts图 第一个 -->
               </div>
        </div>
        </div>
        <div class="right">
              <div class="right_title">
                <span>当月门诊就医用户趋势</span>
            </div>
            <div class="right_show">
                <span>门诊收费金额</span>
                <span>药品收费金额</span>
                <span>药占比</span>
            </div>
        </div>
        <div class="bottom">
            <div class="bottom_title"></div>
            <div class="bottom_show"></div>
        </div>
  </div>
</template>

<script>

export default {
    name:'hisPro', //医院的展示组件 
    components:{
       
    },
}
</script>

<style scoped>
#hisPro{
    width:1554px;
    margin-top: 22px;
}
.leftSider_left .leftSider_left_title.nannv{
    margin-top: 20px;
}
</style>