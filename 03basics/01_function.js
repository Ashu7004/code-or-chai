
function myname () {
    console.log("A");
    console.log("s");
    console.log("h");
    console.log("u");

}
myname();

function addtwonumbers(num1 , num2){
    let num3 = num1 + num2;
    console.log(num3);
}
addtwonumbers(2 , 4);
addtwonumbers(3 , null);
addtwonumbers(4 , "5");

function addtwo (num1 , num2) {
    let num3 = num1 + num2;
    return num3;
    //if we want to console here anything then it will not execute bcz after return we can not execute anything.
}
const result = addtwo(3 , 4);
console.log("Result : " , result);

function loginuser (username) {
    if(username == undefined){   //we can write if(!username)  --> both has same meaning
        console.log("Please enter the userName");
        return;
    }
    return `${username} just logged in`;
}
console.log(loginuser("Ashutosh"));
console.log(loginuser());


function calculateCartPrice(num1){
    return num1;
}
console.log(calculateCartPrice(200 , 300 , 400));


function calculateCartPrice(...num1){
    return num1;
}
console.log(calculateCartPrice(200 , 300 , 400));


//how to use object in a function
const user = {
    userName : "Ashutosh",
    price : 1999
}

function handleObject (anyuser) {
    console.log(`user name is ${anyuser.userName} and price is ${anyuser.price}`)
}

handleObject(user);
//we can do like this also

//handleObject({userName : "Ashutosh",
//    price : 1999});




//how to use an array in a function
const mynewarray = [100,200,400, 499];

function returnsecondvalue(newarray){
    return newarray[1];
}

console.log(returnsecondvalue(mynewarray));

//we can do like this also
//returnsecondvalue([100,200,400, 499]);