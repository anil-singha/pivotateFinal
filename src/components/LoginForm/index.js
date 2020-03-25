import React, { useState } from "react";
import styled from "styled-components";
import Modal from "../Modal";
import { withNoStack } from "@nostack/no-stack";

import ForgotPasswordButton from "../ForgotPasswordButton";

const LoginForm = (props, { loading, currentUser, login }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  if (loading || currentUser) {
    return null;
  }

  const handleSubmit = async e => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      await login({
        username,
        password
      });
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
    <Modal onClose={props.onClose}>
      <div className="dialog__title">
        <img
          src="http://pivotatestaticassets.com/images/Pivotate Logo.svg"
          width="170"
        />
        <h3>LOGIN</h3>
      </div>
      <form onSubmit={handleSubmit} className="form">
        <div className="form__input">
          <label htmlFor="nostack-username">
            <input
              id="nostack-username"
              type="text"
              name="username"
              placeholder="Username"
              disabled={isSubmitting}
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </label>
        </div>
        <div className="form__input">
          <label htmlFor="nostack-password">
            <input
              id="nostack-password"
              type="password"
              placeholder="Password"
              name="password"
              disabled={isSubmitting}
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </label>
        </div>
        <div className="form__input">
          <button
            className="button button--yellow"
            type="submit"
            disabled={isSubmitting || !username || !password}
          >
            Log In
          </button>
        </div>
        {error && <div className="form__input">{error}</div>}

        <br />
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
          Dont have an account?
          <a
            href="javascript:void(0);"
            className="teal--text"
            onClick={props.onSwitch}
          >
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
