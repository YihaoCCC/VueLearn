const addTwoNumbers = function(l1, l2) {
    let l1StrNum = ''
    let l2StrNum = ''
    for (let item of l1) {
        l1StrNum += `${item}`
    }
    for (let item of l2) {
        l2StrNum += `${item}`
    }
    let anwser = parseInt(l1StrNum) + parseInt(l2StrNum)
    return anwser.toString().split('').reverse().map((item) => {
        item = parseInt(item)
        return item
    })    
};

console.log(addTwoNumbers([2,4,3], [5,6,4]));

console.log('1'+'2');