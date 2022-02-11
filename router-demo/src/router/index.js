import { createRouter } from "vue-router";
import { createWebHashHistory } from "vue-router";

const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('../pages/home.vue'),
        children: [
            {
                path: '',
                redirect: '/home/index'
            },
            {
                path: 'index',
                component: () => import('../pages/index.vue')
            },
            {
                path: 'about',
                name: 'about',
                component: () => import('../pages/about.vue')
            },
            {
                path: 'profile',
                name: 'profile',
                component: () => import('../pages/profile.vue')
            },
            {
                path: 'helloworld',
                name: 'helloworld',
                component: () => import('../components/HelloWorld.vue')
            }
        ]
    },
    
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
})

export default router