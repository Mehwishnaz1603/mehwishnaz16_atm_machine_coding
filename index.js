#!/usr/bin/env node
////Step n0 1//
import inquirer from "inquirer";
let balance = 10000; //Dollars
let myPin = 160397;
let pinAnswer = await inquirer.prompt([{
        name: "pin", message: "Enter your Pin Code ", type: "number"
    }]);
if (pinAnswer.pin === myPin) {
    console.log("Correct Pin Code!!! You Log in Successfully!");
    let OperationAns = await inquirer.prompt([
        {
            name: "operation", message: "Please select one operation", type: "list",
            choices: ["Withraw Amount", "Check Balance"],
        }
    ]);
    //step no 2//
    if (OperationAns.operation === "Withraw Amount") {
        let withrawAns = await inquirer.prompt([
            {
                name: "withrawMethod", message: "Select a Withraw Method", type: "number", choices: ["Fast Cash", "Enter Amount"]
            }
        ]);
        if (withrawAns.withrawMethod === "Fast Cash") {
            let fastCashAns = await inquirer.prompt([
                {
                    name: "fastCash", type: "list", message: "Select Amount", choices: [1000, 2000, 5000, 10000]
                }
            ]);
            if (fastCashAns.fastCash > balance) {
                console.log("Insufficent Balance");
            }
            else {
                balance -= fastCashAns.fastCash;
                console.log(`${fastCashAns.fastCash} withraw successfully`);
                console.log("Now your remaining balance is: " + balance);
            }
        }
        else if (withrawAns.withrawMethod === "Enter Amount") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount", type: "number", message: "Enter amount You want"
                }
            ]);
            if (amountAns.amount > balance) {
                console.log("Insufficient Balance");
            }
            else {
                balance -= amountAns.amount;
                console.log(`${amountAns.amount} withraw successfully`);
                console.log("Now your remaining balance is:  " + balance);
            }
        }
    }
    //step n0 3//
    else {
        console.log("Pin Code is Incorrect Try Again");
    }
}
