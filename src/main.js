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
Vue.prototype.$echarts = echarts  //  引入的echarts  挂到全局里面
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
