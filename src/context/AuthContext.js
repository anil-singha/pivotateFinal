import createDateContext from './createDataContext';

const authReducer = (state, actions) => {
  switch (actions.type) {
    case 'login':
      return { userLoggedIn: actions.payload };
    case 'logout':
      return { userLoggedIn: actions.payload };
    default:
      return state;
  }
};

const loginUser = (dispatch) => (userFlag) => {
  let userLoggedin = true;
  if (userFlag < 0) userLoggedin = false;
  console.log(userLoggedin);
  localStorage.setItem('userFlag', true);
  dispatch({ type: 'login', payload: true });
};

const logoutUser = (dispatch) => () => {
  localStorage.removeItem('userFlag');
  dispatch({ type: 'logout', payload: false });
};

export const { Context, Provider } = createDateContext(
  authReducer,
  { loginUser, logoutUser },
  { userLoggedIn: false }
);
