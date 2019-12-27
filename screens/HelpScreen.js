import React, { useState, useEffect } from "react";
import { Text, Button } from "react-native-elements";
import { View } from "react-native";
import { Notifications } from "expo";
import { useSelector } from "react-redux";
import * as Permissions from "expo-permissions";
import axios from "axios";
import Help from "../components/help/Help";
import Receive from "../components/help/Receive";

const PUSH_RESISTRAION_ENDPOINT = `http://54.180.101.221:4000/users`;
const MESSAGE_ENDPOINT = "http://54.180.101.221:4000/message";

const HelpScreen = props => {
  const { user } = useSelector(state => state.user);
  const [notification, setNotification] = useState("");
  const [messageText, setMessageText] = useState("");
  const [first, setFirst] = useState(true);
  const [notificationSubscription, setNotificationSubscription] = useState(
    null
  );

  useEffect(() => {
    if (user && first) {
      console.log(user);
      setFirst(false);
      const registerForPushNotificationAsync = async () => {
        const { status } = await Permissions.askAsync(
          Permissions.NOTIFICATIONS
        );
        if (status !== "granted") {
          return;
        }

        let token = await Notifications.getExpoPushTokenAsync();

        const data = {
          token: {
            value: token
          },
          user: {
            username: "도훈",
            name: "fuck"
          }
        };
        console.log(token);

        return await axios.put(
          `http://54.180.101.221:4000/users/${user.user._id}/token`,
          data
        );
      };
      registerForPushNotificationAsync();
      console.log("hi");
      setNotificationSubscription(
        Notifications.addListener(handleNotification)
      );
    }
  }, [user]);

  // 헬프를 받았을 때
  useEffect(() => {
    if (notification && notification.data) {
    }
  }, [notification]);

  const handleNotification = notification => {
    setNotification(notification);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Help />
      {notification && notification.data && (
        <Receive data={notification.data} />
      )}
    </View>
  );
};

export default HelpScreen;
