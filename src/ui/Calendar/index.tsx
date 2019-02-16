import React from "react";
import { DateTime, Info } from "luxon";
import Title from "../Text/Title";
import Month from "./Month";

interface Props {
  year: number;
}

export default class Calendar extends React.Component<Props> {
  render() {
    const { year } = this.props;
    const monthNames = Info.months("short");

    return (
      <>
        <Title>{year}</Title>

        {monthNames.map(monthName => {
          const month = monthNames.indexOf(monthName) + 1;
          const monthDateTime = DateTime.fromObject({
            year,
            month
          });
          const numberOfDays = monthDateTime.daysInMonth;
          const firstWeekday = monthDateTime.weekday;

          return (
            <Month
              key={monthName}
              name={monthName}
              numberOfDays={numberOfDays}
              firstWeekday={firstWeekday}
            />
          );
        })}
      </>
    );
  }
}
