import createDateContext from './createDataContext';

const authReducer = (state, actions) => {
    switch (actions.type){
        case 'login':
            return {userLoggedIn: actions.payload}
        case 'logout': 
            return {userLoggedIn: actions.payload}
    default: 
        return state;
    }
}

const loginUser = dispatch => () => {
  dispatch({type: 'login', payload: true})
}

const logoutUser = dispatch => () => {
    dispatch({type: 'logout', payload: false})
}


export const {Context, Provider} = createDateContext(authReducer, {loginUser, logoutUser}, {userLoggedIn: false})