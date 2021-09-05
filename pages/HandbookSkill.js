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
import { HandbookContext } from "../utlis/Context";
import Card from "./Card";

const HandbookSkill = ({ skills }) => {
  const { resetActive } = useContext(HandbookContext);
  const [activeSkill, setActiveSkill] = useState(skills[0]);
  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginTop: 20 }}>
        <Pressable onPress={() => resetActive()} style={styles.goBack}>
          <FontAwesomeIcon icon={faArrowLeft} color="#2185d6" size={45} />
        </Pressable>
        <Card data={activeSkill} />
      </View>
      <View style={{ margin: "auto", overflowY: "scroll", maxHeight: 300 }}>
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
              <Text style={{ fontWeight: "700" }}>{item.name}</Text>
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
    margin: 10,
    width: "25%",
    textAlign: "center",
  },
  goBack: {
    width: "25%",
    textAlign: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
});
