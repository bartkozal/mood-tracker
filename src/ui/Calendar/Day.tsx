import React from "react";
import { View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { DateTime } from "luxon";
import Body from "../Text/Body";
import EmojiPopover from "../EmojiPopover";
import Emoji from "../Emoji";
import Color from "../Color";

interface Props {
  year: number;
  month: number;
  day: number;
  onDayMoodChange: (day: string, mood: string) => void;
}

const isWeekendDay = (weekday: number) => [6, 7].includes(weekday);

export default class Day extends React.Component<Props> {
  state = {
    isPopoverVisible: false,
    mood: ""
  };

  dayDateTime: DateTime;
  nowDateTime: DateTime;
  dayView = React.createRef<TouchableOpacity>();

  constructor(props: Props) {
    super(props);

    const { year, month, day } = this.props;
    const now = DateTime.local();

    this.dayDateTime = DateTime.fromObject({
      year,
      month,
      day
    });

    this.nowDateTime = DateTime.fromObject({
      year: now.year,
      month: now.month,
      day: now.day
    });
  }

  setIsPopoverVisible = (isPopoverVisible: boolean) => {
    this.setState({ isPopoverVisible });
  };

  setMood = (mood: string) => {
    this.props.onDayMoodChange(this.dayDateTime.toISODate(), mood);
    this.setState({ mood, isPopoverVisible: false });
  };

  render() {
    const { day } = this.props;
    const { mood, isPopoverVisible } = this.state;
    const isWeekend = isWeekendDay(this.dayDateTime.weekday);
    const isToday = this.nowDateTime.equals(this.dayDateTime);

    return (
      <>
        <TouchableOpacity
          onPress={() => this.setIsPopoverVisible(true)}
          ref={this.dayView}
        >
          <View
            style={{
              ...styles.dayView,
              ...(isWeekend ? styles.weekendDayView : null),
              ...(isToday ? styles.todayView : null)
            }}
          >
            {mood ? (
              <Emoji mood={mood} size={isToday ? 42 : null} />
            ) : (
              <Body color={isWeekend ? Color.Red : Color.Ink}>{day}</Body>
            )}
          </View>
        </TouchableOpacity>

        <EmojiPopover
          isVisible={isPopoverVisible}
          fromView={this.dayView.current!}
          onClose={() => this.setIsPopoverVisible(false)}
          onPress={newMood => this.setMood(newMood)}
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
  },
  todayView: {
    borderColor: Color.Sky,
    borderWidth: 2
  }
});
