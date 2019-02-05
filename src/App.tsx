import React from "react";
import { createAppContainer, createBottomTabNavigator } from "react-navigation";
import CalendarScreen from "./screens/CalendarScreen";
import StatsScreen from "./screens/StatsScreen";
import SettingsScreen from "./screens/SettingsScreen";

const TabNavigator = createBottomTabNavigator({
  Calendar: CalendarScreen,
  Stats: StatsScreen,
  Settings: SettingsScreen
});

export default createAppContainer(TabNavigator);
