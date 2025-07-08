// Accept bill amount and tip percentage
// Calculate and return the total amount

function calaculateTotal(billAmount, tipPercentage) {
  let tipAmount = (billAmount * tipPercentage) / 100;
  let totalAmount = billAmount + tipAmount;
  return totalAmount;
}
let bill= 100;
let tip=15;
let total = calaculateTotal(bill, tip);
console.log(`The total amount is: $${total.toFixed(2)}`);