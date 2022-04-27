const userStore = {
    namespaced: true,
    state() {
        return {
            menuItem: [
                {
                    name: '系统主页',
                    url: '/home',
                    type: 1,
                    children: [
                        {
                            name: '控制台',
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
                    name: 'css手风琴',
                    url: '/home/css',
                    type: 2
                },
                {
                    name: '关于我的',
                    url: '/home/about',
                    type: 2
                },
                {
                    name: '系统通知',
                    url: '/home/tabs',
                    type: 2
                },
                {
                    name: '会议中心',
                    url: '/home/meeting',
                    type: 2
                },
                {
                    name: '用户管理',
                    url: 'none',
                    type: 1,
                    children: [
                        {
                            name: '系统用户',
                            url: '/home/user',
                            type: 2
                        },
                        {
                            name: '增加用户',
                            url: '/home/adduser',
                            type: 2
                        }
                    ]
                },
                {
                    name: '角色管理',
                    url: '/home/role',
                    type: 2
                },
                {
                    name: 'vue3',
                    url: '/home/vue3',
                    type: 2
                }
            ]
        }
    },
    mutation: {
        
    }
}

export default userStore