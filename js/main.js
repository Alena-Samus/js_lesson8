'use strict';  //We will write strict javascript, helps the engine to be faster.

const firstName = document.querySelector("#firstnm");
const lastName = document.querySelector("#lastnm");
const phoneNumber = document.querySelector("#phoneNumber");
const password = document.querySelector("#password");
const postalCode = document.querySelector("#postalCode");
const email = document.querySelector("#email");
/*const submitbutton = document.querySelector("#submitbutton");*/

function checkForm(form) {

  let errors = [];
//check first name
  if (firstName.value == '') {
    errors.push("Error: Enter first name \n");
    alert('Пожалуйста, заполните поле "Имя"')
    return false;
  }

//check last name
  if (lastName.value == '') {
    errors.push("Error: Enter last name \n");
    alert('Пожалуйста, заполните поле "Фамилия"')
    return false;
  }

//check e-mail
  if (email.value == '') {
    errors.push("Error: Enter email \n");
    window.alert('Пожалуйста, заполните поле "E-mail"');
    return false;
  }
    else {
      let email_input = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

      if (!email_input.test(email.value)) {
      errors.push("Error: Email should have '@' sign \n");
        alert('Поле "E-mail" должно быть указано в формате "example@gmail.com"')
      return false;
    }
  }
  
//check phone number
  if (phoneNumber.value == '') {
    errors.push("Error: Enter phone number \n");
    window.alert('Пожалуйста, заполните поле "Номер телефона"');
    return false;
  }
  else{
    let tel_input = /^\+(?:[0-9] ?){6,14}[0-9]$/;
    if (!tel_input.test(phoneNumber.value)) {
      errors.push("Error: Phone number should contain country code eg.+358 1234556 \n");
      alert('Поле "Номер телефона" должно быть указано в формате "+375291234567"')
      return false;
    }
  }

//check postal code
  let postalCode_input = /^[0-9]{6}?$/;
  if (postalCode.value != '' && !postalCode_input.test(postalCode.value)) {
    errors.push("Error: Postcode should be 6 digit numbers \n");
    alert('Почтовый индекс должен быть содержать 6 цифр и иметь формат "123456"')
    return false;
  }

//check password
  if (password.value == '') {
    errors.push("Error: Enter password \n");
    alert('Пожалуйста, введите пароль')
    return false;
  }
  else{
    let passwordReg = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!password.value.match(passwordReg)) {
      errors.push("Error: Uncorrect password \n");
      alert('Пароль должен содержать по крайней мере одно число, одну заглавную и строчную латинские буквы, а также не менее 8 символов')
      return false;
    }
  }

  if (errors.length > 0) {
    let msg = "ERRORS:\n";
    for (let i = 0; i < errors.length; i++) {
      msg += errors[i];
      return false;
    }

    alert(msg);
  }

  return true;
}
