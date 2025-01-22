/*
function myFunction(p1, p2){
    console.log(p1 *p2);
 }
 
 myFunction(20, 90);
*/

/*
function greet(firstName, lastName){
    console.log(`Hello ${firstName} ${lastName}`);
}

greet("Rondinelli", "Herrera");
*/

/*
let x = myFunction(4, 3);
console.log(x);

    function myFunction(a, b){
        return a * b;
    }

*/

/*
function toCelcius(fahrenheit){
    return(5/9) * (fahrenheit -32)
}

let value = toCelcius(77);
document.getElementById("text").innerHTML = value;
*/

/*function greetings(username, age){
    console.log(`Happy Birthday! ${username}`)
    console.log(`You're ${age} Years Old!`)
}

greetings("Rondinelli", 21);
*/

/*
function isEven(number){


    /*
      if(number % 2 ===0){
        return true;
    }else{
        return false;
    }
     

    return number % 2 === 0 ? true : false;

}

console.log(isEven(18));
*/

/*
function isValidEmail(email){
    if(email.includes("@")){
        return true;
    }else{
        return false;
    }
}

console.log(isValidEmail
    ("ronherrera011104@gmail.com"));
*/

function myFunction() {
    let carName = "Volvo";
    let age = 21;
    let text = "Inside: " + typeof age + " " + carName; 
    document.getElementById("text").innerHTML =
     text;
  }
  
  myFunction();