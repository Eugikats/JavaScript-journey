let selectedColors = ['red','blue','pink','black',['Uganda','Tanzania']]
selectedColors[2] = 1
console.log(selectedColors[4][0]);

let cars = ['Ford','Toyota','Mercedes']

// cars.push(['Ferrari','Lambo','Tesla'])
let africanCars= ['jeep','kawundo']

// console.log(cars.concat(cars,africanCars));

// pop()
let fruits = ['apple','pineapple','grapes','greens']
// fruits.push('papaya')
// removes the last item in the array
// fruits.pop();
// fruits.splice(startposition, numberofitemsTo remove);
// delete fruits[1][0] deletes the specified item
// fruits.splice(0,1)
// console.log(fruits);
// let itemRemoved = fruits.shift();
// fruits.shift()
// fruits.unshift("pineapple")
// console.log(fruits);
// console.log(itemRemoved)
// unshift u can use this to add something to the beginning of an array
// delete
// delete fruits[0];\
// fruits.unshift('papaya')
// fruits.shift()
// delete fruits[2] ;
fruits.splice(1,0,'cubana','banana')

// you can even add items using the splice as long as you make sure your first position is clear then it'll skip that and go on after
/*fruits.splice(2,3)
console.log(fruits)

// NESTED ARRAYS
let hobbies = [['swimming',4],['singing',5],['netball',6],['football',7]]
// Print out items in sub arrays
console.log('Printing an item in a sub array '+hobbies[1][0])
// Remove an element from an array
hobbies[2].pop();
console.log('after removing last item '+ hobbies)
// Adding elements inside the sub array
hobbies[1].push('hockey',3)
console.log('after pushimg ',hobbies)

// Adding a sub array
hobbies.splice(1,0,['dancing',0])
console.log('using splice is '+ hobbies)
// looping thru arrays
hobbies = [['swimming',4],['singing',5],['netball',6],['football',7]]
hobbies.forEach((hobby)=>{
    hobby.pop(1)
}
)
console.log('this is an array with removed 2nd elements '+hobbies)*/

// flattening arrays removes all sub arrays and creates one array
// const flatArray = hobbies.flat();
let hobbies = [['swimming',4],['singing',5],['netball',6],['football',7]]
console.log('flat array ',hobbies.flat())