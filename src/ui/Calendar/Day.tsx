import React from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import Body from "../Text/Body";

interface Props {
  day: number;
  onPress: (day: number) => void;
}

export default class Day extends React.Component<Props> {
  state = {
    isPopoverOpen: false
  };

  render() {
    const { day, onPress } = this.props;

    return (
      <TouchableWithoutFeedback onPress={() => onPress(day)}>
        <View>
          <Body>{day}</Body>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
