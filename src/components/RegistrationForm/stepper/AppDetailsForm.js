import React from 'react';
import { Formik, Form } from 'formik';

import { Wrapper, Row, ErrorContainer } from '../RegistrationForm.style';
import RegistrationField from '../RegistrationField';

const AppDetailsForm = ({ initialValues, validationSchema, onSubmit, formError}) => {
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
              fieldLabel="App Name:"
              type="text"
              name="app"
            />
            <RegistrationField
              fieldLabel="Description:"
              as="textarea"
              name="description"
            />
            <RegistrationField
              name="terms"
              type="checkbox"
              fieldLabel="I agree to our Terms of Use and Privacy Policy by signing up"
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

export default AppDetailsForm;

