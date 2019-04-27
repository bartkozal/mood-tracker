import React from "react";
import { Platform, StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";
import { LinearGradient, Constants } from "expo";
import { Gradient } from "./Color";

export default class Screen extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <LinearGradient colors={Gradient.Background} style={styles.screenView}>
          {this.props.children}
        </LinearGradient>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  screenView: {
    paddingHorizontal: 8,
    ...Platform.select({
      android: {
        paddingTop: Constants.statusBarHeight
      }
    })
  }
});
