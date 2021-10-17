const prompt = require("prompt-sync")()
const { getBalance, withdraw, deposit, validatePin } = require('./atm')
const { balance, pin } = require('./account')

let validate = validatePin(pin)

function app() {
  console.clear()
  if (!validate) {
    validate
  } else {
    mainMenu()
  }
}
app()

function mainMenu() {
  console.clear()
  console.log(`\n
   _________________________________\n
  |   ### Welcome to the atm! ###   |\n
  |   What would you like to do??   |\n
  |_________________________________|\n\n
  |  Enter 1 to check your balance  |\n
  |  Enter 2 to deposit funds       |\n
  |  Enter 3 to withdraw funds      |\n
  |  Enter 4 to end transaction     |\n
  |_________________________________|\n
  `)

  // console.log('what would you like to do?')

  let userInput = prompt()
  let userChoice = parseInt(userInput)

  switch(userChoice) {
    case 1:
      console.clear()
      let displayBalance = getBalance(balance)
        if (displayBalance === 1) {
          return mainMenu()
        } else if (displayBalance === 2) {
          console.log('have a nice day!')
          break;
        } else {
          console.log('invalid input, please try again')
          displayBalance
        }
      mainMenu()
      break;
      
    case 2:
      console.clear()
      deposit(balance)
      break;
    case 3:
      console.clear()
      withdraw(balance)
      break;
    case 4:
      console.clear()
      console.log('have a nice day!')
      break;
    default:
      app()
  }
}

