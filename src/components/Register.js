import React, { useContext, useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Pressable,
} from "react-native";
import { Formik } from "formik";
import { Button, Text, CheckBox } from "react-native-elements";
import { HandbookContext } from "../utils/Context";
import * as yup from "yup";
import HomeBG from "./HomeBG";
import { navigate } from "../utils/RootNavigation";

const signUpValidationSchema = yup.object().shape({
  email: yup.string().required("Email or Username is required"),
  password: yup
    .string()
    .matches(/\d/, "Password must have a number")
    .matches(
      /[!@#$%^&*()\-_"=+{}; :,<.>]/,
      "Password must have a special character"
    )
    .min(6, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match")
    .required("Confirm password is required"),
});
const Register = () => {
  const { register, authError, client } = useContext(HandbookContext);
  const [checked, setChecked] = useState(client.rememberMe);

  return (
    <HomeBG>
      <View style={styles.container}>
        <Text h2 style={{ textAlign: "center" }}>
          Create Account
        </Text>
        <KeyboardAvoidingView>
          <Formik
            initialValues={{ email: "", password: "", confirmPassword: "" }}
            onSubmit={(values) => register(values, checked)}
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
                <Text>Email: </Text>
                <Text style={{ color: "red" }}>
                  {touched.email && errors.email}
                </Text>
                <TextInput
                  name="email"
                  placeholder=" Email Address"
                  style={styles.textInput}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
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
                <CheckBox
                  title="Remember Me"
                  checked={checked}
                  containerStyle={{ backgroundColor: "transparent" }}
                  onPress={() => setChecked(!checked)}
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
        </KeyboardAvoidingView>
        <Pressable onPress={() => navigate("Auth")}>
          <Text
            style={{
              textAlign: "center",
              color: "blue",
              textDecorationLine: "underline",
              marginTop: 10,
            }}>
            Sign In
          </Text>
        </Pressable>
        <Pressable onPress={() => navigate("ForgotPassword")}>
          <Text
            style={{
              textAlign: "center",
              color: "blue",
              textDecorationLine: "underline",
              marginTop: 10,
            }}>
            Forgot Password?
          </Text>
        </Pressable>
      </View>
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
