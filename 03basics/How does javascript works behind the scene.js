// JAVASCRIPT EXECUTION CONTEXT

// [           {} -> Global Execution Context      ]

// 1. Global Execution Context
// 2. Function Execution Context
// 3. Eval Execution Context

// {}  -> Memory Creation Phase
//     -> Execution Phase


let val1 = 10;
let val2 = 5;
function addnum (num1 , num2){
    let total = num1 + num2;
    return total;
}
let result1 = addnum(val1 , val2);
let result2 = addnum(10 , 6);
console.log(result1);
console.log(result2);