const isLoading = (state, action) => {
  return {
    ...state,
    is_loading: action.payload,
  };
};
const makeActive = (state, action) => {
  return {
    ...state,
    skills: action.payload.skills,
    active: action.payload.title,
  };
};
const resetActive = (state, action) => {
  return {
    ...state,
    active: "",
  };
};
const claimBadge = (state, action) => {
  return {
    ...state,
    active: "",
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
    case "CLAIM_BADGE":
      return claimBadge(state, action);
    default:
      return state;
  }
};
