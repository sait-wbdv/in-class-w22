const form = document.querySelector('form');

const clickHandler = (event) => {
  event.preventDefault();

  console.log(form);
  
  const subTotal = form.subtotal.value;
  const tipRate = form.tiprate.value;

  const tip = subTotal * tipRate;
  const tipPercentage = `${tipRate * 100}%`
  
  form.output.value = `${tipPercentage} tip on $${subTotal} is $${tip.toFixed(2)}.`;
}


form.addEventListener('submit', clickHandler);