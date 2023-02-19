export const Validate = (values) => {
  const errors = {};

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  var inValid = /\s/;
  if (inValid.test(values.name)) {
    errors.name = "*username name wouldn't have whiteSpace";
  } else if (inValid.test(values.email)) {
    errors.email = "*email wouldn't have whiteSpace";
  } else if (inValid.test(values.password)) {
    errors.password = "*password wouldn't have whiteSpace";
  }

  if (!values.name) {
    errors.name = "*Username is required!";
  }

  if (!values.email) {
    errors.email = "*Email is required!";
  } else if (!regex.test(values.email)) {
    errors.email = "*This is not a valid email format!";
  }
  if (!values.password) {
    errors.password = "*Password is required";
  } else if (values.password.length < 8) {
    errors.password = "*Password must be more than 8 characters";
  } else if (values.password.length > 10) {
    errors.password = "*Password cannot exceed more than 10 characters";
  }

  return errors;
};
