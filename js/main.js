const incrementButton = document.querySelector(".increment");
const decrementButton = document.querySelector(".decrement");
const resetButton = document.querySelector(".reset");
const counterContainer = document.querySelector(".counter-value");

let counter = 0;
displayCounter();

function displayCounter() {
  if (counter > 0) counterContainer.style.color = "green";
  else if (counter < 0) counterContainer.style.color = "red";
  else counterContainer.style.color = "black";
  counterContainer.textContent = counter;
}

function incrementCounter() {
  counter++;
  displayCounter();
}

function decrementCounter() {
  counter--;
  displayCounter();
}

function resetCounter() {
  counter = 0;
  displayCounter();
}

incrementButton.addEventListener("click", incrementCounter);
decrementButton.addEventListener("click", decrementCounter);
resetButton.addEventListener("click", resetCounter);
