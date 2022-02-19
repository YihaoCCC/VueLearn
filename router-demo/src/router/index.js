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
    {
        path: '/404',
        name: 'notFound',
        component: () => import('../pages/404.vue')
        
    },
    {
        path: '/:pathMatch(.*)', 
        redirect: '/404'
    }
    
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
})

// 动态添加路由
router.addRoute('home' ,{
    path: 'meeting',
    component: () => import('../pages/meeting.vue')
})

// router.beforeEach((to, from) => {
//     console.log(to)
//     console.log('-------')
//     console.log(from)
// })

export default router