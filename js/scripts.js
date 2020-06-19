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
  this.size = [];
  this.sauce = [];
  this. meats = [];
  this.veggies = [];
}

function Sizes(small, medium, large) {
  this.small = small;
  this.medium = medium;
  this.large = large;
}

Order.prototype.addCustomer = function(customerInfo) {
  this.customer.push(customerInfo);
}

Order.prototype.addPizza = function(pizza) {
  this.pizzaOrder.push(pizza);
}
//UI Logic