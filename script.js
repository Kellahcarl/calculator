let display = document.getElementById("result");
let currentExpression = "";

// Helper function to add click event listeners to buttons
function addButtonClickListener(id, value) {
  const button = document.getElementById(id);
  button.addEventListener("click", () => {
    if (value === "AC") {
      clearDisplay();
    } else if (value === "=") {
      calculate();
    } else {
      appendValue(value);
    }
  });
}

// Add event listeners for each button
addButtonClickListener("add", "+");
addButtonClickListener("subtract", "-");
addButtonClickListener("multiply", "*");
addButtonClickListener("divide", "/");
addButtonClickListener("seven", "7");
addButtonClickListener("eight", "8");
addButtonClickListener("nine", "9");
addButtonClickListener("four", "4");
addButtonClickListener("five", "5");
addButtonClickListener("six", "6");
addButtonClickListener("one", "1");
addButtonClickListener("two", "2");
addButtonClickListener("three", "3");
addButtonClickListener("zero", "0");
addButtonClickListener("decimal", ".");
addButtonClickListener("clear", "AC");
addButtonClickListener("equal", "=");

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
