import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import './index.scss'

import { createApp } from 'vue'
import App from './App.vue'

import './registerServiceWorker'
import router from './router'
import store from './store'

createApp(App)
  .use(PrimeVue)
  .use(store)
  .use(router)
  .mount('#app')
