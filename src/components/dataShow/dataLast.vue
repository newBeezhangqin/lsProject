 <template>
       <div class="content_data1" >
                <ul class="content_data">
                    <li>
                        <div class="content_data_left">
                            <span class="top">{{dataName[0]}}</span>
                            <span>{{dataShow[0]}}</span>
                        </div>
                        <div class="content_data_right">
                            <span class="bottom">上月总数</span>
                            <span>{{dataYesShow[0]}}</span>
                        </div>
                    </li>
                   <li>
                        <div class="content_data_left">
                         <span class="top">{{dataName[1]}}</span>
                            <span>{{dataShow[1]}}</span>
                        </div>
                        <div class="content_data_right">
                           <span class="bottom">上月总数</span>
                            <span>{{dataYesShow[1]}}</span>
                        </div>
                    </li>
                <li>
                        <div class="content_data_left">
                              <span class="top">{{dataName[2]}}</span>
                                <span>{{dataShow[2]}}</span>
                        </div>
                        <div class="content_data_right">
                          <span class="bottom">上月总数</span>
                            <span>{{dataYesShow[2]}}</span>
                        </div>
                    </li>
                    <li>
                        <div class="content_data_left">
                       <span class="top">{{dataName[3]}}</span>
                            <span>{{dataShow[3]}}</span>
                        </div>
                        <div class="content_data_right">
                           <span class="bottom">上月总数</span>
                            <span>{{dataYesShow[3]}}</span>
                        </div>
                    </li>  
                </ul>
               
            </div>
 </template>
 
 <script>
 export default {
     name:'lastData',
     props:{
        dataShow:{
            type:Array,
            default:()=> [2222222,2222222,2332223,2323222],
        },
        dataYesShow:{
            type:Array,
            default:()=>[8882288,8882288,8882288,9222312.12],
        },
        dataName:{
            type:Array,
            default:()=>['门诊人次','门诊电子病历','门诊处方数量','门诊费用总额']
        }
     },
     data(){
         return{
            //  dataName:['门诊人次','门诊电子病历','门诊处方数量','门诊费用总额']
         }
     },
     methods:{
         test(){
            //  console.log(this.dataName)
         }
     },
     mounted(){
         this.test();
     }
 }
 </script>
 
 <style scoped>
    .content_data1{
        padding-top: 4.1vh;
        position: relative;
    
    }
    .color{
        position: absolute;
        right: 0;bottom: 0;
    }
    .content_data{
        cursor:pointer;
        width: 74.9vw;
        /* height: 13vh; */
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
    .content_data li .content_data_left .top{
        padding-bottom: 1.3vh;
        display: block;
        font-size:1rem;
        font-family:Microsoft YaHei;
        white-space: nowrap;
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
    .content_data li .content_data_right .bottom{
        display: block;
        font-size:12px;
        font-family:STHeiti SC;
        font-weight:300;
         white-space: nowrap;
        color:rgba(0,204,255,1);
        padding-bottom: 3px;
    }
    .content_data li .content_data_right span{
        font-size:1.5rem;
        font-family:Agency FB;
        font-weight:400;
        color:rgba(255,162,0,1);
    }  
</style>