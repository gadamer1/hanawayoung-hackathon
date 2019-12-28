import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View } from "react-native";
import { Marker } from "react-native-maps";
import { SET_CURRENT_TOILET } from "../../reducers/toilet/actions";

const MarkerComponent = props => {
  const { toilets } = useSelector(state => state.toilet);
  const dispatch = useDispatch();

  const _onPressMarker = toilet => {
    dispatch({
      type: SET_CURRENT_TOILET,
      data: toilet
    });
  };

  return (
    <View style={{ flex: 1 }}>
      {toilets &&
        toilets.map((v, index) => {
          return (
            <Marker
              image={require("../../assets/toilet-.png")}
              style={{ width: 40, height: 40 }}
              key={`${JSON.stringify(v)}`}
              onPress={() => {
                _onPressMarker(v);
              }}
              coordinate={{
                longitude: v.location[0],
                latitude: v.location[1]
              }}
            />
          );
        })}
    </View>
  );
};

export default MarkerComponent;
