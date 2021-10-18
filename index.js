const prompt = require("prompt-sync")()
const { getBalance, withdraw, deposit, validatePin } = require('./atm')
const { balance, pin } = require('./account')
const wallet = require ('./wallet')

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
  |      ### Welcome user ###       |\n
  |   What would you like to do??   |\n
  |_________________________________|\n
  |  Enter 1 to check your balance  |\n
  |  Enter 2 to deposit funds       |\n
  |  Enter 3 to withdraw funds      |\n
  |  Enter 4 to end transaction     |\n
  |_________________________________|\n
  `)


  let userInput = prompt()
  let userChoice = parseInt(userInput)

  switch(userChoice) {
  // * case 1 gets account balance, returns to main menu or quits.
    case 1:
      console.clear()
      let displayBalance = getBalance(balance)
        if (displayBalance === 1) {
          return mainMenu()
        } else if (displayBalance === 2) {
          console.clear()
          console.log(`\n
   _________________________________\n
  |       ### Logging out ###       |\n
  |                                 |\n
  |_________________________________|\n
  |                                 |\n
  |                                 |\n
  |        Have a great day!        |\n
  |                                 |\n
  |_________________________________|\n
  `)
          setTimeout(() => {
            if (validate) {
              !validate
            }
            app()
          }, 3000)
          break;
        } else {
          console.clear()
          console.log('invalid input, please try again')
          displayBalance
        }
      mainMenu()
      break;

  // * case 2 will deposit funds into the users account
  // TODO add funds FROM wallet
    case 2:
      console.clear()
      deposit(balance)
      break;
  // * case 3 will withdraw funds from users account
  // TODO TO the users wallet
    case 3:
      console.clear()
      withdraw(balance)
      break;
  // * case 4 will exit the program
    case 4:
      console.clear()
      console.log('have a nice day!')
      break;
  // * default will call app and reprompt user for their pin
    default:
      app()
  }
}

