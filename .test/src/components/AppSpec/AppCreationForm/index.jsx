/*
  This file has been partially generated!
  To permit updates to the generated portions of this code in the future,
  please follow all rules at https://bit.ly/nsFrontEndRules
 */
// ns__file unit: appSpec, comp: AppCreationForm

// ns__custom_start unit: appSpec, comp: AppCreationForm, loc: beforeImports

// ns__custom_end unit: appSpec, comp: AppCreationForm, loc: beforeImports

// ns__start_section imports
import React, { useState } from 'react';
import { graphql } from '@apollo/react-hoc';
import styled from 'styled-components';
import { EXECUTE } from '@nostack/no-stack';
import compose from '@shopify/react-compose';

import PropTypes from 'prop-types';

import { CREATE_APP_FOR_APP_SPEC_ACTION_ID } from '../../../config';
// ns__custom_start unit: appSpec, comp: AppCreationForm, loc: addedImports
// ns__custom_end unit: appSpec, comp: AppCreationForm, loc: addedImports
// ns__end_section imports

// ns__start_section stylingSection
const Form = styled.div`
  // ns__custom_start unit: appSpec, comp: AppCreationForm, loc: styling
  // change styling here
  margin: 2em;
  padding: 1.5em;
  border: none;
  border-radius: 5px;
  background-color: #f5f5f5;
  // ns__custom_end unit: appSpec, comp: AppCreationForm, loc: styling
`;
// ns__end_section stylingSection

// ns__start_section button
const Button = styled.button`
  // ns__custom_start unit: appSpec, comp: AppCreationForm, loc: buttonStyling
  margin-left: 1em;
  // ns__custom_end unit: appSpec, comp: AppCreationForm, loc: buttonStyling
`;

// ns__end_section button

// ns__custom_start unit: appSpec, comp: AppCreationForm, loc: beforeFunction
// ns__custom_end unit: appSpec, comp: AppCreationForm, loc: beforeFunction

// ns__start_section function
function AppCreationForm({
  customerId,
  createApp,
  refetchQueries,
  // ns__custom_start unit: appSpec, comp: AppCreationForm, loc: addedProps
  // ns__custom_end unit: appSpec, comp: AppCreationForm, loc: addedProps
}) {
  const [appValue, updateAppValue] = useState('');
  const [loading, updateLoading] = useState(false);
  // ns__custom_start unit: appSpec, comp: AppCreationForm, loc: beginning
  // ns__custom_end unit: appSpec, comp: AppCreationForm, loc: beginning

  // ns__start_section handleChange
  function handleChange(e) {
    updateAppValue(e.target.value);
  }
  // ns__end_section handleChange

  // ns__start_section handleSubmit
  async function handleSubmit(e) {
    e.preventDefault();

    if (!appValue) {
      return;
    }

    updateLoading(true);

    await createApp({
      variables: {
        actionId: CREATE_APP_FOR_APP_SPEC_ACTION_ID,
        executionParameters: JSON.stringify({
          parentInstanceId: customerId,
          value: appValue,
        }),
        unrestricted: false,
      },
      refetchQueries,
    });

    updateAppValue('');
    updateLoading(false);
  }
  // ns__end_section handleSubmit

  // ns__start_section handleKeyPress
  function handleKeyPress(e) {
    if (e.charCode === 13) {
      handleSubmit(e);
    }
  }
  // ns__end_section handleKeyPress

  // ns__custom_start unit: appSpec, comp: AppCreationForm, loc: beforeReturn
  // ns__custom_end unit: appSpec, comp: AppCreationForm, loc: beforeReturn

  // ns__start_section return
  return (
    <Form>
      <label htmlFor='app-value'>
        App:
        <input
          id='app-value'
          type='text'
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          value={appValue}
          disabled={loading}
        />
      </label>
      <Button type='submit' disabled={loading} onClick={handleSubmit}>
        {loading ? 'Creating App...' : 'Create App'}
      </Button>
    </Form>
  );
  // ns__end_section return
}

// ns__end_section function

// ns__start_section  compose
export default compose(graphql(EXECUTE, { name: 'createApp' }))(
  AppCreationForm
);
// ns__end_section  compose

// ns__start_section propTypes
AppCreationForm.propTypes = {
  parentId: PropTypes.string,
  refetchQueries: PropTypes.array,
  create: PropTypes.func,
  // ns__custom_start unit: appSpec, comp: AppCreationForm, loc: addedPropTypes
  // ns__custom_end unit: appSpec, comp: AppCreationForm, loc: addedPropTypes
};
// ns__end_section propTypes
