import React, { useState } from 'react';
import { 
  Formik,
  Form as BareForm,
  Field as BareField 
} from 'formik';
import { graphql } from '@apollo/react-hoc';
import { EXECUTE } from '@nostack/no-stack';
import styled from 'styled-components';

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

const SampleForm = ({ onCancel, submitForm, successView }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [error, setError] = useState('');

  const initialValues = {
    app: '',
    description: '',
  };

  const handleSubmit = async ({ app, description }, { setSubmitting }) => {
    setError('');

    const executionParameters = JSON.stringify({
      parentInstanceId: 'c9f086e6-15d3-4bfc-8296-783a2bb29cf5',
      values: { app, description },
    });

    try {
      await submitForm({
        variables: {
          actionId: 'form-submission-add-version-9d2dd0e7-2aca-4212-88bc-59f8bf74e992',
          executionParameters,
          unrestricted: false,
        },
      });
      
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

export default graphql(
  EXECUTE, { name: 'submitForm' }
)(SampleForm);
