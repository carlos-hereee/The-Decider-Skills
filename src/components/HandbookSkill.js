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
      <View style={styles.cardContainer}>
        <Card data={activeSkill} />
        <View style={{ overflowY: "scroll", height: "35%" }}>
          <FlatList
            data={skills}
            numColumns={3}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => setActiveSkill(item)}
                style={styles.listItem}>
                <Image
                  source={{ uri: item.imageUrl, width: 100, height: 100 }}
                  resizeMode="contain"
                />
                <Text style={{ fontWeight: "700", textAlign: "center" }}>
                  {item.name}
                </Text>
              </Pressable>
            )}
          />
        </View>
      </View>
    </View>
  );
};
export default HandbookSkill;

const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  listItem: {
    backgroundColor: "#CBE9ED",
    margin: 10,
    width: "25%",
    textAlign: "center",
    elevation: 5,
  },
});
