import React from "react";
import { ScrollView, Alert } from "react-native";
import { DateTime } from "luxon";
import Screen from "../ui/Screen";
import Calendar from "../ui/Calendar";

export default class MainScreen extends React.Component {
  openEmojiPopover = (day: number) => {
    Alert.alert(String(day));
  };

  render() {
    const currentYear = DateTime.local().year;

    return (
      <Screen>
        <ScrollView>
          <Calendar year={currentYear} onDayPress={this.openEmojiPopover} />
        </ScrollView>
      </Screen>
    );
  }
}
