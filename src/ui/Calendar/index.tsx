import React from "react";
import { FlatList } from "react-native";
import {
  NavigationEventCallback,
  NavigationEventSubscription
} from "react-navigation";
import { DateTime, Info } from "luxon";
import Month from "./Month";
import Header from "./Header";

interface Props {
  activeYear: number;
  activeMonth: number;
  savedMood: {
    [date: string]: {
      mood: string;
    };
  };
  onDayMoodChange: (day: string, mood: string) => void;
  onPreviousYearChange: () => void;
  onNextYearChange: () => void;
  addNavigationListener: (
    eventName: "didFocus" | "willBlur" | "willFocus" | "didBlur",
    callback: NavigationEventCallback
  ) => NavigationEventSubscription;
}

interface MonthItem {
  month: number;
  monthName: string;
  numberOfDays: number;
  firstWeekday: number;
}

const HEADER_HEIGHT = 70.33333587646484;
const FIVE_ROWS_MONTH_HEIGHT = 348.666748046875;
const SIX_ROWS_MONTH_HEIGHT = 397.666748046875;

const calculateMonthHeight = ({ firstWeekday, numberOfDays }: MonthItem) => {
  const numberOfAvailableSlotsInFiveRowsMonth = 35;
  const numberOfTakenSlots = firstWeekday - 1 + numberOfDays;
  const isFiveRowsMonth =
    numberOfTakenSlots <= numberOfAvailableSlotsInFiveRowsMonth;

  return isFiveRowsMonth ? FIVE_ROWS_MONTH_HEIGHT : SIX_ROWS_MONTH_HEIGHT;
};

const calculateMonthOffset = ({ month }: MonthItem, months: MonthItem[]) => {
  if (month === 1) return 0;

  return months.reduce((offset, item) => {
    if (item.month >= month) return offset;

    return offset + calculateMonthHeight(item);
  }, 0);
};

export default class Calendar extends React.Component<Props> {
  flatList = React.createRef<FlatList<MonthItem>>();
  didScreenFocus: NavigationEventSubscription | null = null;

  centerCurrentMonth = () => {
    const { activeMonth } = this.props;
    const flatList = this.flatList.current;

    if (flatList) {
      flatList.scrollToIndex({
        animated: false,
        index: activeMonth - 1,
        viewOffset: -HEADER_HEIGHT,
        viewPosition: 0 // TODO
      });
    }
  };

  componentDidMount() {
    const { addNavigationListener } = this.props;
    this.centerCurrentMonth();
    this.didScreenFocus = addNavigationListener("didFocus", () =>
      this.centerCurrentMonth()
    );
  }

  componentWillUnmount() {
    if (this.didScreenFocus) {
      this.didScreenFocus.remove();
    }
  }

  render() {
    const {
      activeYear,
      onDayMoodChange,
      savedMood,
      onPreviousYearChange,
      onNextYearChange
    } = this.props;
    const monthNames = Info.months("short");
    const months: MonthItem[] = monthNames.map(monthName => {
      const month = monthNames.indexOf(monthName) + 1;
      const monthDateTime = DateTime.fromObject({
        year: activeYear,
        month
      });

      return {
        month,
        monthName,
        numberOfDays: monthDateTime.daysInMonth,
        firstWeekday: monthDateTime.weekday
      };
    });

    return (
      <FlatList
        ref={this.flatList}
        data={months}
        keyExtractor={item => String(item.month)}
        showsVerticalScrollIndicator={false}
        getItemLayout={(months, index) => {
          const month = months![index];
          const length = calculateMonthHeight(month);
          const offset = calculateMonthOffset(month, months!);

          return {
            length,
            offset,
            index
          };
        }}
        ListHeaderComponent={
          <Header
            year={activeYear}
            onLeftChevronPress={onPreviousYearChange}
            onRightChevronPress={onNextYearChange}
          />
        }
        renderItem={({ item }) => (
          <Month
            year={activeYear}
            month={item.month}
            name={item.monthName}
            numberOfDays={item.numberOfDays}
            firstWeekday={item.firstWeekday}
            onDayMoodChange={onDayMoodChange}
            savedMood={savedMood}
          />
        )}
      />
    );
  }
}
