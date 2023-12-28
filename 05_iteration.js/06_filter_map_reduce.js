const coding = ["c++" , "java" , "c" , "ruby" , "python"];

const values = coding.forEach(function (val) {
    //console.log(val);
    return val;
})

console.log(values); // so we can see that foreach loop not return anything 

//filter me ek call back function aayega jo ki ek value lega uske baad wo ek condition lega or uske according wo answer provide krega

const score = [100 , 200 , 300 , 400 , 500 , 600];

const scores = score.filter((nums) => nums > 200)

console.log(scores);
//OR

const sc = score.filter((num) =>{
    return num > 200
})

console.log(sc);
//OR

const mynums = [1, 2, 3, 4, 5, 6];

mynums.filter((num) => {
    if(num > 4){
        mynums.push(num);
    }
})
console.log(mynums);