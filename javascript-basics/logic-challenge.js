let price = 200;
let quantity = 3;
let discount = 10 //percent

let totalPrice = quantity * price;
console.log("Total Price: " + totalPrice);

let discountAmount = (totalPrice * discount) / 100;
console.log("Discount Amount: " ,  discountAmount);

let finalPrice = totalPrice - discountAmount;
console.log("Final Price: " , finalPrice);
