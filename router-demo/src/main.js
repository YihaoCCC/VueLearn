import { createApp } from 'vue'
import App from './App.vue'

import 'animate.css';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { activeRingChart,waterLevelPond, scrollRankingBoard } from '@jiaminghi/data-view'



import router from './router'
import store from './store';
const app = createApp(App)


app.use(activeRingChart)
app.use(waterLevelPond)
app.use(scrollRankingBoard)
app.use(router)
app.use(store)
app.use(ElementPlus)


app.mount('#app')
