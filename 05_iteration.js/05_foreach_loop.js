const coding = ["c++" , "java" , "c" , "ruby" , "python"];

coding.forEach(function (val) {
    console.log(val);
})

//using arrow function
// coding.forEach((val) => (console.log(val))
// )

//Most Important

function printme (item){
    console.log(item);
}

coding.forEach(printme);

coding.forEach((item , index , coding) => {
    console.log(item , index , coding);
})

const mycoding = [
    {
        languageName : "c++",
        languageFileName : "cpp"
    },
    {
        languageName : "c",
        languageFileName : "c"
    },
    {
        languageName : "java",
        languageFileName : "java"
    },
    {
        languageName : "javascript",
        languageFileName : "js"
    }
]
mycoding.forEach((item) => {
    console.log(item.languageName);
})