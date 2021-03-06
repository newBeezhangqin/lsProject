import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter);
const outPatient = () => import('../pages/outPatient') // 门诊
const countryHos = () => import('../pages/countryHos') // 医院
const diveCountry = () => import('../pages/diveCountry') // 下潜到县级
const epidemic = () => import('../pages/Epidemic') // 路由懒加载 
const newDiveCountry = () => import('../pages/newDiveCountry')
// const test = ()=> import  ('../pages/test') 
let routes = [
    // 配置路由的页面的设置
    {
        path: '/',
        redirect: '/outpatient'
    },
    {
        path: '/diveCountry',
        component: diveCountry
    },
    {
        path: '/countryhos',
        component: countryHos
    },
    {
        path: '/outpatient',
        component: outPatient
    },
    {
        path: '/epidemic',
        component: epidemic
    },
    {
        path: '/newdivecountry',
        component: newDiveCountry
    }
]

let router = new VueRouter({
    routes,
})

export default router; //默认导出得到 