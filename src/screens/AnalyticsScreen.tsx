import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { View, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from "expo";
import { State } from "../state";
import { getAllTimeMood } from "../state/analytics";
import Screen from "../ui/Screen";
import Emoji from "../ui/Emoji";
import Subheader from "../ui/Text/Subheader";
import Body from "../ui/Text/Body";
import Color, { Gradient } from "../ui/Color";

interface Props {
  allTimeMood: {
    [mood: string]: number;
  };
}

const toPercent = (count: number, totalCount: number) =>
  `${Math.round((count / totalCount) * 100)}%`;

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

          {Object.entries(allTimeMood).map(([mood, count]) => {
            const percent = toPercent(count, totalCount);

            return (
              <View key={mood} style={styles.rowView}>
                <Emoji mood={mood} />
                <View style={styles.barContainerView}>
                  <View style={styles.barBackView}>
                    <LinearGradient
                      colors={Gradient.Selection}
                      style={{ ...styles.barView, width: percent }}
                    >
                      <View style={{ flexDirection: "row" }}>
                        <Body color={Color.White} bold>
                          {count}
                        </Body>
                        <Body color={Color.White}> ({percent})</Body>
                      </View>
                    </LinearGradient>
                  </View>
                </View>
              </View>
            );
          })}
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
  },
  rowView: {
    flexDirection: "row",
    alignItems: "center"
  },
  barContainerView: {
    flex: 1,
    paddingVertical: 8,
    paddingLeft: 24
  },
  barBackView: {
    height: 40,
    backgroundColor: Color.Lavender,
    borderRadius: 4
  },
  barView: {
    height: "100%",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 8,
    borderRadius: 4
  }
});
