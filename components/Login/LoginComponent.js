import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  View,
  Button,
  Text,
  StyleSheet,
  TextInput,
  ToolbarAndroidComponent,
  Image
} from "react-native";
import { LOGIN_REQUEST } from "../../reducers/user/actions";
import { SIGN_UP_REQUEST } from "../../reducers/user/actions";

export default function App(props) {
  const { isLoginSuccess } = useSelector(state => state.user);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoginSuccess) {
      props.navi.navigation.navigate("Map");
    }
  }, [isLoginSuccess]);

  const _onPressLoginButton = () => {
    if (id.trim() !== "" && password.trim() !== "") {
      dispatch({
        type: LOGIN_REQUEST,
        data: {
          loginId: id,
          password
        }
      });
    }
    alert("login pressed!");
  };

  const _onChangeId = text => {
    setId(text);
  };
  const _onChangePassword = text => {
    setPassword(text);
  };

  const _onPressSignUpButton = () => {
    props.navi.navigation.navigate("SignUp");
  };

  return (
    <View style={styles.container}>
      <Image
        style={{ width: 100, height: 100 }}
        source={{ uri: "../../assets/toilet.svg" }}
      />
      <TextInput
        style={styles.input}
        value={id}
        onChange={_onChangeId}
        placeholder="id"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChange={_onChangePassword}
        placeholder="password"
      />
      <Button
        type="outline"
        style={styles.loginButton}
        onPress={_onPressLoginButton}
        title="Login"
      ></Button>
      <Button
        value="NORMAL RAISED"
        style={styles.signUpButton}
        onPress={_onPressSignUpButton}
        title="Sign Up"
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    margin: 15,
    width: 100,
    height: 40,
    borderColor: "#7a42f4",
    borderWidth: 1
  },
  loginButton: {
    backgroundColor: "#7a42f4",
    padding: 10,
    margin: 15,
    height: 40
  },
  signUpButton: {
    backgroundColor: "#ffffff",
    padding: 10,
    margin: 15,
    height: 40
  },
  img: {
    width: 50,
    height: 50
  }
});
