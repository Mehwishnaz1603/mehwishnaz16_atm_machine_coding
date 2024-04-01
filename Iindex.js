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
    {
        console.log("Your current balance is Now");
    }
    let options = await inquirer.prompt([
        {
            name: "option", message: "Please select one operation", "type": "lists",
            choices: ["Withraw", "Check Balance", "Fastcash", "Other Transaction"],
        }
    ]);
    if (options.option === "Withraw") {
        let amount = await inquirer.prompt([{
                name: "amount", message: "Enter your amount you want to withraw", type: "number"
            }]);
        balance = balance - amount.amount;
        if (balance >= amount.amount) {
            console.log(`Now your  balance is: ${balance}`);
        }
        else {
            console.log("Insufficient Balance");
        }
        (options.operations === "Fastcash");
        let fast = await inquirer.prompt([{
                name: "fast",
                message: "How much money you want to withraw", "type": "lists",
                choices: ["1000", "2000", "5000", "8000", "10000"],
            }]);
        (balance = balance - fast.fastCash);
        console.log(`Your remaning balance is ${balance}`);
    }
    if (options.operations === "Check Balance") {
        console.log(`Your current balance is: $ {balance}`);
        if (options.operations === "Other Transaction") {
            let transaction = await inquirer.prompt([
                {
                    name: "othertransaction", type: "list", message: "Would you like to other transaCtion",
                    choices: ["Yes", "No"]
                }
            ]);
        }
    }
}
