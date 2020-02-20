<template>
    <div id="dataShow">
        <div class="margin">
            <div class="content_logo">
                <span>{{dataTitle}}</span>
            </div>
        
        </div>
    </div>
</template>

<script>

export default {
    name:'dataLogo',
    props:{
        dataTitle:{
            type:String,
            default:'丽水市门诊数据表'
        },
     
    },
    data(){
        return{
            
        }
    },
    mounted(){
        // console.log(BScroll);
    },
    created() { 
     
  },
  methods:{
    
  }


}
</script>

<style scoped>
#dataShow{
        background: #061123;
        height:17.5vh;
}
.margin{
    margin: 0 auto; width: 100vw;
    overflow: hidden;
    display: flex;
    padding-top: 3.05vh;
}
.content_logo{
    overflow: hidden;
    width: 18.54vw;height:9.4vh;
    margin:0px 4.47vw 0 2.23vw;
    background: url(../../assets/img/logo@2x.png) no-repeat center;
    /* background-size:18.54vw 9.4vh; */
    background-size: contain;
    position: relative;
}
.content_logo span{
position: absolute;
    font-size:1.8vh;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(255,255,255,1);
    left: 6.7vw;top:3.3vh;
} 

</style>