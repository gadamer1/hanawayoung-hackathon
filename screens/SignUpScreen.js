import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { SIGN_UP_REQUEST } from "../reducers/user/actions";

const SignUpScreen = props => {
  const [nickname, setNickname] = useState("");
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");

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
      <TextInput
        placeholder="닉네임 입력해주세요"
        value={nickname}
        onChangeText={text => {
          setNickname(text);
        }}
      />
      <TextInput
        placeholder="아이디 입력해주세요"
        value={loginId}
        onChangeText={text => {
          setLoginId(text);
        }}
      />
      <TextInput
        placeholder="비밀번호 입력해주세요"
        value={password}
        onChangeText={text => {
          setPassword(text);
        }}
      />

      <Button title="전송" onPressButton={_onPressSignUpButton} />
    </View>
  );
};

export default SignUpScreen;
