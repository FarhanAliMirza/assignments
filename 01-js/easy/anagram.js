/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/
function isAnagram(str1, str2) {
  let flag = true;
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  if (str1.length != str2.length) {
    flag = false;
    return flag;
  }
  for (let i = 0; i < str1.length; i++) {
    element = str1[i];
    if (str2.indexOf(element) == -1) flag = false;
  }
  return flag;
}

module.exports = isAnagram;
