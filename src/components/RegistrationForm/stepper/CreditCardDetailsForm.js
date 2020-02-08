import React from 'react';
import { Formik, Form } from 'formik';

import { Wrapper, Row, ErrorContainer } from '../RegistrationForm.style';
import RegistrationField from '../RegistrationField';

import { creditCardExpirationMonth, creditCardExpirationYear } from './registration-util.js';

const CreditCardDetailsForm = ({ initialValues, validationSchema, onSubmit, formError}) => {
  return (
    <Wrapper>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, isValid, dirty, isValidating }) => (
          <Form>
            <RegistrationField
              fieldLabel="Name on Card:"
              type="text"
              name="cardName"
            />
            <RegistrationField
              fieldLabel="Card Number:"
              type="text"
              name="cardNumber"
            />
            <RegistrationField
              fieldLabel="CVC:"
              type="text"
              name="cvc"
            />
            <Row>
              Expiration Date
              <RegistrationField
                fieldLabel="Month"
                as="select"
                name="expiryMonth"
                options={creditCardExpirationMonth()}
              />
              <RegistrationField
                fieldLabel="Year"
                as="select"
                name="expiryYear"
                options={creditCardExpirationYear()}
              />
            </Row>
              
            <Row>
              <button
                type="submit"
                disabled={isSubmitting || !isValid || isValidating || !dirty}
              >
                Sign Up!
              </button>
              {formError && <ErrorContainer>{formError}</ErrorContainer>}
            </Row>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default CreditCardDetailsForm;

