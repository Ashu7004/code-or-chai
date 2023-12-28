//singleton
//object literals
//object.create

const mysym = Symbol("key1");

const jsUser = {
    name : "Hitesh",
    [mysym] : "mykey1",
    age : 22,
    location : "jaipur",
    email : "ashutoshraja250@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday" , "Tuesday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser[mysym]);
// jsUser.email = "ashu12333@gmail.com";
// Object.freeze(jsUser);
// jsUser.email = "ashu9787387";
// console.log(jsUser);




