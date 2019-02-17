import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { DateTime } from "luxon";
import Body from "../Text/Body";
import EmojiPopover from "../EmojiPopover";
import Color from "../Color";

interface Props {
  year: number;
  month: number;
  day: number;
}

const isWeekendDay = (weekday: number) => [6, 7].includes(weekday);

export default class Day extends React.Component<Props> {
  state = {
    isPopoverVisible: false
  };

  dayView = React.createRef<TouchableOpacity>();

  setIsPopoverVisible = (isPopoverVisible: boolean) => {
    this.setState({ isPopoverVisible });
  };

  render() {
    const { year, month, day } = this.props;
    const { isPopoverVisible } = this.state;
    const dayDateTime = DateTime.fromObject({
      year,
      month,
      day
    });
    const isWeekend = isWeekendDay(dayDateTime.weekday);

    return (
      <>
        <TouchableOpacity
          onPress={() => this.setIsPopoverVisible(true)}
          ref={this.dayView}
        >
          <View
            style={{
              ...styles.dayView,
              ...(isWeekend ? styles.weekendDayView : null)
            }}
          >
            <Body color={isWeekend ? Color.Red : Color.Ink}>{day}</Body>
          </View>
        </TouchableOpacity>

        <EmojiPopover
          isVisible={isPopoverVisible}
          fromView={this.dayView.current!}
          onClose={() => this.setIsPopoverVisible(false)}
        />
      </>
    );
  }
}

const styles = StyleSheet.create({
  dayView: {
    width: 42,
    height: 42,
    backgroundColor: Color.White,
    borderRadius: 21,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "rgba(207, 215, 251, 0.5)",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 3
  },
  weekendDayView: {
    backgroundColor: Color.Rose,
    shadowColor: "rgba(231, 181, 196, 0.5)"
  }
});
