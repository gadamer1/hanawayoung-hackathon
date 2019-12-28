import React, { useEffect } from "react";
import { useSelector, AsyncStorage } from "react-redux";
import { View, Text, StyleSheet } from "react-native";
import * as TaskManager from "expo-task-manager";
import * as BackgroundFetch from "expo-background-fetch";
import * as Location from "expo-location";
import axios from "axios";

TaskManager.defineTask("UPDATE_LOCATION", async ({ data, error }) => {
  try {
    if (error) {
      // Error occurred - check `error.message` for more details.
      return;
    }
    if (data) {
      const { locations } = data;
      const datas = {
        x_wgs84: locations[0].coords.longitude,
        y_wgs84: locations[0].coords.latitude
      };
      // do something with the locations captured in the background
      if (AsyncStorage) {
        AsyncStorage.getItem("user").then(accessToken => {
          axios.put(
            `http://54.180.101.221:4000/users/${accessToken.user._id}/location`,
            datas
          );
        });
      }
    }
  } catch (e) {
    console.error(e);
  }
});

const LoadingMap = props => {
  const { user } = useSelector(state => state.user);

  const startLocationUpdates = async () => {
    await Location.startLocationUpdatesAsync("UPDATE_LOCATION", {
      accuracy: Location.Accuracy.Balanced
    });
  };

  useEffect(() => {
    startLocationUpdates();
  }, []);

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
