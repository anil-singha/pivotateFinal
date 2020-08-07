/*
  This file has been partially generated!
  To permit updates to the generated portions of this code in the future,
  please follow all rules at https://docs.google.com/document/d/1vYGEyX2Gnvd_VwAcWGv6Ie37oa2vXNL7wtl7oUyyJcw/edit?usp=sharing
 */
// ns__file unit: general, comp: RegistrationField

// ns__custom_start unit: general, comp: RegistrationField, loc: beforeImports

// ns__custom_end unit: general, comp: RegistrationField, loc: beforeImports

import React from 'react';
import { Field, ErrorMessage } from 'formik';
import { Row, ErrorContainer } from './RegistrationForm.style';
// ns__custom_start unit: general, comp: RegistrationField, loc: addedImports
import { TextField, makeStyles } from '@material-ui/core';
// ns__custom_end unit: general, comp: RegistrationField, loc: addedImports

const useStyles = makeStyles((theme) => ({
  textField: {
    fontSize: '.8rem',
    textAlign: 'initial',
    width: '100%',
    height: '4rem',
    margin: 0,
    padding: 0,
    [`& fieldset`]: {
      borderRadius: '32px',
      
      
    },
  },
  button: {
    width: '80%',
    height: '3.5rem',
    borderRadius: '2rem',
  },
  inputLabel: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '1rem',
    color: 'black',
    height: '3rem',
  },
}));

const RegistrationField = ({ fieldLabel, type, name }) => {
  const styles = useStyles();
  // ns__custom_start unit: general, comp: RegistrationField, loc: insideReturn
  return (
    <Row>
      <label>
        <TextField
          className={styles.textField}
          name={name}
          label={fieldLabel}
          type={type}
          variant='outlined'
          size="small"
        />
      </label>
      <ErrorContainer>
        <ErrorMessage name={name} />
      </ErrorContainer>
    </Row>
  );
  // ns__custom_end unit: general, comp: RegistrationField, loc: insideReturn
};

export default RegistrationField;
