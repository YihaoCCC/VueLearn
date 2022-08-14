var http = require('http')  
http.createServer(function (request, response) {

    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
      //设置响应的头信息
    response.writeHead(200, {'Content-Type': 'text/plain'});
    console.log(request.url);
    // 发送响应数据 "Hello World"
    response.end('Hello World\n');
    console.log("8080端口");
    console.log(request.url);
}).listen(8080);