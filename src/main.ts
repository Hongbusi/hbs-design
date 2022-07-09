import { createApp } from 'vue'
import App from './App.vue'
import '@unocss/reset/tailwind.css'
import 'uno.css'

import Button from './components/button'

const app = createApp(App)

app.use(Button)

app.mount('#app')
