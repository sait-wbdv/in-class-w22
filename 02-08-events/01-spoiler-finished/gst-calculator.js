const subTotal = 42;

const calcGST = (subTotal) => {
  // Enclose the following code in a function that accepts subTotal as a parameter
  const total = subTotal * 0.05 + subTotal;
  
  console.log(`$${subTotal} plus GST is $${total.toFixed(2)}.`);
}

calcGST(subTotal);