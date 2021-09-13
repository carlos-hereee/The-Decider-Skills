import React, { useContext, useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { HandbookContext } from "../utils/Context";
import Card from "./Card";

const HandbookSkill = ({ skills }) => {
  const { resetActive } = useContext(HandbookContext);
  const [activeSkill, setActiveSkill] = useState(skills[0]);
  return (
    <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <View style={{ paddingTop: 60 }}>
        <Pressable onPress={() => resetActive()} style={styles.goBack}>
          <FontAwesomeIcon icon={faArrowLeft} color="#2185d6" size={45} />
        </Pressable>
      </View>
      <View>
        <Card data={activeSkill} />
        <FlatList
          data={skills}
          horizontal
          renderItem={({ item }) => (
            <Pressable
              onPress={() => setActiveSkill(item)}
              style={
                activeSkill === item
                  ? [styles.listItem, { backgroundColor: "#CBE9ED" }]
                  : styles.listItem
              }>
              <Image
                source={{ uri: item.imageUrl, width: 100, height: 100 }}
                resizeMode="contain"
              />
              <Text style={{ fontWeight: "700", textAlign: "center" }}>
                {item.name.toUpperCase()}
              </Text>
            </Pressable>
          )}
        />
      </View>
    </View>
  );
};
export default HandbookSkill;

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EFF5FA",
    marginHorizontal: 10,
    padding: 5,
    width: 100,
    height: 130,
    borderRadius: 4,
    elevation: 5,
  },
});
