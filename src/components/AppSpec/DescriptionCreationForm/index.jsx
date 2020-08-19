/*
  This file has been partially generated!
  To permit updates to the generated portions of this code in the future,
  please follow all rules at https://bit.ly/nsFrontEndRules
 */
// ns__file unit: appSpec, comp: DescriptionCreationForm

// ns__custom_start unit: appSpec, comp: DescriptionCreationForm, loc: beforeImports

// ns__custom_end unit: appSpec, comp: DescriptionCreationForm, loc: beforeImports
import React, { useState } from 'react';
import { graphql } from '@apollo/react-hoc';
import styled from 'styled-components';
import { EXECUTE } from '@nostack/no-stack';
import compose from '@shopify/react-compose';

// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

// ns__custom_start unit: appSpec, comp: DescriptionCreationForm, loc: addedImports

import { makeStyles, TextField } from '@material-ui/core';
import { CREATE_DESCRIPTION_FOR_APP_SPEC_ACTION_ID } from '../../../config';
// ns__custom_end unit: appSpec, comp: DescriptionCreationForm, loc: addedImports

const Form = styled.div`
  // ns__custom_start unit: appSpec, comp: DescriptionCreationForm, loc: styling
  // change styling here
  margin: 2em;
  padding: 1.5em;
  border: none;
  border-radius: 5px;
  // ns__custom_end unit: appSpec, comp: DescriptionCreationForm, loc: styling
`;

// ns__custom_start unit: appSpec, comp: DescriptionCreationForm, loc: beforeFunction
const Label = styled.label`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
`;

const useStyles = makeStyles({
  button: {
    minWidth: 0,
  },
  customWidth: {
    maxWidth: '500',
    minWidth: '300',
    backgroundColor: 'blue',
  },
  helpIcon: {
    fontSize: '1.5rem',
    color: '#FDCC00',
  },
  closeIcon: {
    color: 'white',
    fontSize: '1.2rem',
  },
  textField: {
    width: '100%',
  },
});

// ns__custom_end unit: appSpec, comp: DescriptionCreationForm, loc: styling

function DescriptionCreationForm({
  parentId,
  createDescription,
  refetchQueries,
  // ns__custom_start unit: appSpec, comp: DescriptionCreationForm, loc: addedProps
  // ns__custom_end unit: appSpec, comp: DescriptionCreationForm, loc: addedProps
}) {
  const [descriptionValue, updateDescriptionValue] = useState('');
  const [loading, updateLoading] = useState(false);
  // ns__custom_start unit: appSpec, comp: DescriptionCreationForm, loc: beginning
  const styles = useStyles();

  // ns__custom_end unit: appSpec, comp: DescriptionCreationForm, loc: beginning

  function handleChange(e) {
    updateDescriptionValue(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!descriptionValue) {
      return;
    }

    updateLoading(true);

    await createDescription({
      variables: {
        actionId: CREATE_DESCRIPTION_FOR_APP_SPEC_ACTION_ID,
        executionParameters: JSON.stringify({
          parentInstanceId: parentId,
          value: descriptionValue,
        }),
        unrestricted: false,
      },
      refetchQueries,
    });

    updateDescriptionValue('');
    updateLoading(false);
  }

  // ns__start_replacement handleKeyPress
  function handleKeyPress(e) {
    // if (e.charCode === 13) {
    //   handleSubmit(e);
    // }
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  }
  // ns__end_replacement handleKeyPress

  // ns__custom_start unit: appSpec, comp: DescriptionCreationForm, loc: beforeReturn
  // const showCallout = () => {
  //   setCallout(!callout);
  // };
  // ns__custom_end unit: appSpec, comp: DescriptionCreationForm, loc: beforeReturn

  // ns__start_section return
  return (
    <Form>
      <Label htmlFor='description-value'>
        <TextField
          className={styles.textField}
          id='description-value'
          type='text'
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          value={descriptionValue}
          disabled={loading}
          multiline
          variant='outlined'
          label='Description'
          rows='10'
          // InputProps={{
          //   endAdornment: (
          //     <InputAdornment position="end">
          //          <HelpOutlineIcon className={styles.helpIcon} onClick={showCallout}/>
          //     </InputAdornment>
          //   )
          // }}
        />
      </Label>
      {/* {showCalloutBox ? (
        <CalloutBox>
          {callOutText}{' '}
          <CloseIcon className={styles.closeIcon} onClick={showCallout} />
        </CalloutBox>
      ) : null} */}
    </Form>
  );
  // ns__end_section return
}

export default compose(graphql(EXECUTE, { name: 'createDescription' }))(
  DescriptionCreationForm
);

DescriptionCreationForm.propTypes = {
  parentId: PropTypes.string,
  refetchQueries: PropTypes.array,
  createDescription: PropTypes.func,
  // ns__custom_start unit: appSpec, comp: DescriptionCreationForm, loc: addedPropTypes
  // ns__custom_end unit: appSpec, comp: DescriptionCreationForm, loc: addedPropTypes
};
