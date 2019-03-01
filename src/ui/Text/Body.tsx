import React from "react";
import { Text } from "react-native";
import Color from "../Color";

interface Props {
  color: Color;
  bold?: boolean;
}

export default class Body extends React.Component<Props> {
  static defaultProps = {
    color: Color.Ink
  };

  render() {
    const { color, bold } = this.props;

    return (
      <Text
        style={{
          fontFamily: bold ? "NunitoBold" : "Nunito",
          fontSize: 14,
          color
        }}
      >
        {this.props.children}
      </Text>
    );
  }
}
