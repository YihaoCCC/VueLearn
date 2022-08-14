const userStore = {
    namespaced: true,
    state() {
        return {
            menuItem: [
                {
                    name: 'home',
                    url: '/home',
                    type: 1,
                    children: [
                        {
                            name: 'home-control',
                            url: '/home/index',
                            type: 2
                        },{
                            name: '404',
                            url: '/home/404',
                            type: 2
                        }
                    ]
                },
                {
                    name: 'css-piano',
                    url: '/home/css-piano',
                    type: 2
                },
                {
                    name: 'my-loading',
                    url: '/home/loading',
                    type: 2
                },
                
                {
                    name: 'component-center',
                    type: 1,
                    children: [
                        {   
                            name: 'YhInput',
                            url: '/home/ComponentCenter',
                            type: 2
                        }
                    ]
                },
                {
                    name: 'user-manage',
                    url: 'none',
                    type: 1,
                    children: [
                        {
                            name: 'system-user',
                            url: '/home/user',
                            type: 2
                        },
                        {
                            name: 'add-user',
                            url: '/home/adduser',
                            type: 2
                        }
                    ]
                },
                {
                    name: 'role-control',
                    url: '/home/role',
                    type: 2
                },
                {
                    name: 'vue3',
                    url: '/home/vue3',
                    type: 2
                },
                {
                    name: 'sys-message',
                    url: '/home/tabs',
                    type: 2
                },
                {
                    name: 'covid-submit',
                    url: '/home/covid',
                    type: 2
                },
                {
                    name: 'dynamic-navbar',
                    url: '/home/tabBar',
                    type: 2
                },
                {
                    name: 'verifyImg',
                    url: '/home/verify',
                    type: 2
                },
                {
                    name: 'randomtext',
                    url: '/home/randomtext',
                    type: 2    
                },
                {
                    name: 'StaticBackground',
                    url: '/home/static',
                    type: 2
                }
            ]
        }
    },
    mutation: {
        
    }
}

export default userStore