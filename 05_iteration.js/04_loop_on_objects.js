const myobj = {
    js : "Javascript",
    cpp : "c++",
    rb : "ruby",
    swift : "swift by apple"
}

for (const key in myobj) {
    console.log(myobj[key]);
    console.log(`${key} shortcut is for ${myobj[key]}`);
}

//can we use for in loop in array also?

const array = ["Ashu" , "Raja" , "Kumar" , "Singh"];

for (const key in array) {
    // console.log(key);
    console.log(array[key]);
}

//NOTE
//we can not iterate on map using forin loop

