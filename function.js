function calculateSquareWithPrompt() {
    let userInput = prompt("Enter a number:");
    let number = parseFloat(userInput);
    if (!isNaN(number)) {
      let square = number * number;
      alert(`The square of ${number} is ${square}`);
    } else {
      alert(" Please enter a valid number.");
    }
  }
  calculateSquareWithPrompt();
// ----------------------------------------------------------------//
  function convertCelsiusToFahrenheitWithPrompt() {
    let userInput = prompt("Enter a temperature in Celsius:");
    let celsius = parseFloat(userInput);  
    if (!isNaN(celsius)) {
      let fahrenheit = (celsius * 9/5) + 32;
      alert(`${celsius} degrees Celsius is equal to ${fahrenheit} degrees Fahrenheit.`);
    } else {
      alert("Invalid input. Please enter a valid number.");
    }
  } 
  convertCelsiusToFahrenheitWithPrompt();
  // --------------------------------------------------//
  
  function reverseStringWithPrompt() {
    let userInput = prompt("Enter a string:");
    if (userInput === null) {
      alert("Operation cancled.");
      return;
    }
    let reversedString = "";
    for (let i = userInput.length - 1; i >= 0; i--) {
      reversedString += userInput[i];
    }
    alert(`Original: ${userInput}\nReversed: ${reversedString}`);
  }
  
  reverseStringWithPrompt();
  // ------------------------------------------------------------//
  switch (vegetable) {
    case "carrot":
      alert("Hello");
      break;
    case "broccoli":
      alert("Welcome");
      break;
      default ("neither")
  }
  // -----------------------------------------------------------------------------------------------//
  let action = "move";

  switch (action) {
    case "move":
      alert("you are moving!");
      break;
    case "jump":
      alert("you are jumping!");
      break;
    case "run":
      alert("you are running!");
      break;
    default:
      alert("invalid action.");
      break;
  }