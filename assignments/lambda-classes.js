// CODE here for your Lambda Classes
class Person {
  constructor(name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location;
  }
  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
  }
}

//Class Person Test
const fredPerson = new Person("Fred", 28, "Bedrock");
const bettyPerson = new Person("Betty", 25, "Miami");
console.log(fredPerson);
fredPerson.speak();
bettyPerson.speak();
