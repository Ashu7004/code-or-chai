//for

for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(index);
}

for(let i = 0 ; i <= 4 ; i++){
    console.log(`Outer loop value : ${i}`);
    for(let j = 0 ; j <= 4 ; j++){
        // console.log(`Inner loop value ${j} for outer loop ${i}`);

    console.log(i + "*" + j + " = " + i*j);
    }
}

const array = ["Apple" , "Banana" , "Orange"];

for(let i = 0 ; i < array.length ; i++){
    console.log(array[i]);
}

//break and continue

for(let i = 0 ; i < 10 ; i++){
    if(i == 5){
        console.log(`detected 5`);
        break;
    }
    console.log(`Value of i is ${i}`);
}

for(let i = 0 ; i < 10 ; i++){
    if(i == 5){
        // console.log(`detected 5`);
        continue;
    }
    console.log(`Value of i is ${i}`);
}