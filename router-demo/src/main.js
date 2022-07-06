import { createApp } from 'vue'
import App from './App.vue'

import 'animate.css';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { activeRingChart,waterLevelPond, scrollRankingBoard } from '@jiaminghi/data-view'
import matchRouter from './utils/matchRouter.js'


import router from './router'
import store from './store';
const app = createApp(App)


app.use(activeRingChart)
app.use(waterLevelPond)
app.use(scrollRankingBoard)


app.use(store)
const route = matchRouter(store.state.userStore.menuItem)
        console.log('用户菜单中匹配到的路由')
        console.log(route);
        // 添加到路由中
        route.forEach((item) => {
                router.addRoute('home',item)
        })
app.use(router)



app.use(ElementPlus)


app.mount('#app')
