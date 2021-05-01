("use strict");
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, FFirenze, Italy",
  categories: ["Italian", "Pizzaria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Carlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22
    },
    fri: {
      open: 11,
      close: 23
    },
    sat: {
      open: 0, //Open 24 hours
      close: 24
    }
  },

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function({ time='20:00', address, mainIndex = 0, starterIndex = 1 }) {
    console.log(
      `Orer received! ${this.starterMenu[starterIndex]} and ${
        this.mainMenu[mainIndex]
      }will be delevered to ${address}at ${time}`
    );
  }
};

restaurant.orderDelivery({
  time: "22:30",
  address: "Via del Sole, 21",
  mainIndex: 2,
  starterIndex: 2
});

restaurant.orderDelivery({
  address: "Sansab Minburi Bangkok"
})

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hour,
  categories: tags
} = restaurant;
console.log(restaurantName, hour, tags);
// Default Value
const { menu = [], starterMenu: starts = [] } = restaurant;
console.log(menu, starts);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b); //23,7

// Nested objects
const {
  fri: { open: o, close: c }
} = openingHours;
console.log(o, c);

/*
/////////////////////////////////////////////////
// Destructuring Arrays
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
*/
