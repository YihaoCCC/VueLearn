
// 数组中存放的数据类型，
const array: string[] = []

array.push('123')
// array.push(123)
console.log(array)


// 不指定类型的时候，会默认推导出该对象的类型
const info = {
    name: 'cyh',
    age: 18
}

// Symbol类型
const title1 = Symbol('title')
const title2 = Symbol('title')

const info2 = {
    [title1]: '程序员',
    [title2]: '设计师',
}

console.log(info2)

// any类型 以后可以任意赋值

let message: any = null
message = '123'
message =123

// unknown类型  any类型可以赋值给任意的类型，但是unknown类型只能赋值给any和unknown类型
function foo() {return '123'}
function foo2() {return 123}
let result: unknown
if(1<2) { result =  foo() } else{ result = foo2()}
//unknown类型只能赋值给any和unknown类型
// let test1: string = result // 报错
let test2: any = result
console.log(result)

// void类型
function sum(num:number,num2:number) {
    console.log(num+num2)
}
function test3 (point: {num1: number, num2: string, num3?:number}) {
    return point.num1 + point.num2.length
}
let test5 = {
    num1: 123,
    num2: 'cyh'
}
console.log(test3(test5))

// 类型别名：　ｔｙｐｅ
type unionTypes = number | string | boolean
type objectType = {
    name: string,
    age: number,
    height?: number
}
const union1: unionTypes = '123'
const union2: objectType = {
    name: 'cyh',
    age: 18
}
export {}