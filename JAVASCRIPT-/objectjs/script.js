const person1 = {
    firstName: "Claudio",
    lastName: "Rondinelli",
    age: 20,
    eyeColor: "Brown",
    fullName: function(){
      return this.firstName + " " + this.lastName;
    }
  };

const age = person1;

age.age = 20;


document.getElementById("text").innerHTML = 
person1.fullName() + " is " + person1.age + " years old.";
/*console.log(`${person.firstName} is ${person.age} years old.`)*/

/*const person2 = {
  firstName: "Claudio",
  age: 50
}

const age = person2;

age.age = 21;

console.log(person2["firstName"] + "is" + person2["age"] + "years old.");*/
