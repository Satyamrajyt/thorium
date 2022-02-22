//Problem 2
//Module 2 : src/util/helper.js

//- printDate() : prints the current date

function printDate() {
    let today = new Date()
    let date = today.getDate()+'-'+(today.getMonth() + 1)+'-'+today.getFullYear()
    // Added 1 to month because months start from 0
    console.log('Current date is: ', date)
}

//- printMonth() : prints the current month

function printMonth() {
    let today = new Date()
    let month = today.getMonth() + 1
    // Added 1 to month because months start from 0
    console.log('Current month is: ', month)
}


//- getBatchInfo() : prints batch name, week#, Day#, the topic being taught today is ….

function getBatchInfo() {
    console.log('Thorium, W3D1, the topic for today is Nodejs module system')
}

//. For example - ‘Thorium, W3D1, the topic for today is Nodejs module system’
	
//	Call all these functions in route.js inside the test-me route handler

module.exports.printCurrentDate = printDate
module.exports.printCurrentMonth = printMonth
module.exports.printBatchInfo = getBatchInfo