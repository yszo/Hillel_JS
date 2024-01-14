let userInput = 10;
let measureUnit = "г";

switch (measureUnit) {
    case "кг": 
    console.info(userInput + " " + measureUnit + " = " + userInput*1000 + " гр");
    break;
    case "км": 
    console.info(userInput + " " + measureUnit + " = " + userInput*1000 + " м");
    break;
    case "г":
    console.info(userInput + " " + measureUnit + " = " + userInput*60 + " хв");
    break;
    default:
    console.error("Невідома одиниця виміру");
    break;
}