#!/usr/bin/env node
////Step n0 1//
import inquirer from "inquirer";
let balance = 10000; //Dollars
let myPin = 160397;
let pinAnswer = await inquirer.prompt([{
        name: "pin", message: "Enter your Pin", type: "number",
    }]);
if (pinAnswer.pin === myPin) {
    console.log("Correct Pin Code!!!");
}
else {
    console.log("Your Pin Code is Incorrect");
}
console.log("Your current balance is Now");
let Operation = await inquirer.prompt([{
        name: "operations", message: "Please select one operation", "type": "lists",
        choices: ["Withraw", "Check Balance", "Fastcash"],
    }]);
//step no 2//
if (Operation.operations === "Withraw") {
    let amountAns = await inquirer.prompt([{
            name: "amount", message: "Enter your amount you want to withraw", type: "number"
        }]);
    if (amountAns.amount < balance) {
        (balance -= amountAns.amount);
        console.log("Now your  balance is: " + balance);
    }
    else
        console.log("Insufficient Balance");
}
//step n0 3//
if (Operation.operations === "Check Balance") {
    console.log("Your current balance is: " + balance);
}
//step no 4/
//         (Operation.operations === "Fastcash") ;
let fast = await inquirer.prompt([{
        name: "fast",
        message: "How much money you want to withraw", "type": "lists",
        choices: ["1000", "2000", "5000", "8000", "10000"],
    }]);
if (fast.fast_Operations === "1000")
    balance -= fast.fast_Operation;
console.log(`Your remaining balance is${balance}`);
if (fast.fast_Operations === "2000")
    balance -= fast.fast_Operation;
console.log(`Your remaining balance is${balance}`);
if (fast.fast_Operations === "5000")
    balance -= fast.fast_Operation;
console.log(`Your remaining balance is${balance}`);
if (fast.fast_Operations === "8000")
    balance -= fast.fast_Operation;
console.log(`Your remaining balance is${balance}`);
if (fast.fast_Operations === "10000")
    balance -= fast.fast_Operation;
console.log(`Your remaining balance is${balance}`);
