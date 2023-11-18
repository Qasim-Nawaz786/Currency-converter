import inquirer from "inquirer";

let converation = {
    "PKR": {
        "USD": 0.0035,
        "GBP": 0.0028,
        "PKR": 1
    },
    "GBP": {
        "USD" : 1.24,
        "PKR" : 353.12,
        "GBP" : 1,
    },
    "USD" : {
        "PKR" : 285.08,
        "GBP" : 0.81,
        "USD" : 1,
    }
}

const answer : {from: "PKR" | "GBP" | "USD", to: "PKR" | "GBP" | "USD", amount: number} = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "GBP", "USD"],
        message: "Select your currency: ",
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "GBP", "USD"],
        message: "Select your converation currency: ",
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your converation amount: ",
    },
])

let {from, to, amount} = answer;

if(from && to && amount) {
   let result = converation[from][to] * amount
   console.log(`Your converation from ${from} to ${to} is ${result} and the amount you enterned is ${amount}`);
   
}else {
    console.log("Invalid input");
    

}




