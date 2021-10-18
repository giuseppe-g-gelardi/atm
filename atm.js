const prompt = require('prompt-sync')();
const { balance, pin } = require('./account')
const { wallet } = require('./wallet')

// ! getBalance()

function getBalance(accountBalance) {

  console.log(`\n
   _________________________________\n
  |      ### Welcome user ###       |\n
  |        Account Balance          |\n
  |_________________________________|\n
  |    Your account balance is:     |\n
  |              $${accountBalance}              |\n
  |  Enter 1 for the Main Menu      |\n
  |  Enter 2 to exit                |\n
  |_________________________________|\n
  `)

  let userInput = prompt()
  let userChoice = parseInt(userInput)

  if (userChoice === 1) {
    return 1
  } else if (userChoice === 2) {
    return 2
  } else {
    console.log('invalid input')
  }

}
// getBalance(balance)


// ! withdraw

function withdraw(accountBalance, walletAmount) {
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
  //

  while (!transactionComplete) {
    // edge case validating input to be only numbers
    if (isNaN(userInput)) {
      console.log('invalid input, please enter only numbers')
      withdraw(balance, wallet)
    }


    if (withdrawAmount <= accountBalance) {
      accountBalance -= withdrawAmount
      walletAmount += withdrawAmount
      console.log(`\ntaking ${withdrawAmount} from your account. 
      \nyour new balance is: ${accountBalance}\n`)
      console.log(`you now have $${walletAmount} in your wallet`)
      isComplete()
    } else if (withdrawAmount > accountBalance) {
      console.log('insufficient funds')
    } 

    





    // if (withdrawAmount <= accountBalance) {
    //   accountBalance -= withdrawAmount
    //   console.log(`\ntaking ${withdrawAmount} from your account. 
    //   \nyour new balance is: ${accountBalance}\n`)
    //   isComplete()
    // } else if (withdrawAmount > accountBalance) {
    //   console.log('insufficient funds')
    // } 






  }
  // return accountBalance
}
// withdraw(balance, wallet)



// ! deposit()
function deposit(accountBalance, walletAmount) {
  let transactionComplete = false

  console.log(`\nYour account balance is $${accountBalance}\nHow much would you like to deposit?`)
  let userInput = prompt()
  let depositAmount = parseInt(userInput)

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
      deposit(balance, wallet)
    }

   //need to fix edge case if someone tried to deposit more than their wallet value
    if (depositAmount < walletAmount) {
      accountBalance += depositAmount
      walletAmount -= depositAmount
      console.log(`\nAdding ${depositAmount} to your account. 
      \nyour new balance is: ${accountBalance}\n`)
      console.log(`you now have $${walletAmount} in your wallet`)
      isComplete()
    }
  }




    // if (depositAmount >= 0) {
    //   accountBalance = accountBalance + depositAmount
    //   console.log(`\nAdding ${depositAmount} to your account. 
    //   \nyour new balance is: ${accountBalance}\n`)
    //   isComplete()
    // }

 



  
  // return accountBalance
}
// deposit(balance, wallet)



// ! validatePin
function validatePin(userPin) {
  console.clear()
  let pinValidated = false
  let count = 0
  let attempts = 2

  while (count < 3) {
  console.log(`\n
  _________________________________\n
  |   ### Welcome to the atm! ###   |\n
  |Please enter your pin to continue|\n
  |_________________________________|\n
  |                                 |\n
  |     #      #      #      #      |\n
  |    (*)    (*)    (*)    (*)     |\n
  |                                 |\n
  |_________________________________|\n
  `)

  let userInput = prompt()
  let inputPin = parseInt(userInput)

    if (inputPin == userPin) {
      console.log('thank you')
      pinValidated = true;
      break;
    } else {
      console.clear()
      console.log(`\n
 _________________________________\n
|   ### Welcome to the atm! ###   |\n
|Please enter your pin to continue|\n
|_________________________________|\n
|  That is not the correct pin!!  |\n
|                                 |\n
|  You only have ${attempts} attempts left  |\n
|                                 |\n
|_________________________________|\n
`)
      // console.log(`that is not the correct pin,\n \nyou have ${attempts} attempts left 
      // \nYOU WILL BE LOCKED OUT AFTER 3 ATTEMPTS! \n`)

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








// console.log(`\n
// _________________________________\n
// |      ### Welcome user ###       |\n
// |        Account Balance          |\n
// |_________________________________|\n
// |    Your account balance is:     |\n
// |                ${accountBalance}                 |\n
// |  Enter 1 for the Main Menu      |\n
// |  Enter 2 to exit                |\n
// |_________________________________|\n
// `)



// console.log(`\n
//  _________________________________\n
// |   ### Welcome to the atm! ###   |\n
// |Please enter your pin to continue|\n
// |_________________________________|\n
// |  That is not the correct pin!!  |\n
// |      You have 3 attempts        |\n
// |                                 |\n
// |You have ${attempts} left                   |\n
// |_________________________________|\n
// `)