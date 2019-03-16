import React from "react";
import { connect } from "react-redux";
import { View, StyleSheet, ScrollView } from "react-native";
import { State } from "../state";
import { getAllTimeMood } from "../state/analytics";
import Screen from "../ui/Screen";
import Subheader from "../ui/Text/Subheader";
import Color from "../ui/Color";
import Bar from "../ui/Bar";

interface Props {
  allTime: {
    [mood: string]: number;
  };
  allTimeTotalCount: number;
}

@connect((state: State) => {
  const [allTime, allTimeTotalCount] = getAllTimeMood(state);

  return {
    allTime,
    allTimeTotalCount
  };
})
export default class AnalyticsScreen extends React.Component<Props> {
  render() {
    const { allTime, allTimeTotalCount } = this.props;

    return (
      <Screen>
        <ScrollView
          style={styles.contentView}
          contentContainerStyle={{ height: "100%" }}
        >
          <View style={styles.topbarView}>
            <View style={styles.topbarItemView}>
              <Subheader color={Color.Gray}>Week</Subheader>
            </View>

            <View style={styles.topbarItemView}>
              <Subheader color={Color.Gray}>Month</Subheader>
            </View>

            <View style={styles.topbarItemView}>
              <Subheader color={Color.Gray}>Year</Subheader>
            </View>

            <View style={styles.topbarItemView}>
              <Subheader color={Color.Ink} bold>
                All the time
              </Subheader>
            </View>
          </View>

          {Object.entries(allTime).map(([mood, count]) => (
            <Bar
              key={mood}
              mood={mood}
              count={count}
              totalCount={allTimeTotalCount}
            />
          ))}
        </ScrollView>
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  topbarView: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 16
  },
  topbarItemView: {
    paddingHorizontal: 14
  },
  contentView: {
    paddingHorizontal: 24
  }
});
