const prompt = require("prompt-sync")()
// const { balance, withdraw, deposit, validation } = require('./atm')
const { getBalance, withdraw, deposit, validatePin } = require('./atm')
const { balance, pin } = require('./account')




function app() {
  validatePin(pin)
}

app()


// let accountBalance = balance
// console.log(accountBalance)

// let withdrawMoney = withdraw
// console.log(withdrawMoney)

// let depositMoney = deposit
// console.log(depositMoney)

