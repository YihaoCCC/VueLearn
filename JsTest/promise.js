//通过⼀个超⻓的链式调⽤我们学习⼀下链式调⽤的注意事项
var p = new Promise(function(resolve,reject){
    resolve('我是Promise的值')
   })

   console.log(p)

   p.then(function(res){
    //该res的结果是resolve传递的参数
    console.log(res)
   }).then(function(res){
    //该res的结果是undefined
    console.log(res)
    return '123'
   }).then(function(res){
    //该res的结果是123
    console.log(res)
    return new Promise(function(resolve){
    resolve(456)
    })
   }).then(function(res){
    //该res的结果是456
    console.log(res)
    return '我是直接返回的结果'
   }).then()
    .then('我是字符串')
    .then(function(res){
    //该res的结果是“我是直接返回的结果”
    console.log(res)
   })

   let p1 = new Promise((resolve,reject) => {
    setTimeout(() => {
    resolve('第⼀个promise执⾏完毕')
    },1000)
   })
   let p2 = new Promise((resolve,reject) => {
    setTimeout(() => {
    resolve('第⼆个promise执⾏完毕')
    },2000)
   })
   let p3 = new Promise((resolve,reject) => {
    setTimeout(() => {
    resolve('第三个promise执⾏完毕')
    },3000)
   })
   Promise.all([p1,p3,p2]).then(res => {
    console.log(res)
   }).catch(function(err){
    console.log(err)
   })


   let a = 0
   let d = new Date()
   let d1 = new Date()

   setTimeout(() => {
     a= 1
   }, 1000);

   while(d1-d < 2000) {
    d1 = new Date()
   }
   console.log(a);

    