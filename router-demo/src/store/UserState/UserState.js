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
                            name: '请假记录',
                            url: '/leave/record',
                            type: 2
                        }
                    ]
                },
                {
                    name: '个人中心',
                    url: '/home/profile',
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
                }
            ]
        }
    },
    mutation: {
        
    }
}

export default userStore