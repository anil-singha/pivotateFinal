/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { graphql } from '@apollo/react-hoc';
import styled, { keyframes } from 'styled-components';
import { EXECUTE } from '@nostack/no-stack';
import compose from '@shopify/react-compose';

// ns__custom_start unit: appSpec, comp: Sub_Info_TypeCreationForm, loc: addedImports
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles, TextField, InputAdornment } from '@material-ui/core';
import {
  CREATE_INFO_TYPE_FOR_APP_SPEC_ACTION_ID,
  // eslint-disable-next-line comma-dangle
  ADD_HAS_PARENT_FOR_PARENT_ACTION_ID,
} from '../../config';

// ns__custom_end unit: appSpec, comp: Sub_Info_TypeCreationForm, loc: addedImports

// ns__custom_start unit: appSpec, comp: Sub_Info_TypeCreationForm, loc: styling
// change styling here
const Form = styled.div`
  margin: 2em;
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
    left: 81%;
    
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

// ns__custom_end unit: appSpec, comp: Sub_Info_TypeCreationForm, loc: styling

const SubInfoTypeCreationForm = ({
  childId,
  parentId,
  createSubInfoType,
  refetchQueries,
  saveInstance,
  // ns__custom_start unit: appSpec, comp: Sub_Info_Type_Creation, loc: addedPropsForCreationForm
  validateSubInfoTypes,
  label,
  disabled,
  subInfoTypeValueCount,
  textLabel,
  // ns__custom_end unit: appSpec, comp: Sub_Info_Type_Creation, loc: addedPropsForCreationForm
}) => {
  const [subInfoValue, setSubInfoValue] = useState('');
  const [loading, updateLoading] = useState(false);
  const styles = useStyles();
  const [callout, setCallout] = useState(false);
  const showCalloutBox = callout || validateSubInfoTypes === 0;

  // ns__custom_start unit: appSpec, comp: Sub_Info_Type_Creation, loc: beginning
  let callOutText = '';

  if (subInfoTypeValueCount < 5) {
    callOutText = textLabel;
  } else {
    callOutText = `What is the sub Info Type ${label ? `for ${label}` : ''}`;
  }
  // ns__custom_end unit: appSpec, comp: Sub_Info_Type_Creation, loc: beginning
  function handleChange(e) {
    setSubInfoValue(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!subInfoValue) {
      return;
    }

    updateLoading(true);

    try {
      // const newInfoTypeData = JSON.parse(createSubInfoResponse.data.Execute);
      setSubInfoValue('');
      updateLoading(false);
      const createInfoTypeResponse = await createSubInfoType({
        variables: {
          actionId: CREATE_INFO_TYPE_FOR_APP_SPEC_ACTION_ID,
          executionParameters: JSON.stringify({
            parentInstanceId: parentId,
            value: subInfoValue,
          }),
          unrestricted: false,
        },
        refetchQueries,
      });

      const newInfoTypeData = JSON.parse(createInfoTypeResponse.data.Execute);

      await saveInstance({
        variables: {
          actionId: ADD_HAS_PARENT_FOR_PARENT_ACTION_ID,
          executionParameters: JSON.stringify({
            childInstanceId: childId,
            parentInstanceId: newInfoTypeData.instanceId,
          }),
          unrestricted: false,
        },
        refetchQueries,
      });
    } catch (err) {
      // console.log(err);
    }
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

  // ns__custom_start unit: appSpec, comp: Sub_Info_Type_Creation, loc: beforeReturn*/
  const showCallout = () => {
    setCallout(!callout);
  };
  return (
    <Form>
      {/* // ns__custom_start unit: appSpec, comp: Sub_Info_Type_Creation, loc: insideReturn */}
      <Label htmlFor='screen-value'>
        <TextField
          className={styles.textField}
          label={`New Sub Info Type`}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          value={subInfoValue}
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
      {/* // ns__custom_end unit: appSpec, comp: Sub_Info_Type_Creation, loc: insideReturn */}
    </Form>
  );
  // ns__custom_end unit: appSpec, comp: Sub_Info_Type_Creation, loc: beforeReturn*/

  // return (
  //   <Form>
  //     {/* // ns__custom_start unit: appSpec, comp: Sub_Info_Type_Creation, loc: insideReturn */}
  //     <Label htmlFor='screen-value'>
  //       Sub Info Type:
  //       <InputContainer>
  //         <Input
  //           type='text'
  //           onChange={handleChange}
  //           onKeyPress={handleKeyPress}
  //           value={subInfoValue}
  //           disabled={loading}
  //         />

  //         <IconButton className={styles.button} onClick={showCallout}>
  //           <HelpOutlineIcon className={styles.helpIcon} />
  //         </IconButton>
  //       </InputContainer>
  //       <Button type='submit' disabled={loading} onClick={handleSubmit}>
  //         {loading ? 'Creating Sub Info Type...' : 'Create Sub Info Type'}
  //       </Button>
  //     </Label>
  //     {showCalloutBox ? (
  //       <CalloutBox>
  //         {callOutText}{' '}
  //         <CloseIcon className={styles.closeIcon} onClick={showCallout} />
  //       </CalloutBox>
  //     ) : null}
  //     {/* // ns__custom_end unit: appSpec, comp: Sub_Info_Type_Creation, loc: insideReturn */}
  //   </Form>
  // );
};

export default compose(
  graphql(EXECUTE, { name: 'createSubInfoType' }),
  graphql(EXECUTE, { name: 'saveInstance' })
)(SubInfoTypeCreationForm);
