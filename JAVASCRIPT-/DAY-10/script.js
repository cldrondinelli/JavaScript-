//for(let i = 0; i < 5; i++){
//    console.log("Halo");
//}
//OUTPUT: 1, 2, 3, 4, 5

//ITERATE Array
//let people = ["Claudio", "Rondinelli", "Carmela", "Molly"];

//for(let i = 0;i < people.length;i++){
//    console.log(people[i]);
//}

//BREAK Keyword
//let names = ["Carmela", "Molly", "Panda", "Sassy"];

//for(let i =0;i < names.length;i++){
//    console.log(names[i]);

//    if( i === 2){
//        break;
//    }
//}

//FOR/IN loop
//let people = ["Carmela", "Rondinelli", "Claudio", "Molly"];

//for(let i in people){
//    console.log(people[i]);
//}

//FOR?OF loop
//let people = ["Carmela", "Rondinelli", "Claudio", "Molly"];
//let i = 1;

//for(let person of people){
//    console.log(`${i}. ${person}`);
//    i++;
//}

let names = ["Sassy", "Molly", "Carmela", "Sally"];
let search = "SAlLy";
let isFound = false;

for(let i =0;i < names.length;i++){
    if(names[i].toLowerCase() === search.toLowerCase()){
        isFound = true;
        console.log(`Found: ${names[i]}`);
        break;
    }
}

if(!isFound)console.log("Not Found!");

