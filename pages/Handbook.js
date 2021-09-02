import React from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import lifeSkills from "../utlis/data.json";

const Handbook = () => {
  const handlePress = (item) => {
    console.log("item", item);
  };
  return (
    <View style={styles.handbookMenu}>
      <FlatList
        data={lifeSkills}
        numColumns={2}
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => handlePress(item)}
            style={[styles.handbookSkill, { backgroundColor: item.color }]}>
            <Text style={{ fontSize: 24 }}>{item.title}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};
export default Handbook;

const styles = StyleSheet.create({
  handbookMenu: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
  },
  handbookSkill: {
    width: 200,
    margin: 10,
    padding: 10,
    borderWidth: 1,
    width: 175,
  },
});
