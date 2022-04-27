  
function answer(x){
    let first
    x = x < 0 ? x*(-1) : x
    if( x < 93 ) {
        first = 93
    } else {
        first = x
    }
    
    let firstRes = getTotal(first)
    
    return firstRes
}

function getTotal(number) {
    let arr = number.toString().split('')
    let next = 0
    for(let i = 0; i < arr.length ; i++) {
        next += parseInt(arr[i])
    }
    if(next >= 10) {
      return  getTotal(next)
    } else {
      return next
    }
}

console.log(

answer(-9000)

);