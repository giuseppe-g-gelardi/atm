const prompt = require('prompt-sync')
const { balance, pin } = require('./account')


// ! getBalance()

const getBalance = (accountBalance) => {
  console.log(accountBalance)
  return accountBalance
}
getBalance(balance)

// ! withdraw()

// ! deposit()

// ! validatePin

// let userInputPin = prompt()
const validatePin = (userPin) => {
  console.log('what is your pin?')
  let userInputPin = prompt()
  let count = 0
  while (userInputPin !== userPin) {
    console.log('that is not the correct pin')
    count++
  }
  
}
validatePin(pin)

