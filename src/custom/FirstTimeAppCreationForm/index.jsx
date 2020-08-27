/*
  This file has been partially generated!
  To permit updates to the generated portions of this code in the future,
  please follow all rules at https://bit.ly/nsFrontEndRules
 */

import React, { useState } from 'react';
import { graphql } from '@apollo/react-hoc';
import styled from 'styled-components';
import { EXECUTE } from '@nostack/no-stack';
import compose from '@shopify/react-compose';

// ns__custom_start unit: appSpec, comp: DescriptionCreationForm, loc: addedImports
import PropTypes from 'prop-types';
import { TextField, makeStyles, InputAdornment } from '@material-ui/core';
import { CREATE_APP_FOR_APP_SPEC_ACTION_ID } from '../../config';
import Description from '../../components/AppSpec/Description';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import CloseIcon from '@material-ui/icons/Close';
import { keyframes } from 'styled-components';

// ns__custom_end unit: appSpec, comp: DescriptionCreationForm, loc: addedImports

// ns__custom_start unit: appSpec, comp: DescriptionCreationForm, loc: styling
// change styling here
const Form = styled.div`
  padding: 1.5em;
  border: none;
  border-radius: 5px;
  // background-color: #f5f5f5;
  display: flex;
  justify-content: center;
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

const Button = styled.button`
  margin-left: 1em;
`;

const Label = styled.label`
  // margin-top: 4rem;
  // width: 50%;
`;

const useStyles = makeStyles(() => ({
  textField: {
    fontSize: '.8rem',
    textAlign: 'initial',
    width: '100%',
    margin: '6px 0',
    padding: 0,
  },
  button: {
    width: '80%',
    height: '3.5rem',
    borderRadius: '2rem',
  },
  inputLabel: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '1rem',
    color: 'black',
  },
  closeIcon: {
    color: 'white',
    fontSize: '1.2rem',
  },
  helpIcon: {
    fontSize: '1.5rem',
    color: '#FDCC00',
  },
}));

// ns__custom_end unit: appSpec, comp: DescriptionCreationForm, loc: styling
function AppCreationForm({
  customerId,
  createApp,
  refetchQueries,
  validateUserTypes,
}) {
  const [appValue, updateAppValue] = useState('');
  const [descValue, UpdateDescValue] = useState('');
  const [loading, updateLoading] = useState(false);
  const [callout, setCallout] = useState(false);
  const [descCall, setDescCall] = useState(false);
  const showCalloutBox = callout || validateUserTypes === 0;
  const showDescCallOutBox = descCall || validateUserTypes === 0;

  let callOutText =
    "What is your app name? (Don't worry, you can change it later! )";
  let descCallText = "What's the description for your app?";

  const styles = useStyles();

  function handleChange(e) {
    updateAppValue(e.target.value);
  }
  function handleDescChange(e) {
    UpdateDescValue(e.target.value);
  }

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

  function handleKeyPress(e) {
    if (e.charCode === 13) {
      handleSubmit(e);
    }
  }
  // ns__custom_start unit: appSpec, comp: UserTypeCreationForm, loc: beforeReturn
  const showCallout = () => {
    setCallout(!callout);
  };

  const showDescCallOut = () => {
    setDescCall(!descCall);
  };
  // ns__custom_end unit: appSpec, comp: UserTypeCreationForm, loc: beforeReturn
  console.log('ctrreatttttt', customerId);

  return (
    <>
      <Form>
        <Label> 
           {/* <TextField
            label={callOutText}
            type='text'
            className={styles.textField}
            onChange={handleChange}
            value={appValue}
            variant='outlined'
            disabled={loading}
            onKeyPress={handleKeyPress}
            id='app-value'
            label='Application Name'
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
          {showCalloutBox ? (
            <CalloutBox>
              {callOutText}
              <CloseIcon className={styles.closeIcon} onClick={showCallout} />
            </CalloutBox>
          ) : null}

          <TextField
            type='text'
            className={styles.textField}
            multiline
            onChange={handleDescChange}
            value={descValue}
            variant='outlined'
            disabled={loading}
            onKeyPress={handleKeyPress}
            rows={4}
            id='app-value'
            label='Description'
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <HelpOutlineIcon
                    className={styles.helpIcon}
                    onClick={showDescCallOut}
                  />
                </InputAdornment>
              ),
            }}
          />
          {showDescCallOutBox ? (
            <CalloutBox>
              {descCallText}
              <CloseIcon className={styles.closeIcon} onClick={showCallout} />
            </CalloutBox>
          ) : null}  */}
               {/* <Button type='submit' disabled={loading} onClick={handleSubmit}>
          {loading ? 'Creating App...' : 'Create App'}
        </Button> */}
        </Label> 


        <Label htmlFor='app-value'>
          <TextField
            className={styles.textField}
            id='app-value'
            type='text'
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            value={appValue}
            disabled={loading}
            variant='outlined'
            label='App'
          />
        </Label>
        <Button type='submit' disabled={loading} onClick={handleSubmit}>
          {loading ? 'Creating App...' : 'Create App'}
        </Button> 
      </Form>
    </>
  );
}

export default compose(graphql(EXECUTE, { name: 'createApp' }))(
  AppCreationForm
);

AppCreationForm.propTypes = {
  customerId: PropTypes.string,
  refetchQueries: PropTypes.array,
  createApp: PropTypes.func,
  // ns__custom_start unit: appSpec, comp: AppCreationForm, loc: addedPropTypes
  // ns__custom_end unit: appSpec, comp: AppCreationForm, loc: addedPropTypes
};
