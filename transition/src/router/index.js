import { createRouter, createWebHashHistory } from 'vue-router'

const route = createRouter({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: () => import('../components/home.vue')
        },
        {
            path: '/scroll',
            component: () => import('../components/scroll.vue')
        },
        {
            path: '/lax',
            component: () => import('../components/lax.vue')
        },
        {
            path:"/laxtext",
            component: () => import('../components/laxtext.vue')
        }
    ],
    history: createWebHashHistory()
})

export default route