<template>
    <div id="dataShow">
        <div class="margin">
            <div class="content_logo">
                <span>{{dataTitle}}</span>
            </div>
           <div class="content_data1" ref="peopleWrap">
               
                <ul class="content_data" ref="peopleTab">
                    <li>
                        <div class="content_data_left">
                            <p>门诊人数</p>
                            <span>{{dataShow[0]}}</span>
                        </div>
                        <div class="content_data_right">
                            <p>上月总数</p>
                            <span>{{dataYesShow[0]}}</span>
                        </div>
                    </li>
                   <li>
                        <div class="content_data_left">
                            <p>处方总数</p>
                            <span>{{dataShow[1]}}</span>
                        </div>
                        <div class="content_data_right">
                            <p>上月总数</p>
                            <span>{{dataYesShow[1]}}</span>
                        </div>
                    </li>
                <li>
                        <div class="content_data_left">
                                <p>门诊电子病历</p>
                                <span>{{dataShow[2]}}</span>
                        </div>
                        <div class="content_data_right">
                            <p>上月总数</p>
                            <span>{{dataYesShow[2]}}</span>
                        </div>
                    </li>
                    <li>
                        <div class="content_data_left">
                            <p>门诊收费金额</p>
                            <span>{{dataShow[3]}}</span>
                        </div>
                        <div class="content_data_right">
                            <p>上月总数</p>
                            <span>{{dataYesShow[3]}}</span>
                        </div>
                    </li>  
                </ul>
               
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name:'datadata',
    props:{
        dataTitle:{
            type:String,
            default:'丽水市门诊数据表'
        },
        dataShow:{
            type:Array,
            default:[],
        },
        dataYesShow:{
            type:Array,
            default:[],
        }
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
    background: url(../assets/img/logo@2x.png) no-repeat center;
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
.content_data1{
    position: relative;
}
.color{
    position: absolute;
    right: 0;bottom: 0;
}
.content_data{
    cursor:pointer;
    width: 74.9vw;
    display: flex;
    margin-top: .5vh; 
    /* overflow-x: scroll;
    white-space: nowrap;  */
    padding-bottom: 1vh;
}
 .content_data li{
    display: flex;padding-right: 7.5vw;
}
.content_data li .content_data_left{
    padding-right: 2.2vw;
}
.content_data li .content_data_left p{
    padding-bottom: 1.3vh;
    font-size:1rem;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(255,255,255,1)
}
 .content_data li .content_data_left span{
    font-size:3.125rem;
    font-family:Agency FB;
    font-weight:400;
    color:rgba(0,204,255,1);
}

.content_data li .content_data_right{
 
    margin-top: 4.2vh;
}

.content_data li .content_data_right p{
    font-size:12px;
    font-family:STHeiti SC;
    font-weight:300;
    color:rgba(0,204,255,1);
    margin-bottom: 3px;
}
.content_data li .content_data_right span{
    font-size:1.5rem;
    font-family:Agency FB;
    font-weight:400;
    color:rgba(255,162,0,1);
}  
</style>