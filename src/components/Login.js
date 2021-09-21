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

const Login = () => {
  const { signIn } = useContext(HandbookContext);
  return (
    <KeyboardAvoidingView>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => signIn(values)}>
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <Text>Username: </Text>
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
            <TextInput
              name="password"
              placeholder=" Password"
              style={styles.textInput}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              secureTextEntry
            />
            <Button onPress={handleSubmit} title="Submit" />
          </View>
        )}
      </Formik>
    </KeyboardAvoidingView>
  );
};
export default Login;
const styles = StyleSheet.create({
  loginContainer: {
    width: "80%",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    elevation: 10,
    backgroundColor: "#e6e6e6",
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
