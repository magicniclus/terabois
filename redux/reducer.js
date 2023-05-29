const initState = {
  cookie: false,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_COOKIE":
      return {
        ...state,
        cookie: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
