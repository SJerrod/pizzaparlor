//Business Logic

function Order() {
  this.customer = [];
  this.pizzaOrder = [];
}

function CustomerInfo(name, phoneNumber, address) {
  this.name = name;
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
    this.pizzaCost += 6.00;
  } else if (this.meats === 6) {
    this.pizzaCost += 5.00;
  } else if (this.meats === 5) {
    this.pizzaCost += 4.00;
  } else if (this.meats === 4) {
    this.pizzaCost += 3.00;
  } else if (this.meats === 3) {
    this.pizzaCost += 2.00;
  } else if (this.meats === 2) {
    this.pizzaCost += 1.00;
  } else if (this.meats === 1) {
    this.pizzaCost += 0.00;
  } else {
    confirm("Continue with no meat?");
  } if (this.veggies === 10) {
    this.pizzaCost += 4.50;
  } else if (this.veggies === 9) {
    this.pizzaCost += 4.00;
  } else if (this.veggies === 8) {
    this.pizzaCost += 3.50;
  } else if (this.veggies === 7) {
    this.pizzaCost += 3.00;
  } else if (this.veggies === 6) {
    this.pizzaCost += 2.50;
  } else if (this.veggies === 5) {
    this.pizzaCost += 2.00;
  } else if (this.veggies === 4) {
    this.pizzaCost += 1.50;
  } else if (this.veggies === 3) {
    this.pizzaCost += 1.00;
  } else if (this.veggies === 2) {
    this.pizzaCost += 0.50;
  } else if (this.veggies === 1) {
    this.pizzaCost += 0.00;
  } else {
    confirm("Continue with no veggies?");
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
$(document).ready(function() {
  $("form#pizza-order").submit(function(event) {
    event.preventDefault();
    let customerName = $("#name").val();
    let customerPhone = $("#phone-number").val();
    let customerAddress = $("#address").val();
    let pizzaSize = $(".size").val();
    let pizzaSauce = $(".sauce-choice").val();
    let meatToppings = 0;
    for (i=0; i.document.meat.meats.length; i++) {
      if (document.meat.meats[i].checked===true) {
        meatToppings +=1;
      }
    }
    let veggieToppings = 0;
    for (i=0; i.document.veggie.veggies.length; i++) {
      if (document.veggie.veggies[i].checked===true) {
        veggieToppings +=1;
      }
    }
    let newPizza = new Pizza(pizzaSize, pizzaSauce, meatToppings, veggieToppings);
    let customerInvoice = new CustomerInfo(customerName, customerPhone, customerAddress);
    let addToOrder = new Order(customerInvoice, newPizza);
    $(".customer-info").text(" " + customerInvoice);
    $("ol#order").append.html("<li>newPizza</li>");
    $("#add-to-order").show();
  });
});