import React from "react";
import _ from "lodash";
import { View, StyleSheet } from "react-native";
import { DateTime, Info } from "luxon";
import Header from "./Text/Header";
import Body from "./Text/Body";

interface Props {
  year: number;
}

export default class Calendar extends React.Component<Props> {
  render() {
    const { year } = this.props;
    const monthNames = Info.months("short");

    return monthNames.map(monthName => {
      const month = monthNames.indexOf(monthName) + 1;
      const daysInMonth = DateTime.fromObject({
        year,
        month
      }).daysInMonth;

      return (
        <View key={monthName}>
          <Header>{monthName}</Header>
          <View style={styles.daysInMonthView}>
            {_.times(daysInMonth, n => (
              <View key={n} style={styles.dayView}>
                <Body>{n + 1}</Body>
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
  dayView: {
    flexBasis: "14.28%"
  }
});
