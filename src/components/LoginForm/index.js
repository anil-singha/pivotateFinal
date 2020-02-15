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
      <div class="dialog__title">
        <img src="images/Pivotate Logo.png" />
        <h3>LOGIN</h3>
      </div>
      <form onSubmit={handleSubmit} class="form">
        <div class="form__input">
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
        <div class="form__input">
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
        <div class="form__input">
          <button
            class="button button--yellow"
            type="submit"
            disabled={isSubmitting || !username || !password}
          >
            Log In
          </button>
        </div>
        {error && <div class="form__input">{error}</div>}

        <br />
        {/* <div>
          <small>or</small>
        </div> */}
        {/* Temporarility Hide Social icons */}
        {/* <div class="flex justify-space-between">
          <button type="button" class="button button--fb">
            Log in with
            <img class="social-icon" height="14" src="images/facebook.png" />
          </button>
          <div style={{ width: "50px" }}></div>
          <button type="button" class="button button--google">
            Log in with
            <img class="social-icon" height="14" src="images/google plus.png" />
          </button>
        </div> */}
        <br />
        <small>
          Dont have an account?
          <a
            href="javascript:void(0);"
            class="teal--text"
            onClick={props.onSwitch}
          >
            &nbsp; Sign Up
          </a>
        </small>
      </form>
      {/* <div class="form__input">
        <ForgotPasswordButton />
      </div> */}
    </Modal>
  );
};

export default withNoStack(LoginForm);
