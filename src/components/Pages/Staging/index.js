/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */

import React, { useRef } from 'react';
import styled from 'styled-components';
import { NoStackConsumer } from '@nostack/no-stack';

import Home from '../Home';
import Apps from '../../AppInfo/Apps';
import AppHeader from '../../AppHeader';
import AppFooter from '../../AppFooter';

const Container = styled.div`
  width: 100%;
  min-height: 65vh;
`;

const App = () => {
  const childRef = useRef();
  return (
    <>
      {/* <NavBar /> */}
      <div className=''>
        <NoStackConsumer>
          {({ loading, currentUser }) => {
            if (loading) return null;

            if (!currentUser) {
              return (
                <>
                  <AppHeader ref={childRef} />
                  <Home
                    onSignUp={() => childRef.current.modalHandlerRegistration()}
                  />
                  <AppFooter />
                </>
              );
            }

            return (
              <>
                {/* <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
               Step: {counter} */}
                <div id='app'>
                  <AppHeader />
                  <Container>
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
