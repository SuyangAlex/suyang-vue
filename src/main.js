import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

emailjs.init({ publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY })

createApp(App).mount('#app')