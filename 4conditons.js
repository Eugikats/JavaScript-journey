let age = 150;
if(age < 18){console.log("gerrarahia mehn")}
else{console.log("You can enter the program")}
if (age < 18){console.log("You are not eligible to get a driving license")}
else if (age == 18){console.log("You just became eligible to get a driving license")}
else if (60 > age > 18){console.log("You are eligible to get a driving license")}
else if (age > 60){console.log("You are a bit too old for a driving license")}

// Ternary operator
age > 18 ? console.log("move out of your parents' house"):console.log("what do you want for breakfast little one");

// switch statement
// switch case 
let startRating = 5;
switch(startRating){
    case 1://this is like saying the review is one
        console.log("very bad")
        break;
     case 2:
        console.log("bad")
        break
     case 3:
        console.log("average") 
    case 4:
        console.log("good")
        break;
    case 5:
        console.log("very good")
        break;
    default:
        console.log("enter a valid integer between 1 & 5");
        }    

// default case
// Multiple identical options
switch ( new Date().getDay()) {
    case 0:
        console.log("Sunday")
        break;
    case 1:  
    console.log("Monday")
    break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    default:
        console.log("enter a valid date")        
        }
