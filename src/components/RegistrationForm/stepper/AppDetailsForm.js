import React from 'react';
import { Formik, Form } from 'formik';

import { Wrapper, Row, ErrorContainer } from '../RegistrationForm.style';
import RegistrationField from '../RegistrationField';

const AppDetailsForm = ({
  initialValues,
  validationSchema,
  onSubmit,
  formError,
}) => {
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, isValid, dirty, isValidating }) => (
          <Form className='form'>
            <div className='form__input'>
              <RegistrationField
                placeholder='App Name:'
                type='text'
                name='app'
              />
            </div>
            <div className='form__input'>
              <RegistrationField
                placeholder='Description:'
                as='textarea'
                name='description'
              />
            </div>
            <br />
            <div className=''>
              <RegistrationField
                name='terms'
                type='checkbox'
                fieldLabel='I agree to our Terms of Use and Privacy Policy by signing up'
              />
            </div>
            <div className='form__input'>
              <button
                className='button button--yellow'
                type='submit'
                disabled={isSubmitting || !isValid || isValidating || !dirty}
              >
                MAKE MY APP NOW
              </button>
              {formError && <ErrorContainer>{formError}</ErrorContainer>}
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AppDetailsForm;
