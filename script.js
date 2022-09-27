const addition = (firstNumber, secondNumber) => {
    return firstNumber + secondNumber;
};
console.log(addition(2,3));

const subtraction = (firstNumber, secondNumber) => {
    return firstNumber - secondNumber;
};
console.log(subtraction(2, 3));

const multiplication = (firstNumber, secondNumber) => {
    return firstNumber * secondNumber;
};
console.log(multiplication(2, 3));

const division = (firstNumber, secondNumber) => {
    return firstNumber / secondNumber;
};
console.log(division(5, 3));

const operate = (firstNumber, secondNumber) => {
    return addition(firstNumber, secondNumber);
}
console.log(operate(10, 10));