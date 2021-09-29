import React, { useContext } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  View,
  TextInput,
  Pressable,
} from "react-native";
import { Formik } from "formik";
import { Button, Text } from "react-native-elements";
import { HandbookContext } from "../utils/Context";
import * as yup from "yup";
import HomeBG from "./HomeBG";
import { globalStyles } from "../styles";
import { navigate } from "../utils/RootNavigation";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email is required"),
});
export default function ForgotPassword() {
  const { forgotpassword, forgotpasswordMessage } = useContext(HandbookContext);
  return (
    <HomeBG>
      <View style={[styles.container, globalStyles.shadow]}>
        <Text h2 style={{ paddingBottom: 10 }}>
          Forgot Password
        </Text>
        <Text style={{ textAlign: "center", paddingBottom: 10 }}>
          Enter the email associated with your accound and well send an email
          with intructions to reset your password
        </Text>
        <KeyboardAvoidingView>
          <Formik
            initialValues={{ email: "" }}
            onSubmit={(values) => forgotpassword(values)}
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
                {forgotpasswordMessage ? (
                  <>
                    <Text
                      h4
                      style={{
                        textAlign: "center",
                        marginTop: 20,
                      }}>
                      {forgotpasswordMessage}
                    </Text>
                    <Button title="Go sign In" />
                  </>
                ) : (
                  <>
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
                    <Button
                      onPress={handleSubmit}
                      title="Submit"
                      disabled={!isValid}
                      style={{ marginTop: 10 }}
                    />
                  </>
                )}
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
        <Pressable onPress={() => navigate("Register")}>
          <Text
            style={{
              textAlign: "center",
              color: "blue",
              textDecorationLine: "underline",
              marginTop: 10,
            }}>
            Create an Account?
          </Text>
        </Pressable>
      </View>
    </HomeBG>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    maxWidth: 500,
    padding: "5%",
    justifyContent: "space-around",
    backgroundColor: "#EFF5FA",
    borderRadius: 4,
  },
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
