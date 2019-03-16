import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
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
  savedMood: {
    [date: string]: {
      mood: string;
    };
  };
}

const isWeekendDay = (weekday: number) => [6, 7].includes(weekday);

export default class Day extends React.Component<Props> {
  state = {
    isPopoverVisible: false
  };

  dayDateTime: DateTime;
  dayView = React.createRef<TouchableOpacity>();

  constructor(props: Props) {
    super(props);

    const { year, month, day } = this.props;

    this.dayDateTime = DateTime.fromObject({
      year,
      month,
      day
    });
  }

  setIsPopoverVisible = (isPopoverVisible: boolean) => {
    this.setState({ isPopoverVisible });
  };

  setMood = (mood: string) => {
    this.props.onDayMoodChange(this.dayDateTime.toISODate(), mood);
    this.setState({ isPopoverVisible: false });
  };

  render() {
    const { savedMood, day } = this.props;
    const { isPopoverVisible } = this.state;
    const isWeekend = isWeekendDay(this.dayDateTime.weekday);
    const isToday =
      DateTime.local().toISODate() === this.dayDateTime.toISODate();
    const savedDay = savedMood[this.dayDateTime.toISODate()];

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
            {savedDay ? (
              <Emoji mood={savedDay.mood} size={isToday ? 42 : null} />
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
