import React from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
const Help = props => {
  const _onPressButton = () => {
    return axios.get("http://54.180.101.221:4000/help/test");
  };

  return (
    <View>
      <Button title="전송" onPress={_onPressButton} />
    </View>
  );
};

export default Help;
