const initState = {
  postId: "",
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_POST_ID":
      return {
        ...state,
        postId: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
