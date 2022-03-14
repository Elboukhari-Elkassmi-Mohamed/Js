const getBtns = document.querySelectorAll("button");
const display = document.querySelector(".cal_input");

let firstValue = 0;
let operationValue = "";
let secondValue = false;

// Event Listenners for ALL buttons

getBtns.forEach((getBtn) => {
  if (getBtn.classList.contains("number")) {
    getBtn.addEventListener("click", () => addNbr(getBtn.value));
  } else if (getBtn.classList.contains("dot")) {
    getBtn.addEventListener("click", () => addDot());
  } else if (getBtn.classList.contains("operation")) {
    getBtn.addEventListener("click", () => addOpr(getBtn.value));
  } else if (getBtn.classList.contains("clear")) {
    getBtn.addEventListener("click", () => clearA());
  } else if (getBtn.classList.contains("remove")) {
    getBtn.addEventListener("click", () => removeLast());
  }
});

function addNbr(number) {
  if (secondValue) {
    display.textContent = number;
    secondValue = false;
  } else if (display.textContent === "0") {
    display.textContent = number;
  } else {
    display.textContent = display.textContent + number;
  }
}

function addDot() {
  if (secondValue) return;
  if (!display.textContent.includes(".")) {
    display.textContent = `${display.textContent}.`;
  }
}

//calculate First and second depending on operator

function addOpr(operator) {
  const curentValue = Number(display.textContent);
  //prevent multiple operator
  if (operationValue && secondValue) {
    operationValue = operator;
    return;
  }
  //assign firstV if there no value
  if (!firstValue) {
    firstValue = curentValue;
  } else {
    //display

    switch (operationValue) {
      case "+":
        calculation = add(firstValue, curentValue);
        display.textContent = calculation;

        break;
      case "-":
        calculation = substraction(firstValue, curentValue);
        display.textContent = calculation;
        break;
      case "/":
        calculation = division(firstValue, curentValue);
        display.textContent = calculation;
        break;
      case "*":
        calculation = multiplication(firstValue, curentValue);
        display.textContent = calculation;
        break;
      default:
        calculation = equal(curentValue);
        display.textContent = calculation;
    }

    firstValue = calculation;
  }
  //Ready next valu
  secondValue = true;
  operationValue = operator;
}

function add(firstValue, secondValue) {
  return firstValue + secondValue;
}
function division(firstValue, secondValue) {
  return firstValue / secondValue;
}
function multiplication(firstValue, secondValue) {
  return firstValue * secondValue;
}
function substraction(firstValue, secondValue) {
  return firstValue - secondValue;
}
function equal(secondValue) {
  return secondValue;
}

function clearA() {
  display.textContent = "0";
  firstValue = 0;
  operationValue = "";
  secondValue = false;
}

function removeLast() {
  display.textContent = display.textContent.slice(0, 1);
}

//result Fv1 & Sv2 depend on opr
// const calcule = {
//   '/': (firstValue,secondValue) => firstValue / secondValue,
//   '*': (firstValue,secondValue) => firstValue * secondValue,
//   '+': (firstValue,secondValue) => firstValue + secondValue,
//   '-': (firstValue,secondValue) => firstValue - secondValue,
//   '=': (firstValue,secondValue) => secondValue,

// };
