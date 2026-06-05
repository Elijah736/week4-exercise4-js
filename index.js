// // const userinput = prompt("Enter name:");

// // Done by Elijah
// function validation(userinput) {
//     try {// If left blank will display "cannot be null"
//         if (userinput === null || userinput === undefined) {
//             throw new Error("Cannot be null, Enter your name")
//         }
//         if (typeof userinput !== "string") {
//             // Must be a string 
//             throw new TypeError("Must be your name")
//         }
//     }   catch (error) {
//         console.log(`${error.name}: ${error.message}`);
//     }
// }

// function error(input) {
//     try {
//         // Checks if its a number
//            if (typeof input === "number") {
//         throw new TypeError("Cannot be a a number")
//     }

//     }  catch (error) {
//             console.log(`${error.name}: ${error.message}`);
//     }
// }



// // Demostrating error message for when I enter a number
// console.log(validation(13232))
// console.log(error(1223))



// Done by Lukho
// 1. FUNCTION THAT VALIDATES USER INPUT
// TODO: Create a function that validates user input
function checkName(name) {
  try {
    if (name === "" || name.length < 3) {
      throw "Name is too short";
    }
    console.log("Name is valid:", name);
  } catch (error) {
    console.log("Error:", error);
  }
}

checkName("Ap");
checkName("Aphiwe");
//the checkName function validates the user input by checking whether the name is empty or contains fewer than three chaacters. If either conditionns is true the function uses throw to generate an error. The catch block handles the error then it displays the error message.If name meets the requirements the function confirms that the name is valid.



// 2. FUNCTION THAT DEMONSTRATES MULTIPLE ERROR TYPES
// TODO: Create a function that demonstrates multiple error types
function divideNumbers(a, b) {
  try {
    if (b === 0) {
      throw "Cannot divide by zero";
    }
    let result = a / b;
    console.log(a + " / " + b + " = " + result);
  } catch (error) {
    console.log("Error:", error);
  }
}



// Done by Elijah
// String Manipulation
const num = [1, 5, 8, 10, 56]
function uppercase(str) {
    // Makes the string uppercase
    return str.toUpperCase();
}

function lowercase(str) {
    // Makes the string lowercase
    return str.toLowerCase();
}


// Array operations

function findMax(arr) {
    // Returns max
    return Math.max(...arr);
}

function findMin(arr) {
    // returns min
    return Math.min(...arr);
}

// Calling the functions
console.log(uppercase("school"))
console.log(lowercase("SCHOOL"))
console.log(findMax(num))
console.log(findMin(num))