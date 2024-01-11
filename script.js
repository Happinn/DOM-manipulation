// let firstName ='ayodele'
let firstName = prompt('what is your name')

let lastName = 'oguns'

const town =  `lagos`

// const age = 50
const age = prompt('how old are you')

let date = new Date().getFullYear()-age

let statement = 'my name is ' + firstName + ' and my surname is ' + lastName + ' and i live in  ' + town + ' i was born in ' + date 

let decleration =   `my name is ${firstName} and my surname is ${lastName}  and i live in ${town}. i was born in ${new Date().getFullYear()-age}`


console.log(statement) 
console.log(decleration)
// console.log(statement) making use of camel case data type and using single quote 
// console.log(decleration) making use of camel case data type and using template litteral