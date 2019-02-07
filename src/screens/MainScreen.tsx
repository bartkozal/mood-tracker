import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-navigation";
import { DateTime } from "luxon";
import Calendar from "../ui/Calendar";
import Title from "../ui/Text/Title";

export default class MainScreen extends React.Component {
  render() {
    const currentYear = DateTime.local().year;

    return (
      <SafeAreaView>
        <ScrollView>
          <Title>{currentYear}</Title>
          <Calendar year={currentYear} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
