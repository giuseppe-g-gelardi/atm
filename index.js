const prompt = require("prompt-sync")()
const { getBalance, withdraw, deposit, validatePin } = require('./atm')
const { balance, pin } = require('./account')
const { wallet } = require ('./wallet')

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
          signOut()

          // setTimeout(() => {
          //   app()
          // }, 3000)
          break;
        }
      mainMenu()
      break;

  // * case 2 will deposit funds into the users account
    case 2:
      console.clear()
      let depositFunds = deposit(balance, wallet)
      if (depositFunds === 1) {
        return mainMenu()
      } else if (depositFunds === 2) {
        console.clear()
        signOut()
        break;
      }
    mainMenu()
    break;
  // * case 3 will withdraw funds from users account
    case 3:
      console.clear()
      let withdrawFunds = withdraw(balance, wallet)
      if (withdrawFunds === 1) {
        return mainMenu()
      } else if (withdrawFunds === 2) {
        console.clear()
        signOut()
        break;
      }
    mainMenu()
    break;
  // * case 4 will exit the program
    case 4:
      console.clear()
      signOut()
      break;
  // * default will call app and reprompt user for their pin
    default:
      app()
  }
}

function signOut() {
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
}

