import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, AsyncStorage } from "react-redux";
import { TextButton, RaisedTextButton } from "react-native-material-buttons";
import { Button, Input, Icon, Image } from "react-native-elements";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ToolbarAndroidComponent
} from "react-native";
import { LOGIN_REQUEST } from "../../reducers/user/actions";

export default function App(props) {
  const { isLoginSuccess, isLoging, isLoginFailure, user } = useSelector(
    state => state.user
  );
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoginSuccess) {
      props.navi.navigation.replace("Map");
    }
  }, [isLoginSuccess]);

  useEffect(() => {
    if (isLoginFailure) {
      alert("로그인 실패");
    }
  }, [isLoginFailure]);

  const _onPressLoginButton = () => {
    if (id.trim() !== "" && password.trim() !== "") {
      dispatch({
        type: LOGIN_REQUEST,
        data: {
          loginId: id,
          password
        }
      });
    } else {
      alert("로그인 정보를 입력해주세요");
    }
  };

  const _onChangeId = e => {
    setId(e.nativeEvent.text);
  };
  const _onChangePassword = e => {
    setPassword(e.nativeEvent.text);
  };

  const _onPressSignUpButton = () => {
    props.navi.navigation.navigate("SignUp");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/cleantoilet.jpg")}
        style={{ width: 200, height: 200 }}
      />
      <View style={{ height: 20 }}></View>
      <View style={styles.SectionStyle}>
        <Icon size={33} name="user" type="font-awesome" color="#000" />
        <TextInput
          style={styles.input}
          value={id}
          onChange={_onChangeId}
          placeholder="id"
        />
      </View>
      <View style={styles.SectionStyle}>
        <Icon size={33} name="lock" type="font-awesome" color="#000" />
        <TextInput
          style={styles.input}
          value={password}
          onChange={_onChangePassword}
          placeholder="password"
        />
      </View>
      <View style={{ height: 20 }}></View>

      <TextButton
        type="clear"
        style={styles.buttonStyle}
        onPress={_onPressLoginButton}
        title="Login"
        loading={isLoging}
        fontFamily="Helvetica"
      ></TextButton>
      <TextButton
        type="clear"
        style={styles.buttonStyle}
        onPress={_onPressSignUpButton}
        title="Sign Up"
      ></TextButton>
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
    marginLeft: 13,
    width: 335,
    marginTop: 20,
    fontSize: 20,
    paddingBottom: 3
  },
  buttonStyle: {
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 100,
    marginTop: 20,
    width: 370
  },
  SectionStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 2
  },

  img: {
    width: 50,
    height: 50
  }
});
