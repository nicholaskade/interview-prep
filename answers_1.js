/****************************************
 * Part 1: Basic Arrays and Strings
 */

// Write a function that returns True if a string has all unique characters.
function answer_hasUniqueCharacters(s) {
  const chars = [];
  for (var i = 0; i < s.length; i++) {
    if (chars.includes(s.charAt(i))) {
      return false;
    }
    
    chars.push(s.charAt(i));
  }

  return true;
}

// Write a function that replaces all spaces in a string with "%20".
//
// Example:
//   Input: "Mr John Smith"
//  Output: "Mr%20John%20Smith"
function answer_urlify(s) {
  var result = "";
  for (var i = 0; i < s.length; i++) {
    const character = s.charAt(i);
    result += (character == ' ' ? "%20" : character);
  }

  return result;
}

// Write a function that left-shifts vowels in a string.
//
// You may assume that vowels are {a, e, i, o, u}.
//
// Example:
//   Input: "tunic"
//  Output: "tanoc"
function answer_lefty(s) {
  const vowels = ["a", "e", "i", "o", "u"];

  var result = "";
  for (var i = 0; i < s.length; i++) {
    const character = s.charAt(i);
    if (vowels.includes(character)) {
      result += vowels[(vowels.indexOf(character) + 1) % 5];
    } else {
      result += character;
    }
  }

  return result;
}

// Write a function that takes a list of integers and a number, and return
// a list where each value corresponds to whether the given integer is
// divisible by the number.
function answer_divisible(lst, n) {
    var results = [];
    for (var i = 0; i < lst.length; i++) {
        results.push(lst[i] % n == 0);
    }

    return results;
}

// Write a function that takes a list of integers and for every number:
//   * if the number is odd and non-zero, multiply it by 3, and
//   * if the number is even and non-zero, divide it by 2
//   * if the number is 0, replace it with a 100 and the preceding
//     number (if present) with a 13.
function answer_funkyNumbers(lst) {
    var results = [];
    for (var i = 0; i < lst.length; i++) {
        const num = lst[i];
        if (num % 2 == 1 && num != 0) {
            results.push(num * 3);
        } else if (num % 2 == 0 && num != 0) {
            results.push(num / 2);
        } else {
            results[results.length - 1] = 13;
            results.push(100);
        }
    }

    return results;
}

/**************************************
 * Part 2: Objects and Things
 */

/********************
 * Employees
 */

// Given a list of Employees, return a list of their middle names.
function answer_middleNames(employees) {
    var results = [];

    for (var employee of employees) {
        const nameParts = employee.name.split(' ');
        if (nameParts.length == 3) {
            results.push(nameParts['1']);
        }
    }

    return results;
}

// Given a list of Employees, return a map of employee names
// grouped by their birth month.
function answer_employeesByMonth(employees) {
    var results = {};

    for (var employee of employees) {
        if (results[employee.date_of_birth.month] === undefined) {
             results[employee.date_of_birth.month] = [];
        }

        (results[employee.date_of_birth.month]).push(employee.name);
    }

    return results;
}

// Given a list of Employees and a department, return a list of 
// the other departments that employees in the given department are 
// also in. The list should not contain duplicates.
function answer_otherDepartments(employees, department) {
    var results = [];

    for (var employee of employees) {
        if (employee.departments.includes(department)) {
            for (var i = 0; i < employee.departments.length; i++) {
                const employeeDepartment = employee.departments[i];
                if (department != employeeDepartment && !results.includes(employeeDepartment)) {
                    results.push(employeeDepartment);
                }
            }
        }
    }

    return results;
}

// Given a list of employees and a department, return the list of
// employees but remove the department from their employee record.
function answer_decreasedFunding(employees, department) {
    for (var employee of employees) {
        var newDepartments = employee.departments.filter((e) => e != department);
        employee.departments = newDepartments;
    }

    return employees;
}
