import React from "react";
import { FlatList, View } from "react-native";
import { DateTime, Info } from "luxon";
import Title from "../Text/Title";
import Month from "./Month";

interface Props {
  activeYear: number;
  activeMonth: number;
  savedMood: {
    [date: string]: {
      mood: string;
    };
  };
  onDayMoodChange: (day: string, mood: string) => void;
}

const HEADER_HEIGHT = 70.33333587646484;
const FIVE_ROWS_MONTH_HEIGHT = 348.666748046875;
const SIX_ROWS_MONTH_HEIGHT = 397.666748046875;

const calculateMonthHeight = (firstWeekday: number, numberOfDays: number) => {
  const numberOfAvailableSlotsInFiveRowsMonth = 35;
  const numberOfTakenSlots = firstWeekday - 1 + numberOfDays;
  const isFiveRowsMonth =
    numberOfTakenSlots <= numberOfAvailableSlotsInFiveRowsMonth;

  return isFiveRowsMonth ? FIVE_ROWS_MONTH_HEIGHT : SIX_ROWS_MONTH_HEIGHT;
};

const getViewOffset = (month: number) => (month === 1 ? 0 : -HEADER_HEIGHT);
const getViewPosition = (month: number) => 0;

export default class Calendar extends React.Component<Props> {
  flatList = React.createRef<FlatList<any>>();

  componentDidMount() {
    const { activeMonth } = this.props;
    const flatList = this.flatList.current;

    if (flatList) {
      flatList.scrollToIndex({
        animated: false,
        index: activeMonth - 1,
        viewOffset: getViewOffset(activeMonth),
        viewPosition: getViewPosition(activeMonth)
      });
    }
  }

  render() {
    const { activeYear, onDayMoodChange, savedMood } = this.props;
    const monthNames = Info.months("short");
    const months = monthNames.map(monthName => {
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
          const { firstWeekday, numberOfDays } = months![index];
          const monthHeight = calculateMonthHeight(firstWeekday, numberOfDays);

          return {
            length: monthHeight,
            offset: monthHeight * index, // TODO doesn't include 6 row months
            index
          };
        }}
        ListHeaderComponent={
          <View
            style={{
              padding: 16,
              alignItems: "center"
            }}
          >
            <Title>{activeYear}</Title>
          </View>
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
