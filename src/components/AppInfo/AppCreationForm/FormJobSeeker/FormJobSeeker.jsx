import React, { useState } from "react";
import { FormCreation, Form } from "../AppCreationForm.styles";
import FormAccordion from "../FormAccordion/FormWithAccordion";
import { TextField, Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const FormJobSeeker = () => {
  const styles = useStyles()
  const [screenTitle, setScreenTitle] = useState("");

  const onChangeHandler = (e) => {
    let value = e.targe.value;
    setScreenTitle(value);
  };

  return (
    <FormCreation>
      <Form>
        <FormAccordion />
        <Typography>Job Seeker</Typography>
        <TextField className={styles.input} 
        value={screenTitle}
        label="New Screen"
        type="text"
        onChange={onChangeHandler}
        variant="outlined"
        />
      </Form>
      
    </FormCreation>
  );
};

export default FormJobSeeker;


const useStyles = makeStyles({
    input: {
        width: '100%'
    }
})