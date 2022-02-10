const form = document.querySelector('form');

const submitHandler = (event) => {
  event.preventDefault();

  
  const subTotal = form.subtotal.value;
  const serviceLevel = form.service.value;
  console.log(serviceLevel);
  
  // Use `if`, `else` and `else if` statements to assign tipRate depending on level of service

  const tipRate = 0;

  const tip = subTotal * tipRate;
  const tipPercentage = `${tipRate * 100}%`
  
  form.output.value = `${tipPercentage} tip on $${subTotal} is $${tip.toFixed(2)}.`;
}


form.addEventListener('submit', submitHandler);