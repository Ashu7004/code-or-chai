const name = "Raja";
const repoCount = 50;

//console.log(name + repoCount + " Value"); //older syntax

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // newer syntax

const gameName = new String("ashu_2558 _raja_76799");
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.charAt(3));
console.log(gameName.toUpperCase());
console.log(gameName.indexOf('5'));

let newGame = gameName.substring(0 , 4);
console.log(newGame);
const anotherString = gameName.slice(-8 , 4);
console.log(anotherString);

const newString = "   ashu    ";
console.log(newString);
console.log(newString.trim());

const url = "http://ashu.com/ashu%20singh";
console.log(url.replace('%20' , '-'));
console.log(url.includes('raja'));
console.log(gameName.split('_'));