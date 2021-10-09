import React, { useContext, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Pressable,
  ActivityIndicator,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import HomeBG from "../components/HomeBG";
import { Text, Button } from "react-native-elements";
import { navigate } from "../utils/RootNavigation";
import { globalStyles } from "../styles";
import { HandbookContext } from "../utils/Context";
import { auth } from "../utils/firebase.config";
import { Formik } from "formik";
import * as yup from "yup";

const schema = yup.object().shape({
  username: yup.string().required("Username is Required"),
  password: yup
    .string()
    .min(6, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
});
const Auth = () => {
  const { signIn, signInError } = useContext(HandbookContext);
  const [loading, setLoading] = useState(true);
  const user = auth.currentUser;

  useEffect(() => {
    if (user?.uid) {
      navigate("Handbook");
    }
    if (user === undefined || null) {
      setLoading(false);
    }
  }, [user]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={35} color="#600" />
      </View>
    );
  }
  return (
    <HomeBG>
      <KeyboardAvoidingView style={[styles.container, globalStyles.shadow]}>
        <Text h2 style={{ textAlign: "center" }}>
          Login
        </Text>
        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={(values) => signIn(values)}
          validationSchema={schema}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            isValid,
          }) => (
            <View>
              <Text style={{ color: "red", textAlign: "center" }}>
                {signInError}
              </Text>
              <Text>Username: </Text>
              <Text style={{ color: "red" }}>
                {touched.username && errors.username}
              </Text>
              <TextInput
                name="username"
                placeholder="Username"
                style={styles.textInput}
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.username}
                keyboardType="email-address"
              />
              <Text>Password: </Text>
              <Text style={{ color: "red" }}>
                {touched.password && errors.password}
              </Text>
              <TextInput
                name="password"
                placeholder=" Password"
                style={styles.textInput}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                secureTextEntry
              />
              <Button
                onPress={handleSubmit}
                title="Submit"
                style={{ marginTop: 10 }}
                disabled={!isValid}
              />
            </View>
          )}
        </Formik>
        <Pressable onPress={() => navigate("Register")}>
          <Text
            style={{
              textAlign: "center",
              color: "blue",
              textDecorationLine: "underline",
              marginTop: 10,
            }}>
            Create an account?
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </HomeBG>
  );
};
export default Auth;
const styles = StyleSheet.create({
  container: {
    width: "80%",
    maxWidth: 500,
    padding: 10,
    justifyContent: "space-around",
    backgroundColor: "#EFF5FA",
    borderRadius: 4,
  },
  cardHeading: {
    textAlign: "center",
    color: "#00122C",
  },
  textInput: {
    height: 40,
    padding: 10,
    backgroundColor: "white",
    borderColor: "gray",
    marginVertical: 5,
    borderWidth: 2,
    borderRadius: 4,
  },
});
