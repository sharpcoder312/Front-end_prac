class User {
  constructor(name, age) {
      this.name = name;
      this.age = age;
  }				
  speak() {
      console.log(`${this.name}: hello!`);
  }	
}	

const user1 = new User('Steve', 20);
user1.speak();









class User {
  constructor(name, age) {
      this.name = name;
      this.age = age;
  }				
  speak(ifSay) {		
    ifSay(this.name);
  }	
}		

const user1 = new User('steve', 20);
function printSomething(name) {
  console.log(`${name}: hello!`);
}
user1.speak(printSomething);










class User {
  constructor(name, age, runEvery) {
      // fields
      this.name = name;
      this.age = age;
      this.callback = runEvery;
  }			
  speak() {		
      this.callback(this.name);
  }	
}		

const user1 = new User('Steve', 20, printSomething);
function printSomething(name) {
  console.log(`${name}: hello!`);
}
user1.speak();









class User {
  // constructor
  constructor(name, age, runEvery) {	// 콜백함수 자체에 지정
      // fields
      this.name = name;
      this.age = age;
      this.callback = runEvery;
  }
  // methods				
  speak() {		
      this.callback && this.callback(this.name);
  }	
}		

const user1 = new User('Steve', 20, printSomething);
console.log(user1.age);		// 20
function printSomething(name) {
  console.log(`${name}: hello!`);
}
user1.speak();
