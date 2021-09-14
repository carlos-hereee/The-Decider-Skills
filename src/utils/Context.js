import React, { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const HandbookContext = createContext();

export const HandbookState = ({ children }) => {
  const initialState = { isLoading: false, skills: [], active: "" };
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
  const claimBadge = async (vid) => {
    console.log("vid", vid);
    try {
      dispatch({ type: "CLAIM_BADGE", payload: vid });
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
        makeActive,
        resetActive,
        claimBadge,
      }}>
      {children}
    </HandbookContext.Provider>
  );
};
