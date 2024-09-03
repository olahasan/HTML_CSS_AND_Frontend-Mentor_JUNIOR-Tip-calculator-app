let bill = 0,
  numOfPeople = 0,
  tip = 0;

const formBill = document.getElementById("form_bill");
const billInput = document.getElementById("Bill");
const numberOfPeopleInput = document.getElementById("Number_of_People");
const formPeople = document.getElementById("form_People");
const tipAmount = document.getElementById("Tip_Amount");
const totalAmount = document.getElementById("Total");
const inputReset = document.getElementById("input_reset");
const tipButtons = document.querySelectorAll(".per button");
const customTipInput = document.getElementById("Custom");

billInput.oninput = () => handleInput(billInput, formBill, "bill");
numberOfPeopleInput.oninput = () =>
  handleInput(numberOfPeopleInput, formPeople, "numOfPeople");

function handleInput(inputElement, errorElement, type) {
  const value = +inputElement.value;
  if (value <= 0) {
    errorElement.classList.remove("hidden");
    inputElement.style.borderColor = "red";
  } else {
    errorElement.classList.add("hidden");
    inputElement.style.borderColor = "#26c0ab";
  }
  if (type === "bill") bill = value;
  if (type === "numOfPeople") numOfPeople = value;
  updateAmounts();
}

tipButtons.forEach((button) => (button.onclick = handleTipButtonClick));

function handleTipButtonClick() {
  tip = parseInt(this.innerHTML);
  resetTipButtonStyles();
  this.style.color = "#00494d";
  this.style.backgroundColor = "#26c0ab";
  updateAmounts();
}

customTipInput.oninput = handleCustomTipInput;
customTipInput.onclick = resetTipButtonStyles;

inputReset.onclick = resetValues;

function handleCustomTipInput() {
  tip = +customTipInput.value;
  updateAmounts();
}

function updateAmounts() {
  if (bill > 0 && numOfPeople > 0) {
    const tipAmountValue = ((bill * tip) / 100 / numOfPeople).toFixed(2);
    const totalAmountValue = (
      bill / numOfPeople +
      parseFloat(tipAmountValue)
    ).toFixed(2);
    tipAmount.innerHTML = `$${tipAmountValue}`;
    totalAmount.innerHTML = `$${totalAmountValue}`;
  }
}

function resetValues() {
  bill = 0;
  numOfPeople = 0;
  tip = 0;
  billInput.value = "0";
  numberOfPeopleInput.value = "0";
  customTipInput.value = "Custom";
  tipAmount.innerHTML = "$0.00";
  totalAmount.innerHTML = "$0.00";
  resetTipButtonStyles();
}

function resetTipButtonStyles() {
  tipButtons.forEach((button) => {
    button.style.color = "#c5e4e7";
    button.style.backgroundColor = "#00494d";
  });
}
