import React from "react";
import _ from "lodash";
import { View, StyleSheet } from "react-native";
import { DateTime, Info } from "luxon";
import Header from "./Text/Header";
import Body from "./Text/Body";
import Subheader from "./Text/Subheader";
import Color from "./Color";
import { toPercentage } from "./Distance";

interface Props {
  year: number;
}

const WEEKDAYS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
const WEEKDAY_VIEW_WIDTH = 100 / WEEKDAYS.length;

export default class Calendar extends React.Component<Props> {
  render() {
    const { year } = this.props;
    const monthNames = Info.months("short");

    return monthNames.map(monthName => {
      const month = monthNames.indexOf(monthName) + 1;
      const monthDateTime = DateTime.fromObject({
        year,
        month
      });
      const weekdayIndex = monthDateTime.weekday - 1;
      const daysInMonth = monthDateTime.daysInMonth;

      return (
        <View key={monthName}>
          <Header>{monthName}</Header>
          <View style={styles.daysInMonthView}>
            {WEEKDAYS.map(weekday => (
              <View key={weekday} style={styles.weekdayView}>
                <Subheader color={Color.Gray}>{weekday}</Subheader>
              </View>
            ))}
            {_.range(1, daysInMonth + 1).map(day => (
              <View
                key={day}
                style={{
                  ...styles.dayView,
                  ...(day === 1
                    ? {
                        marginLeft: toPercentage(
                          weekdayIndex * WEEKDAY_VIEW_WIDTH
                        )
                      }
                    : null)
                }}
              >
                <Body>{day + 1}</Body>
              </View>
            ))}
          </View>
        </View>
      );
    });
  }
}

const styles = StyleSheet.create({
  daysInMonthView: {
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
