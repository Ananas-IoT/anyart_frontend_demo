import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import routes from "./routes";
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import VueSimpleAlert from "vue-simple-alert";

Vue.use(VueSimpleAlert);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: h => h(App),
  router: routes
}).$mount('#app');
