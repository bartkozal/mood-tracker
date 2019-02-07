import React from "react";
import { Text } from "react-native";
import Color from "../Color";

export default class Subheader extends React.Component {
  render() {
    return (
      <Text style={{ fontFamily: "Nunito", fontSize: 18, color: Color.Ink }}>
        {this.props.children}
      </Text>
    );
  }
}
