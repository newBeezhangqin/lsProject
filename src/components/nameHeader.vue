<template>
  <div class="header">
    <div class="margin">
      <div class="h_left">
            <p>{{name}}医院门诊数据监控</p>
        </div>
        <div class="h_right">
            <span>返回上一级</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'Header',  //医院名字啦
  props:['name'],
  methods:{
      
  }
}
</script>
<style scoped>
  .header{
       background:#050A24;
       /* background: #f99; */
       width: 1920px;height: 80px;
  }
  .margin{
       width:1920px;height:80px;background: #050A24;position: relative;
       margin: 0 auto;
  }
  .header .h_left {
    width:300px;
    height:80px;
    left:40px; top: 12px;
    position: absolute;
  }
  .header .h_left p{
    font-size:26px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(255,255,255,1);
  }
  .h_right{
      float: right;position: relative;
     width: 120px;
  }
  .h_right  span{
    position: absolute;
    top:12px;left:14px;
    font-size:9px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(255,255,255,1);
  }
</style>
