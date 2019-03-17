import React from "react";
import { TouchableOpacity } from "react-native";
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
      tabBarButtonComponent: (props: any) => {
        const isActive = props.children[0].props.activeOpacity === 1;

        return (
          <TouchableOpacity
            {...props}
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "flex-end",
              flexDirection: "column",
              paddingTop: isActive ? 12 : 15,
              borderTopColor: Color.Sky,
              borderTopWidth: isActive ? 3 : 0
            }}
          />
        );
      },
      tabBarIcon: ({ focused }) => {
        const name = getIconName(navigation.state.routeName);
        const color = focused ? "sky" : "gray";

        return <Icon name={name} color={color} />;
      }
    }),
    tabBarOptions: {
      showLabel: false,
      style: {
        paddingTop: 0,
        borderTopWidth: 0
      },
      activeTintColor: Color.Sky,
      inactiveTintColor: Color.Gray
    }
  }
);
