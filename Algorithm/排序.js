// 1: 冒泡排序

function test(arr) {
    for(let i =0; i< arr.length; i++) {
        for(let n = 0; n < arr.length-i-1; n++) {
            if(arr[n] > arr[n+1]) {
                let temp = arr[n] 
                arr[n] =  arr[n+1]
                arr[n+1] = temp
            }
        }
    }
    return arr
}

// let result = test([1,4,5,3,2])
  

const resule = setTimeout(() => {},1000, 123)
console.log(resule)



