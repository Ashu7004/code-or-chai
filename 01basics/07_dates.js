let myDate = new Date();

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);


// let myCreateDate = new Date(2023 , 0 , 23);
// console.log(myCreateDate.toLocaleDateString());

// let myCreateDate = new Date(2023 , 0 , 23 , 5 , 3);
// console.log(myCreateDate.toLocaleString());

let myCreateDate = new Date("2023-02-23");
console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(Math.floor( Date.now()/1000 ));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate());

// `${newDate.getDay()} and the time ${newDate.getTime()}`;

