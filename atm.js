const prompt = require('prompt-sync')();
const { balance, pin } = require('./account')


// ! getBalance()

const getBalance = (accountBalance) => {
  console.log(accountBalance)
  return accountBalance
}
// getBalance(balance)


// ! withdraw
function withdraw(accountBalance) {
  // let prompt = require('prompt-sync')
  let withdrawAmount = parseInt(prompt('how much would you like to take out \n'))
  
  if (withdrawAmount <= balance) {
    accountBalance = accountBalance - withdrawAmount
    console.log(`taking ${withdrawAmount} from your account. 
    \nyour new balance is: ${accountBalance} \n`)
  } else if (withdrawAmount > accountBalance) {
    console.log('insufficient funds')
    withdraw()
  } else {
    console.log('invalid')
    withdraw()
  }
}
withdraw(balance)



// ! deposit()
const deposit = () => {
  console.log('this function deposits money')
}
deposit()



// ! validatePin
// function validatePin(userPin) {
//   let pinValidated = false
//   let count = 0
//   let attempts = 2

//   while (count < 3) {
//   let inputPin = parseInt(prompt('what is your pin? '))

//     if (inputPin == userPin) {
//       console.log('thank you')
//       pinValidated = true;
//       break;
//     } else {
//       console.log(`that is not the correct pin,\n \nyou have ${attempts} attempts left 
//       \nYOU WILL BE LOCKED OUT AFTER 3 ATTEMPTS! \n`)
//       count++
//       attempts--
//     }
//     if (attempts === 0) {
//       console.log('you have been logged out, come back later')
//     }
//   }
// }

// validatePin(pin)







module.export = {
  balance: getBalance,
  withdraw: withdraw,
  deposit: deposit,
  // validation: validatePin
}




