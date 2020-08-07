const INITIAL_STATE = {
  appTitle: "",
  description: "",
  userType: "",
  appName: "",
  screenName: "",
  subTypeInfo: "",

};
const appDetailsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
      case 'add_app_name':
          return {...state, appName: action.payload}
      case 'add_app_description':
          return {...state, description: action.payload}
      case 'add_user_type':
          return {...state, userType: action.payload}
      default: 
      return state;
  }
};


export default appDetailsReducer;