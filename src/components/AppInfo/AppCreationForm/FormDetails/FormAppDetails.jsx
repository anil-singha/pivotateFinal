import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import FormInput from "../../../FormInput/form-input";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import { FormCreation, Form } from "../AppCreationForm.styles";

import {
  addName,
  addDescription,
} from "../../../../redux/appCreateInfo/appDetails.actions";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  input: {
    width: '100%',
    margin: '1rem 0 '
  }
}));

const FormAppDetails = ({
  handleChange,
  nextStep,
  values,
  appDetails,
  setAppName,
  setAppDescription,
}) => {
  const styles = useStyles();
  const [appName, setAppTitle] = useState(values.appName || '');

  const [description, setDescription] = useState('');

  const onNameChange = (e) => {
    let value = e.target.value;
    setAppName(value);
    setAppTitle(value);
  };

  const onDescriptionChange = (e) => {
    let value = e.target.value;
    setAppDescription(value);
    setDescription(value);
  };

  return (
    <FormCreation>
      <Form>
        <div>
        <TextField
            className={styles.input} 
            value={appName}
            type="text"
            required
            onChange={onNameChange}
            label="What's the name of your App?"
            variant="outlined"
          />
          
          <TextField
            className={styles.root}
            id="multiline"
            label="Describe your app"
            multiline
            rows={15}
            value={description}
            variant="outlined"
            onChange={onDescriptionChange}
          />
        </div>
      </Form>
    </FormCreation>
  );
};

const mapStateToProps = (state) => ({
  appDetails: state.appDetails,
});

const mapDispatchToProps = (dispatch) => ({
  setAppName: (name) => dispatch(addName(name)),
  setAppDescription: (desc) => dispatch(addDescription(desc)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormAppDetails);
