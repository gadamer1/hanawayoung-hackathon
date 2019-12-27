import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import MapScreen from "../screens/MapScreen";
import ToiletDetailScreen from "../screens/ToiletDetailScreen";
import HomeScreen from "../screens/HomeScreen";
import SignUpScreen from "../screens/SignUpScreen";

const StackNavigator = createStackNavigator({
  Home: HomeScreen,
  SignUp: SignUpScreen,
  Map: MapScreen,
  ToiletDetail: ToiletDetailScreen
});

export default createAppContainer(StackNavigator);
