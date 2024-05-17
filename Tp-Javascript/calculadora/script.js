document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '';
    let operator = null;
    let operand1 = null;
    let operand2 = null;
    let resultDisplayed = false;

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = this.getAttribute('data-value');

            if (value === 'C') {
                clearDisplay();
            } else if (value === '=') {
                calculateResult();
            } else if (['+', '-', '*', '/'].includes(value)) {
                setOperator(value);
            } else {
                appendNumber(value);
            }
        });
    });

    function clearDisplay() {
        currentInput = '';
        operator = null;
        operand1 = null;
        operand2 = null;
        resultDisplayed = false;
        display.textContent = '0';
    }

    function calculateResult() {
        if (operator && operand1 !== null) {
            operand2 = parseFloat(currentInput);
            let result = null;

            switch (operator) {
                case '+':
                    result = operand1 + operand2;
                    break;
                case '-':
                    result = operand1 - operand2;
                    break;
                case '*':
                    result = operand1 * operand2;
                    break;
                case '/':
                    result = operand1 / operand2;
                    break;
            }

            display.textContent = result;
            currentInput = String(result);
            operand1 = result;
            operand2 = null;
            operator = null;
            resultDisplayed = true;
        }
    }

    function setOperator(value) {
        if (currentInput !== '') {
            if (operand1 === null) {
                operand1 = parseFloat(currentInput);
            } else if (!resultDisplayed) {
                operand2 = parseFloat(currentInput);
                calculateResult();
            }
            operator = value;
            currentInput = '';
        }
    }

    function appendNumber(value) {
        if (resultDisplayed) {
            currentInput = value;
            resultDisplayed = false;
        } else {
            currentInput += value;
        }
        display.textContent = currentInput;
    }
});
