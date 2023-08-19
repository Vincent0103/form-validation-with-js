import highFiveIcon from './assets/hand-back-left.svg';

function areValueMissing(inputsContainer) {
  let valuesMissing = false;
  inputsContainer.forEach((input) => {
    if (input.value.length <= 0) {
      input.setCustomValidity('This field is required!');
      valuesMissing = true;
    }
  });
  return valuesMissing;
}

function checkValueMissingOnInput(inputsContainer) {
  inputsContainer.forEach((input) => {
    input.addEventListener('input', () => {
      areValueMissing(inputsContainer);
    });
  });
}

function checkValueMissingOnSubmit(inputsContainer, submitBtn) {
  submitBtn.addEventListener('click', () => {
    areValueMissing(inputsContainer);
  });
}

function checkValidEmailInput(emailInput) {
  emailInput.addEventListener('input', () => {
    let isValid = false;
    if (emailInput.validity.typeMismatch) {
      emailInput.setCustomValidity(
        'Incorrect email format! Please make sure your email has a "@" and a "." in it (eg: "john12@gmail.com").',
      );
    } else {
      emailInput.setCustomValidity('');
      isValid = true;
    }

    return isValid;
  });
}

function checkValidCountryInput(countryInput) {
  countryInput.addEventListener('input', () => {
    const isValid = countryInput.checkValidity();

    if (!isValid) {
      return countryInput.setCustomValidity(
        'Invalid country selection! Choose a valid country from the options (eg: "United States").',
      );
    }

    return isValid;
  });
}

function checkValidZIPCode(ZIPInput) {
  ZIPInput.addEventListener('input', () => {
    let isValid = false;

    if (ZIPInput.validity.patternMismatch) {
      ZIPInput.setCustomValidity(
        'Invalid ZIP code! Choose a valid ZIP code from the country\'s ZIP code format (eg: France: 75010)',
      );
    } else {
      ZIPInput.setCustomValidity('');
      isValid = true;
    }

    return isValid;
  });
}

function isValidPwdFormat(pwdInput) {
  const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return pattern.test(pwdInput.value);
}

function checkValidPwd(pwdInput) {
  pwdInput.addEventListener('input', () => {
    let isValid = false;

    if (!isValidPwdFormat(pwdInput)) {
      pwdInput.setCustomValidity(
        'Invalid password format! Make sure your password is atleast 8 characters long, has atleast one uppercase letter, one lowercase letter and one number (eg: h!!oWr2983?@$).',
      );
    } else {
      pwdInput.setCustomValidity('');
      isValid = true;
    }

    return isValid;
  });
}

function checkPwdsMatch(pwdInput, confirmPwdInput) {
  confirmPwdInput.addEventListener('input', () => {
    let areMatching = false;

    if (pwdInput.value !== confirmPwdInput.value) {
      confirmPwdInput.setCustomValidity('Passwords don\'t match!');
    } else {
      confirmPwdInput.setCustomValidity('');
      areMatching = true;
    }

    return areMatching;
  });
}

function addFormValidation() {
  const formContainer = document.querySelector('.form-container');
  const inputsContainer = formContainer.querySelectorAll('.input-container > input');
  const emailInput = formContainer.querySelector('#mail');
  const countryInput = formContainer.querySelector('#country');
  const ZIPInput = formContainer.querySelector('#ZIP');
  const pwdInput = formContainer.querySelector('#pwd');
  const confirmPwdInput = formContainer.querySelector('#confirm-pwd');
  const submitBtn = formContainer.querySelector('button[type="submit"]');

  checkValidEmailInput(emailInput);
  checkValidCountryInput(countryInput);
  checkValidZIPCode(ZIPInput);
  checkValidPwd(pwdInput);
  checkPwdsMatch(pwdInput, confirmPwdInput);
  checkValueMissingOnSubmit(inputsContainer, submitBtn);
  checkValueMissingOnInput(inputsContainer);
}

function willFormValidate(inputsContainer) {
  let willValidate = true;
  inputsContainer.forEach((input) => {
    if (!input.validity.valid) {
      willValidate = false;
    }
  });

  return willValidate;
}

function handleForm() {
  addFormValidation();
  const formContainer = document.querySelector('.form-container');
  const inputsContainer = formContainer.querySelectorAll('.input-container > input');
  const submitBtn = formContainer.querySelector('button[type="submit"]');
  const formContainerContents = document.querySelectorAll('.form-container > *');

  submitBtn.addEventListener('click', () => {
    if (willFormValidate(inputsContainer)) {
      formContainer.innerHTML = '';

      setTimeout(() => {
        formContainer.classList.add('high-five-display');

        const highFiveContainer = document.createElement('div');
        highFiveContainer.classList.add('high-five-container');
        formContainer.appendChild(highFiveContainer);

        const myHighFiveIcon = new Image();
        myHighFiveIcon.src = highFiveIcon;

        const h1 = document.createElement('h1');
        h1.textContent = 'High Five!';

        highFiveContainer.append(myHighFiveIcon, h1);
      }, 200);
    }
  });
}

export default handleForm;
