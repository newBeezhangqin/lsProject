import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter);
// export default  
import Login from '../pages/Login'
import outPatient from '../pages/outPatient'
import countryHos from '../pages/countryHos'
import yunheHos from '../pages/yunheHos'

let routes = [
    // 配置路由的页面的设置
    {path:'/',redirect:'/outpatient'},
    {path:'/yunhehos',component:yunheHos},
    // {path:'/countryhos',component:countryHos},
    {path:'/outpatient',component:outPatient},
    // {path:'/login',component:Login},
  
]

let router =  new VueRouter(
    {  mode:'history',
        routes, 
    }    
)

export default router ; //默认导出得到 