import React, { useContext } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import { Button } from "react-native-elements";
import { Formik } from "formik";
import { HandbookContext } from "../utils/Context";
import * as yup from "yup";

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email Address is Required"),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
});
const Login = () => {
  const { signIn, authError } = useContext(HandbookContext);
  return (
    <KeyboardAvoidingView>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => signIn(values)}
        validationSchema={loginValidationSchema}>
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
            {authError && <Text> {authError}</Text>}
            <Text>Email: </Text>
            <Text style={{ fontSize: 10, color: "red" }}>
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
            <Text style={{ fontSize: 10, color: "red" }}>
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
            <Button onPress={handleSubmit} title="Submit" disabled={!isValid} />
          </View>
        )}
      </Formik>
    </KeyboardAvoidingView>
  );
};
export default Login;
const styles = StyleSheet.create({
  textInput: {
    height: 40,
    padding: "2%",
    backgroundColor: "white",
    borderColor: "gray",
    marginVertical: "1%",
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 4,
  },
});
