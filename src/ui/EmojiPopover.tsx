import React from "react";
import {
  TouchableWithoutFeedback,
  StyleSheet,
  View,
  Image
} from "react-native";
import Popover from "react-native-popover-view";
import Color from "./Color";

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
        <View style={styles.emojiRowView}>
          <Image
            style={styles.emoji}
            source={require("../../assets/emojis/grin.png")}
          />
          <Image
            style={styles.emoji}
            source={require("../../assets/emojis/smile.png")}
          />
          <Image
            style={styles.emoji}
            source={require("../../assets/emojis/neutral.png")}
          />
          <Image
            style={styles.emoji}
            source={require("../../assets/emojis/sad.png")}
          />
          <Image
            style={styles.emoji}
            source={require("../../assets/emojis/cry.png")}
          />
        </View>
        <View style={styles.emojiRowView}>
          <Image
            style={styles.emoji}
            source={require("../../assets/emojis/sleeping.png")}
          />
          <Image
            style={styles.emoji}
            source={require("../../assets/emojis/love.png")}
          />
          <Image
            style={styles.emoji}
            source={require("../../assets/emojis/zany.png")}
          />
          <Image
            style={styles.emoji}
            source={require("../../assets/emojis/party.png")}
          />
          <Image
            style={styles.emoji}
            source={require("../../assets/emojis/cool.png")}
          />
        </View>
        <View style={styles.emojiRowView}>
          <Image
            style={styles.emoji}
            source={require("../../assets/emojis/scream.png")}
          />
          <Image
            style={styles.emoji}
            source={require("../../assets/emojis/sick.png")}
          />
          <Image
            style={styles.emoji}
            source={require("../../assets/emojis/what.png")}
          />
          <Image
            style={styles.emoji}
            source={require("../../assets/emojis/angry.png")}
          />
          <Image
            style={styles.emoji}
            source={require("../../assets/emojis/rage.png")}
          />
        </View>
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
