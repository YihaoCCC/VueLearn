var message = '陈奕豪';
message = '123';
function foo(item) {
    console.log(item.length);
}
foo('1234567890');

console.log(new Date().getMonth())

const list = [
    {
        name: 'home',
        address: '/home/index',
    },
    {
        name: 'meeting',
        address: '' 
    }
]
const newList = [...list]

console.log(newList);

// 转换普通对象

let person = {
    age: '18',
    height: 1.88,
    name: '陈奕豪'
}

let newPerson = () => ({...person}) 
console.log(newPerson);