/****************************************
 * Part 1: Basic Arrays and Strings
 */

// Write a function that takes a string and, for every vowel, adds a 'y' afterwards.
//
// Example:
//   Input: anime
//  Output: ayniymy
function bonusVowel(str) {}

// An array is "bamboozled by `n`" if any element is equal to `n` plus the index of that element.
//
// Write a function that determines if an array is bamboozled.
//
// Example:
//   Input: [21, 56], 55
//  Output: true
function isBamboozled(arr, n) {}

// A string is "awkwardly palindromic" if it remains palindromic after removing a
// specified letter from the entire string.
// 
// Write a function that determines if a string is awkwardly palindromic.
// You may assume the string only contains lowercase letters.
function isAwkwardPalindrome(str, ch) {}

// Write a function that takes every even-indexed integer from an array, and returns them multiplied by 13.
function taylorify(arr) {}

// Write a function that increments each number in the array by the array's index in the original list.
//
// Example:
//   Input: [[1, 2, 3],
//           [4, 5, 6]]
//  Output: [[1, 2, 3],
//           [5, 6, 7]]
function risers(arr) {}

// John, the landscaper, has a landscaping project where he mows a different diagonal stripe each day to height 0.
// 
// Write a function that mows a diagonal stripe starting from an arbitrary position at the top of the field.
// 
// Example:
//   Input: [[1, 1, 1, 1, 1],
//           [2, 2, 2, 2, 2],
//           [3, 3, 3, 3, 3],     2
//           [4, 4, 4, 4, 4],
//           [5, 5, 5, 5, 5]],
//  Output: [[1, 1, 0, 1, 1],
//           [2, 2, 2, 0, 2],
//           [3, 3, 3, 3, 0],
//           [4, 4, 4, 4, 4],
//           [5, 5, 5, 5, 5]],
function landscape(arr, x) {}

// What if John wants to from an arbitrary point in the middle of the field?
//
// Example:
//   Input: [[1, 1, 1, 1, 1],
//           [2, 2, 2, 2, 2],
//           [3, 3, 3, 3, 3],     2, 2
//           [4, 4, 4, 4, 4],
//           [5, 5, 5, 5, 5]],
//  Output: [[1, 1, 1, 1, 1],
//           [2, 2, 2, 1, 2],
//           [3, 3, 0, 3, 1],
//           [4, 4, 4, 0, 4],
//           [5, 5, 5, 5, 0]],
function johnGoesInsane(arr, x, y) {}
