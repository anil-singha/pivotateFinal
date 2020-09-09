/*
  This file has been partially generated!
  To permit updates to the generated portions of this code in the future,
  please follow all rules at https://bit.ly/nsFrontEndRules
 */
// ns__file unit: appSpec, comp: UserType

// ns__custom_start unit: appSpec, comp: UserType, loc: beforeImports
// ns__custom_end unit: appSpec, comp: UserType, loc: beforeImports

// ns__start_section imports
import React, { useState } from 'react';
import styled from 'styled-components';
import { EXECUTE } from '@nostack/no-stack';
import compose from '@shopify/react-compose';
import { graphql } from '@apollo/react-hoc';

import PropTypes from 'prop-types';
import {
  UPDATE_USER_TYPE_FOR_APP_SPEC_ACTION_ID,
  DELETE_USER_TYPE_FOR_APP_SPEC_ACTION_ID,
  TYPE_SCREEN_ID,
} from '../../../config';

import EditInstanceForm from '../../EditInstanceForm';
import DeleteInstanceMenu from '../../DeleteInstanceMenu';

import Screens from '../Screens';

// ns__custom_start unit: appSpec, comp: UserType, loc: addedImports
// <!-- prettier-ignore-start -->
import { InputLabel, makeStyles } from '@material-ui/core';
// <!-- prettier-ignore-end -->
// ns__custom_end unit: appSpec, comp: UserType, loc: addedImports
// ns__end_section imports

// ns__start_section stylingSection
const UserTypeStyleWrapper = styled.div(
  ({ selected, isDeleting }) => `
  // ns__custom_start unit: appSpec, comp: UserType, loc: styling
  // add styling here
  margin: 2rem 0 2rem 1rem;
  
  padding: ${selected ? '12px' : '1.5em'};
  
  border-radius: 10px;
  border: 1px solid black;
  background-color: ${
    (isDeleting && 'tomato') || (selected && 'white') || '#D2ECEF'
  };
  cursor: ${selected ? 'auto' : 'pointer'};
  position: relative;
  width: inherit; 

  // ns__custom_end unit: appSpec, comp: UserType, loc: styling
`
);
// ns__end_section stylingSection

// ns__start_section button
const Button = styled.button`
  // ns__custom_start unit: appSpec, comp: UserType, loc: buttonStyling
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.25rem;
  padding: 0;
  color: #bbbbbb;
  transition: color 0.5s ease;
  &:hover {
    color: ${(props) => props.hoverColor || '#000000'};
  }
  // ns__custom_end unit: appSpec, comp: UserType, loc: buttonStyling
`;
// ns__end_section button

// ns__custom_start unit: appSpec, comp: UserType, loc: beforeFunction
const TitleWrapper = styled.div`
  background: #d2ecef;
  padding: 25px;
  border-radius: 10px;
  text-align: initial;
  text-transfor: capitalize;
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
`;

const useStyles = makeStyles((theme) => ({
  titleLabel: {
    fontSize: '.8rem',
    textAlign: 'initial',
  },
}));

UserTypeStyleWrapper.defaultProps = {
  'data-id': 'userType__wrapper',
};

Button.defaultProps = {
  'data-id': 'userType__button',
};

TitleWrapper.defaultProps = {
  'data-id': 'userType__titleWrapper',
};
// ns__custom_end unit: appSpec, comp: UserType, loc: beforeFunction

