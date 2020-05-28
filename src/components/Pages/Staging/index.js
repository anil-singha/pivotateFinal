import React from "react";
import styled from "styled-components";
import { NoStackConsumer } from "@nostack/no-stack";

import { PLATFORM_ID, TYPE_CUSTOMER_ID } from "../../../config";

import AuthTabs from "../../AuthTabs";
import CreateApp from "../../meetingSteps/createApp";
import UserType from "../../meetingSteps/createUserType";
import JobSeeker from "../../meetingSteps/jobSeeker";
import LoginForm from "../../LoginForm";
import RegistrationForm from "../../RegistrationForm";
import Apps from "../../AppSpec/Apps";
import StepZilla from "react-stepzilla";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../../actions";

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App = ({ loading, currentUser, login }) => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <>
      {/* <NavBar /> */}
      <div className="App" style={{ backgroundColor: "#f7f7f7" }}>
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
                {/* <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
               Step: {counter} */}
                <div className="step-progress">
                  <div className="flex justify-center">
                    <Apps customerId={currentUser.id}> </Apps>
                  </div>
                </div>
              </>
            );
          }}
        </NoStackConsumer>
      </div>
    </>
  );
};

export default App;
