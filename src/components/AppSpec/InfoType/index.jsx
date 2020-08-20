/*
  This file has been partially generated!
  To permit updates to the generated portions of this code in the future,
  please follow all rules at https://bit.ly/nsFrontEndRules
 */
// ns__file unit: appSpec, comp: InfoType

// ns__custom_start unit: appSpec, comp: InfoType, loc: beforeImports

// ns__custom_end unit: appSpec, comp: InfoType, loc: beforeImports

// ns__start_section imports
import React, { useState } from 'react';
import styled from 'styled-components';
import { EXECUTE } from '@nostack/no-stack';
import compose from '@shopify/react-compose';
import { graphql } from '@apollo/react-hoc';

import PropTypes from 'prop-types';
import {
  UPDATE_INFO_TYPE_FOR_APP_SPEC_ACTION_ID,
  DELETE_INFO_TYPE_FOR_APP_SPEC_ACTION_ID,
} from '../../../config';

import EditInstanceForm from '../../EditInstanceForm';
import DeleteInstanceMenu from '../../DeleteInstanceMenu';

// ns__custom_start unit: appSpec, comp: InfoType, loc: addedImports
// <!-- prettier-ignore-start -->
import { useEffect } from 'react';
import { InputLabel, makeStyles } from '@material-ui/core';

import getChildData from '../../../custom/getChildData';
import SubInfoComponent from '../../../custom/SubInfoTypesRecursive';
// <!-- prettier-ignore-end -->
// ns__custom_end unit: appSpec, comp: InfoType, loc: addedImports
// ns__end_section imports

// ns__start_section stylingSection
const InfoTypeStyleWrapper = styled.div(
  ({ selected, isDeleting }) => `
  // ns__custom_start unit: appSpec, comp: InfoType, loc: styling
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
    top: -2rem;
    left: -2rem;
    border-left: 2px dashed #a2a5b5;
    width: 1px;
    height: ${(selected && '116%') || '140%'}; 
  }

 
  &:after {
    content: "";
    position: absolute;
    border-top: 2px dashed #a2a5b5;
    top: ${(selected && '62px') || '37px'};
    left: -30px;
    width: ${(selected && '30px') || '29px'}; 
  }

  &:last-child:before {
    top: -32px ;
    height: ${(selected && '94px') || '71px'}; 
  }
  // ns__custom_end unit: appSpec, comp: InfoType, loc: styling
`
);
// ns__end_section stylingSection

// ns__start_section button
const Button = styled.button`
  // ns__custom_start unit: appSpec, comp: InfoType, loc: buttonStyling
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
  // ns__custom_end unit: appSpec, comp: InfoType, loc: buttonStyling
`;
// ns__end_section button

// ns__custom_start unit: appSpec, comp: InfoType, loc: beforeFunction
const TitleWrapper = styled.div`
  background: #d2ecef;
  padding: 25px;
  border-radius: 10px;
  text-align: initial;
  text-transfor: capitalize;
  display: flex;
  justify-content: space-between;
`;

const useStyles = makeStyles(() => ({
  titleLabel: {
    fontSize: '.8rem',
    textAlign: 'initial',
  },
}));
// ns__custom_end unit: appSpec, comp: InfoType, loc: beforeFunction

