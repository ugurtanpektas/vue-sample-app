import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAdjust, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import vSelect from 'vue-select'

library.add(faAdjust)
library.add(faBars)
library.add(faTimes)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('v-select', vSelect)

Vue.config.productionTip = false

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: store.state.language,
  messages: store.state.messages,
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
