import _ from "lodash";
import { State as StoreState } from "../state";
import { DateTime } from "luxon";

export type MoodAnalytics = [
  {
    [mood: string]: number;
  },
  number
];

export const getWeekMood = (state: StoreState): MoodAnalytics => {
  const { year, month, weekNumber } = DateTime.local();
  const currentWeek = _.pickBy(state.calendar, (_, isoDate) => {
    const date = DateTime.fromISO(isoDate);
    return (
      date.year === year &&
      date.month === month &&
      date.weekNumber === weekNumber
    );
  });
  const values = Object.values(currentWeek);

  return [_.countBy(values, "mood"), values.length];
};

export const getMonthMood = (state: StoreState): MoodAnalytics => {
  const { year, month } = DateTime.local();
  const currentMonth = _.pickBy(state.calendar, (_, isoDate) => {
    const date = DateTime.fromISO(isoDate);
    return date.year === year && date.month === month;
  });
  const values = Object.values(currentMonth);

  return [_.countBy(values, "mood"), values.length];
};

export const getYearMood = (state: StoreState): MoodAnalytics => {
  const { year } = DateTime.local();
  const currentYear = _.pickBy(state.calendar, (_, isoDate) => {
    const date = DateTime.fromISO(isoDate);
    return date.year === year;
  });
  const values = Object.values(currentYear);

  return [_.countBy(values, "mood"), values.length];
};

export const getAllTimeMood = (state: StoreState): MoodAnalytics => {
  const values = Object.values(state.calendar);

  return [_.countBy(values, "mood"), values.length];
};
