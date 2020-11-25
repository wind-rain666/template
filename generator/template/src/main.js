import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './route';
import './route/guard.js';
import store from './store';

import './assets/index';

import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';   //当不使用cdn的时候，将这行开启！
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
