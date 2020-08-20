/*
  This file has been partially generated!
  To permit updates to the generated portions of this code in the future,
  please follow all rules at https://bit.ly/nsFrontEndRules
 */
// ns__file unit: appSpec, comp: Screen

// ns__custom_start unit: appSpec, comp: Screen, loc: beforeImports
// ns__custom_end unit: appSpec, comp: Screen, loc: beforeImports

// ns__start_section imports
import React, { useState } from 'react';
import styled from 'styled-components';
import { EXECUTE } from '@nostack/no-stack';
import compose from '@shopify/react-compose';
import { graphql } from '@apollo/react-hoc';

import PropTypes from 'prop-types';
import {
  UPDATE_SCREEN_FOR_APP_SPEC_ACTION_ID,
  DELETE_SCREEN_FOR_APP_SPEC_ACTION_ID,
  TYPE_INFO_TYPE_ID,
} from '../../../config';

import EditInstanceForm from '../../EditInstanceForm';
import DeleteInstanceMenu from '../../DeleteInstanceMenu';

import InfoTypes from '../InfoTypes';

// ns__custom_start unit: appSpec, comp: Screen, loc: addedImports
// <!-- prettier-ignore-start -->
import { InputLabel, makeStyles } from '@material-ui/core';
// <!-- prettier-ignore-end -->
// ns__custom_end unit: appSpec, comp: Screen, loc: addedImports
// ns__end_section imports

// ns__start_section stylingSection
const ScreenStyleWrapper = styled.div(
  ({ selected, isDeleting }) => `
  // ns__custom_start unit: appSpec, comp: Screen, loc: styling
  // add styling here
  margin: 2rem 0 .5rem 1rem;
  padding: ${selected ? '0' : '1.5rem'};
  
  border-radius: 10px;
  
  background-color: ${
    (isDeleting && 'tomato') || (selected && 'white') || '#D2ECEF'
  };
  cursor: ${selected ? 'auto' : 'pointer'};
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: -31px;
    left: -31px;
    border-left: 2px dashed #a2a5b5;
    width: 1px;
    height: ${(selected && '109%') || '141%'}; 
   
  }

 
  &:after {
    content: "";
    position: absolute;
    border-top: 2px dashed #a2a5b5;
    top: ${(selected && '57px') || '44px'};
    left: -30px;
    width: ${(selected && '30px') || '29px'}; 
  }

  &:last-child:before {
    top: -33px ;
    height: ${(selected && '90px') || '77px'}; 
  }
  // ns__custom_end unit: appSpec, comp: Screen, loc: styling
`
);
// ns__end_section stylingSection

// ns__start_section button
const Button = styled.button`
  // ns__custom_start unit: appSpec, comp: Screen, loc: buttonStyling
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
  // ns__custom_end unit: appSpec, comp: Screen, loc: buttonStyling
`;
// ns__end_section button

// ns__custom_start unit: appSpec, comp: Screen, loc: beforeFunction

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
// ns__custom_end unit: appSpec, comp: Screen, loc: beforeFunction

// ns__start_section function
function Screen({
  screen,
  parentId,
  selected,
  updateInstance,
  deleteInstance,
  refetchQueries,
  onSelect,
  // ns__custom_start unit: appSpec, comp: Screen, loc: addedProps
  // ns__custom_end unit: appSpec, comp: Screen, loc: addedProps
}) {
  const [screenValue, updateScreenValue] = useState(screen.value);
  const [isEditMode, updateIsEditMode] = useState(false);
  const [isSaving, updateIsSaving] = useState(false);
  const [isDeleteMode, updateIsDeleteMode] = useState(false);
  const [isDeleting, updateIsDeleting] = useState(false);
  // ns__custom_start unit: appSpec, comp: Screen, loc: beginning
  const styles = useStyles();
  // ns__custom_end unit: appSpec, comp: Screen, loc: beginning

  // ns__custom_start unit: appSpec, comp: Screen, loc: beforeReturn
  const infoTypeData =
    screen.children &&
    screen.children.find((child) => child.typeId === TYPE_INFO_TYPE_ID);
  const infoTypes = infoTypeData ? infoTypeData.instances : [];
  // ns__custom_end unit: appSpec, comp: Screen, loc: beforeReturn

  // ns__start_section notSelected
  if (!selected) {
    return (
      <ScreenStyleWrapper onClick={() => onSelect(screen.id)}>
        {screenValue}
      </ScreenStyleWrapper>
    );
  }
  // ns__end_section notSelected

  // ns__start_section change
  function handleScreenValueChange(e) {
    updateScreenValue(e.target.value);
  }
  // ns__end_section change

  // ns__start_section save
  async function handleScreenValueSave() {
    updateIsSaving(true);

    await updateInstance({
      variables: {
        actionId: UPDATE_SCREEN_FOR_APP_SPEC_ACTION_ID,
        executionParameters: JSON.stringify({
          value: screenValue,
          instanceId: screen.id,
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
      <ScreenStyleWrapper>
        <EditInstanceForm
          id={screen.id}
          label='Screen Value:'
          value={screenValue}
          onChange={handleScreenValueChange}
          onSave={handleScreenValueSave}
          onCancel={handleCancelEdit}
          disabled={isSaving}
        />
      </ScreenStyleWrapper>
    );
  }
  // ns__end_section isEdit

  // ns__start_section delete
  async function handleDelete() {
    updateIsDeleting(true);

    try {
      await deleteInstance({
        variables: {
          actionId: DELETE_SCREEN_FOR_APP_SPEC_ACTION_ID,
          executionParameters: JSON.stringify({
            parentInstanceId: parentId,
            instanceId: screen.id,
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
      <ScreenStyleWrapper selected={selected} isDeleting={isDeleting}>
        {screenValue}
        <DeleteInstanceMenu
          onDelete={handleDelete}
          onCancel={handleCancelDelete}
          disabled={isDeleting}
        />
      </ScreenStyleWrapper>
    );
  }
  // ns__end_section isDelete

  // ns__start_section functionReturn
  return (
    <ScreenStyleWrapper selected={selected}>
      {/* ns__start_replacement instanceValue */}

      <InputLabel className={styles.titleLabel}>Screen</InputLabel>
      <TitleWrapper>
        {screenValue}
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

      <InfoTypes
        infoTypes={infoTypes}
        screenId={screen.id}
        label={screenValue}
        refetchQueries={refetchQueries}
      />

      {/* ns__end_replacement childrenList */}

      {/* ns__custom_start unit: appSpec, comp: Screen, loc: renderEnding */}
      {/* ns__custom_end unit: appSpec, comp: Screen, loc: renderEnding */}
    </ScreenStyleWrapper>
  );
  // ns__end_section functionReturn
}

// ns__end_section function

// ns__start_section  compose
export default compose(
  graphql(EXECUTE, { name: 'updateInstance' }),
  graphql(EXECUTE, { name: 'deleteInstance' })
)(Screen);
// ns__end_section  compose

// ns__start_section propTypes
Screen.propTypes = {
  parentId: PropTypes.string,
  selected: PropTypes.bool,
  updateInstance: PropTypes.func,
  deleteInstance: PropTypes.func,
  refetchQueries: PropTypes.array,
  onSelect: PropTypes.func,
  screen: PropTypes.shape({
    children: PropTypes.array,
    id: PropTypes.string,
  }),
  // ns__custom_start unit: appSpec, comp: Screen, loc: addedPropTypes
  // ns__custom_end unit: appSpec, comp: Screen, loc: addedPropTypes
};
// ns__end_section propTypes
