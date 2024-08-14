/*Create a faulty calculator using javascript
This faulty calculator does following:
It's take two number as input from the user
It perform wrong operation as follows
+--->-
*--->+
- ---> **

It performs wrong operation 10% of the time
*/

let random = Math.random();
let a = prompt("Enter first number");
let b = prompt("Enter Second number");
let c = prompt("Enter operation");

let obj = {
  "+": "-",
  "*": "+",
  "-": "/",
  "/": "*",
};

if (random > 0.1) {
  console.log(`the result is ${eval(`${a} ${c} ${b}`)}`);
  alert(`the result is ${eval(`${a} ${c} ${b}`)}`);
} else {
  c = obj[c];
  alert(`the result is ${eval(`${a} ${c} ${b}`)}`);
}
