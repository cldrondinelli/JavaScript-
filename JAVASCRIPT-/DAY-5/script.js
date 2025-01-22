//let names = ["Claudio", " Molly", " Panda", " Rondinelli"];
//console.log(names[1]);


//UPDATING ARRAYS
//let cars = ["Civic", "Hillux"];
//cars[1] = "Raptop";
//alert(cars);
//output: Civic, Raptor

//ADDING
//let cars = ["Civic", "Hillux"];
//cars[2] = "Raptop";
//alert(cars);
//output: Civic,Hillux<Raptop

//more ways to ADD
//let cars = ["Civic", "Raptop"];
//cars[cars.length] = "Lancer";
//alert(cars)

//let cars = ["Civic", "Raptop"];
//cars.push("Mustang");
//alert(cars)

//let cars = ["Civic", "Raptop"];
//cars.unshift("Lancer");
//cars.unshift("Corvette");
//alert(cars[4]);

//using length
//let names = ["Claudio", "Caramela", "Molly", "Panda", "Sassy"];
//names.length = 3;
//alert(names);

//using pop
//let names = ["Claudio", "Caramela", "Molly", "Panda", "Sassy"];
//names.shift();
//alert(names);

//using slice(start_index, end_index)
//let names = ["Claudio", "Caramela", "Molly", "Panda", "Sassy"];
//names = names.slice(0,2);
//alert(names);

let firstName = ["Claudio", "Carmela"];
let lastName = ["SDPT", "FWDP"];
let age = [20, 21];

let id = 0;
console.log(`ID: ${id}`);
console.log(`First Name: ${firstName[id]}`);
console.log(`Last Name: ${lastName[id]}`);
console.log(`Age: ${age[id]}`);
