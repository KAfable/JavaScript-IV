// Instructions
// Let’s make a constructor function for two character objects
// Give these objects name, location and phrase
// Make a speak method using.prototype and make the characters say their phrase in the console.
// function CharacterObject(attrs) {
//   this.name = attrs.name;
//   this.location = attrs.location;
//   this.phrase = attrs.phrase;
// }

// CharacterObject.prototype.speak = function() {
//   console.log(this.phrase);
// };

// let computer = new CharacterObject({
//   name: "Bender",
//   location: "earth",
//   phrase: "Kiss my shiny metal..."
// });

// console.log(computer);
// computer.speak();

class Character {
  constructor(attrs) {
    this.name = attrs.name;
    this.location = attrs.location;
    this.phrase = attrs.phrase;
  }
  place() {
    return `${this.name} is from ${this.location}.`;
  }
}

const bender = new Character({
  name: "Bender",
  location: "Earth",
  phrase: "Kiss my shiny metal ass"
});

class Human extends Character {
  constructor(humanAttrs) {
    super(humanAttrs);
    this.lastName = humanAttrs.lastName;
  }
  speak() {
    return `My name is ${this.name} ${this.lastName} and ${this.phrase}.`;
  }
}

const philip = new Human({
  name: "Philip",
  location: "Earth",
  phrase: "Shut up and take my money!",
  lastName: "Fry"
});

console.log(bender.place());
console.log(philip.place());
console.log(philip.speak());

// let leela = new CharacterObject({
//   name: "Leela",
//   location: "Earth",
//   phrase: "You're an idiot."
// });

// console.log(leela.place());

// class CharacterObject {
//   constructor(attrs) {
//     this.name = attrs.name;
//     this.location = attrs.location;
//     this.phrase = attrs.phrase;
//   }
//   work() {
//     console.log(`${this.name} works at Planet Express`);
//   }
// }

// const leila = new CharacterObject({
//   name = 'Leila',
//   location = 'USA',
//   phrase = "You're an idiot"
// })

// //vs

// class CharacterObject {
//   constructor(name, location, phrase) {
//     this.name = name;
//     this.location = location;
//     this.phrase = phrase;
//   }
//   work() {
//     console.log(`${this.name} works at Planet Express`);
//   }
// }

// const leila = new CharacterObject('Leila', 'Earth', "You're an idiot.")
