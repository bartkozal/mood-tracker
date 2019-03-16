import React from "react";
import _ from "lodash";
import { View, StyleSheet } from "react-native";
import { LinearGradient } from "expo";
import Emoji from "../ui/Emoji";
import Body from "../ui/Text/Body";
import Color, { Gradient } from "../ui/Color";

interface Props {
  mood: string;
  count: number;
  totalCount: number;
}

const toPercent = (count: number, totalCount: number) =>
  `${Math.round((count / totalCount) * 100)}%`;

export default class Bar extends React.Component<Props> {
  render() {
    const { mood, count, totalCount } = this.props;
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
  }
}

const styles = StyleSheet.create({
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
