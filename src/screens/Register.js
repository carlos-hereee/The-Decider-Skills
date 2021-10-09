import React, { useContext } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Pressable,
} from "react-native";
import { Formik } from "formik";
import { Button, Text } from "react-native-elements";
import { HandbookContext } from "../utils/Context";
import * as yup from "yup";
import HomeBG from "../components/HomeBG";
import { navigate } from "../utils/RootNavigation";
import { globalStyles } from "../styles";

const signUpValidationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup
    .string()
    .min(6, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match")
    .required("Confirm password is required"),
});
const Register = () => {
  const { register, authError } = useContext(HandbookContext);

  return (
    <HomeBG>
      <KeyboardAvoidingView style={[styles.container, globalStyles.shadow]}>
        <Text h2 style={{ textAlign: "center" }}>
          Create Account
        </Text>
        <Formik
          initialValues={{ username: "", password: "", confirmPassword: "" }}
          onSubmit={(values) => register(values)}
          validationSchema={signUpValidationSchema}>
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
                {authError}
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
              <Text style={{ color: "red" }}>
                {touched.confirmPassword && errors.confirmPassword}
              </Text>
              <Text>Confirm Password: </Text>
              <TextInput
                name="confirmPassword"
                placeholder=" Confirm Password"
                style={styles.textInput}
                onChangeText={handleChange("confirmPassword")}
                onBlur={handleBlur("confirmPassword")}
                value={values.confirmPassword}
                secureTextEntry
              />
              <Button
                onPress={handleSubmit}
                style={{ marginTop: 10 }}
                title="Submit"
                disabled={!isValid}
              />
            </View>
          )}
        </Formik>
        <Pressable onPress={() => navigate("Auth")}>
          <Text
            style={{
              textAlign: "center",
              color: "blue",
              textDecorationLine: "underline",
            }}>
            Log In
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </HomeBG>
  );
};
export default Register;
const styles = StyleSheet.create({
  container: {
    width: "80%",
    maxWidth: 500,
    padding: 10,
    justifyContent: "space-around",
    backgroundColor: "#EFF5FA",
    borderRadius: 4,
  },
  textInput: {
    height: 40,
    padding: 10,
    backgroundColor: "white",
    borderColor: "gray",
    marginVertical: "1%",
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 4,
  },
});
