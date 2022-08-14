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
                path: 'loading',
                name: 'loading',
                component: () => import('../pages/loading.vue')
            },
            {
                path: 'css-piano',
                name: 'css-piano',
                component: () => import('../pages/css-piano.vue')
            },
            {
                path: 'helloworld',
                name: 'helloworld',
                component: () => import('../components/HelloWorld.vue')
            },
            {
                path: 'tabs',
                name: 'tabs',
                component: () => import('../pages/Tabs.vue')
            },
            {
                path: 'ComponentCenter',
                name: 'ComponentCenter',
                component:() => import('../pages/ComponentCenter.vue')
            },
            {
                path: 'user',
                name: 'user',
                component:() => import('../pages/user.vue')
            },
            {
                path: 'vue3',
                name: 'vue3',
                component: function() {
                    return import('../pages/vue3.vue')
                }
            },
            {
                path: 'covid',
                name: 'covid',
                component: () => import('../pages/covid.vue')
            },
            {
                path: 'tabBar',
                name: 'tabBar',
                component: () => import('../pages/tabBar.vue')
            },
            {
                path: 'verify',
                name: 'verify',
                component: () => import('../pages/verifyImg.vue')
            },
            {
                path: 'randomtext',
                name: 'randomtext',
                component: () => import('../pages/RandomText.vue')
            },
            {
                path: 'static',
                name: 'static',
                component: () => import('../pages/backstatic.vue')
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
// router.addRoute('home' ,{
//     path: 'meeting',
//     component: () => import('../pages/meeting.vue')
// })

// router.beforeEach((to, from) => {
//     console.log(to)
//     console.log('-------')
//     console.log(from)
// })

export default router