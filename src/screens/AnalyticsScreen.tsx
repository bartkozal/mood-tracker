import React from "react";
import { connect } from "react-redux";
import { StyleSheet, FlatList } from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";
import { State } from "../state";
import {
  getWeekMood,
  getMonthMood,
  getYearMood,
  getAllTimeMood,
  MoodAnalytics
} from "../state/analytics";
import Screen from "../ui/Screen";
import Bar from "../ui/Bar";
import Topbar from "../ui/Topbar";

interface Props {
  weekMood: MoodAnalytics;
  monthMood: MoodAnalytics;
  yearMood: MoodAnalytics;
  allTimeMood: MoodAnalytics;
}

const TOPBAR_OPTIONS = ["Week", "Month", "Year", "All the time"];

@connect((state: State) => ({
  weekMood: getWeekMood(state),
  monthMood: getMonthMood(state),
  yearMood: getYearMood(state),
  allTimeMood: getAllTimeMood(state)
}))
export default class AnalyticsScreen extends React.Component<Props> {
  state = {
    activeOption: "Month"
  };

  setActiveOption = (option: string) => {
    this.setState({
      activeOption: option
    });
  };

  activatePreviousOption = () => {
    const activeOptionIndex = TOPBAR_OPTIONS.indexOf(this.state.activeOption);
    const previousOptionIndex = activeOptionIndex - 1;

    if (previousOptionIndex >= 0) {
      this.setState({
        activeOption: TOPBAR_OPTIONS[previousOptionIndex]
      });
    }
  };

  activateNextOption = () => {
    const activeOptionIndex = TOPBAR_OPTIONS.indexOf(this.state.activeOption);
    const nextOptionIndex = activeOptionIndex + 1;

    if (nextOptionIndex < TOPBAR_OPTIONS.length) {
      this.setState({
        activeOption: TOPBAR_OPTIONS[nextOptionIndex]
      });
    }
  };

  getActiveOptionMood = (): MoodAnalytics => {
    const { weekMood, monthMood, yearMood, allTimeMood } = this.props;
    const { activeOption } = this.state;

    switch (activeOption) {
      case "Week":
        return weekMood;
      case "Month":
        return monthMood;
      case "Year":
        return yearMood;
      case "All the time":
        return allTimeMood;
      default:
        return [{}, 0];
    }
  };

  render() {
    const { activeOption } = this.state;
    const [activeOptionMood, totalCount] = this.getActiveOptionMood();

    return (
      <Screen>
        <GestureRecognizer
          onSwipeLeft={this.activateNextOption}
          onSwipeRight={this.activatePreviousOption}
        >
          <Topbar
            options={TOPBAR_OPTIONS}
            active={activeOption}
            onOptionPress={this.setActiveOption}
          />

          <FlatList
            data={Object.entries(activeOptionMood)}
            keyExtractor={([mood, _]) => mood}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentView}
            renderItem={({ item: [mood, count] }) => (
              <Bar mood={mood} count={count} totalCount={totalCount} />
            )}
          />
        </GestureRecognizer>
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  contentView: {
    paddingHorizontal: 12,
    height: "100%"
  }
});
