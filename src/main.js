import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import { i18n } from './i18n'
import { Translate } from "./plugins/translate";

Vue.prototype.$i18nRoute = Translate.i18nRoute.bind(Translate);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
