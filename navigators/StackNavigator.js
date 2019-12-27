import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "../screens/HomeScreen";

const StackNavigator = createStackNavigator({
  home: HomeScreen
});

export default createAppContainer(StackNavigator);
