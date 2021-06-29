// DOM Buttons and Display
const numberButtons = document.querySelectorAll('[data-typeof="number"]')
const operatorButtons = document.querySelectorAll('[data-typeof="operator"]')
const decimal = document.querySelector('[data-typeof="decimal"]')
const equalButton = document.querySelector('[data-typeof="equal"]')
const clearButton = document.querySelector('[data-typeof="clear"]')
const currentDisplayComputation = document.querySelector('.displayNum')
const previousDisplayComputation = document.querySelector('.computationDisplay')

// Calculator CLASS
class Calculator {
    constructor(currentDisplayComputation, previousDisplayComputation) {
        this.currentDisplayComputation = currentDisplayComputation
        this.previousDisplayComputation = previousDisplayComputation
        this.clear()
    }

    clear() {
        this.currentOperatorValue = null
        this.currentComputationValue = 0
        this.previousComputationValue = ''
        this.updateDisplay()
    }

    updateValue(number) {
        this.currentComputationValue = this.previousComputationValue + number
        this.previousComputationValue = this.currentComputationValue
    }
    updateDisplay() {
        this.currentDisplayComputation.innerText = this.currentComputationValue
    }

    calculate() {
        console.log('calculated')
    }
}

// Creating a new object calc with Calculator class
const calc = new Calculator(currentDisplayComputation, previousDisplayComputation)

// Add event listeners for the NUMBER BUTTONS
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calc.updateValue(button.textContent)
        calc.updateDisplay()
    })
})

// Add event listener for the CLEAR BUTTON
clearButton.addEventListener('click', () => {
    calc.clear()
})

