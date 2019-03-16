import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { View, StyleSheet, ScrollView } from "react-native";
import { State } from "../state";
import { getAllTimeMood } from "../state/analytics";
import Screen from "../ui/Screen";
import Subheader from "../ui/Text/Subheader";
import Color from "../ui/Color";
import Bar from "../ui/Bar";

interface Props {
  allTimeMood: {
    [mood: string]: number;
  };
}

@connect((state: State) => ({
  allTimeMood: getAllTimeMood(state)
}))
export default class AnalyticsScreen extends React.Component<Props> {
  render() {
    const { allTimeMood } = this.props;
    const totalCount = _.sum(Object.values(allTimeMood));

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

          {Object.entries(allTimeMood).map(([mood, count]) => (
            <Bar key={mood} mood={mood} count={count} totalCount={totalCount} />
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
