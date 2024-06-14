


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
  
  


