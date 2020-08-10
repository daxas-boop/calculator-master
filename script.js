let operator = '';
let previousNumber = '';
let currentNumber = '';

function changeSign(){
  if(currentNumber && currentNumber.includes('-')) {
    Math.abs(currentNumber);
  } else {
    currentNumber = - currentNumber  
  }
}

function clearAll() {
  previousNumber = '';
  currentNumber = '';
  operator = '';
}

function clearEntry(){
  currentNumber = '';
}


function appendNumber(e) {
  let number = e.target.textContent.toString();
  if(number === '+/-') return;
  if(number === '.' && currentNumber.includes('.')) return;
  currentNumber += number;
}

function getOperator(e){
  if(currentNumber === '') return
  if(previousNumber !== ''){
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
        currentNumber = parseFloat(previousNumber) + parseFloat(currentNumber);
        break;
      case '-':
        currentNumber = parseFloat(previousNumber) - parseFloat(currentNumber);
        break;
      case '*':
        currentNumber = parseFloat(previousNumber) * parseFloat(currentNumber);
        break;
      case '÷':
        currentNumber = parseFloat(previousNumber) / parseFloat(currentNumber);
        break;
      default:
        return
    }
    previousNumber = '';
    operator = '';
  }
}

function updateDisplay() {
  let $currentDisplay = document.querySelector('#display-current');
  let $previousDisplay = document.querySelector('#display-previous');
  
  if (currentNumber == Number.POSITIVE_INFINITY || currentNumber == Number.NEGATIVE_INFINITY) {
    $currentDisplay.innerText = 'Error'
    $previousDisplay.innerText = `${previousNumber} ${operator}`;
    return
  };

  $currentDisplay.innerText = currentNumber;
  $previousDisplay.innerText = `${previousNumber} ${operator}`;
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
    clearAll();
    updateDisplay();
  });

  const $equals = document.querySelector('#equals');
  $equals.addEventListener('click', () => {
    calculate();
    updateDisplay();
  });

  const $clearEntry = document.querySelector('#clearEntry');
  $clearEntry.addEventListener('click', () => {
    clearEntry();
    updateDisplay();
  });

  const $plusMinus = document.querySelector('#plus-minus');
  $plusMinus.addEventListener('click', () => {
    changeSign();
    updateDisplay();
  });
}

inputManager();
