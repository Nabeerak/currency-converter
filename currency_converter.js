"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const usd_currency = 0.0036;
const south_korean_won = 4.75;
const omani_rial = 0.0014;
const pound_sterling = 0.0028;
const pkr = parseInt(prompt("Enter ur pkr amount here in digits:"));
console.log("options for Pakistani conversion into: \n 1.United States dollar\n 2.South Korean won \n 3.Omani rial \n 4.Pound sterling");
const option = prompt("Enter your choice:");
if (option === 1) {
    let pkr_to_usd = pkr * usd_currency;
    console.log(`United States dollar: ${pkr_to_usd}`);
}
else if (option === 2) {
    let pkr_to_won = pkr * south_korean_won;
    console.log(`South Korean won${pkr_to_won}`);
}
else if (option === 3) {
    let pkr_to_rial = pkr * omani_rial;
    console.log(`Omani rial:${pkr_to_rial}`);
}
else if (option === 4) {
    let pkr_to_pound = pkr * pound_sterling;
    console.log(`Pound sterling: ${pkr_to_pound}`);
}
else {
    console.log("Invalid entry");
}
;
