import React from "react";
import { connect } from "react-redux";
import { StyleSheet, ScrollView } from "react-native";
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

const topbarOptions = ["Week", "Month", "Year", "All the time"];

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
        <ScrollView contentContainerStyle={styles.contentView}>
          <Topbar
            options={topbarOptions}
            active={activeOption}
            onOptionPress={this.setActiveOption}
          />

          {Object.entries(activeOptionMood).map(([mood, count]) => (
            <Bar key={mood} mood={mood} count={count} totalCount={totalCount} />
          ))}
        </ScrollView>
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  contentView: {
    paddingHorizontal: 24,
    height: "100%"
  }
});
