import React from "react";
import { Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-navigation";
import { DateTime } from "luxon";
import Calendar from "../ui/Calendar";

export default class MainScreen extends React.Component {
  render() {
    const currentYear = DateTime.local().year;

    return (
      <SafeAreaView>
        <ScrollView>
          <Text>{currentYear}</Text>
          <Calendar year={currentYear} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
