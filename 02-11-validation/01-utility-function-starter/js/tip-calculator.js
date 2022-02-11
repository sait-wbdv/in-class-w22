const form = document.querySelector('form');

const submitHandler = (event) => {
  event.preventDefault();

  
  const subTotal = form.subtotal.value;
  const serviceLevel = form.service.value;
  let tipRate = null; 

  console.log(serviceLevel);
  
  // Use `if`, `else` and `else if` statements to assign tipRate depending on level of service

  if (serviceLevel === 'bad') {
    tipRate = .12;
  } else if (serviceLevel === 'good') {
    tipRate = .18;
  } else if (serviceLevel === 'excellent') {
    tipRate = .23;
  } else {
    // Do nothing
    console.warn('Service Level not selected.');
  }

  console.log(tipRate);

  if (tipRate) {
    const tip = subTotal * tipRate;
    const tipPercentage = `${tipRate * 100}%`
    
    form.output.value = `${tipPercentage} tip on $${subTotal} is $${tip.toFixed(2)}.`;
  } else {
    form.output.value = `Service Level not selected.`;
  }
}


form.addEventListener('submit', submitHandler);