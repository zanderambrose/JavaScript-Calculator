// DOM objects
let display = document.querySelector('.displayNum')
const calcContainer = document.querySelector('.calcContainer')

// Container data structures
let firstNumber = []
let secondNumber = []
let operatorArr = ['+', '-', '*', '/']
let storeOperator = []
let result = []

// Calculator Functionality Logic
calcContainer.addEventListener('click', (e) => {
    if (e.target.dataset.typeof === "number") {
        firstNumber.push(parseInt(e.target.innerHTML))
        display.innerHTML = firstNumber.join('')
    }
    if (e.target.dataset.typeof === "decimal") {
        if (firstNumber.includes('.')) {
            return
        } else {
            firstNumber.push('.')
            display.innerHTML = firstNumber.join('')
        }
    }
    if (e.target.dataset.typeof === "operator") {
        storeOperator.push(e.target.innerHTML)
        console.log(storeOperator)
    }

    if (e.target.dataset.typeof === "equal") {
        if (storeOperator[storeOperator.length - 1] === operatorArr[0]) {
            result.push(firstNumber + secondNumber)
        }
        if (storeOperator[storeOperator.length - 1] === operatorArr[1]) {
            result.push(firstNumber - secondNumber)
        }
        if (storeOperator[storeOperator.length - 1] === operatorArr[2]) {
            result.push(firstNumber * secondNumber)
        }
        if (storeOperator[storeOperator.length - 1] === operatorArr[3]) {
            result.push(firstNumber / secondNumber)
        }
        firstNumber = result
    }

    if (e.target.dataset.typeof === "clear") {
        firstNumber = []
        display.innerHTML = 0
    }
})



// Update display number and keep it in sync with the computational number
// When an operator is clicked, take the current computational number/display number and use that operator with the next set of computational numbers
// Once the equals button is clicked, complete the computation and return the result and save value in computational number
// Clear display and numerator whenever the CLEAR button is clicked
