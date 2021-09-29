import React, { createContext, useReducer, useEffect } from "react";
import { reducer } from "./reducer";
import { auth, usersRef } from "../utils/firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";

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
  const [user] = useAuthState(auth);
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
  useEffect(() => {
    if (user?.uid) {
      liveUser(user.uid);
      getData(user.uid);
    }
  }, [user]);

  const signIn = async ({ email, password }) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (e) {
      dispatch({ type: "SIGN_IN_ERROR", payload: "Invalid Email or Password" });
    }
  };
  const register = async ({ email, password }) => {
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      if (!user.emailVerified) {
        user.sendEmailVerification();
      }
      usersRef.doc(user.uid).set({ uid: user.uid }, { merge: true });
    } catch (e) {
      dispatch({
        type: "REGISTER_ERROR",
        payload: "Could not create account, try again",
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
  const claimBadge = async (video) => {
    try {
      const badgesRef = usersRef.doc(user.uid).collection("ownedBadges");
      badgesRef.doc(video.key).set(
        {
          owned: true,
          name: video.name,
          key: video.key,
        },
        { merge: true }
      );
      dispatch({ type: "CLAIM_BADGE", payload: video });
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
      }}>
      {children}
    </HandbookContext.Provider>
  );
};
