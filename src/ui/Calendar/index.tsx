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

export default class Calendar extends React.Component<Props> {
  flatList = React.createRef<FlatList<any>>();

  componentDidMount() {
    const { activeMonth } = this.props;
    const flatList = this.flatList.current;

    if (flatList) {
      flatList.scrollToIndex({
        animated: false,
        index: activeMonth - 1,
        viewOffset: 0,
        viewPosition: 0
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
          // TODO calculate
          const monthViewHeight = 350;
          return {
            length: monthViewHeight,
            offset: monthViewHeight * index,
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
