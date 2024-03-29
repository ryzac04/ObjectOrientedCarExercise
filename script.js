// Part One:

class Vehicle{
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  honk() {
    return "Beep.";
  }
  toString() {
    return `The vehicle is a ${this.make} ${this.model} from ${this.year}`;
  }
}

// let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);

// Part Two:

class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 4;
  }
}

// let myFirstCar = new Car("Toyota", "Corolla", 2005);

class Motorcycle extends Vehicle{
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 2;
  }
  revEngine() {
    return "VROOM!!!";
  }
}

// let myFirstMotorocycle = new Motorcycle("Honda", "Nighthawk", 2000);

class Garage {
  constructor(capacity) {
    this.vehicles = [];
    this.cap = capacity;
  }
  add(newVehicle) {
    if (!(newVehicle instanceof Vehicle)) {
      return "Only vehicles are allowed in here!";
    }
    if (this.vehicles.length + 1 > this.cap) {
      return "Sorry, we're full.";
    }
    if (this.vehicles.push(newVehicle)) {
      return "Vehicle added!";
    }
  }
}

let garage = new Garage(2);
let garage2 = new Garage(4);