import React from "react";
import { View, Text } from "react-native";
import LoginComponent from "../components/Login/LoginComponent";

const HomeScreen = props => {
  return (
    <View style={{ flex: 1 }}>
      <LoginComponent navi={props} />
    </View>
  );
};

export default HomeScreen;
