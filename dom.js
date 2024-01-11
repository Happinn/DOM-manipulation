const title = document.querySelector('h2')

title.textContent = 'DOM manipulations'

const para1 = document.querySelector('p')
const para2 = document.querySelector('p:nth-of-type(2)')
const para3 = document.querySelector('body>:nth-child(5)')
const para4 = document.querySelector('p+p+p+p')
const para5 = document.querySelector('p:last-of-type')

para1.textContent = 'this is the first paragraph'
para2.textContent = 'this is the second paragraph'
para3.textContent = 'this is the third paragraph'
para4.textContent = 'this is the forth paragraph'
para5.textContent = 'this is the last paragraph'

const lists = document.querySelectorAll('ul li')
lists[5].textContent = 'lists 001'
lists[1].textContent = 'lists 002'
lists[2].textContent = 'lists 003'
lists[3].textContent = 'lists 004'
lists[4].textContent = 'lists 005'
lists[0].textContent = 'lists 006'

// The above code obeys cascading rule that is why when we change the index in accordance with the number it applies the rule

const unique = document.getElementById('one')
unique.style.backgroundColor = '#e55'
unique.style.textTransform = 'uppercase'

const un = document.getElementById('flash')
flash.style.backgroundColor = '#6dd'
flash.style.borderBottom = '8px solid yellow'

const header = document.querySelector('h1')
header.style.textAlign = 'center'

const classOne = document.getElementsByClassName('one')

classOne[0].textContent = 'this is a class paragraph'

const para = document.querySelectorAll('p')
para[0].style.fontSize = '3rem'
para[4].style.background = 'linear-gradient(red, blue)'


const decleration = document.getElementsByTagName('div')
decleration[0].style.color = 'green'
decleration[0].style.backgroundColor = 'gray'


const par = document.querySelector('#par')
par.innerHTML = "I'm a <br> .<strong>frontend</strong> developer. He said <q> I am  a developer"
// alert(`I'm a \n <strong>frontend</strong> developer.
//  \t He said <q> I am  a \n developer</q>`)




  
