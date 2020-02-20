<template>
    <div id="hisdataShow">
         <div class="content_data1" ref="peopleWrap">
             <div class="black">

             </div>
                <ul class="content_data" ref="peopleTab">
                    <li>
                        <div class="content_data_left">
                            <p>门诊人数</p>
                            <span>3,006</span>
                        </div>
                        <div class="content_data_right">
                            <p>上月总数</p>
                            <span>16,098</span>
                        </div>
                    </li>
                    <li>
                        <div class="content_data_left">
                            <p>处方总量</p>
                            <span>21,574</span>
                        </div>
                        <div class="content_data_right">
                            <p>上月总数</p>
                            <span>19,127</span>
                        </div>
                    </li>
                    <li>
                        <div class="content_data_left">
                                <p>门诊电子病历</p>
                                <span>17,983</span>
                        </div>
                        <div class="content_data_right">
                            <p>上月总数</p>
                            <span>13,478</span>
                        </div>
                    </li>
                    <li>
                        <div class="content_data_left">
                            <p>门诊收费金额</p>
                            <span>5,720</span>
                        </div>
                        <div class="content_data_right">
                            <p>上月总数</p>
                            <span>4,904</span>
                        </div>
                    </li>
                   
                </ul>
            </div>
        </div>
</template>

<script>
export default {

}
</script>
<style scoped>
    #hisdataShow{
        width: 1554px;height:176px;
        border-radius: 10px;
        margin-top: 25px;
        background:rgba(14,26,53,1);
        box-shadow:2px 3px 3px 0px rgba(0, 0, 0, 0.4);
        border-radius:10px;
    }
.content_data::-webkit-scrollbar{
   opacity:0;
}
    .content_data{
    cursor:pointer;
    width: 1516px;
    height:153px ;
    display: flex;
    padding-top: 20px; 
    margin-left: 30px;
    overflow-x: scroll;
    white-space: nowrap; 
    
    /* padding-bottom: 10px; */
}
 .content_data li{
    display: flex;height: 91px;padding-right: 85px;
}
.content_data li .content_data_left{
    padding-right: 20px;
}
.content_data li .content_data_left p{
    padding-bottom: 28px;
    font-size:28px;
    font-family:经典综艺体简;
    font-weight:400;
    color:rgba(255,255,255,1);
    opacity:0.5;
}
 .content_data li .content_data_left span{
    font-size:60px;
    font-family:Agency FB;
    font-weight:400;
    color:rgba(0,204,255,1);
}
.content_data1{
    position: relative;
}
.black{
    position: absolute;
    width: 30px;
    height: 29px;
    background:rgba(14,26,53,1);
    right: 0;
    bottom: 0;
}
.content_data li .content_data_right{
    margin-top: 73px;
}

.content_data li .content_data_right p{
   font-size:14px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(255,255,255,1);
    opacity:0.5;padding-bottom: 4px;
    }
.content_data li .content_data_right span{
   font-size:24px;
font-family:Agency FB;
font-weight:400;
color:rgba(255,162,0,1);
opacity:0.5;
}  
</style>