import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useContext, useState } from "react";
import {
  Button,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { HandbookContext } from "../utlis/Context";
import Card from "./Card";

const HandbookSkill = ({ skills }) => {
  const { resetActive } = useContext(HandbookContext);
  const [activeSkill, setActiveSkill] = useState(skills[0]);
  return (
    <View style={styles.container}>
      <Pressable onPress={() => resetActive()} style={styles.goBack}>
        <FontAwesomeIcon icon={faArrowLeft} color="white" />
        <Text style={{ color: "white", marginLeft: 5 }}>Go Back</Text>
      </Pressable>
      <Card data={activeSkill} />
      <View style={{ margin: "auto" }}>
        <FlatList
          data={skills}
          numColumns={3}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => setActiveSkill(item)}
              style={styles.listItem}>
              <Image source={{ uri: item.imageUrl, width: 100, height: 100 }} />
              <Text>{item.name}</Text>
            </Pressable>
          )}
        />
      </View>
    </View>
  );
};
export default HandbookSkill;

const styles = StyleSheet.create({
  listItem: { margin: 10, width: "25%", textAlign: "center" },
  goBack: {
    margin: 10,
    width: "25%",
    textAlign: "center",
    backgroundColor: "gray",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
    borderRadius: 4,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 10,
  },
});
