//Immediately Invoked Function Expression (IIFE)

function chai(){
    console.log(`DB CONNECTED`);
}
chai();

(function code(){
    console.log(`BD CONNECTED`);
})
();

(function aur(){
    console.log(`DB CONNECTED TWO`);
})
();

((name) => {
    console.log(`DB CONNECTED TWO ${name}`)
})
("DATABASE");