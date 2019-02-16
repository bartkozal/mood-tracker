import React from "react";
import { ScrollView } from "react-native";
import { DateTime } from "luxon";
import Screen from "../ui/Screen";
import Calendar from "../ui/Calendar";

export default class MainScreen extends React.Component {
  render() {
    const currentYear = DateTime.local().year;

    return (
      <Screen>
        <ScrollView style={{ paddingHorizontal: 12 }}>
          <Calendar year={currentYear} />
        </ScrollView>
      </Screen>
    );
  }
}
