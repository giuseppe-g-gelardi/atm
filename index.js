const prompt = require("prompt-sync")()
const { getBalance, withdraw, deposit, validatePin } = require('./atm')
const { balance, pin } = require('./account')

let validate = validatePin(pin)

function app() {
  if (!validate) {
    validate
  } else {
    mainMenu()
  }
}
app()

function mainMenu() {
  console.clear()
  // console.log(`\n
  //  _________________________________\n
  // |   ### Welcome to the atm! ###   |\n
  // |   What would you like to do??   |\n
  // |_________________________________|\n\n
  // |  Enter 1 to check your balance  |\n
  // |  Enter 2 to deposit funds       |\n
  // |  Enter 3 to withdraw funds      |\n
  // |  Enter 4 to end transaction     |\n
  // |_________________________________|\n
  // `)

  console.log('what would you like to do?')

  let userInput = prompt()
  let userChoice = parseInt(userInput)

  switch(userChoice) {
    case 1:
      console.clear()
      getBalance(balance)
      break;
    case 2:
      console.clear()
      deposit(balance)
      break;
    case 3:
      console.clear()
      withdraw(balance)
      break;
    default:
      app()
  }
}

// mainMenu()


// let accountBalance = balance
// console.log(accountBalance)

// let withdrawMoney = withdraw
// console.log(withdrawMoney)

// let depositMoney = deposit
// console.log(depositMoney)

