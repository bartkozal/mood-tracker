import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-navigation";

export default class MainScreen extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <Text>Hello from MainScreen</Text>
      </SafeAreaView>
    );
  }
}
