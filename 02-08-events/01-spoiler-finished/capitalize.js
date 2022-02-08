// let message = "mIsSIssIPPi";
let homeTown = prompt("Add a string to capitalize.");

const capitalize = function(string) {
  // Enclose the following code in a function that accepts a string as a parameter
  string = string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  
  console.log(string);
}

capitalize(message);