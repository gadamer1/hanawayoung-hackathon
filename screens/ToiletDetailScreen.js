import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View } from "react-native";
import { Input, Button, Text } from "react-native-elements";
import { POST_REVIEW_REQUEST } from "../reducers/toilet/actions";

const ToiletDetailScreen = props => {
  const { toilet, isPosting, isPostingSuccess } = useSelector(
    state => state.toilet
  );

  useEffect(() => {
    if (isPostingSuccess) {
      console.log(toilet);
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

  const _onChangeContent = text => {
    setContent(text);
  };

  return (
    <View>
      <Text>{toilet.description}</Text>
      <Text>{toilet.name}</Text>
      {toilet.reviews.map(v => {
        return <Text>{v.content}</Text>;
      })}
      <Input
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={_onChangeContent}
        value={content}
      />
      <Button title="hi" onPress={_onPressPostReview} loading={isPosting} />
    </View>
  );
};

export default ToiletDetailScreen;
