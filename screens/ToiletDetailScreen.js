import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TextButton, RaisedTextButton } from "react-native-material-buttons";

import { View, StyleSheet, TextInput, ScrollView } from "react-native";
import { Input, Button, Icon, Slider, Text } from "react-native-elements";
import { POST_REVIEW_REQUEST } from "../reducers/toilet/actions";

const ToiletDetailScreen = props => {
  const { toilet, isPosting, isPostingSuccess } = useSelector(
    state => state.toilet
  );

  useEffect(() => {
    if (isPostingSuccess) {
      props.navigation.pop();
    }
  }, [isPostingSuccess]);
  const [toggle, setToggle] = useState(false);
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(1);
  const dispatch = useDispatch();
  const _onPressPostReview = () => {
    if (content.trim() !== "") {
      dispatch({
        type: POST_REVIEW_REQUEST,
        data: {
          _id: toilet._id,
          content,
          rating
        }
      });
    } else {
      alert("텍스트를 입력해주세요!");
    }
  };

  const _onChangeContent = e => {
    console.log(toilet);
    setContent(e.nativeEvent.text);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={{ alignItems: "center", height: 100 }}>
        <Text h3>{toilet.name}</Text>
        <Text h4>{toilet.description}</Text>
        <Text h4>{toilet.rating}</Text>
      </View>
      <View style={{ alignItems: "flex-start", justifyContent: "center" }}>
        {toilet.reviews.map(v => {
          return (
            <View style={{ paddingBottom: 30 }}>
              <Text style={{ fontSize: 20 }}>
                유저이름 : {v.writer.nickname}
              </Text>
              <Text style={{ fontSize: 20 }}>내용: {v.content}</Text>
              <Text style={{ fontSize: 20 }}>별점: {v.rating}</Text>
            </View>
          );
        })}
      </View>
      <View
        style={{
          alignItems: "stretch",
          justifyContent: "center",
          height: 100
        }}
      >
        <Slider
          value={rating}
          onValueChange={value => setRating(value)}
          maximumValue={5}
          minimumValue={1}
          step={1}
        />
        <Text>점수: {rating}</Text>
      </View>
      <View style={styles.SectionStyle}>
        <Icon size={33} name="lock" type="font-awesome" color="#000" />
        <TextInput
          style={styles.input}
          value={content}
          onChange={_onChangeContent}
          placeholder="리뷰남기기"
        />
      </View>

      <TextButton
        type="clear"
        style={styles.buttonStyle}
        onPress={_onPressPostReview}
        title="리뷰 남기기"
      ></TextButton>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
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

export default ToiletDetailScreen;
