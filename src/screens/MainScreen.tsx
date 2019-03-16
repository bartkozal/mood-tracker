import React from "react";
import { connect } from "react-redux";
import { ScrollView } from "react-native";
import { DateTime } from "luxon";
import { setDayMood } from "../state/calendar";
import Screen from "../ui/Screen";
import Calendar from "../ui/Calendar";

interface Props {
  setDayMood: (day: string, mood: string) => void;
}

@connect(
  null,
  { setDayMood }
)
export default class MainScreen extends React.Component<Props> {
  render() {
    const { setDayMood } = this.props;
    const currentYear = DateTime.local().year;

    return (
      <Screen>
        <ScrollView style={{ paddingHorizontal: 12 }}>
          <Calendar
            year={currentYear}
            onDayMoodChange={(day, mood) => setDayMood(day, mood)}
          />
        </ScrollView>
      </Screen>
    );
  }
}
