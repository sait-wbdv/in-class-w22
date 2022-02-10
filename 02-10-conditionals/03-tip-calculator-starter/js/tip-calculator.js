const inputSubTotal = document.querySelector('#subtotal');
const inputTipRate = document.querySelector('#tiprate');
const button = document.querySelector('.tip-calc');
const output = document.querySelector('output');

const clickHandler = () => {
  const subTotal = inputSubTotal.value;
  const tipRate = inputTipRate.value;

  const tip = subTotal * tipRate;
  const tipPercentage = `${tipRate * 100}%`
  
  output.value = `${tipPercentage} tip on $${subTotal} is $${tip.toFixed(2)}.`;
}


button.addEventListener('click', clickHandler);