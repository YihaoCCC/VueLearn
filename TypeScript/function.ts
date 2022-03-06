// 1:函数作为参数时候的类型
function foo() {

}

function test ( fn: () => void) {
    fn()
}

test(foo)

// 2：定义常量时： 函数的类型
type functionModel = (num1:number,num2:number) => number
const add: functionModel  = (num1:number,num2:number) => {
    return num1 + num2
}
function add2(num1:string,num2:string) {

}

// 3:函数的可选类型,可选类型必须写在必选类型的后面！！！
function test3(number1: number, number2?: number) {
    
}
test3(20)

//函数参数的默认值
function test4(number1: number = 20, num2: number) {
    
}   
//当想取默认值时候，必须传入undefined，不能传递null 因为null不能赋值给undefined，所以就当有默认值最好写在最后一个参数。
test4(undefined,20)