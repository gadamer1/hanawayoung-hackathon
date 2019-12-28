import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Input, Button, Image } from "react-native-elements";
import { SIGN_UP_REQUEST } from "../reducers/user/actions";
import { TextButton, RaisedTextButton } from 'react-native-material-buttons';

const SignUpScreen = props => {
  const dispatch = useDispatch();
  const { isSignUpSuccess, isSignUping } = useSelector(state => state.user);
  const [nickname, setNickname] = useState("");
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isSignUpSuccess) {
      props.navigation.replace("Map");
    }
  }, [isSignUpSuccess]);

  const _onPressSignUpButton = () => {
    if (nickname.trim() === "") {
      alert("닉네임을 입력해주세요");
    } else if (loginId.trim() === "") {
      alert("아이디를 입력해주세요");
    } else if (password.trim() === "") {
      alert("패스워드를 입력해주세요");
    } else {
      dispatch({
        type: SIGN_UP_REQUEST,
        data: {
          nickname,
          loginId,
          password
        }
      });
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.textStyle}>닉네임</Text>
      <TextInput
        style={styles.input}
        placeholder="영문만 입력 가능"
        value={nickname}
        onChangeText={text => {
          setNickname(text);
        }}
      />
      <Text style={styles.textStyle}>아이디</Text>
      <TextInput
        style={styles.input}
        placeholder="영문만 입력 가능"
        value={loginId}
        onChangeText={text => {
          setLoginId(text);
        }}
      />
      <Text style={styles.textStyle}>비밀번호</Text>
      <TextInput
        style={styles.input}
        placeholder="영문만 입력 가능"
        value={password}
        onChangeText={text => {
          setPassword(text);
        }}
      />
      <View style={styles.container}>
        <TextButton
          type="clear"

          style={styles.buttonStyle}
          title="가입완료"
          onPress={_onPressSignUpButton}
          loading={isSignUping}
        />


      </View>
      <View style={styles.container}>
        <Image
          source={require("../assets/cleantoilet.jpg")}
          style={{ marginBottom: 100, width: 100, height: 100 }}

        />
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"

  },
  textStyle: {

    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 30
  },
  input: {
    marginLeft: 17,
    width: 380,

    fontSize: 17,
    paddingBottom: 3,
    borderColor: "lightgray",
    borderRadius: 60,
    borderWidth: 1,
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 10,
    marginBottom: 20,
    marginTop: 10,

  },
  buttonStyle: {

    borderColor: "black",
    borderWidth: 1,
    borderRadius: 60,
    paddingTop: 10,
    paddingBottom: 10,
    width: 380
  }


});
