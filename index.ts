#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance = 10000;
let pinCode = 160397;
async function ATM() {
 {console.log( "Welcome to Code with Mehwishnaz");}




 
  
let myAns = await inquirer.prompt([
  {
    name: "userPin",
    type: "password",
    message: "Enter your pin",
  },
]);

if (pinCode === myAns.userPin) console.log("Your pin is correct!");
let options = await inquirer.prompt([
  {
    name: "menu",
    type: "list",
    message: "Please select an option",
    choices: ["Withdraw", "FastCash", "Balance Inquiry", "Other Transaction"],
  },
]);
if (options.menu === "Withdraw") {
  
  let amount = await inquirer.prompt([
    {
      name: "amount",
      type: "number",
      message: "Please enter amount:",
    },
  ]);
  if (amount.amount< myBalance){
    (myBalance -=amount.amount)
    console.log(`Your Available Balance is ${myBalance}`);
  } else {
    console.log(`Insufficient Balance`);
  }
} else if (options.menu === "FastCash") {
  let fastCash = await inquirer.prompt([
    {
      name: "fastCash",
      type: "list",
      message: "Select Cash",
      choices: ["500", "1000", "2000", "5000"],
    },
  ]);
  myBalance = myBalance - fastCash.fastCash;
  console.log(`Your remaining balance is ${myBalance}`);
} else if (options.menu === "Balance Inquiry") {
  console.log(`Your available balance is: ${myBalance}`);
} else if (options.menu === "Other Transaction") {
  
  let trans = await inquirer.prompt([
     { 
      name: "otherTrans",
      type: "list",
      message: "Would You like to other Transaction",
      choices: ["Yes" , "No"],
    },
  ]);
  if (trans.otherTrans === "Yes") {
    ATM()
  }
} 

 else  {
    console.log("Your pin is invalid!")
 } 

};

ATM();