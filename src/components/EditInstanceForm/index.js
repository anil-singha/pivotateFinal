/*
  This file has been partially generated!
  To permit updates to the generated portions of this code in the future,
  please follow all rules at https://docs.google.com/document/d/1vYGEyX2Gnvd_VwAcWGv6Ie37oa2vXNL7wtl7oUyyJcw/edit?usp=sharing
 */
// ns__file unit: general, comp: EditInstanceForm

// ns__custom_start unit: general, comp: EditInstanceForm, loc: beforeImports

// ns__custom_end unit: general, comp: EditInstanceForm, loc: beforeImports

import React from 'react';
import styled from 'styled-components';

// ns__custom_start unit: general, comp: EditInstanceForm, loc: addedImports
import { TextField, makeStyles } from '@material-ui/core';
// ns__custom_end unit: general, comp: EditInstanceForm, loc: addedImports

// ns__custom_start unit: general, comp: EditInstanceForm, loc: styling
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
`;

const useStyles = makeStyles((theme) => ({
  titleLabel: {
    fontSize: '.8rem',
    textAlign: 'initial',
  },
  textArea: {
    width: '90%',
    backgroundColor: 'white',
  },
}));
// ns__custom_end unit: general, comp: EditInstanceForm, loc: styling

function EditInstanceForm({
  id,
  label,
  value,
  onChange,
  onSave,
  onCancel,
  disabled,
}) {
  // ns__custom_start unit: general, comp: EditInstanceForm, loc: beforeReturn
  const styles = useStyles();
  // ns__custom_end unit: general, comp: EditInstanceForm, loc: beforeReturn
  return (
    <>
      {/* // ns__custom_start unit: general, comp: EditInstanceForm, loc: insideReturn */}
      <label htmlFor={id}>
        <TextField
          className={styles.textArea}
          label={label}
          id={id}
          type='text'
          value={value}
          onChange={onChange}
          disabled={disabled}
          variant='outlined'
        />
      </label>
      <Button
        type='button'
        hoverColor='#00FF00'
        onClick={onSave}
        disabled={disabled}
      >
        &#10003;
      </Button>
      <Button
        type='button'
        hoverColor='#FF0000'
        onClick={onCancel}
        disabled={disabled}
      >
        &#10005;
      </Button>
      {/* // ns__custom_end unit: general, comp: EditInstanceForm, loc: insideReturn */}
    </>
  );
}

export default EditInstanceForm;
