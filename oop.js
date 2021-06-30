// DOM Buttons and Display
const numberButtons = document.querySelectorAll('[data-typeof="number"]')
const operatorButtons = document.querySelectorAll('[data-typeof="operator"]')
const decimal = document.querySelector('[data-typeof="decimal"]')
const negativeButton = document.querySelector('.negative')
const negativeText = document.querySelector('[data-typeof="negative"]')
const equalButton = document.querySelector('[data-typeof="equal"]')
const clearButton = document.querySelector('[data-typeof="clear"]')
const currentDisplay = document.querySelector('.displayNum')
const previousDisplay = document.querySelector('.computationDisplay')

// Calculator CLASS
class Calculator {
    constructor(currentDisplay, previousDisplay) {
        this.currentDisplay = currentDisplay
        this.previousDisplay = previousDisplay
        this.clear()
    }

    clear() {
        this.currentOperatorValue = null
        this.currentComputationValue = ''
        this.previousComputationValue = ''
        this.updateDisplay()
        this.clearPrevDisplay()
    }

    updateValue(number) {
        this.currentComputationValue = this.currentComputationValue + number
    }

    updateDisplay() {
        if (this.currentComputationValue === '') {
            this.currentDisplay.textContent = '0'
        } else {
            this.currentDisplay.textContent = this.currentComputationValue
        }
    }

    updatePreviousDisplay(operator) {
        this.currentOperatorValue = operator
        this.previousComputationValue = this.currentComputationValue
        this.previousDisplay.textContent = `${this.currentDisplay.textContent} ${this.currentOperatorValue}`
        this.currentComputationValue = ''
        this.updateDisplay()
    }

    calculate() {
        let currentComputationValuePlaceholder = this.currentComputationValue
        if (!this.previousComputationValue) {
            this.previousComputationValue = '0'
        }
        if (this.currentOperatorValue == '+') {
            this.currentComputationValue = ''
            this.updateValue((parseFloat(this.previousComputationValue) + parseFloat(currentComputationValuePlaceholder)).toString())
            this.updateDisplay()
            this.clearPrevDisplay()
        } else if (this.currentOperatorValue == '-') {
            this.currentComputationValue = ''
            this.updateValue((parseFloat(this.previousComputationValue) - parseFloat(currentComputationValuePlaceholder)).toString())
            this.updateDisplay()
            this.clearPrevDisplay()
        } else if (this.currentOperatorValue == '*') {
            this.currentComputationValue = ''
            this.updateValue((parseFloat(this.previousComputationValue) * parseFloat(currentComputationValuePlaceholder)).toString())
            this.updateDisplay()
            this.clearPrevDisplay()
        } else if (this.currentOperatorValue == '/') {
            if (currentComputationValuePlaceholder === '0') {
                this.updateDisplay()
                this.clearPrevDisplay()
            } else {
                this.currentComputationValue = ''
                this.updateValue((parseFloat(this.previousComputationValue) / parseFloat(currentComputationValuePlaceholder)).toString())
                this.updateDisplay()
                this.clearPrevDisplay()
            }
        }
    }

    clearPrevDisplay() {
        this.previousDisplay.style.visibility = 'hidden'
    }

    showPrevDisplay() {
        this.previousDisplay.style.visibility = 'visible'
    }
}

// Creating a new object calc with Calculator class
const calc = new Calculator(currentDisplay, previousDisplay)

// Add event listeners for the NUMBER BUTTONS
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calc.updateValue(button.textContent)
        calc.updateDisplay()
    })
})

// Add event listener for NEGATIVE BUTTON
negativeButton.addEventListener('click', () => {
    if (currentDisplay.textContent.includes('-')) return
    if (calc.currentComputationValue) return
    calc.updateValue(negativeText.textContent)
    calc.updateDisplay()
})

// Add event listener for DECIMAL BUTTON
decimal.addEventListener('click', () => {
    if (currentDisplay.textContent.includes('.')) return
    calc.updateValue(decimal.textContent)
    calc.updateDisplay()
})

// Add event listener for the CLEAR BUTTON
clearButton.addEventListener('click', () => {
    calc.clear()
})

// Add event listeners for the OPERATOR BUTTONS
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        calc.updatePreviousDisplay(button.textContent)
        calc.showPrevDisplay()
    })
})

// Add event listener for EQUAL BUTTON  
equalButton.addEventListener('click', () => {
    calc.calculate()
})

// fix appending a number on number button click after calculation 