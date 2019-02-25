import React from "react";
import _ from "lodash";
import {
  TouchableWithoutFeedback,
  StyleSheet,
  View,
  Image
} from "react-native";
import Popover from "react-native-popover-view";
import Color from "./Color";
import Emoji from "./Emoji";

interface Props {
  isVisible: boolean;
  fromView: TouchableWithoutFeedback;
  onClose: () => void;
}

export default class EmojiPopover extends React.Component<Props> {
  render() {
    const { isVisible, fromView, onClose } = this.props;

    return (
      <Popover
        isVisible={isVisible}
        fromView={fromView}
        onClose={onClose}
        placement="auto"
        showBackground={false}
        popoverStyle={styles.popover}
        animationConfig={{ duration: 100 }}
      >
        {_.chunk(Object.values(Emoji), 5).map((row, i) => (
          <View key={i} style={styles.emojiRowView}>
            {row.map((emojiSource, j) => (
              <Image key={j} style={styles.emoji} source={emojiSource} />
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
  emoji: {
    margin: 8
  },
  popover: {
    padding: 8,
    backgroundColor: Color.Sky,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 1,
    shadowRadius: 30,
    elevation: 10
  }
});
