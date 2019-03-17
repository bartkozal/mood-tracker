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
  now = DateTime.local();

  state = {
    activeYear: this.now.year,
    activeMonth: this.now.month
  };

  handlePreviousYearChange = () => {
    this.setState({ activeYear: this.state.activeYear - 1, activeMonth: 1 });
  };

  handleNextYearChange = () => {
    this.setState({ activeYear: this.state.activeYear + 1, activeMonth: 1 });
  };

  render() {
    const { setDayMood, savedMood } = this.props;
    const { activeYear, activeMonth } = this.state;

    return (
      <Screen>
        <Calendar
          activeYear={activeYear}
          activeMonth={activeMonth}
          savedMood={savedMood}
          onDayMoodChange={(day, mood) => setDayMood(day, mood)}
          onPreviousYearChange={this.handlePreviousYearChange}
          onNextYearChange={this.handleNextYearChange}
        />
      </Screen>
    );
  }
}
