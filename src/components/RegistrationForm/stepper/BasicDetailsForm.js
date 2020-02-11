import React from "react";
import { Formik, Form } from "formik";

import { Wrapper, Row, ErrorContainer } from "../RegistrationForm.style";
import RegistrationField from "../RegistrationField";

const BasicDetailsForm = ({
  initialValues,
  validationSchema,
  onSubmit,
  formError,
  ...props
}) => {
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, isValid, dirty, isValidating }) => (
          <Form class="form">
            <div class="form__input">
              <RegistrationField
                placeholder="Username"
                type="text"
                name="username"
              />
            </div>
            <div class="form__input">
              <RegistrationField
                placeholder="First Name"
                type="text"
                name="firstName"
              />
            </div>
            <div class="form__input">
              <RegistrationField
                placeholder="Last Name"
                type="text"
                name="lastName"
              />
            </div>
            <div class="form__input">
              <RegistrationField
                placeholder="Email"
                type="email"
                name="email"
              />
            </div>
            <div class="form__input">
              <RegistrationField
                placeholder="Password"
                type="password"
                name="password"
              />
            </div>
            <div class="form__input">
              <RegistrationField
                placeholder="Confirm Password"
                type="password"
                name="passwordConfirmation"
              />
            </div>

            <div class="form__input">
              <button
                class="button button--yellow"
                type="submit"
                disabled={isSubmitting || !isValid || isValidating || !dirty}
              >
                SIGN UP
              </button>
              {formError && <ErrorContainer>{formError}</ErrorContainer>}
            </div>
            <br />
            <div>
              <small>or</small>
            </div>
            <div class="flex justify-space-between">
              <button type="button" class="button button--fb">
                Sign up with
              </button>
              <div style={{ width: "50px" }}></div>
              <button type="button" class="button button--google">
                Sign up with
              </button>
            </div>
            <br />
            <small>
              Already have an account?
              <a href="#" class="teal--text" onClick={props.onSwitch}>
                &nbsp;Log In
              </a>
            </small>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default BasicDetailsForm;
