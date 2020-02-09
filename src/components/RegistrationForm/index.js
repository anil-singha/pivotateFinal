import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { REGISTER_USER } from '@nostack/no-stack';

import { Wrapper } from './RegistrationForm.style';

import BasicDetailsForm from './stepper/BasicDetailsForm';
import AppDetailsForm from './stepper/AppDetailsForm.js';
import CreditCardDetailsForm from './stepper/CreditCardDetailsForm';

import {
  validationSchemaBasic,
  validationSchemaApp,
  validationSchemaCreditCard,
} from './stepper/registration-util.js';

const initialValues = {
  username: '',
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  app: '',
  description: '',
  cardName: '',
  cardNumber: '',
  cvc: '',
  expiryMonth: '',
  expiryYear: '',
};



const RegistrationForm = ({
  userClassId,
  onSuccess,
}) => {
  const [register] = useMutation(REGISTER_USER);
  const [registrationCompleted, setRegistrationCompleted] = useState(false);
  const [formError, setFormError] = useState('');


  /*
    A "stepper" is created and uses state to be sure that:
     1. no child form is visible (haven't pushed "submit")
     2. the child form (or it's child) is visible;
     3. the submit has been pushed on the sequence of child forms, and it's time to call submit
     4. The submission succeeded, and the final welcome message should be visible.
   */
  const [step, setStep] = useState(1);

  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [app, setApp] = useState('');
  const [description, setDescription] = useState('');

  // const formValuesTemp = "{\"app\":\"newApp\",\"description\":\"newApp Desc\",\"creditCardNumber\":\"232\",\"expirationDate\":\"234243\",\"csv\":\"46\"}";

  const handleSubmit = async (
    values,
    { setSubmitting },
  ) => {
    setFormError('');
    if (values.password !== values.passwordConfirmation) {
      return;
    }
    const formValuesTemp = {
      app,
      description,
      creditCardNumber: values.cardNumber,
      creditCardName: values.cardName,
      expirationDate: `${values.expiryMonth}/${values.expiryYear}`,
      csv: values.cvc,
    };

    try {
      await register({
        variables: {
          userClassId,
          username: username,
          firstName,
          lastName,
          email,
          password,
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

  const nextStep = () => {
    setStep(step + 1);
  };

  const handleSubmitBasicForm = (values, { setSubmitting }) => {
    setFormError('');
    if (values.password !== values.passwordConfirmation) {
      return;
    }
    setUsername(values.username);
    setFirstName(values.firstName);
    setLastName(values.lastName);
    setEmail(values.email);
    setPassword(values.password);
    setSubmitting(false);
    nextStep();
  }

  const handleSubmitAppForm = (values, { setSubmitting }) => {
    setFormError('');
    setApp(values.app);
    setDescription(values.description);
    setSubmitting(false);
    nextStep();
  }

  const displayCurrentStep = () => {
    switch (step) {
      case 1:
        return <BasicDetailsForm
          initialValues={initialValues}
          validationSchema={validationSchemaBasic}
          onSubmit={handleSubmitBasicForm}
          formError={formError}
        />;

      case 2:
        return <AppDetailsForm
          initialValues={initialValues}
          validationSchema={validationSchemaApp}
          onSubmit={handleSubmitAppForm}
          formError={formError}
        />;
      
      case 3:
        return <CreditCardDetailsForm
          initialValues={initialValues}
          validationSchema={validationSchemaCreditCard}
          onSubmit={handleSubmit}
          formError={formError}
        />;

      default:
        return <BasicDetailsForm
          initialValues={initialValues}
          validationSchema={validationSchemaBasic}
          onSubmit={handleSubmitBasicForm}
          formError={formError}
        />;
    }
  };
  return (
    <>
      {displayCurrentStep()}
    </>
  );
};

export default RegistrationForm;
