("use strict");
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, FFirenze, Italy",
  categories: ["Italian", "Pizzaria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Carlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  }
};
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);
const [x, y, z] = arr;
console.log(x, y, z);
let [first, second] = restaurant.categories;
console.log(first, second);
[first, , second] = restaurant.categories;
console.log(first, second);
//Switch value
// const temp = first;
// first = second;
// second = temp;
// console.log(first,second);

// trick for switch unuse more variable
[second, first] = [first, second];
console.log(first, second);

// receive 2 return values from a function
// console.log(restaurant.order(2, 0));
const [start, mainM] = restaurant.order(2, 0);
console.log(start, mainM);

// Nester destructuring
const nested = [2, 4, [5, 6]];
const[i, ,j] = nested;
console.log(i, j);
const [k, ,[l,m]] = nested;
console.log(k,l,m);

//default values
const [p = 1,q=1,r = 1] = [8,9];
console.log(p,q,r);


