//primitive

// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100;
const scoreValue = 100.2;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;
const id = Symbol('123');
const anotherid = Symbol('123');

console.log(id === anotherid);
const bigNumber = 376487624678468742389788723n;

//Reference (Non - primitive)

//Array, Objects, Functions
const heroes = ["shaktiman" , "naagraj" , "doga"]
const myObj = {
    name : "ashu",
    age : 22
}

const myFunction = function(){
    console.log("Hello Raja");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof myObj);
console.log(typeof myFunction);
console.log(typeof heroes);


//++++++++++++++++++++++++++++++++
// Stack (Primitive) , Heap (Non - Primitive)

let myName = "Ashu";
let anotherName = myName;
anotherName = "Raja";

console.log(anotherName);

let userOne = {
    email : "ashu123@gmail.com",
    upi : "userOne@ybl"
}

let userTwo = userOne;

userTwo.email = "rajababbu@gmail.com";
console.log(userOne.email);
console.log(userTwo.email);