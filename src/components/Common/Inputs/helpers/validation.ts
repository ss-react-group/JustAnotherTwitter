function regExpTest(pattern: RegExp, value: string, error: string) {
  const regExp = new RegExp(pattern);

  return regExp.test(value) ? '' : error;
}

export function validateInput(validateFor: string, value: string) {
  const strongPasswordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  const emailPattern = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/;

  const errors = {
    email: 'Incorrect email adress',
    password: 'Password need to contain a-z|A-Z|0-9|%^&#'
  };

  switch (validateFor) {
    case 'email':
      return regExpTest(emailPattern, value, errors.email);
    case 'password':
      return regExpTest(strongPasswordPattern, value, errors.password);
    default:
      return '';
  }
}
