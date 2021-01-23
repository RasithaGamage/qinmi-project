import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret,faPhoneVolume,faCameraRetro,faMapMarkedAlt,faSwimmer,faHandPointDown} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import ZoomOnHover from "vue-zoom-on-hover";
import VModal from 'vue-js-modal'

library.add(faUserSecret,faPhoneVolume,faCameraRetro,faMapMarkedAlt,faSwimmer,faHandPointDown)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(ZoomOnHover)
Vue.use(VModal, { componentName: 'MyModal' })
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
