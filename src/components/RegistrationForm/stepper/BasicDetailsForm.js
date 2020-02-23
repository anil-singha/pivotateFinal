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
          <Form className="form">
            <div className="form__input">
              <RegistrationField
                placeholder="Username"
                type="text"
                name="username"
              />
            </div>
            <div className="form__input">
              <RegistrationField
                placeholder="First Name"
                type="text"
                name="firstName"
              />
            </div>
            <div className="form__input">
              <RegistrationField
                placeholder="Last Name"
                type="text"
                name="lastName"
              />
            </div>
            <div className="form__input">
              <RegistrationField
                placeholder="Email"
                type="email"
                name="email"
              />
            </div>
            <div className="form__input">
              <RegistrationField
                placeholder="Password"
                type="password"
                name="password"
              />
            </div>
            <div className="form__input">
              <RegistrationField
                placeholder="Confirm Password"
                type="password"
                name="passwordConfirmation"
              />
            </div>

            <div className="form__input">
              <button
                className="button button--yellow"
                type="submit"
                disabled={isSubmitting || !isValid || isValidating || !dirty}
              >
                SIGN UP
              </button>
              {formError && <ErrorContainer>{formError}</ErrorContainer>}
            </div>
            <br />
            {/* <div>
              <small>or</small>
            </div> */}
            {/* <div className="flex justify-space-between">
              <button type="button" className="button button--fb">
                Sign up with{" "}
                <img
                  className="social-icon"
                  height="14"
                  src="images/facebook.png"
                />
              </button>
              <div style={{ width: "50px" }}></div>
              <button type="button" className="button button--google">
                Sign up with
                <img
                  className="social-icon"
                  height="14"
                  src="images/google plus.png"
                />
              </button>
            </div> */}
            <br />
            <small>
              Already have an account?
              <a
                href="javascript:void(0);"
                className="teal--text"
                onClick={props.onSwitch}
              >
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