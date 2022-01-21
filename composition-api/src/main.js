import { createApp } from 'vue'
import App from './App.vue'

import formTime from './directive/format-time'
import plugin_object from './plugins/plugin_object'

const app = createApp(App)
formTime(app) 

app.use(plugin_object)
app.config.globalProperties.$message = '这是全局变量'


app.directive('focus', {
    mounted(el) {
        el.focus()
    }
})

app.mount('#app')
