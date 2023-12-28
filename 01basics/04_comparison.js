console.log("2" > 1);
console.log("2" >= 1);
console.log(2 < 1);
console.log("2" <= 1);
console.log("2" == 1);
console.log("2" === 1);

//between NULL and ZERO
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

//REASON
//The reason is that equality check == and comparison > < >= <= work differently 
//Comparisons convert null to a number , treating it as 0. That's why (3) return true and (2) return false.