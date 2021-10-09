import React, { createContext, useReducer } from "react";
import { reducer } from "./reducer";
import { auth, usersRef } from "../utils/firebase.config";
import { navigate, navigationRef } from "./RootNavigation";

export const HandbookContext = createContext();

export const HandbookState = ({ children }) => {
  const initialState = {
    isLoading: false,
    skills: [],
    active: {},
    earnedBadges: [],
    queuedSkillForBadge: {},
    client: {},
    signInError: "",
    registerError: "",
    forgotpasswordMessage: "",
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const liveUser = async (userId) => {
    try {
      // create live instance of player
      usersRef.doc(userId).onSnapshot((snap) => {
        if (snap.exists) {
          dispatch({ type: "INITIALIZE_USER", payload: snap.data() });
        }
      });
    } catch (e) {
      dispatch({ type: "SET_ERROR", payload: "Couldnt make player instance" });
    }
  };
  const getData = async (userId) => {
    try {
      const badgesRef = usersRef.doc(userId).collection("ownedBadges");
      const badges = [];
      badgesRef.onSnapshot((snap) => {
        snap.forEach((doc) => {
          badges.push(doc.data());
        });
      });
      dispatch({ type: "GET_BADGES_DATA", payload: badges });
    } catch (e) {
      dispatch({ type: "SET_ERROR", payload: "Couldnt make player instance" });
    }
  };

  const signIn = async ({ username, password }) => {
    try {
      const { user } = await auth.signInWithEmailAndPassword(
        `${username}@the-decider-skills-app.com`,
        password
      );
      liveUser(user.uid);
      getData(user.uid);
      navigate("Handbook");
    } catch (e) {
      console.log("e", [e]);
      dispatch({ type: "SIGN_IN_ERROR", payload: "Invalid Email or Password" });
    }
  };
  const register = async ({ username, password }) => {
    try {
      await auth.createUserWithEmailAndPassword(
        `${username}@the-decider-skills-app.com`,
        password
      );
      navigate("Handbook");
    } catch (e) {
      console.log("e", e.code);
      const error = {
        "auth/email-already-inuse":
          "The username entered is already being used",
      };
      dispatch({
        type: "REGISTER_ERROR",
        payload: error[e.code] || "Could not create account, try again later",
      });
    }
  };
  const forgotpassword = async ({ email }) => {
    try {
      await auth.sendPasswordResetEmail(email);
      dispatch({
        type: "FORGOT_PASSWORD",
        payload: "Check your email",
      });
    } catch (e) {
      dispatch({
        type: "FORGOT_PASSWORD",
        payload: "The email entered is not in our records",
      });
    }
  };
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
  const badgeToClaim = async (skill) => {
    try {
      dispatch({ type: "BADGE_TO_CLAIM", payload: skill });
    } catch (e) {
      dispatch({ type: "SET_ERROR", payload: "error could not add data" });
    }
  };
  const claimBadge = async (badge, user) => {
    try {
      const badgesRef = usersRef.doc(user.uid).collection("ownedBadges");
      badgesRef.doc(badge.key).set(
        {
          owned: true,
          name: badge.name,
          key: badge.key,
          poster: badge.imageUrl,
          definition: badge.definition,
        },
        { merge: true }
      );
      dispatch({ type: "CLAIM_BADGE", payload: badge });
      navigationRef.goBack();
    } catch (e) {
      dispatch({ type: "SET_ERROR", payload: "error could not add data" });
    }
  };
  return (
    <HandbookContext.Provider
      value={{
        isLoading: state.isLoading,
        signInError: state.signInError,
        registerError: state.registerError,
        forgotpasswordMessage: state.forgotpasswordMessage,
        skills: state.skills,
        active: state.active,
        earnedBadges: state.earnedBadges,
        client: state.client,
        queuedSkillForBadge: state.queuedSkillForBadge,
        forgotpassword,
        signIn,
        register,
        makeActive,
        resetActive,
        badgeToClaim,
        claimBadge,
        liveUser,
        getData,
      }}>
      {children}
    </HandbookContext.Provider>
  );
};
