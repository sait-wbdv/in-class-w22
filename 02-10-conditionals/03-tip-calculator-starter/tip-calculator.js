// Goal: Execute prompts when a button is pressed.

const calcTip = (subTotal, rate) => {
  // Enclose the following code in a function that accepts subTotal and tipRate as parameters
  const tip = subTotal * rate;
  const tipPercentage = `${rate * 100}%`
  
  console.log(`${tipPercentage} tip on $${subTotal} is $${tip.toFixed(2)}.`);
}

// 1. Wrap prompts inside an clickHandler() function

const clickHandler = () => {
  
  const billTotal = prompt('Enter a bill total.');
  const tipRate = prompt('Enter a tip rate.');
  
  calcTip(billTotal, tipRate);

}

// 2. Instead of manually invoking function, attach it to a button as an event listener
// 2a. Create a button variable
const button = document.querySelector('.tip-calc');

// button.innerHTML = "Start Tip Calculator"

// 2b. Attach (clickHandler to button with a 'click' event)
button.addEventListener('click', clickHandler);