import React, { useContext, useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from "react-native";
import HandbookSkill from "../components/HandbookSkill";
import { HandbookContext } from "../utils/Context";
import data from "../utils/theFizz.json";

const TheFizz = () => {
  const { active, skills, makeActive } = useContext(HandbookContext);
  const [withFizz, setWithFizz] = useState({});
  const { width, height } = Dimensions.get("window");

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
          <Pressable
            onPress={() => handlePress(item)}
            style={[
              styles.listItem,
              { width: width / 3.3, height: height / 6 },
            ]}>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Image
                source={{ uri: item.imageUrl }}
                resizeMode="contain"
                style={{ width: width / 6, height: width / 6 }}
              />
            </View>
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
    padding: 5,
    backgroundColor: "#EFF5FA",
    margin: 5,
    borderRadius: 4,
    elevation: 10,
  },
});
