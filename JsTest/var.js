function foo() {
    var i = 0
    return function() {
        console.log(i++)
    }
}
var f1 = foo()
f2 = foo()

f1()
f1()
f2()

const formData = {
    name: 'cyh',
    id: '1',
    age: '18',
    height: '1.88'
}

console.log(formData['id']);

function sayHello (name) {
    console.log(`hello${name}`);
}

sayHello('陈奕豪','123')


let thispath = "http://loaclhost:8080/api"
let newPath = thispath.replace(/^\/api/)
console.log(thispath)