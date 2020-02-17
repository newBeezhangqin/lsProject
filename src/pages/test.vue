<template>
    <div id="test">
        <h1> 这是一个测试页面</h1>
        <ceshi :data= 'one'/>
    </div>
</template>

<script>
import ceshi from '../components/ceshi'
export default {
    name:'test',
    data(){
        return{
            one:''
        }
    },
    mounted(){
        this.one = '这个是新传过来的';
      
    },
    components:{
            ceshi
    }
}
</script>

<style scoped>
    #test{
        text-align: center;
        color: brown;
    }
</style>