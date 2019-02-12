import React from "react";
import { SafeAreaView } from "react-navigation";
import { LinearGradient } from "expo";
import { Gradient } from "./Color";

export default class Screen extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <LinearGradient
          colors={Gradient.Background}
          style={{ minHeight: "100%" }}
        >
          {this.props.children}
        </LinearGradient>
      </SafeAreaView>
    );
  }
}
