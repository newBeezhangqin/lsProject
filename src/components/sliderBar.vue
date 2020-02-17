<template>
  <div id="sliderBar">
        <ul>
            <li>云和县中医院</li>
            <li>云和县人民医院</li>
            <li>云和县其他医院</li>
            <li>云和县其哈医院</li>
        </ul>
  </div>
</template>

<script>
export default {
    name:'sliderBar',  //侧边的导航栏
} 
</script>
<style scoped>
         #sliderBar ul{
                margin: 10px 0 0 0 ;
            }
             #sliderBar ul li{
                background:rgba(20,26,52,1);
                height: 70px;
                color:#888888;
                font:22px/70px "";
                background: url(../assets/img/arrow_b.png) no-repeat 258px;
            }

</style>