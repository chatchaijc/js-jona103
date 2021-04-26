("use strict");
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, FFirenze, Italy",
  categories: ["Focaccia", "Bruschetta", "Carlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"]
};
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);
const [x, y, z] = arr;
console.log(x, y, z);
let [first,second] = restaurant.categories;
console.log(first,second);
[first, ,second] = restaurant.categories;
console.log(first,second);
//Switch value
const temp = first;
first = second;
second = temp;
console.log(first,second);