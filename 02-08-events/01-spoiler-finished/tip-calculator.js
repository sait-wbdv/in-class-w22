const billTotal = 60;
const tipRate = 0.18;

const calcTip = (subTotal, rate) => {
  // Enclose the following code in a function that accepts subTotal and tipRate as parameters
  const tip = subTotal * rate;
  const tipPercentage = `${rate * 100}%`
  
  console.log(`${tipPercentage} tip on $${subTotal} is $${tip.toFixed(2)}.`);
}

calcTip(billTotal, tipRate);