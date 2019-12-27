import React, { useState } from "react";
import { useSelector } from "react-redux";
import { View } from "react-native";
import { Button, Input } from "react-native-elements";
import axios from "axios";
const Help = props => {
  const [detail, setDetail] = useState("1s");
  const { location } = useSelector(state => state.user);
  const _onPressButton = () => {
    if (detail.trim() === "") {
      return alert("정확하게 설명해주세요");
    }

    const data = {
      x_wgs84: location.longitude,
      y_wgs84: location.latitude,
      detail
    };
    return axios.post("http://54.180.101.221:4000/help", data);
  };

  return (
    <View style={{ flex: 1 }}>
      <Input
        style={{ height: 300, borderColor: "gray", borderWidth: 1 }}
        value={detail}
        onChangeText={text => setDetail(text)}
      />
      <Button title="전송" onPress={_onPressButton} />
    </View>
  );
};

export default Help;
