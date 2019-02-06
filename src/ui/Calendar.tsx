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
      const daysInMonth = DateTime.fromObject({
        year,
        month: monthNames.indexOf(monthName) + 1
      }).daysInMonth;

      return (
        <View key={monthName}>
          <Text>{monthName}</Text>
          <View style={styles.daysContainer}>
            {_.times(daysInMonth, i => (
              <Text key={i}>{i + 1}</Text>
            ))}
          </View>
        </View>
      );
    });
  }
}

const styles = StyleSheet.create({
  daysContainer: {
    flexDirection: "row",
    flexWrap: "wrap"
  }
});
