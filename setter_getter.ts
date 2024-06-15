


const person = { 
	firstName: "John", 
	lastName: "Doe", 
	get fullName() { 
		return `${this.firstName} ${this.lastName}`; 
	}, 
	set fullName(name) { 
		const parts = name.split(" "); 
		this.firstName = parts[0]; 
		this.lastName = parts[1]; 
	}, 
}; 

// console.log(person.fullName); // "John Doe" 

// person.fullName = "Jane Smith"; 
// console.log(person.firstName); // "Jane" 
// console.log(person.lastName); // "Smith"

const temperature = { 
	_celsius: 0, 
	get fahrenheit() { 
		return this._celsius * 1.8 + 32; 
	}, 
	set fahrenheit(value) { 
		this._celsius = (value - 32) / 1.8; 
	}, 
}; 

// console.log(temperature.fahrenheit); // 32 
// temperature.fahrenheit = 78; 
// console.log(temperature._celsius); // 20



const rectangle = {
      _width: 5,
      _height: 10,
  
      // Getter for the area
      get area() {
          return this._width * this._height;
      },
  
      // Getter for the perimeter
      get perimeter() {
          return 2 * (this._width + this._height);
      },
  
      // Setter for the width
      set width(value) {
          if (value > 0) {
              this._width = value;
          } else {
              console.error("Width must be positive!");
          }
      },
  
      // Setter for the height
      set height(value) {
          if (value > 0) {
              this._height = value;
          } else {
              console.error("Height must be positive!");
          }
      }
  };
  
//   console.log(`Area: ${rectangle.area}`); // Area: 50
//   console.log(`Perimeter: ${rectangle.perimeter}`); // Perimeter: 30
  
//   rectangle.width = 20;
//   rectangle.height = 15;
  
//   console.log(`New Area: ${rectangle.area}`); // New Area: 300
//   console.log(`New Perimeter: ${rectangle.perimeter}`); // New Perimeter: 70













const bankAccount = {
      _balance: 0,
  
      // Getter for balance
      get balance() {
          return this._balance;
      },
  
      // Setter for deposit
      set deposit(amount) {
          if (amount > 0) {
              this._balance += amount;
          } else {
              console.error("Deposit amount must be positive!");
          }
      },
  
      // Setter for withdraw
      set withdraw(amount) {
          if (amount > 0 && amount <= this._balance) {
              this._balance -= amount;
          } else if (amount > this._balance) {
              console.error("Insufficient funds!");
          } else {
              console.error("Withdrawal amount must be positive!");
          }
      }
  };
  
//   console.log(`Initial Balance: ${bankAccount.balance}`); // Initial Balance: 0
  
//   bankAccount.deposit = 1300;
//   console.log(`Balance after deposit: ${bankAccount.balance}`); // Balance after deposit: 1300
  
//   bankAccount.withdraw = 900;
//   console.log(`Balance after withdrawal: ${bankAccount.balance}`); // Balance after withdrawal: 400
  
//   bankAccount.withdraw = 600; // Insufficient funds!
//   console.log(`Balance after failed withdrawal: ${bankAccount.balance}`); // Balance after failed withdrawal: 400
  
const car = {
      _speed: 0,
      _maxSpeed: 150,
  
      // Getter for speed
      get speed() {
          return this._speed;
      },
  
      // Setter for speed
      set speed(value) {
          if (value >= 0 && value <= this._maxSpeed) {
              this._speed = value;
          } else if (value > this._maxSpeed) {
              console.error(`Speed cannot exceed ${this._maxSpeed} km/h!`);
          } else {
              console.error("Speed cannot be negative!");
          }
      },
  
      // Getter for maxSpeed
      get maxSpeed() {
          return this._maxSpeed;
      },
  
      // Setter for maxSpeed
      set maxSpeed(value) {
          if (value > 0) {
              this._maxSpeed = value;
          } else {
              console.error("Maximum speed must be positive!");
          }
      }
  };
  
  console.log(`Initial Speed: ${car.speed} km/h`); // Initial Speed: 0 km/h
  
  car.speed = 120;
  console.log(`Speed after setting: ${car.speed} km/h`); // Speed after setting: 120 km/h
  
  car.speed = 160; // Speed cannot exceed 150 km/h!
  console.log(`Speed after invalid setting: ${car.speed} km/h`); // Speed after invalid setting: 120 km/h
  
  car.speed = -10; // Speed cannot be negative!
  console.log(`Speed after invalid setting: ${car.speed} km/h`); // Speed after invalid setting: 120 km/h
  
  car.maxSpeed = 180;
  car.speed = 160;
  console.log(`Speed after updating maxSpeed and setting: ${car.speed} km/h`); // Speed after updating maxSpeed and setting: 160 km/h
  


