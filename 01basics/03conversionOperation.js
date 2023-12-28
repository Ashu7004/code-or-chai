let score = "33abc";

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// null => 0
// undefined => NaN
// true => 1 ; false => 0

let isLoogedIn = 1;

let booleanIsLoggedIn = Boolean(isLoogedIn);
console.log(booleanIsLoggedIn);

//1 => true ; 0 => false
//"raja" => true
// "" => false

let someNumber = 33;

let stringNumber = String(someNumber);
console.log(typeof stringNumber);
console.log(stringNumber);

/*********OPERATIONS***********/

let value = 2;

let negValue = -value;
console.log(negValue);

console.log("1" + 2);
console.log(1 + "2");
console.log(1 + 3 + "2" + 2);
console.log("1" + 2 + 3 + "2");
console.log(3 + 4 * 5 % 3);