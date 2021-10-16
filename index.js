const prompt = require("prompt-sync")()
const { getBalance, withdraw, deposit, validatePin } = require('./atm')
const { balance, pin } = require('./account')




function app(userInput) {
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



}

app(prompt)


// let accountBalance = balance
// console.log(accountBalance)

// let withdrawMoney = withdraw
// console.log(withdrawMoney)

// let depositMoney = deposit
// console.log(depositMoney)

