import Vue from 'vue';
import App from './App.vue';
import { router } from './routes';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import { store } from './store/store';


Vue.use(Buefy)

Vue.config.productionTip = false;



new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
