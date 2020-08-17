/*
  This file has been partially generated!
  To permit updates to the generated portions of this code in the future,
  please follow all rules at https://docs.google.com/document/d/1vYGEyX2Gnvd_VwAcWGv6Ie37oa2vXNL7wtl7oUyyJcw/edit?usp=sharing
 */
// ns__file unit: appSpec, comp: UserTypeCreationForm

// ns__custom_start unit: appSpec, comp: UserTypeCreationForm, loc: beforeImports
// ns__custom_end unit: appSpec, comp: UserTypeCreationForm, loc: beforeImports

import React, { useState } from 'react';
import { graphql } from '@apollo/react-hoc';
import styled, { keyframes } from 'styled-components';
import { EXECUTE } from '@nostack/no-stack';
import compose from '@shopify/react-compose';

// ns__custom_start unit: appSpec, comp: UserTypeCreationForm, loc: addedImports
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles, TextField, InputAdornment } from '@material-ui/core';
import { CREATE_USER_TYPE_FOR_APP_SPEC_ACTION_ID } from '../../../config';

// ns__custom_end unit: appSpec, comp: UserTypeCreationForm, loc: addedImports

// ns__custom_start unit: appSpec, comp: UserTypeCreationForm, loc: styling
// change styling here
const Form = styled.div`
  margin: 2em;
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
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

// ns__custom_end unit: appSpec, comp: UserTypeCreationForm, loc: styling

function UserTypeCreationForm({
  parentId,
  createUserType,
  refetchQueries,
  // ns__custom_start unit: appSpec, comp: UserTypeCreationForm, loc: addedProps
  validateUserTypes,
  onChange,
  label,
  userTypeCreationCount,
  disabled,
  textLabel,
  // ns__custom_end unit: appSpec, comp: UserTypeCreationForm, loc: addedProps
}) {
  const [userTypeValue, updateUserTypeValue] = useState('');
  const [loading, updateLoading] = useState(false);

  // ns__custom_start unit: appSpec, comp: UserTypeCreationForm, loc: beginning
  const styles = useStyles();
  const [callout, setCallout] = useState(false);
  const showCalloutBox = callout || validateUserTypes === 0;
  let callOutText = '';
  if (userTypeCreationCount < 4) {
    callOutText = textLabel;
  } else {
    callOutText = `What is the User Type ${label ? `for ${label}` : ''}`;
  }
  // ns__custom_end unit: appSpec, comp: UserTypeCreationForm, loc: beginning

  function handleChange(e) {
    updateUserTypeValue(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!userTypeValue) {
      return;
    }

    updateLoading(true);

    const createUserTypeResponse = await createUserType({
      variables: {
        actionId: CREATE_USER_TYPE_FOR_APP_SPEC_ACTION_ID,
        executionParameters: JSON.stringify({
          parentInstanceId: parentId,
          value: userTypeValue,
        }),
        unrestricted: false,
      },
      refetchQueries,
    });

    JSON.parse(createUserTypeResponse.data.Execute);

    updateUserTypeValue('');
    updateLoading(false);
  }

  function handleKeyPress(e) {
    // ns__custom_start unit: appSpec, comp: UserTypeCreationForm, loc: insideHandleKeyPress
    // if (e.charCode === 13) {
    //   handleSubmit(e);
    // }
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
    // ns__custom_end unit: appSpec, comp: UserTypeCreationForm, loc: insideHandleKeyPress
  }
  // ns__custom_start unit: appSpec, comp: UserTypeCreationForm, loc: beforeReturn
  const showCallout = () => {
    setCallout(!callout);
  };
  return (
    <Form>
      {/* ns__custom_start unit: appSpec, comp: UserTypeCreationForm, loc: insideReturn */}
      <Label htmlFor='userType-value'>
        <TextField
          className={styles.textField}
          label={callOutText}
          value={userTypeValue}
          onChange={(e) => {
            handleChange(e);
            onChange(e.target.value);
          }}
          onKeyPress={handleKeyPress}
          disabled={loading || disabled}
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
      {/* ns__custom_end unit: appSpec, comp: UserTypeCreationForm, loc: insideReturn */}
    </Form>
  );
  // ns__custom_end unit: appSpec, comp: UserTypeCreationForm, loc: beforeReturn

  // return (
  //   <Form>
  //     {/* ns__custom_start unit: appSpec, comp: UserTypeCreationForm, loc: insideReturn */}
  //     <Label htmlFor='userType-value'>
  //
  //       UserType:
  //       <InputContainer>
  //         <Input
  //           id='userType-value'
  //           type='text'
  //           onChange={handleChange}
  //           onKeyPress={handleKeyPress}
  //           value={userTypeValue}
  //           disabled={loading}

  //         />

  //         <IconButton className={styles.button} onClick={showCallout}>
  //           <HelpOutlineIcon className={styles.helpIcon} />
  //         </IconButton>
  //       </InputContainer>

  //       <Button type='submit' disabled={loading} onClick={handleSubmit}>
  //         {loading ? 'Creating UserType...' : 'Create UserType'}
  //       </Button>
  //     </Label>
  //     {showCalloutBox ? (
  //       <CalloutBox>
  //         {callOutText}{' '}
  //         <CloseIcon className={styles.closeIcon} onClick={showCallout} />
  //       </CalloutBox>
  //     ) : null}
  //   {/* ns__custom_end unit: appSpec, comp: UserTypeCreationForm, loc: insideReturn */}
  //   </Form>
  // );
}

export default compose(graphql(EXECUTE, { name: 'createUserType' }))(
  UserTypeCreationForm
);
