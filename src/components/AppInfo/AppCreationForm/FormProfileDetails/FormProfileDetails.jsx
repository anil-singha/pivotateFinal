import React, { useState } from "react";
import { FormCreation, Form } from "../AppCreationForm.styles";
import FormAccordion from "../FormAccordion/FormWithAccordion";
import { TextField, Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const FormProfileDetails = () => {
  const styles = useStyles()
  const onChangeHandler = (e) => {
    let value = e.targe.value;
   
  };

  return (
    <FormCreation>
      <Form>
        <FormAccordion />
        <Typography>Job Seeker</Typography>
        <Form>
        <Typography>Profile</Typography>
        <TextField
          className={styles.input}
          value={''}
          label="Experience"
          type="text"
          onChange={onChangeHandler}
          variant="outlined"
        />
        <TextField
          className={styles.input}
          value={''}
          label="Sub Type Info"
          type="text"
          onChange={onChangeHandler}
          variant="outlined"
        />
        </Form>
        
      </Form>
    </FormCreation>
  );
};

export default FormProfileDetails;

const useStyles = makeStyles({
  input: {
    width: "100%",
    margin: '.8rem 0'
  },
});
