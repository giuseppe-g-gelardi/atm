const prompt = require("prompt-sync")
const { balance, withdraw, deposit, validation } = require('./atm')


let accountBalance = balance
console.log(accountBalance)

let withdrawMoney = withdraw
console.log(withdrawMoney)

let depositMoney = deposit
console.log(depositMoney)

let validatePin = validation
console.log(validatePin)
