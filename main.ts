#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blueBright.italic("\n \t Welcome to: 'Asifa M.Qasim' - Currency Convertor \n"))

const Currency: any ={
    USD: 1, // Base currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 278,
    SAR : 3.75

};

let userAns = await inquirer.prompt
(
    [
        {
            name : "from",
            type: "list",
           message: "Enter from Currency",
           choices: ["USD", "EUR", "GBP", "INR", "PKR", "SAR"]
        },

       { name : "to",
        type: "list",
        message: "Enter to Currency",
        choices: ["USD", "EUR", "GBP", "INR", "PKR", "SAR"]
    
      },
      {
        name : "amount",
        type: "number",
        message: "Enter your amount"
      }
    ]
);
//  perform converted by using formula

let fromAmount = Currency[userAns.from]
let toAmount = Currency[userAns.to]
let amount = userAns.amount

// formula 
let  baseAmount = amount / fromAmount
let convertedAmount = baseAmount * toAmount
console.log (`Converted Amount = ${chalk.green(convertedAmount.toFixed(2))}`);



