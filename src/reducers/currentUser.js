const currentUser = (state = 0, action) => {
  switch (action.type) {
    case "SEARCHTERMCHANGE":
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
