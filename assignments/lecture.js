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

class CharacterObject {
  constructor(attrs) {
    (this.name = attrs.name),
      (this.location = attrs.location),
      (this.phrase = attrs.phrase);
  }
  place() {
    return `${this.name} is from ${this.location}.`;
  }
}

let leela = new CharacterObject({
  name: "Leela",
  location: "Earth",
  phrase: "You're an idiot."
});

console.log(leela.place());

// class CharacterObject {
//   constructor(attrs) {
//     this.name = name;
//     this.location = location;
//     this.phrase = phrase;
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
