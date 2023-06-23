/****************************************
 * Part 1: Basic Arrays and Strings
 */

// Write a function that returns True if a string has all unique characters.
function hasUniqueCharacters(s) {}

// Write a function that replaces all spaces in a string with "%20".
//
// Example:
//   Input: "Mr John Smith"
//  Output: "Mr%20John%20Smith"
function urlify(s) {} 

// Write a function that left-shifts vowels in a string.
//
// You may assume that vowels are {a, e, i, o, u}.
//
// Example:
//   Input: "tunic"
//  Output: "tanoc"
function lefty(s) {}

// Write a function that takes a list of integers and a number, and return
// a list where each value corresponds to whether the given integer is
// divisible by the number.
function divisible(lst, n) {}

// Write a function that takes a list of integers and for every number:
//   * if the number is odd and non-zero, multiply it by 3, and
//   * if the number is even and non-zero, divide it by 2
//   * if the number is 0, replace it with a 100 and the preceding
//     number (if present) with a 13.
function funkyNumbers(lst) {}

/**************************************
 * Part 2: Objects and Things
 */

/********************
 * Employees
 */

const exampleEmployee = {
  name: "Taylor Alison Swift",
  date_of_birth: {
    month: 12,
    day: 13,
    year: 1989
  },
  departments: ["Music", "Art", "Library"],
};

// Given a list of Employees, return a list of their middle names.
function middleNames(employees) {}

// Given a list of Employees, return a map of employee names
// grouped by their birth month.
function employeesByMonth(employees) {}

// Given a list of Employees and a department, return a list of 
// the other departments that employees in the given department are 
// also in. The list should not contain duplicates.
function otherDepartments(employees, department) {}

// Given a list of employees and a department, return the list of
// employees but remove the department from their employee record.
function decreasedFunding(employees, department) {}
