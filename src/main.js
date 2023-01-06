import { createApp } from 'vue'
import Toaster from '@meforma/vue-toaster'
import './styles/main.css'
import App from './App.vue'
import initializeRouter from './router'

const app = createApp(App)

initializeRouter(app)
app.use(Toaster)

app.mount('#app')
