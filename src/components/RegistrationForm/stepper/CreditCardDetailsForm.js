import React from "react";
import { Formik, Form } from "formik";

import { Wrapper, Row, ErrorContainer } from "../RegistrationForm.style";
import RegistrationField from "../RegistrationField";

import {
  creditCardExpirationMonth,
  creditCardExpirationYear
} from "./registration-util.js";

const CreditCardDetailsForm = ({
  initialValues,
  validationSchema,
  onSubmit,
  formError
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, isValid, dirty, isValidating }) => (
        <Form class="form">
          <div class="form__input">
            <RegistrationField
              placeholder="Name on Card:"
              type="text"
              name="cardName"
            />
          </div>
          <div class="form__input flex-row">
            <div class="flex">
              <div class="form__input" style={{ width: "300px" }}>
                <RegistrationField
                  placeholder="Card Number:"
                  type="text"
                  name="cardNumber"
                />
              </div>
              <div class="" style={{ width: "100px", marginLeft: "8px" }}>
                <RegistrationField placeholder="CVC:" type="text" name="cvc" />
              </div>
            </div>
          </div>

          <div class="form__input flex-row">
            <div class="flex items-center">
              <div>Expiration Date</div>

              <div class="" style={{ marginLeft: "8px" }}>
                <RegistrationField
                  placeholder="Month"
                  as="select"
                  name="expiryMonth"
                  options={creditCardExpirationMonth()}
                />
              </div>
              <div class="" style={{ marginLeft: "8px" }}>
                <RegistrationField
                  placeholder="Year"
                  as="select"
                  name="expiryYear"
                  options={creditCardExpirationYear()}
                />
              </div>
            </div>
          </div>
          <div class="form__input">
            <button
              type="submit"
              class="button button--yellow"
              disabled={isSubmitting || !isValid || isValidating || !dirty}
            >
              Sign Up!
            </button>
          </div>
          {formError && <ErrorContainer>{formError}</ErrorContainer>}
        </Form>
      )}
    </Formik>
  );
};

export default CreditCardDetailsForm;
