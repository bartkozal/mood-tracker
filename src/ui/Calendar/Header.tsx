import React from "react";
import { View, TouchableOpacity } from "react-native";
import Icon from "../Icon";
import Title from "../Text/Title";

interface Props {
  year: number;
  onLeftChevronPress: () => void;
  onRightChevronPress: () => void;
}

export default class Header extends React.Component<Props> {
  render() {
    const { year, onLeftChevronPress, onRightChevronPress } = this.props;

    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: 16,
          paddingBottom: 16
        }}
      >
        <TouchableOpacity onPress={onLeftChevronPress}>
          <Icon name="chevron-left" color="ink" />
        </TouchableOpacity>

        <Title>{year}</Title>

        <TouchableOpacity onPress={onRightChevronPress}>
          <Icon name="chevron-right" color="ink" />
        </TouchableOpacity>
      </View>
    );
  }
}
