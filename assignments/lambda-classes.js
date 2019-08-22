//constructor takes in multiple arguments instead of a single object paramter

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
const testPerson1 = new Person("Fred", 28, "Bedrock");
const testPerson2 = new Person("Betty", 25, "Miami");
console.log(testPerson1);
console.log(testPerson2);
testPerson1.speak();
testPerson2.speak();

class Instructor extends Person {
  constructor(name, age, location, speciality, favLanguage, catchPhrase) {
    super(name, age, location);
    this.specialty = speciality;
    this.favLanguage = favLanguage;
    this.catchPhrase = catchPhrase;
  }
  demo(subject) {
    console.log(`Today we are learning about ${subject}.`);
  }
  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}.`);
  }
}

const fred = new Instructor(
  "Fred",
  37,
  "Bedrock",
  "JavaScript",
  "Front-end",
  `Don't forget the homies`
);
const brit = new Instructor(
  "Brit",
  "none of our business",
  "Can-eh-dah",
  "JavaScript",
  "Front-end",
  "Please share your screen during breakouts, its mandatory."
);
//Instructor test cases
console.log(fred);
console.log(brit);
fred.demo("how to party like a rock star");
brit.demo("the horrors of pre-flexbox internet");

class Student extends Person {
  constructor(name, age, location, bg, cohort, fav) {
    super(name, age, location);
    this.previousBackground = bg;
    this.className = cohort;
    this.favSubjects = fav;
  }
  listSubjects() {
    this.favSubjects.forEach(console.log);
  }
  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}.`);
  }
  sprintChallenge(subject) {
    console.log(`${this.name} has begun a sprint challenge for ${subject}.`);
  }
}

const student1 = new Student("Kevin", 28, "Boston", "Analyst", "WEB23", [
  "cooking",
  "re-factoring",
  "Discord"
]);
const student2 = new Student("Karen", 55, "Everywhere", "HR", "WEB23", [
  "karen",
  "nagging",
  "speaking to managers"
]);

//Student Test Cases
console.log(student1);
console.log(student2);
student2.listSubjects();
student1.PRAssignment("Functional Veganism Programming");
student1.sprintChallenge("Oreo Clicker App");
