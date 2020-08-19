/*
  This file has been partially generated!
  To permit updates to the generated portions of this code in the future,
  please follow all rules at https://bit.ly/nsFrontEndRules
 */
// ns__file unit: appSpec, comp: Description

// ns__custom_start unit: appSpec, comp: Description, loc: beforeImports
// ns__custom_end unit: appSpec, comp: Description, loc: beforeImports

// ns__start_section imports
import React, { useState } from 'react';
import styled from 'styled-components';
import { EXECUTE } from '@nostack/no-stack';
import compose from '@shopify/react-compose';
import { graphql } from '@apollo/react-hoc';

import PropTypes from 'prop-types';
import {
  UPDATE_DESCRIPTION_FOR_APP_SPEC_ACTION_ID,
  DELETE_DESCRIPTION_FOR_APP_SPEC_ACTION_ID,
} from '../../../config';

import EditInstanceForm from '../../EditInstanceForm';
import DeleteInstanceMenu from '../../DeleteInstanceMenu';

// ns__custom_start unit: appSpec, comp: Description, loc: addedImports
// ns__custom_end unit: appSpec, comp: Description, loc: addedImports
// ns__end_section imports

// ns__start_section stylingSection
const DescriptionStyleWrapper = styled.div(
  ({ selected, isDeleting }) => `
  // ns__custom_start unit: appSpec, comp: Description, loc: styling
  // add styling here
  margin: 2em 1em;
  padding: 1.5em;
  border: ${selected ? '1px solid aquamarine' : '1px solid white'};
  border-radius: 10px;
  box-shadow: 5px 5px 10px #888888;
  background-color: ${isDeleting && 'tomato'};
  cursor: ${selected ? 'auto' : 'pointer'};

  &:hover {
    border: 1px solid aquamarine;
  }
  // ns__custom_end unit: appSpec, comp: Description, loc: styling
`
);
// ns__end_section stylingSection

// ns__start_section button
const Button = styled.button`
  // ns__custom_start unit: appSpec, comp: Description, loc: buttonStyling
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
  // ns__custom_end unit: appSpec, comp: Description, loc: buttonStyling
`;
// ns__end_section button

// ns__custom_start unit: appSpec, comp: Description, loc: beforeFunction
// ns__custom_end unit: appSpec, comp: Description, loc: beforeFunction

// ns__start_section function
function Description({
  description,
  parentId,
  selected,
  updateInstance,
  deleteInstance,
  refetchQueries,
  onSelect,
  // ns__custom_start unit: appSpec, comp: Description, loc: addedProps
  // ns__custom_end unit: appSpec, comp: Description, loc: addedProps
}) {
  const [descriptionValue, updateDescriptionValue] = useState(
    description.value
  );
  const [isEditMode, updateIsEditMode] = useState(false);
  const [isSaving, updateIsSaving] = useState(false);
  const [isDeleteMode, updateIsDeleteMode] = useState(false);
  const [isDeleting, updateIsDeleting] = useState(false);
  // ns__custom_start unit: appSpec, comp: Description, loc: beginning
  // ns__custom_end unit: appSpec, comp: Description, loc: beginning

  // ns__custom_start unit: appSpec, comp: Description, loc: beforeReturn
  // ns__custom_end unit: appSpec, comp: Description, loc: beforeReturn

  // ns__start_section notSelected
  if (!selected) {
    return (
      <DescriptionStyleWrapper onClick={() => onSelect(description.id)}>
        {descriptionValue}
      </DescriptionStyleWrapper>
    );
  }
  // ns__end_section notSelected

  // ns__start_section change
  function handleDescriptionValueChange(e) {
    updateDescriptionValue(e.target.value);
  }
  // ns__end_section change

  // ns__start_section save
  async function handleDescriptionValueSave() {
    updateIsSaving(true);

    await updateInstance({
      variables: {
        actionId: UPDATE_DESCRIPTION_FOR_APP_SPEC_ACTION_ID,
        executionParameters: JSON.stringify({
          value: descriptionValue,
          instanceId: description.id,
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
      <DescriptionStyleWrapper>
        <EditInstanceForm
          id={description.id}
          label='Description Value:'
          value={descriptionValue}
          onChange={handleDescriptionValueChange}
          onSave={handleDescriptionValueSave}
          onCancel={handleCancelEdit}
          disabled={isSaving}
        />
      </DescriptionStyleWrapper>
    );
  }
  // ns__end_section isEdit

  // ns__start_section delete
  async function handleDelete() {
    updateIsDeleting(true);

    try {
      await deleteInstance({
        variables: {
          actionId: DELETE_DESCRIPTION_FOR_APP_SPEC_ACTION_ID,
          executionParameters: JSON.stringify({
            parentInstanceId: parentId,
            instanceId: description.id,
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
      <DescriptionStyleWrapper selected={selected} isDeleting={isDeleting}>
        {descriptionValue}
        <DeleteInstanceMenu
          onDelete={handleDelete}
          onCancel={handleCancelDelete}
          disabled={isDeleting}
        />
      </DescriptionStyleWrapper>
    );
  }
  // ns__end_section isDelete

  // ns__start_section functionReturn
  return (
    <DescriptionStyleWrapper selected={selected}>
      {descriptionValue}
      <Button type='button' onClick={() => updateIsEditMode(true)}>
        &#9998;
      </Button>
      <Button type='button' onClick={() => updateIsDeleteMode(true)}>
        &#128465;
      </Button>

      {/* ns__custom_start unit: appSpec, comp: Description, loc: renderEnding */}
      {/* ns__custom_end unit: appSpec, comp: Description, loc: renderEnding */}
    </DescriptionStyleWrapper>
  );
  // ns__end_section functionReturn
}

// ns__end_section function

// ns__start_section  compose
export default compose(
  graphql(EXECUTE, { name: 'updateInstance' }),
  graphql(EXECUTE, { name: 'deleteInstance' })
)(Description);
// ns__end_section  compose

// ns__start_section propTypes
Description.propTypes = {
  parentId: PropTypes.string,
  selected: PropTypes.bool,
  updateInstance: PropTypes.func,
  deleteInstance: PropTypes.func,
  refetchQueries: PropTypes.array,
  onSelect: PropTypes.func,
  description: PropTypes.shape({
    children: PropTypes.array,
    id: PropTypes.string,
  }),
  // ns__custom_start unit: appSpec, comp: Description, loc: addedPropTypes
  // ns__custom_end unit: appSpec, comp: Description, loc: addedPropTypes
};
// ns__end_section propTypes
