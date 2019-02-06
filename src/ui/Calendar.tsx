import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { DateTime, Info } from "luxon";
import _ from "lodash";

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
          <Text>{monthName}</Text>
          <View style={styles.daysInMonthView}>
            {_.times(daysInMonth, i => (
              <View key={i} style={styles.dayView}>
                <Text>{i + 1}</Text>
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
