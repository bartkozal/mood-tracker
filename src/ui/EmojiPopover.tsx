import React from "react";
import _ from "lodash";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import Popover from "react-native-popover-view";
import Color from "./Color";
import Emoji, { EmojiList } from "./Emoji";

interface Props {
  isVisible: boolean;
  fromView: TouchableOpacity;
  onClose: () => void;
  onPress: (mood: string) => void;
}

export default class EmojiPopover extends React.Component<Props> {
  render() {
    const { isVisible, fromView, onClose, onPress } = this.props;

    return (
      <Popover
        isVisible={isVisible}
        fromView={fromView}
        onClose={onClose}
        placement="auto"
        showBackground={false}
        arrowStyle={styles.arrow}
        popoverStyle={styles.popover}
        animationConfig={{ duration: 100 }}
      >
        {_.chunk(EmojiList, 5).map((row, i) => (
          <View key={i} style={styles.emojiRowView}>
            {row.map(({ name }) => (
              <TouchableOpacity key={name} onPress={() => onPress(name)}>
                <Emoji mood={name} />
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </Popover>
    );
  }
}

const styles = StyleSheet.create({
  emojiRowView: {
    flexDirection: "row"
  },
  popover: {
    padding: 8,
    backgroundColor: Color.White
  },
  arrow: {
    width: 51,
    height: 25
  }
});
