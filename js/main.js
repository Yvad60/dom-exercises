const colors = ["blue", "red", "yellow", "green", "white", "black", "pink"];
const pageBody = document.body;
const flipButton = document.querySelector(".flip-button");
const modeSelector = document.querySelector(".mode-selector");
const colorValueContainer = document.querySelector(".color-name");

let defaultColor = colors[0];
pageBody.style.backgroundColor = defaultColor;
let defaultMode = modeSelector.value;
let defaultColorValue = getCurrentColorValue(defaultMode);
displayColorValue(defaultColor);

function flipColor() {
  let previousColorIndex = colors.indexOf(pageBody.style.backgroundColor);
  const newColor = colors[previousColorIndex + 1] ? colors[previousColorIndex + 1] : colors[0];
  pageBody.style.backgroundColor = newColor;
  let currentSelectedMode = modeSelector.value;
  let currentBgColorValue = getCurrentColorValue(currentSelectedMode);
  displayColorValue(currentBgColorValue);
}

function handleModeChange(e) {
  let selectedMode = e.target.value;
  let currentColor = getCurrentColorValue(selectedMode);
  displayColorValue(currentColor);
}

function getCurrentColorValue(selectedMode) {
  return selectedMode === "simple"
    ? pageBody.style.backgroundColor
    : window.getComputedStyle(pageBody).backgroundColor;
}

function displayColorValue(colorValue) {
  colorValueContainer.textContent = colorValue;
}

flipButton.addEventListener("click", flipColor);
modeSelector.addEventListener("change", handleModeChange);
