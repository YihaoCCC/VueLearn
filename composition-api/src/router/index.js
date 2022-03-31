import { createRouter, createWebHistory } from 'vue-router'

// 配置映射关系
const routes = [
    {path:'/', redirect: '/tiphome'},
    {path: '/tiphome', name: 'TipHome', component:  () => import('../TipHome.vue')  },
    {
        path: '/home', 
        name: 'home',
        component: () => import('../pages/home.vue'),
        children: [
           {
            path: 'message',
            name: 'message',
            component: () => import('../pages/message.vue')
           },
           {
            path: 'settings',
            name: 'settings',
            component: () => import('../pages/settings.vue')
           },
           {
               path: 'pdf',
               name: 'pdf',
               component: () => import('../pages/pdf.vue')
           }
        ]
    },
    {path: '/profile/:usename', name: 'profile', component: () => import('../pages/profile.vue')},
    {path: '/about', name: 'about', component: () => import('../pages/about.vue')},
    {
        path: '/:pathMatch(.*)', 
        name: 'notfound', 
        component: () => import('../pages/NotFound.vue')
    }
]

// 创建路由对象router

const router = createRouter({
    routes: routes,
    history: createWebHistory()
})

// 导出路由对象

export default router