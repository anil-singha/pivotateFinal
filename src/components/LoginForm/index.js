import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import Modal from "../Modal";
import { withNoStack } from "@nostack/no-stack";
import { makeStyles } from '@material-ui/core/styles';

import { Context as AuthContext } from "../../context/AuthContext";

import ForgotPasswordButton from "../ForgotPasswordButton";
import { TextField } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
      
    },
  },
  textField: {
    margin: '.8rem',
    width: '80%'
  }

}));

const LoginForm = ({ onSwitch, loading, currentUser, login, onClose }) => {
  const { loginUser } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const history = useHistory();
  const styles = useStyles();

  if (loading || currentUser) {
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await login({
        username,
        password,
      });

      loginUser(response.AuthenticationResult.AccessToken.length);
      history.push("/create");
    } catch (error) {
      setError(
        error.message ||
          (error.graphQLErrors &&
            error.graphQLErrors.length &&
            error.graphQLErrors[0]) ||
          error
      );
      setIsSubmitting(false);
    }
  };

  return (
    <Modal onClose={onClose}>
      <div className="dialog__title">
        <img
          src="http://pivotatestaticassets.com/images/Pivotate Logo.svg"
          width="170"
        />
      </div>
      <form
        autofill="false"
        method="post"
        onSubmit={handleSubmit}
        className="form"
        className={styles.root}
      >
        <div className="form__input">
          <TextField
            className={styles.textField}
            value={username}
            type="text"
            required
            onChange={(e) => setUsername(e.target.value)}
            label="Username"
            variant="outlined"
          />

          <TextField
            className={styles.textField}
            value={password}
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            variant="outlined"
          />
          {/* <FormInput
            name="username"
            type="text"
            label="Username"
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <FormInput
            name="password"
            type="password"
            label="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          /> */}
        </div>
        {/* <div className="form__input">
          <label htmlFor="nostack-password">
            <input
              id="nostack-password"
              type="password"
              placeholder="Password"
              name="password"
              disabled={isSubmitting}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div> */}
        <div className="form__input">
          <button
            className="button button--yellow"
            type="submit"
            disabled={isSubmitting || !username || !password}
          >
            Log In
          </button>
          <small>
            <a href="#" className="teal--text">
              &nbsp; Forgot Password?
            </a>
          </small>
        </div>
        {error && (
          <div className="form__input">
            {" "}
            <p>You have entered an invalid username or password</p>{" "}
          </div>
        )}

        {/* <div>
          <small>or</small>
        </div> */}
        {/* Temporarility Hide Social icons */}
        {/* <div className="flex justify-space-between">
          <button type="button" className="button button--fb">
            Log in with
            <img className="social-icon" height="14" src="http://pivotatestaticassets.com/images/facebook.png" />
          </button>
          <div style={{ width: "50px" }}></div>
          <button type="button" className="button button--google">
            Log in with
            <img className="social-icon" height="14" src="http://pivotatestaticassets.com/images/google plus.png" />
          </button>
        </div> */}
        <br />
        <small>
          Don't have an account?
          <a href="#" className="teal--text" onClick={onSwitch}>
            &nbsp; Sign Up
          </a>
        </small>
      </form>
      {/* <div className="form__input">
        <ForgotPasswordButton />
      </div> */}
    </Modal>
  );
};

export default withNoStack(LoginForm);
