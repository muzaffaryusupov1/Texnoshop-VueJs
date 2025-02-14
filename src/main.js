import 'swiper/css'
import { createApp } from 'vue'
import App from './App.vue'
import icons from './assets/icons'
import './assets/index.css'
import router from './router'
import store from './store'
import uiComponents from './ui-components'

const app = createApp(App)
icons.map(icon => app.component(icon.name, icon))
uiComponents.map(component => app.component(component.name, component))
app.use(router)
app.use(store)
app.mount('.wrapper')
