import React, { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const HandbookContext = createContext();

export const HandbookState = ({ children }) => {
  const initialState = {
    isLoading: false,
    skills: [],
    active: "",
    earnedBadges: [
      "distress-1",
      "distress-2",
      "distress-6",
      "emotion-3",
      "emotion-4",
      "mindfullness-6",
      "emotion-1",
      "distress-8",
      "interpersonal-1",
      "interpersonal-2",
      "interpersonal-4",
      "interpersonal-3",
    ],
    queuedSkillForBadge: {},
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const makeActive = async (data) => {
    try {
      dispatch({ type: "MAKE_ACTIVE", payload: data });
    } catch (e) {
      dispatch({ type: "SET_ERROR", payload: "error could not add data" });
    }
  };
  const resetActive = async () => {
    try {
      dispatch({ type: "RESET_ACTIVE", payload: "" });
    } catch (e) {
      dispatch({ type: "SET_ERROR", payload: "error could not add data" });
    }
  };
  const badgeToClaim = async (skill) => {
    try {
      dispatch({ type: "BADGE_TO_CLAIM", payload: skill });
    } catch (e) {
      dispatch({ type: "SET_ERROR", payload: "error could not add data" });
    }
  };
  const claimBadge = async (key) => {
    try {
      dispatch({ type: "CLAIM_BADGE", payload: key });
    } catch (e) {
      dispatch({ type: "SET_ERROR", payload: "error could not add data" });
    }
  };
  return (
    <HandbookContext.Provider
      value={{
        skills: state.skills,
        isLoading: state.isLoading,
        active: state.active,
        earnedBadges: state.earnedBadges,
        queuedSkillForBadge: state.queuedSkillForBadge,
        makeActive,
        resetActive,
        badgeToClaim,
        claimBadge,
      }}>
      {children}
    </HandbookContext.Provider>
  );
};
