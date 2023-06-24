/****************************************
 * Part 1: Basic Arrays and Strings
 */

// Write a function that takes a string and, for every vowel, adds a 'y' afterwards.
//
// Example:
//   Input: anime
//  Output: ayniymey
function answer_bonusVowel(str) {
    const vowels = ["a", "e", "i", "o", "u"];

    var result = "";
    for (var i = 0; i < str.length; i++) {
        result += str.charAt(i);
        if (vowels.includes(str.charAt(i))) {
            result += "y";
        }
    }

    return result;
}

// An array is "bamboozled by `n`" if any element is equal to `n` plus the index of that element.
//
// Write a function that determines if an array is bamboozled.
//
// Example:
//   Input: [21, 56], 55
//  Output: true
function answer_isBamboozled(arr, n) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == n + i) {
            return true;
        }
    }

    return false;
}

// A string is "awkwardly palindromic" if it remains palindromic after removing a
// specified letter from the entire string.
// 
// Write a function that determines if a string is awkwardly palindromic.
// You may assume the string only contains lowercase letters.
function answer_isAwkwardPalindrome(str, ch) {
    const replaced = str.replaceAll(ch, "");
    return Array.from(replaced).reverse().join("") == replaced;
}

// Write a function that takes every even-indexed integer from an array, and returns them multiplied by 13.
function answer_taylorify(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i += 2) {
        result.push(arr[i]* 13);
    }

    return result;
}

// Write a function that increments each number in the array by the array's index in the original list.
//
// Example:
//   Input: [[1, 2, 3],
//           [4, 5, 6]]
//  Output: [[1, 2, 3],
//           [5, 6, 7]]
function answer_risers(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        var subarr = arr[i];
        var newsubarr = [];
        for (var j = 0; j < subarr.length; j++) {
            newsubarr.push(subarr[j] + i);
        }

        result.push(newsubarr);
    }

    return result;
}

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
function answer_landscape(arr, x) {
    if (arr.length == 0) {
        return [];
    }

    if (x >= arr[1].length) {
        return arr;
    }

    var position = x;
    for (var i = 0; i < arr.length; i++) {
        if (position >= arr[i].length) {
            return arr;
        }

        arr[i][position] = 0;
        position++;
    }

    return arr;
}

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
function answer_johnGoesInsane(arr, x, y) {
    if (arr.length == 0) {
        return [];
    }

    if (x >= arr[1].length) {
        return arr;
    }

    if (y >= arr.length) {
        return arr;
    }

    var position = x;
    for (var i = y; i < arr.length; i++) {
        if (position >= arr[i].length) {
            return arr;
        }

        arr[i][position] = 0;
        position++;
    }

    return arr;
}
