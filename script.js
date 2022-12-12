let quotes = [
  "Do Your Best and Keep Going",
  "Do not Give up",
  "Everyone makes mistake, This Is How You Can Love and Forgive Yourself",
];

window.addEventListener("load", () => {
  alert(quotes[Math.floor(Math.random() * 3)])
})

let bodyElement = document.getElementsByTagName('body')[0]

let redButton = document.getElementById('red')
redButton.addEventListener('click', () => {
  bodyElement.setAttribute('style', 'background-color: red')
})

let greenButton = document.getElementById('green')
greenButton.addEventListener('click', () => {
  bodyElement.setAttribute('style', 'background-color: green')
})

let blueButton = document.getElementById('blue')
blueButton.addEventListener('click', () => {
  bodyElement.setAttribute('style', 'background-color: blue')
})