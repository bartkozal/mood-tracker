import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Subheader from "../ui/Text/Subheader";
import Color from "../ui/Color";

interface Props {
  options: string[];
  active: string;
  onOptionPress: (option: string) => void;
}

export default class Topbar extends React.Component<Props> {
  render() {
    const { options, active, onOptionPress } = this.props;

    return (
      <View style={styles.topbarView}>
        {options.map(option => (
          <View key={option} style={styles.topbarItemView}>
            {active === option ? (
              <Subheader color={Color.Ink} bold>
                {option}
              </Subheader>
            ) : (
              <TouchableOpacity onPress={() => onOptionPress(option)}>
                <Subheader color={Color.Gray}>{option}</Subheader>
              </TouchableOpacity>
            )}
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topbarView: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 16
  },
  topbarItemView: {
    paddingHorizontal: 14
  }
});
