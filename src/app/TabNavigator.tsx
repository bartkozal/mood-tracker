import React from "react";
import { createBottomTabNavigator } from "react-navigation";
import MainScreen from "../screens/MainScreen";
import AnalyticsScreen from "../screens/AnalyticsScreen";
import SettingsScreen from "../screens/SettingsScreen";
import Icon from "../ui/Icon";
import Color from "../ui/Color";

const Route = {
  Main: "Main",
  Analytics: "Analytics",
  Settings: "Settings"
};

const getIconName = (routeName: string) =>
  ({
    [Route.Main]: "calendar",
    [Route.Analytics]: "chart",
    [Route.Settings]: "sliders"
  }[routeName]);

export default createBottomTabNavigator(
  {
    [Route.Main]: MainScreen,
    [Route.Analytics]: AnalyticsScreen,
    [Route.Settings]: SettingsScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const name = getIconName(navigation.state.routeName);
        const color = focused ? "sky" : "gray";

        return <Icon name={name} color={color} />;
      }
    }),
    tabBarOptions: {
      showLabel: false,
      style: {
        paddingTop: 16,
        borderTopColor: Color.Sky,
        borderTopWidth: 3
      },
      activeTintColor: Color.Sky,
      inactiveTintColor: Color.Gray
    }
  }
);
