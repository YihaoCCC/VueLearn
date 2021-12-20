let iterations = 0; 
top: for (let i = 0; i < 5; i++) { 
        for (let j = 0; j < 5; j++) { 
            iterations++; 
            if (i === 2 && j === 2) { 
                // 跳出哪个循环  意思是 当ij都为2时候，直接跳出最顶上的循环，相当于给最外层循环起了个名字。
                // 没有top时候，相当于只是跳出了最近的for循环，此时最外层会仍然继续，
                break top;  

            } 
        } 
    } 
console.log(iterations); // 13