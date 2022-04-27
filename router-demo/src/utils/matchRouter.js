function pathMatch(arr) {
    let renderRoutes = []

    // 1：获取所有路由
    const allRoutes = []
    const routeFiles = require.context('../router/NeedRenderRoutes',true, /\.js/)
    const filePath = routeFiles.keys()
    // 获取到所有的router对应的js文件路径
    console.log(filePath)
    // 遍历进行导入
    filePath.forEach(element => {
        const router = require('../router/NeedRenderRoutes'+ element.split('.')[1])
        // 获取到导出的路由模块,此时会获取到所有动态的路由信息，并导入
        console.log('所有的动态路由')
        console.log(router.default)
        allRoutes.push(router.default)
    });

    // 2：处理用户菜单中存在的路由  // 当 type=2 时递归调用
    const findRouteInUserMenu  = (arr) => {
        for(const item of arr) {
            if(item.type === 2) {
                // 判断当用户菜单中的url和动态路由中的path相等时候，此时证明用户有当前路由权限，将其添加到最终返回的路由中去
                const currentRoute = allRoutes.find( i => {
                    return i.path === item.url
                })
                // find返回第一次查到的项
                if(currentRoute) {
                    renderRoutes.push(currentRoute)
                }
            } else {
                findRouteInUserMenu(item.children)
            }
        }
    }
    // 调用函数
    findRouteInUserMenu(arr)
    return renderRoutes
}

export default pathMatch