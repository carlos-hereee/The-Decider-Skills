const isLoading = (state, action) => {
  return {
    ...state,
    is_loading: action.payload,
  };
};
const makeActive = (state, action) => {
  return {
    ...state,
    skill: action.payload.skills,
    active: action.payload.title,
  };
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "IS_LOADING":
      return isLoading(state, action);
    case "MAKE_ACTIVE":
      return makeActive(state, action);
    default:
      return state;
  }
};
