<template>
<div id="cenHis">
    <el-container>
    <el-header style="width:100%;height:80px;background:#050A24">
        <div class="margin">
             <nameHeader :name='msg' />
        </div>
    </el-header>
<el-container>
<el-aside width="300px">
    <!-- 这里放入的是侧边栏 -->
    <sliderBar />
</el-aside>
    <el-main>
        <div class="cen">
              <hisTitle />
              <hisdataShow/>
              <!-- 放置组件 占比组件  单线图组件 -->
                    <div style="display:flex">
                        <hosProdrag  :width='widthpro' :height='heightpro' />
                        <singleLine  :width='widthsin' :height='heightsin' :one='onesin'/>
                    </div>
                    <doubleLine  :width='widthdou' :height='heightdou' :one='onedou'/>
              <!-- 双线图组件 -->
        </div>
    </el-main>
  </el-container>
</el-container>
    </div>
</template>
<script>
import hosProdrag from '../components/hosProdrag'
import nameHeader from '../components/nameHeader'
import sliderBar from '../components/sliderBar'
import hisTitle from '../components/hisTitle'
import hisdataShow from '../components/hisdataShow'
import Proportion from '../components/Proportion'
import doubleLine from '../components/doubleLine'
import singleLine from '../components/singleLine'
export default {
    name:'cenHis',
    data(){
        return{
            msg:'云和县',
            type:'人民医院',
            title:"药占比",
            widthpro:520,
            heightpro:319,
            onepro:'two',
            widthdou:1552,
            heightdou:319,
            onedou:'two',
            widthsin:981,
            heightsin:319,
            onesin:'two',
            marginpro:25,
            marginsin:25,
        }
    },
    components:{
        nameHeader,sliderBar,hisTitle,hisdataShow,Proportion,doubleLine,singleLine,hosProdrag
    },
    mounted(){
            this.testJson();
        },
    methods:{
         testJson(){
             axios(
                 {url:'http://10.178.227.93:1112/api/home/HomeData',
                    params:{
                        StateTime:'2019-01-01',
                         EndTime:'2019-12-31',
                    }
                 }).then(res=>{
                     console.log(res.data.data)
                 })
         }
    }
}
</script>

<style>
     .el-header{
     background:#050A24;
    line-height: 60px;
    margin: 0 ;padding: 0;
    margin: 0 auto}
   .el-aside {
    background-color: #0E1A35;
    color: #333;
    text-indent: 42px;
    line-height: 200px;
    height: 1184px;
  }
  .el-main {
    background-color: #050A24;
    color: #333;
    padding: 0;
    margin: 0;
  } 
  .cen{
     width: 1589px;
     height: 1158px;
    background: #101B2E;
    padding-left: 33px;
    padding-top: 22px;
  }
</style>