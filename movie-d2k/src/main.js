import { createApp } from 'vue'
import { router } from './routes'
import './styles/index.css'
import App from './App.vue'
import 'flowbite'

createApp(App).use(router).mount('#app')
