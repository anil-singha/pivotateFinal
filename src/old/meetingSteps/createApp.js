import React, { useState } from 'react';
import { withNoStack, NoStackConsumer } from '@nostack/no-stack';

import { useSelector, useDispatch } from 'react-redux';
import Apps from '../AppSpec/Apps';
import { increment, decrement } from '../../actions';

const meetingApp = ({ loading, currentUser, login, jumpToStep }) => {
  const onNext = () => {
    jumpToStep(1);
  };

  // const mapDispatchToProps = (dispatch) => {
  //   dispatch({
  //     type: "SEARCHTERMCHANGE",
  //     payLoad: {
  //       userId: "1",
  //       sample: "wew",
  //     },
  //   });
  // };

  return (
    <>
      <Apps customerId={currentUser.id} onNext={() => onNext()} />
      {/* <button onClick={() => dispatch(increment())}>+</button> */}
    </>
  );
};

export default withNoStack(meetingApp);
