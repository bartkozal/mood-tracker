import React from "react";
import { createAppContainer } from "react-navigation";
import { StatusBar } from "react-native";
import { Font } from "expo";
import { Provider } from "react-redux";
import store from "./state";
import TabNavigator from "./app/TabNavigator";

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
    return this.state.isFontLoaded ? (
      <Provider store={store}>
        <StatusBar barStyle="dark-content" />
        <AppContainer />
      </Provider>
    ) : null;
  }
}
