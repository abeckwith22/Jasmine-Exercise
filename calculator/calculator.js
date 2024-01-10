window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      console.log("SUBMITTED!");
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
    const defaultValues = { amount: 50000, years: 10, rate: 4.5 };
    const amountUI = document.querySelector('#loan-amount');
    amountUI.value = defaultValues.amount;
    const yearsUI = document.querySelector('#loan-years');
    yearsUI.value = defaultValues.amount;
    const rateUI = document.querySelector('#loan-rate');
    rateUI.value = defaultValues.amount;
    update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const monthly = calculateMonthlyPayment(getCurrentUIValues());
  updateMonthly(monthly);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let P = values.amount; // Principle
  let i = (values.rate/100)/12; // Monthly interest (yearly rate/12)
  if (i === 0){
    i = 0.000000000001; // Create an tiny interest rate that is virtually zero (Number won't result in NaN)
  }
  let n = values.years*12; // total number of payments (years * 12)
  if (n === 0){
    return "NOT POSSIBLE";
  }
  return `${((P * i)/(1-(1+i)**-n)).toFixed(2)}`;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPayment = document.querySelector('#monthly-payment');
  monthlyPayment.innerText = '$'+monthly;
}

function monthlyRate(yearlyRate) {
  return (yearlyRate/12).toFixed(5);
}
