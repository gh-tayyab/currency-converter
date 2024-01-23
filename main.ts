import inquirer from "inquirer";
let currencies = { "Pkr" : {
  "Usd": 0.0023,
  "Inr": 2.5,
  "Pkr": 230
},
"Inr": {
  "Usd":0.25,
  "Pkr":2.5,
  "Inr": 1
},
"Usd": {
  "Pkr":230,
  "Inr":125,
  "Usd":1
}
}
let answer:{
  from : "Pkr" | "Inr" | "Usd"
  to: "Pkr" | "Inr" | "Usd"
  amount: number
} = await inquirer.prompt([
  {
    type: "list",
    name: "from",
    message: "convert currency from ",
    choices: ["Pkr", "Usd", "Inr"]
  },
  {
    type: "list",
    name: "to",
    message: "convert currency to ",
    choices: ["Pkr", "Usd", "Inr"]
  },
  {
    type: "number",
    name: "amount",
    message: "enter amount"
  }
])
let {from , to , amount} = answer;
if(from && to && amount){
  let result = currencies[from][to]*amount
  console.log(`Your convert currency is ${from} to ${to} = ${result} `)
}