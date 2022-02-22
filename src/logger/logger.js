//Problem 1
//Module1 : src/logger/logger.js containing the following exported function

//- welcome() -> prints ‘Welcome to my application. I am <name> and a part of FunctionUp Thorium cohort.’

let url = 'https://www.google.com'

function printMyMessage(message) {
    console.log(message)    
}

function welcome() {
    console.log('Welcome to my application. I am Satyam Raj and a part of FunctionUp Thorium cohort')
}

module.exports.url = url
module.exports.printMessage = printMyMessage
module.exports.printWelcomeMessage = welcome


//Call welcome in route.js inside the test-me handler