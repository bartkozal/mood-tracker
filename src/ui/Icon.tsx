import React from "react";
import { Image } from "react-native";

interface Props {
  name: string;
  color: "gray" | "sky" | "ink";
  size?: number;
}

export default class Icon extends React.Component<Props> {
  static defaultProps = {
    size: 32
  };

  render() {
    const { name, color, size } = this.props;

    return (
      <Image
        style={{
          width: size,
          height: size
        }}
        source={IconList.find(icon => icon.name === `${name}-${color}`)!.source}
      />
    );
  }
}

export const IconList = [
  {
    name: "calendar-gray",
    source: require("../../assets/icons/calendar-gray.png")
  },
  {
    name: "calendar-sky",
    source: require("../../assets/icons/calendar-sky.png")
  },
  {
    name: "chart-gray",
    source: require("../../assets/icons/chart-gray.png")
  },
  {
    name: "chart-sky",
    source: require("../../assets/icons/chart-sky.png")
  },
  {
    name: "sliders-gray",
    source: require("../../assets/icons/sliders-gray.png")
  },
  {
    name: "sliders-sky",
    source: require("../../assets/icons/sliders-sky.png")
  },
  {
    name: "chevron-left-ink",
    source: require("../../assets/icons/chevron-left-ink.png")
  },
  {
    name: "chevron-right-ink",
    source: require("../../assets/icons/chevron-right-ink.png")
  }
];
