//Business Logic

function Order() {
  this.customer = [];
  this.pizzaOrder = [];
}

function CustomerInfo(firstName, lastName, phoneNumber, address) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
  this.address = address;
}

function Pizza(size, sauce, meats, veggies) {
  this.size = size;
  this.sauce = sauce;
  this. meats = meats;
  this.veggies = veggies;
}

Pizza.prototype.totalCost = function() {
  let pizzaCost = 0;
  if (this.size === "xtra-large") {
    this.pizzaCost = 19.25;
  } else if (this.size === "large") {
    this.pizzaCost = 16.00; 
  } else if (this.size === "medium") {
    this.pizzaCost = 13.75;
  } else if (this.size === "small") {
    this.pizzaCost = 12.50;
  } else {
    alert("Must choose size");
  } if (this.meats === 7) {
    this.pizzaCost += 6;
  } else if (this.meats === 6) {
    this.pizzaCost += 5;
  } else if (this.meats === 5) {
    this.pizzaCost += 4;
  } else if (this.meats === 4) {
    this.pizzaCost += 3;
  } else if (this.meats === 3) {
    this.pizzaCost += 2;
  } else if (this.meats === 2) {
    this.pizzaCost += 1;
  } else (this.meats === 1) {
    this.pizzaCost += 0;
  } if (this.veggies === 10) {
    this.pizzaCost += 4.5;
  } else if (this.veggies === 9) {
    this.pizzaCost += 4;
  } else if (this.veggies === 8) {
    this.pizzaCost += 3.5;
  } else if (this.veggies === 7) {
    this.pizzaCost += 3;
  } else if (this.veggies === 6) {
    this.pizzaCost += 2.5;
  } else if (this.veggies === 5) {
    this.pizzaCost += 2;
  } else if (this.veggies === 4) {
    this.pizzaCost += 1.5;
  } else if (this.veggies === 3) {
    this.pizzaCost += 1;
  } else if (this.veggies === 2) {
    this.pizzaCost += .5;
  } else (this.veggies === 1) {
    this.pizzaCost += 0;
  }
  return this.pizzaCost;
}

Order.prototype.addCustomer = function(customerInfo) {
  this.customer.push(customerInfo);
}

Order.prototype.addPizza = function(pizza) {
  this.pizzaOrder.push(pizza);
}
//UI Logic