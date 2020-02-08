import React from 'react';
import { Formik, Form } from 'formik';

import { Wrapper, Row, ErrorContainer } from '../RegistrationForm.style';
import RegistrationField from '../RegistrationField';

const BasicDetailsForm = ({ initialValues, validationSchema, onSubmit, formError}) => {
  return (
    <Wrapper>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, isValid, dirty, isValidating }) => (
          <Form>
            <RegistrationField fieldLabel="Username:" type="text" name="username" />
            <RegistrationField
              fieldLabel="First Name:"
              type="text"
              name="firstName"
            />
            <RegistrationField
              fieldLabel="Last Name:"
              type="text"
              name="lastName"
            />
            <RegistrationField fieldLabel="Email:" type="email" name="email" />
            <RegistrationField
              fieldLabel="Password:"
              type="password"
              name="password"
            />
            <RegistrationField
              fieldLabel="Confirm Password:"
              type="password"
              name="passwordConfirmation"
            />
            
            <Row>
              <button
                type="submit"
                disabled={isSubmitting || !isValid || isValidating || !dirty}
              >
                Next
              </button>
              {formError && <ErrorContainer>{formError}</ErrorContainer>}
            </Row>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default BasicDetailsForm;

