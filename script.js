let display = document.getElementById("result");
let currentExpression = "";

function appendValue(value) {
  currentExpression += value;
  display.value = currentExpression;
}

function clearDisplay() {
  currentExpression = "";
  display.value = "";
}

function calculate() {
  try {
    if (currentExpression !== "") {
      const result = eval(currentExpression);
      display.value = result;
      currentExpression = result;
    } else alert("Please enter a value");
  } catch (error) {
    display.value = "Error";
    currentExpression = "";
  }
}
