import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const Card = ({ data }) => {
  return (
    <View style={styles.card}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}>
        {data.imageUrl ? (
          <Image source={{ uri: data.imageUrl, width: 150, height: 150 }} />
        ) : (
          <FontAwesomeIcon icon={faSearch} />
        )}
        <Text style={{ fontSize: 24, marginLeft: 10 }}>{data.name}</Text>
      </View>
      <Text style={{ marginTop: 10 }}>{data.definition}</Text>
    </View>
  );
};
export default Card;

const styles = StyleSheet.create({
  card: {
    marginTop: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
  },
});
