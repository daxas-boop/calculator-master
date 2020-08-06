let operator = '';
let previousNumber = '';
let currentNumber = '';

function clear() {
  previousNumber = '';
  currentNumber = '';
  operator = '';
}

function appendNumber(e) {
  currentNumber += e.target.textContent.toString();
}

function getOperator(e){
  if(currentNumber === null) return
  operator = e.target.innerText.toString();
  if(operator){
    previousNumber = currentNumber;
    currentNumber = '';
  }
}

function calculate() {

}

function updateDisplay() {
  document.querySelector('#display-current').innerText = currentNumber;
  if(operator !== null){
    document.querySelector('#display-previous').innerText = `${previousNumber} ${operator}`;
  }
}

function inputManager() {
  const $buttons = document.querySelectorAll('#buttons .button');
  $buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      appendNumber(e);
      updateDisplay();
    });
  });

  const $operators = document.querySelectorAll('#operators .operator');
  $operators.forEach((operator) => {
    operator.addEventListener('click', (e) => {
      getOperator(e);
      updateDisplay();
    });
  });

  const $clear = document.querySelector('#clear');
  $clear.addEventListener('click',() => {
    clear();
    updateDisplay();
  });

  const $equals = document.querySelector('#equals')
  $equals.addEventListener('click', () => {
    calculate();
    updateDisplay();
  });
}

inputManager();
