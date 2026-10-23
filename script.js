// TASK ! PURE FUNCTION
let total = 0;
function addToTotal(num) {
  total += num; 
}

// PURE VERSION
function addPure(currentTotal, num) {
  return currentTotal + num; 
}

const newTotal = addPure(10, 5);
console.log(newTotal); // 15

// TASK 2 ! Use .reduce() to Calculate Average

const grades = [85, 90, 78, 92, 88];

function getAverage(arr) {
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  return sum / arr.length;
}

const averageGrade = getAverage(grades);
console.log(averageGrade); // 86.6

// Task 3: Curried / Partially Applied Discount

const applyDiscount = rate => price => price - (price * rate);

const apply10 = applyDiscount(0.1);
console.log(apply10(200)); // 180

function discount(rate, price) {
  return price - (price * rate);
}
const apply10Bind = discount.bind(null, 0.1);
console.log(apply10Bind(200)); // 180

//Task 4: Chain map, filter, reduce


const products = [
  { name: "Book", price: 200 },
  { name: "Pen", price: 30 },
  { name: "Laptop", price: 50000 },
  { name: "Bag", price: 700 }
];

const finalTotal = products
  .filter(p => p.price > 500)       
  .map(p => p.price * 0.9)          
  .reduce((sum, price) => sum + price, 0);

console.log(`Final total after discount: ${finalTotal}`); // Final total after discount: 45630