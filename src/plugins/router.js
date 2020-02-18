import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter);
// export default  
import Login from '../pages/Login'

const  outPatient = () => import  ('../pages/outPatient')
const  countryHos = () => import  ('../pages/countryHos')
const  yunheHos = () => import  ('../pages/yunheHos')
const  epidemic  = () => import('../pages/Epidemic')  // 路由懒加载 
let routes = [
    // 配置路由的页面的设置
    {path:'/',redirect:'/outpatient'},
    {path:'/yunhehos',component:yunheHos},
    // {path:'/countryhos',component:countryHos},
    {path:'/outpatient',component:outPatient},
    {path:'/epidemic',component:epidemic},
    // {path:'/login',component:Login},
  
]

let router =  new VueRouter(
    {  mode:'history',
        routes, 
    }    
)

export default router ; //默认导出得到 