//const tinderUser=new Object();

//we can declare object like above and below declaration

const tinderUser = {}
tinderUser.id = "123"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email : "ashuraja250@gmail.com",
    fullName : {
        userName : {
            firstName : "ashutosh",
            lastName : "kumar"
        }
    }
}

console.log(regularUser.fullName.userName);

const obj1 = {1 : "a" , 2 : "b"};
const obj2 = {3 : "3" , 4 : "4"};
//const obj3 = {obj1 , obj2};
//const obj3 = Object.assign({} , obj1 , obj2);

const obj3 = {...obj1 , ...obj2};
//console.log(obj3);

const users = [
    {
        id : 1,
        email : "ashutosh@gmail.com",
    },
    {
    },
    {
    },
    {
    },
    {
    },
]

users[1].email;
console.log(tinderUser);

console.log(Object.keys(tinderUser));// it will return the values in array and we use this method because we can apply any function of array on these object properties
console.log(Object.values(tinderUser)); // it will also return the values in array

console.log(Object.entries(tinderUser)); // it will store all the [keys : values] entries in an array particularly

console.log(tinderUser.hasOwnProperty('isLoogedIn'));

const course = {
    courseName : "Js in Hindi",
    price : "999",
    courseInstructor : "Hitesh"
}
console.log(course.courseInstructor);

//Another way to console the properties of objects

const {courseInstructor} = course
console.log(courseInstructor);

//If you wanna give you another name of ur property then that can also be possible 

const {courseInstructor : instructor} = course;
console.log(instructor);

// {
//     "name" : "Ashutosh",
//     "courseName" : "JS in Hindi",
//     "price" :  "free"
// }

[
    {},
    {},
    {}
]