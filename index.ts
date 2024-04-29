import inquirer from "inquirer";

let myBalance= 5000;
let myPin = 4510;


console.log("Welcome to Syed - ATM Machine");

let pinCode = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin code:"
    }
])
if( pinCode.pin === myPin){
    console.log("Your pin is correct Please wait your next process");
    //console.log(`Current Account Balance is ${myBalance}`)

    let operatorAns = await inquirer.prompt([
        {
            name: "operator",
            type: "list",
            message: "Select an operator",
            choices: ["Withdraw Amount", "Check Balance"]
        }
    ])

    if( operatorAns.operator === "Withdraw Amount") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount.."
            }
        ])
        if ( amountAns.amount > myBalance){
            console.log ("Ooops Sorry..! Insufivient Balance");
        }
        else{
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} Withdraw Succesfully`);
            console.log(`Your Remaining Balance Is: ${myBalance}`);
        }
    }
    else if (operatorAns.amount === "Check Balance"){
        console.log(`Your Amount Balance is ${myBalance}`);
    }
    
}

else{
    console.log("Your pin is incorrect try again")
}