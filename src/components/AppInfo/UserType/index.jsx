/*
  This file has been partially generated!
  To permit updates to the generated portions of this code in the future,
  please follow all rules at https://bit.ly/nsFrontEndRules
 */
// ns__file unit: appInfo, comp: UserType

// ns__custom_start unit: appInfo, comp: UserType, loc: beforeImports
// ns__custom_end unit: appInfo, comp: UserType, loc: beforeImports

import React, { useState } from 'react'
import styled from 'styled-components'
import { EXECUTE } from '@nostack/no-stack'
import compose from '@shopify/react-compose'
import { graphql } from '@apollo/react-hoc'

import { InputLabel, makeStyles } from '@material-ui/core'
import {
  UPDATE_USER_TYPE_FOR_APP_INFO_ACTION_ID,
  DELETE_USER_TYPE_FOR_APP_INFO_ACTION_ID,
  TYPE_SCREEN_ID,
} from '../../../config'

import EditInstanceForm from '../../EditInstanceForm'
import DeleteInstanceMenu from '../../DeleteInstanceMenu'

import Screens from '../Screens'

// ns__custom_start unit: appInfo, comp: UserType, loc: addedImports

// ns__custom_end unit: appInfo, comp: UserType, loc: addedImports

// ns__custom_start unit: appInfo, comp: UserType, loc: styling
// add styling here
const UserTypeStyleWrapper = styled.div(
  ({ selected, isDeleting }) => `
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

  
  
`
)

const Button = styled.button`
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
`

const TitleWrapper = styled.div`
  background: #d2ecef;
  padding: 25px;
  border-radius: 10px;
  text-align: initial;
  text-transfor: capitalize;
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
`

const useStyles = makeStyles((theme) => ({
  titleLabel: {
    fontSize: '.8rem',
    textAlign: 'initial',
  },
}))

UserTypeStyleWrapper.defaultProps = {
  'data-id': 'userType__wrapper',
}

Button.defaultProps = {
  'data-id': 'userType__button',
}

TitleWrapper.defaultProps = {
  'data-id': 'userType__titleWrapper',
}

// ns__custom_end unit: appInfo, comp: UserType, loc: styling

function UserType({
  userType,
  parentId,
  selected,
  updateInstance,
  deleteInstance,
  refetchQueries,
  onSelect,
}) {
  const [userTypeValue, updateUserTypeValue] = useState(userType.value)
  const [isEditMode, updateIsEditMode] = useState(false)
  const [isSaving, updateIsSaving] = useState(false)
  const [isDeleteMode, updateIsDeleteMode] = useState(false)
  const [isDeleting, updateIsDeleting] = useState(false)

  const screenData =
    userType.children &&
    userType.children.find((child) => child.typeId === TYPE_SCREEN_ID)
  const screens = screenData ? screenData.instances : []

  // ns__custom_start unit: appInfo, comp: UserType, loc: beginning
  const styles = useStyles()
  // ns__custom_end unit: appInfo, comp: UserType, loc: beginning

  if (!selected) {
    return (
      <UserTypeStyleWrapper onClick={() => onSelect(userType.id)}>
        {userTypeValue}
      </UserTypeStyleWrapper>
    )
  }

  function handleUserTypeValueChange(e) {
    updateUserTypeValue(e.target.value)
  }

  async function handleUserTypeValueSave() {
    updateIsSaving(true)

    await updateInstance({
      variables: {
        actionId: UPDATE_USER_TYPE_FOR_APP_INFO_ACTION_ID,
        executionParameters: JSON.stringify({
          value: userTypeValue,
          instanceId: userType.id,
        }),
      },
      refetchQueries,
    })

    updateIsEditMode(false)
    updateIsSaving(false)
  }

  function handleCancelEdit() {
    updateIsEditMode(false)
  }

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
    )
  }

  async function handleDelete() {
    updateIsDeleting(true)

    try {
      await deleteInstance({
        variables: {
          actionId: DELETE_USER_TYPE_FOR_APP_INFO_ACTION_ID,
          executionParameters: JSON.stringify({
            parentInstanceId: parentId,
            instanceId: userType.id,
          }),
        },
        refetchQueries,
      })
    } catch (e) {
      updateIsDeleting(false)
    }
  }

  function handleCancelDelete() {
    updateIsDeleteMode(false)
  }

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
    )
  }

  return (
    <UserTypeStyleWrapper selected={selected}>
      {/* // ns__custom_end unit: appInfo, comp: UserType, loc: insideReturn */}
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
      {/* // ns__custom_end unit: appInfo, comp: UserType, loc: insideReturn */}

      <Screens
        screens={screens}
        userTypeId={userType.id}
        label={userTypeValue}
        refetchQueries={refetchQueries}
      />
    </UserTypeStyleWrapper>
  )
}

export default compose(
  graphql(EXECUTE, { name: 'updateInstance' }),
  graphql(EXECUTE, { name: 'deleteInstance' })
)(UserType)
