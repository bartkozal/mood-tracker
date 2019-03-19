import React from "react";
import { NavigationScreenProps } from "react-navigation";
import { connect } from "react-redux";
import { DateTime } from "luxon";
import {
  setDayMood,
  getCalendar,
  setCalendar,
  State as CalendarState
} from "../state/calendar";
import { State } from "../state";
import Screen from "../ui/Screen";
import Calendar from "../ui/Calendar";
import { loadState } from "../app/storage";

interface Props extends NavigationScreenProps {
  savedMood: {
    [date: string]: {
      mood: string;
    };
  };
  setCalendar: (calendar: CalendarState) => void;
  setDayMood: (day: string, mood: string) => void;
}

@connect(
  (state: State) => ({
    savedMood: getCalendar(state)
  }),
  { setDayMood, setCalendar }
)
export default class MainScreen extends React.Component<Props> {
  now = DateTime.local();

  state = {
    activeYear: this.now.year,
    activeMonth: this.now.month
  };

  async componentDidMount() {
    const { setCalendar } = this.props;
    const calendar = await loadState("Calendar");
    setCalendar(calendar);
  }

  handlePreviousYearChange = () => {
    this.setState({ activeYear: this.state.activeYear - 1, activeMonth: 1 });
  };

  handleNextYearChange = () => {
    this.setState({ activeYear: this.state.activeYear + 1, activeMonth: 1 });
  };

  render() {
    const { setDayMood, savedMood, navigation } = this.props;
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
          addNavigationListener={navigation.addListener}
        />
      </Screen>
    );
  }
}
