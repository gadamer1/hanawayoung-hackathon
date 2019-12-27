import React from "react";
import { StyleSheet } from "react-native";
import StackNavigator from "./navigators/StackNavigator";
import TabNavigator from "./navigators/TabNavigator";
import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <TabNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
