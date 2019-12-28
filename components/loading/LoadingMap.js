import React, { useEffect } from "react";
import { useSelector, AsyncStorage } from "react-redux";
import { View, Text, StyleSheet } from "react-native";
import * as TaskManager from "expo-task-manager";
import * as BackgroundFetch from "expo-background-fetch";
import * as Location from "expo-location";
import axios from "axios";

const LoadingMap = props => {
  const { user } = useSelector(state => state.user);

  return (
    <View style={styles.container}>
      <Text>loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default LoadingMap;
