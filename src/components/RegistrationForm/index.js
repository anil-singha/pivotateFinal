import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { REGISTER_USER } from "@nostack/no-stack";
import { HashLink as Link } from "react-router-hash-link";

import { Wrapper } from "./RegistrationForm.style";
import BasicDetailsForm from "./stepper/BasicDetailsForm";
import AppDetailsForm from "./stepper/AppDetailsForm.js";
import CreditCardDetailsForm from "./stepper/CreditCardDetailsForm";
import Modal from "../Modal";

import {
  validationSchemaBasic,
  validationSchemaApp,
  validationSchemaCreditCard,
} from "./stepper/registration-util.js";

// Get Current Month
let dt = new Date();
let mm = (dt.getMonth() + 1).toString().padStart(2, "0");
let yyyy = dt.getFullYear();

const initialValues = {
  name: "",
  username: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  passwordConfirmation: "",
  app: "",
  description: "",
  terms: false,
  cardName: "",
  cardNumber: "",
  cvc: "",
  expiryMonth: mm,
  expiryYear: yyyy,
};

const RegistrationForm = (props, { userClassId, onSuccess }) => {
  const [register] = useMutation(REGISTER_USER);
  const [registrationCompleted, setRegistrationCompleted] = useState(false);
  const [formError, setFormError] = useState("");

  /*
    A "stepper" is created and uses state to be sure that:
     1. no child form is visible (haven't pushed "submit")
     2. the child form (or it's child) is visible;
     3. the submit has been pushed on the sequence of child forms, and it's time to call submit
     4. The submission succeeded, and the final welcome message should be visible.
   */
  const [step, setStep] = useState(1);

  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [app, setApp] = useState("");
  const [description, setDescription] = useState("");

  // const formValuesTemp =
  //   '{"app":"newApp","description":"newApp Desc","creditCardNumber":"232","expirationDate":"234243","csv":"46"}';
  const handleSubmit = async (values, { setSubmitting }) => {
    setFormError("");
    // setUsername(values);

    // console.log(app);
    // console.log(description);
    setFirstName(values.firstName);
    setLastName(values.lastName);
    setEmail(values.email);

    // if (values.password !== values.passwordConfirmation) {
    //   return;
    // }
    const formValuesTemp = {
      app,
      description,
      creditCardNumber: values.cardNumber,
      creditCardName: values.cardName,
      expirationDate: `${values.expiryMonth}/${values.expiryYear}`,
      csv: values.cvc,
    };

    try {
      await register({
        variables: {
          userClassId: props.userClassId,
          name: username,
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          password,
          formValues: JSON.stringify({}),
        },
      });

      setRegistrationCompleted(true);

      if (onSuccess) {
        nextStep();
        onSuccess();
      }
    } catch (error) {
      console.log(error);
      console.log(error.graphQLErrors);

      setFormError("Something went wrong. Please try again.");
    }

    setSubmitting(false);
  };

  if (registrationCompleted) {
    window.history.pushState(
      { registered: "success" },
      "Registration Complete",
      "?registered=success"
    );

    // return (
    //   <Modal onClose={props.onClose}>
    //     <div className="dialog__title">
    //       <h3>Awesome, </h3>
    //     </div>
    //     <p className="text-center">
    //       <div>
    //         <Link
    //           onClick={props.onClose}
    //           style={{ marginBottom: "2em" }}
    //           className="button button--rounded button--yellow"
    //           to="/schedule"
    //         >
    //           Schedule a Meeting
    //         </Link>
    //       </div>
    //       <div>
    //         <Link
    //           onClick={props.onClose}
    //           className="button button--rounded button--yellow"
    //           to="/contact?s=ny"
    //         >
    //           Not Yet
    //         </Link>
    //       </div>
    //     </p>
    //   </Modal>
    // );
    return (
      <Modal onClose={props.onClose} styleName="dialogConfirm">
        <div className="dialog__title">
          <img src="/images/mail.png" />
        </div>
        <p className="text-center">
          <div>
            <div style={{ margin: "1.25em 0", fontSize: "18px" }}>
              {" "}
              Confirm your email!{" "}
            </div>
            <p style={{ margin: "1.25em 0" }}>
              Please check your email <strong> sample@gmail.com </strong> for a
              message to confirm that it’s really you. Then you can log in.
            </p>
            <div>
              <Link
                onClick={props.onClose}
                className="button button--rounded button--yellow"
                to="/schedule"
              >
                LOGIN
              </Link>
            </div>
            <div>
              <Link
                style={{ marginTop: "1em" }}
                onClick={props.onClose}
                className="button button--rounded"
                to="/schedule"
              >
                SEND AGAIN
              </Link>
            </div>
            <div>
              <Link
                style={{ marginTop: "1em" }}
                onClick={props.onClose}
                className="button button--rounded"
                to="/schedule"
              >
                CHANGE EMAIL
              </Link>
            </div>
          </div>
        </p>
      </Modal>
    );
  }

  const nextStep = () => {
    setStep(step + 1);
  };

  const handleSubmitBasicForm = (values, { setSubmitting }) => {
    console.log(values);
    setFormError("");
    if (values.password !== values.passwordConfirmation) {
      return;
    }

    setUsername(values.username);
    setFirstName(values.firstName);
    setLastName(values.lastName);
    setEmail(values.email);
    setPassword(values.password);
    // setSubmitting(false);
  };

  const handleSubmitAppForm = (values, { setSubmitting }) => {
    setFormError("");
    setApp(values.app);
    setDescription(values.description);
    setSubmitting(false);
    nextStep();
  };

  const displayCurrentStep = () => {
    switch (step) {
      case 1:
        return (
          <BasicDetailsForm
            onSwitch={props.onSwitch}
            initialValues={initialValues}
            validationSchema={validationSchemaBasic}
            // onSubmit={handleSubmitBasicForm}
            onSubmit={handleSubmit}
            formError={formError}
          />
        );

      case 2:
        return (
          <AppDetailsForm
            initialValues={initialValues}
            validationSchema={validationSchemaApp}
            onSubmit={handleSubmitAppForm}
            formError={formError}
          />
        );

      case 3:
        return (
          <CreditCardDetailsForm
            initialValues={initialValues}
            validationSchema={validationSchemaCreditCard}
            onSubmit={handleSubmit}
            formError={formError}
          />
        );

      default:
        return (
          <BasicDetailsForm
            initialValues={initialValues}
            validationSchema={validationSchemaBasic}
            onSubmit={handleSubmitBasicForm}
            formError={formError}
          />
        );
    }
  };

  const displayCurrentDescription = () => {
    switch (step) {
      case 1:
        return {
          enterText: "ENTER DETAILS",
          buttonText: "SIGN UP",
          progressWidth: "33%",
        };

      case 2:
        return {
          enterText: "ENTER APP DESCRIPTION",
          buttonText: "MAKE MY APP NOW",
          progressWidth: "66%",
        };

      case 3:
        return {
          enterText: "CREDIT CARD DETAILS",
          buttonText: "MAKE MY APP NOW",
          progressWidth: "100%",
        };
    }
  };

  return (
    <>
      <Modal
        progress={displayCurrentDescription().progressWidth}
        onClose={props.onClose}
      >
        <div className="dialog__title">
          {/* <div className="dialog__step">
            STEP <span className="teal--text"> {step} </span> of 3
          </div> */}
          <h3>{displayCurrentDescription().enterText}</h3>
        </div>
        {step == 3 && (
          <p className="dialog__text">
            You won’t be charged a thing until you commit to it explicitly. In
            fact, the initial consultation is{" "}
            <strong className="teal--text">FREE</strong>.
            <br />
            <br />
            We just need your credit card in advance to cover ourselves.
          </p>
        )}
        {displayCurrentStep()}
      </Modal>
    </>
  );
};

export default RegistrationForm;
