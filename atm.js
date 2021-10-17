const prompt = require('prompt-sync')();
const { balance, pin } = require('./account')
const { wallet } = require('./wallet')


// ! getBalance()


function getBalance(accountBalance) {
  // console.log(accountBalance)
  // return accountBalance

  console.log(`Your account balance is $${accountBalance}`)
}
// getBalance(balance)


// ! withdraw

function withdraw(accountBalance) {
  let transactionComplete = false

  console.log(`\nYour account balance is $${accountBalance}\nHow much would you like to withdraw?`)
  let userInput = prompt()
  let withdrawAmount = parseInt(userInput)

  // function called to break out of the loop and return to the main menu
  function isComplete(){
    console.log(`\nType "done" to complete transaction\n`)
    let isCompletePrompt = prompt()

    if (isCompletePrompt === 'done') {
      transactionComplete = true
    }
  }

  while (!transactionComplete) {
    // edge case validating input to be only numbers
    if (isNaN(userInput)) {
      console.log('invalid input, please enter only numbers')
      withdraw(accountBalance)
    }

    if (withdrawAmount <= accountBalance) {
      accountBalance -= withdrawAmount
      console.log(`\ntaking ${withdrawAmount} from your account. 
      \nyour new balance is: ${accountBalance}\n`)
      isComplete()
    } else if (withdrawAmount > accountBalance) {
      console.log('insufficient funds')
    } 
  }
  return accountBalance
}
// withdraw(balance)



// ! deposit()
function deposit(accountBalance) {
  let transactionComplete = false

  console.log(`\nYour account balance is $${accountBalance}\nHow much would you like to deposit?`)
  let userInput = prompt()
  let depositAmount = parseInt(userInput)

  function isComplete(){
    console.log(`\nType "done" to complete transaction\n`)
    let isCompletePrompt = prompt()

    if (isCompletePrompt === 'done') {
      transactionComplete = true
    }
  }

  while (!transactionComplete) {
    // edge case validating input to be only numbers
    if (isNaN(userInput)) {
      console.log('invalid input, please enter only numbers')
      deposit(accountBalance)
    }

    if (depositAmount >= 0) {
      accountBalance = accountBalance + depositAmount
      console.log(`\nAdding ${depositAmount} to your account. 
      \nyour new balance is: ${accountBalance}\n`)
      isComplete()
    }

    // if (depositAmount > onHand) {
    //   console.log('you do not have enough money')
    // }



  }
  return accountBalance
}
// deposit(balance)


// TODO simplify validatePin
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
//   return pinValidated
// }
// // validatePin(pin)





// TODO simplify validatePin
// ! validatePin
function validatePin(userPin) {
  let pinValidated = false
  let count = 0
  let attempts = 2

  while (count < 3) {
  let inputPin = parseInt(prompt(`\n
  _________________________________\n
 |   ### Welcome to the atm! ###   |\n
 |Please enter your pin to continue|\n
 |_________________________________|\n\n
 |                                 |\n
 |     #      #      #      #      |\n
 |    (*)    (*)    (*)    (*)     |\n
 |                                 |\n
 |_________________________________|\n
  `))

    if (inputPin == userPin) {
      console.log('thank you')
      pinValidated = true;
      break;
    } else {
      console.log(`that is not the correct pin,\n \nyou have ${attempts} attempts left 
      \nYOU WILL BE LOCKED OUT AFTER 3 ATTEMPTS! \n`)
      count++
      attempts--
    }
    if (attempts === 0) {
      console.log('you have been logged out, come back later')
    }
  }
  return pinValidated
}
// validatePin(pin)





module.exports = {
  getBalance: getBalance,
  withdraw: withdraw,
  deposit: deposit,
  validatePin: validatePin
}
