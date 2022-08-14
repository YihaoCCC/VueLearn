// 0. 导入 Express
const express = require('express')

// 1. 调用 express() 得到一个 app
//    类似于 http.createServer()
const app = express()
const citys =
    [
        {
            "id": 1,
            "name": "北京"
        },
        {
            "id": 2,
            "name": "上海"
        },
        {
            "id": 3,
            "name": "成都"
        },
        {
            "id": 4,
            "name": "武汉"
        },
        {
            "id": 5,
            "name": "合肥"
        },
        {
            "id": 6,
            "name": "阜阳"
        },
        {
            "id": 7,
            "name": "天津"
        },
        {
            "id": 8,
            "name": "沈阳"
        },
        {
            "id": 9,
            "name": "南京"
        },
        {
            "id": 10,
            "name": "苏州"
        }
    ]

// 2. 设置请求对应的处理函数
//    当客户端以 GET 方法请求 / 的时候就会调用第二个参数：请求处理函数
app.get('/getcitys', (req, res) => {
    console.log(req.originalUrl);
    console.log(8888);
    res.send(citys)
})

// 3. 监听端口号，启动 Web 服务
app.listen(8888, () => {
    console.log('app listening on port 8888!')
})

