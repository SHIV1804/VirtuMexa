// Select DOM elements
const userNumber = document.querySelector("#userNumber"); // Input field for the user's number
const btn = document.querySelector("button"); // Button to calculate factorial
const factorialBox = document.querySelector("#factorialBox"); // Box to display the result
const dropdown = document.querySelector("#dropdown"); // Dropdown to select calculation method

// Add event listener for "Enter" key press in the input field
userNumber.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && userNumber.value !== "") {
        // Display the factorial result
        factorialBox.innerHTML = methodSelection(userNumber.value);
        userNumber.value = ""; // Clear the input field after processing
    }
});

// Add event listener for the "Calculate" button
btn.addEventListener("click", () => {
    if (userNumber.value !== "") {
        // Display the factorial result
        factorialBox.innerHTML = methodSelection(userNumber.value);
        userNumber.value = ""; // Clear the input field after processing
    }
});

// Iterative method for factorial calculation
function iterative(num) {
    let result = 1; // Initialize factorial as 1
    for (let i = 1; i <= num; i++) {
        result *= i; // Multiply result by each integer up to 'num'
    }
    return result;
}

// Recursive method for factorial calculation
function recursive(num) {
    // Base case: 0! = 1 and 1! = 1
    if (num === 0 || num === 1) {
        return 1;
    }
    // Recursive step: num * factorial(num - 1)
    return num * recursive(num - 1);
}

// Function to validate input and perform calculations
function methodSelection(inputValue) {
    // Convert the input to an integer
    let num = parseInt(inputValue);

    // Input validation
    if (!inputValue) { // Empty input
        factorialBox.style.display = "none"; // Hide the result box
        factorialBox.classList.add("error"); // Add error styling
        return "Input cannot be empty.";
    }
    factorialBox.classList.add("box");
    if (isNaN(num) || num < 0 || num % 1 !== 0) { // Non-integer, negative, or invalid input
        factorialBox.style.display = "inline-block"; // Ensure the box is visible
        factorialBox.classList.add("error"); // Add error styling
        return "Please enter a valid positive integer.";
    }

    // Valid input: Remove error styling and display result box
    factorialBox.style.display = "inline-block";
    factorialBox.classList.remove("error"); // Remove error styling


    // Select calculation method based on dropdown value
    if (dropdown.value === "iterative") {
        return `Factorial (Iterative): ${iterative(num)}`;
    } else {
        return `Factorial (Recursive): ${recursive(num)}`;
    }
}