// ns__start_section function
function UserType({
  userType,
  parentId,
  selected,
  updateInstance,
  deleteInstance,
  refetchQueries,
  onSelect,
  // ns__custom_start unit: appSpec, comp: UserType, loc: addedProps
  // ns__custom_end unit: appSpec, comp: UserType, loc: addedProps
}) {
  const [userTypeValue, updateUserTypeValue] = useState(userType.value);
  const [isEditMode, updateIsEditMode] = useState(false);
  const [isSaving, updateIsSaving] = useState(false);
  const [isDeleteMode, updateIsDeleteMode] = useState(false);
  const [isDeleting, updateIsDeleting] = useState(false);
  // ns__custom_start unit: appSpec, comp: UserType, loc: beginning

  const styles = useStyles();
  // ns__custom_end unit: appSpec, comp: UserType, loc: beginning

  const screenData =
    userType.children &&
    userType.children.find((child) => child.typeId === TYPE_SCREEN_ID);
  const screens = screenData ? screenData.instances : [];
  // ns__custom_start unit: appSpec, comp: UserType, loc: beforeReturn
  // ns__custom_end unit: appSpec, comp: UserType, loc: beforeReturn

  // ns__start_section notSelected
  if (!selected) {
    return (
      <UserTypeStyleWrapper onClick={() => onSelect(userType.id)}>
        {userTypeValue}
      </UserTypeStyleWrapper>
    );
  }
  // ns__end_section notSelected

  // ns__start_section change
  function handleUserTypeValueChange(e) {
    updateUserTypeValue(e.target.value);
  }
  // ns__end_section change

  // ns__start_section save
  async function handleUserTypeValueSave() {
    updateIsSaving(true);

    await updateInstance({
      variables: {
        actionId: UPDATE_USER_TYPE_FOR_APP_SPEC_ACTION_ID,
        executionParameters: JSON.stringify({
          value: userTypeValue,
          instanceId: userType.id,
        }),
      },
      refetchQueries,
    });

    updateIsEditMode(false);
    updateIsSaving(false);
  }
  // ns__end_section save

  // ns__start_section cancel
  function handleCancelEdit() {
    updateIsEditMode(false);
  }
  // ns__end_section cancel

  // ns__start_section isEdit
  if (isEditMode) {
    return (
      <UserTypeStyleWrapper>
        <EditInstanceForm
          id={userType.id}
          label='UserType Value:'
          value={userTypeValue}
          onChange={handleUserTypeValueChange}
          onSave={handleUserTypeValueSave}
          onCancel={handleCancelEdit}
          disabled={isSaving}
        />
      </UserTypeStyleWrapper>
    );
  }
  // ns__end_section isEdit

  // ns__start_section delete
  async function handleDelete() {
    updateIsDeleting(true);

    try {
      await deleteInstance({
        variables: {
          actionId: DELETE_USER_TYPE_FOR_APP_SPEC_ACTION_ID,
          executionParameters: JSON.stringify({
            parentInstanceId: parentId,
            instanceId: userType.id,
          }),
        },
        refetchQueries,
      });
    } catch (e) {
      updateIsDeleting(false);
    }
  }
  // ns__end_section delete

  // ns__start_section cancelDelete
  function handleCancelDelete() {
    updateIsDeleteMode(false);
  }
  // ns__end_section cancelDelete

  // ns__start_section isDelete
  if (isDeleteMode) {
    return (
      <UserTypeStyleWrapper selected={selected} isDeleting={isDeleting}>
        {userTypeValue}
        <DeleteInstanceMenu
          onDelete={handleDelete}
          onCancel={handleCancelDelete}
          disabled={isDeleting}
        />
      </UserTypeStyleWrapper>
    );
  }
  // ns__end_section isDelete

  // ns__start_section functionReturn
  return (
    <UserTypeStyleWrapper selected={selected}>
      {/* ns__start_replacement instanceValue */}

      <InputLabel className={styles.titleLabel}>User Type</InputLabel>
      <TitleWrapper>
        {userTypeValue}
        <div>
          <Button type='button' onClick={() => updateIsEditMode(true)}>
            &#9998;
          </Button>
          <Button type='button' onClick={() => updateIsDeleteMode(true)}>
            &#128465;
          </Button>
        </div>
      </TitleWrapper>

      {/* ns__end_replacement instanceValue */}

      {/* ns__start_replacement childrenList */}

      <Screens
        screens={screens}
        userTypeId={userType.id}
        label={userTypeValue}
        refetchQueries={refetchQueries}
      />

      {/* ns__end_replacement childrenList */}

      {/* ns__custom_start unit: appSpec, comp: UserType, loc: renderEnding */}
      {/* ns__custom_end unit: appSpec, comp: UserType, loc: renderEnding */}
    </UserTypeStyleWrapper>
  );
  // ns__end_section functionReturn
}

// ns__end_section function

// ns__start_section  compose
export default compose(
  graphql(EXECUTE, { name: 'updateInstance' }),
  graphql(EXECUTE, { name: 'deleteInstance' })
)(UserType);
// ns__end_section  compose

// ns__start_section propTypes
UserType.propTypes = {
  parentId: PropTypes.string,
  selected: PropTypes.bool,
  updateInstance: PropTypes.func,
  deleteInstance: PropTypes.func,
  refetchQueries: PropTypes.array,
  onSelect: PropTypes.func,
  userType: PropTypes.shape({
    children: PropTypes.array,
    id: PropTypes.string,
  }),
  // ns__custom_start unit: appSpec, comp: UserType, loc: addedPropTypes
  // ns__custom_end unit: appSpec, comp: UserType, loc: addedPropTypes
};
// ns__end_section propTypes
