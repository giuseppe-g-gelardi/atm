const prompt = require('prompt-sync')();
const { balance, pin } = require('./account')


// ! getBalance()

const getBalance = (accountBalance) => {
  console.log(accountBalance)
  return accountBalance
}
getBalance(balance)

// ! withdraw()
const withdraw = () => {
  console.log('this function withdrawls money')
}
withdraw()

// ! deposit()
const deposit = () => {
  console.log('this function deposits money')
}
deposit()

// ! validatePin


// const validatePin = (userPin) => {
//   let inputPin = parseInt(prompt('What is your pin?'))
//   if (userPin === inputPin) {
//     console.log('thank you')
//   } else {
//     console.log('that is not correct')
//     validatePin()
//   }
// }
// validatePin(pin)

function validatePin(userPin) {
  let pinValidated = false

  let count = 0
  let attempts = 2

  while (count < 3) {
  let inputPin = parseInt(prompt('what is your pin? '))

    if (inputPin == userPin) {
      console.log('thank you')
      pinValidated = true;
      break;
    } else {
      console.log(`that is not the correct pin, \nyou have ${attempts} attempts left\n 
      You will be logged out after 3 attempts`)
      count++
      attempts--
    }
    if (attempts === 0) {
      console.log('you have been logged out, come back later')
    }

  }


}
validatePin(pin)







module.export = {
  balance: getBalance,
  withdraw: withdraw,
  deposit: deposit,
  // validation: validatePin
}

