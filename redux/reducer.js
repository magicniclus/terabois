const initState = {
  postId: "",
  user: null,
  openSearch: false,
  dataDisplayManagment: {
    page: 1,
    allData: [],
  },
  userAdmin: {
    name: "",
  },
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_POST_ID":
      return {
        ...state,
        postId: action.payload,
      };
    case "SET_DATA":
      return {
        ...state,
        dataDisplayManagment: {
          ...state.dataDisplayManagment,
          numberOfPages: Math.ceil(action.payload.length / 10),
          numberOfDatas: action.payload.length,
        },
      };

    case "SET_PAGE":
      return {
        ...state,
        dataDisplayManagment: {
          ...state.dataDisplayManagment,
          page: action.payload,
        },
      };

    case "OPEN_SEARCH":
      return {
        ...state,
        openSearch: !state.openSearch,
      };

    case "SET_USER_NAME":
      return {
        ...state,
        userAdmin: {
          ...state.userAdmin,
          name: action.payload,
        },
      };

    default:
      return state;
  }
};

export default reducer;
