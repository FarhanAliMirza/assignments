/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  let reversedStr = "";
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
      newStr += str[i];
    }
  }
  for (let i = newStr.length - 1; i >= 0; i--) {
    reversedStr += newStr[i];
  }
  if (newStr == reversedStr) return true;
  else return false;
}

module.exports = isPalindrome;
