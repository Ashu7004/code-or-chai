//if

const isUserLoggedIn = true;
if(isUserLoggedIn){
    console.log("Executed");
}

if(2 == '2'){
    console.log("Sahi hai..");
}

if(2 === '2'){
    console.log("Galat isliye hai kyuki === data type + value dono check krta hai..");
}

if(2 === 2){
    console.log("Ab ye fir se sahi ans dega");
}

let temperature = 7;
if(temperature > 40){
    console.log("BAHUTE GARMI HAI");
}else if(temperature < 12){
    console.log("BADA THANDA HAI HO AAJ");
}else{
    console.log("AAJ MAUSAM BDA VYAST RKHNE WLA HAI");
}

//BAD PRACTICE

// const bal = 1000;
// if(bal > 500) console.log("Test") , console.log("Test2");

