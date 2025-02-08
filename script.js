const buttonNo = document.querySelector('#no')
const buttonYes = document.querySelector('#yes')

let fontSize = 2

let messages = [
  'Sisan´t?',
  'Estas segura?',
  'Siempre supe que eras asi',
  'Piensatelo por lo menós no?',
  'Me vas a hacer llorar',
  'Si viste el otro boton?',
  'Luego que porque eres una chucha',
  'Ya mejor dime que no me quieres ;('
]

buttonNo.addEventListener('click', () => {
  fontSize = fontSize + .5
  buttonYes.style.fontSize = `${fontSize}rem`

  const indexRandom = Math.floor(Math.random() * messages.length)

  buttonNo.textContent = messages[indexRandom]
})

buttonYes.addEventListener('click', () => {
  document.querySelector('#message').style.display = 'flex'
})