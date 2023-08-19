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

function checkCorrectPwdFormat(pwdInput) {
  const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return pattern.test(pwdInput.value);
}

// function checkValidPwd(pwdInput) {
// }

function handleForm() {
  const formContainer = document.querySelector('.form-container');
  const emailInput = formContainer.querySelector('#mail');
  const countryInput = formContainer.querySelector('#country');
  const ZIPInput = formContainer.querySelector('#ZIP');
  const pwdInput = formContainer.querySelector('#pwd');
  const confirmPwdInput = formContainer.querySelector('#confirm-pwd');

  checkValidEmailInput(emailInput);
  checkValidCountryInput(countryInput);
  checkValidZIPCode(ZIPInput);

  pwdInput.addEventListener('input', () => {
    console.log(checkCorrectPwdFormat(pwdInput));
  });
}

export default handleForm;
