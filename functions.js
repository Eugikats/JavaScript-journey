// a function is a reusable block of code
// function body/statemen
function sub(){
    // this is where you put the values
}
function say() {
    console.log('output from say()')
}
say()

function Add(a ,b){
    return a+b
}
Add()
console.log("...........Adding values,,,,,,,,,,")
console.log(Add(1000,5504))
console.log(Add(2,3))

// Local and global variables 
// Local variable has a limited scope inside a function only
// global varibale has a scope that can be accessed in any function

function multiply(){
    let localVaraible1 = 5;
    let localVariable2 = 6;

    let product = localVaraible1 * localVariable2

    return product
}
console.log('my product is',multiply())

function multiply2(){
    let total = localVaraible1*localVariable2
    return product
}
console.log('total ' multiply2)
