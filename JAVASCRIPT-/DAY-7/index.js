//let age = 19;
//let experience = 2;
//let language = "JavaScript";

//console.log(age >= 18 && experience > 1);
//output: true

//if(age >= 18 && experience > 1 && language === "JavaScript"){
//   console.log("You are QUALIFIED for the Job");
//}else{
//    console.log("You are NOT QUALIFIED for the Job");
//}

//NESTED CONDITION

//let age = 20;
//let experience = 3;

//if(age >= 18){

//        if(experience > 1){
//            console.log("You are Hired!");
//        }else{
//            console.log("You don't have experience");
//        }

//}else{
//    console.log("You are a Minor");
//}

let age = 13;
let isRegistered = false;

if(isRegistered && age >= 18){
    console.log("Valid Voter");
}else if(!isRegistered && age >= 18){
    console.log("Register First");
}else if (isRegistered && age < 18){
    console.log("Invalid Voter");
}else if (!isRegistered && age < 18){
    console.log("Non Voter");
}