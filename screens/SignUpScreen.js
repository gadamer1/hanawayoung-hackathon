import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text } from "react-native";
import { Input, Button } from "react-native-elements";
import { SIGN_UP_REQUEST } from "../reducers/user/actions";

const SignUpScreen = props => {
  const dispatch = useDispatch();
  const { isSignUpSuccess, isSignUping } = useSelector(state => state.user);
  const [nickname, setNickname] = useState("");
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isSignUpSuccess) {
      props.navigation.navigate("Map");
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
      <Input
        placeholder="닉네임 입력해주세요"
        value={nickname}
        onChangeText={text => {
          setNickname(text);
        }}
      />
      <Input
        placeholder="아이디 입력해주세요"
        value={loginId}
        onChangeText={text => {
          setLoginId(text);
        }}
      />
      <Input
        placeholder="비밀번호 입력해주세요"
        value={password}
        onChangeText={text => {
          setPassword(text);
        }}
      />

      <Button
        title="전송"
        onPress={_onPressSignUpButton}
        loading={isSignUping}
      />
    </View>
  );
};

export default SignUpScreen;
