/*
  This file has been partially generated!
  To permit updates to the generated portions of this code in the future,
  please follow all rules at https://bit.ly/nsFrontEndRules
 */

// ns__file unit: appSpec, comp: App

// ns__custom_start unit: appSpec, comp: App, loc: beforeImports
// ns__custom_end unit: appSpec, comp: App, loc: beforeImports

// ns__start_section imports
import React, { useState } from 'react';
import styled from 'styled-components';
import { EXECUTE } from '@nostack/no-stack';
import compose from '@shopify/react-compose';
import { graphql } from '@apollo/react-hoc';

import PropTypes from 'prop-types';
import {
  UPDATE_APP_FOR_APP_SPEC_ACTION_ID,
  DELETE_APP_FOR_APP_SPEC_ACTION_ID,
  TYPE_USER_TYPE_ID,
  TYPE_DESCRIPTION_ID,
} from '../../../config';

import EditInstanceForm from '../../EditInstanceForm';
import DeleteInstanceMenu from '../../DeleteInstanceMenu';

import UserTypes from '../UserTypes';
import Descriptions from '../Descriptions';

// ns__custom_start unit: appSpec, comp: App, loc: addedImports
import { Container } from '@material-ui/core';
import AppTitleAccordion from '../../../custom/AppTitleAccordion';
// ns__custom_end unit: appSpec, comp: App, loc: addedImports
// ns__end_section imports

// ns__start_section stylingSection
const AppStyleWrapper = styled.div(
  ({ selected, isDeleting }) => `
  // ns__custom_start unit: appSpec, comp: App, loc: styling
  margin: 2em 1em;
  padding: 1.5em;
  
  border-radius: 10px;
  
  background-color: ${
    (isDeleting && 'tomato') || (selected && 'white') || '#D2ECEF'
  };
  cursor: ${selected ? 'auto' : 'pointer'};
  width: 50%;
  // ns__custom_end unit: appSpec, comp: App, loc: styling
`
);

const CustomWrapper = styled(Container) `

`;
// ns__end_section stylingSection

// ns__start_section button
const Button = styled.button`
  // ns__custom_start unit: appSpec, comp: App, loc: buttonStyling
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
  // ns__custom_end unit: appSpec, comp: App, loc: buttonStyling
`;
// ns__end_section button

// ns__custom_start unit: appSpec, comp: App, loc: beforeFunction

AppStyleWrapper.defaultProps = {
  'data-id': 'App__wrapper',
};

Button.defaultProps = {
  'data-id': 'App__button',
};
// ns__custom_end unit: appSpec, comp: App, loc: beforeFunction

// ns__start_section function
function App({
  app,
  parentId,
  selected,
  updateInstance,
  deleteInstance,
  refetchQueries,
  onSelect,
  // ns__custom_start unit: appSpec, comp: App, loc: addedProps
  // ns__custom_end unit: appSpec, comp: App, loc: addedProps
}) {
  const [appValue, updateAppValue] = useState(app.value);
  const [isEditMode, updateIsEditMode] = useState(false);
  const [isSaving, updateIsSaving] = useState(false);
  const [isDeleteMode, updateIsDeleteMode] = useState(false);
  const [isDeleting, updateIsDeleting] = useState(false);

  // ns__custom_start unit: appSpec, comp: App, loc: beginning
  const userTypeData =
    app.children &&
    app.children.find((child) => child.typeId === TYPE_USER_TYPE_ID);
  const userTypes = userTypeData ? userTypeData.instances : [];
  const descriptionData =
    app.children &&
    app.children.find((child) => child.typeId === TYPE_DESCRIPTION_ID);
  const descriptions = descriptionData ? descriptionData.instances : [];
  // ns__custom_end unit: appSpec, comp: App, loc: beginning

  // ns__custom_start unit: appSpec, comp: App, loc: beforeReturn
  // ns__custom_end unit: appSpec, comp: App, loc: beforeReturn

  // ns__start_section notSelected
  if (!selected) {
    return (
      <AppStyleWrapper onClick={() => onSelect(app.id)}>
        {appValue}
      </AppStyleWrapper>
    );
  }
  // ns__end_section notSelected

  // ns__start_section change
  function handleAppValueChange(e) {
    updateAppValue(e.target.value);
  }

  // ns__end_section change

  // ns__start_section save
  async function handleAppValueSave() {
    updateIsSaving(true);

    await updateInstance({
      variables: {
        actionId: UPDATE_APP_FOR_APP_SPEC_ACTION_ID,
        executionParameters: JSON.stringify({
          value: appValue,
          instanceId: app.id,
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

  // ns__start_replacement isEdit
  if (isEditMode) {
    return (
      <AppStyleWrapper>
        <EditInstanceForm
          id={app.id}
          label={`What's the preferred title ${
            appValue ? `for ${appValue}?` : `off you App?`
          }`}
          value={appValue}
          onChange={handleAppValueChange}
          onSave={handleAppValueSave}
          onCancel={handleCancelEdit}
          disabled={isSaving}
        />
      </AppStyleWrapper>
    );
  }
  // ns__end_replacement isEdit

  // ns__start_section delete
  async function handleDelete() {
    updateIsDeleting(true);

    try {
      await deleteInstance({
        variables: {
          actionId: DELETE_APP_FOR_APP_SPEC_ACTION_ID,
          executionParameters: JSON.stringify({
            parentInstanceId: parentId,
            instanceId: app.id,
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
      <AppStyleWrapper selected={selected} isDeleting={isDeleting}>
        {appValue}
        <DeleteInstanceMenu
          onDelete={handleDelete}
          onCancel={handleCancelDelete}
          disabled={isDeleting}
        />
      </AppStyleWrapper>
    );
  }
  // ns__end_section isDelete

  // ns__start_replacement functionReturn
  return (
    <CustomWrapper maxWidth="sm">
      <AppTitleAccordion
        title={appValue}
        description={descriptions[0] && descriptions[0].value}
      />
      <Button type='button' onClick={() => updateIsEditMode(true)}>
        &#9998;
      </Button>
      <Button type='button' onClick={() => updateIsDeleteMode(true)}>
        &#128465;
      </Button>

      <UserTypes
        userTypes={userTypes}
        appId={app.id}
        label={appValue}
        refetchQueries={refetchQueries}
      />
      {!descriptions.length ? (
        <Descriptions
          descriptions={descriptions}
          appId={app.id}
          label={appValue}
          refetchQueries={refetchQueries}
        />
      ) : null}

      {/* ns__custom_start unit: appSpec, comp: App, loc: renderEnding */}
      {/* ns__custom_end unit: appSpec, comp: App, loc: renderEnding */}

    </CustomWrapper>
    
  );
  // ns__end_replacement functionReturn
}
// ns__end_section function

// ns__start_section  compose
export default compose(
  graphql(EXECUTE, { name: 'updateInstance' }),
  graphql(EXECUTE, { name: 'deleteInstance' })
)(App);
// ns__end_section  compose

// ns__start_section propTypes
App.propTypes = {
  parentId: PropTypes.string,
  selected: PropTypes.bool,
  updateInstance: PropTypes.func,
  deleteInstance: PropTypes.func,
  refetchQueries: PropTypes.array,
  app: PropTypes.shape({
    children: PropTypes.array,
    id: PropTypes.string,
  }),
  // ns__custom_start unit: appSpec, comp: App, loc: addedPropTypes
  // ns__custom_end unit: appSpec, comp: App, loc: addedPropTypes
};
// ns__end_section propTypes
