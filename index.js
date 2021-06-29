// // DOM objects
// let display = document.querySelector('.displayNum')
// const calcContainer = document.querySelector('.calcContainer')

// // Container data structures
// let firstNumber = []
// let secondNumber = []
// let operatorArr = ['+', '-', '*', '/']
// let storeOperator = []
// let result = []

// // Calculator Functionality Logic
// calcContainer.addEventListener('click', (e) => {
//     // FOR NUMBER TYPES
//     if (e.target.dataset.typeof === "number") {
//         console.log(firstNumber)
//         if (storeOperator.length < 1) {
//             firstNumber.push(parseInt(e.target.innerHTML))
//             display.innerHTML = firstNumber.join('')
//         } else {
//             secondNumber.push(parseInt(e.target.innerHTML))
//             display.innerHTML = secondNumber.join('')

//         }
//     }
//     // FOR DECIMAL
//     if (e.target.dataset.typeof === "decimal") {
//         console.log(firstNumber)
//         if (firstNumber.includes('.')) {
//             return
//         } else {
//             firstNumber.push('.')
//             display.innerHTML = firstNumber.join('')
//         }
//     }
//     // FOR OPERATOR TYPES
//     if (e.target.dataset.typeof === "operator") {
//         storeOperator.push(e.target.innerHTML)
//     }
//     // FOR EQUALS 
//     if (e.target.dataset.typeof === "equal") {
//         result = []
//         console.log(firstNumber)
//         if (firstNumber.length > 1) {
//             if (storeOperator[storeOperator.length - 1] === operatorArr[0]) {
//                 result.push(parseInt(firstNumber.join('')) + parseInt(secondNumber.join('')))
//             } else if (storeOperator[storeOperator.length - 1] === operatorArr[1]) {
//                 result.push(parseInt(firstNumber.join('')) - parseInt(secondNumber.join('')))
//             } else if (storeOperator[storeOperator.length - 1] === operatorArr[2]) {
//                 result.push(parseInt(firstNumber.join('')) * parseInt(secondNumber.join('')))
//             } else if (storeOperator[storeOperator.length - 1] === operatorArr[3]) {
//                 result.push(parseInt(firstNumber.join('')) / parseInt(secondNumber.join('')))
//             }
//         } else {
//             if (storeOperator[storeOperator.length - 1] === operatorArr[0]) {
//                 result.push(parseInt(firstNumber) + parseInt(secondNumber.join('')))
//             } else if (storeOperator[storeOperator.length - 1] === operatorArr[1]) {
//                 result.push(parseInt(firstNumber) - parseInt(secondNumber.join('')))
//             } else if (storeOperator[storeOperator.length - 1] === operatorArr[2]) {
//                 result.push(parseInt(firstNumber) * parseInt(secondNumber.join('')))
//             } else if (storeOperator[storeOperator.length - 1] === operatorArr[3]) {
//                 result.push(parseInt(firstNumber) / parseInt(secondNumber.join('')))
//             }
//         }
//         display.innerHTML = result;
//         firstNumber = result
//         storeOperator = []
//         secondNumber = []
//     }
//     // FOR CLEAR BUTTON
//     if (e.target.dataset.typeof === "clear") {
//         firstNumber = []
//         display.innerHTML = 0
//     }
// })