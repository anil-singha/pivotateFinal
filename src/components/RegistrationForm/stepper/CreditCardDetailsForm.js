import React from 'react';
import { Formik, Form } from 'formik';

import { Wrapper, Row, ErrorContainer } from '../RegistrationForm.style';
import RegistrationField from '../RegistrationField';

import {
  creditCardExpirationMonth,
  creditCardExpirationYear
} from './registration-util.js';

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
        <Form className="form">
          <div className="form__input">
            <RegistrationField
              placeholder="Name on Card:"
              type="text"
              name="cardName"
            />
          </div>
          <div className="form__input flex-row">
            <div className="flex">
              <div className="form__input" style={{ width: '300px' }}>
                <RegistrationField
                  placeholder="Card Number:"
                  type="text"
                  name="cardNumber"
                />
              </div>
              <div className="" style={{ width: '100px', marginLeft: '8px' }}>
                <RegistrationField placeholder="CVC:" type="text" name="cvc" />
              </div>
            </div>
          </div>

          <div className="form__input flex-row">
            <div className="flex items-center">
              <div>Expiration Date</div>

              <div className="" style={{ marginLeft: '8px' }}>
                <RegistrationField
                  placeholder="Month"
                  as="select"
                  name="expiryMonth"
                  options={creditCardExpirationMonth()}
                />
              </div>
              <div className="" style={{ marginLeft: '8px' }}>
                <RegistrationField
                  placeholder="Year"
                  as="select"
                  name="expiryYear"
                  options={creditCardExpirationYear()}
                />
              </div>
            </div>
          </div>
          <div className="form__input">
            <button
              type="submit"
              className="button button--yellow"
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
