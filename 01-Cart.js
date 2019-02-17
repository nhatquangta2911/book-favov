var orders = [
  { name: "Shoes", unitPrice: 150000, quantity: 3 },
  { name: "Books", unitPrice: 70000, quantity: 5 },
  { name: "Milk", unitPrice: 7000, quantity: 20 },
  { name: "Mango", unitPrice: 20000, quantity: 10 }
];

var totalPrice = orders.reduce(function(totalPrice, item){
  return totalPrice + item.unitPrice * item.quantity;
}, 0);

var resultString = orders.reduce(function(result, item) {
  return result + item.name + ' ';
}, '');

console.log(totalPrice);
console.log(resultString);
