// Scooter constructor
function Scooter(year, color, model) {
  this.year = year;
  this.color = color;
  this.model = model;
}

// Driver constructor
function Driver(name, age, experience) {
  this.name = name;
  this.age = age;
  this.experience = experience;
}

// PickupLocation constructor
function PickupLocation(address, city) {
  this.address = address;
  this.city = city;
}
// Create a new scooter
var myScooter = new Scooter(2023, "red", "XYZ-123");

// Create a new driver
var myDriver = new Driver("John Doe", 30, 5);

// Create a new pickup location
var myPickupLocation = new PickupLocation("123 Main St", "New York City");

// Accessing properties of the created objects
console.log(myScooter.year); // Output: 2023
console.log(myDriver.name); // Output: John Doe
console.log(myPickupLocation.city); // Output: New York City
