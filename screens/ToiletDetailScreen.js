import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, TextInput, Button } from "react-native";
import { POST_REVIEW_REQUEST } from "../reducers/toilet/actions";

const ToiletDetailScreen = props => {
  const { toilet } = useSelector(state => state.toilet);
  const [toggle, setToggle] = useState(false);
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(0);
  const dispatch = useDispatch();
  const _onPressPostReview = () => {
    dispatch({
      type: POST_REVIEW_REQUEST,
      data: {
        _id: toilet._id,
        content,
        rating
      }
    });
  };

  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={text => setContent(text)}
        value={content}
      />
      <Button title="hi" onPress={_onPressPostReview} />
    </View>
  );
};

export default ToiletDetailScreen;
