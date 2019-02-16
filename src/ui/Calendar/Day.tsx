import React from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import Body from "../Text/Body";
import EmojiPopover from "../EmojiPopover";

interface Props {
  day: number;
}

export default class Day extends React.Component<Props> {
  state = {
    isPopoverVisible: false
  };

  dayView = React.createRef<TouchableWithoutFeedback>();

  setIsPopoverVisible = (isPopoverVisible: boolean) => {
    this.setState({ isPopoverVisible });
  };

  render() {
    const { day } = this.props;
    const { isPopoverVisible } = this.state;

    return (
      <>
        <TouchableWithoutFeedback
          onPress={() => this.setIsPopoverVisible(true)}
          ref={this.dayView}
        >
          <View>
            <Body>{day}</Body>
          </View>
        </TouchableWithoutFeedback>

        <EmojiPopover
          isVisible={isPopoverVisible}
          fromView={this.dayView.current!}
          onClose={() => this.setIsPopoverVisible(false)}
        />
      </>
    );
  }
}
