const isLoading = (state, action) => {
  return {
    ...state,
    isLoading: action.payload,
  };
};
const makeActive = (state, action) => {
  return {
    ...state,
    skills: action.payload.skills,
    active: action.payload.active,
  };
};
const resetActive = (state, action) => {
  return {
    ...state,
    active: {},
  };
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "IS_LOADING":
      return isLoading(state, action);
    case "MAKE_ACTIVE":
      return makeActive(state, action);
    case "RESET_ACTIVE":
      return resetActive(state, action);
    default:
      return state;
  }
};
