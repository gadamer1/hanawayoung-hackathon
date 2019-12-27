import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import MapScreen from "../screens/MapScreen";
import ToiletDetailScreen from "../screens/ToiletDetailScreen";

const StackNavigator = createStackNavigator({
  Map: MapScreen,
  ToiletDetail: ToiletDetailScreen
});

export default createAppContainer(StackNavigator);
