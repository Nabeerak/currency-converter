import PromptSync from 'prompt-sync';

const prompt = PromptSync();       

const usd_currency : number = 0.0036;
const south_korean_won : number = 4.75;
const omani_rial : number = 0.0014;
const pound_sterling : number = 0.0028;

const pkr : number = parseInt(prompt("Enter ur pkr amount here in digits:"));

console.log("options for Pakistani conversion into: \n 1.United States dollar\n 2.South Korean won \n 3.Omani rial \n 4.Pound sterling");

const option: number = prompt("Enter your choice:");
if (option === 1) {
    let pkr_to_usd = pkr * usd_currency
    console.log(`United States dollar: ${pkr_to_usd}`);
} else if(option === 2){
    let pkr_to_won = pkr * south_korean_won
   console.log(`South Korean won${pkr_to_won}`);
}else if (option === 3){
    let pkr_to_rial = pkr * omani_rial
    console.log(`Omani rial:${pkr_to_rial}`);
} else if(option === 4){
    let pkr_to_pound = pkr * pound_sterling
   console.log(`Pound sterling: ${pkr_to_pound}`);
} else {
    console.log("Invalid entry");
};


