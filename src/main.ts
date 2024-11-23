import { createApp } from 'vue'
import App from './App.vue'
import { i18n } from './i18n'
import router from './router/routes'
import store from './store'
import './style.css'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(i18n)
app.use(router)
app.use(store)
app.mount('#app')
