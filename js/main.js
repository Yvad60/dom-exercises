const displayInput = document.querySelector(".display");
const digitKeys = document.querySelectorAll(".digitKey");
const operationKeys = document.querySelectorAll(".operation");
const equalsKey = document.querySelector(".equals");
const deleteKey = document.querySelector(".delete");
const resetKey = document.querySelector(".reset");

let firstOperandNumber;
let secondOperandNumber;
let operation;

function handleDigitClick(e) {
  if (displayInput.value.length === 10) return;
  if (e.target.textContent === ".") {
    if (displayInput.value.includes(".")) return;
    displayInput.value += e.target.textContent;
    return;
  }
  if (displayInput.value === "0") displayInput.value = e.target.textContent;
  else displayInput.value += e.target.textContent;
}

function handleDelete() {
  if (displayInput.value.length === 1) displayInput.value = 0;
  else displayInput.value = displayInput.value.slice(0, -1);
}

function handleReset() {
  firstOperandNumber = null;
  secondOperandNumber = null;
  operation = null;
  displayInput.value = 0;
}

function handleOperation(e) {
  if (e.target.textContent === "x") operation = "*";
  else operation = e.target.textContent;
  firstOperandNumber = displayInput.value;
  displayInput.value = 0;
}

function calculate(e) {
  if (!operation || !firstOperandNumber) {
    displayInput.value = 0;
    return;
  }
  secondOperandNumber = displayInput.value;
  displayInput.value = eval(`${firstOperandNumber} ${operation} ${secondOperandNumber}`);
  firstOperandNumber = null;
  secondOperandNumber = null;
  operation = null;
}

Array.from(digitKeys).forEach((key) => {
  key.addEventListener("click", handleDigitClick);
});
Array.from(operationKeys).forEach((key) => {
  key.addEventListener("click", handleOperation);
});
equalsKey.addEventListener("click", calculate);
deleteKey.addEventListener("click", handleDelete);
resetKey.addEventListener("click", handleReset);
