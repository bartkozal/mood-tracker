import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { LinearGradient } from "expo";
import Screen from "../ui/Screen";
import Emoji, { EmojiList } from "../ui/Emoji";
import Subheader from "../ui/Text/Subheader";
import Body from "../ui/Text/Body";
import Color, { Gradient } from "../ui/Color";

export default class AnalyticsScreen extends React.Component {
  render() {
    return (
      <Screen>
        <View style={styles.topbarView}>
          <View style={styles.topbarItemView}>
            <Subheader color={Color.Gray}>Week</Subheader>
          </View>

          <View style={styles.topbarItemView}>
            <Subheader color={Color.Ink} bold>
              Month
            </Subheader>
          </View>

          <View style={styles.topbarItemView}>
            <Subheader color={Color.Gray}>Year</Subheader>
          </View>

          <View style={styles.topbarItemView}>
            <Subheader color={Color.Gray}>All the time</Subheader>
          </View>
        </View>

        <ScrollView style={styles.contentView}>
          {EmojiList.map(({ name }) => (
            <View key={name} style={styles.rowView}>
              <Emoji mood={name} />
              <View style={styles.barContainerView}>
                <View style={styles.barBackView}>
                  <LinearGradient
                    colors={Gradient.Selection}
                    style={{ ...styles.barView, width: "50%" }}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <Body color={Color.White} bold>
                        8
                      </Body>
                      <Body color={Color.White}> (50%)</Body>
                    </View>
                  </LinearGradient>
                </View>
              </View>
            </View>
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
    paddingHorizontal: 16
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
