// let a = 200;
var b = 300;
// const c = 499;

if(true){
    let a = 40;
    var b = 30;
    const c = 50
    console.log(a);
    console.log(c);
}

// console.log(a);
console.log(b);
// console.log(c);

function one(){
    const username = "Ashu_";

    function two () {
        const website = "youtube";
        console.log(username);
    }
    //console.log(website);  --> we cannot access inner variable in global space.
    
    two();
}
one();

function addone(num){
    return num + 1;
}
console.log(addone(4));

//it works same as arrow function does 
//arrow function --> we will start in next vdo
const add2 = function addtwo(num){
    return num + 2;
}
console.log(add2(6));
