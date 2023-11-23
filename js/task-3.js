
function filterArray(numbers, value) {

  let array = [];

  for (const number of numbers) {
    if (number > value) {
              
      array.push(number)
    }
   }
    return array;
}
  

console.log(filterArray([1, 2, 3, 4, 5], 3));     // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4));     // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5));     // []
console.log(filterArray([12, 24, 8, 41, 76], 38));   // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20));   // [24, 41, 76] ; //


/* ====================================================== */

function countProps(object) {
  let propCount = 0;
  
  const keys = Object.keys(countProps);
  
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      propCount += 1;
    }
  }
  return propCount;
}


console.log(countProps({})); // повертає 0
console.log(countProps({ name: "Mango", age: 2 })); // повертає 2
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // повертає 3)


/* ====================================================== */

function countTotalSalary(salaries) {
  let totalSalary = 0;

  const salar = Object.values(salaries);
  for (const value of salar) {
    totalSalary += value;
  }
  return totalSalary;
}

console.log(countTotalSalary({})); // повертає 0
console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); // повертає 330
console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })); // повертає 400


/* ====================================================== */

const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];

const color = Object.values(colors);

for (const color of colors) {
  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
}

console.log(hexColors); // - це масив ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
console.log(rgbColors); // - це масив ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]

/* ====================================================== */

function getProductPrice(productName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];

  const item = productName;

  for (const prod of products) {
    if (prod.name === item) {
      return prod.price
    }
    }
  return null
}


console.log(getProductPrice("Radar")); // повертає 1300.
console.log(getProductPrice("Grip")); // повертає 1200.
console.log(getProductPrice("Scanner")) //повертає 2700.
console.log(getProductPrice("Droid")) // повертає 400.
console.log(getProductPrice("Engine")) // повертає null.

/* ====================================================== */

function getAllPropValues(propName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];

  let getAll = [];
 
  for (const prod of products) {
    if (Object.hasOwn(prod, propName)) {
      getAll.push(prod[propName]);
    } 
}
 return getAll;
} 

console.log(getAllPropValues("name")); // повертає ["Radar", "Scanner", "Droid", "Grip"]
console.log(getAllPropValues("quantity")); // повертає [4, 3, 7, 9]
console.log(getAllPropValues("price")); // повертає [1300, 2700, 400, 1200]
console.log(getAllPropValues("category")); // повертає []


/* ====================================================== */

function calculateTotalPrice(productName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];

  let total = 0;

  for (const prod of products) {

    if (productName === prod.name) {
      
      total = prod.quantity * prod.price
      return total;
    }
    }
  return `Product ${productName} not found!`
   
}

console.log(calculateTotalPrice("Scanner")); // повертає `8100`
console.log(calculateTotalPrice("Blaster")); // повертає `"Product Blaster not found!"`
console.log(calculateTotalPrice("Radar")); //` повертає `5200`
console.log(calculateTotalPrice("Droid")); // повертає `2800`
console.log(calculateTotalPrice("Grip")); //` повертає `10800`

/* ====================================================== */

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Stone skin", price: 520 },
  ],
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    this.potions.push(newPotion);
  },
  getTotalPrice() {
    let total = 0;
    for (const potion of this.potions) {
      total += potion.price;
    }
    return total
  },
};

// Виклик методу `atTheOldToad.getTotalPrice()`
// повертає загальну вартість усіх зілль з властивості `potions`
//
// Після виклику методу `atTheOldToad.addPotion({ name: "Power potion", price: 270 })`,
// в масиві `potions` останнім елементом буде цей об'єкт

/* ====================================================== */

function add(...args) {
  
  let total = 0;
  
  for (let arg of args) {
    total += arg; }

  return total;
  
}

console.log(add(32, 6, 13, 19, 8));  // повертає `78`
console.log(add(12, 4, 11, 48)); // повертає `75`
console.log(add(15, 27)); // повертає `42`
console.log(add(0)); // повертає `0`


/* ====================================================== */

function addOverNum(value, ...args) {

  let total = 0;
  
  for (const arg of args) {
   if (value < arg) {
        total += arg; 
      };
  }
    return total;
  
}

console.log(addOverNum(15, 32, 6, 13, 19, 8));  // повертає `51`
console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));  // повертає `71`
console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));  // повертає `218
console.log(addOverNum(50, 15, 27));  // повертає `0



/* ====================================================== */
function getExtremeScores(scores) {

  const items = {
  best: Math.max(...scores),
  worst: Math.min(...scores),
    }
  return items;
}

console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26])); //` повертає об'єкт
                                                            //`{ best: 93, worst: 17 }`
                                                            
console.log(getExtremeScores([19, 7, 4, 17, 81, 24])); // повертає об'єкт `{ best: 81, worst: 4 }`




/* ====================================================== */

function isEnoughCapacity(products, containerSize) {

  let total = 0;

  const prodValue = Object.values(products);

  for (const prod of prodValue) {

    total += prod;
  }
  return total <= containerSize;
}

console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true
console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false
console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatos: 3 }, 14)); // true
console.log(isEnoughCapacity({ apples: 18, potatos: 5, oranges: 2 }, 7)); // false

/* ====================================================== */

function calcAverageCalories(days) {

  let total = 0;
  
  for (const calc of days) {
    total += calc.calories;
  }
  return days.length === 0 ? 0 : total / days.length;

}

console.log(
  calcAverageCalories([
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 }
  ])
); // 3180

console.log(
  calcAverageCalories([
    { day: "monday", calories: 2040 },
    { day: "tuesday", calories: 2270 },
    { day: "wednesday", calories: 2420 },
    { day: "thursday", calories: 1900 },
    { day: "friday", calories: 2370 },
    { day: "saturday", calories: 2280 },
    { day: "sunday", calories: 2610 }
  ])
); // 2270

console.log(
  calcAverageCalories([])
); // 0



/* ====================================================== */

const profile = {
  username: "Jacob",
  playTime: 300,

  changeUsername(newName) {
    this.username = newName;
  },
  
  updatePlayTime(hours) {
    this.playTime += hours;
  },

  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`;
  },
};

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
