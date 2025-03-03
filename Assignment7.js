const fruits = ["Apple", "Orange", "Pear", "Kiwi", "Banana", "Melon", "Strawberry", "Mango", "Chiku", "Grapes", "Small-grapes"];

console.log("Even index fruits:", fruits.filter((_, index) => index % 2 === 0));

console.log("Odd index fruits:", fruits.filter((_, index) => index % 2 !== 0));

console.log("Fruits at multiples of 3:", fruits.filter((_, index) => index % 3 === 0));

console.log("1st, 6th, and last fruits:", [fruits[0], fruits[5], fruits[fruits.length - 1]]);