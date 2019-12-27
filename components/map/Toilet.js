import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Card,
  Image,
  View,
  Subtitle,
  Caption,
  Title,
  TouchableOpacity,
  Overlay
} from "@shoutem/ui";

const Toilet = props => {
  const { toilet } = useSelector(state => state.toilet);

  const _onPressToilet = () => {
    props.navi.navigation.navigate("ToiletDetail");
  };

  if (toilet) {
    return (
      <TouchableOpacity style={{ flex: 1 }} onPress={_onPressToilet}>
        <Overlay style={{ flex: 1 }}>
          {toilet.images ? (
            <Image styleName="medium-wide" source={{ uri: toilet.images[0] }} />
          ) : (
            <Image styleName="medium-wide" />
          )}
          <View styleName="content">
            <Subtitle>{toilet.name}</Subtitle>
            <Caption>{toilet.description}</Caption>
          </View>
        </Overlay>
      </TouchableOpacity>
    );
  }

  return <View></View>;
};
export default Toilet;
