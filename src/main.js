import Vue from 'vue';
import App from './App.vue';
import router from './router';

import HbsDesignVue from '../packages';
import '../packages/styles/reset.css';

Vue.use(HbsDesignVue);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
