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
  } 

}

// ! withdraw

function withdraw(accountBalance, walletAmount) {
  let transactionComplete = false

  // console.log(`\nYour account balance is $${accountBalance}\nHow much would you like to withdraw?`)

  console.log(`\n
   _________________________________\n
  |     ### Withdraw funds! ###     |\n
  |     $$$                 $$$     |\n
  |_________________________________|\n
  |  Your account balance is $${accountBalance}  |\n
  |                                 |\n
  | How much would you like         |\n
  |                    to withdraw? |\n
  |_________________________________|\n
  `)


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


      // console.log(`\ntaking ${withdrawAmount} from your account. 
      // \nyour new balance is: ${accountBalance}\n`)
      // console.log(`you now have $${walletAmount} in your wallet`)


      console.clear()
      console.log(`\n
   _________________________________\n
  |     ### Withdraw funds! ###     |\n
  |                                 |\n
  |_________________________________|\n
  |Taking ${withdrawAmount} from your account.    |\n
  |  your new balance is: ${accountBalance}       |\n
  |                                 |\n
  |you now have $${walletAmount} in your wallet |\n
  |_________________________________|\n
  `)




      isComplete()
    } else if (withdrawAmount > accountBalance) {
      console.log('insufficient funds')
      withdraw(balance, wallet)
    } 

  }

  // !
  if (transactionComplete === true) {

    console.clear()
    console.log(`\n
   _________________________________\n
  |  ### Transaction complete ###   |\n
  |                                 |\n
  |_________________________________|\n
  |           Thank you             |\n
  |                                 |\n
  |  Enter 1 for the Main Menu      |\n
  |  Enter 2 to exit                |\n
  |_________________________________|\n
  `)
    let returnPrompt = prompt()
    let returnChoice = parseInt(returnPrompt)

    if (returnChoice === 1) {
      return 1
    } else
    return 2
  }
}

// ! deposit()
function deposit(accountBalance, walletAmount) {
  let transactionComplete = false

  // console.log(`\nYour account balance is $${accountBalance}\nHow much would you like to deposit?`)


  console.log(`\n
   _________________________________\n
  |     ### Deposit  funds! ###     |\n
  |                                 |\n
  |_________________________________|\n
  |  Your wallet balance is $${wallet}    |\n
  |                                 |\n
  | How much would you like         |\n
  |                    to deposit?? |\n
  |_________________________________|\n
  `)

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
    if (depositAmount <= walletAmount) {
      accountBalance += depositAmount
      walletAmount -= depositAmount



    console.clear()
    console.log(`\n
   _________________________________\n
  |     ### Deposit  funds! ###     |\n
  |                                 |\n
  |_________________________________|\n
  |Taking ${depositAmount} from your account.    |\n
  |  your new balance is: ${accountBalance}       |\n
  |                                 |\n
  |you now have $${walletAmount} in your wallet |\n
  |_________________________________|\n
  `)


      isComplete()
    } else if (depositAmount > walletAmount) {
      console.log('you dont have enough money to do that')

      deposit(balance, wallet)
    }
  }

  
  // !
  if (transactionComplete === true) {

    // console.log('1 main menu, 2 quit')
    console.clear()
    console.log(`\n
   _________________________________\n
  |  ### Transaction complete ###   |\n
  |                                 |\n
  |_________________________________|\n
  |           Thank you             |\n
  |                                 |\n
  |  Enter 1 for the Main Menu      |\n
  |  Enter 2 to exit                |\n
  |_________________________________|\n
  `)


    let returnPrompt = prompt()
    let returnChoice = parseInt(returnPrompt)

    if (returnChoice === 1) {
      return 1
    } else
    return 2
  }
  
}

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
      console.clear()
      // console.log('you have been logged out, come back later')
      console.log(`\n
   _________________________________\n
  |       ### Invalid Pin ###       |\n
  |                                 |\n
  |_________________________________|\n
  |                                 |\n
  |    You have been logged out     |\n
  |         Try again later         |\n
  |                                 |\n
  |_________________________________|\n
  `)

    }
  }
  return pinValidated
}

module.exports = {
  getBalance: getBalance,
  withdraw: withdraw,
  deposit: deposit,
  validatePin: validatePin
}



