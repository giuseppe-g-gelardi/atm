const prompt = require("prompt-sync")()
const { getBalance, withdraw, deposit, validatePin } = require('./atm')
const { balance, pin } = require('./account')




function app() {
  console.log(`\n
   _________________________________\n
  |   ### Welcome to the atm! ###   |\n
  |   What would you like to do??   |\n
  |_________________________________|\n\n
  |  Enter 1 to check your balance  |\n
  |  Enter 2 to deposit funds       |\n
  |  Enter 3 to withdraw funds      |\n
  |_________________________________|\n
  `)

  let userInput = prompt()
  let userChoice = parseInt(userInput)

  switch(userChoice) {
    case 1:
      getBalance(balance)
      break;
    case 2:
      deposit(balance)
      break;
    case 3:
      withdraw(balance)
      break;
    default:
      app()
  }
}

app()


// let accountBalance = balance
// console.log(accountBalance)

// let withdrawMoney = withdraw
// console.log(withdrawMoney)

// let depositMoney = deposit
// console.log(depositMoney)

