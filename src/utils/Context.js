import React, { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const HandbookContext = createContext();
export const HandbookState = ({ children }) => {
  const initialState = {
    isLoading: false,
    skills: [],
    active: {},
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const makeActive = async (skills, active) => {
    try {
      dispatch({ type: "MAKE_ACTIVE", payload: { skills, active } });
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
  return (
    <HandbookContext.Provider
      value={{
        isLoading: state.isLoading,
        skills: state.skills,
        active: state.active,
        makeActive,
        resetActive,
      }}>
      {children}
    </HandbookContext.Provider>
  );
};
