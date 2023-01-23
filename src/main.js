import Vue from 'vue'
import App from './App.vue'

// Vuex
import Vuex from 'vuex'
Vue.use(Vuex)

// es6-promise (opens new window)
import 'es6-promise/auto'

// ToggleButton
import ToggleButton from 'vue-js-toggle-button'
Vue.use(ToggleButton)

// Bootstrap Vue
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

import { BIcon, BIconPlus, BIconPencilSquare } from 'bootstrap-vue'
Vue.component('BIcon', BIcon)
Vue.component('BIconPlus', BIconPlus)
Vue.component('BIconPencilSquare', BIconPencilSquare)

// Font Awesome Vue
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faUserSecret)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

// Routing
import router from './router'

// Vuex store
import store from './store'

new Vue({
// Font Awesome
  el: '#app',
  components: { App },
  template: '<App/>',
// Vue
  router,
  store,
  render: h => h(App),
}).$mount('#app')
