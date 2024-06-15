// class Animal {
//       constructor(name) {
//           this.name = name;
//       }

//       speak() {
//           console.log(`${this.name} makes a noise.`);
//       }
//   }

//   class Dog extends Animal {
//       constructor(name, breed) {
//           super(name); // Call the parent constructor with the name parameter
//           this.breed = breed;
//       }

//       speak() {
//           super.speak(); // Call the parent class method
//           console.log(`${this.name} barks.`);
//       }
//   }

//   const dog = new Dog('Rex', 'German Shepherd');
//   dog.speak();
//   // Outputs:
//   // Rex makes a noise.
//   // Rex barks.

//   class Vehicle {
//       start() {
//           console.log('Vehicle is starting');
//       }
//   }

//   class Car extends Vehicle {
//       start() {
//           super.start(); // Call the parent class method
//           console.log('Car is starting');
//       }
//   }

//   const car = new Car();
//   car.start();
//   // Outputs:
//   // Vehicle is starting
//   // Car is starting

// class Parent {
//   hello1() {
//     console.log("Hello1 from Parent Class");
//   }
//   hello2() {
//     console.log("Hello2 from Parent Class");
//   }
// }
// class child extends Parent {
//   test() {
//     super.hello1();
//   }
// }
// var obj = new child();
// obj.test();

class Device {
      info(name,model,price,battery) {
          console.log(`This is ${name} ${model}, This is $${price} and battery is ${battery}maH`);
      }
  }
  
  class Smartphone extends Device {
      info(arg1,arg2,arg3,arg4) {
          super.info(arg1,arg2,arg3,arg4); // Call the parent class method
          
      }
  }
  
  const smartphone = new Smartphone();
  smartphone.info("IPhone","15Pro Max","1200USD","6700");
  // Outputs:
  // This is a device
  // This is a smartphone
  
