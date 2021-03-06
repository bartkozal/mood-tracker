import React from "react";
import _ from "lodash";
import { TouchableOpacity, StyleSheet, View, Platform } from "react-native";
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
        onRequestClose={onClose}
        placement="auto"
        backgroundStyle={styles.backdrop}
        arrowStyle={styles.arrow}
        popoverStyle={styles.popover}
        animationConfig={{ duration: 100 }}
      >
        {_.chunk(EmojiList, 5).map((row, i) => (
          <View key={i} style={styles.emojiRowView}>
            {row.map(({ name }) => (
              <TouchableOpacity
                key={name}
                onPress={() => onPress(name)}
                style={{ padding: 8 }}
              >
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
    borderRadius: 12,
    padding: 8,
    backgroundColor: Color.White,
    overflow: "visible",
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 1,
    shadowRadius: 30,
    elevation: 10
  },
  arrow: {
    width: 29,
    height: 14
  },
  backdrop: {
    backgroundColor: "transparent"
  }
});
