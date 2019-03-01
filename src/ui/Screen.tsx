import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-navigation";
import { LinearGradient } from "expo";
import { Gradient } from "./Color";

export default class Screen extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <LinearGradient colors={Gradient.Background}>
          {this.props.children}
        </LinearGradient>
      </SafeAreaView>
    );
  }
}