// ns__start_section function
function InfoType({
  infoType,
  parentId,
  selected,
  updateInstance,
  deleteInstance,
  refetchQueries,
  onSelect,
  // ns__custom_start unit: appSpec, comp: InfoType, loc: addedProps
  childState,
  // ns__custom_end unit: appSpec, comp: InfoType, loc: addedProps
}) {
  const [infoTypeValue, updateInfoTypeValue] = useState(infoType.value);
  const [isEditMode, updateIsEditMode] = useState(false);
  const [isSaving, updateIsSaving] = useState(false);
  const [isDeleteMode, updateIsDeleteMode] = useState(false);
  const [isDeleting, updateIsDeleting] = useState(false);
  // ns__custom_start unit: appSpec, comp: InfoType, loc: beginning
  const [parentState, setParentState] = useState([]);
  const [selectSubInfoId, setSubInfoId] = useState(null);
  useEffect(() => {
    const [parentData] = getChildData(childState);
    setParentState(parentData);
  }, [infoType]);
  const handleSelect = (id) => setSubInfoId(id);
  const styles = useStyles();
  // ns__custom_end unit: appSpec, comp: InfoType, loc: beginning

  // ns__custom_start unit: appSpec, comp: InfoType, loc: beforeReturn
  // ns__custom_end unit: appSpec, comp: InfoType, loc: beforeReturn

  // ns__start_section notSelected
  if (!selected) {
    return (
      <InfoTypeStyleWrapper onClick={() => onSelect(infoType.id)}>
        {infoTypeValue}
      </InfoTypeStyleWrapper>
    );
  }
  // ns__end_section notSelected

  // ns__start_section change
  function handleInfoTypeValueChange(e) {
    updateInfoTypeValue(e.target.value);
  }
  // ns__end_section change

  // ns__start_section save
  async function handleInfoTypeValueSave() {
    updateIsSaving(true);

    await updateInstance({
      variables: {
        actionId: UPDATE_INFO_TYPE_FOR_APP_SPEC_ACTION_ID,
        executionParameters: JSON.stringify({
          value: infoTypeValue,
          instanceId: infoType.id,
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
      <InfoTypeStyleWrapper>
        <EditInstanceForm
          id={infoType.id}
          label='InfoType Value:'
          value={infoTypeValue}
          onChange={handleInfoTypeValueChange}
          onSave={handleInfoTypeValueSave}
          onCancel={handleCancelEdit}
          disabled={isSaving}
        />
      </InfoTypeStyleWrapper>
    );
  }
  // ns__end_section isEdit

  // ns__start_section delete
  async function handleDelete() {
    updateIsDeleting(true);

    try {
      await deleteInstance({
        variables: {
          actionId: DELETE_INFO_TYPE_FOR_APP_SPEC_ACTION_ID,
          executionParameters: JSON.stringify({
            parentInstanceId: parentId,
            instanceId: infoType.id,
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
  // ns__end_section isDelete

  // ns__start_section functionReturn
  return (
    <InfoTypeStyleWrapper selected={selected}>
      {/* ns__start_replacement instanceValue */}

      <InputLabel className={styles.titleLabel}>Info Type</InputLabel>
      <TitleWrapper>
        {infoTypeValue}
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

      {/* ns__start_section childrenList */}

      {/* ns__end_section childrenList */}

      {/* ns__custom_start unit: appSpec, comp: InfoType, loc: renderEnding */}
      <SubInfoComponent
        infoType={parentState}
        instanceId={infoType.id}
        parentId={parentId}
        refetchQueries={refetchQueries}
        onSelect={handleSelect}
        selectSubInfoId={selectSubInfoId}
        label={infoTypeValue}
      />

      {/* <SubInfoTypes
        subInfoTypes={infoType._children}
        infoTypeId={infoType.id}
        refetchQueries={refetchQueries}
        label='Sub Info Type'
        hasParentId={hasParentId}
        parentId={parentId}
        childState={childState}
      /> */}

      {/* ns__custom_end unit: appSpec, comp: InfoType, loc: renderEnding */}
    </InfoTypeStyleWrapper>
  );
  // ns__end_section functionReturn
}

// ns__end_section function

// ns__start_section  compose
export default compose(
  graphql(EXECUTE, { name: 'updateInstance' }),
  graphql(EXECUTE, { name: 'deleteInstance' })
)(InfoType);
// ns__end_section  compose

// ns__start_section propTypes
InfoType.propTypes = {
  parentId: PropTypes.string,
  selected: PropTypes.bool,
  updateInstance: PropTypes.func,
  deleteInstance: PropTypes.func,
  refetchQueries: PropTypes.array,
  onSelect: PropTypes.func,
  infoType: PropTypes.shape({
    children: PropTypes.array,
    id: PropTypes.string,
  }),
  // ns__custom_start unit: appSpec, comp: InfoType, loc: addedPropTypes
  // ns__custom_end unit: appSpec, comp: InfoType, loc: addedPropTypes
};
// ns__end_section propTypes
