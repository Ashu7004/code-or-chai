const accountId = "ashu_2558";
let accountName = "Raja";
var accountPassword = "2723872";
accountCity = "Ara";

// accountId = "9823"  --> not allowed
accountName = "ashutosh singh";
accountPassword = "32984y98";
accountCity = "patna";
let accountState;  //will show 'undefined' bca=z we have not assigned any value.

console.log(accountId);

/*
prefer not to use var

bcz of issue in block and functional scope
*/

console.table([accountId , accountName , accountPassword , accountCity , accountState]);