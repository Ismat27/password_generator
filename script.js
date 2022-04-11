// console.log("well connected")

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const num = '0123456789';
const symbols = `!£$%^&*@~#?=-/\\~()`;
const characters = [...alphabet.toUpperCase().split(''), ...alphabet.split(''), ...num.split(''), ...symbols.split('')]

const btn = document.querySelector('.btn')
const pass1 = document.getElementById('pass1')
const pass2 = document.getElementById('pass2')
const pass3 = document.getElementById('pass3')
const pass4 = document.getElementById('pass4')

// function to shuffle array

function shuffleArray(array) {
    let curId = array.length;
    // There remain elements to shuffle
    while (0 !== curId) {
      // Pick a remaining element
      let randId = Math.floor(Math.random() * curId);
      curId -= 1;
      // Swap it with the current element.
      let tmp = array[curId];
      array[curId] = array[randId];
      array[randId] = tmp;
    }
    return array;
  }

// function to randomly generate 16 or any number of characters from an array
// steps:
// declare an empty string to represent the password 
// loop through the array 16 times each time generating a random number whose max value will be 1 less than the length of the array
// pick the element from the array whose index is equal to the random number 
// append the element to the emptry string declared initally

function generatePassword(array, passwordLength=16) {
    let password = ""
    for (let i=0; i<passwordLength; i++) {
        const ranNum = Math.floor(Math.random() * array.length)
        const ele = array[ranNum]
        password += ele
    }
    return password
}
 
btn.addEventListener('click', function() {
    // const newCharacters = shuffleArray(characters)
    pass1.textContent = generatePassword(shuffleArray(characters))
    pass2.textContent = generatePassword(shuffleArray(characters))
    pass3.textContent = generatePassword(shuffleArray(characters))
    pass4.textContent = generatePassword(shuffleArray(characters))
})

// console.log(alphabet.toUpperCase().split(''))
// console.log(characters)
// console.log(shuffleArray(characters))