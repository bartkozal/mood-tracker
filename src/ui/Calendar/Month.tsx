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
}

const WEEKDAYS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
const WEEKDAY_VIEW_WIDTH = 100 / WEEKDAYS.length;

export default class Month extends React.Component<Props> {
  render() {
    const { name, numberOfDays, firstWeekday } = this.props;

    return (
      <View style={styles.monthView}>
        <View style={styles.monthNameView}>
          <Header>{name.toUpperCase()}</Header>
        </View>

        <View style={styles.monthDaysView}>
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
              <Day day={day} />
            </View>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  monthView: {
    marginBottom: 16
  },
  monthNameView: {
    marginBottom: 16
  },
  monthDaysView: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  weekdayView: {
    flexBasis: toPercentage(WEEKDAY_VIEW_WIDTH),
    alignItems: "center",
    marginBottom: 8
  },
  dayView: {
    flexBasis: toPercentage(WEEKDAY_VIEW_WIDTH),
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8
  }
});
