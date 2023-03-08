import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import routes from './routes'
import {createPinia} from 'pinia'


createApp(App).use(routes).use(createPinia()).mount('#app')
