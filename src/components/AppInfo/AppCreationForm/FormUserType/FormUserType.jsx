import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { FormCreation, Form } from "../AppCreationForm.styles";
import FormInput from "../../../FormInput/form-input";

import { makeStyles } from "@material-ui/core/styles";

import {
  appName,
  appDescription,
  addUserType,
} from "../../../../redux/appCreateInfo/appDetails.actions";

import FormAccordion from "../FormAccordion/FormWithAccordion";
import { TextField } from "@material-ui/core";

const UserTypeForm = ({ appDetails, setUserType }) => {
  const styles = useStyles();
  const [appTitle, setAppName] = useState("");
  const [userType, setType] = useState("");
  const [description, setDescription] = useState("");
  const [expanded, setExpanded] = React.useState(false);

  useEffect(() => {
    setAppName(appDetails.appName);
    setDescription(appDetails.description);
  }, []);

  const onChangeHandler = (e) => {
    let value = e.target.value;
    setUserType(value);
    setType(value);
  };

  return (

        <TextField
          className={styles.input}
          label="User Type"
          value={userType}
          type="text"
          onChange={onChangeHandler}
          variant="outlined"
        />

  );
};

const mapStateToProps = (state) => ({
  appDetails: state.appDetails,
});

const mapDispatchToProps = (dispatch) => ({
  setUserType: (type) => dispatch(addUserType(type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserTypeForm);

const useStyles = makeStyles({
  input: {
    width: "100%",
  },
});
