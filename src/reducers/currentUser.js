const currentUser = (state = 0, action) => {
  switch (action.type) {
    case "CURRENT_USER":
      return {
        ...state,
        value: action.payLoad,
      };
      break;
    default:
      return state;
  }
};

export default currentUser;
