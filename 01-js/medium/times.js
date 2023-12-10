/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/
const { log } = require("console");

const sum = (n) => {
  let s = 0;
  for (let i = 1; i <= n; i++) {
    s += i;
  }
  return s;
};
 
function calculateTime(n) {
    let startTime =  new Date() 
sum(1000000);
let endTime = new Date() 
let result = endTime-startTime
    return  result;
}