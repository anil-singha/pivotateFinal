import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { useMutation } from '@apollo/react-hooks';
import * as Yup from 'yup';
import { REGISTER_USER } from '@nostack/no-stack';

import RegistrationField from './RegistrationField';
import { Wrapper, Row, ErrorContainer } from './RegistrationForm.style';

const initialValues = {
  name: '',
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  passwordConfirmation: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .label('name')
    .required('Please enter desired username.'),
  firstName: Yup.string()
    .label('firstName')
    .required('Please enter your first name.'),
  lastName: Yup.string()
    .label('lastName')
    .required('Please enter your last name.'),
  email: Yup.string()
    .label('email')
    .email('Enter a valid email.')
    .required('Please enter your email.'),
  password: Yup.string()
    .label('password')
    .matches(/(?=.*\d)/, 'Must have at least one numerical character')
    .matches(
      /(?=.*[#?!@$%^&*-.,:;'"><[\]{}()_|\\/~])/,
      'Must have at least one special character.',
    )
    .min(8, 'Must be at least 8 characters.')
    .required('Please enter your desired password.'),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), '', null], 'Passwords must match.')
    .required('Please confirm your password.'),
});

const RegistrationForm = ({
  userClassId,
  onSuccess,
}) => {
  const [register] = useMutation(REGISTER_USER);
  const [registrationCompleted, setRegistrationCompleted] = useState(false);
  const [formError, setFormError] = useState('');

  /*
    The following should be replaced.  Probably stored as a state variable and
    updated by the child forms.

    It seems to me that there could be a state var to determine whether:
     1. no child form is visible (haven't pushed "submit")
     2. the child form (or it's child) is visible;
     3. the submit has been pushed on the sequence of child forms, and it's time to call submit
     4. The submission succeeded, and the final welcome message should be visible.
   */
  const formValuesTemp = "{\"app\":\"newApp\",\"description\":\"newApp Desc\",\"creditCardNumber\":\"232\",\"expirationDate\":\"234243\",\"csv\":\"46\"}";

  const handleSubmit = async (
    values,
    { setSubmitting },
  ) => {
    setFormError('');

    if (values.password !== values.passwordConfirmation) {
      return;
    }

    try {
      await register({
        variables: {
          userClassId,
          name: values.name,
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          password: values.password,
          formValues: formValuesTemp,
        },
      });

      setRegistrationCompleted(true);

      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.log(error);
      console.log(error.graphQLErrors);

      setFormError('Something went wrong. Please try again.');
    }

    setSubmitting(false);
  };

  if (registrationCompleted) {
    return (
      <Wrapper>
        <p>Successfully created account! Please check your email for a verification message.  Push that, and you're in!</p>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, isValid, dirty, isValidating }) => (
          <Form>
            <RegistrationField fieldLabel="Username:" type="text" name="name" />
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

export default RegistrationForm;
