import React from "react";
import { createAppContainer, createBottomTabNavigator } from "react-navigation";
import { Font } from "expo";
import MainScreen from "./screens/MainScreen";
import AnalyticsScreen from "./screens/AnalyticsScreen";
import SettingsScreen from "./screens/SettingsScreen";

const TabNavigator = createBottomTabNavigator({
  Main: MainScreen,
  Analytics: AnalyticsScreen,
  Settings: SettingsScreen
});

const AppContainer = createAppContainer(TabNavigator);

export default class App extends React.Component {
  state = {
    isFontLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      NunitoBold: require("../assets/fonts/Nunito-ExtraBold.ttf"),
      Nunito: require("../assets/fonts/Nunito-Regular.ttf")
    });

    this.setState({ isFontLoaded: true });
  }

  render() {
    return this.state.isFontLoaded ? <AppContainer /> : null;
  }
}
