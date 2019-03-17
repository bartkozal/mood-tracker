import React from "react";
import { connect } from "react-redux";
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
    const now = DateTime.local();

    return (
      <Screen>
        <Calendar
          activeYear={now.year}
          activeMonth={now.month}
          savedMood={savedMood}
          onDayMoodChange={(day, mood) => setDayMood(day, mood)}
        />
      </Screen>
    );
  }
}
