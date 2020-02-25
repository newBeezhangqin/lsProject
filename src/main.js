import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';  //引入饿了么的ui库
Vue.use(ElementUI); 
import  './assets/style.less'   //引入字体  
import './assets/css/base.css'   //引入的基本的样式
import 'element-ui/lib/theme-chalk/index.css';  //引入得到饿了么的css样
Vue.config.productionTip = false      //是否请求跨域
import router from './plugins/router'
import echarts from 'echarts'
import  './plugins/axios'
// import baseUrl from './plugins/baseUrl';
import {request,requestA,getSingledata,handleData,getMonth} from './network/request';
import  {numTime,monthTime,changeTime} from './network/time'
import Axios from 'axios';
 // 需要一个函数处理数据 
const  StateTime = '2019-01-01'
const  EndTime = '2019-12-31' 
const  url =  '/api' 
const  City = '331181'
// axios({
//    url,params:{
//       StateTime,
//       EndTime
//    }
// }).then(res=>{ 
//   // console.log(res.data.data[0].data,'测试时间函数')
//  console.log(handleData(res.data.data[0].data,[1,2,3])) 
// })

// monthTime(100);
    // handleData({},[2])

// console.log(getMonth(100),'这个返回的函数')
// getMonth(100).then(res=>{console.log(res.data,'咂咂嘴')})
// getMonth(100).then(axios.spread(function(one,two,three,four){
//         console.log(one.data,two.data,three.data,four.data,'打印的数据');
// }));
// getMonth(111).then(res=>{console.log(res)})  //测试完成
// console.log(changeTime(['2019-12-01','2019-12-03']),'这是一个新的数组')
console.log(monthTime(100)[0],'月份函数测试');














Vue.prototype.$echarts = echarts  //  引入的echarts  挂到全局里面
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
