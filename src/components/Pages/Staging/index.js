import React from "react";
import styled from "styled-components";
import { NoStackConsumer } from "@nostack/no-stack";

import { PLATFORM_ID, TYPE_CUSTOMER_ID } from "../../../config";

import AuthTabs from "../../AuthTabs";
import LoginForm from "../../LoginForm";
import RegistrationForm from "../../RegistrationForm";
import Apps from "../../AppSpec/Apps";
import StepZilla from "react-stepzilla";

const steps = [
  {
    name: "Step 1",
    component: (
      <div class="box">
        <div class="box__title">
          <strong style={{ fontSize: "1.5em" }}> Local Hands </strong>{" "}
          <span> Description </span>{" "}
        </div>
      </div>
    ),
  },
  {
    name: "Step 2",
    component: (
      <div class="box">
        <div class="box__title">
          <strong style={{ fontSize: "1.5em" }}> Local Hands </strong>{" "}
          <span> Description </span>{" "}
        </div>
      </div>
    ),
  },
  { name: "Step 3", component: <div class="card"> clark 3</div> },
  { name: "Step 4", component: <div class="card"> clark 4</div> },
  { name: "Step 5", component: <div class="card"> clark 5</div> },
];

const Wrapper = styled.div`
  padding: 5em 5em;
  min-width: 480px;
`;

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App = () => (
  <>
    {/* <NavBar /> */}
    <Wrapper className="App" style={{ backgroundColor: "#f7f7f7" }}>
      <NoStackConsumer>
        {({ loading, currentUser }) => {
          if (loading) return null;

          if (!currentUser) {
            return (
              <LoginWrapper>
                <AuthTabs menuTitles={["Login", "Register"]}>
                  <LoginForm />
                  <RegistrationForm
                    platformId={PLATFORM_ID}
                    userClassId={TYPE_CUSTOMER_ID}
                  />
                </AuthTabs>
              </LoginWrapper>
            );
          }

          return (
            <>
              <div className="step-progress">
                <div class="flex justify-center">
                  <StepZilla steps={steps} startAtStep={2} />
                </div>
              </div>
              <div>
                <Apps customerId={currentUser.id} />{" "}
              </div>
            </>
          );
        }}
      </NoStackConsumer>
    </Wrapper>
  </>
);

export default App;
