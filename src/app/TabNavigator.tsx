import React from "react";
import { Animated, StyleSheet } from "react-native";
import { createBottomTabNavigator, BottomTabBar } from "react-navigation";
import MainScreen from "../screens/MainScreen";
import AnalyticsScreen from "../screens/AnalyticsScreen";
import SettingsScreen from "../screens/SettingsScreen";
import Icon from "../ui/Icon";
import Color from "../ui/Color";

const Route = {
  Main: "Main",
  Analytics: "Analytics",
  Settings: "Settings"
};

const getIconName = (routeName: string) =>
  ({
    [Route.Main]: "calendar",
    [Route.Analytics]: "chart",
    [Route.Settings]: "sliders"
  }[routeName]);

interface TabBarIndicatorProps {
  activeIndex: number;
}

class TabBarIndicator extends React.Component<TabBarIndicatorProps> {
  state = {
    xTranslation: new Animated.Value(0)
  };

  componentDidUpdate() {
    Animated.timing(this.state.xTranslation, {
      toValue: this.props.activeIndex,
      duration: 300
    }).start();
  }

  render() {
    return (
      <Animated.View
        style={{
          ...styles.tabBarIndicator,
          left: this.state.xTranslation.interpolate({
            inputRange: [0, 2],
            outputRange: ["0%", "66.6%"]
          })
        }}
      />
    );
  }
}
const TabBarComponent = (props: any) => <BottomTabBar {...props} />;

export default createBottomTabNavigator(
  {
    [Route.Main]: MainScreen,
    [Route.Analytics]: AnalyticsScreen,
    [Route.Settings]: SettingsScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const name = getIconName(navigation.state.routeName);
        const color = focused ? "sky" : "gray";

        return <Icon name={name} color={color} />;
      }
    }),
    tabBarComponent: props => {
      return (
        <>
          <TabBarIndicator activeIndex={props.navigation.state.index} />
          <TabBarComponent {...props} style={styles.tabBar} />
        </>
      );
    },
    tabBarOptions: {
      showLabel: false,
      style: {
        paddingTop: 0,
        borderTopWidth: 0
      },
      activeTintColor: Color.Sky,
      inactiveTintColor: Color.Gray
    }
  }
);

const styles = StyleSheet.create({
  tabBarIndicator: {
    height: 4,
    width: "33.33%",
    backgroundColor: Color.Sky
  },
  tabBar: {
    paddingTop: 11,
    borderTopWidth: 0
  }
});
