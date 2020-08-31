import * as Yup from "yup";
import valid from "card-validator";
import moment from "moment";

export const validationSchemaBasic = Yup.object().shape({
  username: Yup.string()
    .label('username')
    .required('Please enter desired username.'),
  firstName: Yup.string()
    .label("firstName")
    .required("Please enter your first name."),
  lastName: Yup.string()
    .label("lastName")
    .required("Please enter your last name."),
  email: Yup.string()
    .label("email")
    .email("Enter a valid email.")
    .required("Please enter your email."),
  terms: Yup.boolean()
    .label("terms")
    .oneOf([true], "Must Accept Terms and Conditions")
    .required("Please click agree on terms before you can proceed"),
  password: Yup.string()
    .label('password')
    .matches(/[a-z]/, 'at least one lowercase char')
    .matches(/[A-Z]/, 'at least one uppercase char')
    .matches(/[a-zA-Z]+[^a-zA-Z\s]+/, 'at least 1 number or special char (@,!,#, etc).')
    .min(8, 'Must be at least 8 characters.')
    .required('Please enter your desired password.'),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), '', null], 'Passwords must match.')
    .required('Please confirm your password.'),
});

export const validationSchemaApp = Yup.object().shape({
  app: Yup.string().label("app").required("Please enter desired app name."),
  description: Yup.string()
    .label("description")
    .required("Please enter app description."),
  terms: Yup.boolean()
    .label("terms")
    .oneOf([true], "Must Accept Terms and Conditions")
    .required("Please click agree on terms before you can proceed"),
});

export const validationSchemaCreditCard = Yup.object().shape({
  cardNumber: Yup.string()
    .label("Card number")
    .max(16)
    .test(
      "test-number",
      "Credit Card number is invalid",
      (value) => valid.number(value).isValid
    )
    .required(),
  cardName: Yup.string().label("Name on card").required(),
  cvc: Yup.string().label("CVC").min(3).max(4).required(),
  expiryMonth: Yup.string().label("Expiry month").min(2).max(2).required(),
  expiryYear: Yup.string().label("Expiry year").min(4).max(4).required(),
});

export const creditCardExpirationYear = () => {
  const years = [];
  const dateStart = moment();
  const dateEnd = moment().add(10, "y");
  while (dateEnd.diff(dateStart, "years") >= 0) {
    const year = dateStart.format("YYYY");
    years.push({ value: year, label: year });
    dateStart.add(1, "year");
  }
  return years;
};

export const creditCardExpirationMonth = () => {
  const months = [];
  const dateStart = moment();
  const dateEnd = moment().add(11, "month");
  while (dateEnd.diff(dateStart, "months") >= 0) {
    const monthNumber = dateStart.format("MM");
    const monthName = dateStart.format("MMMM");
    months.push({ value: monthNumber, label: monthName });
    dateStart.add(1, "month");
  }
  return months;
};
