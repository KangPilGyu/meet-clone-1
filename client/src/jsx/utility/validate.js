export default function validate(values) {
  const errors = {};
  const emailRegExp = /^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/;
  const passwordRegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;

  // name validation check
  if (!values.name.trim()) {
    errors.name = 'Username is required';
  }

  //email validation check
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!emailRegExp.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  //pasword validation check
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (!passwordRegExp.test(values.password)) {
    errors.password =
      'At least eight characters, one character, one number, one special character are required.';
  }
  // password2 validation check
  if (!values.password2) {
    errors.password2 = 'Password is required';
  } else if (values.password2 !== values.password) {
    errors.password2 = 'Password do not matche';
  }
  return errors;
}
