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
    active: action.payload.active,
  };
};
const resetActive = (state, action) => {
  return {
    ...state,
    active: {},
  };
};
const badgeToClaim = (state, action) => {
  return {
    ...state,
    queuedSkillForBadge: action.payload,
  };
};
const claimBadge = (state, action) => {
  return {
    ...state,
    queuedSkillForBadge: {},
  };
};
const initUser = (state, action) => {
  return {
    ...state,
    client: action.payload,
  };
};
const getBadgesData = (state, action) => {
  return {
    ...state,
    earnedBadges: action.payload,
  };
};
const signInError = (state, action) => {
  console.log("action.payload", action.payload);
  return {
    ...state,
    signInError: action.payload,
  };
};
const registerError = (state, action) => {
  return {
    ...state,
    registerError: action.payload,
  };
};
const forgotpassword = (state, action) => {
  return {
    ...state,
    forgotpasswordMessage: action.payload,
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
    case "BADGE_TO_CLAIM":
      return badgeToClaim(state, action);
    case "CLAIM_BADGE":
      return claimBadge(state, action);
    case "INITIALIZE_USER":
      return initUser(state, action);
    case "GET_BADGES_DATA":
      return getBadgesData(state, action);
    case "SIGN_IN_ERROR":
      return signInError(state, action);
    case "REGISTER_ERROR":
      return registerError(state, action);
    case "FORGOT_PASSWORD":
      return forgotpassword(state, action);
    default:
      return state;
  }
};
