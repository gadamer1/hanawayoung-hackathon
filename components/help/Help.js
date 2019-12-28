import React, { useState } from "react";
import { useSelector } from "react-redux";
import { View, TextInput, StyleSheet } from "react-native";
import { Button, Text, Icon } from "react-native-elements";
import axios from "axios";
const Help = props => {
  const [detail, setDetail] = useState("");
  const { location } = useSelector(state => state.user);
  const _onPressButton = () => {
    if (detail.trim() === "") {
      return alert("정확하게 설명해주세요");
    }

    const data = {
      x_wgs84: location.longitude,
      y_wgs84: location.latitude,
      detail
    };
    return axios.post("http://54.180.101.221:4000/help", data);
  };

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 30 }}>도와주세요!</Text>
      <Text>주위 사람들에게 도움을 요청합니다</Text>
      <View style={styles.SectionStyle}>
        <Icon size={33} name="heart-outlined" type="entypo" color="#000" />
        <TextInput
          style={styles.input}
          value={detail}
          onChangeText={text => setDetail(text)}
          placeholder="도움을 받고싶습니다"
        />
      </View>
      <Button title="help 요청" type="outline" onPress={_onPressButton} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    marginLeft: 13,
    width: 335,
    marginTop: 20,
    fontSize: 20,
    paddingBottom: 3
  },
  buttonStyle: {
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 100,
    marginTop: 20,
    width: 370
  },
  SectionStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 2
  },

  img: {
    width: 50,
    height: 50
  }
});

export default Help;
