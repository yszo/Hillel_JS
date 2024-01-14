
let userInput = +prompt("Скільки вам років?");
let ageCorrector = userInput % 10;

if (isNaN(userInput) || userInput < 0) {
  console.error("Введено невірні дані Оновіть сторінку та спробуйте ще раз");
} else if ( 1 < ageCorrector && ageCorrector < 5) {
    console.info("Вам " + userInput + " роки")
} else if (ageCorrector == 1 && userInput != 11) {
    console.info("Вам " + userInput + " рік")
} else  {
    console.info("Вам " + userInput + " років")
}

// if (userInput == 0 || userInput == 11 || ageCorrector == 0) {
//     console.info("Вам " + userInput + " років")
// } else if (4 < userInput && userInput < 21) {
//     console.info("Вам " + userInput + " років")
// } else if ( 1 < ageCorrector && ageCorrector < 5) {
//     console.info("Вам " + userInput + " роки")
// } else if (ageCorrector == 1 && userInput != 11) {
//     console.info("Вам " + userInput + " рік")
// } else if (5 <= ageCorrector && ageCorrector <= 9) {
//     console.info("Вам " + userInput + " років")
// }


