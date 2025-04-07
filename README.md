# JavaScript Conditional Logic Project

This project demonstrates the use of JavaScript to handle various user inputs and perform conditional checks. The application includes multiple functionalities such as processing addresses, checking temperature ranges, calculating BMI, validating book titles, adjusting text spacing, and verifying passwords.

## Features

### 1. Address Processing
- Converts the entered address to lowercase.
- Displays the processed address in a designated area.
- Alerts the user if the input is empty.

### 2. Temperature Checker
- Accepts a temperature value and categorizes it as:
  - **Cold**: Below 19°C.
  - **Warm**: Between 20°C and 28°C.
  - **Hot**: Above 28°C.

### 3. BMI Calculator
- Calculates BMI using the formula: `weight / (height * height)`.
- Categorizes BMI as:
  - **Underweight**: Below 18.5.
  - **Normal weight**: Between 18.5 and 24.9.
  - **Overweight**: Between 25 and 29.9.
  - **Obesity**: 30 and above.

### 4. Book Title Validation
- Checks if the entered book title already exists in a predefined list.
- Alerts the user if:
  - The input is empty.
  - A duplicate title is found.
  - A new title is successfully added.

### 5. Text Adjustment
- Alerts the user to enter text if the input is empty.
- Confirms successful input with a welcome message.

### 6. Password Validation
- Ensures the entered password is at least 8 characters long.
- Alerts the user if the password is too short or confirms if it is valid.

## How to Use
1. Open the `index.html` file in a browser.
2. Interact with the various input fields and buttons to test the functionalities.
3. Observe the results displayed on the page or in alert messages.

## File Structure
- **index.html**: Contains the HTML structure and input fields for user interaction.
- **script.js**: Contains the JavaScript logic for handling user inputs and performing conditional checks.

## Example Code Snippets

### Book Title Validation
```javascript
function titlew(){
      var userinput = document.getElementById('title').value;
      var newTitel = document.getElementById('newTitle');
      var booktitle = ["malik", "titiolu", "omolara"];
      if (userinput == ""){
            alert("pls input book title");
      } else if (booktitle.includes(userinput)){
            alert("Duplicate Found");
      } else {
            alert("you are welcome");
            newTitel.innerHTML = "your book title is " + userinput;
      }
}
