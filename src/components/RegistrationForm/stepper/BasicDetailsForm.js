import React from 'react';
import { Formik, Form } from 'formik';

import { ErrorContainer } from '../RegistrationForm.style';
import RegistrationField from '../RegistrationField';

const BasicDetailsForm = ({
  initialValues,
  validationSchema,
  onSubmit,
  formError,
  ...props
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
                placeholder='Username'
                type='text'
                name='username'
              />
            </div>
            <div className='form__input'>
              <RegistrationField
                placeholder='First Name'
                type='text'
                name='firstName'
              />
            </div>
            <div className='form__input'>
              <RegistrationField
                placeholder='Last Name'
                type='text'
                name='lastName'
              />
            </div>
            <div className='form__input'>
              <RegistrationField
                placeholder='Email'
                type='email'
                name='email'
              />
            </div>
            <div className='form__input'>
              <RegistrationField
                placeholder='Password'
                type='password'
                name='password'
              />
            </div>

            <div className='form__input'>
              <RegistrationField
                placeholder='Confirm Password'
                type='password'
                name='passwordConfirmation'
              />
            </div>

            <div className='' style={{ marginTop: '0.5em' }}>
              <RegistrationField
                name='terms'
                type='checkbox'
                checked='false'
                fieldLabel='I agree to our Terms of Use and Privacy Policy by signing up'
              />
            </div>
            <div className='form__input'>
              <button
                className='button button--yellow'
                type='submit'
                // disabled={isSubmitting || !isValid || isValidating || !dirty}
              >
                SIGN UP
              </button>
              {formError && <ErrorContainer>{formError}</ErrorContainer>}
            </div>

            <small>
              Already have an account?
              <span
                role='presentation'
                className='teal--text'
                onClick={props.onSwitch}
              >
                &nbsp;Log In
              </span>
            </small>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default BasicDetailsForm;
