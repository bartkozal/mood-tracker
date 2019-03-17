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
  Math.round((count / totalCount) * 100);

const formatPercent = (percentValue: number) => `${percentValue}%`;

const innerPercentThreshold = 30;

export default class Bar extends React.Component<Props> {
  render() {
    const { mood, count, totalCount } = this.props;
    const percentValue = toPercent(count, totalCount);
    const percent = formatPercent(percentValue);
    const showInnerPercent = innerPercentThreshold < percentValue;

    return (
      <View key={mood} style={styles.rowView}>
        <Emoji mood={mood} />
        <View style={styles.barContainerView}>
          <View style={styles.barBackView}>
            <LinearGradient
              colors={Gradient.Selection}
              style={{ ...styles.barView, width: percent }}
            >
              {showInnerPercent ? (
                <View style={styles.innerPercent}>
                  <Body color={Color.White} bold>
                    {count}
                  </Body>
                  <Body color={Color.White}> ({percent})</Body>
                </View>
              ) : null}
            </LinearGradient>

            {!showInnerPercent ? (
              <View style={styles.outerPercent}>
                <Body color={Color.Ink} bold>
                  {count}
                </Body>
                <Body color={Color.Ink}> ({percent})</Body>
              </View>
            ) : null}
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
    flexDirection: "row",
    alignItems: "center",
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
  },
  innerPercent: {
    flexDirection: "row"
  },
  outerPercent: {
    flexDirection: "row",
    paddingLeft: 8
  }
});
