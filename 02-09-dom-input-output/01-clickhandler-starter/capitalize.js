// Create form and button variables here


const clickHandler = function() {
  // Refactor to assign value from form field
  let string = "mIsSIssIPPi";

  string = string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  
  // Refactor to output response to paragraph element
  console.log(string);
}

// Add `click` event listener to button here