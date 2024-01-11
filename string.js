const ryhme = document.querySelector('h1')
const nursery = ryhme.textContent

//const lists = document.getElementsByTagName('li')
const lists = document.querySelectorAll('ol li')

//length of a string
lists[0].textContent += nursery.length

//touppercase method 
lists[1].innerHTML += `<strong>${nursery.toUpperCase()}</strong>`

//tolowercase method
lists[2].innerHTML += `<strong>${nursery.toLowerCase()}</strong>`

//first character
lists[3].innerHTML = `First charater: ${nursery[0]}`


//last character
lists[4].innerHTML = `Last charater: ${nursery.length - 1}`

//indexOf
lists[5].innerHTML = `The index of the letter "t" is ${nursery.indexOf('t')}`

//indexOf
lists[6].innerHTML = `The index of the second letter "t" is ${nursery.indexOf('t', 10)}`

//indexOf
lists[7].innerHTML = `The index of the letter "z" is ${nursery.indexOf('z')}` 

//lastIndexOf
lists[8].innerHTML = 'The last index of letter \'a\' ' +nursery.lastIndexOf('a')

//replace
lists[9].innerText = 'Replace "you" with "we": ' + nursery.replace('you', 'we')

//replaceAll
lists[10].innerText = 'Replace all "o" with "u": ' + nursery.replaceAll('o', 'u')

//sclice
// const twinkle = nursery.slice(0,7)
const twinkle = nursery.slice(0,nursery.indexOf('e')+1)
lists[11].textContent = twinkle

//repeat
lists[12].textContent = twinkle.repeat(5)

//charAt
lists[13].textContent = 'charater at index "20": ' + nursery.charAt(20).toUpperCase()

//startWith
lists[14].textContent = 'if it start with "k": ' + nursery.startsWith('k')

//endsWith
lists[15].textContent = ' if it ends with "high": ' + nursery.endsWith('high')

//includes
lists[16].textContent = 'if it includes "kar": ' + nursery.includes('kar')

//split
lists[17].textContent = nursery.split(' ')

//concat
lists[18].textContent = 'The nursery ryhmre starts with: '.concat(twinkle, 'ayodele', 'univelcity')