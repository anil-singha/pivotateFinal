/*
  This file has been partially generated!
  To permit updates to the generated portions of this code in the future,
  please follow all rules at https://docs.google.com/document/d/1vYGEyX2Gnvd_VwAcWGv6Ie37oa2vXNL7wtl7oUyyJcw/edit?usp=sharing
 */
// ns__file unit: appSpec, comp: DescriptionCreationForm

// ns__custom_start unit: appSpec, comp: DescriptionCreationForm, loc: beforeImports

// ns__custom_end unit: appSpec, comp: DescriptionCreationForm, loc: beforeImports
import React, { useState } from 'react';
import { graphql } from '@apollo/react-hoc';
import styled, { keyframes } from 'styled-components';
import { EXECUTE } from '@nostack/no-stack';
import compose from '@shopify/react-compose';

import PropTypes from 'prop-types';

// ns__custom_start unit: appSpec, comp: DescriptionCreationForm, loc: addedImports
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import CloseIcon from '@material-ui/icons/Close';

import { makeStyles, TextField, InputAdornment } from '@material-ui/core';
import IconButton from '@material-ui/core/Button';
import { CREATE_DESCRIPTION_FOR_APP_SPEC_ACTION_ID } from '../../../config';
// ns__custom_end unit: appSpec, comp: DescriptionCreationForm, loc: addedImports

// ns__custom_start unit: appSpec, comp: DescriptionCreationForm, loc: styling
// change styling here
const Form = styled.div`
  margin: 2em;
  padding: 1.5em;
  border: none;
  border-radius: 5px;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
`;

const fadeInDown = keyframes`
0% {
  opacity: 0;
  
}
100% {
  opacity: 1;
  
}
`;

const CalloutBox = styled.div`
  padding: 1rem;
  animation: ${fadeInDown} 1.5s;
  background-color: #F3E196;
  width: 100%;
  border-radius: 10px;  
  position: relative;
  margin: .5rem;
  display: flex;
  justify-content: space-between;
  

  :after{
    background-color: #F3E196;
    position: absolute;
    width: 30px;
    height: 10px;
    border-top: 0px solid #F3E196;
    border-right: 2px solid #F3E196;
    border-left: 0px solid #F3E196;
    border-bottom: 2px solid #F3E196;
    left: 60%;
    
    content: '';
    transform: rotate(45deg);
    margin-top: -13px;
    }
  }
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

const Button = styled.button`
  margin-left: 1em;
`;

function DescriptionCreationForm({
  parentId,
  createDescription,
  refetchQueries,
  // ns__custom_start unit: appSpec, comp: DescriptionCreationForm, loc: addedProps
  label,
  // ns__custom_end unit: appSpec, comp: DescriptionCreationForm, loc: addedProps
}) {
  const [descriptionValue, updateDescriptionValue] = useState('');
  const [loading, updateLoading] = useState(false);
  // ns__custom_start unit: appSpec, comp: DescriptionCreationForm, loc: beginning
  const styles = useStyles();
  const [callout, setCallout] = useState(true);
  const showCalloutBox = callout;
  const callOutText = `Enter a description for your App`;
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

    const createDescriptionResponse = await createDescription({
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

  function handleKeyPress(e) {
    // ns__custom_start unit: appSpec, comp: DescriptionCreationForm, loc: insideHandleKeyPress
    // if (e.charCode === 13) {
    //   handleSubmit(e);
    // }
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
    // ns__custom_end unit: appSpec, comp: DescriptionCreationForm, loc: insideHandleKeyPress
  }
  // ns__custom_start unit: appSpec, comp: DescriptionCreationForm, loc: beforeReturn
  const showCallout = () => {
    setCallout(!callout);
  };
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
