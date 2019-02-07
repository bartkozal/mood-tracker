import React from "react";
import { Text } from "react-native";
import Color from "../Color";

export default class Title extends React.Component {
  render() {
    return (
      <Text
        style={{ fontFamily: "NunitoBold", fontSize: 28, color: Color.Ink }}
      >
        {this.props.children}
      </Text>
    );
  }
}
