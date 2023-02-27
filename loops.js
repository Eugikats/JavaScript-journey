// For loops
// for
// for/in
// for/of
// for (initialization; condition; increment){}
let student;

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
for(student = 1; student < 7; student++){
    console.log("value of student is "+ student);
} 
let oddNumbers;
for(oddNumbers=0; oddNumbers <=10; oddNumbers+=3){
    console.log("the value of odd numbers is "+oddNumbers)
}

let fruits=["Banana","Apple","Grapes","Blue berry"]
let fruit;
console.log("............for in.........."
)
for (fruit in fruits){
    console.log(fruits[fruit])
} 
// for this one you need to call the array then the undefined variable

console.log(".....for of......")
for (fruit of fruits){
    console.log(fruit)
}
// for this one you don't need to call the array and variable you just console.log the whole variable


//WHILE LOOPS
console.log("twende tupaate")
let counter = 10;
while(counter<14){console.log("pa");counter++}
console.log("paaate")
//DO WHILE LOOP
console.log(".........do while loop........")
counter = 20;

do {
    console.log("The value of counter is "+counter);counter--
} while(counter>= 15)

// const names =["youtube","facebook","instagram","netflix","amazon"]

// for(const n of names){
//     console.log(n);
// }

const symbols = {
    yt: "youtube",
    ig: "instagram",
    fb: "facebook"
 }

 for(const n in symbols){
    console.log(symbols[n])
 }