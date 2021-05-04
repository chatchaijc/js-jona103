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
  },

  orderPasta:function(ing1,ing2,ing3){
    console.log(`Here is your declicious pasta with ${ing1},${ing2},${ing3}`);
  },

  orderPizza: function(mainIngredient,...otherIngredient){
    console.log(mainIngredient);
    console.log(otherIngredient);
  },

};

//1) Destructuring

// Spread, because on Right side of =
const arr = [1,2,...[3,4]];


// Rest, because on Left side of =
const [a,b, ...others] = [1,2,3,4,5];
console.log(a,b,others);

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza,risotto,otherFood);

// objects
const {sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays);// sat is own objects

//2) Functions

const add = function(...numbers){
  let sum = 0;
  for(let i =0; i<numbers.length; i++) sum += numbers[i];
  console.log(sum);
};



add(2,3);
add(2,3,5,7);
add(8,2,5,3,2,1,4);

const x = [23,5,7];
add(...x);

restaurant.orderPizza('mushrooms','onion','olives','spinach');
restaurant.orderPizza('spinach');

/*
/////////////////////////////////////////
// The Spread Operator(...)
const arr = [7,8,9];
const badNewArr = [1,2,arr[0],arr[1],arr[2]];
console.log(badNewArr);
const newArr = [1,2,...arr];
console.log(newArr);

const newMenu = [...restaurant.mainMenu, 'Cnocci'];
console.log(newMenu)

// Copy Arrays
const mainMenuCopy = [...restaurant.mainMenu];

// Join  Arrays
const menuJoin = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menuJoin);


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

// const ingredients = [prompt('Let\'s make pasta! Ingredient 1?'),prompt('Ingredient 2?'),prompt('Ingredient 3?')];
// console.log(ingredients);
*/
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
