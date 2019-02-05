import { createAppContainer, createBottomTabNavigator } from "react-navigation";
import MainScreen from "./screens/MainScreen";
import AnalyticsScreen from "./screens/AnalyticsScreen";
import SettingsScreen from "./screens/SettingsScreen";

const TabNavigator = createBottomTabNavigator({
  Main: MainScreen,
  Analytics: AnalyticsScreen,
  Settings: SettingsScreen
});

export default createAppContainer(TabNavigator);
