import React from "react";
import { connect } from "react-redux";
import { ScrollView } from "react-native";
import { DateTime } from "luxon";
import { setDayMood, getCalendar } from "../state/calendar";
import { State } from "../state";
import Screen from "../ui/Screen";
import Calendar from "../ui/Calendar";

interface Props {
  savedMood: {
    [date: string]: {
      mood: string;
    };
  };
  setDayMood: (day: string, mood: string) => void;
}

@connect(
  (state: State) => ({
    savedMood: getCalendar(state)
  }),
  { setDayMood }
)
export default class MainScreen extends React.Component<Props> {
  render() {
    const { setDayMood, savedMood } = this.props;
    const currentYear = DateTime.local().year;

    return (
      <Screen>
        <ScrollView style={{ paddingHorizontal: 12 }}>
          <Calendar
            year={currentYear}
            savedMood={savedMood}
            onDayMoodChange={(day, mood) => setDayMood(day, mood)}
          />
        </ScrollView>
      </Screen>
    );
  }
}
