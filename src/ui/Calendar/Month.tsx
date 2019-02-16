import React from "react";
import _ from "lodash";
import { View, StyleSheet } from "react-native";
import Header from "../Text/Header";
import Subheader from "../Text/Subheader";
import Color from "../Color";
import { toPercentage } from "../Distance";
import Day from "./Day";

interface Props {
  name: string;
  numberOfDays: number;
  firstWeekday: number;
  onDayPress: (day: number) => void;
}

const WEEKDAYS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
const WEEKDAY_VIEW_WIDTH = 100 / WEEKDAYS.length;

export default class Month extends React.Component<Props> {
  render() {
    const { name, numberOfDays, firstWeekday, onDayPress } = this.props;

    return (
      <View>
        <Header>{name}</Header>
        <View style={styles.monthView}>
          {WEEKDAYS.map(weekday => (
            <View key={weekday} style={styles.weekdayView}>
              <Subheader color={Color.Gray}>{weekday}</Subheader>
            </View>
          ))}
          {_.range(1, numberOfDays + 1).map(day => (
            <View
              key={day}
              style={{
                ...styles.dayView,
                ...(day === 1
                  ? {
                      marginLeft: toPercentage(
                        (firstWeekday - 1) * WEEKDAY_VIEW_WIDTH
                      )
                    }
                  : null)
              }}
            >
              <Day day={day} onPress={onDayPress} />
            </View>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  monthView: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  weekdayView: {
    flexBasis: toPercentage(WEEKDAY_VIEW_WIDTH)
  },
  dayView: {
    flexBasis: toPercentage(WEEKDAY_VIEW_WIDTH)
  }
});
