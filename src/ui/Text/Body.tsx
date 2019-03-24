import React from "react";
import { Text, Linking } from "react-native";
import Color from "../Color";

interface Props {
  color: Color;
  bold?: boolean;
  openUrl?: string;
}

export default class Body extends React.Component<Props> {
  static defaultProps = {
    color: Color.Ink
  };

  render() {
    const { color, bold, openUrl } = this.props;

    return (
      <Text
        style={{
          fontFamily: bold || openUrl ? "NunitoBold" : "Nunito",
          fontSize: 14,
          color
        }}
        onPress={openUrl ? () => Linking.openURL(openUrl) : undefined}
      >
        {this.props.children}
      </Text>
    );
  }
}
