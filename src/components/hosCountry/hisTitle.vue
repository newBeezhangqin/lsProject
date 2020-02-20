<template>
    <div id="hisTitle">
        <span class="title">
            云和县人民医院
        </span>
        <span class="time">
                {{nowTime}}
        </span>
    </div>
</template>
<script>
export default {
    name:'hisTitle',  //医院的标题
    data(){
        return{
            nowTime:''
        }
    },
    mounted(){
        this.getTime();
    },
    methods:{
        getTime:function(){ 
            var _this = this;
            let yy = new Date().getFullYear();
            let mm = new Date().getMonth()+1;
            let dd = new Date().getDate();
            _this.nowTime = yy+'年'+mm+'月'+dd+'日'
        },
    },
}
</script>
<style scoped>
#hisTitle{
    height: 42px;width: 1554px;
 
}
.title{
    font-size:40px;
    font-family:FZZhunYuan-M02S;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height:44px;
    float: left;
}
.time{
    font-size:18px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(255,255,255,1);
    float: right;
    margin-top: 12px;
}
</style>