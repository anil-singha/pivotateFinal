import React, { useState } from 'react';
import styled from 'styled-components';
import { EXECUTE } from '@nostack/no-stack';
import compose from '@shopify/react-compose';
import { graphql } from '@apollo/react-hoc';

import {
  UPDATE_INFO_TYPE_FOR_APP_SPEC_ACTION_ID,
  DELETE_INFO_TYPE_FOR_APP_SPEC_ACTION_ID,
  ADD_HAS_PARENT_FOR_PARENT_ACTION_ID,
  CREATE_INFO_TYPE_FOR_APP_SPEC_ACTION_ID,
} from '../../../config';

import EditInstanceForm from '../../EditInstanceForm';
import DeleteInstanceMenu from '../../DeleteInstanceMenu';

// add styling here
const InfoTypeStyleWrapper = styled.div(
  ({ selected, isDeleting }) => `
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
`
);

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1em;
  padding: 0;
  color: #bbbbbb;
  transition: color 0.5s ease;
  &:hover {
    color: ${(props) => props.hoverColor || '#000000'};
  }
`;

function InfoType({
  infoType,
  parentId,
  createInfoType,
  hasParentId,
  selected,
  updateInstance,
  deleteInstance,
  saveInstance,
  refetchQueries,
  onSelect,
  value,
}) {
  const infoTypeId = useState(value.id);

  const [infoTypeValue, updateInfoTypeValue] = useState(value.value);

  const infoTypeChildren = useState(infoType._children) || [];

  const [isEditMode, updateIsEditMode] = useState(false);
  const [isSaving, updateIsSaving] = useState(false);
  const [isDeleteMode, updateIsDeleteMode] = useState(false);
  const [isDeleting, updateIsDeleting] = useState(false);

  console.log('infoTypeId', infoTypeId)
  console.log('parentIdparentId, ', parentId)
  // if (!selected) {
  //   return (
  //     <InfoTypeStyleWrapper onClick={() => onSelect(infoType.id)}>
  //       { infoTypeValue }
  //     </InfoTypeStyleWrapper>
  //   );k
  // }

  function handleInfoTypeValueChange(e) {
    updateInfoTypeValue(e.target.value);
  }

  async function handleInfoTypeValueSave() {
    updateIsSaving(true);
    await updateInstance({
      variables: {
        actionId: UPDATE_INFO_TYPE_FOR_APP_SPEC_ACTION_ID,
        executionParameters: JSON.stringify({
          value: infoTypeValue,
          instanceId: infoTypeId[0],
        }),
      },
      refetchQueries,
    });

    updateIsEditMode(false);
    updateIsSaving(false);
  }

  function handleCancelEdit() {
    updateIsEditMode(false);
  }

  if (isEditMode) {
    return (
      <InfoTypeStyleWrapper>
        <EditInstanceForm
          id={infoType.id}
          label="InfoType Value:"
          value={infoTypeValue}
          onChange={handleInfoTypeValueChange}
          onSave={handleInfoTypeValueSave}
          onCancel={handleCancelEdit}
          disabled={isSaving}
        />
      </InfoTypeStyleWrapper>
    );
  }

  async function handleDelete() {
    updateIsDeleting(true);

    try {
      await deleteInstance({
        variables: {
          actionId: DELETE_INFO_TYPE_FOR_APP_SPEC_ACTION_ID,
          executionParameters: JSON.stringify({
            parentInstanceId: parentId,
            instanceId: infoTypeId[0],
          }),
        },
        refetchQueries,
      });
    } catch (e) {
      updateIsDeleting(false);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!infoTypeValue) {
      return;
    }

    try {
      const createInfoTypeResponse = await createInfoType({
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

      const newInfoTypeData = JSON.parse(createInfoTypeResponse.data.Execute);
      console.log('newInfoTypeData.instanceId', newInfoTypeData.instanceId)
      const createChildInfoTypeResponse = await saveInstance({
        variables: {
          actionId: ADD_HAS_PARENT_FOR_PARENT_ACTION_ID,
          executionParameters: JSON.stringify({
            childInstanceId: infoType.id, // Experience
            parentInstanceId: newInfoTypeData.instanceId, // Year
          }),
          unrestricted: false,
        },
        refetchQueries,
      });
    } catch (e) {
      console.log(e);
      updateIsDeleting(false);
    }
  }

  function handleCancelDelete() {
    updateIsDeleteMode(false);
  }
  function handleChange(e) {
    updateInfoTypeValue(e.target.value);
  }
  function handleKeyPress(e) {
    if (e.charCode === 13) {
      handleSubmit(e);
    }
  }

  if (isDeleteMode) {
    return (
      <InfoTypeStyleWrapper selected={selected} isDeleting={isDeleting}>
        {infoTypeValue}
        <DeleteInstanceMenu
          onDelete={handleDelete}
          onCancel={handleCancelDelete}
          disabled={isDeleting}
        />
      </InfoTypeStyleWrapper>
    );
  }

  return (
    <div className=" ">
      <span className="flex">
        <input
          type="checkbox"
          name="checkbox"
          className="checkBoxActive"
          id={value.id}
          value="value"
        />

        <label htmlFor={value.id}>
          {' '}
          <small className="grey--text"> Sub Info Type: </small> 
          {' '}
          {value.value}
          {' '}
        </label>
        <span>
          <a
            type="a"
            onClick={() => updateIsEditMode(true)}
            style={{ display: 'inline-block' }}
          >
            &#9998;
          </a>
          <a
            type="a"
            style={{ display: 'inline-block' }}
            onClick={() => updateIsDeleteMode(true)}
          >
            &#128465;
          </a>
        </span>
      </span>
    </div>
  );
}

export default compose(
  graphql(EXECUTE, { name: 'createInfoType' }),
  graphql(EXECUTE, { name: 'updateInstance' }),
  graphql(EXECUTE, { name: 'deleteInstance' }),
  graphql(EXECUTE, { name: 'saveInstance' })
)(InfoType);
