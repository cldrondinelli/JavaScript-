/*

let person = {
    firstName:"Claudio",
    lastName:"Rondinelli",
    age:20,
    hobbies:["Reading", "Writing", "Coding"],
    pets: {
        1: {
            name:"Molly",
            type:"Cat"
        },
        2: {
            name:"Ssally",
            type:"Cat"
        }
    }
};

console.log(person);

*/

/*
let person = {
    firstName: "Claudio",
    lastName: "Rondinelli",
    age: 20
};

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(`${person.firstName} ${person.lastName}`);
*/

/*
let person = {
    firstName: "Ron",
    lastName: "Herrera",
    age: 20,
    hobbies: ["Coding", "Reading", "Writing", "Sleeping"]
}

console.log(person.hobbies[0]);
console.log(person.hobbies[3]);
*/

/*
let person = {
    firstName: "Claudio",
    lastName: "Rondinelli",
    pets: {
        0: {
            name: "Molly",
            type: "Cat"
        },

        1: {
            name: "Mocha",
            type: "Dog"
        }
    }
};

console.log(`Name: ${person.pets[1]["name"]}`);
console.log(`Type: ${person.pets[1]["type"]}`);
*/


/*
//JSON Write
let person = {
    firstName: "Claudio",
    lastName: "Herrera",
    age: 20
};

person["firstName"] = "Rondinelli";
console.log(person);

person["middleInitial"] = "L.";
console.log(person);

person["hobbies"] = ["Writing", "Reading", "Drawing", "Painting"];
console.log(person);
console.log(person.hobbies[3]);
*/

/*
//JSON stringify
let person = {
    firstName: "Claudio",
    lastName: "FWDP",
    age: 20
}

let strPerson = JSON.stringify(person);
console.log(strPerson);
*/

/*
//JSON parse
let strPerson = `{"firstNAme":"Claudio", "lastName":"Rondinelli", "age":20}`;

person = JSON.parse(strPerson);
console.log(person);
*/

/*
let people = [
    {
        firstName: "Claudio",
        lastName: "Rondinelli",
        age: 20
    },

    {
        firstName: "Sally",
        lastName: "Porsche",
        age: 21
    },

    {
        firstName: "Lightning",
        lastName: "McQueen",
        age: 22
    }
];

console.log(`${people[0].firstName} ${people[0].lastName}`);
*/

/*
//JSON Array
let people = [
    {
        firstName: "Claudio",
        lastName: "Rondinelli",
        age: 20
    },

    {
        firstName: "Sally",
        lastName: "Porsche",
        age: 21
    },

    {
        firstName: "Lightning",
        lastName: "McQueen",
        age: 22
    }
];

for(let i = 0; i < people.length;i++){
    console.log(`First Name: ${people[i].firstName}`);
    console.log(`Last Name: ${people[i].lastName}`);
    console.log(`Age: ${people[i].age}`);
    console.log('');
};
*/

/*
//JSON FOR/IN LOOP
let person = {
    firstName: "Claudio",
    lastName: "Rondinelli",
    age: 20
}

for(let k in person){
    console.log(`${k}: ${person[k]}`);
}
*/

/*
let person = {
    firstName: "Ron",
    lastName: "Herrera",
    age: 20
}

let keys = Object.keys(person);
console.log(keys);
*/

let grades = {
    Science: 90,
    Math: 98,
    Programming: 75,
    Java: 80,
    HTML: 99
}

let average = 0;

for(let k in grades){
    console.log(`${k}: ${grades[k]}`)
    average += grades[k];
}

average /= Object.keys(grades).length;
console.log('');
console.log(`Average: ${average}`);