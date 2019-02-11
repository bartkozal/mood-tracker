import React from "react";
import { Text } from "react-native";
import Color from "../Color";

interface Props {
  color: Color;
}

export default class Subheader extends React.Component<Props> {
  static defaultProps = {
    color: Color.Ink
  };

  render() {
    const { color } = this.props;

    return (
      <Text style={{ fontFamily: "Nunito", fontSize: 18, color }}>
        {this.props.children}
      </Text>
    );
  }
}
