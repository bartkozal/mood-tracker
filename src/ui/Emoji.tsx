import React from "react";
import { Image, ImageSourcePropType } from "react-native";

interface Props {
  mood: string;
}

export default class Emoji extends React.Component<Props> {
  render() {
    const { mood } = this.props;

    return (
      <Image
        style={{
          margin: 8
        }}
        source={EmojiList.find(emoji => emoji.name === mood)!.source}
      />
    );
  }
}

export const EmojiList = [
  {
    name: "grin",
    source: require("../../assets/emojis/grin.png")
  },
  {
    name: "smile",
    source: require("../../assets/emojis/smile.png")
  },
  {
    name: "neutral",
    source: require("../../assets/emojis/neutral.png")
  },
  {
    name: "sad",
    source: require("../../assets/emojis/sad.png")
  },
  {
    name: "cry",
    source: require("../../assets/emojis/cry.png")
  },
  {
    name: "sleeping",
    source: require("../../assets/emojis/sleeping.png")
  },
  {
    name: "love",
    source: require("../../assets/emojis/love.png")
  },
  {
    name: "zany",
    source: require("../../assets/emojis/zany.png")
  },
  {
    name: "party",
    source: require("../../assets/emojis/party.png")
  },
  {
    name: "cool",
    source: require("../../assets/emojis/cool.png")
  },
  {
    name: "scream",
    source: require("../../assets/emojis/scream.png")
  },
  {
    name: "sick",
    source: require("../../assets/emojis/sick.png")
  },
  {
    name: "what",
    source: require("../../assets/emojis/what.png")
  },
  {
    name: "angry",
    source: require("../../assets/emojis/angry.png")
  },
  {
    name: "rage",
    source: require("../../assets/emojis/rage.png")
  }
];
