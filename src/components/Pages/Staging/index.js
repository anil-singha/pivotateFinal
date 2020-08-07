import React, { useRef } from "react";
import styled from "styled-components";
import { NoStackConsumer } from "@nostack/no-stack";

import { PLATFORM_ID, TYPE_CUSTOMER_ID } from "../../../config";

import AuthTabs from "../../AuthTabs";
import CreateApp from "../../meetingSteps/createApp";
import UserType from "../../meetingSteps/createUserType";
import JobSeeker from "../../meetingSteps/jobSeeker";
import LoginForm from "../../LoginForm";
import RegistrationForm from "../../RegistrationForm";
import Home from "../../Pages/Home";
import Apps from "../../AppSpec/Apps";
import AppHeader from "../../AppHeader";
import AppFooter from "../../AppFooter";
import StepZilla from "react-stepzilla";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../../actions";

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  min-height: 65vh;
`

const App = ({ loading, currentUser, login }) => {
  const childRef = useRef();
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <>
      {/* <NavBar /> */}
      <div className="">
        <NoStackConsumer>
          {({ loading, currentUser }) => {
            if (loading) return null;

            if (!currentUser) {
              
              return (
                <>
              <AppHeader ref={childRef} />
                <Home   onSignUp={() => childRef.current.modalHandlerRegistration()}></Home>
              <AppFooter />
              </>
              )
            }

            return (
              <>
                {/* <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
               Step: {counter} */}
               <div id="app">
                <AppHeader  />
                  <Container >
                    
                      <Apps customerId={currentUser.id}> </Apps>
                    
                  </Container>
                  <AppFooter />
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
