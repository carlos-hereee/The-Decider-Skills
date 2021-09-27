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
const authError = (state, action) => {
  return {
    ...state,
    authError: action.payload,
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
    case "AUTH_ERROR":
      return authError(state, action);
    default:
      return state;
  }
};
