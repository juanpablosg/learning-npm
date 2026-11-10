console.log("Juan Sánchez");
console.log("31");
console.log("Technical Writer");

let string_number = "2";
string_number = Number(string_number);

console.log(typeof string_number);

let myArray = ["red", "green", "blue"];
myArray.push("black");
console.log(myArray);

myArray.shift();
console.log(myArray);
myArray[0] = "blue";
myArray[1] = "green";

console.log(myArray);
myArray.unshift("yellow");
console.log(myArray);

switch (20) {
  case 10 * 2:
    console.log("value is twenty");
    break;
  default:
    console.log("??????");
}
let age = 5;

switch (age) {
  case age < 10:
    console.log("Value is less than ten");
    break;
  case age < 20:
    console.log("Value is less than twenty");
    break;
  default:
    console.log("Value is twenty or more");
}

console.log(age < 10);
console.log(age == true);

function greet(name = "Nathan", weather) {
  console.log(`Hello, ${name}!`);
  console.log(`It's ${weather} today, right?`);
}

greet(undefined, "sunny");

const printArgs = function () {
  console.log(arguments);
};

printArgs(1, 2, 3);

const printArgs2 = (...arguments) => console.log(arguments);

printArgs2(1, 2, 3);

function calculateSquare(side) {
  console.log(`The square side is ${side}`);
  console.log(`The area of the square is ${side * side}`);
  console.log(`The perimeter of the square is ${4 * side}`);
}

calculateSquare(10);
