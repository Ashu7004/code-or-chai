const email = "ashuraja250@gmail.com";

if(email){
    console.log("Got user email");
}else{
    console.log("Don't got any user email");
}

//falsy values
//false , 0 , -0 , Nan , "" , null , undefined , BigInt 0n

//rest all are truthy values or true values
//"0" , "false" , " " , [] , {} , function()   -----> truthy values
//NOTE:
//anything added in the string called truthy values even if we add a space still it will be count in truthy values

const arr = [];
if(arr.length == 0){
    console.log("Array is empty");
}


//very very important concept
const obj = {};

if (Object.keys(obj).length == 0) { // imp. part
    console.log("Object in empty");
}

//Nullish coalescing operator (??) : null undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
val1 = null ?? 10 ?? 20;
console.log(val1);


//TERNIARY OPERATOR
//condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
