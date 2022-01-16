import { createApp } from 'vue'
import App from './App.vue'

import formTime from './directive/format-time'

const app = createApp(App)
formTime(app) 

app.directive('focus', {
    mounted(el) {
        el.focus()
    }
})

app.mount('#app')
