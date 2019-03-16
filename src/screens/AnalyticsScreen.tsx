import React from "react";
import { connect } from "react-redux";
import { StyleSheet, ScrollView } from "react-native";
import { State } from "../state";
import { getAllTimeMood } from "../state/analytics";
import Screen from "../ui/Screen";
import Bar from "../ui/Bar";
import Topbar from "../ui/Topbar";

type OptionMood = [
  {
    [mood: string]: number;
  },
  number
];

interface Props {
  allTimeMood: OptionMood;
}

const TOPBAR_OPTIONS = ["Week", "Month", "Year", "All the time"];

@connect((state: State) => ({
  allTimeMood: getAllTimeMood(state)
}))
export default class AnalyticsScreen extends React.Component<Props> {
  state = {
    activeOption: "All the time"
  };

  setActiveOption = (option: string) => {
    this.setState({
      activeOption: option
    });
  };

  getActiveOptionMood = (): OptionMood => {
    const { allTimeMood } = this.props;
    const { activeOption } = this.state;

    switch (activeOption) {
      case "Week":
        return [{}, 0];
      case "Month":
        return [{}, 0];
      case "Year":
        return [{}, 0];
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
            options={TOPBAR_OPTIONS}
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
