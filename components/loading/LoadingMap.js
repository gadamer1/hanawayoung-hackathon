import React from "react";
import { View, Text, StyleSheet } from "react-native";

const LoadingMap = props => {
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
