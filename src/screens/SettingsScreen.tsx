import React from "react";
import { Text, View, StyleSheet, Linking } from "react-native";
import Screen from "../ui/Screen";
import Body from "../ui/Text/Body";

export default class SettingsScreen extends React.Component {
  render() {
    return (
      <Screen>
        <View style={styles.contentView}>
          <View style={{ marginBottom: 24, alignItems: "center" }}>
            <Text>
              <Body>Created by </Body>
              <Body openUrl="https://twitter.com/brtjkzl">@brtjkzl</Body>
              <Body> and </Body>
              <Body openUrl="https://twitter.com/_mac">@_mac</Body>
              <Body>.</Body>
            </Text>
            <Body>Follow us for further updates.</Body>
          </View>
          <Body>Emojis are copyrighted by JoyPixels Inc.</Body>
        </View>
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  contentView: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  }
});
