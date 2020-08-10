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
  if(currentNumber === '') return
  if(operator !== ''){
    calculate();
  }

  operator = e.target.innerText.toString();
  previousNumber = currentNumber;
  currentNumber = '';

}

function calculate() {
  if(previousNumber && currentNumber){
    switch (operator){
      case '+':
        currentNumber = parseInt(previousNumber) + parseInt(currentNumber);
        previousNumber = '';
        operator = '';
        break;
      case '-':
        currentNumber = parseInt(previousNumber) - parseInt(currentNumber);
        previousNumber = '';
        operator = '';
        break;
      case '*':
        currentNumber = parseInt(previousNumber) * parseInt(currentNumber);
        previousNumber = '';
        operator = '';
        break;
      case '/':
        currentNumber = parseInt(previousNumber) / parseInt(currentNumber);
        previousNumber = '';
        operator = '';
        break;
      default:
        console.log('default');
    }
  }
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
    debugger
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
