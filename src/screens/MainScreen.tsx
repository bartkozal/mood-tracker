import React from "react";
import { ScrollView } from "react-native";
import { DateTime } from "luxon";
import Screen from "../ui/Screen";
import Calendar from "../ui/Calendar";
import Title from "../ui/Text/Title";

export default class MainScreen extends React.Component {
  render() {
    const currentYear = DateTime.local().year;

    return (
      <Screen>
        <ScrollView>
          <Title>{currentYear}</Title>
          <Calendar year={currentYear} />
        </ScrollView>
      </Screen>
    );
  }
}
