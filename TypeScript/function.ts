// 1:函数作为参数时候的类型
function foo() {
    console.log('函数是参数')
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
    console.log(number1+number2)
}
test3(20)

//函数参数的默认值
function test4(number1: number = 20, num2: number) {
    console.log(number1+num2)
}   
//当想取默认值时候，必须传入undefined，不能传递null 因为null不能赋值给undefined，所以就当有默认值最好写在最后一个参数。
test4(undefined,20)

// 函数的剩余参数
// 观察console。log（）发现里面的参数为：（...data，any【】）
// 意思是，当传递的内容个数不确定时候，会在函数内部转化成数组形式比如
function sum(initalNum: number, ...nums: number[]) {
    let total = initalNum
    for (const num of nums) {
      total += num
    }
    return total
  }
  
  console.log(sum(20, 30))
  console.log(sum(20, 30, 40))
  console.log(sum(20, 30, 40, 50))
