const nums = document.querySelectorAll('.numbers')
const operators = document.querySelectorAll('.operators')
const equals = document.querySelector('.equals')
const clear = document.querySelector('.clear')
let display = document.querySelector('.displayNum')
const calcContainer = document.querySelector('.calcContainer')


let number = []
calcContainer.addEventListener('click', (e) => {
    let operator
    if (e.target.dataset.typeof === "number") {
        number.push(parseInt(e.target.innerHTML))
        display.innerHTML = number.join('')
    }
    if (e.target.dataset.typeof === "decimal") {
        number.push('.')
        display.innerHTML = number.join('')
    }
    if (e.target.dataset.typeof === "operator") {
        let operator = e.target.innerHTML
    }
})



// Update display number and keep it in sync with the computational number
// When an operator is clicked, take the current computational number/display number and use that operator with the next set of computational numbers
// Once the equals button is clicked, complete the computation and return the result and save value in computational number
// Clear display and numerator whenever the CLEAR button is clicked
