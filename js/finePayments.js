"use strict";
/**
Перед вами список полів. Це можна сказати пряме посилання на кожне із полів форми.
Якщо ви додасте до змінної .value (fineNumber.value) то отримаєте значення
яке зберігається в цьому полі.
 */
let fineNumber = document.getElementById("fineNumber");
let passport = document.getElementById("passport");
let creditCardNumber = document.getElementById("creditCardNumber");
let cvv = document.getElementById("cvv");
let amount = document.getElementById("amount");
let buttonSubmit = document.getElementById("payFine");

//Ця зміна містить всі дані які в нас зберігаються у файлі data
let DB = data.finesData;

function validateFine(fineNumber) {
  let result = DB.filter((value) => {
    return value.номер == fineNumber;
  });
  if (result.length == 0) {
    return false;
  } else {
    return true;
  }
}

function validatePassport(passport) {
  return passport.match(
    /(?=^.{8,9}$)^(([А-ЩЬЮЯҐЄІЇа-щьюяґєії] ?){2}( ?[0-9]){6})$/
  );
}

function validateCard(creditCardNumber) {
  let number = creditCardNumber.replace(/[^\[0-9]/gi, "");
  return number.match(
    /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/
  );
}

function validateAmount(amount, value) {
  let DB_element = fineList.searchFines(value);
  if (amount == DB_element[0].сума) {
    return true;
  } else {
    return false;
  }
}

function validateCvv(cvv) {
  return cvv.match(/^[0-9]{3,4}$/);
}

function borderColor(value, color) {
  return (value.style.borderColor = color);
}



/**
Вам необхідно реалізувати наступний функціонал.
Зробити валідацію до всіх полів
1. Номер та сума повинні бути однакові як в існуючого штрафу - якщо ні видавати
alert "Номер не співпадає" або "Сума не співпадає"

2. Паспортні дані у форматі - перші дві літери укр алфавіту, та 6 цифр.
Якщо не співпадає то видавати alert "Не вірний паспортний номер"

3. Номер кредитної карки 16 цифр -
якщо не співпадає то видавати alert "Не вірна кредитна картка"

4. cvv 3 цифри - якщо не співпадає то видавати alert "Не вірний cvv".

Якщо валідація проходить успішно, то виконати оплату,
 тобто вам потрібно видалити обєкт з DB
 */
buttonSubmit.addEventListener("click", payFine);
function payFine() {
  if (validateFine(fineNumber.value)) {
    borderColor(fineNumber, "green");
  } else {
    borderColor(fineNumber, "red");
    return alert("Невірний номер штрафу");
  }

  if (validatePassport(passport.value)) {
    borderColor(passport, "green");
  } else {
    borderColor(passport, "red");
    return alert("Не вірний паспортний номер");
  }
  if (validateCard(creditCardNumber.value)) {
    borderColor(creditCardNumber, "green");
  } else {
    borderColor(creditCardNumber, "red");
    return alert(
      "Не вірна кредитна картка! Приймаються картки: Visa, MasterCard, American Express, Diners Club, Discover та JCB"
    );
  }

  if (validateCvv(cvv.value)) {
    borderColor(cvv, "green");
  } else {
    borderColor(cvv, "red");
    alert("Не вірний cvv");
  }

  if (validateAmount(amount.value, fineNumber.value)) {
    borderColor(fineNumber, "green");
    borderColor(amount, "green");
  } else {
    borderColor(fineNumber, "red");
    borderColor(amount, "red");
    return alert("Сума не співпадає");
  }

  data.finesData = DB.filter((value) => {
    return fineNumber.value != value.номер;
  });
let elements = document.getElementsByTagName("input");
for (var i = 0; i < elements.length; i++) {
  if (elements[i].type == "text") {
    elements[i].value = "";
  }
}
alert("Штраф оплачено"); 

}
