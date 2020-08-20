/*
  This file has been partially generated!
  To permit updates to the generated portions of this code in the future,
  please follow all rules at https://bit.ly/nsFrontEndRules
 */
// ns__file unit: appSpec, comp: InfoTypeCreationForm

// ns__custom_start unit: appSpec, comp: InfoTypeCreationForm, loc: beforeImports

// ns__custom_end unit: appSpec, comp: InfoTypeCreationForm, loc: beforeImports

// ns__start_section imports
import React, { useState } from 'react';
import { graphql } from '@apollo/react-hoc';
import styled from 'styled-components';
import { EXECUTE } from '@nostack/no-stack';
import compose from '@shopify/react-compose';

import PropTypes from 'prop-types';

import { CREATE_INFO_TYPE_FOR_APP_SPEC_ACTION_ID } from '../../../config';
// ns__custom_start unit: appSpec, comp: InfoTypeCreationForm, loc: addedImports
// <!-- prettier-ignore-start -->
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles, TextField, InputAdornment } from '@material-ui/core';
import PropTypes from 'prop-types';
import { keyframes } from 'styled-components';
// <!-- prettier-ignore-end -->
// ns__custom_end unit: appSpec, comp: InfoTypeCreationForm, loc: addedImports
// ns__end_section imports

// ns__start_section stylingSection
const Form = styled.div`
  // ns__custom_start unit: appSpec, comp: InfoTypeCreationForm, loc: styling
  // change styling here
  margin: 0.8rem 0 0 11%;
  border: none;
  border-radius: 5px;
  // ns__custom_end unit: appSpec, comp: InfoTypeCreationForm, loc: styling
`;
// ns__end_section stylingSection

// ns__start_replacement button

/*
  for some reason, button has been removed.  Normally this is how it looks:
  const Button = styled.button`
     // ns__custom_start unit: appSpec, comp: InfoTypeCreationForm, loc: buttonStyling
     // ns__custom_end unit: appSpec, comp: InfoTypeCreationForm, loc: buttonStyling
  `;
 */

// ns__end_replacement button

// ns__custom_start unit: appSpec, comp: InfoTypeCreationForm, loc: beforeFunction
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
  width: inherit;
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
    left: 91%;
    
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
    fontSize: '1rem',
  },
  textField: {
    width: '100%',
  },
});
// ns__custom_end unit: appSpec, comp: InfoTypeCreationForm, loc: beforeFunction

// ns__start_section function
function InfoTypeCreationForm({
  parentId,
  createInfoType,
  refetchQueries,
  // ns__custom_start unit: appSpec, comp: InfoTypeCreationForm, loc: addedProps
  validateInfoTypes,
  label,
  disabled,
  infoTypeValueCount,
  textLabel,
  onChange,
  // ns__custom_end unit: appSpec, comp: InfoTypeCreationForm, loc: addedProps
}) {
  const [infoTypeValue, updateInfoTypeValue] = useState('');
  const [loading, updateLoading] = useState(false);
  // ns__custom_start unit: appSpec, comp: InfoTypeCreationForm, loc: beginning
  const styles = useStyles();
  const [callout, setCallout] = useState(false);
  const showCalloutBox = callout || validateInfoTypes === 0;
  let callOutText = '';

  if (infoTypeValueCount < 5) {
    callOutText = textLabel;
  } else {
    callOutText = `What is the Info Type ${label ? `for ${label}` : ''}`;
  }
  // ns__custom_end unit: appSpec, comp: InfoTypeCreationForm, loc: beginning

  // ns__start_replacement handleChange

  function handleChange(e) {
    updateInfoTypeValue(e.target.value);
    onChange(e.target.value);
  }

  // ns__end_replacement handleChange

  // ns__start_section handleSubmit
  async function handleSubmit(e) {
    e.preventDefault();

    if (!infoTypeValue) {
      return;
    }

    updateLoading(true);

    await createInfoType({
      variables: {
        actionId: CREATE_INFO_TYPE_FOR_APP_SPEC_ACTION_ID,
        executionParameters: JSON.stringify({
          parentInstanceId: parentId,
          value: infoTypeValue,
        }),
        unrestricted: false,
      },
      refetchQueries,
    });

    updateInfoTypeValue('');
    updateLoading(false);
  }
  // ns__end_section handleSubmit

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

  // ns__custom_start unit: appSpec, comp: InfoTypeCreationForm, loc: beforeReturn
  const showCallout = () => {
    setCallout(!callout);
  };
  // ns__custom_end unit: appSpec, comp: InfoTypeCreationForm, loc: beforeReturn

  // ns__start_replacement return

  return (
    <Form>
      <Label htmlFor='infoType-value'>
        <TextField
          className={styles.textField}
          label={callOutText}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          value={infoTypeValue}
          disabled={disabled || loading}
          variant='outlined'
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <HelpOutlineIcon
                  className={styles.helpIcon}
                  onClick={showCallout}
                />
              </InputAdornment>
            ),
          }}
        />
      </Label>

      {showCalloutBox ? (
        <CalloutBox>
          {callOutText}
          <CloseIcon className={styles.closeIcon} onClick={showCallout} />
        </CalloutBox>
      ) : null}
    </Form>
  );

  // ns__end_replacement return
}

// ns__end_section function

// ns__start_section  compose
export default compose(graphql(EXECUTE, { name: 'createInfoType' }))(
  InfoTypeCreationForm
);
// ns__end_section  compose

// ns__start_section propTypes
InfoTypeCreationForm.propTypes = {
  parentId: PropTypes.string,
  refetchQueries: PropTypes.array,
  createInfoType: PropTypes.func,
  // ns__custom_start unit: appSpec, comp: InfoTypeCreationForm, loc: addedPropTypes
  // ns__custom_end unit: appSpec, comp: InfoTypeCreationForm, loc: addedPropTypes
};
// ns__end_section propTypes
