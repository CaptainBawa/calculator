/* This is selecting the elements from the DOM and assigning them to variables. */
const myNumberBtn = document.querySelectorAll('.myNumberBtn');
const myOperatorBtn = document.querySelectorAll('.myOperatorBtn');
const downDisplay = document.querySelector('.down');
const topDisplay = document.querySelector('.top');
const equals = document.querySelector('.myEqualsBtn');
const clear = document.querySelector('.clear');
const del = document.querySelector('.delete');
//const dot = document.querySelector('.myDotBtn');



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
 * It takes in two numbers and an operator and returns the result of the operation
 * @param firstNumber - The first number to be operated on.
 * @param secondNumber - The second number to be operated on.
 * @param operator - a string representing the operator to be used
 * @returns the result of the operation.
 */
const operate = (firstNumber, secondNumber, operator) =>{
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    switch(operator){
        case '+':
           return  addition(firstNumber, secondNumber);
        case '-':
            return subtraction(firstNumber, secondNumber);
        case '*':
           return multiplication(firstNumber, secondNumber);
        case '÷' :
            if(secondNumber === 0) return "You Can't Divide By 0"
            else{
           return division(firstNumber, secondNumber);
            }
        default :
            return 'error';
    };
    
    
};


let storedNumber = '';
let clickedOperator = '';
let firstNum = '';
let calculate = '';

/* This is a forEach loop that is looping through the array of buttons with the class myNumberBtn. It
is adding an event listener to each button that is clicked. When the button is clicked, the value of
the button is added to the storedNumber variable. The value of the storedNumber variable is then
displayed in the downDisplay div. */
myNumberBtn.forEach((number) => {
    number.addEventListener('click', function() {
        if(storedNumber.length <= 11){
        storedNumber += number.value;
        downDisplay.textContent = storedNumber
        }
    });       
});

/* This is a forEach loop that is looping through the array of buttons with the class myOperatorBtn. It
is adding an event listener to each button that is clicked. When the button is clicked, the value of
the button is added to the clickedOperator variable. The value of the clickedOperator variable is
then
displayed in the topDisplay div. */
myOperatorBtn.forEach((operator => {
    operator.addEventListener('click', function() {
        if(firstNum && storedNumber){
            results();
        }
        firstNum = storedNumber;
        clickedOperator = operator.value;
        topDisplay.textContent = storedNumber + clickedOperator;
        storedNumber = '';
    });
}));



/* This is adding an event listener to the equals button. When the equals button is clicked, the
results function is called. */
equals.addEventListener('click', function() {
    results();
});


/**
 * The results function takes the first number, the stored number, and the clicked operator and passes
 * them to the operate function. The operate function returns a value which is stored in the calculate
 * variable. The downDisplay is updated with the value of the calculate variable. The topDisplay is
 * updated with the first number, the clicked operator, and the stored number. The stored number is
 * updated with the value of the calculate variable
 */
const results = () => {
    calculate = operate(firstNum, storedNumber, clickedOperator);
    downDisplay.textContent = calculate;
    topDisplay.textContent = firstNum + ' ' + clickedOperator + ' ' + storedNumber;
    firstNum = calculate;
};

 
/* This is adding an event listener to the clear button. When the clear button is clicked, the
topDisplay is updated with an empty string. The downDisplay is updated with the number 0. The
firstNum, storedNumber, and clickedOperator variables are updated with empty strings. */
clear.addEventListener('click', function() {
    topDisplay.textContent = '';
    downDisplay.textContent = 0;
    firstNum = '';
    storedNumber = '';
    clickedOperator = null;
});


/* This is adding an event listener to the delete button. When the delete button is clicked, the
value of the downDisplay is stored in the value variable. The value variable is then converted to a
string and the last character is removed. The stringNumber variable is then converted back to a
number
and stored in the stringNumber variable. The downDisplay is updated with the value of the
stringNumber
variable. The firstNum, storedNumber, and clickedOperator variables are updated with empty strings. */
del.addEventListener('click', function() {
   let value = downDisplay.textContent;
   let stringNumber = Number(value.toString().slice(0, -1));
   downDisplay.textContent = stringNumber;
   firstNum = '';
   storedNumber = '';
   clickedOperator = null;
});



/*dot.addEventListener('click', function(){
    if(firstNum.includes('.')) {
        firstNum += '.';
    }
});*/

