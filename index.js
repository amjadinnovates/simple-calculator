#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter your first number", type: "number", name: "firstNumber" },
    { message: "Enter your second number", type: "number", name: "secondNumber" },
    {
        message: "Select operator",
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division"],
    },
]);
//console.log(answer);
if (answer.operator === "addition") {
    console.log("your value is " + (answer.firstNumber + answer.secondNumber));
}
else if (answer.operator === "subtraction") {
    console.log("your value is " + (answer.firstNumber - answer.secondNumber));
}
else if (answer.operator === "multiplication") {
    console.log("your value is " + answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "division") {
    console.log("your value is " + answer.firstNumber / answer.secondNumber);
}
