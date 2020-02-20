<template>
    <div id="test">
        <h1> 这是一个测试页面</h1>
        <lastData 
            :dataName = 'dataName'
          />
    </div>
</template>

<script>
import lastData from '../components/lastData'
export default {
    name:'test',
    data(){
        return{
            one:'',
            dataName:['213','312','ooo','1231']
        }
    },
    mounted(){
        this.one = '这个是新传过来的';
      
    },
    components:{
        lastData
    }
}
</script>

<style scoped>
    #test{
         width:  100vw;
         height: 100vh;
        text-align: center;
        color: brown;
    }
</style>