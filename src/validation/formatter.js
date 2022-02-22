//Problem 3

//Module 3: src/validator/formatter.js

//- trim() : calls the trim function on a hardcoded string for example ‘ functionUp  ’

function trim() {
    let name = '  Satyam raj    '
    console.log('Trimmed name is: ',name.trim())
}

//- changetoLowerCase() : changes the case of the string to lower. [Call toLowerCase() on a hardcoded string]

function changetoLowerCase() {
    let name = 'SaTYaM rAj'
    console.log('Name in lowercase is: ',name.toLowerCase())
}


//- changeToUpperCase() : changes the case of the string to upper case [Call toUpperCase() on a hardcoded string]

function changeToUpperCase() {
    let name = 'Satyam Raj'
    console.log('Name in uppercase is: ',name.toUpperCase())
}



module.exports.trim = trim
module.exports.changetoLowerCase = changetoLowerCase
module.exports.changeToUpperCase = changeToUpperCase

