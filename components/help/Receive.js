import React from "react";
import { useSelector } from "react-redux";
import { View } from "react-native";
import { Button } from "react-native-elements";
import MapView, { Marker } from "react-native-maps";
const Receive = props => {
  const _onPressButton = () => {
    return axios.get("http://54.180.101.221:4000/help/test");
  };

  const { location } = useSelector(state => state.user);

  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }}
    >
      <Marker
        coordinate={{
          longitude: props.data.location[0],
          latitude: props.data.location[0]
        }}
      />
    </MapView>
  );
};

export default Receive;
