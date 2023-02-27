// symbol that usually represents an action or procss
// eg
// let 1 + 1 =  2
// + is an assignment operator and + is an arithmetic operator(addition) e.g
let x = 6;
let y = 4;
// subtraction
let result = x+y;
console.log("addition result is " + result)
let result2 =x-y;
console.log("Subtraction result is "+result2)
// division
let result3=x / y;
console.log("division result is "+result3)
// modulus
let result4= x%y; 
console.log("remainder is "+ result4)
// exponential
let result5 = x**y;
console.log("Exponential result is " + result5)

// ++ Increament
// Post increament a++
let a=10;
let result6= 2 + a++
console.log("Post increament answer is "+result6)
// Pre increament ++b
let b= 10;
let result7= 2 + ++b
console.log("Pre increament answr is " + result7)

// Post decreement
let c = 10;
let result8 = 2+ c--
console.log("Post decreement value is " + result8)
// Pre decreement 
let d=10;
let result9= 2+ --d
console.log("Pre decreement is "+ result9)

// Assignment operators 
// +=, -=,/=
// += add and assign 
let e = 10;
e += 5;
console.log("Add and assign value is " + e)
// -= subtract and assign
let f = 10;
f -= 3;
console.log("Subtract and assign value is " + f)
// comparison operator
// == equal to
// === equal value and equal type (strict equal)
// != not equal to
// !== not equal value and type
// > greater than
// < less than 
// <= greater than or equal to
// ? ternary operator

let g=4;
let h=14;
console.log(g!==h)

// ternary operator is like an if/else so it takes 3 arguments
// condition ? if value is true : value if false

let i = 20;
let j =18

let result10 = i > j ? "you are allowed into the class" : "gerrarahia mehn"
console.log("result for ternary operator = " + result10)

// Logical operators
// &&  logical AND | True if both conditions are true
// ||  logical OR | True if any of the conditions is true
// ! logical NOT | Will return true if the condition is false and vice verser

let k = true;
let l = false;

console.log(k && l)
console.log(k || l)
console.log(!k)
console.log(!l)

// Type operators 
// Basically typeof and instanceof
let firstName = "Eugene";
let num= 50;
console.log(typeof firstName)
console.log(typeof num)
console.log(typeof [1, 2, 3, 4])

// instanceof returns a boolean of true or false in relation to comparison of an example of data to a adatatype

let lastName = new String ('Katusiime');
console.log(lastName instanceof String);

// If statements
// 