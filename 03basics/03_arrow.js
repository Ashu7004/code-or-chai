const user = {
    username : "Ashu",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website.`);
        console.log(this); // this line is very important if we want to know more about this keyword
    }

}
user.welcomeMessage();
user.username = "RAJA";
user.welcomeMessage();

// console.log(this);

//browser me jo global objecvt hai wo hai window object , tabhi toh uska sraa properties hm use kr skte hn


function chai () {
    let username = "Ashu";
    console.log(this.username); //it will undefined bcz we are using this in function not in object
    //most important point which we have to remember
}
chai();


const code = () => {
    let name = "raja";
    console.log(this.name);
}
code();


//explicit return
const add2 = (num1 , num2) => {
    return num1 + num2;
}
console.log(add2(3 , 4));

//implicit return 
// if the statement will be of only one line then this implicit return point will come and we can write the code in parenthesis
//if you wanna write the in curly bracket then you have to use return keyword else not.

//example
const add = (num1 , num2) => (num1 + num2);
console.log(add(2 , 4));

//what will happen if we have to declare an object in arrow function then we have to use curly brackets but in the parenthesis

const addtwo = (num1 , num2) => ({username : "Ashu"});

console.log(addtwo(22 , 32));