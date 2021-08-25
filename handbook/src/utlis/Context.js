import React, { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const HandbookContext = createContext();

export const HandbookState = ({ children }) => {
  const initialState = { isLoading: false, skill: [] };
  const [state, dispatch] = useReducer(reducer, initialState);

  const makeActive = async (data) => {
    console.log("data", data);
    try {
    } catch (e) {}
  };
  return (
    <HandbookContext.Provider
      value={{ skill: state.skill, isLoading: state.isLoading, makeActive }}>
      {children}
    </HandbookContext.Provider>
  );
};
