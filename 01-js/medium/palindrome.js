/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/


function isPalindrome(str) {
  let str1= [...str].reverse().join('')
  if(str===str1){
    console.log("true")
  }
  else{
     console.log("False")
  }

}

isPalindrome("abab")
module.exports = isPalindrome;

