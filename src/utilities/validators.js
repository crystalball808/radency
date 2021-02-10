import dayjs from 'dayjs';

export const validateLicense = (license) => {
  const re = /\w{6}/;
  return re.test(license);
};

export const validateDate = (dateString) => {
  if (dateString.indexOf('-') > 0 || dateString.indexOf('/') > 0) {
    const dateFormatted = dayjs(dateString, ['YYYY-MM-DD', 'MM/DD/YYYY'], true);
    console.log(dateFormatted);
    return dateFormatted > dayjs() && dateFormatted.isValid();
  } else {
    return false;
  }
};

export const validateFullName = (fullName) => {
  const re = /.{2,} .{2,}/;
  return re.test(String(fullName).toLowerCase().trim());
};

export const validatePhone = (phoneNumber) => {
  const re = /\+?1\d{10}/;
  return re.test(String(phoneNumber).toLowerCase().trim());
};

export const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase().trim());
};

export const validateAge = (age) => {
  return Number(age) >= 21;
};

export const validateExperience = (age, experience) => {
  return (
    Number(age) >= 21 &&
    Number(experience) > 0 &&
    Number(experience) <= Number(age) - 21
  );
};

export const validateIncome = (income) => {
  return parseFloat(String(income)?.replace(',', '.')).toFixed(2) !== 'NaN';
};

export const validateHasChildren = (hasChildren) => {
  const hasChildrenBool = hasChildren === null ? false : hasChildren;
  return typeof hasChildrenBool === 'boolean';
};

export const validateStates = (states) => {
  const separator = / ?\, ?| ?\| ?/;
  const stateRegex = /[A-Z]{2}|[A-Za-z ]{4,14}/;
  const statesArr = String(states).split(separator);
  return statesArr.reduce((acc, state) => {
    return stateRegex.test(state);
  }, false);
};
