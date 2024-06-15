class Animal {
      constructor(name) {
          this.name = name;
      }
  
      speak() {
          console.log(`${this.name} makes a noise.`);
      }
  }
  
  class Dog extends Animal {
      constructor(name, breed) {
          super(name); // Call the parent constructor with the name parameter
          this.breed = breed;
      }
  
      speak() {
          super.speak(); // Call the parent class method
          console.log(`${this.name} barks.`);
      }
  }
  
  const dog = new Dog('Rex', 'German Shepherd');
  dog.speak(); 
  // Outputs:
  // Rex makes a noise.
  // Rex barks.
  


  class Vehicle {
      start() {
          console.log('Vehicle is starting');
      }
  }
  
  class Car extends Vehicle {
      start() {
          super.start(); // Call the parent class method
          console.log('Car is starting');
      }
  }
  
  const car = new Car();
  car.start(); 
  // Outputs:
  // Vehicle is starting
  // Car is starting
  