import React, { useState } from 'react';
import { 
  Formik,
  Form as BareForm,
  Field as BareField 
} from 'formik';
import { graphql } from '@apollo/react-hoc';
import { withNoStack, EXECUTE } from '@nostack/no-stack';
import compose from '@shopify/react-compose';
import styled from 'styled-components';
import {SUBMIT_FORM_FOR_REGISTRATION_INFO_ACTION_ID} from "../../config";

const Form = styled(BareForm)`
  padding: 2em;
  border: 1px solid black;
`;

const Row = styled.p``;

const Error = styled.p``;

const Field = styled(BareField)``;

const Label = styled.label``;

const SubmitButton = styled.button``;

const CancelButton = styled.button``;

const SampleForm = ({ currentUser, onCancel, submitForm, successView }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [error, setError] = useState('');

  const initialValues = {
    app: '',
    description: '',
    creditCardNumber: '',
    expirationDate: '',
    csv: '',
    creditCardName: '',
  };

  const handleSubmit = async ({ app, description, creditCardNumber, expirationDate, csv, creditCardName }, { setSubmitting }) => {
    setError('');

    const executionParameters = JSON.stringify({
      parentInstanceId: currentUser.id,
      values: { app, description, creditCardNumber, expirationDate, csv },
    });

    try {
      const { data } = await submitForm({
        variables: {
          actionId: SUBMIT_FORM_FOR_REGISTRATION_INFO_ACTION_ID,
          executionParameters,
          unrestricted: false,
        },
      });

      if (!data.Execute) {
        throw new Error('Null API response.');
      }

      setIsCompleted(true);
    } catch (e) {
      console.log(e);

      setError('Something wrong happened.');
    }

    setSubmitting(false);
  };

  const handleCancel = () => {
    onCancel();
  };

  if (isCompleted) {
    return successView;
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Row>
            <Label htmlFor="app">App</Label>
            <Field id="app" name="app" disabled={isSubmitting} />
          </Row>

          <Row>
            <Label htmlFor="description">Description</Label>
            <Field name="description" disabled={isSubmitting} />
          </Row>

          <Row>
            <Label htmlFor="creditCardNumber">Credit Card Number</Label>
            <Field name="creditCardNumber" disabled={isSubmitting} />
          </Row>

          <Row>
            <Label htmlFor="creditCardName">Credit Card Owner</Label>
            <Field name="creditCardName" disabled={isSubmitting} />
          </Row>

          <Row>
            <Label htmlFor="expirationDate">Expiration Date</Label>
            <Field name="expirationDate" disabled={isSubmitting} />
          </Row>

          <Row>
            <Label htmlFor="csv">CSV (Special code on the back)</Label>
            <Field name="csv" disabled={isSubmitting} />
          </Row>

          <Row>
            <SubmitButton
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </SubmitButton>
            <CancelButton 
              type="button"
              disabled={isSubmitting}
              onClick={handleCancel}
            >
              Cancel
            </CancelButton>
          </Row>
          {error && <Error>{error}</Error>}
        </Form>
      )}
    </Formik>
  )
};

export default compose(
  withNoStack,
  graphql( EXECUTE, { name: 'submitForm' }),
)(SampleForm);
