// const coding = ["js" , "ruby" , "java" , "cpp"];

// const values = coding.forEach((item) => {
//     console.log(item);
//     return item;
// })

// console.log(values);

const mynum = [1,2,3,4,5,6,7,8,9];

const newnum1 = mynum.filter((num) => num > 4);
console.log(newnum1);

//we can return by this way also
//if we are going to give curly bracket in the arrow function at that time we have to return the value.
const newnum = mynum.filter((num) => {
    return num > 4;
})

console.log(newnum);

//see how can we store the values in an array
const newnums = [];
mynum.forEach((num) => {
    if(num > 4){
        newnums.push(num);
    }
})
console.log(newnums);