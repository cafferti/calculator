
function addToResult(value) {
    var resultDisplay = document.getElementById('resultDisplay');
    var operationDisplay = document.getElementById('operationDisplay');
    var currentOperation = operationDisplay.value;
    
    operationDisplay.value += value;
    calculateResult();
  }

  function calculateResult() {
    var resultDisplay = document.getElementById('resultDisplay');
    var operationDisplay = document.getElementById('operationDisplay');
    var currentOperation = operationDisplay.value;
    
    if (currentOperation !== '') {
      var calculatedResult = eval(currentOperation);
      resultDisplay.textContent = calculatedResult;
    } else {
      resultDisplay.textContent = '';
    }
  }
  
  function clearCalculator() {
    var resultDisplay = document.getElementById('resultDisplay');
    var operationDisplay = document.getElementById('operationDisplay');
    
    resultDisplay.textContent = '';
    operationDisplay.value = '';
  }
