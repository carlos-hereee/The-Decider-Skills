import React from "react";
import { Image, Text, View } from "react-native";

const Card = ({ data }) => {
  return (
    <View>
      <Text>{data.name}</Text>
      <Image source={{ uri: data.imageUrl, width: 200, height: 200 }} />
      <Text>{data.definition}</Text>
    </View>
  );
};
export default Card;
