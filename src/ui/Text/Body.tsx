import React from "react";
import { Text } from "react-native";
import Color from "../Color";

export default class Body extends React.Component {
  render() {
    return (
      <Text style={{ fontFamily: "Nunito", fontSize: 14, color: Color.Ink }}>
        {this.props.children}
      </Text>
    );
  }
}
