// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//npm i fastclick --save 解决移动端点击事件300ms延迟的问题
import fastClick from 'fastclick';
fastClick.attach(document.body);

//引入reset.css文件
import './assets/styles/reset.css'
//解决1px边框的问题
import './assets/styles/border.css'
//rem适配文件
import './assets/js/lib-flexible.min'
import './assets/styles/iconfont.css'

//轮播图
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
//使用别人的组件时，会用到 Vue.use()
Vue.use(VueAwesomeSwiper, /* { default global options } */);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
