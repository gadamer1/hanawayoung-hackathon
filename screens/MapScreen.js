import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";
import MapComponent from "../components/map/MapComponent";
import LoadingMap from "../components/loading/LoadingMap";
import { GET_CURRENT_LOCATION } from "../reducers/user/actions";
import { Button } from "@shoutem/ui";

const Map = props => {
  const dispatch = useDispatch();
  const { location } = useSelector(state => state.user);

  useEffect(() => {
    async function getPermission() {
      try {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== "granted") {
        }
        let location = await Location.getCurrentPositionAsync({});
        dispatch({
          type: GET_CURRENT_LOCATION,
          data: location
        });
      } catch (e) {
        console.error(e);
      }
    }
    getPermission();
  }, []);

  if (location) {
    return <MapComponent navi={props} />;
  } else {
    return <LoadingMap />;
  }
};

export default Map;
