<template>
    <div id="Header">
        <div class="margin">
        <div class="map_title">
            <span class="title_time">
                {{gettime}}
            </span>
            <!-- <span class="title_time_right" @click='$router.go(-1)' >
                    返回上一级
                    还需要某个东西进去控制 返回上一级的显示和隐藏
            </span> -->
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Header',
    props:['returnTemp'],
     data:function(){
        return{
            gettime:'',
          
        }
    },
    mounted(){
    
    },
    methods:{

        //设置方法实时显示时间 奥利给
        getTime:function(){ 
            var _this = this;
            let yy = new Date().getFullYear();
            let mm = new Date().getMonth()+1;
            let dd = new Date().getDate();
            let xxj =   week();
            function week(){
                var weekday = new Array(7)
                weekday[0] = "周日"
                weekday[1] = "周一"
                weekday[2] = "周二"
                weekday[3] = "周三"
                weekday[4] = "周四"
                weekday[5] = "周五"
                weekday[6] = "周六"
                return weekday[new Date().getDay()];
            }
            let hh = new Date().getHours();
            let mf = new Date().getMinutes()<10 ? '0'+new Date().getMinutes() : new Date().getMinutes();
            let ss = new Date().getSeconds()<10 ? '0'+new Date().getSeconds() : new Date().getSeconds();
            _this.gettime = yy+'年'+mm+'月'+dd+'日'+'  '+' '+xxj+' '+hh+':'+mf+'  '+ss;
       },
       currentTime(){
           setInterval(this.getTime,500)
        },

      },
      created() {
        this.currentTime();    
     }, 

}
</script>

<style scoped>
#Header{ 
    position: relative;
    background: #061123;
    height: 95px;
}
.margin{
        margin: 0 auto; width: 1920px;
}
.map_title{
     overflow: hidden; height: 95px;
    background: url(../assets/img/title@2x.png) no-repeat center;
    overflow: hidden;
    position: relative;
}
.map_title .title_time{
    position: absolute;
    color: #0AB7FF;
    width:300px;
    height:14px;
    font-size:14px;
    font-family:Roboto;
    font-weight:400;
    color:rgba(10,183,255,1);
    left:36px;top: 18px;
}
.map_title .title_time_right{
    position: absolute;
    color:rgba(255,255,255,1);
    width:92px;
    height:18px;
    font-size:16px;
    font-family:Microsoft YaHei;
    font-weight:400;
    right: 40px;top:13px;
    cursor:pointer

}
/* .map_title span.time_right{
    right: 0;top: 18px;
} */

</style>