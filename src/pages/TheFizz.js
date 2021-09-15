import React, { useContext, useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import HandbookSkill from "../components/HandbookSkill";
import { HandbookContext } from "../utils/Context";
import data from "../utils/theFizz.json";

const TheFizz = () => {
  const { active, skills, makeActive } = useContext(HandbookContext);
  const [withFizz, setWithFizz] = useState({});

  const handlePress = (item) => {
    setWithFizz(item);
    makeActive({ title: item.name, skills: data.theFizz });
  };
  return active ? (
    <HandbookSkill skills={skills} withFizz={withFizz} />
  ) : (
    <View style={styles.menu}>
      <FlatList
        data={data.theFizz}
        numColumns={3}
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
        renderItem={({ item }) => (
          <Pressable onPress={() => handlePress(item)} style={styles.listItem}>
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
  );
};
export default TheFizz;

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d4e2e6",
  },
  listItem: {
    backgroundColor: "#EFF5FA",
    marginHorizontal: 10,
    padding: 5,
    margin: 10,
    width: 110,
    borderRadius: 4,
    elevation: 5,
  },
});
