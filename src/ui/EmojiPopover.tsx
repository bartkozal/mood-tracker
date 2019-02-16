import React from "react";
import { Text, TouchableWithoutFeedback, StyleSheet } from "react-native";
import Popover from "react-native-popover-view";

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
        placement="bottom"
        showBackground={false}
        popoverStyle={styles.popover}
        animationConfig={{ duration: 100 }}
      >
        <Text>😀🙃😎</Text>
      </Popover>
    );
  }
}

const styles = StyleSheet.create({
  popover: {
    padding: 8,
    backgroundColor: "red",
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
