import React from "react";
import { View, Text } from "react-native";

export default class Popover extends React.Component {
  render() {
    return (
      <View
        style={{
          position: "absolute",
          top: 135,
          left: 50,
          backgroundColor: "#FFFFFF",
          padding: 8,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 5
          },
          shadowOpacity: 0.34,
          shadowRadius: 6.27,
          elevation: 10,
          zIndex: 1
        }}
      >
        <Text>😀🙃😎</Text>
      </View>
    );
  }
}
