/* This is selecting the elements from the DOM and assigning them to variables. */
const myNumberBtn = document.querySelectorAll('.myNumberBtn');
const myOperatorBtn = document.querySelectorAll('.myOperatorBtn');
const myEqualsBtn = document.querySelector('.myEqualsBtn');
const downDisplay = document.querySelector('.down');
const topDisplay = document.querySelector('.top');
const equals = document.querySelector('.myEqualsBtn');
const clear = document.querySelector('.clear');
const del = document.querySelector('.delete');

topDisplay = '';
downDisplay = '';



/**
 * This function takes two numbers as arguments and returns the sum of those numbers.
 * @param firstNumber - The first number to add.
 * @param secondNumber - The second number to add to the first number.
 * @returns The sum of the two numbers.
 */
const addition = (firstNumber, secondNumber) => {
    return firstNumber + secondNumber;
};


/**
 * Subtraction is a function that takes two numbers and returns the difference between them.
 * @param firstNumber - The first number to subtract from.
 * @param secondNumber - The second number to subtract from the first number.
 * @returns the result of the subtraction of the two numbers.
 */
const subtraction = (firstNumber, secondNumber) => {
    return firstNumber - secondNumber;
};


/**
 * This function takes two numbers as arguments and returns the product of the two numbers.
 * @param firstNumber - The first number to be multiplied.
 * @param secondNumber - The second number to multiply.
 * @returns The result of the multiplication of the two numbers.
 */
const multiplication = (firstNumber, secondNumber) => {
    return firstNumber * secondNumber;
};


/**
 * This function takes two numbers as arguments and returns the result of dividing the first number by
 * the second number.
 * @param firstNumber - The first number to be divided.
 * @param secondNumber - The number to divide the first number by.
 * @returns The result of the division of the two numbers.
 */
const division = (firstNumber, secondNumber) => {
    return firstNumber / secondNumber;
};


/**
 * It takes in two numbers and an operator, and returns the result of the operation
 * @param firstNumber - The first number in the equation.
 * @param secondNumber - The second number to be operated on.
 * @param operator - a string representing the operator to be used
 * @returns The result of the operation.
 */
const operate = (firstNumber, secondNumber, operator) => {
    if(operator === '+'){
        return addition(firstNumber, secondNumber);
    }
    else if(operator === '-'){
        return subtraction(firstNumber, secondNumber);
    }
    else if(operator === '*'){
        return multiplication(firstNumber, secondNumber);
    }
    else if(operator === '/'){
        return division(firstNumber, secondNumber);
    }
    else{
        return 'invalid';
    };
};

let storedNumber = '';
let clickedOperator = '';
let firstNum = '';
let calculate = '';


myNumberBtn.forEach((number) => {
    number.addEventListener('click', function() {
        storedNumber += number.value;
        downDisplay.textContent = storedNumber
    });       
});

myOperatorBtn.forEach((operator => {
    operator.addEventListener('click', function() {
        if(firstNum && storedNumber){
            results();
        }
        firstNum = storedNumber;
        clickedOperator = operator.textContent;
        topDisplay.textContent = storedNumber + clickedOperator;
        storedNumber = '';
    });
}));

equals.addEventListener('click', function() {
    results();
});


const results = () => {
    calculate = operate(parseFloat(firstNum), parseFloat(storedNumber), clickedOperator);
    downDisplay = calculate;
    topDisplay = `${firstNum} + ${clickedOperator} + ${storedNumber}`;
    storedNumber = calculate;
}

